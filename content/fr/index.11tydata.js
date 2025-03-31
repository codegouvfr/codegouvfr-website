module.exports = {
    actions: [
        {
            url: false,
            externalUrl: "https://code.gouv.fr/sill",
            title: "Pour l'administration",
            description: "Mieux connaître et utiliser les logiciels libres dans vos système d'information.",
        },
        {
            url: false,
            externalUrl: "https://code.gouv.fr/sources/",
            title: "Par les administrations",
            description: "Publier vos codes sources sous licence libre et explorer ceux d'autres administrations.",
        },
        {
            url: "/fr/bluehats/",
            title: "BlueHats",
            description: "Enrichir les échanges entre agents publics libristes.",
        }
    ],
    accordionItems: [
        {
            title: "Vous êtes un agent public et souhaitez référencer un logiciel libre dans le SILL ?",
            content: `
<p><a href="https://code.gouv.fr/sill/add-software" target="_blank">Inscrivez-vous !</a></p>
            `
        },
        {
            title: "Vous êtes une mission de service public et souhaitez référencer vos dépôts de code source dans notre inventaire ?",
            content: `
<p>Pour ajouter une forge, un compte d'organisation GitHub ou un groupe GitLab, écrivez à <a href="mailto:contact@code.gouv.fr">contact@code.gouv.fr</a> ou envoyez un correctif pour <a href="https://github.com/codegouvfr/codegouvfr-data/blob/main/comptes-organismes-publics.yml" target="_blank">ce fichier</a>.<p>
<p>Attention : nous ne référençons pas les comptes personnels.</p>
`
        },
        {
            title: "Vous êtes un BlueHat et souhaitez proposer un atelier ou une rencontre ?",
            content: `
<p>Écrivez à <a href=\"mailto:contact@code.gouv.fr\">contact@code.gouv.fr</a>.</p>`
        }
    ]
};
