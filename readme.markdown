# le courrier de l'hydre
*un blog simpliste pour pouvoir poster des nouvelles en voyage.*

## idée de base

un site statique modifiable depuis github, les images sont hébergées ailleurs
(pour l'instant sur [imgur](http://imgmonke.imgur.com) faute de mieux).

## comment poster

1. upload de l'image (si image il y a)
2. écriture du post dans posts.json
3. ajout des flags
4. recopiage du post dans feed.xml (si pas de flag "draft")

c'est prêt !

## les flags

* "draft" éjecte le post de la liste des posts publiés
* "text-only" cache l'image
