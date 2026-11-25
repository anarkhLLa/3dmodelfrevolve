# Planning — app téléphone

App de planning très simple (PWA : s'installe sur l'écran d'accueil, marche hors-ligne).

- **Couleurs** : rouge (urgent), orange (important), jaune (normal), blanc (faible), **vert** = terminée, **violet** = bloquée (en attente de quelque chose), grisée barrée = abandonnée.
- **Planning** : semaines en colonnes verticales (lundi → dimanche), la semaine actuelle à gauche, de 1 à 8 semaines côte à côte (boutons − / +), navigation ‹ Auj. ›.
- **Glisser-déposer** : appui long sur une tâche puis glisser vers un autre jour (ou vers « À planifier »).
- **Toucher une tâche** : Terminé, Barrer, Reporter (+1 jour, +1 semaine, date au choix), Bloquer (violet + ajout aux attentes), changer la couleur, Modifier, Supprimer. « Annuler » dans le message en bas pour revenir en arrière.
- **Fenêtre Attentes** (toujours visible en haut) : colis, pièces, outils… Devient orange le jour de l'arrivée prévue. « Reçu » débloque automatiquement la tâche liée.
- **Notifications** (Réglages → Activer) : résumé des tâches du jour, en retard et des colis attendus.
- **Sauvegarde** : données stockées sur le téléphone, export/import d'un fichier JSON dans Réglages.

## Installation
L'app doit être servie en HTTPS, par exemple avec GitHub Pages
(Settings → Pages → Branch, dossier `/ (root)`), puis ouvrir `https://<utilisateur>.github.io/<dépôt>/planning/`.

- **Android (Chrome)** : menu ⋮ → « Installer l'application ».
- **iPhone (Safari)** : Partager → « Sur l'écran d'accueil », puis ouvrir l'app installée et activer les notifications (iOS 16.4 minimum).
