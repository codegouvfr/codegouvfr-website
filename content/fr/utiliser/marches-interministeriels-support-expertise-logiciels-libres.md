---
title: Marchés interministériels support et expertise à l'usage des logiciels libres
date: 2022-01-18
layout: layouts/post.njk
segments:
  - url: /utiliser/
    title: Utiliser
showBreadcrumb: true
---
:::callout
Vous pouvez consulter la [liste des bénéficiaires de ces marchés logiciels libres](../marches-logiciels-libres/) et [nous écrire](/fr/contact) pour connaître le coordinateur de votre établissement, s'il est bénéficiaire.
<br><br>
Vous pouvez aussi consulter la [liste des logiciels libres concernés par le marché de support logiciels libres](../marches-logiciels-libres-liste-logiciels/) ainsi que les [contributions faites aux projets libres](../marches-logiciels-libres-liste-contributions/) via le marché.
:::

La Direction Générale des Finances Publiques (DGFIP) est pilote de deux marchés interministériels à l’usage des logiciels libres. Ces deux marchés ont pour objet de couvrir l’ensemble du cycle de vie d’un logiciel libre au sein du système d'information (SI) :

- depuis l’identification du logiciel libre (étude de veille),
- sa qualification dans le SI (études d’implantation),
- sa mise en œuvre (Assistance à la mise en œuvre et audit),
- l’ajout de nouvelles fonctionnalités (étude d’opportunité et développement),
- son exploitation (Assitance à l’exploitation),
- l’accompagnement à la prise en main (prestation de monitorat),
- et enfin son support en cas de problème en production.

Ces activités sont menées en échange constant avec les communautés des logiciels libres concernés ; en particulier obligation est faite de reverser systématiquement tous les correctifs issus de l’activité de support. Les titulaires de ces différents marchés et lots constituent l’interface entre les communautés et les administrations bénéficiaires.

# Présentation des marchés

## Le marché support

Depuis octobre 2024, Linagora est titulaire du marché interministériel de support à l’usage des logiciels libres. D’une durée de 12 mois reconductible 3 fois, le marché devrait donc se terminer en septembre 2028.

L’objet de ce marché est de procurer aux entités bénéficiaires sur un mode forfaitaire, des prestations d’assistance en matière de logiciels libres recouvrant :

- le support et la maintenance corrective de logiciels libres ;
- la livraison de veilles technologiques et stratégiques mensuelles ;
- la prestation de support étendu pour la distribution Debian.

Sur bon de commande, des prestations complémentaires sont possibles : extensions du périmètre logiciel, extension des conditions de mise en œuvre du support (hors heures ouvrées), veilles stratégiques et techniques supplémentaires, extension du nombre de points de contact, support  étendu pour la distribution Debian.

### Le support et la maintenance corrective de logiciels libres

Le marché comprend le support forfaitaire de 350 logiciels en trois versions pour l’ensemble des ministères. Un logiciel inscrit sur le périmètre permet à l’ensemble des entités bénéficiaires de demander un support sur les versions citées. Sur les 350 entrées, 80 logiciels peuvent être désignés comme critiques. Cela permet des temps de résolution plus rapide.

La collecte des évolutions de périmètre se fait en continu, au fil des remontées des coordinateurs des ministères.

L’ouverture d’un ticket auprès du support peut être une demande d’information ou une demande de support :

- Les demandes d’information concernent d'abord les logiciels libres inclus dans le périmètre du support. Ces demandes peuvent porter sur des questions d'installation, de configuration, d'optimisation ou d'exploitation. Afin d'anticiper sur le caractère évolutif du périmètre, les demandes peuvent aussi concerner des logiciels libres ou des versions non encore supportées dans le périmètre. Ainsi, une demande d’information peut porter sur la feuille de route d’un logiciel libre afin de savoir par exemple si l’incorporation d’une fonctionnalité utile pour l'Administration est prévue. Les demandes d'information extérieure au périmètre du support seront regroupées sous la rubrique « autre demande d'information ».

- Les demandes de support concernent exclusivement des versions de logiciels libres incluses dans le périmètre du support. Une demande de support peut relever de :

	- la maintenance corrective qui exige du titulaire la correction d’un comportement défectueux par rapport :
	  - aux spécifications de la version en cause lorsqu’elles existent ;
	  - aux indications des guides d’installation, d’exploitation ou d’utilisation de la version en cause ;
	  - aux comportements observés avec des logiciels équivalents.

    - La maintenance adaptative qui exige du titulaire des évolutions mineures rendues nécessaires par les évolutions du contexte applicatif ; ce type de maintenance concerne en particulier les portages sur d'autres environnements d’exécution. Les adaptations se limitent aux interfaces du logiciel avec les sous-systèmes de son environnement. Ainsi, cette maintenance ne doit pas donner lieu à des modifications importantes du code, comme la réécriture de fonctionnalités disparues du contexte qui relève, elle, d'un lot d'expertise.

Les délais de résolution sont les suivants selon la nature des tickets et la criticité du logiciel.

