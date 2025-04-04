---
title: "Quoi de neuf sur l'inventaire des codes sources ?"
description: "Une interface plus efficace, des données plus complètes"
date: 2024-11-29
image:
  path: ./code-gouv-fr-home-112024.png
  alt: "Capture d'écran de l'inventaire des codes sources effectuée le 30 novembre 2024."
tags: Sources
---

## En résumé

Le site [code.gouv.fr/sources](https://code.gouv.fr/sources) permet d'explorer les codes sources publiés par des administrations. Cet inventaire est utile aux administrations, qui peuvent vérifier qu'une solution n'est pas déjà développée par une autre, aux citoyens, qui peuvent savoir quelles administrations sont les plus engagées dans la transparence de leurs développements informatiques, et à toute structure qui peut y trouver des codes sources à réutiliser.

Au fil des ans, **quatre besoins forts** nous ont été remontés :

- une sélection de projets immanquables ;
- une vue par ministère des comptes d'organisation existants ;
- des incitations concrètes aux bonnes pratiques ;
- des données plus riches et exploitables par tous.

<br/>

C'est ce à quoi nous avons travaillé pour cette mise à jour :

- les projets immanquables sont [publiés via la liste « Awesome »](https://code.gouv.fr/sources/#/awesome) ;
- la page dédiée aux organisations propose un [filtre par ministère](https://code.gouv.fr/sources/#/groups) ;
- nous avons introduit un score pour les dépôts ;
- nous avons enrichi les données exposées via [ecosystem.code.gouv.fr](https://ecosystem.code.gouv.fr).

<br/>

## Awesome code.gouv.fr : à ne pas manquer

{% imageContent "./code-gouv-fr-awesome-112024.png", "Un aperçu de la liste des projets immanquables dont le code source est publié", [1000] %}

[Awesome code.gouv.fr](https://code.gouv.fr/sources/#/awesome), c'est la liste des projets logiciels développés par des administrations et qui présentent un fort potentiel de réutilisation. Nous avions commencé cette liste il y a quelques mois en créant nous-mêmes les fichiers `publiccode.yml` décrivant les projets ; ces fichiers `publiccode.yml` sont désormais publiés à la racine des dépôts des projets Awesome.  Pour être tenus au courant des nouvelles versions des projets Awesome, nous proposons [ce flux RSS](https://code.gouv.fr/data/latest-releases.xml).

Le standard [publiccode.yml](https://github.com/publiccodeyml/publiccode.yml) permet de décrire un projet logiciel, à l'instar de [codemeta](https://codemeta.github.io/).  Nous encourageons à l'utilisation de ce standard pour les projets des administrations hors enseignement supérieur et recherche (ESR), où le standard `codemeta` est, lui, plus utilisé.  La mission logiciels libres de la DINUM participe à la gouvernance du standard `publiccode.yml` pressenti pour être celui qu'utilisera le futur catalogue des logiciels libres des pays membres de l'Union européenne.

## Les nouveautés de l'interface

{% imageContent "./code-gouv-fr-repos-112024.png", "Les dépôts de code source ont désormais un score", [1000] %}

L'inventaire des codes sources contient désormais plus de 20000 dépôts : c'est beaucoup ! Comment les classer ? Le classement précédent par réutilisations n'était pas satisfaisant, car il s'appuyait sur des données qui disponibles seulement quand le projet était hébergé sur GitHub. Nous classons désormais les projets grâce à un score.

Comment est calculé le score ?  En fonction de l'existence d'une licence identifiée, de savoir si le dépôt est un modèle (« template »), s'il a un fichier `publiccode.yml`, un fichier `README`, un fichier `CONTRIBUTING.md`, etc.  En bref : si l'ensemble des pratiques identifiables via ces tests permet de le rapprocher d'un projet qui pourrait intégrer la liste Awesome code.gouv.fr. Vous trouverez le calcul exact du score dans [ce fichier de code](https://github.com/codegouvfr/codegouvfr-cli/blob/main/src/codegouvfr-output-data.clj) : n'hésitez pas à critiquer nos critères et à proposer des améliorations.

En plus de l'introduction de ce score, nous avons rendu la recherche plus fiable et ajouté une page dédiée pour chaque dépôt, chaque organisation, chaque projet Awesome.

## Les nouveautés côté données

{% imageContent "./ecosystem-code-gouv-fr-112024.png", "ecosystem.code.gouv.fr expose des données fraîches et détaillées sur tous les codes sources", [1000] %}

Le gros de nos efforts s'est porté sur la façon dont nous collectons les données exposées dans l'inventaire. Depuis un an, nous contribuons aux codes sources développés dans le cadre du projet [ecosyste.ms](https://github.com/ecosyste-ms/).  Ces améliorations ont permis de déployer [ecosystem.code.gouv.fr](https://ecosystem.code.gouv.fr) et nous espérons qu'elles aideront aussi d'autres pays à déployer ecosyste.ms pour leurs propres besoins.

Voici ce que nous avons gagné :

- la possibilité de collecter des données sur tout type de forges : GitHub, GitLab, Gitea, Gogs, etc ;
- la possibilité de brancher de futurs services pour des données sur les commits, les dépendances, etc ;
- des API pour chaque service proposé par ecosyste.ms.

<br/>

Vous pouvez notamment explorer l'[API principale](https://ecosystem.code.gouv.fr/docs/index.html).  Nous sommes impatients de continuer à déployer des services !

## Des statistiques plus visuelles

{% imageContent "./code-gouv-fr-stats-112024.png", "Quelques statistiques pour se faire une idée", [1000] %}

*Last but not least*, nous avons rendu les [statistiques un peu plus parlantes](https://code.gouv.fr/sources/#/stats) : si vous en voulez d'autres, toutes les données présentées via l'interface web sont publiées dans ce [jeu de données data.gouv.fr](https://www.data.gouv.fr/fr/datasets/inventaire-des-codes-sources-de-logiciels-publies-par-des-organismes-publics/).

Pour nous remonter des problèmes ou des suggestions, écrivez à [floss@numerique.gouv.fr](mailto:floss@numerique.gouv.fr).
