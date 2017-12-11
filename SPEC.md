# Plateforme événementielle Insoumis

## Objectif :

Proposer une webapp simplifiant l'organisation d'évènements autour de la FI à l'échelle nationale et locale.

Un organisateur pourra créer un évènement dans lequel plusieurs "modules" seront disponibles. Le premier de ces modules est un module d'hébergement.

## Les utilisateurs

Toute personne ayant un compte FI peut accéder à l'app.

- Un utilisateur lambda peut consulter les évènements disponibles et utiliser les modules de chaque évènement.
- Un organisateur est un utilisateur ayant été promu par un administrateur. En plus des fonctionnalités du lambda, il/elle peut créer un évènement et le modérer.
- Un administrateur peut promouvoir un utilisateur lambda en organisateur et créer, modifier, modérer et supprimer tous les évènements.

## Module d'hébergement :

Le but du module d'hébergement est de permettre aux utilisateurs de proposer un endroit pour dormir aux militants (couchsurfing insoumis)

Pour chaque évènement, un lambda peut :

- Remplir des informations personnelles :
    - Nom
    - Informations de contact

- Créer une (seule) annonce contenant :
    - Un titre
    - Une description
    - Un nombre de places disponibles

- Supprimer son annonce

- Postuler à une annonce avec :
    - Un message

- Annuler une postulation

- Visionner les postulations à son annonce. Une postulation contient :
    - Le message envoyé lors de la postulation
    - Les informations personnelles de l'utilisateur. Cela permettra à l'hébergeur de rentrer en contact avec les postulants.

- Accepter une postulation à son annonce
    - Le nombre de places disponibles est alors réduit de 1

- Rejeter une postulation à son annonce

- Recevoir des alertes courriel quand :
    - Quelqu'un a postulé à son annonce
    - Une de ses postulations a été acceptée
    - Une de ses postulations a été rejetée