module.exports = {
    actions: [
        {
            url: false,
            externalUrl: "https://code.gouv.fr/sill",
            title: "Pour l'administration",
            description: "Mieux connaître, utiliser et concevoir les logiciels libres et les communs numériques.",
        },
        {
            url: false,
            externalUrl: "https://code.gouv.fr/sources/",
            title: "Par les administrations",
            description: "Développer et accompagner l’ouverture et la libération des codes sources de l'administration.",
        },
        {
            url: "/fr/bluehats/",
            title: "BlueHats",
            description: "S’appuyer sur les logiciels libres et sur les communs numériques pour renforcer l’attractivité de l’État-employeur.",
        }
    ],
    accordionItems: [
        {
            title: "Vous êtes un agent public et souhaitez référencer dans le SILL un logiciel libre utilisé dans votre administration ?",
            content: `
<p><a href="https://code.gouv.fr/sill/add-software" target="_blank">Inscrivez-vous !</a></p>
            `
        },
        {
            title: "Vous êtes une mission de service public et souhaitez référencer vos dépôts de code source ?",
            content: `
<p>Pour ajouter une forge, un compte d'organisation GitHub ou un groupe GitLab, écrivez à <a href="mailto:contact@code.gouv.fr">contact@code.gouv.fr</a> ou envoyez un correctif pour <a href="https://github.com/codegouvfr/codegouvfr-data/blob/main/comptes-organismes-publics.yml" target="_blank">ce fichier</a>.<p>
<p>Attention : Nous ne référençons pas les comptes personnels.</p>
`
        },
        {
            title: "Vous êtes un BlueHat et souhaitez proposer un atelier ou un article ?",
            content: `
<p>Écrivez à <a href=\"mailto:contact@code.gouv.fr\">contact@code.gouv.fr</a>.</p>`
        }
    ]
};