- Délais pour les logiciels critiques :

  | Actions                                    | Bloquant | Non bloquant |
  |--------------------------------------------|----------|--------------|
  | Rappel de l’utilisateur                    | 1 HO     | 1 HO         |
  | Réponse à une demande d’information        | 1 JO     | 5 JO         |
  | Fourniture d’une solution de contournement | 2 JO     | 5 JO         |
  | Fourniture d’une solution définitive       | 10 JO    | 20 JO        |
  
- Délais pour les logiciels non critiques :

  | Actions                                    | Bloquant | Non bloquant |
  |--------------------------------------------|----------|--------------|
  | Rappel de l’utilisateur                    | 1 HO     | 1 HO         |
  | Réponse à une demande d’information        | 8 JO     | 8 JO         |
  | Fourniture d’une solution de contournement | 5 JO     | 10 JO        |
  | Fourniture d’une solution définitive       | 40 JO    | 60 JO        |
  
	HO : Heure Ouvrée 	JO : Jour Ouvré

### Les veilles stratégiques et technologiques

Le marché de support prévoit forfaitairement la réalisation d’une étude de veille par mois sur des sujets proposés par l’administration.

Les veilles déjà réalisées et validées sont disponibles au fil de l’eau sur la forge publique de l’Adullact : [gitlab.adullact.net/marche-sll/etudes-de-veille](https://gitlab.adullact.net/marche-sll/etudes-de-veille)

#### Veille stratégique

À destination de l’encadrement, l'objectif de la veille stratégique est de déterminer le niveau de maturité de l'offre des logiciels libres sur un domaine fonctionnel précis. Les conclusions d’une veille stratégique sont susceptibles de motiver une étude de veille technique.

#### Veille technique

Sur un domaine fonctionnel réputé mature, ou qu'une veille stratégique a jugé mature, l'objet de la veille technique est d'estimer les conditions de mise en œuvre de solutions libres dans le système d'information de l’Administration. Les conclusions d’une veille technique sont susceptibles de motiver l’inclusion d'un logiciel dans le périmètre du support.

La veille technique doit s’appuyer sur la méthode d'analyse QSOS (*Qualification and Selection of Open Source software*) des logiciels libres majeurs du domaine fonctionnel. Cette méthode de qualification et de sélection de logiciels libres est disponible selon les termes de la GNU Free Documentation Licence ([www.qsos.org](http://www.qsos.org/)).

#### Le support étendu pour la distribution Debian

Chaque version majeure de la distribution Debian dispose d’un support de cinq ans suivant sa date de publication, d’abord de la part de l’équipe sécurité des développeurs Debian durant 3 ans puis de la part d’une communauté de volontaire plus large pour les deux années suivantes. L’objet de cette prestation est d’assurer pour chaque version majeure au-delà de la période de support communautaire, un support étendu de trois années supplémentaires.

Au regard de l’historique et selon les décisions qui seront prises par la communauté Debian, le tableau suivant mentionne à titre indicatif les périodes de support étendu objet de la prestation pour les versions majeures déjà publiées :

| Version              | Date de Publication | Fin du support communautaire | Période de support étendu      |
|----------------------|---------------------|------------------------------|--------------------------------|
| Debian 9 (Stretch)   | 17/06/17            | 30/06/22                     | 01/07/22-30/06/25              |
| Debian 10 (Buster)   | 06/07/19            | 30/06/24                     | 01/07/24-30/06/27              |
| Debian 11 (Bullseye) | 14/08/21            | 30/06/26                     | 01/07/26-Date de fin du marché |
| Debian 12 (Bookworm) | 10/06/23            | 30/06/28                     | 01/07/28-Date de fin du marché |

## Le marché d’expertise

Le marché d’expertise est un marché à bon de commande divisé en plusieurs lots :

- Lot 1 : prestations d’expertises « génériques » – Titulaire Linagora ; 
- Lot 2 : Drupal et ses logiciels associés – Titulaire Smile ; 
- Lot 3 : PostgreSQL et ses logiciels associés – Titulaire Dalibo ; 
- Lot 4 : Openstack et ses logiciels associés – Titulaire Worteks ; 
- Lot 5 : Moodle et ses logiciels associés – En attente de notification ;
- Lot 6 : Service DATA et ses logiciels associés – Titulaire CGI – ADALTAS ;
- Lot 7 : Solutions collaboratives et ses logiciels associés – Groupement Arawa/Worteks. 

Le lot 1 dit « générique » porte au départ sur 200 logiciels, mais ce périmètre est extensible au fur et à mesure des besoins nouveaux de l’administration (à l’exception des logiciels faisant l’objet d’un lot spécifique).

Ce marché vise à procurer aux entités bénéficiaires des prestations d’expertise en matière de logiciels libres soit :

- des études d’implantation ;
- de l’assistance à la mise en œuvre ;
- de l’assistance à l’exploitation ;
- des audits ;
- des études d’opportunité ;
- des développements ;
- du monitorat.
