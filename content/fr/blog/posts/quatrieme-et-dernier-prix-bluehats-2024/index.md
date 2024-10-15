---
title: "L'équipe de Monitoring Plugins remporte le dernier prix BlueHats"
description: "L’équipe des mainteneurs de Monitoring Plugins est recompensée pour son implication de longue haleine"
date: 2024-10-15
image:
  path: ../../../../../public/img/blog/bluehats-logo.png
  alt: "Les mainteneurs de Monitoring Plugins remportent le dernier prix BlueHats"
  hide: True
tags:
  - bluehats
  - Prix
  - NLnet
---

*Lire l'annonce sur [le site de NLnet](https://nlnet.nl/bluehatsprize/2024/4.html).*

Nous sommes heureux d'annoncer que le gagnant du quatrième prix BlueHats 2024 est [l'équipe](https://www.monitoring-plugins.org/team.html) qui maintient le projet [Monitoring Plugins](https://www.monitoring-plugins.org/).

Les prix BlueHats sont une initiative de la Direction interministérielle du numérique. Ils récompensent les mainteneurs de projets libres et open source critiques. En 2024, quatre prix de 10 000 € chacun ont été décernés.

Le jury, composé d'agents publics de l'ANSSI, du ministère de l'éducation et de la DINUM, a reconnu le rôle central de Monitoring Plugins dans la création d'applications et la gestion de la chaîne logistique. La mission logiciels libres souhaite continuer à mettre en avant ce type d'initiatives : des projets discrets, critiques pour les infrastructures logicielles, et maintenus par des équipes fiables au fil des années.

# À propos de Monitoring Plugins

Monitoring Plugins est un projet de longue date visant à assurer le bon fonctionnement des services web. Il propose une interface pour écrire des modules, livrée avec plus de cinquante modules. Ceux-ci aident à détecter les états problématiques tels que les serveurs hors ligne, les temps de latence élevés, le matériel en surchauffe ou le stockage défectueux.

Holger Weiß, qui dirige l'équipe de Monitoring Plugins, a accepté le prix BlueHats avec joie et son équipe prévoit d'utiliser ce prix pour améliorer le projet. Holger écrit :

:::quote
L'équipe de Monitoring Plugins est heureuse d'accepter le prix
BlueHats et honorée par la reconnaissance du jury. En tant que petite
pierre angulaire de nombreuses solutions de surveillance informatique,
nous ne sommes pas aussi visibles que les grands projets, mais nous
sommes heureux de contribuer à soutenir l'infrastructure dont nous
dépendons tous dans notre société. L'infrastructure étant souvent
ennuyeuse (comme il se doit), elle n'est pas souvent visible et ne
retient l'attention que lorsqu'elle tombe en panne.

Dans cet esprit, nous sommes particulièrement reconnaissants envers
les personnes et les institutions qui se soucient des petits rouages
ennuyeux de la grande machinerie. Cela ne va pas de soi et nous
apprécions l'effort et espérons continuer à fournir des logiciels
fiables au monde entier.
:::

Monitoring Plugins a commencé comme un projet parallèle à Nagios. La
conception des plugins de surveillance était déjà présente dans [des
programmes précédents](https://www.nagios.org/about/history) de Ethan
Galstad. Chaque plugin est un programme distinct qui vérifie un état
spécifique. Il s'exécute brièvement et transmet l'état à un logiciel
qui surveille plusieurs états, tel que Nagios.

La simplicité de la conception et de la collection de modules a incité
d'autres applications de surveillance à adopter la même interface. Les
modules de surveillance peuvent être écrits dans n'importe quel langage
de programmation, car il s'agit d'exécutables distincts. La plupart
sont écrits en C et en Perl.

En raison de la simplicité d'écriture et d'utilisation des modules, de
nombreux services les utilisent et de nombreux modules externes au
projet principal ont été créés.

# Éloge de Monitoring Plugins

Chacun pouvait proposer des projets libres et open source pour l'un
des prix BlueHats 2024. Monitoring Plugins a été proposé par Lorenz
Kästle, ingénieur système pour
[NETWAYS](https://www.netways.de/blog/author/lkaestle/), qui a déployé
de nombreux systèmes de surveillance et a contribué au projet. Voici
ce qu'il écrit dans la nomination :

> Le projet et les modules de surveillance développés constituent les
> éléments de base de plusieurs systèmes de surveillance de
> l'infrastructure informatique. Ces modules couvrent les mesures de
> base du système et certains des protocoles de réseau les plus
> importants et les plus largement utilisés (HTTP, SNMP, etc.). Bien
> qu'il ne soit pas vraiment possible de dire où, par qui et à quelle
> fréquence les plugins de surveillance sont utilisés, il pourrait
> s'agir de centaines de milliers de systèmes individuels.
> 
> Toutefois, le temps de développement consacré à l'amélioration de la
> base de code, à l'introduction de meilleurs tests et à la correction
> des bogues a été plutôt faible ces dernières années, car aucune entité
> spécifique ne fournit les ressources nécessaires pour travailler
> correctement sur le projet.
> 
> L'objectif serait surtout de réduire le nombre de problèmes signalés
> et de proposer des contributions au code, mais aussi d'homogénéiser
> le code actuel, de mettre à jour la documentation et d'améliorer
> l'infrastructure (emballage).

Un représentant de la DINUM déclare :

:::quote
Nous savons que de nombreuses administrations publiques
dépendent indirectement des plugins de surveillance. des plugins de
surveillance : ce projet est typique d'une initiative de niche du qui
aide d'autres outils à rester précis, notamment dans le domaine de la
surveillance. dans le domaine de la surveillance. Nous espérons que ce
prix aidera les mainteneurs à obtenir plus de sponsors et de
contributions directes !
:::

# Que retenir des prix BlueHats ? 🧢

Voici la présentation que nous avons donnée lors de la [Linux Conference à Vienne](https://events.linuxfoundation.org/open-source-summit-europe/).

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" frameborder="0" src="https://speakerdeck.com/player/f1ccc943f7f044cab5a957a0cb55aa81" title="code.gouv.fr presenting the 🧢 BlueHats awards" allowfullscreen="true" data-ratio="1.7777777777777777"></iframe>

<br/>
<br/>

- Mieux vaut ne faire qu'*un seul appel ouvert*.
- Il est important d'avoir un nombre important d'agents publics
  participant au jury, à la fois pour le rendre plus et pour mobiliser
  assez de points de vue sur l'évaluation des candidatures.
- La procédure d'évaluation est complexe : il faut bien comprendre les
  enjeux techniques du projet, mesurer son usage dans
  l'administration, sa criticité en terme de sécurité, etc.
- Le lien créé avec les mainteneurs de projets open source est très
  appréciable : il permet de créer un canal d'interaction fluide.
- Le fait de travailler avec une entité extérieure à l'administration
  comme [NLnet](https://nlnet.nl/) fut un élément très porteur ! Nous
  avons apprécié leur aide sur la communication, la collecte des
  candidatures et les interactions avec les mainteneurs.

<br/>

## Les autres prix BlueHats

- [Dnsmasq remporte le premier prix BlueHats](/fr/blog/remise-du-premier-prix-bluehats-2024/)
- [node-oidc-provider remporte le deuxième prix BlueHats](/fr/blog/remise-du-second-prix-bluehats-2024)
- [Apache Maven remporte le troisième prix BlueHats](/fr/blog/remise-du-troisieme-prix-bluehats-2024)
