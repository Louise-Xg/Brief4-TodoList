# Todo List en JS - Lvl2

Cadre : Formation DWWM. Le but est de créer une page "To-do List" permettant notamment :

- d’ajouter une tâche à une liste ;
- d’empêcher l’ajout d’une tâche vide ;
- de supprimer une tâche ;
- de marquer une tâche comme terminée ;
- d’ajouter une tâche en appuyant sur la touche Entrée ;
- de vider le champ de saisie après l’ajout ;
- de replacer le focus dans le champ de saisie.

Cette branche "lvl2" contient :

- readme.md : le readme présente le contexte et les fichiers contenus au sein du répertoire/branche.
- index.html : le fichier html contenant le squelette de la page.
- todolist.js : le fichier javascript contenant l'ajout de tâches, validation du champ de saisie, suppression d’une tâche, marquage d’une tâche comme terminée, ajout via la touche Entrée, vidage du champ et remise du focus après l’ajout.

## Problèmes rencontrés

- Comprendre la portée des variables lorsque certaines étaient déclarées à l’intérieur d’un `addEventListener`.
- Éviter de placer un nouvel `addEventListener` à l’intérieur d’un autre événement.