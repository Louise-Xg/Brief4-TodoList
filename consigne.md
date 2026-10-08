# Consignes : 
 ## Étape 1 — Préparer le HTML

Créez une page contenant :

un titre ToDo List
un champ <input> permettant de saisir une tâche
un bouton Ajouter
une liste <ul> vide
Critères de validation:

La page s'affiche correctement
Le champ et le bouton sont présents
La liste est vide au chargement

## Étape 2 — Relier JavaScript au HTML

Créez un fichier JS et liez-le à votre page HTML.

Dedans, récupérez dans des constantes :

le champ de saisie
le bouton
la liste
(tip: Utilisez querySelector())

Critères de validation:

Vous devez pouvoir afficher dans la console les éléments récupérés

## Étape 3 — Réagir au clic

Ajoutez un événement click sur le bouton Ajouter.

Pour commencer, affichez dans la console un message (ex: "Button waz clicked !")

Critères de validation: Chaque clic sur le bouton doit afficher le message dans la console.

## Étape 4 — Récupérer la tâche

Lorsque l'utilisateur clique sur Ajouter, récupérez le contenu de l'input et affichez-le dans la console.

Critères de validation: Si je renseigne "Faire les courses" dans le champ et clique le bouton Ajouter, je vois le message "Faire les courses" dans la console

## Étape 5 — Créer un élément HTML

Lorsque l'utilisateur ajoute une tâche :

Créez un élément <li> (document.createElement)
Ajoutez le texte de la tâche dans cet élément (innerText)
Ajoutez le <li> dans la <ul> (appendChild)

Critères de validation: (1) Je peux ajouter une tache à ma liste en validant le formulaire (2) Je peux ajouter une seconde tache à ma liste sans supprimer la première

# Livrables : 
Un repo GHub contenant
- readme.md
- index.html
- todolist.js
- (optionnel) style.css

# Critères de performance :

- L'application fonctionne comme demandé
- Le code est valide W3C
- La console reste vide lors des tests