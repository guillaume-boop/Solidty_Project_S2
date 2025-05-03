🚀 Projet Web3 - Front / Back / Smart Contracts


Ce projet est composé de trois parties principales :

front/ : contient la landing page et l'application principale.

back/ : logique serveur et API si nécessaire.

smart-contract/ : contrats intelligents déployables sur la blockchain.

📦 Installation et lancement
1. Cloner le dépôt




git clone <url_du_repo>


cd front/App



2. Installer les dépendances




npm install


3. Lancer l'application


bash


npm run dev


Accède à l'application via : http://localhost:5173



🛠️ Prérequis


Crée un compte sur Dynamics



Active le wallet en mode sandbox



Ajoute les champs suivants dans les champs requis de Dynamics :



username

name

lastname



Récupère l'identifiant de ton environnement



🔐 Configuration de l’environnement


Dans le dossier /front/App, crée un fichier .env :


'VITE_DYNAMICS_API_KEY='ton-environnement-id'


⚠️ Assure-toi de ne pas commiter ce fichier .env dans le dépôt public.

📁 Arborescence du projet



/front
  ├── index.html/
  └── App/

/back
  └── ...code serveur

/smart-contract
  └── ...contrats Solidity