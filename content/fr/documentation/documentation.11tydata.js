module.exports = {
    permalink: function (data) {
        return `/fr/doc/${this.slugify(data.page.fileSlug)}/`;
    },
    main: [
	{
            url: false,
            externalUrl: "https://code.gouv.fr/documentation/",
            title: "Documentation principale",
            description: `Documentation sur les logiciels libres dans l'administration publique : utiliser, publier, contribuer.`
        }, 
	{
            url: false,
            externalUrl: "https://code.gouv.fr/presentation/",
            title: "Présentation du site code.gouv.fr",
            description: `Découvrir les ressources proposées par la mission logiciels libres.`
        }, 
	{
            url: false,
            externalUrl: "https://code.gouv.fr/faq/",
            title: "FAQ Logiciels libres",
            description: `Parcourir la FAQ de notre documentation.`
        }
    ],
    guides: [
        {
            url: false,
            externalUrl: "https://code.gouv.fr/guides/juridique/",
            title: "Guide juridique interactif : quels codes sources ouvrir ?",
            description: `En répondant à quelques questions, faites un point sur vos obligations.`
        }, {
            url: false,
            externalUrl: "https://code.gouv.fr/guides/codegouvfr-score/",
            title: "Guide Awesome CodeGouvFr : votre projet est-il remarquable ?",
            description: `Êtes-vous prêts à intégrer https://code.gouv.fr/fr/awesome/ ?`
        }, {
            url: false,
            externalUrl: "https://code.gouv.fr/guides/ospo/",
            title: "Guide OSPO : comment créer votre Open Source Programme Office ?",
            description: `Quels sont les éléments à aborder pour définir et mettre en oeuvre votre stratégie open source ?`
        }
    ],
    docs: [
        {
	    url: false,
            externalUrl: "https://code.gouv.fr/sill/readme",
            title: "Présentation du socle interministériel de logiciels libres",
            description: ``
        }, {
            url: "/fr/doc/licences-libres-dinum/",
            title: "Les licences libres acceptées pour les logiciels du SILL",
            description: ``
        },
        {
            url: false,
            externalUrl: "https://code.gouv.fr/sources/#/about",
            title: "Présentation de code.gouv.fr/sources",
            description: ``
        }, {
            url: false,
            externalUrl: "https://mentor.gouv.fr/catalog/1754",
            title: "Capsule Mentor : aborder en confiance les logiciels libres dans l'administration"
        }
    ]
};
