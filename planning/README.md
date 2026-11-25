# Planning — app téléphone

App de planning très simple (PWA : s'installe sur l'écran d'accueil, marche hors-ligne).

- **Couleurs** : chaque tâche a sa propre couleur (aléatoire, bouton 🎲 pour en changer) ; le **petit carré** devant le titre indique l'importance : rouge (urgent), orange (important), jaune (normal), blanc (faible). **Vert** = terminée, **violet** = bloquée, grisée barrée = abandonnée.
- **Jours** : couleur fixe — lundi gris, mardi jaune, mercredi orange, jeudi bleu, vendredi vert, samedi rouge, dimanche blanc. Chaque jour est coupé en **Matin** / **Après-midi** : on glisse la tâche dans la demi-journée voulue (ou on choisit dans le menu de la tâche).
- **Planning** : semaines en colonnes verticales (lundi → dimanche), la semaine actuelle à gauche, de 1 à 8 semaines côte à côte (boutons − / +), navigation ‹ Auj. ›.
- **Glisser-déposer** : appui long sur une tâche puis glisser vers un autre jour (ou vers « À planifier »).
- **Étaler sur plusieurs jours** (menu de la tâche → Durée, de 1 à 14 jours) : ça ne crée pas de nouvelle tâche ; la tâche reste dans « À planifier » (×2 = 2 jours encore à placer) et on la glisse autant de fois que nécessaire. Dans le planning, chaque case affiche j1/3, j2/3… et chaque jour peut être marqué « Journée faite ».
- **Besoins** : chaque tâche a sa liste (ex. « 2 paquets de vis »), visible dans l'onglet 🛒 Besoins où on les coche une fois obtenus. 🛒2 sur une tâche = 2 besoins à obtenir.
- **Toucher une tâche** : Terminé, Barrer, Reporter (+1 jour, +1 semaine, date au choix), Bloquer (violet + ajout aux attentes), changer la couleur, Modifier, Supprimer. « Annuler » dans le message en bas pour revenir en arrière.
- **Fenêtre Attentes** (toujours visible en haut) : colis, pièces, outils… Devient orange le jour de l'arrivée prévue. « Reçu » débloque automatiquement la tâche liée.
- **Catégories** (Réglages → Catégories) : trois listes modifiables — Tâches, Attentes, Besoins. Ajouter, renommer ✎ (tout ce qui l'utilise suit), monter ↑, supprimer ✕ (les éléments passent en « Sans catégorie »). Les attentes sont regroupées par catégorie dans la fenêtre Attentes ; l'onglet Besoins peut s'afficher « Par tâche » ou « Par catégorie » (pratique comme liste de courses). Toucher une attente ou un besoin permet de le modifier.
- **Notifications** (Réglages → Activer) : résumé des tâches du jour, en retard, des colis attendus et des besoins non remplis.
- **Sauvegarde** : données stockées sur le téléphone, export/import d'un fichier JSON dans Réglages.

## Installation
L'app doit être servie en HTTPS, par exemple avec GitHub Pages
(Settings → Pages → Branch, dossier `/ (root)`), puis ouvrir `https://<utilisateur>.github.io/<dépôt>/planning/`.

- **Android (Chrome)** : menu ⋮ → « Installer l'application ».
- **iPhone (Safari)** : Partager → « Sur l'écran d'accueil », puis ouvrir l'app installée et activer les notifications (iOS 16.4 minimum).
