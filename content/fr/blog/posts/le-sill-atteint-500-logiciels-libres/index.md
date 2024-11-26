---
title: "Le SILL atteint 500 logiciels libres : et maintenant ?"
description: "500 logiciels libres recommandés pour les administrations : quelles suites pour le SILL ?"
date: 2024-11-26
image:
  path: ./sill-500.png
  alt: "Capture d'écran du SILL effectuée le 26 novembre 2024, montrant 500 logiciels libres référencés, 1891 utilisateurs inscrits, 660 référents et 195 organismes représentés."
tags: SILL
---

## Les avatars du SILL

À sa conception en 2012, le socle interministériel de logiciels libres se présente comme un tableau en PDF. À partir de 2019, la liste des logiciels libres recommandés aux administrations est publiée comme un fichier csv dans un dépôt Git, fichier dont les données sont aussi affichées sur le site statique `sill.etalab.gouv.fr`. En 2022, avec l'arrivée d'un développeur dans la mission logiciels libres, nous repensons le site pour en faire une application web permettant aux agents publics de se créer un compte et d'accéder à des informations supplémentaires. Le SILL prend alors forme qu'il a encore aujourd'hui, publiée sur [code.gouv.fr/sill](https://code.gouv.fr/sill).

{% imageContent "./sill-home.png", "Capture d'écran du SILL aujourd'hui", [1000] %}

## Lentement mais sûrement

Depuis un an, les développements se poursuivent avec un objectif principal : **rendre l'application la plus générique possible** pour qu'elle couvre la plupart des besoins d'une application de catalogage de logiciels.

Techniquement, nous avons rassemblé tous les développements sur un seul dépôt de code (nous sommes passés en « monorepo »), nous avons implémenté le stockage des données avec PostgreSQL plutôt que dans un dépôt Git privé (une option toujours disponible) et nous avons rendu plus facile le déploiement de l'application (même si des efforts côté documentation nous attendent encore.)
  
Vous pouvez suivre les développements via [notre dépôt Git](https://github.com/codegouvfr/sill).
  
{% imageContent "./sill-github.png", "Capture d'écran du dépôt GitHub de l'application web du SILL", [1000] %}

## Des instances à venir ?

En 2023, nous sommes rapproché du [collège codes sources et logiciels du comité pour la science ouverte](https://www.ouvrirlascience.fr/college-codes-sources-et-logiciels/). Des développements sont en cours pour contribuer à l'enrichissement du SILL en vue de son utilisation pour la réalisation du catalogue des logiciels de l'enseignement supérieur et de la recherche.

Ces évolutions devraient nous permettre de gagner encore en généricité, notamment en diversifiant les sources d'information sur les logiciels référencés (voir [ces tickets avec le tag "HAL"](https://github.com/codegouvfr/sill/issues?q=is%3Aissue+is%3Aopen+label%3AHAL)) et les usages souhaités pour la mise en relation des utilisateurs et des référents.

## SILL suffisait d'aider...

Le chemin à parcourir est encore long ! Nous voulons améliorer les fonctionnalités de prise et de suivi de contact, la façon dont sont représentées les organisations auxquelles appartiennent les utilisateurs et les référents, les informations partagées en privée, notamment sur la sécurité, l'accessibilité... et tant d'autres choses.

{% imageContent "./sill-issues.png", "Capture d'écran des tickets ouverts sur le SILL", [1000] %}

Un point qui nous tient à coeur : trouver un nom qui parle pour une application générique de catalogage de logiciels... vos propositions sont les bienvenues sur [ce ticket](https://github.com/codegouvfr/sill/issues/189) !

Vous êtes agent public et souhaitez faire des retours critiques et des suggestions ? Écrivez-nous à [sill@code.gouv.fr](mailto:sill@code.gouv.fr).  Et si vous connaissez l'histoire du SILL et des groupes MIM, deux espaces demandent un peu d'amour : [l'article Wikipédia dédié SILL](https://fr.wikipedia.org/wiki/Socle_interminist%C3%A9riel_de_logiciels_libres) et [celui dédié aux groupes MIM](https://fr.wikipedia.org/wiki/Mutualisation_interminist%C3%A9rielle_pour_un_environnement_de_travail_ouvert).
