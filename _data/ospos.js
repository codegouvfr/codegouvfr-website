const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    const URL = "https://code.gouv.fr/data/fr-ospos.json";

    let ospos = await EleventyFetch(URL, {
        duration: "2w",
        type: "json"
    });

    return ospos;
};
