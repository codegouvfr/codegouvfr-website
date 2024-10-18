---
title: "La collaboration MENJS / Code Lutin"
date: 2024-10-18
description: "La collaboration MENJS / Code Lutin avec les interventions de Erwan Garel (MENJS), Alex Morel (Code Lutin) et Jean Couteau (Code Lutin)"
video:
  src: https://tube.numerique.gouv.fr/videos/embed/8104acc6-4d40-4c2a-99c8-d9258d78ef7d
  title: "Atelier BlueHats : La collaboration MENJS / Code Lutin"
slides:
  src: https://speakerdeck.com/player/9f156314755d41459d87b8f62272a4a5
  title: "Atelier #BlueHats du 18 octobre 2024 : la collaboration MENJS / Code Lutin"
---
Le CRPA demande aux organismes publics de publier les algorithmes mis en œuvre dans le cas de décisions administratives individuelles.

Publier l'intégralité des codes sources des logiciels réalisés par le Ministère de l'Éducation Nationale (MEN) est rédhibitoire. Notamment pour des raisons de :

* vulnérabilité : on divulge les technologies d'infrastructure
  utilisées (et les failles de sécurité liées : Struts, Spring, etc.)
* Sécurité : divulgations de secrets (mots de passe, token, etc.)
* RGPD : on expose le nom des développeurs

Les équipes du ministère, accompagnés par l'entreprise Code Lutin, ont travaillé autour de la problématique suivante :

**Comment respecter l’exigence de transparence des algortihmes tout en conservant une opacité sur les composants logiciels en exploitation dans le SI du ministère ?**

L'objet de l'atelier est de présenter un résumé et un retour
d'expériences sur nos travaux, en s'axant autour de 3 sujets :

1. Prototype d'architecture Publication By Design : 
 
   Ce prototype, basé sur les principes du Domain-Driven-Design et l'architecture hexagonale, peut servir de template lors de la création d'un nouveau projet. Il repose sur la séparation de l'application en deux modules distincts :
   * Un module métier, publiable en l'état sur Mim-Libre
   * Un module infrastructure, qui reste privé
    
2. Mise en place d'un pipeline de publication :

   Nous avons intégré à la CI du MEN un pipeline de publication : 

   * Intégré à la CI de la forge éducation nationale (GitLab, Gitea)
   * Automatisant la publication sur la forge [gitlab.mim-Libre.fr](gitlab.mim-Libre.fr)
   * Avec tous les gardes-fous possibles (détection de secrets, vulénrabilités, qualité de code, etc.), y compris un processus de revue manuelle.

3. Stratégies de remédiation

Grâce aux 2 premiers axe, nous avons identifié et outillé une architecture péreine pour les futurs projets. Mais reste à identifier des stratégies de remédiation pour faire évoluer les projets déjà existants. 

* Audit de 2 applications (Affelnet 6e et Affelnet Lycée)
* Implémentation de scripts d'analyse et refactoring
* Rédaction d'un guide de remédiation "dev-friendly"

4. Les éléments d’industrialisation qui sont en cours pour le passer à l’échelle

* Plugin AppBuilder – DevSecOps pour instancier un nouveau projet Java depuis notre Forge Education IT avec l’architecture « action24 » + pipeline de publication vers le Mim.libre
* Plugin [IS Designer LCNC ouvert](https://code.gouv.fr/sill/detail?name=IS%20Designer) pour industrialiser la production d’API respectant l’action 24 (design + reverse Swagger)
