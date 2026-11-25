/* Service worker : hors-ligne + rappel périodique (Android / Chrome installé) */
const VERSION = 'planning-v1';
const SHELL = ['./', 'index.html', 'manifest.json', 'icon.svg', 'icon-192.png', 'icon-512.png', 'badge-96.png'];
const STATE = 'planning-state';
const TAG = 'planning-resume';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== STATE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // réseau d'abord (pour recevoir les mises à jour), cache si hors-ligne
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});

const pad = n => String(n).padStart(2, '0');
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const RANK = { red: 0, orange: 1, yellow: 2, white: 3 };
const ICON = { red: '🔴', orange: '🟠', yellow: '🟡', white: '⚪' };

function summary(st) {
  const t = today();
  const act = (st.tasks || []).filter(x => x.status === 'todo' || x.status === 'blocked');
  const sort = (a, b) => RANK[a.prio] - RANK[b.prio];
  const late = act.filter(x => x.date && x.date < t).sort(sort);
  const tod = act.filter(x => x.date === t).sort(sort);
  const arr = (st.waits || []).filter(w => w.date && w.date <= t);
  const ic = x => x.status === 'blocked' ? '🟣' : (ICON[x.prio] || '•');
  const lines = [], parts = [];
  if (late.length) lines.push(`⚠ En retard : ${late.map(x => ic(x) + ' ' + x.title).join(', ')}`);
  if (tod.length) lines.push(`📌 Aujourd'hui : ${tod.map(x => ic(x) + ' ' + x.title).join(', ')}`);
  if (arr.length) lines.push(`📦 Attendu : ${arr.map(w => w.title).join(', ')}`);
  if (tod.length) parts.push(`${tod.length} aujourd'hui`);
  if (late.length) parts.push(`${late.length} en retard`);
  if (arr.length) parts.push(`${arr.length} colis`);
  return { count: late.length + tod.length + arr.length, title: 'Planning · ' + parts.join(' · '), body: lines.join('\n') };
}
async function firstToday() {
  const c = await caches.open(STATE), k = new URL('__loud', self.registration.scope), d = today();
  const r = await c.match(k); if (r && (await r.text()) === d) return false;
  await c.put(k, new Response(d)); return true;
}
async function check() {
  const c = await caches.open(STATE);
  const r = await c.match(new URL('__state', self.registration.scope));
  if (!r) return;
  const s = summary(await r.json());
  if (!s.count) { (await self.registration.getNotifications({ tag: TAG })).forEach(n => n.close()); return; }
  const loud = await firstToday();
  await self.registration.showNotification(s.title, {
    body: s.body, tag: TAG, renotify: loud, silent: !loud, requireInteraction: true,
    icon: 'icon-192.png', badge: 'badge-96.png', data: { url: self.registration.scope }
  });
}
self.addEventListener('periodicsync', e => { if (e.tag === 'planning-check') e.waitUntil(check()); });
self.addEventListener('message', e => { if (e.data === 'check') e.waitUntil(check()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) return c.focus();
    return self.clients.openWindow(self.registration.scope);
  }));
});
