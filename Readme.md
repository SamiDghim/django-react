

1
python3 -m venv env
-> ça evite les conflits de dépendances entre différents projets Python en isolant les bibliothèques installées pour chaque projet.

2
chmod +x env/bin/activate && source env/bin/activate
➜ env/bin/activate
zsh: permission denied: env/bin/activate


3- install django and djangorestframework
pip install django djangorestframework

4- install django-cors
pip install django-cors-headers
-> pour permettre les requêtes cross-origin dans une application Django.
autorisé l'application front à accéder aux ressources de l'API Django depuis un domaine différent.


5- create a new django project
django-admin startproject backend .
-> crée une nouvelle structure de projet Django nommée "backend" dans le répertoire courant, 
un projet Django est une collection de configurations et d'applications pour un site web spécifique.

6- create a new django app
django-admin startapp api
-> crée une nouvelle application Django nommée "api" dans le répertoire courant,
une application Django est une sous-composante d'un projet qui gère une fonctionnalité spécifique.

7 - create models
-> définit la structure des données pour l'application "api",

8 - make migrations
python3 manage.py makemigrations api
-> crée des fichiers de migration basés sur les modifications apportées aux modèles de l'application "api".

9 - apply migrations
python3 manage.py migrate
-> applique les migrations à la base de données, créant ou modifiant les tables selon les modèles définis.

10 - run sever
python3 manage.py runserver
-> démarre le serveur de développement Django, permettant de tester l'application localement.

11 -serializers
-> convertit les instances de modèles Django en formats de données (comme JSON) et vice versa,
 facilitant la communication entre l'API et les clients.

 12- api urls
-> définit les routes spécifiques pour l'application "api",
 permettant de mapper les URL aux vues correspondantes.

13 - project urls
-> inclut les routes de l'application "api" dans les URL globales du projet Django,
 assurant que les requêtes vers les endpoints de l'API sont correctement dirigées.

14 - views
-> gère la logique de traitement des requêtes et des réponses pour l'application "api",
 déterminant comment les données sont récupérées, manipulées et renvoyées aux clients.