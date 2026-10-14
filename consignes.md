# Étape 6 — Empêcher les tâches vides
Votre application ne doit pas permettre d'ajouter une tâche vide. C'est à dire, elle ne doit ajouetr une tâche que s'il y a du contenu. Testez notamment :

un champ complètement vide ;
un champ contenant uniquement des espaces.
Utilisez .trim() pour gérer ce deuxième cas (allez voir la doc pour comprendre ce que ça fait)

Critères de validation:
Une tâche vide ne doit pas être ajoutée à la liste.

# Étape 7 — Vider le champ
Après avoir ajouté une tâche :

videz le champ de saisie ;
(bonus) replacez éventuellement le curseur dans le champ.

Critères de validation:
Après chaque ajout, l'input doit être prêt à recevoir une nouvelle tâche.

# Étape 8 — Ajouter un bouton Supprimer
Modifiez la création de vos tâches. Chaque <li> doit maintenant conteinr un bouton de suppression et ressembler à ceci :

Faire les courses [Supprimer]
(... en adaptant le "Faire les courses" hein !)

Pour cela :
Créez un bouton avec document.createElement().
Donnez-lui le texte "Supprimer".
Ajoutez-le dans le <li>.

Critères de validation:
Chaque item de ma todo-list contient maintenant un bouton Supprimer

# Étape 9 — Supprimer une tâche
Ajoutez un événement click au bouton Supprimer. Lorsque l'utilisateur clique dessus, le <li> correspondant doit disparaître.

Cherchez comment utiliser : element.remove()

Critères de validation:
Si vous avez trois tâches et que vous supprimez la deuxième, seules les première et troisième doivent rester.

# Étape 10 — Marquer une tâche comme terminée
Lorsqu'un utilisateur clique sur le texte d'une tâche, celle-ci doit être considérée comme terminée.

Exemple :
☐ Faire les courses
☑ Faire les courses
(le style est au choix, perdez pas 4h à chercher comment afficher une checkbox... Je veux juste une différence visuelle, n'importe laquelle)

Pour cela :
Créez une classe CSS appelée par exemple .completed.
Donnez-lui un style permettant de voir que la tâche est terminée.
Utilisez classList.toggle() pour ajouter ou retirer cette classe.
Exemple de style : Une tâche terminée pourrait être barrée.

Critères de validation:
Si je clique sur un item de la liste (pas sur le bouton Supprimer), il change d'apparence pour signaler que la tache est faite

# Étape 11 — Ajouter une tâche avec Entrée
L'utilisateur ne doit pas être obligé de cliquer sur le bouton.

Lorsqu'il appuie sur la touche Entrée dans le champ de saisie, la tâche doit être ajoutée.

Vous devrez écouter un événement clavier.

Indices : "keydown", event.key

Critères de validation:
Si je rentre du texte dans l'input et tape sur "Entrée", l'item apparait comme si j'avais cliqué sur le bouton

# Étape 12 — Réorganiser votre code
Votre code commence à devenir plus important... Créez des fonctions pour séparer les responsabilités. Par exemple, vous pourriez avoir une fonction qui :

ajoute une tâche ;
crée l'élément HTML correspondant ;
met à jour l'affichage.
Le but est d'éviter d'avoir tout votre programme dans un seul gros bloc difficilement lisible.


# Livrables
Un repo GHub contenant
- readme.md
- index.html
- todolist.js
- style.css

# Critères de performance
- L'application fonctionne comme demandé
- Le code est valide W3C
- La console reste vide lors des tests