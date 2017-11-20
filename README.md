## Configuration requise :

- Node.js 8
- Une base MySQL/MariaDB

## Installation

- `npm install`
- `npm run generate-config` : génère un fichier `config/config.json` contenant des données spécifique à chaque installation (n'est pas commité) : infos de base de données, secret d'express-session, etc.
- (Optionnel) `npm run seed-database` : Injecte de fausses données dans la base de données. Utilise les données de l'objet `seedingData` dans le fichier de configuration
- `npm start` : Lance le serveur à localhost:3000

** /!\ ** Tout commit sur master est automatiquement déployé sur le serveur de dev
