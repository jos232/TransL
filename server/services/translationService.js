"use strict";

/* ==========================================
   TRANSL
   TRANSLATION SERVICE
========================================== */

/*
   The translation service is deliberately
   provider-independent.

   The rest of TransL should communicate with
   this service rather than directly with a
   translation provider.
*/


/* ==========================================
   SUPPORTED TARGET LANGUAGES
========================================== */

const TRANSLATION_TARGETS = new Set(
    [
        "eng",
        "swh"
    ]
);


/* ==========================================
   LANGUAGE VALIDATION
========================================== */

function normalizeLanguageCode(code) {

    return String(code || "")
        .trim()
        .toLowerCase();

}


function isSupportedTranslationLanguage(code) {

    return TRANSLATION_TARGETS.has(
        normalizeLanguageCode(code)
    );

}


/* ==========================================
   TRANSLATE
========================================== */

async function translateText(
    text,
    sourceLanguage,
    targetLanguage
) {

    const cleanText =
        String(text || "").trim();

    const source =
        normalizeLanguageCode(
            sourceLanguage
        );

    const target =
        normalizeLanguageCode(
            targetLanguage
        );


    if (!cleanText) {

        throw new Error(
            "Translation text cannot be empty."
        );

    }


    if (!source) {

        throw new Error(
            "Source language is required."
        );

    }


    if (!target) {

        throw new Error(
            "Target language is required."
        );

    }


    if (
        source === target
    ) {

        return {

            translatedText:
                cleanText,

            sourceLanguage:
                source,

            targetLanguage:
                target,

            provider:
                "identity",

            model:
                "identity"

        };

    }


    if (
        !isSupportedTranslationLanguage(
            source
        ) ||
        !isSupportedTranslationLanguage(
            target
        )
    ) {

        throw new Error(
            `Translation language pair is not yet supported: ${source} -> ${target}`
        );

    }


    /*
       Provider implementation will be
       connected here in the next step.
    */

    throw new Error(
        `Translation provider is not configured for ${source} -> ${target}.`
    );

}


/* ==========================================
   EXPORTS
========================================== */

module.exports = {

    translateText,

    normalizeLanguageCode,

    isSupportedTranslationLanguage

};