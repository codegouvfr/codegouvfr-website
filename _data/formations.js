const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    const URL = "https://code.gouv.fr/data/formations-logiciels-libres.json";

    let formations = await EleventyFetch(URL, {
        duration: "2w",
        type: "json"
    });

    return formations;
};
