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

## évolutions possibles

* catégories (sans doute un caractère devant un flag signifiant qu'on peut le
  chercher là: ce n'est pas une vraie page mais juste une facon de sélectionner certains tags
  et pas d'autres), ex : un flag "@news" créerait une catégorie news où le post serait labellé
  "#news/titre-du-post"
* un format plus simple pour les posts: en même temps c'est bien d'en avoir plein dans un seul
  fichier, et en même temps marre de découper chaque ligne, c'est nul.
* une archive de posts : pas forcément visible mais il faut que je sois capable de partir
  sur un nouveau fichiers post quand l'ancien devient trop volumineux.
* une porte de sortie possible ? je me recode tout ca en html simple sans js :)
