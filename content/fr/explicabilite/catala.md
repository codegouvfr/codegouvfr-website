---
title: Catala
layout: layouts/post.njk
segments:
  - url: /explicabilite/
    title: Explicabilité
showBreadcrumb: true
---

### Introduction

[Catala](catala-lang.org/) est un langage de programmation dédié à la transformation du droit en code, orienté vers la production de décisions (_liquidations_) et garantissant un haut niveau d'assurance. À partir d'un document unique mêlant texte de loi et code informatique produit en binôme juriste-programmeur, Catala génère des bibliothèques logicielles prêtes à l'emploi dans le langage de votre choix.

### Présentation

[Catala](catala-lang.org/) est un langage de programmation dédié à la transformation du droit en code, orienté vers la production de décisions (_liquidations_) et garantissant un haut niveau d'assurance. Conçu à partir de l'état de l'art de la recherche en droit et en informatique, le langage s'adosse à une méthodologie de transformation du droit en code basé sur le _pair programming_ et le _literate programming_. Concrètement, un·e juriste et un·e informaticien·ne déchiffrent ensemble les sources du droit (lois, décrets, jurisprudences, circulaires, etc.) et les annotent avec du code Catala pour établir article après article le programme informatique qui sera par consstruction fidèle à sa spécification juridique. Par exemple, [pour le calcul des allocations familiales](https://catala-lang.org/fr/examples/family-benefits#Code%20de%20la%20securite%20sociale-Partie%20reglementaire%20-%20Decrets%20simples-Livre%205%20:%20Prestations%20familiales%20et%20prestations%20assimilees-Titre%202%20:%20Prestations%20generales%20d%20entretien-Chapitre%201er%20:%20Allocations%20familiales-Article%20D521-1) ou [celui des aides au logement](https://zenodo.org/record/7357625).

{% imageContent "./imagecatala2.png", "Pair programming en Catala" %}

Le langage et la méthodologie Catala ont fait l'objet d'une investigation scientifique de plusieurs années. Cette investigation a fait ressortir plusieurs points de difficulté bloquants pour la transformation du droit en code. Voilà une liste non-exhaustive de ceux adressés par Catala :

- communication entre informaticien·ne·s et juristes (syntaxe adaptée) ;
- gestion de la logique cas de base/exceptions (logique par défaut) ;
- gestion de la logique des liquidations multiples (fonctions et variables contexte) ;
- gestion des arrondis (précision infinie du calcul).

Derrière le langage de surface, le compilateur de Catala assure la traduction vers un _lambda-calcul_, sorte de _lingua-franca_ informatique. Aussi, il est possible de générer à partir d'un programme Catala une bibliothèque dans le langage de programmation de votre choix. Actuellement, le compilateur de Catala cible OCaml, Python, R et Javascript, mais il est possible de rajouter d'autres langages (bientôt C) ou de customiser le code générer pour l'adapter aux normes d'un SI particulier.

{% imageContent "./imagecatala1.png", "Architecture Catala" %}

Pour plus de précisions sur le contexte scientifique de création du langage, vous pouvez vous reporter aux documents suivants :

- Pour les juristes (en français) : [_Traduire la loi en code grâce au langage de programmation Catala_](https://hal.inria.fr/hal-03128248) ;
- Pour les informaticien·ne·s (en anglais) : [_Catala: A Programming Language for the Law_](https://hal.inria.fr/hal-03159939).

### Usage actuels par des administrations publiques

Deux expérimentations ont été menées en conditions réelles pour évaluer
l'adéquation de Catala aux besoins des administrations qui produisent des
décisions automatisées sur des fondements juridiques.

D'abord, la DGFiP a mené conjointement avec Inria une expérimentation de
réécriture du calcul de l'impôt sur le revenu, dont le code source est
disponible [librement](https://gitlab.adullact.net/dgfip/ir-catala). Cette
expérimentation s'est déroulée de juin 2023 à juin 2024 et a impliqué deux ETP,
un ingénieur côté Inria et une juriste côté DGFiP, qui ont travaillé en binôme
de pair programming pour réécrire entre 5% et 10% du calcul total de l'impôt sur
le revenu et de ses pénalités et majorations. Cette expérimentation fait suite à
l'intervention des chercheurs impliqués dans Catala pour [aider la DGFiP à
assurer la maintenance de l'infrastructure actuelle de calcul de l'impôt sur le
revenu](https://www.inria.fr/fr/mlang-modernisation-calcul-impot-revenu).

Ensuite, la CNAF a mené conjointement avec Inria une expérimentation de calcul
et d'orchestration de plusieurs prestations sociales simplifiées, dans le cadre
de l'étude d'alternatives pour le futur du logiciel CRISTAL qui assure
actuellement la liquidation des prestations sociales pour le réseau des CAF.
Cette expérimentation a eu lieu d'octobre 2024 à février 2025 et a mobilisé 
1 ETP côté CNAF et 3 ETP côté Inria. 

Les résultats de ces évaluations sont toujours en cours d'évaluation début 2025
par la CNAF et la DGFiP, qui devront décider si elles poursuivent les travaux
avec Catala vers une utilisation en production pour leurs systèmes informatique
de liquidation des impôts et des prestations sociales. À noter que également
début 2025, l'ADEME est en train d'instruire un potentielle utilisation de
Catala pour la vérification de l'éligibilité et du montant maximal des
subventions qu'elle distribue au titre de la transition énergétique.

Catala a également été utilisé avec succès pour [découvrir des
erreurs](https://hal.inria.fr/hal-03712130) et [suggérer des améliorations dans
le droit spécifiant](https://hal.inria.fr/hal-03781578) [le calcul des aides au
logement](https://hal.inria.fr/hal-03869335).

### Comment l'outil peut contribuer à éclairer des calculs de l'administration (outil de calcul direct, mise en ligne de simulateurs, etc.)

Le langage de programmation Catala est pensé pour la liquidation ; il a donc vocation à être utilisé pour développer les futurs programmes qui remplaceront les algorithmes et calculettes _legacy_ au cœur des SI d'administrations comme la DGFiP, la CNAF, Pôle Emploi, etc. Un programme Catala peut également être utilisé comme simulateur ; puisque Catala compile vers Javascript, il est facile de [créer une page web faisant office de simulateur avec](https://catala-lang.org/fr/examples/housing-benefits/visualization).

Les deux avantages comparatifs de Catala par rapport à d'autres langages de programmation dans ce contexte sont :

- le haut niveau d'assurance et de fidélité par rapport au droit atteints grâce à la méthodologie _pair-programming_ et la conception du langage et de son compilateur ;
- la possibilité d'expliquer chaque étape du calcul en faisant le lien vers la source juridique qui justifie cette étape.

### Quelle documentation pertinente pour un agent public qui souhaite explorer l'outil dans le cadre de la mise en oeuvre d'explications autour d'un calcul de son administration?

L'approche scientifique de Catala et les détails conceptuels de sa conception et de son implémentation sont décrits dans les papiers de recherche cités plus haut. Néamoins Catala dispose également d'une documentation plus opérationnelle :

- Documentation de Catala (en anglais): [https://catalalang.github.io/catala-book/]
- Exemples de programmes Catala : https://github.com/CatalaLang/catala-examples
- Options ligne de commande du compilateur : https://catala-lang.org/en/doc/catala
- Paquet opam (le langage est implémenté en OCaml): https://v3.ocaml.org/p/catala/latest
- Pense-bête syntaxique : https://catalalang.github.io/catala/syntax.pdf

Un petit mail à contact@catala-lang.org est aussi efficace pour un conseil personnalisé et un diagnostic rapide pour savoir si Catala est adapté à votre problème.

### Où est le code source et sous quelle licence

- Dépôt sur GitHub: https://github.com/CatalaLang/catala
- Licence: Apache-2.0

### Qui développe l'outil (= qui a le contrôle sur les choix techniques)

L'outil est développé par
[Inria](https://www.inria.fr/fr/centre-inria-de-paris), institut de recherche en
informatique. Il fait partie du programme « Apollo » de l'agence de programmes
dans le numérique d'Inria, et s'inscrit dans la mission d'appui aux politiques 
publiques de l'institut.

[Denis Merigoux](merigoux.ovh/), en est le co-créateur et chef de projet d'une
équipe de maintenance comptant début 2025 trois ingénieurs de recherche : [Louis
Gesbert](https://github.com/AltGr), [Romain
Primet](https://www.linkedin.com/in/romain-primet-229b80b9) et [Vincent
Botbol](https://www.linkedin.com/in/vincent-botbol-24355728b). Les modifications
au langage sont décidées conjointement avec deux juristes : [Liane
Huttner](https://univ-droit.fr/universitaires/48558-liane-huttner), maîtresse de
conférences en droit du numérique et [Sarah
Lawsky](https://www.law.northwestern.edu/faculty/profiles/sarahlawsky),
professeure de droit fiscal.
