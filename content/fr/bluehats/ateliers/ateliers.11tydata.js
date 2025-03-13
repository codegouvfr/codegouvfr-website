const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "atelier", "events"
    ],
    layout: "layouts/bluehats-webinar.njk",
    permalink: function (data) {
        return `/${data.lang}/bluehats/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        image: data => {
            if (!data.image) {
                return {
                    path: path.resolve("./public/img/atelier.png"),
                    alt: 'Illustration contenant le titre "Atelier BlueHats"'
                }
            } else {
                return data.image;
            }
        },
        badges: data => {
            const postTime = new Date(data.page.date).getTime();
            const currentTime = new Date().getTime();
            if (postTime > currentTime) {
                return ["à venir"];
            } else {
                return ["passé"]
            }
        },
        start: data => {
            const postTime = new Date(data.page.date);
            postTime.setUTCHours(11);
            return postTime;
        },
        duration: {
            hours: 1,
            minutes: 30
        },
        location: "https://webinaire.numerique.gouv.fr/meeting/signin/invite/362/creator/369/hash/14eb55bd230aa1a8b8a98e0ee35b056d0196afcf"
    }
};
