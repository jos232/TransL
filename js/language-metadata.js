"use strict";

/* ==========================================
   TRANSL
   LANGUAGE METADATA
========================================== */

/*
 * User-friendly metadata layered on top of
 * the ISO 639-3 language registry.
 *
 * The ISO code remains the primary identifier.
 */

const TRANSL_LANGUAGE_METADATA = {

    /* ==========================
       EAST AFRICA
    ========================== */

    "mas": {
        displayName: "Maasai",
        alternateNames: [
            "Masai",
            "Maa"
        ],
        countries: [
            "Kenya",
            "Tanzania"
        ],
        script: "Latin"
    },

    "swa": {
        displayName: "Swahili",
        alternateNames: [
            "Kiswahili"
        ],
        countries: [
            "Kenya",
            "Tanzania",
            "Uganda",
            "Democratic Republic of the Congo"
        ],
        script: "Latin"
    },

    "swh": {
        displayName: "Swahili",
        alternateNames: [
            "Kiswahili"
        ],
        countries: [
            "Kenya",
            "Tanzania"
        ],
        script: "Latin"
    },

    "luo": {
        displayName: "Luo",
        alternateNames: [
            "Dholuo"
        ],
        countries: [
            "Kenya",
            "Tanzania"
        ],
        script: "Latin"
    },

    "kik": {
        displayName: "Kikuyu",
        alternateNames: [
            "Gikuyu",
            "Gĩkũyũ"
        ],
        countries: [
            "Kenya"
        ],
        script: "Latin"
    },

    "tuk": {
        displayName: "Turkmen",
        alternateNames: [
            "Türkmen"
        ],
        countries: [
            "Turkmenistan",
            "Afghanistan",
            "Iran"
        ],
        script: "Latin"
    },

    "kal": {
        displayName: "Greenlandic",
        alternateNames: [
            "Kalaallisut"
        ],
        countries: [
            "Greenland"
        ],
        script: "Latin"
    }

};


/* ==========================================
   GET LANGUAGE METADATA
========================================== */

function getTransLLanguageMetadata(code) {

    if (!code) {
        return null;
    }

    return TRANSL_LANGUAGE_METADATA[
        String(code).toLowerCase()
    ] || null;

}
