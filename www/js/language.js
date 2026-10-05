"use strict";

/* ==========================================
   TRANSL
   LANGUAGE SYSTEM
========================================== */

/*
 * Central language list for TransL.
 *
 * ISO 639-3 language registry.
 *
 * Languages are ordered A-Z by language name.
 * Entries beginning with special/non-Latin
 * characters are placed after Z.
 *
 * code = ISO 639-3 three-letter identifier
 * name = language reference name
 */

const TRANSL_LANGUAGES = [
    {
        "code": "aiw",
        "name": "Aari",
        "searchKey": "aari aiw"
    },
    {
        "code": "aas",
        "name": "Aasáx",
        "searchKey": "aasax aas"
    },
    {
        "code": "kbt",
        "name": "Abadi",
        "searchKey": "abadi kbt"
    },
    {
        "code": "abg",
        "name": "Abaga",
        "searchKey": "abaga abg"
    },
    {
        "code": "abf",
        "name": "Abai Sungai",
        "searchKey": "abai sungai abf"
    },
    {
        "code": "abm",
        "name": "Abanyom",
        "searchKey": "abanyom abm"
    },
    {
        "code": "mij",
        "name": "Abar",
        "searchKey": "abar mij"
    },
    {
        "code": "aau",
        "name": "Abau",
        "searchKey": "abau aau"
    },
    {
        "code": "abq",
        "name": "Abaza",
        "searchKey": "abaza abq"
    },
    {
        "code": "aba",
        "name": "Abé",
        "searchKey": "abe aba"
    },
    {
        "code": "abp",
        "name": "Abellen Ayta",
        "searchKey": "abellen ayta abp"
    },
    {
        "code": "abi",
        "name": "Abidji",
        "searchKey": "abidji abi"
    },
    {
        "code": "bsa",
        "name": "Abinomn",
        "searchKey": "abinomn bsa"
    },
    {
        "code": "axb",
        "name": "Abipon",
        "searchKey": "abipon axb"
    },
    {
        "code": "ash",
        "name": "Abishira",
        "searchKey": "abishira ash"
    },
    {
        "code": "abk",
        "name": "Abkhazian",
        "searchKey": "abkhazian abk"
    },
    {
        "code": "aob",
        "name": "Abom",
        "searchKey": "abom aob"
    },
    {
        "code": "abo",
        "name": "Abon",
        "searchKey": "abon abo"
    },
    {
        "code": "abr",
        "name": "Abron",
        "searchKey": "abron abr"
    },
    {
        "code": "ado",
        "name": "Abu",
        "searchKey": "abu ado"
    },
    {
        "code": "aah",
        "name": "Abu' Arapesh",
        "searchKey": "abu arapesh aah"
    },
    {
        "code": "abn",
        "name": "Abua",
        "searchKey": "abua abn"
    },
    {
        "code": "abz",
        "name": "Abui",
        "searchKey": "abui abz"
    },
    {
        "code": "kgr",
        "name": "Abun",
        "searchKey": "abun kgr"
    },
    {
        "code": "abu",
        "name": "Abure",
        "searchKey": "abure abu"
    },
    {
        "code": "mgj",
        "name": "Abureni",
        "searchKey": "abureni mgj"
    },
    {
        "code": "tpx",
        "name": "Acatepec Me'phaa",
        "searchKey": "acatepec mephaa tpx"
    },
    {
        "code": "aca",
        "name": "Achagua",
        "searchKey": "achagua aca"
    },
    {
        "code": "acn",
        "name": "Achang",
        "searchKey": "achang acn"
    },
    {
        "code": "yif",
        "name": "Ache",
        "searchKey": "ache yif"
    },
    {
        "code": "guq",
        "name": "Aché",
        "searchKey": "ache guq"
    },
    {
        "code": "acz",
        "name": "Acheron",
        "searchKey": "acheron acz"
    },
    {
        "code": "acr",
        "name": "Achi",
        "searchKey": "achi acr"
    },
    {
        "code": "ace",
        "name": "Achinese",
        "searchKey": "achinese ace"
    },
    {
        "code": "act",
        "name": "Achterhoeks",
        "searchKey": "achterhoeks act"
    },
    {
        "code": "acu",
        "name": "Achuar-Shiwiar",
        "searchKey": "achuar-shiwiar acu"
    },
    {
        "code": "acv",
        "name": "Achumawi",
        "searchKey": "achumawi acv"
    },
    {
        "code": "ach",
        "name": "Acoli",
        "searchKey": "acoli ach"
    },
    {
        "code": "acs",
        "name": "Acroá",
        "searchKey": "acroa acs"
    },
    {
        "code": "xad",
        "name": "Adai",
        "searchKey": "adai xad"
    },
    {
        "code": "fub",
        "name": "Adamawa Fulfulde",
        "searchKey": "adamawa fulfulde fub"
    },
    {
        "code": "ads",
        "name": "Adamorobe Sign Language",
        "searchKey": "adamorobe sign language ads"
    },
    {
        "code": "adn",
        "name": "Adang",
        "searchKey": "adang adn"
    },
    {
        "code": "adq",
        "name": "Adangbe",
        "searchKey": "adangbe adq"
    },
    {
        "code": "ada",
        "name": "Adangme",
        "searchKey": "adangme ada"
    },
    {
        "code": "kad",
        "name": "Adara",
        "searchKey": "adara kad"
    },
    {
        "code": "tiu",
        "name": "Adasen",
        "searchKey": "adasen tiu"
    },
    {
        "code": "ade",
        "name": "Adele",
        "searchKey": "adele ade"
    },
    {
        "code": "adh",
        "name": "Adhola",
        "searchKey": "adhola adh"
    },
    {
        "code": "adi",
        "name": "Adi",
        "searchKey": "adi"
    },
    {
        "code": "wsg",
        "name": "Adilabad Gondi",
        "searchKey": "adilabad gondi wsg"
    },
    {
        "code": "adj",
        "name": "Adioukrou",
        "searchKey": "adioukrou adj"
    },
    {
        "code": "dth",
        "name": "Adithinngithigh",
        "searchKey": "adithinngithigh dth"
    },
    {
        "code": "ort",
        "name": "Adivasi Oriya",
        "searchKey": "adivasi oriya ort"
    },
    {
        "code": "gas",
        "name": "Adiwasi Garasia",
        "searchKey": "adiwasi garasia gas"
    },
    {
        "code": "adt",
        "name": "Adnyamathanha",
        "searchKey": "adnyamathanha adt"
    },
    {
        "code": "adr",
        "name": "Adonara",
        "searchKey": "adonara adr"
    },
    {
        "code": "adu",
        "name": "Aduge",
        "searchKey": "aduge adu"
    },
    {
        "code": "ady",
        "name": "Adyghe",
        "searchKey": "adyghe ady"
    },
    {
        "code": "adz",
        "name": "Adzera",
        "searchKey": "adzera adz"
    },
    {
        "code": "aez",
        "name": "Aeka",
        "searchKey": "aeka aez"
    },
    {
        "code": "awi",
        "name": "Aekyom",
        "searchKey": "aekyom awi"
    },
    {
        "code": "xae",
        "name": "Aequian",
        "searchKey": "aequian xae"
    },
    {
        "code": "aeq",
        "name": "Aer",
        "searchKey": "aer aeq"
    },
    {
        "code": "aal",
        "name": "Afade",
        "searchKey": "afade aal"
    },
    {
        "code": "aar",
        "name": "Afar",
        "searchKey": "afar aar"
    },
    {
        "code": "afg",
        "name": "Afghan Sign Language",
        "searchKey": "afghan sign language afg"
    },
    {
        "code": "aft",
        "name": "Afitti",
        "searchKey": "afitti aft"
    },
    {
        "code": "afh",
        "name": "Afrihili",
        "searchKey": "afrihili afh"
    },
    {
        "code": "afr",
        "name": "Afrikaans",
        "searchKey": "afrikaans afr"
    },
    {
        "code": "afs",
        "name": "Afro-Seminole Creole",
        "searchKey": "afro-seminole creole afs"
    },
    {
        "code": "agd",
        "name": "Agarabi",
        "searchKey": "agarabi agd"
    },
    {
        "code": "agi",
        "name": "Agariya",
        "searchKey": "agariya agi"
    },
    {
        "code": "agc",
        "name": "Agatu",
        "searchKey": "agatu agc"
    },
    {
        "code": "avo",
        "name": "Agavotaguerra",
        "searchKey": "agavotaguerra avo"
    },
    {
        "code": "agq",
        "name": "Aghem",
        "searchKey": "aghem agq"
    },
    {
        "code": "ahh",
        "name": "Aghu",
        "searchKey": "aghu ahh"
    },
    {
        "code": "agx",
        "name": "Aghul",
        "searchKey": "aghul agx"
    },
    {
        "code": "gtu",
        "name": "Aghu-Tharnggala",
        "searchKey": "aghu-tharnggala gtu"
    },
    {
        "code": "xag",
        "name": "Aghwan",
        "searchKey": "aghwan xag"
    },
    {
        "code": "aif",
        "name": "Agi",
        "searchKey": "agi aif"
    },
    {
        "code": "kit",
        "name": "Agob",
        "searchKey": "agob kit"
    },
    {
        "code": "ibm",
        "name": "Agoi",
        "searchKey": "agoi ibm"
    },
    {
        "code": "agu",
        "name": "Aguacateco",
        "searchKey": "aguacateco agu"
    },
    {
        "code": "aga",
        "name": "Aguano",
        "searchKey": "aguano aga"
    },
    {
        "code": "agr",
        "name": "Aguaruna",
        "searchKey": "aguaruna agr"
    },
    {
        "code": "aug",
        "name": "Aguna",
        "searchKey": "aguna aug"
    },
    {
        "code": "msm",
        "name": "Agusan Manobo",
        "searchKey": "agusan manobo msm"
    },
    {
        "code": "agn",
        "name": "Agutaynen",
        "searchKey": "agutaynen agn"
    },
    {
        "code": "yay",
        "name": "Agwagwune",
        "searchKey": "agwagwune yay"
    },
    {
        "code": "aha",
        "name": "Ahanta",
        "searchKey": "ahanta aha"
    },
    {
        "code": "esg",
        "name": "Aheri Gondi",
        "searchKey": "aheri gondi esg"
    },
    {
        "code": "thm",
        "name": "Aheu",
        "searchKey": "aheu thm"
    },
    {
        "code": "ahr",
        "name": "Ahirani",
        "searchKey": "ahirani ahr"
    },
    {
        "code": "aho",
        "name": "Ahom",
        "searchKey": "ahom aho"
    },
    {
        "code": "aht",
        "name": "Ahtena",
        "searchKey": "ahtena aht"
    },
    {
        "code": "nfd",
        "name": "Ahwai",
        "searchKey": "ahwai nfd"
    },
    {
        "code": "aih",
        "name": "Ai-Cham",
        "searchKey": "ai-cham aih"
    },
    {
        "code": "aix",
        "name": "Aighon",
        "searchKey": "aighon aix"
    },
    {
        "code": "tba",
        "name": "Aikanã",
        "searchKey": "aikana tba"
    },
    {
        "code": "mwg",
        "name": "Aiklep",
        "searchKey": "aiklep mwg"
    },
    {
        "code": "aiq",
        "name": "Aimaq",
        "searchKey": "aimaq aiq"
    },
    {
        "code": "ail",
        "name": "Aimele",
        "searchKey": "aimele ail"
    },
    {
        "code": "aim",
        "name": "Aimol",
        "searchKey": "aimol aim"
    },
    {
        "code": "aic",
        "name": "Ainbai",
        "searchKey": "ainbai aic"
    },
    {
        "code": "aib",
        "name": "Ainu (China)",
        "searchNames": [
            "Ainu"
        ],
        "searchKey": "ainu china aib ainu"
    },
    {
        "code": "ain",
        "name": "Ainu (Japan)",
        "searchNames": [
            "Ainu"
        ],
        "searchKey": "ainu japan ain ainu"
    },
    {
        "code": "aki",
        "name": "Aiome",
        "searchKey": "aiome aki"
    },
    {
        "code": "air",
        "name": "Airoran",
        "searchKey": "airoran air"
    },
    {
        "code": "aio",
        "name": "Aiton",
        "searchKey": "aiton aio"
    },
    {
        "code": "ajg",
        "name": "Aja (Benin)",
        "searchNames": [
            "Aja"
        ],
        "searchKey": "aja benin ajg aja"
    },
    {
        "code": "aja",
        "name": "Aja (South Sudan)",
        "searchNames": [
            "Aja"
        ],
        "searchKey": "aja south sudan aja"
    },
    {
        "code": "ajw",
        "name": "Ajawa",
        "searchKey": "ajawa ajw"
    },
    {
        "code": "aji",
        "name": "Ajië",
        "searchKey": "ajie aji"
    },
    {
        "code": "muc",
        "name": "Ajumbu",
        "searchKey": "ajumbu muc"
    },
    {
        "code": "cpc",
        "name": "Ajyíninka Apurucayali",
        "searchKey": "ajyininka apurucayali cpc"
    },
    {
        "code": "akq",
        "name": "Ak",
        "searchKey": "ak akq"
    },
    {
        "code": "soh",
        "name": "Aka",
        "searchKey": "aka soh"
    },
    {
        "code": "abj",
        "name": "Aka-Bea",
        "searchKey": "aka-bea abj"
    },
    {
        "code": "akm",
        "name": "Aka-Bo",
        "searchKey": "aka-bo akm"
    },
    {
        "code": "aci",
        "name": "Aka-Cari",
        "searchKey": "aka-cari aci"
    },
    {
        "code": "akj",
        "name": "Aka-Jeru",
        "searchKey": "aka-jeru akj"
    },
    {
        "code": "akx",
        "name": "Aka-Kede",
        "searchKey": "aka-kede akx"
    },
    {
        "code": "aky",
        "name": "Aka-Kol",
        "searchKey": "aka-kol aky"
    },
    {
        "code": "ack",
        "name": "Aka-Kora",
        "searchKey": "aka-kora ack"
    },
    {
        "code": "aka",
        "name": "Akan",
        "searchKey": "akan aka"
    },
    {
        "code": "acl",
        "name": "Akar-Bale",
        "searchKey": "akar-bale acl"
    },
    {
        "code": "aks",
        "name": "Akaselem",
        "searchKey": "akaselem aks"
    },
    {
        "code": "ake",
        "name": "Akawaio",
        "searchKey": "akawaio ake"
    },
    {
        "code": "aik",
        "name": "Ake",
        "searchKey": "ake aik"
    },
    {
        "code": "keu",
        "name": "Akebu",
        "searchKey": "akebu keu"
    },
    {
        "code": "tsr",
        "name": "Akei",
        "searchKey": "akei tsr"
    },
    {
        "code": "aeu",
        "name": "Akeu",
        "searchKey": "akeu aeu"
    },
    {
        "code": "ahk",
        "name": "Akha",
        "searchKey": "akha ahk"
    },
    {
        "code": "akv",
        "name": "Akhvakh",
        "searchKey": "akhvakh akv"
    },
    {
        "code": "akk",
        "name": "Akkadian",
        "searchKey": "akkadian akk"
    },
    {
        "code": "sia",
        "name": "Akkala Sami",
        "searchKey": "akkala sami sia"
    },
    {
        "code": "akl",
        "name": "Aklanon",
        "searchKey": "aklanon akl"
    },
    {
        "code": "akt",
        "name": "Akolet",
        "searchKey": "akolet akt"
    },
    {
        "code": "bss",
        "name": "Akoose",
        "searchKey": "akoose bss"
    },
    {
        "code": "miw",
        "name": "Akoye",
        "searchKey": "akoye miw"
    },
    {
        "code": "akf",
        "name": "Akpa",
        "searchKey": "akpa akf"
    },
    {
        "code": "ibe",
        "name": "Akpes",
        "searchKey": "akpes ibe"
    },
    {
        "code": "afi",
        "name": "Akrukay",
        "searchKey": "akrukay afi"
    },
    {
        "code": "spm",
        "name": "Akukem",
        "searchKey": "akukem spm"
    },
    {
        "code": "ayk",
        "name": "Akuku",
        "searchKey": "akuku ayk"
    },
    {
        "code": "aku",
        "name": "Akum",
        "searchKey": "akum aku"
    },
    {
        "code": "aqz",
        "name": "Akuntsu",
        "searchKey": "akuntsu aqz"
    },
    {
        "code": "ako",
        "name": "Akurio",
        "searchKey": "akurio ako"
    },
    {
        "code": "akw",
        "name": "Akwa",
        "searchKey": "akwa akw"
    },
    {
        "code": "nqy",
        "name": "Akyaung Ari Naga",
        "searchKey": "akyaung ari naga nqy"
    },
    {
        "code": "alw",
        "name": "Alaba-K’abeena",
        "searchKey": "alaba-kabeena alw"
    },
    {
        "code": "akz",
        "name": "Alabama",
        "searchKey": "alabama akz"
    },
    {
        "code": "dul",
        "name": "Alabat Island Agta",
        "searchKey": "alabat island agta dul"
    },
    {
        "code": "mim",
        "name": "Alacatlatzala Mixtec",
        "searchKey": "alacatlatzala mixtec mim"
    },
    {
        "code": "ala",
        "name": "Alago",
        "searchKey": "alago ala"
    },
    {
        "code": "wbj",
        "name": "Alagwa",
        "searchKey": "alagwa wbj"
    },
    {
        "code": "alk",
        "name": "Alak",
        "searchKey": "alak alk"
    },
    {
        "code": "amp",
        "name": "Alamblak",
        "searchKey": "alamblak amp"
    },
    {
        "code": "alj",
        "name": "Alangan",
        "searchKey": "alangan alj"
    },
    {
        "code": "xln",
        "name": "Alanic",
        "searchKey": "alanic xln"
    },
    {
        "code": "apv",
        "name": "Alapmunte",
        "searchKey": "alapmunte apv"
    },
    {
        "code": "alh",
        "name": "Alawa",
        "searchKey": "alawa alh"
    },
    {
        "code": "sqi",
        "name": "Albanian",
        "searchKey": "albanian sqi"
    },
    {
        "code": "sqk",
        "name": "Albanian Sign Language",
        "searchKey": "albanian sign language sqk"
    },
    {
        "code": "lsc",
        "name": "Albarradas Sign Language",
        "searchKey": "albarradas sign language lsc"
    },
    {
        "code": "xta",
        "name": "Alcozauca Mixtec",
        "searchKey": "alcozauca mixtec xta"
    },
    {
        "code": "alf",
        "name": "Alege",
        "searchKey": "alege alf"
    },
    {
        "code": "gah",
        "name": "Alekano",
        "searchKey": "alekano gah"
    },
    {
        "code": "ale",
        "name": "Aleut",
        "searchKey": "aleut ale"
    },
    {
        "code": "arq",
        "name": "Algerian Arabic",
        "searchKey": "algerian arabic arq"
    },
    {
        "code": "ajs",
        "name": "Algerian Jewish Sign Language",
        "searchKey": "algerian jewish sign language ajs"
    },
    {
        "code": "aao",
        "name": "Algerian Saharan Arabic",
        "searchKey": "algerian saharan arabic aao"
    },
    {
        "code": "asp",
        "name": "Algerian Sign Language",
        "searchKey": "algerian sign language asp"
    },
    {
        "code": "alq",
        "name": "Algonquin",
        "searchKey": "algonquin alq"
    },
    {
        "code": "aiy",
        "name": "Ali",
        "searchKey": "ali aiy"
    },
    {
        "code": "ald",
        "name": "Alladian",
        "searchKey": "alladian ald"
    },
    {
        "code": "all",
        "name": "Allar",
        "searchKey": "allar all"
    },
    {
        "code": "aid",
        "name": "Alngith",
        "searchKey": "alngith aid"
    },
    {
        "code": "ypo",
        "name": "Alo Phola",
        "searchKey": "alo phola ypo"
    },
    {
        "code": "zaq",
        "name": "Aloápam Zapotec",
        "searchKey": "aloapam zapotec zaq"
    },
    {
        "code": "aol",
        "name": "Alor",
        "searchKey": "alor aol"
    },
    {
        "code": "syy",
        "name": "Al-Sayyid Bedouin Sign Language",
        "searchKey": "al-sayyid bedouin sign language syy"
    },
    {
        "code": "aes",
        "name": "Alsea",
        "searchKey": "alsea aes"
    },
    {
        "code": "xua",
        "name": "Alu Kurumba",
        "searchKey": "alu kurumba xua"
    },
    {
        "code": "aub",
        "name": "Alugu",
        "searchKey": "alugu aub"
    },
    {
        "code": "aab",
        "name": "Alumu-Tesu",
        "searchKey": "alumu-tesu aab"
    },
    {
        "code": "alp",
        "name": "Alune",
        "searchKey": "alune alp"
    },
    {
        "code": "yna",
        "name": "Aluo",
        "searchKey": "aluo yna"
    },
    {
        "code": "alz",
        "name": "Alur",
        "searchKey": "alur alz"
    },
    {
        "code": "alr",
        "name": "Alutor",
        "searchKey": "alutor alr"
    },
    {
        "code": "avd",
        "name": "Alviri-Vidari",
        "searchKey": "alviri-vidari avd"
    },
    {
        "code": "aly",
        "name": "Alyawarr",
        "searchKey": "alyawarr aly"
    },
    {
        "code": "amm",
        "name": "Ama (Papua New Guinea)",
        "searchNames": [
            "Ama"
        ],
        "searchKey": "ama papua new guinea amm ama"
    },
    {
        "code": "nyi",
        "name": "Ama (Sudan)",
        "searchNames": [
            "Ama"
        ],
        "searchKey": "ama sudan nyi ama"
    },
    {
        "code": "amq",
        "name": "Amahai",
        "searchKey": "amahai amq"
    },
    {
        "code": "amc",
        "name": "Amahuaca",
        "searchKey": "amahuaca amc"
    },
    {
        "code": "ali",
        "name": "Amaimon",
        "searchKey": "amaimon ali"
    },
    {
        "code": "aad",
        "name": "Amal",
        "searchKey": "amal aad"
    },
    {
        "code": "jks",
        "name": "Amami Koniya Sign Language",
        "searchKey": "amami koniya sign language jks"
    },
    {
        "code": "amn",
        "name": "Amanab",
        "searchKey": "amanab amn"
    },
    {
        "code": "ama",
        "name": "Amanayé",
        "searchKey": "amanaye ama"
    },
    {
        "code": "aie",
        "name": "Amara",
        "searchKey": "amara aie"
    },
    {
        "code": "amr",
        "name": "Amarakaeri",
        "searchKey": "amarakaeri amr"
    },
    {
        "code": "aaz",
        "name": "Amarasi",
        "searchKey": "amarasi aaz"
    },
    {
        "code": "zpo",
        "name": "Amatlán Zapotec",
        "searchKey": "amatlan zapotec zpo"
    },
    {
        "code": "utp",
        "name": "Amba (Solomon Islands)",
        "searchNames": [
            "Amba"
        ],
        "searchKey": "amba solomon islands utp amba"
    },
    {
        "code": "rwm",
        "name": "Amba (Uganda)",
        "searchNames": [
            "Amba"
        ],
        "searchKey": "amba uganda rwm amba"
    },
    {
        "code": "amk",
        "name": "Ambai",
        "searchKey": "ambai amk"
    },
    {
        "code": "aew",
        "name": "Ambakich",
        "searchKey": "ambakich aew"
    },
    {
        "code": "abc",
        "name": "Ambala Ayta",
        "searchKey": "ambala ayta abc"
    },
    {
        "code": "amv",
        "name": "Ambelau",
        "searchKey": "ambelau amv"
    },
    {
        "code": "ael",
        "name": "Ambele",
        "searchKey": "ambele ael"
    },
    {
        "code": "alm",
        "name": "Amblong",
        "searchKey": "amblong alm"
    },
    {
        "code": "amb",
        "name": "Ambo",
        "searchKey": "ambo amb"
    },
    {
        "code": "abs",
        "name": "Ambonese Malay",
        "searchKey": "ambonese malay abs"
    },
    {
        "code": "qva",
        "name": "Ambo-Pasco Quechua",
        "searchKey": "ambo-pasco quechua qva"
    },
    {
        "code": "aag",
        "name": "Ambrak",
        "searchKey": "ambrak aag"
    },
    {
        "code": "apo",
        "name": "Ambul",
        "searchKey": "ambul apo"
    },
    {
        "code": "abt",
        "name": "Ambulas",
        "searchKey": "ambulas abt"
    },
    {
        "code": "amj",
        "name": "Amdang",
        "searchKey": "amdang amj"
    },
    {
        "code": "adx",
        "name": "Amdo Tibetan",
        "searchKey": "amdo tibetan adx"
    },
    {
        "code": "aey",
        "name": "Amele",
        "searchKey": "amele aey"
    },
    {
        "code": "ase",
        "name": "American Sign Language",
        "searchKey": "american sign language ase"
    },
    {
        "code": "ifa",
        "name": "Amganad Ifugao",
        "searchKey": "amganad ifugao ifa"
    },
    {
        "code": "amh",
        "name": "Amharic",
        "searchKey": "amharic amh"
    },
    {
        "code": "amy",
        "name": "Ami",
        "searchKey": "ami amy"
    },
    {
        "code": "ami",
        "name": "Amis",
        "searchKey": "amis ami"
    },
    {
        "code": "amo",
        "name": "Amo",
        "searchKey": "amo"
    },
    {
        "code": "alx",
        "name": "Amol",
        "searchKey": "amol alx"
    },
    {
        "code": "mbz",
        "name": "Amoltepec Mixtec",
        "searchKey": "amoltepec mixtec mbz"
    },
    {
        "code": "apg",
        "name": "Ampanang",
        "searchKey": "ampanang apg"
    },
    {
        "code": "aqd",
        "name": "Ampari Dogon",
        "searchKey": "ampari dogon aqd"
    },
    {
        "code": "ajz",
        "name": "Amri Karbi",
        "searchKey": "amri karbi ajz"
    },
    {
        "code": "amt",
        "name": "Amto",
        "searchKey": "amto amt"
    },
    {
        "code": "adw",
        "name": "Amundava",
        "searchKey": "amundava adw"
    },
    {
        "code": "amg",
        "name": "Amurdak",
        "searchKey": "amurdak amg"
    },
    {
        "code": "dti",
        "name": "Ana Tinga Dogon",
        "searchKey": "ana tinga dogon dti"
    },
    {
        "code": "anw",
        "name": "Anaang",
        "searchKey": "anaang anw"
    },
    {
        "code": "akg",
        "name": "Anakalangu",
        "searchKey": "anakalangu akg"
    },
    {
        "code": "anm",
        "name": "Anal",
        "searchKey": "anal anm"
    },
    {
        "code": "pda",
        "name": "Anam",
        "searchKey": "anam pda"
    },
    {
        "code": "aan",
        "name": "Anambé",
        "searchKey": "anambe aan"
    },
    {
        "code": "imi",
        "name": "Anamgura",
        "searchKey": "anamgura imi"
    },
    {
        "code": "bpo",
        "name": "Anasi",
        "searchKey": "anasi bpo"
    },
    {
        "code": "grc",
        "name": "Ancient Greek (to 1453)",
        "searchNames": [
            "Ancient Greek"
        ],
        "searchKey": "ancient greek to 1453 grc ancient greek"
    },
    {
        "code": "hbo",
        "name": "Ancient Hebrew",
        "searchKey": "ancient hebrew hbo"
    },
    {
        "code": "xmk",
        "name": "Ancient Macedonian",
        "searchKey": "ancient macedonian xmk"
    },
    {
        "code": "xna",
        "name": "Ancient North Arabian",
        "searchKey": "ancient north arabian xna"
    },
    {
        "code": "xzp",
        "name": "Ancient Zapotec",
        "searchKey": "ancient zapotec xzp"
    },
    {
        "code": "dgl",
        "name": "Andaandi",
        "searchKey": "andaandi dgl"
    },
    {
        "code": "afd",
        "name": "Andai",
        "searchKey": "andai afd"
    },
    {
        "code": "ajn",
        "name": "Andajin",
        "searchKey": "andajin ajn"
    },
    {
        "code": "xaa",
        "name": "Andalusian Arabic",
        "searchKey": "andalusian arabic xaa"
    },
    {
        "code": "hca",
        "name": "Andaman Creole Hindi",
        "searchKey": "andaman creole hindi hca"
    },
    {
        "code": "ana",
        "name": "Andaqui",
        "searchKey": "andaqui ana"
    },
    {
        "code": "aod",
        "name": "Andarum",
        "searchKey": "andarum aod"
    },
    {
        "code": "adg",
        "name": "Andegerebinha",
        "searchKey": "andegerebinha adg"
    },
    {
        "code": "anr",
        "name": "Andh",
        "searchKey": "andh anr"
    },
    {
        "code": "ani",
        "name": "Andi",
        "searchKey": "andi ani"
    },
    {
        "code": "bzb",
        "name": "Andio",
        "searchKey": "andio bzb"
    },
    {
        "code": "anb",
        "name": "Andoa",
        "searchKey": "andoa anb"
    },
    {
        "code": "ano",
        "name": "Andoque",
        "searchKey": "andoque ano"
    },
    {
        "code": "anx",
        "name": "Andra-Hus",
        "searchKey": "andra-hus anx"
    },
    {
        "code": "aty",
        "name": "Aneityum",
        "searchKey": "aneityum aty"
    },
    {
        "code": "anz",
        "name": "Anem",
        "searchKey": "anem anz"
    },
    {
        "code": "aby",
        "name": "Aneme Wake",
        "searchKey": "aneme wake aby"
    },
    {
        "code": "myo",
        "name": "Anfillo",
        "searchKey": "anfillo myo"
    },
    {
        "code": "agm",
        "name": "Angaataha",
        "searchKey": "angaataha agm"
    },
    {
        "code": "aqt",
        "name": "Angaité",
        "searchKey": "angaite aqt"
    },
    {
        "code": "age",
        "name": "Angal",
        "searchKey": "angal age"
    },
    {
        "code": "aoe",
        "name": "Angal Enen",
        "searchKey": "angal enen aoe"
    },
    {
        "code": "akh",
        "name": "Angal Heneng",
        "searchKey": "angal heneng akh"
    },
    {
        "code": "njm",
        "name": "Angami Naga",
        "searchKey": "angami naga njm"
    },
    {
        "code": "yli",
        "name": "Angguruk Yali",
        "searchKey": "angguruk yali yli"
    },
    {
        "code": "anp",
        "name": "Angika",
        "searchKey": "angika anp"
    },
    {
        "code": "avm",
        "name": "Angkamuthi",
        "searchKey": "angkamuthi avm"
    },
    {
        "code": "xno",
        "name": "Anglo-Norman",
        "searchKey": "anglo-norman xno"
    },
    {
        "code": "rme",
        "name": "Angloromani",
        "searchKey": "angloromani rme"
    },
    {
        "code": "aoa",
        "name": "Angolar",
        "searchKey": "angolar aoa"
    },
    {
        "code": "agg",
        "name": "Angor",
        "searchKey": "angor agg"
    },
    {
        "code": "aog",
        "name": "Angoram",
        "searchKey": "angoram aog"
    },
    {
        "code": "tnd",
        "name": "Angosturas Tunebo",
        "searchKey": "angosturas tunebo tnd"
    },
    {
        "code": "awg",
        "name": "Anguthimri",
        "searchKey": "anguthimri awg"
    },
    {
        "code": "ypn",
        "name": "Ani Phowa",
        "searchKey": "ani phowa ypn"
    },
    {
        "code": "blo",
        "name": "Anii",
        "searchKey": "anii blo"
    },
    {
        "code": "anf",
        "name": "Animere",
        "searchKey": "animere anf"
    },
    {
        "code": "aoi",
        "name": "Anindilyakwa",
        "searchKey": "anindilyakwa aoi"
    },
    {
        "code": "aqk",
        "name": "Aninka",
        "searchKey": "aninka aqk"
    },
    {
        "code": "boj",
        "name": "Anjam",
        "searchKey": "anjam boj"
    },
    {
        "code": "aak",
        "name": "Ankave",
        "searchKey": "ankave aak"
    },
    {
        "code": "amx",
        "name": "Anmatyerre",
        "searchKey": "anmatyerre amx"
    },
    {
        "code": "nun",
        "name": "Anong",
        "searchKey": "anong nun"
    },
    {
        "code": "anj",
        "name": "Anor",
        "searchKey": "anor anj"
    },
    {
        "code": "ans",
        "name": "Anserma",
        "searchKey": "anserma ans"
    },
    {
        "code": "and",
        "name": "Ansus",
        "searchKey": "ansus and"
    },
    {
        "code": "ant",
        "name": "Antakarinya",
        "searchKey": "antakarinya ant"
    },
    {
        "code": "xmv",
        "name": "Antankarana Malagasy",
        "searchKey": "antankarana malagasy xmv"
    },
    {
        "code": "aig",
        "name": "Antigua and Barbuda Creole English",
        "searchKey": "antigua and barbuda creole english aig"
    },
    {
        "code": "anu",
        "name": "Anuak",
        "searchKey": "anuak anu"
    },
    {
        "code": "cko",
        "name": "Anufo",
        "searchKey": "anufo cko"
    },
    {
        "code": "anl",
        "name": "Anu-Hkongso Chin",
        "searchKey": "anu-hkongso chin anl"
    },
    {
        "code": "aui",
        "name": "Anuki",
        "searchKey": "anuki aui"
    },
    {
        "code": "auq",
        "name": "Anus",
        "searchKey": "anus auq"
    },
    {
        "code": "aud",
        "name": "Anuta",
        "searchKey": "anuta aud"
    },
    {
        "code": "any",
        "name": "Anyin",
        "searchKey": "anyin any"
    },
    {
        "code": "mtb",
        "name": "Anyin Morofo",
        "searchKey": "anyin morofo mtb"
    },
    {
        "code": "njo",
        "name": "Ao Naga",
        "searchKey": "ao naga njo"
    },
    {
        "code": "pni",
        "name": "Aoheng",
        "searchKey": "aoheng pni"
    },
    {
        "code": "aor",
        "name": "Aore",
        "searchKey": "aore aor"
    },
    {
        "code": "aou",
        "name": "A'ou",
        "searchKey": "aou"
    },
    {
        "code": "kbx",
        "name": "Ap Ma",
        "searchKey": "ap ma kbx"
    },
    {
        "code": "xap",
        "name": "Apalachee",
        "searchKey": "apalachee xap"
    },
    {
        "code": "apy",
        "name": "Apalaí",
        "searchKey": "apalai apy"
    },
    {
        "code": "ena",
        "name": "Apali",
        "searchKey": "apali ena"
    },
    {
        "code": "mip",
        "name": "Apasco-Apoala Mixtec",
        "searchKey": "apasco-apoala mixtec mip"
    },
    {
        "code": "apt",
        "name": "Apatani",
        "searchKey": "apatani apt"
    },
    {
        "code": "api",
        "name": "Apiaká",
        "searchKey": "apiaka api"
    },
    {
        "code": "apn",
        "name": "Apinayé",
        "searchKey": "apinaye apn"
    },
    {
        "code": "app",
        "name": "Apma",
        "searchKey": "apma app"
    },
    {
        "code": "ahp",
        "name": "Aproumu Aizi",
        "searchKey": "aproumu aizi ahp"
    },
    {
        "code": "apq",
        "name": "A-Pucikwar",
        "searchKey": "a-pucikwar apq"
    },
    {
        "code": "apu",
        "name": "Apurinã",
        "searchKey": "apurina apu"
    },
    {
        "code": "apx",
        "name": "Aputai",
        "searchKey": "aputai apx"
    },
    {
        "code": "xaq",
        "name": "Aquitanian",
        "searchKey": "aquitanian xaq"
    },
    {
        "code": "ard",
        "name": "Arabana",
        "searchKey": "arabana ard"
    },
    {
        "code": "arl",
        "name": "Arabela",
        "searchKey": "arabela arl"
    },
    {
        "code": "ara",
        "name": "Arabic",
        "searchKey": "arabic ara"
    },
    {
        "code": "arg",
        "name": "Aragonese",
        "searchKey": "aragonese arg"
    },
    {
        "code": "akr",
        "name": "Araki",
        "searchKey": "araki akr"
    },
    {
        "code": "rkw",
        "name": "Arakwal",
        "searchKey": "arakwal rkw"
    },
    {
        "code": "atq",
        "name": "Aralle-Tabulahan",
        "searchKey": "aralle-tabulahan atq"
    },
    {
        "code": "stk",
        "name": "Arammba",
        "searchKey": "arammba stk"
    },
    {
        "code": "aaf",
        "name": "Aranadan",
        "searchKey": "aranadan aaf"
    },
    {
        "code": "xrt",
        "name": "Aranama-Tamique",
        "searchKey": "aranama-tamique xrt"
    },
    {
        "code": "jbj",
        "name": "Arandai",
        "searchKey": "arandai jbj"
    },
    {
        "code": "aro",
        "name": "Araona",
        "searchKey": "araona aro"
    },
    {
        "code": "arp",
        "name": "Arapaho",
        "searchKey": "arapaho arp"
    },
    {
        "code": "arj",
        "name": "Arapaso",
        "searchKey": "arapaso arj"
    },
    {
        "code": "xaj",
        "name": "Ararandewára",
        "searchKey": "ararandewara xaj"
    },
    {
        "code": "arw",
        "name": "Arawak",
        "searchKey": "arawak arw"
    },
    {
        "code": "awt",
        "name": "Araweté",
        "searchKey": "arawete awt"
    },
    {
        "code": "awm",
        "name": "Arawum",
        "searchKey": "arawum awm"
    },
    {
        "code": "aae",
        "name": "Arbëreshë Albanian",
        "searchKey": "arbereshe albanian aae"
    },
    {
        "code": "arv",
        "name": "Arbore",
        "searchKey": "arbore arv"
    },
    {
        "code": "aqc",
        "name": "Archi",
        "searchKey": "archi aqc"
    },
    {
        "code": "pka",
        "name": "Ardhamāgadhī Prākrit",
        "searchKey": "ardhamagadhi prakrit pka"
    },
    {
        "code": "mwc",
        "name": "Are",
        "searchKey": "are mwc"
    },
    {
        "code": "aea",
        "name": "Areba",
        "searchKey": "areba aea"
    },
    {
        "code": "aem",
        "name": "Arem",
        "searchKey": "arem aem"
    },
    {
        "code": "qxu",
        "name": "Arequipa-La Unión Quechua",
        "searchKey": "arequipa-la union quechua qxu"
    },
    {
        "code": "aed",
        "name": "Argentine Sign Language",
        "searchKey": "argentine sign language aed"
    },
    {
        "code": "agj",
        "name": "Argobba",
        "searchKey": "argobba agj"
    },
    {
        "code": "agf",
        "name": "Arguni",
        "searchKey": "arguni agf"
    },
    {
        "code": "aqr",
        "name": "Arhâ",
        "searchKey": "arha aqr"
    },
    {
        "code": "aok",
        "name": "Arhö",
        "searchKey": "arho aok"
    },
    {
        "code": "arh",
        "name": "Arhuaco",
        "searchKey": "arhuaco arh"
    },
    {
        "code": "aac",
        "name": "Ari",
        "searchKey": "ari aac"
    },
    {
        "code": "laz",
        "name": "Aribwatsa",
        "searchKey": "aribwatsa laz"
    },
    {
        "code": "ylu",
        "name": "Aribwaung",
        "searchKey": "aribwaung ylu"
    },
    {
        "code": "aai",
        "name": "Arifama-Miniafia",
        "searchKey": "arifama-miniafia aai"
    },
    {
        "code": "aqg",
        "name": "Arigidi",
        "searchKey": "arigidi aqg"
    },
    {
        "code": "ark",
        "name": "Arikapú",
        "searchKey": "arikapu ark"
    },
    {
        "code": "ari",
        "name": "Arikara",
        "searchKey": "arikara ari"
    },
    {
        "code": "ait",
        "name": "Arikem",
        "searchKey": "arikem ait"
    },
    {
        "code": "xrn",
        "name": "Arin",
        "searchKey": "arin xrn"
    },
    {
        "code": "luc",
        "name": "Aringa",
        "searchKey": "aringa luc"
    },
    {
        "code": "xrm",
        "name": "Armazic",
        "searchKey": "armazic xrm"
    },
    {
        "code": "hye",
        "name": "Armenian",
        "searchKey": "armenian hye"
    },
    {
        "code": "aen",
        "name": "Armenian Sign Language",
        "searchKey": "armenian sign language aen"
    },
    {
        "code": "apr",
        "name": "Arop-Lokep",
        "searchKey": "arop-lokep apr"
    },
    {
        "code": "aps",
        "name": "Arop-Sissano",
        "searchKey": "arop-sissano aps"
    },
    {
        "code": "aia",
        "name": "Arosi",
        "searchKey": "arosi aia"
    },
    {
        "code": "frp",
        "name": "Arpitan",
        "searchKey": "arpitan frp"
    },
    {
        "code": "rrt",
        "name": "Arritinngithigh",
        "searchKey": "arritinngithigh rrt"
    },
    {
        "code": "atz",
        "name": "Arta",
        "searchKey": "arta atz"
    },
    {
        "code": "aru",
        "name": "Aruá (Amazonas State)",
        "searchNames": [
            "Aruá"
        ],
        "searchKey": "arua amazonas state aru arua"
    },
    {
        "code": "arx",
        "name": "Aruá (Rodonia State)",
        "searchNames": [
            "Aruá"
        ],
        "searchKey": "arua rodonia state arx arua"
    },
    {
        "code": "msy",
        "name": "Aruamu",
        "searchKey": "aruamu msy"
    },
    {
        "code": "aur",
        "name": "Aruek",
        "searchKey": "aruek aur"
    },
    {
        "code": "lsr",
        "name": "Aruop",
        "searchKey": "aruop lsr"
    },
    {
        "code": "atx",
        "name": "Arutani",
        "searchKey": "arutani atx"
    },
    {
        "code": "aat",
        "name": "Arvanitika Albanian",
        "searchKey": "arvanitika albanian aat"
    },
    {
        "code": "asz",
        "name": "As",
        "searchKey": "as asz"
    },
    {
        "code": "mtv",
        "name": "Asaro'o",
        "searchKey": "asaroo mtv"
    },
    {
        "code": "cni",
        "name": "Asháninka",
        "searchKey": "ashaninka cni"
    },
    {
        "code": "ahs",
        "name": "Ashe",
        "searchKey": "ashe ahs"
    },
    {
        "code": "cjo",
        "name": "Ashéninka Pajonal",
        "searchKey": "asheninka pajonal cjo"
    },
    {
        "code": "prq",
        "name": "Ashéninka Perené",
        "searchKey": "asheninka perene prq"
    },
    {
        "code": "ask",
        "name": "Ashkun",
        "searchKey": "ashkun ask"
    },
    {
        "code": "csh",
        "name": "Asho Chin",
        "searchKey": "asho chin csh"
    },
    {
        "code": "atn",
        "name": "Ashtiani",
        "searchKey": "ashtiani atn"
    },
    {
        "code": "asl",
        "name": "Asilulu",
        "searchKey": "asilulu asl"
    },
    {
        "code": "eiv",
        "name": "Askopan",
        "searchKey": "askopan eiv"
    },
    {
        "code": "asv",
        "name": "Asoa",
        "searchKey": "asoa asv"
    },
    {
        "code": "asm",
        "name": "Assamese",
        "searchKey": "assamese asm"
    },
    {
        "code": "sjg",
        "name": "Assangori",
        "searchKey": "assangori sjg"
    },
    {
        "code": "asb",
        "name": "Assiniboine",
        "searchKey": "assiniboine asb"
    },
    {
        "code": "aii",
        "name": "Assyrian Neo-Aramaic",
        "searchKey": "assyrian neo-aramaic aii"
    },
    {
        "code": "ast",
        "name": "Asturian",
        "searchKey": "asturian ast"
    },
    {
        "code": "aum",
        "name": "Asu (Nigeria)",
        "searchNames": [
            "Asu"
        ],
        "searchKey": "asu nigeria aum asu"
    },
    {
        "code": "asa",
        "name": "Asu (Tanzania)",
        "searchNames": [
            "Asu"
        ],
        "searchKey": "asu tanzania asa asu"
    },
    {
        "code": "psa",
        "name": "Asue Awyu",
        "searchKey": "asue awyu psa"
    },
    {
        "code": "aua",
        "name": "Asumboa",
        "searchKey": "asumboa aua"
    },
    {
        "code": "zoo",
        "name": "Asunción Mixtepec Zapotec",
        "searchKey": "asuncion mixtepec zapotec zoo"
    },
    {
        "code": "asr",
        "name": "Asuri",
        "searchKey": "asuri asr"
    },
    {
        "code": "atm",
        "name": "Ata",
        "searchKey": "ata atm"
    },
    {
        "code": "atd",
        "name": "Ata Manobo",
        "searchKey": "ata manobo atd"
    },
    {
        "code": "aqp",
        "name": "Atakapa",
        "searchKey": "atakapa aqp"
    },
    {
        "code": "amz",
        "name": "Atampaya",
        "searchKey": "atampaya amz"
    },
    {
        "code": "mib",
        "name": "Atatláhuca Mixtec",
        "searchKey": "atatlahuca mixtec mib"
    },
    {
        "code": "adb",
        "name": "Atauran",
        "searchKey": "atauran adb"
    },
    {
        "code": "tay",
        "name": "Atayal",
        "searchKey": "atayal tay"
    },
    {
        "code": "ate",
        "name": "Atemble",
        "searchKey": "atemble ate"
    },
    {
        "code": "aph",
        "name": "Athpariya",
        "searchKey": "athpariya aph"
    },
    {
        "code": "atk",
        "name": "Ati",
        "searchKey": "ati atk"
    },
    {
        "code": "atj",
        "name": "Atikamekw",
        "searchKey": "atikamekw atj"
    },
    {
        "code": "aqm",
        "name": "Atohwaim",
        "searchKey": "atohwaim aqm"
    },
    {
        "code": "ato",
        "name": "Atong (Cameroon)",
        "searchNames": [
            "Atong"
        ],
        "searchKey": "atong cameroon ato atong"
    },
    {
        "code": "aot",
        "name": "Atong (India)",
        "searchNames": [
            "Atong"
        ],
        "searchKey": "atong india aot atong"
    },
    {
        "code": "aox",
        "name": "Atorada",
        "searchKey": "atorada aox"
    },
    {
        "code": "atc",
        "name": "Atsahuaca",
        "searchKey": "atsahuaca atc"
    },
    {
        "code": "cch",
        "name": "Atsam",
        "searchKey": "atsam cch"
    },
    {
        "code": "atw",
        "name": "Atsugewi",
        "searchKey": "atsugewi atw"
    },
    {
        "code": "pkr",
        "name": "Attapady Kurumba",
        "searchKey": "attapady kurumba pkr"
    },
    {
        "code": "ati",
        "name": "Attié",
        "searchKey": "attie ati"
    },
    {
        "code": "ocu",
        "name": "Atzingo Matlatzinca",
        "searchKey": "atzingo matlatzinca ocu"
    },
    {
        "code": "avt",
        "name": "Au",
        "searchKey": "au avt"
    },
    {
        "code": "aul",
        "name": "Aulua",
        "searchKey": "aulua aul"
    },
    {
        "code": "aux",
        "name": "Aurá",
        "searchKey": "aura aux"
    },
    {
        "code": "auh",
        "name": "Aushi",
        "searchKey": "aushi auh"
    },
    {
        "code": "avs",
        "name": "Aushiri",
        "searchKey": "aushiri avs"
    },
    {
        "code": "asf",
        "name": "Auslan",
        "searchKey": "auslan asf"
    },
    {
        "code": "aut",
        "name": "Austral",
        "searchKey": "austral aut"
    },
    {
        "code": "asw",
        "name": "Australian Aborigines Sign Language",
        "searchKey": "australian aborigines sign language asw"
    },
    {
        "code": "asq",
        "name": "Austrian Sign Language",
        "searchKey": "austrian sign language asq"
    },
    {
        "code": "smf",
        "name": "Auwe",
        "searchKey": "auwe smf"
    },
    {
        "code": "auu",
        "name": "Auye",
        "searchKey": "auye auu"
    },
    {
        "code": "auo",
        "name": "Auyokawa",
        "searchKey": "auyokawa auo"
    },
    {
        "code": "avv",
        "name": "Avá-Canoeiro",
        "searchKey": "ava-canoeiro avv"
    },
    {
        "code": "ava",
        "name": "Avaric",
        "searchKey": "avaric ava"
    },
    {
        "code": "avn",
        "name": "Avatime",
        "searchKey": "avatime avn"
    },
    {
        "code": "avb",
        "name": "Avau",
        "searchKey": "avau avb"
    },
    {
        "code": "ave",
        "name": "Avestan",
        "searchKey": "avestan ave"
    },
    {
        "code": "avi",
        "name": "Avikam",
        "searchKey": "avikam avi"
    },
    {
        "code": "avu",
        "name": "Avokaya",
        "searchKey": "avokaya avu"
    },
    {
        "code": "vwa",
        "name": "Awa (China)",
        "searchNames": [
            "Awa"
        ],
        "searchKey": "awa china vwa awa"
    },
    {
        "code": "awb",
        "name": "Awa (Papua New Guinea)",
        "searchNames": [
            "Awa"
        ],
        "searchKey": "awa papua new guinea awb awa"
    },
    {
        "code": "awk",
        "name": "Awabakal",
        "searchKey": "awabakal awk"
    },
    {
        "code": "kwi",
        "name": "Awa-Cuaiquer",
        "searchKey": "awa-cuaiquer kwi"
    },
    {
        "code": "bcu",
        "name": "Awad Bing",
        "searchKey": "awad bing bcu"
    },
    {
        "code": "awa",
        "name": "Awadhi",
        "searchKey": "awadhi awa"
    },
    {
        "code": "awo",
        "name": "Awak",
        "searchKey": "awak awo"
    },
    {
        "code": "aya",
        "name": "Awar",
        "searchKey": "awar aya"
    },
    {
        "code": "awx",
        "name": "Awara",
        "searchKey": "awara awx"
    },
    {
        "code": "awh",
        "name": "Awbono",
        "searchKey": "awbono awh"
    },
    {
        "code": "bob",
        "name": "Aweer",
        "searchKey": "aweer bob"
    },
    {
        "code": "awr",
        "name": "Awera",
        "searchKey": "awera awr"
    },
    {
        "code": "awe",
        "name": "Awetí",
        "searchKey": "aweti awe"
    },
    {
        "code": "azo",
        "name": "Awing",
        "searchKey": "awing azo"
    },
    {
        "code": "auy",
        "name": "Awiyaana",
        "searchKey": "awiyaana auy"
    },
    {
        "code": "auj",
        "name": "Awjilah",
        "searchKey": "awjilah auj"
    },
    {
        "code": "awn",
        "name": "Awngi",
        "searchKey": "awngi awn"
    },
    {
        "code": "gwm",
        "name": "Awngthim",
        "searchKey": "awngthim gwm"
    },
    {
        "code": "kmn",
        "name": "Awtuw",
        "searchKey": "awtuw kmn"
    },
    {
        "code": "yiu",
        "name": "Awu",
        "searchKey": "awu yiu"
    },
    {
        "code": "aww",
        "name": "Awun",
        "searchKey": "awun aww"
    },
    {
        "code": "afu",
        "name": "Awutu",
        "searchKey": "awutu afu"
    },
    {
        "code": "auw",
        "name": "Awyi",
        "searchKey": "awyi auw"
    },
    {
        "code": "ahb",
        "name": "Axamb",
        "searchKey": "axamb ahb"
    },
    {
        "code": "yix",
        "name": "Axi Yi",
        "searchKey": "axi yi yix"
    },
    {
        "code": "ayd",
        "name": "Ayabadhu",
        "searchKey": "ayabadhu ayd"
    },
    {
        "code": "quy",
        "name": "Ayacucho Quechua",
        "searchKey": "ayacucho quechua quy"
    },
    {
        "code": "vmy",
        "name": "Ayautla Mazatec",
        "searchKey": "ayautla mazatec vmy"
    },
    {
        "code": "aye",
        "name": "Ayere",
        "searchKey": "ayere aye"
    },
    {
        "code": "axe",
        "name": "Ayerrerenge",
        "searchKey": "ayerrerenge axe"
    },
    {
        "code": "ayq",
        "name": "Ayi (Papua New Guinea)",
        "searchNames": [
            "Ayi"
        ],
        "searchKey": "ayi papua new guinea ayq ayi"
    },
    {
        "code": "nfl",
        "name": "Ayiwo",
        "searchKey": "ayiwo nfl"
    },
    {
        "code": "yyz",
        "name": "Ayizi",
        "searchKey": "ayizi yyz"
    },
    {
        "code": "ayb",
        "name": "Ayizo Gbe",
        "searchKey": "ayizo gbe ayb"
    },
    {
        "code": "aym",
        "name": "Aymara",
        "searchKey": "aymara aym"
    },
    {
        "code": "zaf",
        "name": "Ayoquesco Zapotec",
        "searchKey": "ayoquesco zapotec zaf"
    },
    {
        "code": "ayo",
        "name": "Ayoreo",
        "searchKey": "ayoreo ayo"
    },
    {
        "code": "ayu",
        "name": "Ayu",
        "searchKey": "ayu"
    },
    {
        "code": "miy",
        "name": "Ayutla Mixtec",
        "searchKey": "ayutla mixtec miy"
    },
    {
        "code": "aze",
        "name": "Azerbaijani",
        "searchKey": "azerbaijani aze"
    },
    {
        "code": "aza",
        "name": "Azha",
        "searchKey": "azha aza"
    },
    {
        "code": "yiz",
        "name": "Azhe",
        "searchKey": "azhe yiz"
    },
    {
        "code": "tpc",
        "name": "Azoyú Me'phaa",
        "searchKey": "azoyu mephaa tpc"
    },
    {
        "code": "bvj",
        "name": "Baan",
        "searchKey": "baan bvj"
    },
    {
        "code": "bqx",
        "name": "Baangi",
        "searchKey": "baangi bqx"
    },
    {
        "code": "bba",
        "name": "Baatonum",
        "searchKey": "baatonum bba"
    },
    {
        "code": "bbw",
        "name": "Baba",
        "searchKey": "baba bbw"
    },
    {
        "code": "mbf",
        "name": "Baba Malay",
        "searchKey": "baba malay mbf"
    },
    {
        "code": "bbm",
        "name": "Babango",
        "searchKey": "babango bbm"
    },
    {
        "code": "bbk",
        "name": "Babanki",
        "searchKey": "babanki bbk"
    },
    {
        "code": "baa",
        "name": "Babatana",
        "searchKey": "babatana baa"
    },
    {
        "code": "bcr",
        "name": "Babine",
        "searchKey": "babine bcr"
    },
    {
        "code": "bzg",
        "name": "Babuza",
        "searchKey": "babuza bzg"
    },
    {
        "code": "bcy",
        "name": "Bacama",
        "searchKey": "bacama bcy"
    },
    {
        "code": "btj",
        "name": "Bacanese Malay",
        "searchKey": "bacanese malay btj"
    },
    {
        "code": "xbc",
        "name": "Bactrian",
        "searchKey": "bactrian xbc"
    },
    {
        "code": "bhz",
        "name": "Bada (Indonesia)",
        "searchNames": [
            "Bada"
        ],
        "searchKey": "bada indonesia bhz bada"
    },
    {
        "code": "bau",
        "name": "Bada (Nigeria)",
        "searchNames": [
            "Bada"
        ],
        "searchKey": "bada nigeria bau bada"
    },
    {
        "code": "bfq",
        "name": "Badaga",
        "searchKey": "badaga bfq"
    },
    {
        "code": "bde",
        "name": "Bade",
        "searchKey": "bade bde"
    },
    {
        "code": "bdz",
        "name": "Badeshi",
        "searchKey": "badeshi bdz"
    },
    {
        "code": "khd",
        "name": "Bädi Kanum",
        "searchKey": "badi kanum khd"
    },
    {
        "code": "bia",
        "name": "Badimaya",
        "searchKey": "badimaya bia"
    },
    {
        "code": "jbi",
        "name": "Badjiri",
        "searchKey": "badjiri jbi"
    },
    {
        "code": "bac",
        "name": "Badui",
        "searchKey": "badui bac"
    },
    {
        "code": "pbp",
        "name": "Badyara",
        "searchKey": "badyara pbp"
    },
    {
        "code": "bvd",
        "name": "Baeggu",
        "searchKey": "baeggu bvd"
    },
    {
        "code": "bvc",
        "name": "Baelelea",
        "searchKey": "baelelea bvc"
    },
    {
        "code": "btr",
        "name": "Baetora",
        "searchKey": "baetora btr"
    },
    {
        "code": "bfj",
        "name": "Bafanji",
        "searchKey": "bafanji bfj"
    },
    {
        "code": "bwt",
        "name": "Bafaw-Balong",
        "searchKey": "bafaw-balong bwt"
    },
    {
        "code": "ksf",
        "name": "Bafia",
        "searchKey": "bafia ksf"
    },
    {
        "code": "bfd",
        "name": "Bafut",
        "searchKey": "bafut bfd"
    },
    {
        "code": "bqf",
        "name": "Baga Kaloum",
        "searchKey": "baga kaloum bqf"
    },
    {
        "code": "bgo",
        "name": "Baga Koga",
        "searchKey": "baga koga bgo"
    },
    {
        "code": "bmd",
        "name": "Baga Manduri",
        "searchKey": "baga manduri bmd"
    },
    {
        "code": "bcg",
        "name": "Baga Pokur",
        "searchKey": "baga pokur bcg"
    },
    {
        "code": "bsp",
        "name": "Baga Sitemu",
        "searchKey": "baga sitemu bsp"
    },
    {
        "code": "bsv",
        "name": "Baga Sobané",
        "searchKey": "baga sobane bsv"
    },
    {
        "code": "bfy",
        "name": "Bagheli",
        "searchKey": "bagheli bfy"
    },
    {
        "code": "bmi",
        "name": "Bagirmi",
        "searchKey": "bagirmi bmi"
    },
    {
        "code": "fui",
        "name": "Bagirmi Fulfulde",
        "searchKey": "bagirmi fulfulde fui"
    },
    {
        "code": "bqg",
        "name": "Bago-Kusuntu",
        "searchKey": "bago-kusuntu bqg"
    },
    {
        "code": "bgq",
        "name": "Bagri",
        "searchKey": "bagri bgq"
    },
    {
        "code": "bpi",
        "name": "Bagupi",
        "searchKey": "bagupi bpi"
    },
    {
        "code": "bqb",
        "name": "Bagusa",
        "searchKey": "bagusa bqb"
    },
    {
        "code": "kva",
        "name": "Bagvalal",
        "searchKey": "bagvalal kva"
    },
    {
        "code": "yha",
        "name": "Baha Buyang",
        "searchKey": "baha buyang yha"
    },
    {
        "code": "bdw",
        "name": "Baham",
        "searchKey": "baham bdw"
    },
    {
        "code": "bah",
        "name": "Bahamas Creole English",
        "searchKey": "bahamas creole english bah"
    },
    {
        "code": "abv",
        "name": "Baharna Arabic",
        "searchKey": "baharna arabic abv"
    },
    {
        "code": "bhv",
        "name": "Bahau",
        "searchKey": "bahau bhv"
    },
    {
        "code": "bjh",
        "name": "Bahinemo",
        "searchKey": "bahinemo bjh"
    },
    {
        "code": "bhj",
        "name": "Bahing",
        "searchKey": "bahing bhj"
    },
    {
        "code": "bdq",
        "name": "Bahnar",
        "searchKey": "bahnar bdq"
    },
    {
        "code": "bsu",
        "name": "Bahonsuai",
        "searchKey": "bahonsuai bsu"
    },
    {
        "code": "bdj",
        "name": "Bai (South Sudan)",
        "searchNames": [
            "Bai"
        ],
        "searchKey": "bai south sudan bdj bai"
    },
    {
        "code": "bbf",
        "name": "Baibai",
        "searchKey": "baibai bbf"
    },
    {
        "code": "bkx",
        "name": "Baikeno",
        "searchKey": "baikeno bkx"
    },
    {
        "code": "bqh",
        "name": "Baima",
        "searchKey": "baima bqh"
    },
    {
        "code": "bmx",
        "name": "Baimak",
        "searchKey": "baimak bmx"
    },
    {
        "code": "bcz",
        "name": "Bainouk-Gunyaamolo",
        "searchKey": "bainouk-gunyaamolo bcz"
    },
    {
        "code": "bab",
        "name": "Bainouk-Gunyuño",
        "searchKey": "bainouk-gunyuno bab"
    },
    {
        "code": "bcb",
        "name": "Bainouk-Samik",
        "searchKey": "bainouk-samik bcb"
    },
    {
        "code": "bsw",
        "name": "Baiso",
        "searchKey": "baiso bsw"
    },
    {
        "code": "fah",
        "name": "Baissa Fali",
        "searchKey": "baissa fali fah"
    },
    {
        "code": "bjs",
        "name": "Bajan",
        "searchKey": "bajan bjs"
    },
    {
        "code": "bjm",
        "name": "Bajelani",
        "searchKey": "bajelani bjm"
    },
    {
        "code": "vjk",
        "name": "Bajjika",
        "searchKey": "bajjika vjk"
    },
    {
        "code": "bkc",
        "name": "Baka (Cameroon)",
        "searchNames": [
            "Baka"
        ],
        "searchKey": "baka cameroon bkc baka"
    },
    {
        "code": "bdh",
        "name": "Baka (South Sudan)",
        "searchNames": [
            "Baka"
        ],
        "searchKey": "baka south sudan bdh baka"
    },
    {
        "code": "bkq",
        "name": "Bakairí",
        "searchKey": "bakairi bkq"
    },
    {
        "code": "bqz",
        "name": "Bakaka",
        "searchKey": "bakaka bqz"
    },
    {
        "code": "bqi",
        "name": "Bakhtiari",
        "searchKey": "bakhtiari bqi"
    },
    {
        "code": "bki",
        "name": "Baki",
        "searchKey": "baki bki"
    },
    {
        "code": "bkh",
        "name": "Bakoko",
        "searchKey": "bakoko bkh"
    },
    {
        "code": "kme",
        "name": "Bakole",
        "searchKey": "bakole kme"
    },
    {
        "code": "bbs",
        "name": "Bakpinka",
        "searchKey": "bakpinka bbs"
    },
    {
        "code": "bkr",
        "name": "Bakumpai",
        "searchKey": "bakumpai bkr"
    },
    {
        "code": "bjw",
        "name": "Bakwé",
        "searchKey": "bakwe bjw"
    },
    {
        "code": "bls",
        "name": "Balaesang",
        "searchKey": "balaesang bls"
    },
    {
        "code": "zba",
        "name": "Balaibalan",
        "searchKey": "balaibalan zba"
    },
    {
        "code": "blw",
        "name": "Balangao",
        "searchKey": "balangao blw"
    },
    {
        "code": "sse",
        "name": "Balangingi",
        "searchKey": "balangingi sse"
    },
    {
        "code": "bjt",
        "name": "Balanta-Ganja",
        "searchKey": "balanta-ganja bjt"
    },
    {
        "code": "blz",
        "name": "Balantak",
        "searchKey": "balantak blz"
    },
    {
        "code": "ble",
        "name": "Balanta-Kentohe",
        "searchKey": "balanta-kentohe ble"
    },
    {
        "code": "bdn",
        "name": "Baldemu",
        "searchKey": "baldemu bdn"
    },
    {
        "code": "bcp",
        "name": "Bali (Democratic Republic of Congo)",
        "searchNames": [
            "Bali"
        ],
        "searchKey": "bali democratic republic of congo bcp bali"
    },
    {
        "code": "bcn",
        "name": "Bali (Nigeria)",
        "searchNames": [
            "Bali"
        ],
        "searchKey": "bali nigeria bcn bali"
    },
    {
        "code": "ban",
        "name": "Balinese",
        "searchKey": "balinese ban"
    },
    {
        "code": "mhp",
        "name": "Balinese Malay",
        "searchKey": "balinese malay mhp"
    },
    {
        "code": "bgx",
        "name": "Balkan Gagauz Turkish",
        "searchKey": "balkan gagauz turkish bgx"
    },
    {
        "code": "rmn",
        "name": "Balkan Romani",
        "searchKey": "balkan romani rmn"
    },
    {
        "code": "bqo",
        "name": "Balo",
        "searchKey": "balo bqo"
    },
    {
        "code": "biz",
        "name": "Baloi",
        "searchKey": "baloi biz"
    },
    {
        "code": "bft",
        "name": "Balti",
        "searchKey": "balti bft"
    },
    {
        "code": "rml",
        "name": "Baltic Romani",
        "searchKey": "baltic romani rml"
    },
    {
        "code": "blq",
        "name": "Baluan-Pam",
        "searchKey": "baluan-pam blq"
    },
    {
        "code": "bal",
        "name": "Baluchi",
        "searchKey": "baluchi bal"
    },
    {
        "code": "bog",
        "name": "Bamako Sign Language",
        "searchKey": "bamako sign language bog"
    },
    {
        "code": "bbq",
        "name": "Bamali",
        "searchKey": "bamali bbq"
    },
    {
        "code": "bmo",
        "name": "Bambalang",
        "searchKey": "bambalang bmo"
    },
    {
        "code": "ptu",
        "name": "Bambam",
        "searchKey": "bambam ptu"
    },
    {
        "code": "bam",
        "name": "Bambara",
        "searchKey": "bambara bam"
    },
    {
        "code": "myf",
        "name": "Bambassi",
        "searchKey": "bambassi myf"
    },
    {
        "code": "baw",
        "name": "Bambili-Bambui",
        "searchKey": "bambili-bambui baw"
    },
    {
        "code": "bce",
        "name": "Bamenyam",
        "searchKey": "bamenyam bce"
    },
    {
        "code": "bcf",
        "name": "Bamu",
        "searchKey": "bamu bcf"
    },
    {
        "code": "bqt",
        "name": "Bamukumbit",
        "searchKey": "bamukumbit bqt"
    },
    {
        "code": "bax",
        "name": "Bamun",
        "searchKey": "bamun bax"
    },
    {
        "code": "bvm",
        "name": "Bamunka",
        "searchKey": "bamunka bvm"
    },
    {
        "code": "bmg",
        "name": "Bamwe",
        "searchKey": "bamwe bmg"
    },
    {
        "code": "bfk",
        "name": "Ban Khor Sign Language",
        "searchKey": "ban khor sign language bfk"
    },
    {
        "code": "bcw",
        "name": "Bana",
        "searchKey": "bana bcw"
    },
    {
        "code": "bjx",
        "name": "Banao Itneg",
        "searchKey": "banao itneg bjx"
    },
    {
        "code": "byz",
        "name": "Banaro",
        "searchKey": "banaro byz"
    },
    {
        "code": "bnd",
        "name": "Banda (Indonesia)",
        "searchNames": [
            "Banda"
        ],
        "searchKey": "banda indonesia bnd banda"
    },
    {
        "code": "bpq",
        "name": "Banda Malay",
        "searchKey": "banda malay bpq"
    },
    {
        "code": "liy",
        "name": "Banda-Bambari",
        "searchKey": "banda-bambari liy"
    },
    {
        "code": "bpd",
        "name": "Banda-Banda",
        "searchKey": "banda-banda bpd"
    },
    {
        "code": "bqk",
        "name": "Banda-Mbrès",
        "searchKey": "banda-mbres bqk"
    },
    {
        "code": "bfl",
        "name": "Banda-Ndélé",
        "searchKey": "banda-ndele bfl"
    },
    {
        "code": "yaj",
        "name": "Banda-Yangere",
        "searchKey": "banda-yangere yaj"
    },
    {
        "code": "bza",
        "name": "Bandi",
        "searchKey": "bandi bza"
    },
    {
        "code": "bqj",
        "name": "Bandial",
        "searchKey": "bandial bqj"
    },
    {
        "code": "bdy",
        "name": "Bandjalang",
        "searchKey": "bandjalang bdy"
    },
    {
        "code": "bxg",
        "name": "Bangala",
        "searchKey": "bangala bxg"
    },
    {
        "code": "bgf",
        "name": "Bangandu",
        "searchKey": "bangandu bgf"
    },
    {
        "code": "bbe",
        "name": "Bangba",
        "searchKey": "bangba bbe"
    },
    {
        "code": "bgz",
        "name": "Banggai",
        "searchKey": "banggai bgz"
    },
    {
        "code": "bjb",
        "name": "Banggarla",
        "searchKey": "banggarla bjb"
    },
    {
        "code": "bni",
        "name": "Bangi",
        "searchKey": "bangi bni"
    },
    {
        "code": "dba",
        "name": "Bangime",
        "searchKey": "bangime dba"
    },
    {
        "code": "mfb",
        "name": "Bangka",
        "searchKey": "bangka mfb"
    },
    {
        "code": "bgj",
        "name": "Bangolan",
        "searchKey": "bangolan bgj"
    },
    {
        "code": "bnx",
        "name": "Bangubangu",
        "searchKey": "bangubangu bnx"
    },
    {
        "code": "bsj",
        "name": "Bangwinji",
        "searchKey": "bangwinji bsj"
    },
    {
        "code": "bvv",
        "name": "Baniva",
        "searchKey": "baniva bvv"
    },
    {
        "code": "bwi",
        "name": "Baniwa",
        "searchKey": "baniwa bwi"
    },
    {
        "code": "bjn",
        "name": "Banjar",
        "searchKey": "banjar bjn"
    },
    {
        "code": "bxw",
        "name": "Bankagooma",
        "searchKey": "bankagooma bxw"
    },
    {
        "code": "jjr",
        "name": "Bankal",
        "searchKey": "bankal jjr"
    },
    {
        "code": "dbw",
        "name": "Bankan Tey Dogon",
        "searchKey": "bankan tey dogon dbw"
    },
    {
        "code": "abb",
        "name": "Bankon",
        "searchKey": "bankon abb"
    },
    {
        "code": "bcm",
        "name": "Bannoni",
        "searchKey": "bannoni bcm"
    },
    {
        "code": "bap",
        "name": "Bantawa",
        "searchKey": "bantawa bap"
    },
    {
        "code": "bfx",
        "name": "Bantayanon",
        "searchKey": "bantayanon bfx"
    },
    {
        "code": "bnq",
        "name": "Bantik",
        "searchKey": "bantik bnq"
    },
    {
        "code": "bno",
        "name": "Bantoanon",
        "searchKey": "bantoanon bno"
    },
    {
        "code": "pnw",
        "name": "Banyjima",
        "searchKey": "banyjima pnw"
    },
    {
        "code": "bci",
        "name": "Baoulé",
        "searchKey": "baoule bci"
    },
    {
        "code": "bhr",
        "name": "Bara Malagasy",
        "searchKey": "bara malagasy bhr"
    },
    {
        "code": "brd",
        "name": "Baraamu",
        "searchKey": "baraamu brd"
    },
    {
        "code": "rbp",
        "name": "Barababaraba",
        "searchKey": "barababaraba rbp"
    },
    {
        "code": "bbb",
        "name": "Barai",
        "searchKey": "barai bbb"
    },
    {
        "code": "baj",
        "name": "Barakai",
        "searchKey": "barakai baj"
    },
    {
        "code": "kys",
        "name": "Baram Kayan",
        "searchKey": "baram kayan kys"
    },
    {
        "code": "bbg",
        "name": "Barama",
        "searchKey": "barama bbg"
    },
    {
        "code": "brm",
        "name": "Barambu",
        "searchKey": "barambu brm"
    },
    {
        "code": "bmz",
        "name": "Baramu",
        "searchKey": "baramu bmz"
    },
    {
        "code": "brp",
        "name": "Barapasi",
        "searchKey": "barapasi brp"
    },
    {
        "code": "brs",
        "name": "Baras",
        "searchKey": "baras brs"
    },
    {
        "code": "bsn",
        "name": "Barasana-Eduria",
        "searchKey": "barasana-eduria bsn"
    },
    {
        "code": "vmb",
        "name": "Barbaram",
        "searchKey": "barbaram vmb"
    },
    {
        "code": "boi",
        "name": "Barbareño",
        "searchKey": "barbareno boi"
    },
    {
        "code": "gry",
        "name": "Barclayville Grebo",
        "searchKey": "barclayville grebo gry"
    },
    {
        "code": "bcj",
        "name": "Bardi",
        "searchKey": "bardi bcj"
    },
    {
        "code": "bae",
        "name": "Baré",
        "searchKey": "bare bae"
    },
    {
        "code": "bva",
        "name": "Barein",
        "searchKey": "barein bva"
    },
    {
        "code": "mlp",
        "name": "Bargam",
        "searchKey": "bargam mlp"
    },
    {
        "code": "bfa",
        "name": "Bari",
        "searchKey": "bari bfa"
    },
    {
        "code": "mot",
        "name": "Barí",
        "searchKey": "bari mot"
    },
    {
        "code": "bch",
        "name": "Bariai",
        "searchKey": "bariai bch"
    },
    {
        "code": "bjc",
        "name": "Bariji",
        "searchKey": "bariji bjc"
    },
    {
        "code": "bxo",
        "name": "Barikanchi",
        "searchKey": "barikanchi bxo"
    },
    {
        "code": "jbk",
        "name": "Barikewa",
        "searchKey": "barikewa jbk"
    },
    {
        "code": "bjk",
        "name": "Barok",
        "searchKey": "barok bjk"
    },
    {
        "code": "bbi",
        "name": "Barombi",
        "searchKey": "barombi bbi"
    },
    {
        "code": "tbn",
        "name": "Barro Negro Tunebo",
        "searchKey": "barro negro tunebo tbn"
    },
    {
        "code": "bpt",
        "name": "Barrow Point",
        "searchKey": "barrow point bpt"
    },
    {
        "code": "bjz",
        "name": "Baruga",
        "searchKey": "baruga bjz"
    },
    {
        "code": "byr",
        "name": "Baruya",
        "searchKey": "baruya byr"
    },
    {
        "code": "bwg",
        "name": "Barwe",
        "searchKey": "barwe bwg"
    },
    {
        "code": "bjf",
        "name": "Barzani Jewish Neo-Aramaic",
        "searchKey": "barzani jewish neo-aramaic bjf"
    },
    {
        "code": "bas",
        "name": "Basa (Cameroon)",
        "searchNames": [
            "Basa"
        ],
        "searchKey": "basa cameroon bas basa"
    },
    {
        "code": "bzw",
        "name": "Basa (Nigeria)",
        "searchNames": [
            "Basa"
        ],
        "searchKey": "basa nigeria bzw basa"
    },
    {
        "code": "bsl",
        "name": "Basa-Gumna",
        "searchKey": "basa-gumna bsl"
    },
    {
        "code": "buj",
        "name": "Basa-Gurmana",
        "searchKey": "basa-gurmana buj"
    },
    {
        "code": "bdb",
        "name": "Basap",
        "searchKey": "basap bdb"
    },
    {
        "code": "byq",
        "name": "Basay",
        "searchKey": "basay byq"
    },
    {
        "code": "bsg",
        "name": "Bashkardi",
        "searchKey": "bashkardi bsg"
    },
    {
        "code": "bak",
        "name": "Bashkir",
        "searchKey": "bashkir bak"
    },
    {
        "code": "bst",
        "name": "Basketo",
        "searchKey": "basketo bst"
    },
    {
        "code": "eus",
        "name": "Basque",
        "searchKey": "basque eus"
    },
    {
        "code": "bsq",
        "name": "Bassa",
        "searchKey": "bassa bsq"
    },
    {
        "code": "bsr",
        "name": "Bassa-Kontagora",
        "searchKey": "bassa-kontagora bsr"
    },
    {
        "code": "bsc",
        "name": "Bassari",
        "searchKey": "bassari bsc"
    },
    {
        "code": "bsi",
        "name": "Bassossi",
        "searchKey": "bassossi bsi"
    },
    {
        "code": "bta",
        "name": "Bata",
        "searchKey": "bata bta"
    },
    {
        "code": "ifb",
        "name": "Batad Ifugao",
        "searchKey": "batad ifugao ifb"
    },
    {
        "code": "bya",
        "name": "Batak",
        "searchKey": "batak bya"
    },
    {
        "code": "btz",
        "name": "Batak Alas-Kluet",
        "searchKey": "batak alas-kluet btz"
    },
    {
        "code": "akb",
        "name": "Batak Angkola",
        "searchKey": "batak angkola akb"
    },
    {
        "code": "btd",
        "name": "Batak Dairi",
        "searchKey": "batak dairi btd"
    },
    {
        "code": "btx",
        "name": "Batak Karo",
        "searchKey": "batak karo btx"
    },
    {
        "code": "btm",
        "name": "Batak Mandailing",
        "searchKey": "batak mandailing btm"
    },
    {
        "code": "bts",
        "name": "Batak Simalungun",
        "searchKey": "batak simalungun bts"
    },
    {
        "code": "bbc",
        "name": "Batak Toba",
        "searchKey": "batak toba bbc"
    },
    {
        "code": "bnm",
        "name": "Batanga",
        "searchKey": "batanga bnm"
    },
    {
        "code": "btq",
        "name": "Batek",
        "searchKey": "batek btq"
    },
    {
        "code": "btv",
        "name": "Bateri",
        "searchKey": "bateri btv"
    },
    {
        "code": "bhm",
        "name": "Bathari",
        "searchKey": "bathari bhm"
    },
    {
        "code": "btc",
        "name": "Bati (Cameroon)",
        "searchNames": [
            "Bati"
        ],
        "searchKey": "bati cameroon btc bati"
    },
    {
        "code": "bvt",
        "name": "Bati (Indonesia)",
        "searchNames": [
            "Bati"
        ],
        "searchKey": "bati indonesia bvt bati"
    },
    {
        "code": "xby",
        "name": "Batjala",
        "searchKey": "batjala xby"
    },
    {
        "code": "bbl",
        "name": "Bats",
        "searchKey": "bats bbl"
    },
    {
        "code": "btu",
        "name": "Batu",
        "searchKey": "batu btu"
    },
    {
        "code": "zbt",
        "name": "Batui",
        "searchKey": "batui zbt"
    },
    {
        "code": "bay",
        "name": "Batuley",
        "searchKey": "batuley bay"
    },
    {
        "code": "bbd",
        "name": "Bau",
        "searchKey": "bau bbd"
    },
    {
        "code": "sne",
        "name": "Bau Bidayuh",
        "searchKey": "bau bidayuh sne"
    },
    {
        "code": "bsf",
        "name": "Bauchi",
        "searchKey": "bauchi bsf"
    },
    {
        "code": "bpe",
        "name": "Bauni",
        "searchKey": "bauni bpe"
    },
    {
        "code": "brg",
        "name": "Baure",
        "searchKey": "baure brg"
    },
    {
        "code": "bge",
        "name": "Bauria",
        "searchKey": "bauria bge"
    },
    {
        "code": "bwk",
        "name": "Bauwaki",
        "searchKey": "bauwaki bwk"
    },
    {
        "code": "bvz",
        "name": "Bauzi",
        "searchKey": "bauzi bvz"
    },
    {
        "code": "bar",
        "name": "Bavarian",
        "searchKey": "bavarian bar"
    },
    {
        "code": "bgr",
        "name": "Bawm Chin",
        "searchKey": "bawm chin bgr"
    },
    {
        "code": "mkq",
        "name": "Bay Miwok",
        "searchKey": "bay miwok mkq"
    },
    {
        "code": "bjy",
        "name": "Bayali",
        "searchKey": "bayali bjy"
    },
    {
        "code": "bvy",
        "name": "Baybayanon",
        "searchKey": "baybayanon bvy"
    },
    {
        "code": "byg",
        "name": "Baygo",
        "searchKey": "baygo byg"
    },
    {
        "code": "byl",
        "name": "Bayono",
        "searchKey": "bayono byl"
    },
    {
        "code": "bda",
        "name": "Bayot",
        "searchKey": "bayot bda"
    },
    {
        "code": "bxj",
        "name": "Bayungu",
        "searchKey": "bayungu bxj"
    },
    {
        "code": "bfr",
        "name": "Bazigar",
        "searchKey": "bazigar bfr"
    },
    {
        "code": "beo",
        "name": "Beami",
        "searchKey": "beami beo"
    },
    {
        "code": "bea",
        "name": "Beaver",
        "searchKey": "beaver bea"
    },
    {
        "code": "bfp",
        "name": "Beba",
        "searchKey": "beba bfp"
    },
    {
        "code": "beb",
        "name": "Bebele",
        "searchKey": "bebele beb"
    },
    {
        "code": "bek",
        "name": "Bebeli",
        "searchKey": "bebeli bek"
    },
    {
        "code": "bxp",
        "name": "Bebil",
        "searchKey": "bebil bxp"
    },
    {
        "code": "bjv",
        "name": "Bedjond",
        "searchKey": "bedjond bjv"
    },
    {
        "code": "bed",
        "name": "Bedoanas",
        "searchKey": "bedoanas bed"
    },
    {
        "code": "bkf",
        "name": "Beeke",
        "searchKey": "beeke bkf"
    },
    {
        "code": "bxq",
        "name": "Beele",
        "searchKey": "beele bxq"
    },
    {
        "code": "beq",
        "name": "Beembe",
        "searchKey": "beembe beq"
    },
    {
        "code": "bnz",
        "name": "Beezen",
        "searchKey": "beezen bnz"
    },
    {
        "code": "bby",
        "name": "Befang",
        "searchKey": "befang bby"
    },
    {
        "code": "ebc",
        "name": "Beginci",
        "searchKey": "beginci ebc"
    },
    {
        "code": "bej",
        "name": "Beja",
        "searchKey": "beja bej"
    },
    {
        "code": "bei",
        "name": "Bekati'",
        "searchKey": "bekati bei"
    },
    {
        "code": "bkv",
        "name": "Bekwarra",
        "searchKey": "bekwarra bkv"
    },
    {
        "code": "bkw",
        "name": "Bekwel",
        "searchKey": "bekwel bkw"
    },
    {
        "code": "beg",
        "name": "Belait",
        "searchKey": "belait beg"
    },
    {
        "code": "bxb",
        "name": "Belanda Bor",
        "searchKey": "belanda bor bxb"
    },
    {
        "code": "bvi",
        "name": "Belanda Viri",
        "searchKey": "belanda viri bvi"
    },
    {
        "code": "bel",
        "name": "Belarusian",
        "searchKey": "belarusian bel"
    },
    {
        "code": "byw",
        "name": "Belhariya",
        "searchKey": "belhariya byw"
    },
    {
        "code": "bey",
        "name": "Beli (Papua New Guinea)",
        "searchNames": [
            "Beli"
        ],
        "searchKey": "beli papua new guinea bey beli"
    },
    {
        "code": "blm",
        "name": "Beli (South Sudan)",
        "searchNames": [
            "Beli"
        ],
        "searchKey": "beli south sudan blm beli"
    },
    {
        "code": "bzj",
        "name": "Belize Kriol English",
        "searchKey": "belize kriol english bzj"
    },
    {
        "code": "blc",
        "name": "Bella Coola",
        "searchKey": "bella coola blc"
    },
    {
        "code": "brw",
        "name": "Bellari",
        "searchKey": "bellari brw"
    },
    {
        "code": "glb",
        "name": "Belning",
        "searchKey": "belning glb"
    },
    {
        "code": "bem",
        "name": "Bemba (Zambia)",
        "searchNames": [
            "Bemba"
        ],
        "searchKey": "bemba zambia bem bemba"
    },
    {
        "code": "bmb",
        "name": "Bembe",
        "searchKey": "bembe bmb"
    },
    {
        "code": "dbt",
        "name": "Ben Tey Dogon",
        "searchKey": "ben tey dogon dbt"
    },
    {
        "code": "yun",
        "name": "Bena (Nigeria)",
        "searchNames": [
            "Bena"
        ],
        "searchKey": "bena nigeria yun bena"
    },
    {
        "code": "bez",
        "name": "Bena (Tanzania)",
        "searchNames": [
            "Bena"
        ],
        "searchKey": "bena tanzania bez bena"
    },
    {
        "code": "bef",
        "name": "Benabena",
        "searchKey": "benabena bef"
    },
    {
        "code": "egm",
        "name": "Benamanga",
        "searchKey": "benamanga egm"
    },
    {
        "code": "bcq",
        "name": "Bench",
        "searchKey": "bench bcq"
    },
    {
        "code": "bdp",
        "name": "Bende",
        "searchKey": "bende bdp"
    },
    {
        "code": "bct",
        "name": "Bendi",
        "searchKey": "bendi bct"
    },
    {
        "code": "nhb",
        "name": "Beng",
        "searchKey": "beng nhb"
    },
    {
        "code": "bng",
        "name": "Benga",
        "searchKey": "benga bng"
    },
    {
        "code": "ben",
        "name": "Bengali",
        "searchKey": "bengali ben"
    },
    {
        "code": "bgy",
        "name": "Benggoi",
        "searchKey": "benggoi bgy"
    },
    {
        "code": "bqy",
        "name": "Bengkala Sign Language",
        "searchKey": "bengkala sign language bqy"
    },
    {
        "code": "bnu",
        "name": "Bentong",
        "searchKey": "bentong bnu"
    },
    {
        "code": "byd",
        "name": "Benyadu'",
        "searchKey": "benyadu byd"
    },
    {
        "code": "bue",
        "name": "Beothuk",
        "searchKey": "beothuk bue"
    },
    {
        "code": "bie",
        "name": "Bepour",
        "searchKey": "bepour bie"
    },
    {
        "code": "bxv",
        "name": "Berakou",
        "searchKey": "berakou bxv"
    },
    {
        "code": "bve",
        "name": "Berau Malay",
        "searchKey": "berau malay bve"
    },
    {
        "code": "brc",
        "name": "Berbice Creole Dutch",
        "searchKey": "berbice creole dutch brc"
    },
    {
        "code": "bkl",
        "name": "Berik",
        "searchKey": "berik bkl"
    },
    {
        "code": "bit",
        "name": "Berinomo",
        "searchKey": "berinomo bit"
    },
    {
        "code": "bom",
        "name": "Berom",
        "searchKey": "berom bom"
    },
    {
        "code": "wti",
        "name": "Berta",
        "searchKey": "berta wti"
    },
    {
        "code": "byt",
        "name": "Berti",
        "searchKey": "berti byt"
    },
    {
        "code": "mhe",
        "name": "Besisi",
        "searchKey": "besisi mhe"
    },
    {
        "code": "bes",
        "name": "Besme",
        "searchKey": "besme bes"
    },
    {
        "code": "bep",
        "name": "Besoa",
        "searchKey": "besoa bep"
    },
    {
        "code": "bfe",
        "name": "Betaf",
        "searchKey": "betaf bfe"
    },
    {
        "code": "bew",
        "name": "Betawi",
        "searchKey": "betawi bew"
    },
    {
        "code": "byf",
        "name": "Bete",
        "searchKey": "bete byf"
    },
    {
        "code": "btt",
        "name": "Bete-Bendi",
        "searchKey": "bete-bendi btt"
    },
    {
        "code": "eot",
        "name": "Beti (Côte d'Ivoire)",
        "searchNames": [
            "Beti"
        ],
        "searchKey": "beti cote divoire eot beti"
    },
    {
        "code": "xub",
        "name": "Betta Kurumba",
        "searchKey": "betta kurumba xub"
    },
    {
        "code": "kap",
        "name": "Bezhta",
        "searchKey": "bezhta kap"
    },
    {
        "code": "bhd",
        "name": "Bhadrawahi",
        "searchKey": "bhadrawahi bhd"
    },
    {
        "code": "bhx",
        "name": "Bhalay",
        "searchKey": "bhalay bhx"
    },
    {
        "code": "bha",
        "name": "Bharia",
        "searchKey": "bharia bha"
    },
    {
        "code": "bgw",
        "name": "Bhatri",
        "searchKey": "bhatri bgw"
    },
    {
        "code": "bht",
        "name": "Bhattiyali",
        "searchKey": "bhattiyali bht"
    },
    {
        "code": "bhe",
        "name": "Bhaya",
        "searchKey": "bhaya bhe"
    },
    {
        "code": "bhy",
        "name": "Bhele",
        "searchKey": "bhele bhy"
    },
    {
        "code": "bhi",
        "name": "Bhilali",
        "searchKey": "bhilali bhi"
    },
    {
        "code": "bhb",
        "name": "Bhili",
        "searchKey": "bhili bhb"
    },
    {
        "code": "bho",
        "name": "Bhojpuri",
        "searchKey": "bhojpuri bho"
    },
    {
        "code": "nes",
        "name": "Bhoti Kinnauri",
        "searchKey": "bhoti kinnauri nes"
    },
    {
        "code": "byh",
        "name": "Bhujel",
        "searchKey": "bhujel byh"
    },
    {
        "code": "bhu",
        "name": "Bhunjia",
        "searchKey": "bhunjia bhu"
    },
    {
        "code": "dyl",
        "name": "Bhutanese Sign Language",
        "searchKey": "bhutanese sign language dyl"
    },
    {
        "code": "bif",
        "name": "Biafada",
        "searchKey": "biafada bif"
    },
    {
        "code": "bdf",
        "name": "Biage",
        "searchKey": "biage bdf"
    },
    {
        "code": "bhw",
        "name": "Biak",
        "searchKey": "biak bhw"
    },
    {
        "code": "beh",
        "name": "Biali",
        "searchKey": "biali beh"
    },
    {
        "code": "bpv",
        "name": "Bian Marind",
        "searchKey": "bian marind bpv"
    },
    {
        "code": "big",
        "name": "Biangai",
        "searchKey": "biangai big"
    },
    {
        "code": "byk",
        "name": "Biao",
        "searchKey": "biao byk"
    },
    {
        "code": "bmt",
        "name": "Biao Mon",
        "searchKey": "biao mon bmt"
    },
    {
        "code": "bje",
        "name": "Biao-Jiao Mien",
        "searchKey": "biao-jiao mien bje"
    },
    {
        "code": "bth",
        "name": "Biatah Bidayuh",
        "searchKey": "biatah bidayuh bth"
    },
    {
        "code": "xbp",
        "name": "Bibbulman",
        "searchKey": "bibbulman xbp"
    },
    {
        "code": "ihw",
        "name": "Bidhawal",
        "searchKey": "bidhawal ihw"
    },
    {
        "code": "bid",
        "name": "Bidiyo",
        "searchKey": "bidiyo bid"
    },
    {
        "code": "bym",
        "name": "Bidjara",
        "searchKey": "bidjara bym"
    },
    {
        "code": "bjg",
        "name": "Bidyogo",
        "searchKey": "bidyogo bjg"
    },
    {
        "code": "bmc",
        "name": "Biem",
        "searchKey": "biem bmc"
    },
    {
        "code": "bnk",
        "name": "Bierebo",
        "searchKey": "bierebo bnk"
    },
    {
        "code": "brj",
        "name": "Bieria",
        "searchKey": "bieria brj"
    },
    {
        "code": "biu",
        "name": "Biete",
        "searchKey": "biete biu"
    },
    {
        "code": "nmb",
        "name": "Big Nambas",
        "searchKey": "big nambas nmb"
    },
    {
        "code": "bhc",
        "name": "Biga",
        "searchKey": "biga bhc"
    },
    {
        "code": "xbe",
        "name": "Bigambal",
        "searchKey": "bigambal xbe"
    },
    {
        "code": "ibh",
        "name": "Bih",
        "searchKey": "bih ibh"
    },
    {
        "code": "jbm",
        "name": "Bijim",
        "searchKey": "bijim jbm"
    },
    {
        "code": "bix",
        "name": "Bijori",
        "searchKey": "bijori bix"
    },
    {
        "code": "bik",
        "name": "Bikol",
        "searchKey": "bikol bik"
    },
    {
        "code": "byb",
        "name": "Bikya",
        "searchKey": "bikya byb"
    },
    {
        "code": "bip",
        "name": "Bila",
        "searchKey": "bila bip"
    },
    {
        "code": "kfs",
        "name": "Bilaspuri",
        "searchKey": "bilaspuri kfs"
    },
    {
        "code": "bpz",
        "name": "Bilba",
        "searchKey": "bilba bpz"
    },
    {
        "code": "brz",
        "name": "Bilbil",
        "searchKey": "bilbil brz"
    },
    {
        "code": "bil",
        "name": "Bile",
        "searchKey": "bile bil"
    },
    {
        "code": "byn",
        "name": "Bilin",
        "searchKey": "bilin byn"
    },
    {
        "code": "bms",
        "name": "Bilma Kanuri",
        "searchKey": "bilma kanuri bms"
    },
    {
        "code": "bll",
        "name": "Biloxi",
        "searchKey": "biloxi bll"
    },
    {
        "code": "blb",
        "name": "Bilua",
        "searchKey": "bilua blb"
    },
    {
        "code": "bxf",
        "name": "Bilur",
        "searchKey": "bilur bxf"
    },
    {
        "code": "bhp",
        "name": "Bima",
        "searchKey": "bima bhp"
    },
    {
        "code": "bhl",
        "name": "Bimin",
        "searchKey": "bimin bhl"
    },
    {
        "code": "bim",
        "name": "Bimoba",
        "searchKey": "bimoba bim"
    },
    {
        "code": "byj",
        "name": "Bina (Nigeria)",
        "searchNames": [
            "Bina"
        ],
        "searchKey": "bina nigeria byj bina"
    },
    {
        "code": "bmn",
        "name": "Bina (Papua New Guinea)",
        "searchNames": [
            "Bina"
        ],
        "searchKey": "bina papua new guinea bmn bina"
    },
    {
        "code": "bxz",
        "name": "Binahari",
        "searchKey": "binahari bxz"
    },
    {
        "code": "bhg",
        "name": "Binandere",
        "searchKey": "binandere bhg"
    },
    {
        "code": "xbd",
        "name": "Bindal",
        "searchKey": "bindal xbd"
    },
    {
        "code": "bon",
        "name": "Bine",
        "searchKey": "bine bon"
    },
    {
        "code": "bin",
        "name": "Bini",
        "searchKey": "bini bin"
    },
    {
        "code": "bpj",
        "name": "Binji",
        "searchKey": "binji bpj"
    },
    {
        "code": "itb",
        "name": "Binongan Itneg",
        "searchKey": "binongan itneg itb"
    },
    {
        "code": "bne",
        "name": "Bintauna",
        "searchKey": "bintauna bne"
    },
    {
        "code": "bny",
        "name": "Bintulu",
        "searchKey": "bintulu bny"
    },
    {
        "code": "bkd",
        "name": "Binukid",
        "searchKey": "binukid bkd"
    },
    {
        "code": "bjr",
        "name": "Binumarien",
        "searchKey": "binumarien bjr"
    },
    {
        "code": "biq",
        "name": "Bipi",
        "searchKey": "bipi biq"
    },
    {
        "code": "brf",
        "name": "Bira",
        "searchKey": "bira brf"
    },
    {
        "code": "bxe",
        "name": "Birale",
        "searchKey": "birale bxe"
    },
    {
        "code": "brr",
        "name": "Birao",
        "searchKey": "birao brr"
    },
    {
        "code": "btf",
        "name": "Birgit",
        "searchKey": "birgit btf"
    },
    {
        "code": "biy",
        "name": "Birhor",
        "searchKey": "birhor biy"
    },
    {
        "code": "bzr",
        "name": "Biri",
        "searchKey": "biri bzr"
    },
    {
        "code": "bqq",
        "name": "Biritai",
        "searchKey": "biritai bqq"
    },
    {
        "code": "brk",
        "name": "Birked",
        "searchKey": "birked brk"
    },
    {
        "code": "bvq",
        "name": "Birri",
        "searchKey": "birri bvq"
    },
    {
        "code": "xbj",
        "name": "Birrpayi",
        "searchKey": "birrpayi xbj"
    },
    {
        "code": "brl",
        "name": "Birwa",
        "searchKey": "birwa brl"
    },
    {
        "code": "ije",
        "name": "Biseni",
        "searchKey": "biseni ije"
    },
    {
        "code": "bpy",
        "name": "Bishnupriya",
        "searchKey": "bishnupriya bpy"
    },
    {
        "code": "bwh",
        "name": "Bishuo",
        "searchKey": "bishuo bwh"
    },
    {
        "code": "bnw",
        "name": "Bisis",
        "searchKey": "bisis bnw"
    },
    {
        "code": "bis",
        "name": "Bislama",
        "searchKey": "bislama bis"
    },
    {
        "code": "bir",
        "name": "Bisorio",
        "searchKey": "bisorio bir"
    },
    {
        "code": "bib",
        "name": "Bissa",
        "searchKey": "bissa bib"
    },
    {
        "code": "bzi",
        "name": "Bisu",
        "searchKey": "bisu bzi"
    },
    {
        "code": "bgk",
        "name": "Bit",
        "searchKey": "bit bgk"
    },
    {
        "code": "brt",
        "name": "Bitare",
        "searchKey": "bitare brt"
    },
    {
        "code": "mcc",
        "name": "Bitur",
        "searchKey": "bitur mcc"
    },
    {
        "code": "bwm",
        "name": "Biwat",
        "searchKey": "biwat bwm"
    },
    {
        "code": "byo",
        "name": "Biyo",
        "searchKey": "biyo byo"
    },
    {
        "code": "bpm",
        "name": "Biyom",
        "searchKey": "biyom bpm"
    },
    {
        "code": "blp",
        "name": "Blablanga",
        "searchKey": "blablanga blp"
    },
    {
        "code": "bfh",
        "name": "Blafe",
        "searchKey": "blafe bfh"
    },
    {
        "code": "beu",
        "name": "Blagar",
        "searchKey": "blagar beu"
    },
    {
        "code": "blr",
        "name": "Blang",
        "searchKey": "blang blr"
    },
    {
        "code": "zbl",
        "name": "Blissymbols",
        "searchKey": "blissymbols zbl"
    },
    {
        "code": "bgl",
        "name": "Bo (Laos)",
        "searchNames": [
            "Bo"
        ],
        "searchKey": "bo laos bgl bo"
    },
    {
        "code": "bpw",
        "name": "Bo (Papua New Guinea)",
        "searchNames": [
            "Bo"
        ],
        "searchKey": "bo papua new guinea bpw bo"
    },
    {
        "code": "bzn",
        "name": "Boano (Maluku)",
        "searchNames": [
            "Boano"
        ],
        "searchKey": "boano maluku bzn boano"
    },
    {
        "code": "bzl",
        "name": "Boano (Sulawesi)",
        "searchNames": [
            "Boano"
        ],
        "searchKey": "boano sulawesi bzl boano"
    },
    {
        "code": "bgb",
        "name": "Bobongko",
        "searchKey": "bobongko bgb"
    },
    {
        "code": "bty",
        "name": "Bobot",
        "searchKey": "bobot bty"
    },
    {
        "code": "boy",
        "name": "Bodo (Central African Republic)",
        "searchNames": [
            "Bodo"
        ],
        "searchKey": "bodo central african republic boy bodo"
    },
    {
        "code": "brx",
        "name": "Bodo (India)",
        "searchNames": [
            "Bodo"
        ],
        "searchKey": "bodo india brx bodo"
    },
    {
        "code": "gbj",
        "name": "Bodo Gadaba",
        "searchKey": "bodo gadaba gbj"
    },
    {
        "code": "bdv",
        "name": "Bodo Parja",
        "searchKey": "bodo parja bdv"
    },
    {
        "code": "bff",
        "name": "Bofi",
        "searchKey": "bofi bff"
    },
    {
        "code": "bvw",
        "name": "Boga",
        "searchKey": "boga bvw"
    },
    {
        "code": "boq",
        "name": "Bogaya",
        "searchKey": "bogaya boq"
    },
    {
        "code": "bux",
        "name": "Boghom",
        "searchKey": "boghom bux"
    },
    {
        "code": "bqu",
        "name": "Boguru",
        "searchKey": "boguru bqu"
    },
    {
        "code": "bhn",
        "name": "Bohtan Neo-Aramaic",
        "searchKey": "bohtan neo-aramaic bhn"
    },
    {
        "code": "bzf",
        "name": "Boikin",
        "searchKey": "boikin bzf"
    },
    {
        "code": "ybk",
        "name": "Bokha",
        "searchKey": "bokha ybk"
    },
    {
        "code": "bqc",
        "name": "Boko (Benin)",
        "searchNames": [
            "Boko"
        ],
        "searchKey": "boko benin bqc boko"
    },
    {
        "code": "bkp",
        "name": "Boko (Democratic Republic of Congo)",
        "searchNames": [
            "Boko"
        ],
        "searchKey": "boko democratic republic of congo bkp boko"
    },
    {
        "code": "bus",
        "name": "Bokobaru",
        "searchKey": "bokobaru bus"
    },
    {
        "code": "bdt",
        "name": "Bokoto",
        "searchKey": "bokoto bdt"
    },
    {
        "code": "bky",
        "name": "Bokyi",
        "searchKey": "bokyi bky"
    },
    {
        "code": "bnp",
        "name": "Bola",
        "searchKey": "bola bnp"
    },
    {
        "code": "bld",
        "name": "Bolango",
        "searchKey": "bolango bld"
    },
    {
        "code": "bol",
        "name": "Bole",
        "searchKey": "bole bol"
    },
    {
        "code": "xbo",
        "name": "Bolgarian",
        "searchKey": "bolgarian xbo"
    },
    {
        "code": "bvo",
        "name": "Bolgo",
        "searchKey": "bolgo bvo"
    },
    {
        "code": "bli",
        "name": "Bolia",
        "searchKey": "bolia bli"
    },
    {
        "code": "smk",
        "name": "Bolinao",
        "searchKey": "bolinao smk"
    },
    {
        "code": "bvl",
        "name": "Bolivian Sign Language",
        "searchKey": "bolivian sign language bvl"
    },
    {
        "code": "bkt",
        "name": "Boloki",
        "searchKey": "boloki bkt"
    },
    {
        "code": "bof",
        "name": "Bolon",
        "searchKey": "bolon bof"
    },
    {
        "code": "bzm",
        "name": "Bolondo",
        "searchKey": "bolondo bzm"
    },
    {
        "code": "blj",
        "name": "Bolongan",
        "searchKey": "bolongan blj"
    },
    {
        "code": "ply",
        "name": "Bolyu",
        "searchKey": "bolyu ply"
    },
    {
        "code": "boh",
        "name": "Boma",
        "searchKey": "boma boh"
    },
    {
        "code": "bml",
        "name": "Bomboli",
        "searchKey": "bomboli bml"
    },
    {
        "code": "bws",
        "name": "Bomboma",
        "searchKey": "bomboma bws"
    },
    {
        "code": "zmx",
        "name": "Bomitaba",
        "searchKey": "bomitaba zmx"
    },
    {
        "code": "bmf",
        "name": "Bom-Kim",
        "searchKey": "bom-kim bmf"
    },
    {
        "code": "bmq",
        "name": "Bomu",
        "searchKey": "bomu bmq"
    },
    {
        "code": "bmw",
        "name": "Bomwali",
        "searchKey": "bomwali bmw"
    },
    {
        "code": "glc",
        "name": "Bon Gula",
        "searchKey": "bon gula glc"
    },
    {
        "code": "peh",
        "name": "Bonan",
        "searchKey": "bonan peh"
    },
    {
        "code": "bou",
        "name": "Bondei",
        "searchKey": "bondei bou"
    },
    {
        "code": "bfw",
        "name": "Bondo",
        "searchKey": "bondo bfw"
    },
    {
        "code": "kzc",
        "name": "Bondoukou Kulango",
        "searchKey": "bondoukou kulango kzc"
    },
    {
        "code": "dbu",
        "name": "Bondum Dom Dogon",
        "searchKey": "bondum dom dogon dbu"
    },
    {
        "code": "bna",
        "name": "Bonerate",
        "searchKey": "bonerate bna"
    },
    {
        "code": "bnv",
        "name": "Bonerif",
        "searchKey": "bonerif bnv"
    },
    {
        "code": "bdg",
        "name": "Bonggi",
        "searchKey": "bonggi bdg"
    },
    {
        "code": "bpg",
        "name": "Bonggo",
        "searchKey": "bonggo bpg"
    },
    {
        "code": "bui",
        "name": "Bongili",
        "searchKey": "bongili bui"
    },
    {
        "code": "bot",
        "name": "Bongo",
        "searchKey": "bongo bot"
    },
    {
        "code": "bpu",
        "name": "Bongu",
        "searchKey": "bongu bpu"
    },
    {
        "code": "bok",
        "name": "Bonjo",
        "searchKey": "bonjo bok"
    },
    {
        "code": "bvg",
        "name": "Bonkeng",
        "searchKey": "bonkeng bvg"
    },
    {
        "code": "bop",
        "name": "Bonkiman",
        "searchKey": "bonkiman bop"
    },
    {
        "code": "bnc",
        "name": "Bontok",
        "searchKey": "bontok bnc"
    },
    {
        "code": "bnb",
        "name": "Bookan",
        "searchKey": "bookan bnb"
    },
    {
        "code": "bnl",
        "name": "Boon",
        "searchKey": "boon bnl"
    },
    {
        "code": "bvf",
        "name": "Boor",
        "searchKey": "boor bvf"
    },
    {
        "code": "boa",
        "name": "Bora",
        "searchKey": "bora boa"
    },
    {
        "code": "gax",
        "name": "Borana-Arsi-Guji Oromo",
        "searchKey": "borana-arsi-guji oromo gax"
    },
    {
        "code": "kvn",
        "name": "Border Kuna",
        "searchKey": "border kuna kvn"
    },
    {
        "code": "gai",
        "name": "Borei",
        "searchKey": "borei gai"
    },
    {
        "code": "fue",
        "name": "Borgu Fulfulde",
        "searchKey": "borgu fulfulde fue"
    },
    {
        "code": "bwo",
        "name": "Boro (Ethiopia)",
        "searchNames": [
            "Boro"
        ],
        "searchKey": "boro ethiopia bwo boro"
    },
    {
        "code": "xxb",
        "name": "Boro (Ghana)",
        "searchNames": [
            "Boro"
        ],
        "searchKey": "boro ghana xxb boro"
    },
    {
        "code": "ksr",
        "name": "Borong",
        "searchKey": "borong ksr"
    },
    {
        "code": "bor",
        "name": "Borôro",
        "searchKey": "bororo bor"
    },
    {
        "code": "brn",
        "name": "Boruca",
        "searchKey": "boruca brn"
    },
    {
        "code": "mae",
        "name": "Bo-Rukul",
        "searchKey": "bo-rukul mae"
    },
    {
        "code": "bwf",
        "name": "Boselewa",
        "searchKey": "boselewa bwf"
    },
    {
        "code": "bqs",
        "name": "Bosngun",
        "searchKey": "bosngun bqs"
    },
    {
        "code": "bos",
        "name": "Bosnian",
        "searchKey": "bosnian bos"
    },
    {
        "code": "bmj",
        "name": "Bote-Majhi",
        "searchKey": "bote-majhi bmj"
    },
    {
        "code": "bph",
        "name": "Botlikh",
        "searchKey": "botlikh bph"
    },
    {
        "code": "sbl",
        "name": "Botolan Sambal",
        "searchKey": "botolan sambal sbl"
    },
    {
        "code": "nku",
        "name": "Bouna Kulango",
        "searchKey": "bouna kulango nku"
    },
    {
        "code": "mux",
        "name": "Bo-Ung",
        "searchKey": "bo-ung mux"
    },
    {
        "code": "suo",
        "name": "Bouni",
        "searchKey": "bouni suo"
    },
    {
        "code": "pcc",
        "name": "Bouyei",
        "searchKey": "bouyei pcc"
    },
    {
        "code": "bzo",
        "name": "Bozaba",
        "searchKey": "bozaba bzo"
    },
    {
        "code": "aof",
        "name": "Bragat",
        "searchKey": "bragat aof"
    },
    {
        "code": "brh",
        "name": "Brahui",
        "searchKey": "brahui brh"
    },
    {
        "code": "bra",
        "name": "Braj",
        "searchKey": "braj bra"
    },
    {
        "code": "brb",
        "name": "Brao",
        "searchKey": "brao brb"
    },
    {
        "code": "bzs",
        "name": "Brazilian Sign Language",
        "searchKey": "brazilian sign language bzs"
    },
    {
        "code": "buq",
        "name": "Brem",
        "searchKey": "brem buq"
    },
    {
        "code": "brq",
        "name": "Breri",
        "searchKey": "breri brq"
    },
    {
        "code": "bre",
        "name": "Breton",
        "searchKey": "breton bre"
    },
    {
        "code": "bzd",
        "name": "Bribri",
        "searchKey": "bribri bzd"
    },
    {
        "code": "rib",
        "name": "Bribri Sign Language",
        "searchKey": "bribri sign language rib"
    },
    {
        "code": "bzt",
        "name": "Brithenig",
        "searchKey": "brithenig bzt"
    },
    {
        "code": "bfi",
        "name": "British Sign Language",
        "searchKey": "british sign language bfi"
    },
    {
        "code": "bro",
        "name": "Brokkat",
        "searchKey": "brokkat bro"
    },
    {
        "code": "sgt",
        "name": "Brokpake",
        "searchKey": "brokpake sgt"
    },
    {
        "code": "bkk",
        "name": "Brokskat",
        "searchKey": "brokskat bkk"
    },
    {
        "code": "plw",
        "name": "Brooke's Point Palawano",
        "searchKey": "brookes point palawano plw"
    },
    {
        "code": "bpl",
        "name": "Broome Pearling Lugger Pidgin",
        "searchKey": "broome pearling lugger pidgin bpl"
    },
    {
        "code": "rnb",
        "name": "Brunca Sign Language",
        "searchKey": "brunca sign language rnb"
    },
    {
        "code": "kxd",
        "name": "Brunei",
        "searchKey": "brunei kxd"
    },
    {
        "code": "bsb",
        "name": "Brunei Bisaya",
        "searchKey": "brunei bisaya bsb"
    },
    {
        "code": "xpz",
        "name": "Bruny Island Tasmanian",
        "searchKey": "bruny island tasmanian xpz"
    },
    {
        "code": "zbu",
        "name": "Bu (Bauchi State)",
        "searchNames": [
            "Bu"
        ],
        "searchKey": "bu bauchi state zbu bu"
    },
    {
        "code": "jid",
        "name": "Bu (Kaduna State)",
        "searchNames": [
            "Bu"
        ],
        "searchKey": "bu kaduna state jid bu"
    },
    {
        "code": "bub",
        "name": "Bua",
        "searchKey": "bua bub"
    },
    {
        "code": "cbl",
        "name": "Bualkhaw Chin",
        "searchKey": "bualkhaw chin cbl"
    },
    {
        "code": "box",
        "name": "Buamu",
        "searchKey": "buamu box"
    },
    {
        "code": "bvb",
        "name": "Bube",
        "searchKey": "bube bvb"
    },
    {
        "code": "buw",
        "name": "Bubi",
        "searchKey": "bubi buw"
    },
    {
        "code": "bbx",
        "name": "Bubia",
        "searchKey": "bubia bbx"
    },
    {
        "code": "stt",
        "name": "Budeh Stieng",
        "searchKey": "budeh stieng stt"
    },
    {
        "code": "btp",
        "name": "Budibud",
        "searchKey": "budibud btp"
    },
    {
        "code": "bdx",
        "name": "Budong-Budong",
        "searchKey": "budong-budong bdx"
    },
    {
        "code": "buu",
        "name": "Budu",
        "searchKey": "budu buu"
    },
    {
        "code": "bdk",
        "name": "Budukh",
        "searchKey": "budukh bdk"
    },
    {
        "code": "bdm",
        "name": "Buduma",
        "searchKey": "buduma bdm"
    },
    {
        "code": "bja",
        "name": "Budza",
        "searchKey": "budza bja"
    },
    {
        "code": "bbh",
        "name": "Bugan",
        "searchKey": "bugan bbh"
    },
    {
        "code": "buk",
        "name": "Bugawac",
        "searchKey": "bugawac buk"
    },
    {
        "code": "bgt",
        "name": "Bughotu",
        "searchKey": "bughotu bgt"
    },
    {
        "code": "bug",
        "name": "Buginese",
        "searchKey": "buginese bug"
    },
    {
        "code": "sab",
        "name": "Buglere",
        "searchKey": "buglere sab"
    },
    {
        "code": "bgg",
        "name": "Bugun",
        "searchKey": "bugun bgg"
    },
    {
        "code": "bku",
        "name": "Buhid",
        "searchKey": "buhid bku"
    },
    {
        "code": "ubl",
        "name": "Buhi'non Bikol",
        "searchKey": "buhinon bikol ubl"
    },
    {
        "code": "bxh",
        "name": "Buhutu",
        "searchKey": "buhutu bxh"
    },
    {
        "code": "sdo",
        "name": "Bukar-Sadung Bidayuh",
        "searchKey": "bukar-sadung bidayuh sdo"
    },
    {
        "code": "bvk",
        "name": "Bukat",
        "searchKey": "bukat bvk"
    },
    {
        "code": "bhh",
        "name": "Bukharic",
        "searchKey": "bukharic bhh"
    },
    {
        "code": "bvu",
        "name": "Bukit Malay",
        "searchKey": "bukit malay bvu"
    },
    {
        "code": "bkn",
        "name": "Bukitan",
        "searchKey": "bukitan bkn"
    },
    {
        "code": "ape",
        "name": "Bukiyip",
        "searchKey": "bukiyip ape"
    },
    {
        "code": "tkb",
        "name": "Buksa",
        "searchKey": "buksa tkb"
    },
    {
        "code": "bxk",
        "name": "Bukusu",
        "searchKey": "bukusu bxk"
    },
    {
        "code": "buz",
        "name": "Bukwen",
        "searchKey": "bukwen buz"
    },
    {
        "code": "bul",
        "name": "Bulgarian",
        "searchKey": "bulgarian bul"
    },
    {
        "code": "bqn",
        "name": "Bulgarian Sign Language",
        "searchKey": "bulgarian sign language bqn"
    },
    {
        "code": "bmp",
        "name": "Bulgebi",
        "searchKey": "bulgebi bmp"
    },
    {
        "code": "uly",
        "name": "Buli",
        "searchKey": "buli uly"
    },
    {
        "code": "bwu",
        "name": "Buli (Ghana)",
        "searchNames": [
            "Buli"
        ],
        "searchKey": "buli ghana bwu buli"
    },
    {
        "code": "bzq",
        "name": "Buli (Indonesia)",
        "searchNames": [
            "Buli"
        ],
        "searchKey": "buli indonesia bzq buli"
    },
    {
        "code": "buy",
        "name": "Bullom So",
        "searchKey": "bullom so buy"
    },
    {
        "code": "sti",
        "name": "Bulo Stieng",
        "searchKey": "bulo stieng sti"
    },
    {
        "code": "bum",
        "name": "Bulu (Cameroon)",
        "searchNames": [
            "Bulu"
        ],
        "searchKey": "bulu cameroon bum bulu"
    },
    {
        "code": "bjl",
        "name": "Bulu (Papua New Guinea)",
        "searchNames": [
            "Bulu"
        ],
        "searchKey": "bulu papua new guinea bjl bulu"
    },
    {
        "code": "bmv",
        "name": "Bum",
        "searchKey": "bum bmv"
    },
    {
        "code": "byp",
        "name": "Bumaji",
        "searchKey": "bumaji byp"
    },
    {
        "code": "bvp",
        "name": "Bumang",
        "searchKey": "bumang bvp"
    },
    {
        "code": "aon",
        "name": "Bumbita Arapesh",
        "searchKey": "bumbita arapesh aon"
    },
    {
        "code": "kjz",
        "name": "Bumthangkha",
        "searchKey": "bumthangkha kjz"
    },
    {
        "code": "buv",
        "name": "Bun",
        "searchKey": "bun buv"
    },
    {
        "code": "bvn",
        "name": "Buna",
        "searchKey": "buna bvn"
    },
    {
        "code": "bfn",
        "name": "Bunak",
        "searchKey": "bunak bfn"
    },
    {
        "code": "bdd",
        "name": "Bunama",
        "searchKey": "bunama bdd"
    },
    {
        "code": "bwx",
        "name": "Bu-Nao Bunu",
        "searchKey": "bu-nao bunu bwx"
    },
    {
        "code": "bns",
        "name": "Bundeli",
        "searchKey": "bundeli bns"
    },
    {
        "code": "bqd",
        "name": "Bung",
        "searchKey": "bung bqd"
    },
    {
        "code": "but",
        "name": "Bungain",
        "searchKey": "bungain but"
    },
    {
        "code": "xbg",
        "name": "Bunganditj",
        "searchKey": "bunganditj xbg"
    },
    {
        "code": "bkz",
        "name": "Bungku",
        "searchKey": "bungku bkz"
    },
    {
        "code": "wun",
        "name": "Bungu",
        "searchKey": "bungu wun"
    },
    {
        "code": "dgb",
        "name": "Bunoge Dogon",
        "searchKey": "bunoge dogon dgb"
    },
    {
        "code": "bck",
        "name": "Bunuba",
        "searchKey": "bunuba bck"
    },
    {
        "code": "bnn",
        "name": "Bunun",
        "searchKey": "bunun bnn"
    },
    {
        "code": "blf",
        "name": "Buol",
        "searchKey": "buol blf"
    },
    {
        "code": "bys",
        "name": "Burak",
        "searchKey": "burak bys"
    },
    {
        "code": "bkg",
        "name": "Buraka",
        "searchKey": "buraka bkg"
    },
    {
        "code": "bwr",
        "name": "Bura-Pabir",
        "searchKey": "bura-pabir bwr"
    },
    {
        "code": "bvr",
        "name": "Burarra",
        "searchKey": "burarra bvr"
    },
    {
        "code": "bti",
        "name": "Burate",
        "searchKey": "burate bti"
    },
    {
        "code": "bxn",
        "name": "Burduna",
        "searchKey": "burduna bxn"
    },
    {
        "code": "bvh",
        "name": "Bure",
        "searchKey": "bure bvh"
    },
    {
        "code": "bua",
        "name": "Buriat",
        "searchKey": "buriat bua"
    },
    {
        "code": "bji",
        "name": "Burji",
        "searchKey": "burji bji"
    },
    {
        "code": "vrt",
        "name": "Burmbar",
        "searchKey": "burmbar vrt"
    },
    {
        "code": "mya",
        "name": "Burmese",
        "searchKey": "burmese mya"
    },
    {
        "code": "bzu",
        "name": "Burmeso",
        "searchKey": "burmeso bzu"
    },
    {
        "code": "mhs",
        "name": "Buru (Indonesia)",
        "searchNames": [
            "Buru"
        ],
        "searchKey": "buru indonesia mhs buru"
    },
    {
        "code": "bqw",
        "name": "Buru (Nigeria)",
        "searchNames": [
            "Buru"
        ],
        "searchKey": "buru nigeria bqw buru"
    },
    {
        "code": "bry",
        "name": "Burui",
        "searchKey": "burui bry"
    },
    {
        "code": "aip",
        "name": "Burumakok",
        "searchKey": "burumakok aip"
    },
    {
        "code": "bdi",
        "name": "Burun",
        "searchKey": "burun bdi"
    },
    {
        "code": "lsb",
        "name": "Burundian Sign Language",
        "searchKey": "burundian sign language lsb"
    },
    {
        "code": "bds",
        "name": "Burunge",
        "searchKey": "burunge bds"
    },
    {
        "code": "bsk",
        "name": "Burushaski",
        "searchKey": "burushaski bsk"
    },
    {
        "code": "bqr",
        "name": "Burusu",
        "searchKey": "burusu bqr"
    },
    {
        "code": "asi",
        "name": "Buruwai",
        "searchKey": "buruwai asi"
    },
    {
        "code": "bqp",
        "name": "Busa",
        "searchKey": "busa bqp"
    },
    {
        "code": "bxs",
        "name": "Busam",
        "searchKey": "busam bxs"
    },
    {
        "code": "bsm",
        "name": "Busami",
        "searchKey": "busami bsm"
    },
    {
        "code": "bfg",
        "name": "Busang Kayan",
        "searchKey": "busang kayan bfg"
    },
    {
        "code": "buc",
        "name": "Bushi",
        "searchKey": "bushi buc"
    },
    {
        "code": "buf",
        "name": "Bushoong",
        "searchKey": "bushoong buf"
    },
    {
        "code": "bso",
        "name": "Buso",
        "searchKey": "buso bso"
    },
    {
        "code": "bup",
        "name": "Busoa",
        "searchKey": "busoa bup"
    },
    {
        "code": "dox",
        "name": "Bussa",
        "searchKey": "bussa dox"
    },
    {
        "code": "bju",
        "name": "Busuu",
        "searchKey": "busuu bju"
    },
    {
        "code": "kyb",
        "name": "Butbut Kalinga",
        "searchKey": "butbut kalinga kyb"
    },
    {
        "code": "bnr",
        "name": "Butmas-Tur",
        "searchKey": "butmas-tur bnr"
    },
    {
        "code": "btw",
        "name": "Butuanon",
        "searchKey": "butuanon btw"
    },
    {
        "code": "lfb",
        "name": "Buu (Cameroon)",
        "searchNames": [
            "Buu"
        ],
        "searchKey": "buu cameroon lfb buu"
    },
    {
        "code": "bhs",
        "name": "Buwal",
        "searchKey": "buwal bhs"
    },
    {
        "code": "byi",
        "name": "Buyu",
        "searchKey": "buyu byi"
    },
    {
        "code": "jiy",
        "name": "Buyuan Jinuo",
        "searchKey": "buyuan jinuo jiy"
    },
    {
        "code": "bww",
        "name": "Bwa",
        "searchKey": "bwa bww"
    },
    {
        "code": "bwd",
        "name": "Bwaidoka",
        "searchKey": "bwaidoka bwd"
    },
    {
        "code": "tte",
        "name": "Bwanabwana",
        "searchKey": "bwanabwana tte"
    },
    {
        "code": "bwa",
        "name": "Bwatoo",
        "searchKey": "bwatoo bwa"
    },
    {
        "code": "bwe",
        "name": "Bwe Karen",
        "searchKey": "bwe karen bwe"
    },
    {
        "code": "bwl",
        "name": "Bwela",
        "searchKey": "bwela bwl"
    },
    {
        "code": "bwc",
        "name": "Bwile",
        "searchKey": "bwile bwc"
    },
    {
        "code": "bwz",
        "name": "Bwisi",
        "searchKey": "bwisi bwz"
    },
    {
        "code": "bee",
        "name": "Byangsi",
        "searchKey": "byangsi bee"
    },
    {
        "code": "mkk",
        "name": "Byep",
        "searchKey": "byep mkk"
    },
    {
        "code": "msq",
        "name": "Caac",
        "searchKey": "caac msq"
    },
    {
        "code": "cjp",
        "name": "Cabécar",
        "searchKey": "cabecar cjp"
    },
    {
        "code": "cbb",
        "name": "Cabiyarí",
        "searchKey": "cabiyari cbb"
    },
    {
        "code": "miu",
        "name": "Cacaloxtepec Mixtec",
        "searchKey": "cacaloxtepec mixtec miu"
    },
    {
        "code": "ccr",
        "name": "Cacaopera",
        "searchKey": "cacaopera ccr"
    },
    {
        "code": "roc",
        "name": "Cacgia Roglai",
        "searchKey": "cacgia roglai roc"
    },
    {
        "code": "cbv",
        "name": "Cacua",
        "searchKey": "cacua cbv"
    },
    {
        "code": "cad",
        "name": "Caddo",
        "searchKey": "caddo cad"
    },
    {
        "code": "ccd",
        "name": "Cafundo Creole",
        "searchKey": "cafundo creole ccd"
    },
    {
        "code": "cah",
        "name": "Cahuarano",
        "searchKey": "cahuarano cah"
    },
    {
        "code": "chl",
        "name": "Cahuilla",
        "searchKey": "cahuilla chl"
    },
    {
        "code": "nat",
        "name": "Ca̱hungwa̱rya̱",
        "searchKey": "cahungwarya nat"
    },
    {
        "code": "qvc",
        "name": "Cajamarca Quechua",
        "searchKey": "cajamarca quechua qvc"
    },
    {
        "code": "qvl",
        "name": "Cajatambo North Lima Quechua",
        "searchKey": "cajatambo north lima quechua qvl"
    },
    {
        "code": "zad",
        "name": "Cajonos Zapotec",
        "searchKey": "cajonos zapotec zad"
    },
    {
        "code": "frc",
        "name": "Cajun French",
        "searchKey": "cajun french frc"
    },
    {
        "code": "ckx",
        "name": "Caka",
        "searchKey": "caka ckx"
    },
    {
        "code": "ckz",
        "name": "Cakchiquel-Quiché Mixed Language",
        "searchKey": "cakchiquel-quiche mixed language ckz"
    },
    {
        "code": "cky",
        "name": "Cakfem-Mushere",
        "searchKey": "cakfem-mushere cky"
    },
    {
        "code": "tbk",
        "name": "Calamian Tagbanwa",
        "searchKey": "calamian tagbanwa tbk"
    },
    {
        "code": "qud",
        "name": "Calderón Highland Quichua",
        "searchKey": "calderon highland quichua qud"
    },
    {
        "code": "caw",
        "name": "Callawalla",
        "searchKey": "callawalla caw"
    },
    {
        "code": "rmq",
        "name": "Caló",
        "searchKey": "calo rmq"
    },
    {
        "code": "clu",
        "name": "Caluyanun",
        "searchKey": "caluyanun clu"
    },
    {
        "code": "csx",
        "name": "Cambodian Sign Language",
        "searchKey": "cambodian sign language csx"
    },
    {
        "code": "mcu",
        "name": "Cameroon Mambila",
        "searchKey": "cameroon mambila mcu"
    },
    {
        "code": "wes",
        "name": "Cameroon Pidgin",
        "searchKey": "cameroon pidgin wes"
    },
    {
        "code": "rab",
        "name": "Camling",
        "searchKey": "camling rab"
    },
    {
        "code": "cml",
        "name": "Campalagian",
        "searchKey": "campalagian cml"
    },
    {
        "code": "sro",
        "name": "Campidanese Sardinian",
        "searchKey": "campidanese sardinian sro"
    },
    {
        "code": "kbh",
        "name": "Camsá",
        "searchKey": "camsa kbh"
    },
    {
        "code": "cmt",
        "name": "Camtho",
        "searchKey": "camtho cmt"
    },
    {
        "code": "xcc",
        "name": "Camunic",
        "searchKey": "camunic xcc"
    },
    {
        "code": "qxr",
        "name": "Cañar Highland Quichua",
        "searchKey": "canar highland quichua qxr"
    },
    {
        "code": "cbu",
        "name": "Candoshi-Shapra",
        "searchKey": "candoshi-shapra cbu"
    },
    {
        "code": "ram",
        "name": "Canela",
        "searchKey": "canela ram"
    },
    {
        "code": "caz",
        "name": "Canichana",
        "searchKey": "canichana caz"
    },
    {
        "code": "mlc",
        "name": "Cao Lan",
        "searchKey": "cao lan mlc"
    },
    {
        "code": "cov",
        "name": "Cao Miao",
        "searchKey": "cao miao cov"
    },
    {
        "code": "kaq",
        "name": "Capanahua",
        "searchKey": "capanahua kaq"
    },
    {
        "code": "cps",
        "name": "Capiznon",
        "searchKey": "capiznon cps"
    },
    {
        "code": "cpg",
        "name": "Cappadocian Greek",
        "searchKey": "cappadocian greek cpg"
    },
    {
        "code": "cot",
        "name": "Caquinte",
        "searchKey": "caquinte cot"
    },
    {
        "code": "caq",
        "name": "Car Nicobarese",
        "searchKey": "car nicobarese caq"
    },
    {
        "code": "cfd",
        "name": "Cara",
        "searchKey": "cara cfd"
    },
    {
        "code": "cby",
        "name": "Carabayo",
        "searchKey": "carabayo cby"
    },
    {
        "code": "crf",
        "name": "Caramanta",
        "searchKey": "caramanta crf"
    },
    {
        "code": "cbc",
        "name": "Carapana",
        "searchKey": "carapana cbc"
    },
    {
        "code": "xcr",
        "name": "Carian",
        "searchKey": "carian xcr"
    },
    {
        "code": "hns",
        "name": "Caribbean Hindustani",
        "searchKey": "caribbean hindustani hns"
    },
    {
        "code": "jvn",
        "name": "Caribbean Javanese",
        "searchKey": "caribbean javanese jvn"
    },
    {
        "code": "cbd",
        "name": "Carijona",
        "searchKey": "carijona cbd"
    },
    {
        "code": "crr",
        "name": "Carolina Algonquian",
        "searchKey": "carolina algonquian crr"
    },
    {
        "code": "cal",
        "name": "Carolinian",
        "searchKey": "carolinian cal"
    },
    {
        "code": "rmc",
        "name": "Carpathian Romani",
        "searchKey": "carpathian romani rmc"
    },
    {
        "code": "crx",
        "name": "Carrier",
        "searchKey": "carrier crx"
    },
    {
        "code": "cbr",
        "name": "Cashibo-Cacataibo",
        "searchKey": "cashibo-cacataibo cbr"
    },
    {
        "code": "cbs",
        "name": "Cashinahua",
        "searchKey": "cashinahua cbs"
    },
    {
        "code": "dgc",
        "name": "Casiguran Dumagat Agta",
        "searchKey": "casiguran dumagat agta dgc"
    },
    {
        "code": "asc",
        "name": "Casuarina Coast Asmat",
        "searchKey": "casuarina coast asmat asc"
    },
    {
        "code": "cat",
        "name": "Catalan",
        "searchKey": "catalan cat"
    },
    {
        "code": "csc",
        "name": "Catalan Sign Language",
        "searchKey": "catalan sign language csc"
    },
    {
        "code": "chc",
        "name": "Catawba",
        "searchKey": "catawba chc"
    },
    {
        "code": "cav",
        "name": "Cavineña",
        "searchKey": "cavinena cav"
    },
    {
        "code": "cyb",
        "name": "Cayubaba",
        "searchKey": "cayubaba cyb"
    },
    {
        "code": "cay",
        "name": "Cayuga",
        "searchKey": "cayuga cay"
    },
    {
        "code": "xcy",
        "name": "Cayuse",
        "searchKey": "cayuse xcy"
    },
    {
        "code": "sef",
        "name": "Cebaara Senoufo",
        "searchKey": "cebaara senoufo sef"
    },
    {
        "code": "ceb",
        "name": "Cebuano",
        "searchKey": "cebuano ceb"
    },
    {
        "code": "xce",
        "name": "Celtiberian",
        "searchKey": "celtiberian xce"
    },
    {
        "code": "cam",
        "name": "Cemuhî",
        "searchKey": "cemuhi cam"
    },
    {
        "code": "cen",
        "name": "Cen",
        "searchKey": "cen"
    },
    {
        "code": "cns",
        "name": "Central Asmat",
        "searchKey": "central asmat cns"
    },
    {
        "code": "tzm",
        "name": "Central Atlas Tamazight",
        "searchKey": "central atlas tamazight tzm"
    },
    {
        "code": "awu",
        "name": "Central Awyu",
        "searchKey": "central awyu awu"
    },
    {
        "code": "ayr",
        "name": "Central Aymara",
        "searchKey": "central aymara ayr"
    },
    {
        "code": "bca",
        "name": "Central Bai",
        "searchKey": "central bai bca"
    },
    {
        "code": "zbc",
        "name": "Central Berawan",
        "searchKey": "central berawan zbc"
    },
    {
        "code": "bcl",
        "name": "Central Bikol",
        "searchKey": "central bikol bcl"
    },
    {
        "code": "lbk",
        "name": "Central Bontok",
        "searchKey": "central bontok lbk"
    },
    {
        "code": "agt",
        "name": "Central Cagayan Agta",
        "searchKey": "central cagayan agta agt"
    },
    {
        "code": "grv",
        "name": "Central Grebo",
        "searchKey": "central grebo grv"
    },
    {
        "code": "zch",
        "name": "Central Hongshuihe Zhuang",
        "searchKey": "central hongshuihe zhuang zch"
    },
    {
        "code": "nch",
        "name": "Central Huasteca Nahuatl",
        "searchKey": "central huasteca nahuatl nch"
    },
    {
        "code": "hmc",
        "name": "Central Huishui Hmong",
        "searchKey": "central huishui hmong hmc"
    },
    {
        "code": "knc",
        "name": "Central Kanuri",
        "searchKey": "central kanuri knc"
    },
    {
        "code": "ckb",
        "name": "Central Kurdish",
        "searchKey": "central kurdish ckb"
    },
    {
        "code": "mwo",
        "name": "Central Maewo",
        "searchKey": "central maewo mwo"
    },
    {
        "code": "pse",
        "name": "Central Malay",
        "searchKey": "central malay pse"
    },
    {
        "code": "mxz",
        "name": "Central Masela",
        "searchKey": "central masela mxz"
    },
    {
        "code": "hmm",
        "name": "Central Mashan Hmong",
        "searchKey": "central mashan hmong hmm"
    },
    {
        "code": "maz",
        "name": "Central Mazahua",
        "searchKey": "central mazahua maz"
    },
    {
        "code": "mel",
        "name": "Central Melanau",
        "searchKey": "central melanau mel"
    },
    {
        "code": "cmo",
        "name": "Central Mnong",
        "searchKey": "central mnong cmo"
    },
    {
        "code": "nhn",
        "name": "Central Nahuatl",
        "searchKey": "central nahuatl nhn"
    },
    {
        "code": "ncb",
        "name": "Central Nicobarese",
        "searchKey": "central nicobarese ncb"
    },
    {
        "code": "ojc",
        "name": "Central Ojibwa",
        "searchKey": "central ojibwa ojc"
    },
    {
        "code": "ryu",
        "name": "Central Okinawan",
        "searchKey": "central okinawan ryu"
    },
    {
        "code": "plc",
        "name": "Central Palawano",
        "searchKey": "central palawano plc"
    },
    {
        "code": "pbs",
        "name": "Central Pame",
        "searchKey": "central pame pbs"
    },
    {
        "code": "pst",
        "name": "Central Pashto",
        "searchKey": "central pashto pst"
    },
    {
        "code": "poo",
        "name": "Central Pomo",
        "searchKey": "central pomo poo"
    },
    {
        "code": "ncx",
        "name": "Central Puebla Nahuatl",
        "searchKey": "central puebla nahuatl ncx"
    },
    {
        "code": "sml",
        "name": "Central Sama",
        "searchKey": "central sama sml"
    },
    {
        "code": "ess",
        "name": "Central Siberian Yupik",
        "searchKey": "central siberian yupik ess"
    },
    {
        "code": "csm",
        "name": "Central Sierra Miwok",
        "searchKey": "central sierra miwok csm"
    },
    {
        "code": "syb",
        "name": "Central Subanen",
        "searchKey": "central subanen syb"
    },
    {
        "code": "tgt",
        "name": "Central Tagbanwa",
        "searchKey": "central tagbanwa tgt"
    },
    {
        "code": "tar",
        "name": "Central Tarahumara",
        "searchKey": "central tarahumara tar"
    },
    {
        "code": "tuf",
        "name": "Central Tunebo",
        "searchKey": "central tunebo tuf"
    },
    {
        "code": "esu",
        "name": "Central Yupik",
        "searchKey": "central yupik esu"
    },
    {
        "code": "fuq",
        "name": "Central-Eastern Niger Fulfulde",
        "searchKey": "central-eastern niger fulfulde fuq"
    },
    {
        "code": "cet",
        "name": "Centúúm",
        "searchKey": "centuum cet"
    },
    {
        "code": "cme",
        "name": "Cerma",
        "searchKey": "cerma cme"
    },
    {
        "code": "cxh",
        "name": "Cha'ari",
        "searchKey": "chaari cxh"
    },
    {
        "code": "sbf",
        "name": "Chabu",
        "searchKey": "chabu sbf"
    },
    {
        "code": "quk",
        "name": "Chachapoyas Quechua",
        "searchKey": "chachapoyas quechua quk"
    },
    {
        "code": "cbi",
        "name": "Chachi",
        "searchKey": "chachi cbi"
    },
    {
        "code": "cao",
        "name": "Chácobo",
        "searchKey": "chacobo cao"
    },
    {
        "code": "shu",
        "name": "Chadian Arabic",
        "searchKey": "chadian arabic shu"
    },
    {
        "code": "cds",
        "name": "Chadian Sign Language",
        "searchKey": "chadian sign language cds"
    },
    {
        "code": "cdy",
        "name": "Chadong",
        "searchKey": "chadong cdy"
    },
    {
        "code": "chg",
        "name": "Chagatai",
        "searchKey": "chagatai chg"
    },
    {
        "code": "ciy",
        "name": "Chaima",
        "searchKey": "chaima ciy"
    },
    {
        "code": "ckh",
        "name": "Chak",
        "searchKey": "chak ckh"
    },
    {
        "code": "cli",
        "name": "Chakali",
        "searchKey": "chakali cli"
    },
    {
        "code": "ckm",
        "name": "Chakavian",
        "searchKey": "chakavian ckm"
    },
    {
        "code": "ccp",
        "name": "Chakma",
        "searchKey": "chakma ccp"
    },
    {
        "code": "cll",
        "name": "Chala",
        "searchKey": "chala cll"
    },
    {
        "code": "cld",
        "name": "Chaldean Neo-Aramaic",
        "searchKey": "chaldean neo-aramaic cld"
    },
    {
        "code": "tgf",
        "name": "Chalikha",
        "searchKey": "chalikha tgf"
    },
    {
        "code": "ceg",
        "name": "Chamacoco",
        "searchKey": "chamacoco ceg"
    },
    {
        "code": "cji",
        "name": "Chamalal",
        "searchKey": "chamalal cji"
    },
    {
        "code": "cdh",
        "name": "Chambeali",
        "searchKey": "chambeali cdh"
    },
    {
        "code": "can",
        "name": "Chambri",
        "searchKey": "chambri can"
    },
    {
        "code": "ccc",
        "name": "Chamicuro",
        "searchKey": "chamicuro ccc"
    },
    {
        "code": "cha",
        "name": "Chamorro",
        "searchKey": "chamorro cha"
    },
    {
        "code": "caj",
        "name": "Chané",
        "searchKey": "chane caj"
    },
    {
        "code": "nbc",
        "name": "Chang Naga",
        "searchKey": "chang naga nbc"
    },
    {
        "code": "cga",
        "name": "Changriwa",
        "searchKey": "changriwa cga"
    },
    {
        "code": "cna",
        "name": "Changthang",
        "searchKey": "changthang cna"
    },
    {
        "code": "chx",
        "name": "Chantyal",
        "searchKey": "chantyal chx"
    },
    {
        "code": "cra",
        "name": "Chara",
        "searchKey": "chara cra"
    },
    {
        "code": "cdn",
        "name": "Chaudangsi",
        "searchKey": "chaudangsi cdn"
    },
    {
        "code": "crv",
        "name": "Chaura",
        "searchKey": "chaura crv"
    },
    {
        "code": "cbk",
        "name": "Chavacano",
        "searchKey": "chavacano cbk"
    },
    {
        "code": "cbt",
        "name": "Chayahuita",
        "searchKey": "chayahuita cbt"
    },
    {
        "code": "mih",
        "name": "Chayuco Mixtec",
        "searchKey": "chayuco mixtec mih"
    },
    {
        "code": "xtb",
        "name": "Chazumba Mixtec",
        "searchKey": "chazumba mixtec xtb"
    },
    {
        "code": "ruk",
        "name": "Che",
        "searchKey": "che ruk"
    },
    {
        "code": "che",
        "name": "Chechen",
        "searchKey": "chechen che"
    },
    {
        "code": "mrn",
        "name": "Cheke Holo",
        "searchKey": "cheke holo mrn"
    },
    {
        "code": "xch",
        "name": "Chemakum",
        "searchKey": "chemakum xch"
    },
    {
        "code": "cjn",
        "name": "Chenapian",
        "searchKey": "chenapian cjn"
    },
    {
        "code": "cde",
        "name": "Chenchu",
        "searchKey": "chenchu cde"
    },
    {
        "code": "cnu",
        "name": "Chenoua",
        "searchKey": "chenoua cnu"
    },
    {
        "code": "cdm",
        "name": "Chepang",
        "searchKey": "chepang cdm"
    },
    {
        "code": "ycp",
        "name": "Chepya",
        "searchKey": "chepya ycp"
    },
    {
        "code": "cpn",
        "name": "Cherepon",
        "searchKey": "cherepon cpn"
    },
    {
        "code": "chr",
        "name": "Cherokee",
        "searchKey": "cherokee chr"
    },
    {
        "code": "ych",
        "name": "Chesu",
        "searchKey": "chesu ych"
    },
    {
        "code": "ctc",
        "name": "Chetco",
        "searchKey": "chetco ctc"
    },
    {
        "code": "cwg",
        "name": "Chewong",
        "searchKey": "chewong cwg"
    },
    {
        "code": "chy",
        "name": "Cheyenne",
        "searchKey": "cheyenne chy"
    },
    {
        "code": "hne",
        "name": "Chhattisgarhi",
        "searchKey": "chhattisgarhi hne"
    },
    {
        "code": "ctn",
        "name": "Chhintange",
        "searchKey": "chhintange ctn"
    },
    {
        "code": "cur",
        "name": "Chhulung",
        "searchKey": "chhulung cur"
    },
    {
        "code": "csd",
        "name": "Chiangmai Sign Language",
        "searchKey": "chiangmai sign language csd"
    },
    {
        "code": "cip",
        "name": "Chiapanec",
        "searchKey": "chiapanec cip"
    },
    {
        "code": "chb",
        "name": "Chibcha",
        "searchKey": "chibcha chb"
    },
    {
        "code": "trs",
        "name": "Chicahuaxtla Triqui",
        "searchKey": "chicahuaxtla triqui trs"
    },
    {
        "code": "nya",
        "name": "Chichewa",
        "searchKey": "chichewa nya"
    },
    {
        "code": "zpv",
        "name": "Chichicapan Zapotec",
        "searchKey": "chichicapan zapotec zpv"
    },
    {
        "code": "pei",
        "name": "Chichimeca-Jonaz",
        "searchKey": "chichimeca-jonaz pei"
    },
    {
        "code": "cic",
        "name": "Chickasaw",
        "searchKey": "chickasaw cic"
    },
    {
        "code": "cob",
        "name": "Chicomuceltec",
        "searchKey": "chicomuceltec cob"
    },
    {
        "code": "cgg",
        "name": "Chiga",
        "searchKey": "chiga cgg"
    },
    {
        "code": "mii",
        "name": "Chigmecatitlán Mixtec",
        "searchKey": "chigmecatitlan mixtec mii"
    },
    {
        "code": "clc",
        "name": "Chilcotin",
        "searchKey": "chilcotin clc"
    },
    {
        "code": "csg",
        "name": "Chilean Sign Language",
        "searchKey": "chilean sign language csg"
    },
    {
        "code": "clh",
        "name": "Chilisso",
        "searchKey": "chilisso clh"
    },
    {
        "code": "csa",
        "name": "Chiltepec Chinantec",
        "searchKey": "chiltepec chinantec csa"
    },
    {
        "code": "zoh",
        "name": "Chimalapa Zoque",
        "searchKey": "chimalapa zoque zoh"
    },
    {
        "code": "cid",
        "name": "Chimariko",
        "searchKey": "chimariko cid"
    },
    {
        "code": "qug",
        "name": "Chimborazo Highland Quichua",
        "searchKey": "chimborazo highland quichua qug"
    },
    {
        "code": "cbg",
        "name": "Chimila",
        "searchKey": "chimila cbg"
    },
    {
        "code": "bxu",
        "name": "China Buriat",
        "searchKey": "china buriat bxu"
    },
    {
        "code": "cih",
        "name": "Chinali",
        "searchKey": "chinali cih"
    },
    {
        "code": "cnb",
        "name": "Chinbon Chin",
        "searchKey": "chinbon chin cnb"
    },
    {
        "code": "qxc",
        "name": "Chincha Quechua",
        "searchKey": "chincha quechua qxc"
    },
    {
        "code": "zho",
        "name": "Chinese",
        "searchKey": "chinese zho"
    },
    {
        "code": "cpi",
        "name": "Chinese Pidgin English",
        "searchKey": "chinese pidgin english cpi"
    },
    {
        "code": "csl",
        "name": "Chinese Sign Language",
        "searchKey": "chinese sign language csl"
    },
    {
        "code": "chh",
        "name": "Chinook",
        "searchKey": "chinook chh"
    },
    {
        "code": "chn",
        "name": "Chinook jargon",
        "searchKey": "chinook jargon chn"
    },
    {
        "code": "cap",
        "name": "Chipaya",
        "searchKey": "chipaya cap"
    },
    {
        "code": "chp",
        "name": "Chipewyan",
        "searchKey": "chipewyan chp"
    },
    {
        "code": "ciw",
        "name": "Chippewa",
        "searchKey": "chippewa ciw"
    },
    {
        "code": "qxa",
        "name": "Chiquián Ancash Quechua",
        "searchKey": "chiquian ancash quechua qxa"
    },
    {
        "code": "maq",
        "name": "Chiquihuitlán Mazatec",
        "searchKey": "chiquihuitlan mazatec maq"
    },
    {
        "code": "cax",
        "name": "Chiquitano",
        "searchKey": "chiquitano cax"
    },
    {
        "code": "nhd",
        "name": "Chiripá",
        "searchKey": "chiripa nhd"
    },
    {
        "code": "cdf",
        "name": "Chiru",
        "searchKey": "chiru cdf"
    },
    {
        "code": "ctm",
        "name": "Chitimacha",
        "searchKey": "chitimacha ctm"
    },
    {
        "code": "cik",
        "name": "Chitkuli Kinnauri",
        "searchKey": "chitkuli kinnauri cik"
    },
    {
        "code": "ctg",
        "name": "Chittagonian",
        "searchKey": "chittagonian ctg"
    },
    {
        "code": "the",
        "name": "Chitwania Tharu",
        "searchKey": "chitwania tharu the"
    },
    {
        "code": "zpc",
        "name": "Choapan Zapotec",
        "searchKey": "choapan zapotec zpc"
    },
    {
        "code": "cgk",
        "name": "Chocangacakha",
        "searchKey": "chocangacakha cgk"
    },
    {
        "code": "coz",
        "name": "Chochotec",
        "searchKey": "chochotec coz"
    },
    {
        "code": "cho",
        "name": "Choctaw",
        "searchKey": "choctaw cho"
    },
    {
        "code": "cdi",
        "name": "Chodri",
        "searchKey": "chodri cdi"
    },
    {
        "code": "nri",
        "name": "Chokri Naga",
        "searchKey": "chokri naga nri"
    },
    {
        "code": "cjk",
        "name": "Chokwe",
        "searchKey": "chokwe cjk"
    },
    {
        "code": "ctu",
        "name": "Chol",
        "searchKey": "chol ctu"
    },
    {
        "code": "cht",
        "name": "Cholón",
        "searchKey": "cholon cht"
    },
    {
        "code": "cog",
        "name": "Chong",
        "searchKey": "chong cog"
    },
    {
        "code": "cda",
        "name": "Choni",
        "searchKey": "choni cda"
    },
    {
        "code": "coh",
        "name": "Chonyi-Dzihana-Kauma",
        "searchKey": "chonyi-dzihana-kauma coh"
    },
    {
        "code": "cce",
        "name": "Chopi",
        "searchKey": "chopi cce"
    },
    {
        "code": "xco",
        "name": "Chorasmian",
        "searchKey": "chorasmian xco"
    },
    {
        "code": "caa",
        "name": "Chortí",
        "searchKey": "chorti caa"
    },
    {
        "code": "nct",
        "name": "Chothe Naga",
        "searchKey": "chothe naga nct"
    },
    {
        "code": "crw",
        "name": "Chrau",
        "searchKey": "chrau crw"
    },
    {
        "code": "cje",
        "name": "Chru",
        "searchKey": "chru cje"
    },
    {
        "code": "cqd",
        "name": "Chuanqiandian Cluster Miao",
        "searchKey": "chuanqiandian cluster miao cqd"
    },
    {
        "code": "cjv",
        "name": "Chuave",
        "searchKey": "chuave cjv"
    },
    {
        "code": "cvg",
        "name": "Chug",
        "searchKey": "chug cvg"
    },
    {
        "code": "cac",
        "name": "Chuj",
        "searchKey": "chuj cac"
    },
    {
        "code": "cuh",
        "name": "Chuka",
        "searchKey": "chuka cuh"
    },
    {
        "code": "ckt",
        "name": "Chukot",
        "searchKey": "chukot ckt"
    },
    {
        "code": "cuw",
        "name": "Chukwa",
        "searchKey": "chukwa cuw"
    },
    {
        "code": "clw",
        "name": "Chulym",
        "searchKey": "chulym clw"
    },
    {
        "code": "ncu",
        "name": "Chumburung",
        "searchKey": "chumburung ncu"
    },
    {
        "code": "cnq",
        "name": "Chung",
        "searchKey": "chung cnq"
    },
    {
        "code": "cdj",
        "name": "Churahi",
        "searchKey": "churahi cdj"
    },
    {
        "code": "chu",
        "name": "Church Slavic",
        "searchKey": "church slavic chu"
    },
    {
        "code": "scb",
        "name": "Chut",
        "searchKey": "chut scb"
    },
    {
        "code": "chk",
        "name": "Chuukese",
        "searchKey": "chuukese chk"
    },
    {
        "code": "xcv",
        "name": "Chuvantsy",
        "searchKey": "chuvantsy xcv"
    },
    {
        "code": "chv",
        "name": "Chuvash",
        "searchKey": "chuvash chv"
    },
    {
        "code": "chw",
        "name": "Chuwabu",
        "searchKey": "chuwabu chw"
    },
    {
        "code": "cib",
        "name": "Ci Gbe",
        "searchKey": "ci gbe cib"
    },
    {
        "code": "cia",
        "name": "Cia-Cia",
        "searchKey": "cia-cia cia"
    },
    {
        "code": "ckl",
        "name": "Cibak",
        "searchKey": "cibak ckl"
    },
    {
        "code": "awc",
        "name": "Cicipu",
        "searchKey": "cicipu awc"
    },
    {
        "code": "cim",
        "name": "Cimbrian",
        "searchKey": "cimbrian cim"
    },
    {
        "code": "cdr",
        "name": "Cinda-Regi-Tiyal",
        "searchKey": "cinda-regi-tiyal cdr"
    },
    {
        "code": "cie",
        "name": "Cineni",
        "searchKey": "cineni cie"
    },
    {
        "code": "cin",
        "name": "Cinta Larga",
        "searchKey": "cinta larga cin"
    },
    {
        "code": "xcg",
        "name": "Cisalpine Gaulish",
        "searchKey": "cisalpine gaulish xcg"
    },
    {
        "code": "asg",
        "name": "Cishingini",
        "searchKey": "cishingini asg"
    },
    {
        "code": "txt",
        "name": "Citak",
        "searchKey": "citak txt"
    },
    {
        "code": "tgd",
        "name": "Ciwogai",
        "searchKey": "ciwogai tgd"
    },
    {
        "code": "xcl",
        "name": "Classical Armenian",
        "searchKey": "classical armenian xcl"
    },
    {
        "code": "myz",
        "name": "Classical Mandaic",
        "searchKey": "classical mandaic myz"
    },
    {
        "code": "cmg",
        "name": "Classical Mongolian",
        "searchKey": "classical mongolian cmg"
    },
    {
        "code": "nci",
        "name": "Classical Nahuatl",
        "searchKey": "classical nahuatl nci"
    },
    {
        "code": "nwc",
        "name": "Classical Newari",
        "searchKey": "classical newari nwc"
    },
    {
        "code": "qwc",
        "name": "Classical Quechua",
        "searchKey": "classical quechua qwc"
    },
    {
        "code": "cls",
        "name": "Classical Sanskrit",
        "searchKey": "classical sanskrit cls"
    },
    {
        "code": "syc",
        "name": "Classical Syriac",
        "searchKey": "classical syriac syc"
    },
    {
        "code": "xct",
        "name": "Classical Tibetan",
        "searchKey": "classical tibetan xct"
    },
    {
        "code": "dri",
        "name": "C'Lela",
        "searchKey": "clela dri"
    },
    {
        "code": "xcw",
        "name": "Coahuilteco",
        "searchKey": "coahuilteco xcw"
    },
    {
        "code": "csi",
        "name": "Coast Miwok",
        "searchKey": "coast miwok csi"
    },
    {
        "code": "kjc",
        "name": "Coastal Konjo",
        "searchKey": "coastal konjo kjc"
    },
    {
        "code": "zca",
        "name": "Coatecas Altas Zapotec",
        "searchKey": "coatecas altas zapotec zca"
    },
    {
        "code": "naz",
        "name": "Coatepec Nahuatl",
        "searchKey": "coatepec nahuatl naz"
    },
    {
        "code": "mco",
        "name": "Coatlán Mixe",
        "searchKey": "coatlan mixe mco"
    },
    {
        "code": "zps",
        "name": "Coatlán Zapotec",
        "searchKey": "coatlan zapotec zps"
    },
    {
        "code": "miz",
        "name": "Coatzospan Mixtec",
        "searchKey": "coatzospan mixtec miz"
    },
    {
        "code": "cod",
        "name": "Cocama-Cocamilla",
        "searchKey": "cocama-cocamilla cod"
    },
    {
        "code": "coj",
        "name": "Cochimi",
        "searchKey": "cochimi coj"
    },
    {
        "code": "coc",
        "name": "Cocopa",
        "searchKey": "cocopa coc"
    },
    {
        "code": "coa",
        "name": "Cocos Islands Malay",
        "searchKey": "cocos islands malay coa"
    },
    {
        "code": "crd",
        "name": "Coeur d'Alene",
        "searchKey": "coeur dalene crd"
    },
    {
        "code": "con",
        "name": "Cofán",
        "searchKey": "cofan con"
    },
    {
        "code": "kog",
        "name": "Cogui",
        "searchKey": "cogui kog"
    },
    {
        "code": "liw",
        "name": "Col",
        "searchKey": "col liw"
    },
    {
        "code": "csn",
        "name": "Colombian Sign Language",
        "searchKey": "colombian sign language csn"
    },
    {
        "code": "gct",
        "name": "Colonia Tovar German",
        "searchKey": "colonia tovar german gct"
    },
    {
        "code": "cof",
        "name": "Colorado",
        "searchKey": "colorado cof"
    },
    {
        "code": "col",
        "name": "Columbia-Wenatchi",
        "searchKey": "columbia-wenatchi col"
    },
    {
        "code": "cco",
        "name": "Comaltepec Chinantec",
        "searchKey": "comaltepec chinantec cco"
    },
    {
        "code": "com",
        "name": "Comanche",
        "searchKey": "comanche com"
    },
    {
        "code": "xcm",
        "name": "Comecrudo",
        "searchKey": "comecrudo xcm"
    },
    {
        "code": "cfg",
        "name": "Como Karim",
        "searchKey": "como karim cfg"
    },
    {
        "code": "coo",
        "name": "Comox",
        "searchKey": "comox coo"
    },
    {
        "code": "cno",
        "name": "Con",
        "searchKey": "con cno"
    },
    {
        "code": "swc",
        "name": "Congo Swahili",
        "searchKey": "congo swahili swc"
    },
    {
        "code": "cnc",
        "name": "Côông",
        "searchKey": "coong cnc"
    },
    {
        "code": "csz",
        "name": "Coos",
        "searchKey": "coos csz"
    },
    {
        "code": "zoc",
        "name": "Copainalá Zoque",
        "searchKey": "copainala zoque zoc"
    },
    {
        "code": "trc",
        "name": "Copala Triqui",
        "searchKey": "copala triqui trc"
    },
    {
        "code": "cop",
        "name": "Coptic",
        "searchKey": "coptic cop"
    },
    {
        "code": "coq",
        "name": "Coquille",
        "searchKey": "coquille coq"
    },
    {
        "code": "cry",
        "name": "Cori",
        "searchKey": "cori cry"
    },
    {
        "code": "cor",
        "name": "Cornish",
        "searchKey": "cornish cor"
    },
    {
        "code": "qwa",
        "name": "Corongo Ancash Quechua",
        "searchKey": "corongo ancash quechua qwa"
    },
    {
        "code": "cos",
        "name": "Corsican",
        "searchKey": "corsican cos"
    },
    {
        "code": "csr",
        "name": "Costa Rican Sign Language",
        "searchKey": "costa rican sign language csr"
    },
    {
        "code": "mta",
        "name": "Cotabato Manobo",
        "searchKey": "cotabato manobo mta"
    },
    {
        "code": "xcn",
        "name": "Cotoname",
        "searchKey": "cotoname xcn"
    },
    {
        "code": "cow",
        "name": "Cowlitz",
        "searchKey": "cowlitz cow"
    },
    {
        "code": "pbf",
        "name": "Coyotepec Popoloca",
        "searchKey": "coyotepec popoloca pbf"
    },
    {
        "code": "toc",
        "name": "Coyutla Totonac",
        "searchKey": "coyutla totonac toc"
    },
    {
        "code": "cre",
        "name": "Cree",
        "searchKey": "cree cre"
    },
    {
        "code": "mus",
        "name": "Creek",
        "searchKey": "creek mus"
    },
    {
        "code": "crh",
        "name": "Crimean Tatar",
        "searchKey": "crimean tatar crh"
    },
    {
        "code": "csq",
        "name": "Croatia Sign Language",
        "searchKey": "croatia sign language csq"
    },
    {
        "code": "hrv",
        "name": "Croatian",
        "searchKey": "croatian hrv"
    },
    {
        "code": "mfn",
        "name": "Cross River Mbembe",
        "searchKey": "cross river mbembe mfn"
    },
    {
        "code": "cro",
        "name": "Crow",
        "searchKey": "crow cro"
    },
    {
        "code": "crz",
        "name": "Cruzeño",
        "searchKey": "cruzeno crz"
    },
    {
        "code": "cua",
        "name": "Cua",
        "searchKey": "cua"
    },
    {
        "code": "csf",
        "name": "Cuba Sign Language",
        "searchKey": "cuba sign language csf"
    },
    {
        "code": "cub",
        "name": "Cubeo",
        "searchKey": "cubeo cub"
    },
    {
        "code": "cui",
        "name": "Cuiba",
        "searchKey": "cuiba cui"
    },
    {
        "code": "cuy",
        "name": "Cuitlatec",
        "searchKey": "cuitlatec cuy"
    },
    {
        "code": "cul",
        "name": "Culina",
        "searchKey": "culina cul"
    },
    {
        "code": "cuo",
        "name": "Cumanagoto",
        "searchKey": "cumanagoto cuo"
    },
    {
        "code": "xcb",
        "name": "Cumbric",
        "searchKey": "cumbric xcb"
    },
    {
        "code": "cuq",
        "name": "Cun",
        "searchKey": "cun cuq"
    },
    {
        "code": "xlu",
        "name": "Cuneiform Luwian",
        "searchKey": "cuneiform luwian xlu"
    },
    {
        "code": "cup",
        "name": "Cupeño",
        "searchKey": "cupeno cup"
    },
    {
        "code": "xcu",
        "name": "Curonian",
        "searchKey": "curonian xcu"
    },
    {
        "code": "kpc",
        "name": "Curripaco",
        "searchKey": "curripaco kpc"
    },
    {
        "code": "quz",
        "name": "Cusco Quechua",
        "searchKey": "cusco quechua quz"
    },
    {
        "code": "ccl",
        "name": "Cutchi-Swahili",
        "searchKey": "cutchi-swahili ccl"
    },
    {
        "code": "cuv",
        "name": "Cuvok",
        "searchKey": "cuvok cuv"
    },
    {
        "code": "xtu",
        "name": "Cuyamecalco Mixtec",
        "searchKey": "cuyamecalco mixtec xtu"
    },
    {
        "code": "cyo",
        "name": "Cuyonon",
        "searchKey": "cuyonon cyo"
    },
    {
        "code": "bwy",
        "name": "Cwi Bwamu",
        "searchKey": "cwi bwamu bwy"
    },
    {
        "code": "acy",
        "name": "Cypriot Arabic",
        "searchKey": "cypriot arabic acy"
    },
    {
        "code": "ces",
        "name": "Czech",
        "searchKey": "czech ces"
    },
    {
        "code": "cse",
        "name": "Czech Sign Language",
        "searchKey": "czech sign language cse"
    },
    {
        "code": "kzf",
        "name": "Da'a Kaili",
        "searchKey": "daa kaili kzf"
    },
    {
        "code": "dao",
        "name": "Daai Chin",
        "searchKey": "daai chin dao"
    },
    {
        "code": "bpa",
        "name": "Daakaka",
        "searchKey": "daakaka bpa"
    },
    {
        "code": "lni",
        "name": "Daantanai'",
        "searchKey": "daantanai lni"
    },
    {
        "code": "dsh",
        "name": "Daasanach",
        "searchKey": "daasanach dsh"
    },
    {
        "code": "dtn",
        "name": "Daatsʼíin",
        "searchKey": "daatsʼiin dtn"
    },
    {
        "code": "dbq",
        "name": "Daba",
        "searchKey": "daba dbq"
    },
    {
        "code": "dbr",
        "name": "Dabarre",
        "searchKey": "dabarre dbr"
    },
    {
        "code": "dbe",
        "name": "Dabe",
        "searchKey": "dabe dbe"
    },
    {
        "code": "xdc",
        "name": "Dacian",
        "searchKey": "dacian xdc"
    },
    {
        "code": "dda",
        "name": "Dadi Dadi",
        "searchKey": "dadi dadi dda"
    },
    {
        "code": "mps",
        "name": "Dadibi",
        "searchKey": "dadibi mps"
    },
    {
        "code": "dbd",
        "name": "Dadiya",
        "searchKey": "dadiya dbd"
    },
    {
        "code": "dgz",
        "name": "Daga",
        "searchKey": "daga dgz"
    },
    {
        "code": "dgd",
        "name": "Dagaari Dioula",
        "searchKey": "dagaari dioula dgd"
    },
    {
        "code": "dgk",
        "name": "Dagba",
        "searchKey": "dagba dgk"
    },
    {
        "code": "dag",
        "name": "Dagbani",
        "searchKey": "dagbani dag"
    },
    {
        "code": "dec",
        "name": "Dagik",
        "searchKey": "dagik dec"
    },
    {
        "code": "dgn",
        "name": "Dagoman",
        "searchKey": "dagoman dgn"
    },
    {
        "code": "dlk",
        "name": "Dahalik",
        "searchKey": "dahalik dlk"
    },
    {
        "code": "dal",
        "name": "Dahalo",
        "searchKey": "dahalo dal"
    },
    {
        "code": "das",
        "name": "Daho-Doo",
        "searchKey": "daho-doo das"
    },
    {
        "code": "dij",
        "name": "Dai",
        "searchKey": "dai dij"
    },
    {
        "code": "zhd",
        "name": "Dai Zhuang",
        "searchKey": "dai zhuang zhd"
    },
    {
        "code": "drb",
        "name": "Dair",
        "searchKey": "dair drb"
    },
    {
        "code": "dkk",
        "name": "Dakka",
        "searchKey": "dakka dkk"
    },
    {
        "code": "dak",
        "name": "Dakota",
        "searchKey": "dakota dak"
    },
    {
        "code": "dka",
        "name": "Dakpakha",
        "searchKey": "dakpakha dka"
    },
    {
        "code": "ngk",
        "name": "Dalabon",
        "searchKey": "dalabon ngk"
    },
    {
        "code": "dlm",
        "name": "Dalmatian",
        "searchKey": "dalmatian dlm"
    },
    {
        "code": "bev",
        "name": "Daloa Bété",
        "searchKey": "daloa bete bev"
    },
    {
        "code": "dmm",
        "name": "Dama",
        "searchKey": "dama dmm"
    },
    {
        "code": "dam",
        "name": "Damakawa",
        "searchKey": "damakawa dam"
    },
    {
        "code": "uhn",
        "name": "Damal",
        "searchKey": "damal uhn"
    },
    {
        "code": "dac",
        "name": "Dambi",
        "searchKey": "dambi dac"
    },
    {
        "code": "dml",
        "name": "Dameli",
        "searchKey": "dameli dml"
    },
    {
        "code": "dms",
        "name": "Dampelas",
        "searchKey": "dampelas dms"
    },
    {
        "code": "dnj",
        "name": "Dan",
        "searchKey": "dan dnj"
    },
    {
        "code": "dnr",
        "name": "Danaru",
        "searchKey": "danaru dnr"
    },
    {
        "code": "dnu",
        "name": "Danau",
        "searchKey": "danau dnu"
    },
    {
        "code": "daq",
        "name": "Dandami Maria",
        "searchKey": "dandami maria daq"
    },
    {
        "code": "daa",
        "name": "Dangaléat",
        "searchKey": "dangaleat daa"
    },
    {
        "code": "thl",
        "name": "Dangaura Tharu",
        "searchKey": "dangaura tharu thl"
    },
    {
        "code": "dan",
        "name": "Danish",
        "searchKey": "danish dan"
    },
    {
        "code": "dsl",
        "name": "Danish Sign Language",
        "searchKey": "danish sign language dsl"
    },
    {
        "code": "aso",
        "name": "Dano",
        "searchKey": "dano aso"
    },
    {
        "code": "dnv",
        "name": "Danu",
        "searchKey": "danu dnv"
    },
    {
        "code": "dnd",
        "name": "Daonda",
        "searchKey": "daonda dnd"
    },
    {
        "code": "djc",
        "name": "Dar Daju Daju",
        "searchKey": "dar daju daju djc"
    },
    {
        "code": "daj",
        "name": "Dar Fur Daju",
        "searchKey": "dar fur daju daj"
    },
    {
        "code": "dau",
        "name": "Dar Sila Daju",
        "searchKey": "dar sila daju dau"
    },
    {
        "code": "dry",
        "name": "Darai",
        "searchKey": "darai dry"
    },
    {
        "code": "dar",
        "name": "Dargwa",
        "searchKey": "dargwa dar"
    },
    {
        "code": "prs",
        "name": "Dari",
        "searchKey": "dari prs"
    },
    {
        "code": "xda",
        "name": "Darkinyung",
        "searchKey": "darkinyung xda"
    },
    {
        "code": "dln",
        "name": "Darlong",
        "searchKey": "darlong dln"
    },
    {
        "code": "drd",
        "name": "Darmiya",
        "searchKey": "darmiya drd"
    },
    {
        "code": "dro",
        "name": "Daro-Matu Melanau",
        "searchKey": "daro-matu melanau dro"
    },
    {
        "code": "dot",
        "name": "Dass",
        "searchKey": "dass dot"
    },
    {
        "code": "tcc",
        "name": "Datooga",
        "searchKey": "datooga tcc"
    },
    {
        "code": "dgw",
        "name": "Daungwurrung",
        "searchKey": "daungwurrung dgw"
    },
    {
        "code": "dta",
        "name": "Daur",
        "searchKey": "daur dta"
    },
    {
        "code": "daw",
        "name": "Davawenyo",
        "searchKey": "davawenyo daw"
    },
    {
        "code": "kwa",
        "name": "Dâw",
        "searchKey": "daw kwa"
    },
    {
        "code": "dww",
        "name": "Dawawa",
        "searchKey": "dawawa dww"
    },
    {
        "code": "ddw",
        "name": "Dawera-Daweloor",
        "searchKey": "dawera-daweloor ddw"
    },
    {
        "code": "dwk",
        "name": "Dawik Kui",
        "searchKey": "dawik kui dwk"
    },
    {
        "code": "dwr",
        "name": "Dawro",
        "searchKey": "dawro dwr"
    },
    {
        "code": "dai",
        "name": "Day",
        "searchKey": "day dai"
    },
    {
        "code": "dax",
        "name": "Dayi",
        "searchKey": "dayi dax"
    },
    {
        "code": "dzd",
        "name": "Daza",
        "searchKey": "daza dzd"
    },
    {
        "code": "dzg",
        "name": "Dazaga",
        "searchKey": "dazaga dzg"
    },
    {
        "code": "dcc",
        "name": "Deccan",
        "searchKey": "deccan dcc"
    },
    {
        "code": "ded",
        "name": "Dedua",
        "searchKey": "dedua ded"
    },
    {
        "code": "afn",
        "name": "Defaka",
        "searchKey": "defaka afn"
    },
    {
        "code": "gbh",
        "name": "Defi Gbe",
        "searchKey": "defi gbe gbh"
    },
    {
        "code": "mzw",
        "name": "Deg",
        "searchKey": "deg mzw"
    },
    {
        "code": "deg",
        "name": "Degema",
        "searchKey": "degema deg"
    },
    {
        "code": "dge",
        "name": "Degenan",
        "searchKey": "degenan dge"
    },
    {
        "code": "ing",
        "name": "Degexit'an",
        "searchKey": "degexitan ing"
    },
    {
        "code": "dhv",
        "name": "Dehu",
        "searchKey": "dehu dhv"
    },
    {
        "code": "deh",
        "name": "Dehwari",
        "searchKey": "dehwari deh"
    },
    {
        "code": "row",
        "name": "Dela-Oenale",
        "searchKey": "dela-oenale row"
    },
    {
        "code": "del",
        "name": "Delaware",
        "searchKey": "delaware del"
    },
    {
        "code": "ntr",
        "name": "Delo",
        "searchKey": "delo ntr"
    },
    {
        "code": "dem",
        "name": "Dem",
        "searchKey": "dem"
    },
    {
        "code": "dmx",
        "name": "Dema",
        "searchKey": "dema dmx"
    },
    {
        "code": "dei",
        "name": "Demisa",
        "searchKey": "demisa dei"
    },
    {
        "code": "dmy",
        "name": "Demta",
        "searchKey": "demta dmy"
    },
    {
        "code": "ddn",
        "name": "Dendi (Benin)",
        "searchNames": [
            "Dendi"
        ],
        "searchKey": "dendi benin ddn dendi"
    },
    {
        "code": "deq",
        "name": "Dendi (Central African Republic)",
        "searchNames": [
            "Dendi"
        ],
        "searchKey": "dendi central african republic deq dendi"
    },
    {
        "code": "dez",
        "name": "Dengese",
        "searchKey": "dengese dez"
    },
    {
        "code": "dnk",
        "name": "Dengka",
        "searchKey": "dengka dnk"
    },
    {
        "code": "dny",
        "name": "Dení",
        "searchKey": "deni dny"
    },
    {
        "code": "dbb",
        "name": "Deno",
        "searchKey": "deno dbb"
    },
    {
        "code": "anv",
        "name": "Denya",
        "searchKey": "denya anv"
    },
    {
        "code": "der",
        "name": "Deori",
        "searchKey": "deori der"
    },
    {
        "code": "kbv",
        "name": "Dera (Indonesia)",
        "searchNames": [
            "Dera"
        ],
        "searchKey": "dera indonesia kbv dera"
    },
    {
        "code": "kna",
        "name": "Dera (Nigeria)",
        "searchNames": [
            "Dera"
        ],
        "searchKey": "dera nigeria kna dera"
    },
    {
        "code": "des",
        "name": "Desano",
        "searchKey": "desano des"
    },
    {
        "code": "dso",
        "name": "Desiya",
        "searchKey": "desiya dso"
    },
    {
        "code": "dwz",
        "name": "Dewas Rai",
        "searchKey": "dewas rai dwz"
    },
    {
        "code": "dee",
        "name": "Dewoin",
        "searchKey": "dewoin dee"
    },
    {
        "code": "def",
        "name": "Dezfuli",
        "searchKey": "dezfuli def"
    },
    {
        "code": "dgh",
        "name": "Dghwede",
        "searchKey": "dghwede dgh"
    },
    {
        "code": "dhs",
        "name": "Dhaiso",
        "searchKey": "dhaiso dhs"
    },
    {
        "code": "dhl",
        "name": "Dhalandji",
        "searchKey": "dhalandji dhl"
    },
    {
        "code": "dhg",
        "name": "Dhangu-Djangu",
        "searchKey": "dhangu-djangu dhg"
    },
    {
        "code": "dhn",
        "name": "Dhanki",
        "searchKey": "dhanki dhn"
    },
    {
        "code": "dhw",
        "name": "Dhanwar (Nepal)",
        "searchNames": [
            "Dhanwar"
        ],
        "searchKey": "dhanwar nepal dhw dhanwar"
    },
    {
        "code": "nfa",
        "name": "Dhao",
        "searchKey": "dhao nfa"
    },
    {
        "code": "tbh",
        "name": "Dharawal",
        "searchKey": "dharawal tbh"
    },
    {
        "code": "dhr",
        "name": "Dhargari",
        "searchKey": "dhargari dhr"
    },
    {
        "code": "xdk",
        "name": "Dharuk",
        "searchKey": "dharuk xdk"
    },
    {
        "code": "xgm",
        "name": "Dharumbal",
        "searchKey": "dharumbal xgm"
    },
    {
        "code": "mki",
        "name": "Dhatki",
        "searchKey": "dhatki mki"
    },
    {
        "code": "dhi",
        "name": "Dhimal",
        "searchKey": "dhimal dhi"
    },
    {
        "code": "div",
        "name": "Dhivehi",
        "searchKey": "dhivehi div"
    },
    {
        "code": "dho",
        "name": "Dhodia",
        "searchKey": "dhodia dho"
    },
    {
        "code": "adf",
        "name": "Dhofari Arabic",
        "searchKey": "dhofari arabic adf"
    },
    {
        "code": "ddr",
        "name": "Dhudhuroa",
        "searchKey": "dhudhuroa ddr"
    },
    {
        "code": "dhd",
        "name": "Dhundari",
        "searchKey": "dhundari dhd"
    },
    {
        "code": "dhx",
        "name": "Dhungaloo",
        "searchKey": "dhungaloo dhx"
    },
    {
        "code": "dhu",
        "name": "Dhurga",
        "searchKey": "dhurga dhu"
    },
    {
        "code": "dwu",
        "name": "Dhuwal",
        "searchKey": "dhuwal dwu"
    },
    {
        "code": "dwy",
        "name": "Dhuwaya",
        "searchKey": "dhuwaya dwy"
    },
    {
        "code": "dia",
        "name": "Dia",
        "searchKey": "dia"
    },
    {
        "code": "mbd",
        "name": "Dibabawon Manobo",
        "searchKey": "dibabawon manobo mbd"
    },
    {
        "code": "dby",
        "name": "Dibiyaso",
        "searchKey": "dibiyaso dby"
    },
    {
        "code": "dio",
        "name": "Dibo",
        "searchKey": "dibo dio"
    },
    {
        "code": "bvx",
        "name": "Dibole",
        "searchKey": "dibole bvx"
    },
    {
        "code": "duy",
        "name": "Dicamay Agta",
        "searchKey": "dicamay agta duy"
    },
    {
        "code": "did",
        "name": "Didinga",
        "searchKey": "didinga did"
    },
    {
        "code": "ddo",
        "name": "Dido",
        "searchKey": "dido ddo"
    },
    {
        "code": "dif",
        "name": "Dieri",
        "searchKey": "dieri dif"
    },
    {
        "code": "mhu",
        "name": "Digaro-Mishmi",
        "searchKey": "digaro-mishmi mhu"
    },
    {
        "code": "dig",
        "name": "Digo",
        "searchKey": "digo dig"
    },
    {
        "code": "osd",
        "name": "Digor Ossetic",
        "searchKey": "digor ossetic osd"
    },
    {
        "code": "dur",
        "name": "Dii",
        "searchKey": "dii dur"
    },
    {
        "code": "cfa",
        "name": "Dijim-Bwilim",
        "searchKey": "dijim-bwilim cfa"
    },
    {
        "code": "dil",
        "name": "Dilling",
        "searchKey": "dilling dil"
    },
    {
        "code": "jma",
        "name": "Dima",
        "searchKey": "dima jma"
    },
    {
        "code": "dis",
        "name": "Dimasa",
        "searchKey": "dimasa dis"
    },
    {
        "code": "dii",
        "name": "Dimbong",
        "searchKey": "dimbong dii"
    },
    {
        "code": "dim",
        "name": "Dime",
        "searchKey": "dime dim"
    },
    {
        "code": "diq",
        "name": "Dimli (individual language)",
        "searchNames": [
            "Dimli"
        ],
        "searchKey": "dimli individual language diq dimli"
    },
    {
        "code": "diz",
        "name": "Ding",
        "searchKey": "ding diz"
    },
    {
        "code": "din",
        "name": "Dinka",
        "searchKey": "dinka din"
    },
    {
        "code": "gdl",
        "name": "Dirasha",
        "searchKey": "dirasha gdl"
    },
    {
        "code": "dwa",
        "name": "Diri",
        "searchKey": "diri dwa"
    },
    {
        "code": "diu",
        "name": "Diriku",
        "searchKey": "diriku diu"
    },
    {
        "code": "dir",
        "name": "Dirim",
        "searchKey": "dirim dir"
    },
    {
        "code": "nzr",
        "name": "Dir-Nyamzak-Mbarimi",
        "searchKey": "dir-nyamzak-mbarimi nzr"
    },
    {
        "code": "dsi",
        "name": "Disa",
        "searchKey": "disa dsi"
    },
    {
        "code": "tbz",
        "name": "Ditammari",
        "searchKey": "ditammari tbz"
    },
    {
        "code": "dtd",
        "name": "Ditidaht",
        "searchKey": "ditidaht dtd"
    },
    {
        "code": "diy",
        "name": "Diuwe",
        "searchKey": "diuwe diy"
    },
    {
        "code": "xtd",
        "name": "Diuxi-Tilantongo Mixtec",
        "searchKey": "diuxi-tilantongo mixtec xtd"
    },
    {
        "code": "dix",
        "name": "Dixon Reef",
        "searchKey": "dixon reef dix"
    },
    {
        "code": "mdx",
        "name": "Dizin",
        "searchKey": "dizin mdx"
    },
    {
        "code": "dyy",
        "name": "Djabugay",
        "searchKey": "djabugay dyy"
    },
    {
        "code": "tjw",
        "name": "Djabwurrung",
        "searchKey": "djabwurrung tjw"
    },
    {
        "code": "dja",
        "name": "Djadjawurrung",
        "searchKey": "djadjawurrung dja"
    },
    {
        "code": "djr",
        "name": "Djambarrpuyngu",
        "searchKey": "djambarrpuyngu djr"
    },
    {
        "code": "djd",
        "name": "Djamindjung",
        "searchKey": "djamindjung djd"
    },
    {
        "code": "djf",
        "name": "Djangun",
        "searchKey": "djangun djf"
    },
    {
        "code": "djw",
        "name": "Djawi",
        "searchKey": "djawi djw"
    },
    {
        "code": "djj",
        "name": "Djeebbana",
        "searchKey": "djeebbana djj"
    },
    {
        "code": "dyi",
        "name": "Djimini Senoufo",
        "searchKey": "djimini senoufo dyi"
    },
    {
        "code": "dji",
        "name": "Djinang",
        "searchKey": "djinang dji"
    },
    {
        "code": "djb",
        "name": "Djinba",
        "searchKey": "djinba djb"
    },
    {
        "code": "dze",
        "name": "Djiwarli",
        "searchKey": "djiwarli dze"
    },
    {
        "code": "kvo",
        "name": "Dobel",
        "searchKey": "dobel kvo"
    },
    {
        "code": "dob",
        "name": "Dobu",
        "searchKey": "dobu dob"
    },
    {
        "code": "doe",
        "name": "Doe",
        "searchKey": "doe"
    },
    {
        "code": "dgg",
        "name": "Doga",
        "searchKey": "doga dgg"
    },
    {
        "code": "dgx",
        "name": "Doghoro",
        "searchKey": "doghoro dgx"
    },
    {
        "code": "dos",
        "name": "Dogosé",
        "searchKey": "dogose dos"
    },
    {
        "code": "dgs",
        "name": "Dogoso",
        "searchKey": "dogoso dgs"
    },
    {
        "code": "dgo",
        "name": "Dogri (individual language)",
        "searchNames": [
            "Dogri"
        ],
        "searchKey": "dogri individual language dgo dogri"
    },
    {
        "code": "doi",
        "name": "Dogri (macrolanguage)",
        "searchNames": [
            "Dogri"
        ],
        "searchKey": "dogri macrolanguage doi dogri"
    },
    {
        "code": "dbg",
        "name": "Dogul Dom Dogon",
        "searchKey": "dogul dom dogon dbg"
    },
    {
        "code": "dbi",
        "name": "Doka",
        "searchKey": "doka dbi"
    },
    {
        "code": "uya",
        "name": "Doko-Uyanga",
        "searchKey": "doko-uyanga uya"
    },
    {
        "code": "dsk",
        "name": "Dokshi",
        "searchKey": "dokshi dsk"
    },
    {
        "code": "dlg",
        "name": "Dolgan",
        "searchKey": "dolgan dlg"
    },
    {
        "code": "dre",
        "name": "Dolpo",
        "searchKey": "dolpo dre"
    },
    {
        "code": "doa",
        "name": "Dom",
        "searchKey": "dom doa"
    },
    {
        "code": "dmk",
        "name": "Domaaki",
        "searchKey": "domaaki dmk"
    },
    {
        "code": "rmt",
        "name": "Domari",
        "searchKey": "domari rmt"
    },
    {
        "code": "dov",
        "name": "Dombe",
        "searchKey": "dombe dov"
    },
    {
        "code": "doq",
        "name": "Dominican Sign Language",
        "searchKey": "dominican sign language doq"
    },
    {
        "code": "doy",
        "name": "Dompo",
        "searchKey": "dompo doy"
    },
    {
        "code": "dof",
        "name": "Domu",
        "searchKey": "domu dof"
    },
    {
        "code": "dev",
        "name": "Domung",
        "searchKey": "domung dev"
    },
    {
        "code": "dok",
        "name": "Dondo",
        "searchKey": "dondo dok"
    },
    {
        "code": "doh",
        "name": "Dong",
        "searchKey": "dong doh"
    },
    {
        "code": "doo",
        "name": "Dongo",
        "searchKey": "dongo doo"
    },
    {
        "code": "ddd",
        "name": "Dongotono",
        "searchKey": "dongotono ddd"
    },
    {
        "code": "yik",
        "name": "Dongshanba Lalo",
        "searchKey": "dongshanba lalo yik"
    },
    {
        "code": "sce",
        "name": "Dongxiang",
        "searchKey": "dongxiang sce"
    },
    {
        "code": "dds",
        "name": "Donno So Dogon",
        "searchKey": "donno so dogon dds"
    },
    {
        "code": "dde",
        "name": "Doondo",
        "searchKey": "doondo dde"
    },
    {
        "code": "dor",
        "name": "Dori'o",
        "searchKey": "dorio dor"
    },
    {
        "code": "kqc",
        "name": "Doromu-Koki",
        "searchKey": "doromu-koki kqc"
    },
    {
        "code": "doz",
        "name": "Dorze",
        "searchKey": "dorze doz"
    },
    {
        "code": "dol",
        "name": "Doso",
        "searchKey": "doso dol"
    },
    {
        "code": "dty",
        "name": "Dotyali",
        "searchKey": "dotyali dty"
    },
    {
        "code": "tds",
        "name": "Doutai",
        "searchKey": "doutai tds"
    },
    {
        "code": "dow",
        "name": "Doyayo",
        "searchKey": "doyayo dow"
    },
    {
        "code": "drt",
        "name": "Drents",
        "searchKey": "drents drt"
    },
    {
        "code": "duu",
        "name": "Drung",
        "searchKey": "drung duu"
    },
    {
        "code": "dua",
        "name": "Duala",
        "searchKey": "duala dua"
    },
    {
        "code": "dup",
        "name": "Duano",
        "searchKey": "duano dup"
    },
    {
        "code": "dva",
        "name": "Duau",
        "searchKey": "duau dva"
    },
    {
        "code": "dub",
        "name": "Dubli",
        "searchKey": "dubli dub"
    },
    {
        "code": "dmu",
        "name": "Dubu",
        "searchKey": "dubu dmu"
    },
    {
        "code": "ndu",
        "name": "Dugun",
        "searchKey": "dugun ndu"
    },
    {
        "code": "dbm",
        "name": "Duguri",
        "searchKey": "duguri dbm"
    },
    {
        "code": "dme",
        "name": "Dugwor",
        "searchKey": "dugwor dme"
    },
    {
        "code": "kbz",
        "name": "Duhwa",
        "searchKey": "duhwa kbz"
    },
    {
        "code": "nke",
        "name": "Duke",
        "searchKey": "duke nke"
    },
    {
        "code": "dbo",
        "name": "Dulbu",
        "searchKey": "dulbu dbo"
    },
    {
        "code": "duz",
        "name": "Duli-Gey",
        "searchKey": "duli-gey duz"
    },
    {
        "code": "dma",
        "name": "Duma",
        "searchKey": "duma dma"
    },
    {
        "code": "duf",
        "name": "Dumbea",
        "searchKey": "dumbea duf"
    },
    {
        "code": "dus",
        "name": "Dumi",
        "searchKey": "dumi dus"
    },
    {
        "code": "dmv",
        "name": "Dumpas",
        "searchKey": "dumpas dmv"
    },
    {
        "code": "dui",
        "name": "Dumun",
        "searchKey": "dumun dui"
    },
    {
        "code": "duc",
        "name": "Duna",
        "searchKey": "duna duc"
    },
    {
        "code": "dng",
        "name": "Dungan",
        "searchKey": "dungan dng"
    },
    {
        "code": "raa",
        "name": "Dungmali",
        "searchKey": "dungmali raa"
    },
    {
        "code": "duh",
        "name": "Dungra Bhil",
        "searchKey": "dungra bhil duh"
    },
    {
        "code": "dbv",
        "name": "Dungu",
        "searchKey": "dungu dbv"
    },
    {
        "code": "duo",
        "name": "Dupaninan Agta",
        "searchKey": "dupaninan agta duo"
    },
    {
        "code": "drq",
        "name": "Dura",
        "searchKey": "dura drq"
    },
    {
        "code": "mvp",
        "name": "Duri",
        "searchKey": "duri mvp"
    },
    {
        "code": "dbn",
        "name": "Duriankere",
        "searchKey": "duriankere dbn"
    },
    {
        "code": "krp",
        "name": "Durop",
        "searchKey": "durop krp"
    },
    {
        "code": "dug",
        "name": "Duruma",
        "searchKey": "duruma dug"
    },
    {
        "code": "pci",
        "name": "Duruwa",
        "searchKey": "duruwa pci"
    },
    {
        "code": "dsn",
        "name": "Dusner",
        "searchKey": "dusner dsn"
    },
    {
        "code": "dun",
        "name": "Dusun Deyah",
        "searchKey": "dusun deyah dun"
    },
    {
        "code": "duq",
        "name": "Dusun Malang",
        "searchKey": "dusun malang duq"
    },
    {
        "code": "duw",
        "name": "Dusun Witu",
        "searchKey": "dusun witu duw"
    },
    {
        "code": "nld",
        "name": "Dutch",
        "searchKey": "dutch nld"
    },
    {
        "code": "dse",
        "name": "Dutch Sign Language",
        "searchKey": "dutch sign language dse"
    },
    {
        "code": "dws",
        "name": "Dutton World Speedwords",
        "searchKey": "dutton world speedwords dws"
    },
    {
        "code": "dux",
        "name": "Duungooma",
        "searchKey": "duungooma dux"
    },
    {
        "code": "dae",
        "name": "Duupa",
        "searchKey": "duupa dae"
    },
    {
        "code": "duv",
        "name": "Duvle",
        "searchKey": "duvle duv"
    },
    {
        "code": "dbp",
        "name": "Duwai",
        "searchKey": "duwai dbp"
    },
    {
        "code": "gve",
        "name": "Duwet",
        "searchKey": "duwet gve"
    },
    {
        "code": "ldb",
        "name": "Dũya",
        "searchKey": "duya ldb"
    },
    {
        "code": "nnu",
        "name": "Dwang",
        "searchKey": "dwang nnu"
    },
    {
        "code": "dyb",
        "name": "Dyaberdyaber",
        "searchKey": "dyaberdyaber dyb"
    },
    {
        "code": "dya",
        "name": "Dyan",
        "searchKey": "dyan dya"
    },
    {
        "code": "dyn",
        "name": "Dyangadi",
        "searchKey": "dyangadi dyn"
    },
    {
        "code": "dyr",
        "name": "Dyarim",
        "searchKey": "dyarim dyr"
    },
    {
        "code": "dbl",
        "name": "Dyirbal",
        "searchKey": "dyirbal dbl"
    },
    {
        "code": "dyd",
        "name": "Dyugun",
        "searchKey": "dyugun dyd"
    },
    {
        "code": "dyu",
        "name": "Dyula",
        "searchKey": "dyula dyu"
    },
    {
        "code": "jen",
        "name": "Dza",
        "searchKey": "dza jen"
    },
    {
        "code": "dzl",
        "name": "Dzalakha",
        "searchKey": "dzalakha dzl"
    },
    {
        "code": "dzn",
        "name": "Dzando",
        "searchKey": "dzando dzn"
    },
    {
        "code": "bpn",
        "name": "Dzao Min",
        "searchKey": "dzao min bpn"
    },
    {
        "code": "dzo",
        "name": "Dzongkha",
        "searchKey": "dzongkha dzo"
    },
    {
        "code": "dnn",
        "name": "Dzùùngoo",
        "searchKey": "dzuungoo dnn"
    },
    {
        "code": "eee",
        "name": "E",
        "searchKey": "e eee"
    },
    {
        "code": "xtr",
        "name": "Early Tripuri",
        "searchKey": "early tripuri xtr"
    },
    {
        "code": "omb",
        "name": "East Ambae",
        "searchKey": "east ambae omb"
    },
    {
        "code": "zbe",
        "name": "East Berawan",
        "searchKey": "east berawan zbe"
    },
    {
        "code": "dmr",
        "name": "East Damar",
        "searchKey": "east damar dmr"
    },
    {
        "code": "fud",
        "name": "East Futuna",
        "searchKey": "east futuna fud"
    },
    {
        "code": "kjs",
        "name": "East Kewa",
        "searchKey": "east kewa kjs"
    },
    {
        "code": "lma",
        "name": "East Limba",
        "searchKey": "east limba lma"
    },
    {
        "code": "mky",
        "name": "East Makian",
        "searchKey": "east makian mky"
    },
    {
        "code": "vme",
        "name": "East Masela",
        "searchKey": "east masela vme"
    },
    {
        "code": "nle",
        "name": "East Nyala",
        "searchKey": "east nyala nle"
    },
    {
        "code": "tre",
        "name": "East Tarangan",
        "searchKey": "east tarangan tre"
    },
    {
        "code": "yuy",
        "name": "East Yugur",
        "searchKey": "east yugur yuy"
    },
    {
        "code": "aaq",
        "name": "Eastern Abnaki",
        "searchKey": "eastern abnaki aaq"
    },
    {
        "code": "acp",
        "name": "Eastern Acipa",
        "searchKey": "eastern acipa acp"
    },
    {
        "code": "qve",
        "name": "Eastern Apurímac Quechua",
        "searchKey": "eastern apurimac quechua qve"
    },
    {
        "code": "aer",
        "name": "Eastern Arrernte",
        "searchKey": "eastern arrernte aer"
    },
    {
        "code": "bgp",
        "name": "Eastern Balochi",
        "searchKey": "eastern balochi bgp"
    },
    {
        "code": "gui",
        "name": "Eastern Bolivian Guaraní",
        "searchKey": "eastern bolivian guarani gui"
    },
    {
        "code": "ebk",
        "name": "Eastern Bontok",
        "searchKey": "eastern bontok ebk"
    },
    {
        "code": "bru",
        "name": "Eastern Bru",
        "searchKey": "eastern bru bru"
    },
    {
        "code": "ike",
        "name": "Eastern Canadian Inuktitut",
        "searchKey": "eastern canadian inuktitut ike"
    },
    {
        "code": "cjm",
        "name": "Eastern Cham",
        "searchKey": "eastern cham cjm"
    },
    {
        "code": "azd",
        "name": "Eastern Durango Nahuatl",
        "searchKey": "eastern durango nahuatl azd"
    },
    {
        "code": "avl",
        "name": "Eastern Egyptian Bedawi Arabic",
        "searchKey": "eastern egyptian bedawi arabic avl"
    },
    {
        "code": "frs",
        "name": "Eastern Frisian",
        "searchKey": "eastern frisian frs"
    },
    {
        "code": "tge",
        "name": "Eastern Gorkha Tamang",
        "searchKey": "eastern gorkha tamang tge"
    },
    {
        "code": "cly",
        "name": "Eastern Highland Chatino",
        "searchKey": "eastern highland chatino cly"
    },
    {
        "code": "otm",
        "name": "Eastern Highland Otomi",
        "searchKey": "eastern highland otomi otm"
    },
    {
        "code": "zeh",
        "name": "Eastern Hongshuihe Zhuang",
        "searchKey": "eastern hongshuihe zhuang zeh"
    },
    {
        "code": "nhe",
        "name": "Eastern Huasteca Nahuatl",
        "searchKey": "eastern huasteca nahuatl nhe"
    },
    {
        "code": "hme",
        "name": "Eastern Huishui Hmong",
        "searchKey": "eastern huishui hmong hme"
    },
    {
        "code": "xrb",
        "name": "Eastern Karaboro",
        "searchKey": "eastern karaboro xrb"
    },
    {
        "code": "ktv",
        "name": "Eastern Katu",
        "searchKey": "eastern katu ktv"
    },
    {
        "code": "eky",
        "name": "Eastern Kayah",
        "searchKey": "eastern kayah eky"
    },
    {
        "code": "kee",
        "name": "Eastern Keres",
        "searchKey": "eastern keres kee"
    },
    {
        "code": "cek",
        "name": "Eastern Khumi Chin",
        "searchKey": "eastern khumi chin cek"
    },
    {
        "code": "kqo",
        "name": "Eastern Krahn",
        "searchKey": "eastern krahn kqo"
    },
    {
        "code": "yit",
        "name": "Eastern Lalu",
        "searchKey": "eastern lalu yit"
    },
    {
        "code": "lwl",
        "name": "Eastern Lawa",
        "searchKey": "eastern lawa lwl"
    },
    {
        "code": "emk",
        "name": "Eastern Maninkakan",
        "searchKey": "eastern maninkakan emk"
    },
    {
        "code": "mhr",
        "name": "Eastern Mari",
        "searchKey": "eastern mari mhr"
    },
    {
        "code": "djk",
        "name": "Eastern Maroon Creole",
        "searchKey": "eastern maroon creole djk"
    },
    {
        "code": "emg",
        "name": "Eastern Meohang",
        "searchKey": "eastern meohang emg"
    },
    {
        "code": "emq",
        "name": "Eastern Minyag",
        "searchKey": "eastern minyag emq"
    },
    {
        "code": "mng",
        "name": "Eastern Mnong",
        "searchKey": "eastern mnong mng"
    },
    {
        "code": "emu",
        "name": "Eastern Muria",
        "searchKey": "eastern muria emu"
    },
    {
        "code": "nea",
        "name": "Eastern Ngad'a",
        "searchKey": "eastern ngada nea"
    },
    {
        "code": "nos",
        "name": "Eastern Nisu",
        "searchKey": "eastern nisu nos"
    },
    {
        "code": "ojg",
        "name": "Eastern Ojibwa",
        "searchKey": "eastern ojibwa ojg"
    },
    {
        "code": "hae",
        "name": "Eastern Oromo",
        "searchKey": "eastern oromo hae"
    },
    {
        "code": "kif",
        "name": "Eastern Parbate Kham",
        "searchKey": "eastern parbate kham kif"
    },
    {
        "code": "pez",
        "name": "Eastern Penan",
        "searchKey": "eastern penan pez"
    },
    {
        "code": "peb",
        "name": "Eastern Pomo",
        "searchKey": "eastern pomo peb"
    },
    {
        "code": "hmq",
        "name": "Eastern Qiandong Miao",
        "searchKey": "eastern qiandong miao hmq"
    },
    {
        "code": "sfe",
        "name": "Eastern Subanen",
        "searchKey": "eastern subanen sfe"
    },
    {
        "code": "taj",
        "name": "Eastern Tamang",
        "searchKey": "eastern tamang taj"
    },
    {
        "code": "bnj",
        "name": "Eastern Tawbuid",
        "searchKey": "eastern tawbuid bnj"
    },
    {
        "code": "muq",
        "name": "Eastern Xiangxi Miao",
        "searchKey": "eastern xiangxi miao muq"
    },
    {
        "code": "gbx",
        "name": "Eastern Xwla Gbe",
        "searchKey": "eastern xwla gbe gbx"
    },
    {
        "code": "ydd",
        "name": "Eastern Yiddish",
        "searchKey": "eastern yiddish ydd"
    },
    {
        "code": "igb",
        "name": "Ebira",
        "searchKey": "ebira igb"
    },
    {
        "code": "xeb",
        "name": "Eblan",
        "searchKey": "eblan xeb"
    },
    {
        "code": "ebr",
        "name": "Ebrié",
        "searchKey": "ebrie ebr"
    },
    {
        "code": "ebg",
        "name": "Ebughu",
        "searchKey": "ebughu ebg"
    },
    {
        "code": "ecs",
        "name": "Ecuadorian Sign Language",
        "searchKey": "ecuadorian sign language ecs"
    },
    {
        "code": "cbj",
        "name": "Ede Cabe",
        "searchKey": "ede cabe cbj"
    },
    {
        "code": "ica",
        "name": "Ede Ica",
        "searchKey": "ede ica ica"
    },
    {
        "code": "idd",
        "name": "Ede Idaca",
        "searchKey": "ede idaca idd"
    },
    {
        "code": "ijj",
        "name": "Ede Ije",
        "searchKey": "ede ije ijj"
    },
    {
        "code": "awy",
        "name": "Edera Awyu",
        "searchKey": "edera awyu awy"
    },
    {
        "code": "etr",
        "name": "Edolo",
        "searchKey": "edolo etr"
    },
    {
        "code": "xdm",
        "name": "Edomite",
        "searchKey": "edomite xdm"
    },
    {
        "code": "dbf",
        "name": "Edopi",
        "searchKey": "edopi dbf"
    },
    {
        "code": "efa",
        "name": "Efai",
        "searchKey": "efai efa"
    },
    {
        "code": "efe",
        "name": "Efe",
        "searchKey": "efe"
    },
    {
        "code": "efi",
        "name": "Efik",
        "searchKey": "efik efi"
    },
    {
        "code": "ofu",
        "name": "Efutop",
        "searchKey": "efutop ofu"
    },
    {
        "code": "ega",
        "name": "Ega",
        "searchKey": "ega"
    },
    {
        "code": "ego",
        "name": "Eggon",
        "searchKey": "eggon ego"
    },
    {
        "code": "esl",
        "name": "Egypt Sign Language",
        "searchKey": "egypt sign language esl"
    },
    {
        "code": "egy",
        "name": "Egyptian (Ancient)",
        "searchNames": [
            "Egyptian"
        ],
        "searchKey": "egyptian ancient egy egyptian"
    },
    {
        "code": "arz",
        "name": "Egyptian Arabic",
        "searchKey": "egyptian arabic arz"
    },
    {
        "code": "ehu",
        "name": "Ehueun",
        "searchKey": "ehueun ehu"
    },
    {
        "code": "eip",
        "name": "Eipomek",
        "searchKey": "eipomek eip"
    },
    {
        "code": "eit",
        "name": "Eitiep",
        "searchKey": "eitiep eit"
    },
    {
        "code": "etu",
        "name": "Ejagham",
        "searchKey": "ejagham etu"
    },
    {
        "code": "eja",
        "name": "Ejamat",
        "searchKey": "ejamat eja"
    },
    {
        "code": "eka",
        "name": "Ekajuk",
        "searchKey": "ekajuk eka"
    },
    {
        "code": "ekg",
        "name": "Ekari",
        "searchKey": "ekari ekg"
    },
    {
        "code": "eki",
        "name": "Eki",
        "searchKey": "eki"
    },
    {
        "code": "eke",
        "name": "Ekit",
        "searchKey": "ekit eke"
    },
    {
        "code": "ekp",
        "name": "Ekpeye",
        "searchKey": "ekpeye ekp"
    },
    {
        "code": "zpp",
        "name": "El Alto Zapotec",
        "searchKey": "el alto zapotec zpp"
    },
    {
        "code": "elh",
        "name": "El Hugeirat",
        "searchKey": "el hugeirat elh"
    },
    {
        "code": "elo",
        "name": "El Molo",
        "searchKey": "el molo elo"
    },
    {
        "code": "crn",
        "name": "El Nayar Cora",
        "searchKey": "el nayar cora crn"
    },
    {
        "code": "elx",
        "name": "Elamite",
        "searchKey": "elamite elx"
    },
    {
        "code": "elm",
        "name": "Eleme",
        "searchKey": "eleme elm"
    },
    {
        "code": "ele",
        "name": "Elepi",
        "searchKey": "elepi ele"
    },
    {
        "code": "ovd",
        "name": "Elfdalian",
        "searchKey": "elfdalian ovd"
    },
    {
        "code": "ekm",
        "name": "Elip",
        "searchKey": "elip ekm"
    },
    {
        "code": "elk",
        "name": "Elkei",
        "searchKey": "elkei elk"
    },
    {
        "code": "zte",
        "name": "Elotepec Zapotec",
        "searchKey": "elotepec zapotec zte"
    },
    {
        "code": "afo",
        "name": "Eloyi",
        "searchKey": "eloyi afo"
    },
    {
        "code": "mrf",
        "name": "Elseng",
        "searchKey": "elseng mrf"
    },
    {
        "code": "elu",
        "name": "Elu",
        "searchKey": "elu"
    },
    {
        "code": "xly",
        "name": "Elymian",
        "searchKey": "elymian xly"
    },
    {
        "code": "yzg",
        "name": "E'ma Buyang",
        "searchKey": "ema buyang yzg"
    },
    {
        "code": "mmw",
        "name": "Emae",
        "searchKey": "emae mmw"
    },
    {
        "code": "ema",
        "name": "Emai-Iuleha-Ora",
        "searchKey": "emai-iuleha-ora ema"
    },
    {
        "code": "emn",
        "name": "Eman",
        "searchKey": "eman emn"
    },
    {
        "code": "emb",
        "name": "Embaloh",
        "searchKey": "embaloh emb"
    },
    {
        "code": "bdc",
        "name": "Emberá-Baudó",
        "searchKey": "embera-baudo bdc"
    },
    {
        "code": "cto",
        "name": "Emberá-Catío",
        "searchKey": "embera-catio cto"
    },
    {
        "code": "cmi",
        "name": "Emberá-Chamí",
        "searchKey": "embera-chami cmi"
    },
    {
        "code": "tdc",
        "name": "Emberá-Tadó",
        "searchKey": "embera-tado tdc"
    },
    {
        "code": "ebu",
        "name": "Embu",
        "searchKey": "embu ebu"
    },
    {
        "code": "eme",
        "name": "Emerillon",
        "searchKey": "emerillon eme"
    },
    {
        "code": "egl",
        "name": "Emilian",
        "searchKey": "emilian egl"
    },
    {
        "code": "emw",
        "name": "Emplawas",
        "searchKey": "emplawas emw"
    },
    {
        "code": "enr",
        "name": "Emumu",
        "searchKey": "emumu enr"
    },
    {
        "code": "enc",
        "name": "En",
        "searchKey": "en enc"
    },
    {
        "code": "pbh",
        "name": "E'ñapa Woromaipu",
        "searchKey": "enapa woromaipu pbh"
    },
    {
        "code": "unk",
        "name": "Enawené-Nawé",
        "searchKey": "enawene-nawe unk"
    },
    {
        "code": "end",
        "name": "Ende",
        "searchKey": "ende end"
    },
    {
        "code": "enq",
        "name": "Enga",
        "searchKey": "enga enq"
    },
    {
        "code": "ngr",
        "name": "Engdewu",
        "searchKey": "engdewu ngr"
    },
    {
        "code": "enn",
        "name": "Engenni",
        "searchKey": "engenni enn"
    },
    {
        "code": "eno",
        "name": "Enggano",
        "searchKey": "enggano eno"
    },
    {
        "code": "eng",
        "name": "English",
        "searchKey": "english eng"
    },
    {
        "code": "enl",
        "name": "Enlhet",
        "searchKey": "enlhet enl"
    },
    {
        "code": "ptt",
        "name": "Enrekang",
        "searchKey": "enrekang ptt"
    },
    {
        "code": "enu",
        "name": "Enu",
        "searchKey": "enu"
    },
    {
        "code": "enw",
        "name": "Enwan (Akwa Ibom State)",
        "searchNames": [
            "Enwan"
        ],
        "searchKey": "enwan akwa ibom state enw enwan"
    },
    {
        "code": "env",
        "name": "Enwan (Edo State)",
        "searchNames": [
            "Enwan"
        ],
        "searchKey": "enwan edo state env enwan"
    },
    {
        "code": "enx",
        "name": "Enxet",
        "searchKey": "enxet enx"
    },
    {
        "code": "gey",
        "name": "Enya",
        "searchKey": "enya gey"
    },
    {
        "code": "sja",
        "name": "Epena",
        "searchKey": "epena sja"
    },
    {
        "code": "epi",
        "name": "Epie",
        "searchKey": "epie epi"
    },
    {
        "code": "emy",
        "name": "Epigraphic Mayan",
        "searchKey": "epigraphic mayan emy"
    },
    {
        "code": "xep",
        "name": "Epi-Olmec",
        "searchKey": "epi-olmec xep"
    },
    {
        "code": "era",
        "name": "Eravallan",
        "searchKey": "eravallan era"
    },
    {
        "code": "kjy",
        "name": "Erave",
        "searchKey": "erave kjy"
    },
    {
        "code": "twp",
        "name": "Ere",
        "searchKey": "ere twp"
    },
    {
        "code": "ert",
        "name": "Eritai",
        "searchKey": "eritai ert"
    },
    {
        "code": "erw",
        "name": "Erokwanas",
        "searchKey": "erokwanas erw"
    },
    {
        "code": "err",
        "name": "Erre",
        "searchKey": "erre err"
    },
    {
        "code": "emx",
        "name": "Erromintxela",
        "searchKey": "erromintxela emx"
    },
    {
        "code": "ers",
        "name": "Ersu",
        "searchKey": "ersu ers"
    },
    {
        "code": "erh",
        "name": "Eruwa",
        "searchKey": "eruwa erh"
    },
    {
        "code": "myv",
        "name": "Erzya",
        "searchKey": "erzya myv"
    },
    {
        "code": "ish",
        "name": "Esan",
        "searchKey": "esan ish"
    },
    {
        "code": "mcq",
        "name": "Ese",
        "searchKey": "ese mcq"
    },
    {
        "code": "ese",
        "name": "Ese Ejja",
        "searchKey": "ese ejja ese"
    },
    {
        "code": "esh",
        "name": "Eshtehardi",
        "searchKey": "eshtehardi esh"
    },
    {
        "code": "ags",
        "name": "Esimbi",
        "searchKey": "esimbi ags"
    },
    {
        "code": "esy",
        "name": "Eskayan",
        "searchKey": "eskayan esy"
    },
    {
        "code": "epo",
        "name": "Esperanto",
        "searchKey": "esperanto epo"
    },
    {
        "code": "esq",
        "name": "Esselen",
        "searchKey": "esselen esq"
    },
    {
        "code": "ots",
        "name": "Estado de México Otomi",
        "searchKey": "estado de mexico otomi ots"
    },
    {
        "code": "est",
        "name": "Estonian",
        "searchKey": "estonian est"
    },
    {
        "code": "eso",
        "name": "Estonian Sign Language",
        "searchKey": "estonian sign language eso"
    },
    {
        "code": "esm",
        "name": "Esuma",
        "searchKey": "esuma esm"
    },
    {
        "code": "etc",
        "name": "Etchemin",
        "searchKey": "etchemin etc"
    },
    {
        "code": "etb",
        "name": "Etebi",
        "searchKey": "etebi etb"
    },
    {
        "code": "etx",
        "name": "Eten",
        "searchKey": "eten etx"
    },
    {
        "code": "ecr",
        "name": "Eteocretan",
        "searchKey": "eteocretan ecr"
    },
    {
        "code": "ecy",
        "name": "Eteocypriot",
        "searchKey": "eteocypriot ecy"
    },
    {
        "code": "eth",
        "name": "Ethiopian Sign Language",
        "searchKey": "ethiopian sign language eth"
    },
    {
        "code": "ich",
        "name": "Etkywan",
        "searchKey": "etkywan ich"
    },
    {
        "code": "eto",
        "name": "Eton (Cameroon)",
        "searchNames": [
            "Eton"
        ],
        "searchKey": "eton cameroon eto eton"
    },
    {
        "code": "etn",
        "name": "Eton (Vanuatu)",
        "searchNames": [
            "Eton"
        ],
        "searchKey": "eton vanuatu etn eton"
    },
    {
        "code": "ett",
        "name": "Etruscan",
        "searchKey": "etruscan ett"
    },
    {
        "code": "utr",
        "name": "Etulo",
        "searchKey": "etulo utr"
    },
    {
        "code": "eud",
        "name": "Eudeve",
        "searchKey": "eudeve eud"
    },
    {
        "code": "bzz",
        "name": "Evant",
        "searchKey": "evant bzz"
    },
    {
        "code": "eve",
        "name": "Even",
        "searchKey": "even eve"
    },
    {
        "code": "evn",
        "name": "Evenki",
        "searchKey": "evenki evn"
    },
    {
        "code": "gev",
        "name": "Eviya",
        "searchKey": "eviya gev"
    },
    {
        "code": "nou",
        "name": "Ewage-Notu",
        "searchKey": "ewage-notu nou"
    },
    {
        "code": "ewe",
        "name": "Ewe",
        "searchKey": "ewe"
    },
    {
        "code": "ewo",
        "name": "Ewondo",
        "searchKey": "ewondo ewo"
    },
    {
        "code": "ext",
        "name": "Extremaduran",
        "searchKey": "extremaduran ext"
    },
    {
        "code": "eya",
        "name": "Eyak",
        "searchKey": "eyak eya"
    },
    {
        "code": "eza",
        "name": "Ezaa",
        "searchKey": "ezaa eza"
    },
    {
        "code": "fab",
        "name": "Fa d'Ambu",
        "searchKey": "fa dambu fab"
    },
    {
        "code": "faf",
        "name": "Fagani",
        "searchKey": "fagani faf"
    },
    {
        "code": "fif",
        "name": "Faifi",
        "searchKey": "faifi fif"
    },
    {
        "code": "azt",
        "name": "Faire Atta",
        "searchKey": "faire atta azt"
    },
    {
        "code": "faj",
        "name": "Faita",
        "searchKey": "faita faj"
    },
    {
        "code": "fai",
        "name": "Faiwol",
        "searchKey": "faiwol fai"
    },
    {
        "code": "fax",
        "name": "Fala",
        "searchKey": "fala fax"
    },
    {
        "code": "cfm",
        "name": "Falam Chin",
        "searchKey": "falam chin cfm"
    },
    {
        "code": "fli",
        "name": "Fali",
        "searchKey": "fali fli"
    },
    {
        "code": "xfa",
        "name": "Faliscan",
        "searchKey": "faliscan xfa"
    },
    {
        "code": "fam",
        "name": "Fam",
        "searchKey": "fam"
    },
    {
        "code": "fng",
        "name": "Fanagalo",
        "searchKey": "fanagalo fng"
    },
    {
        "code": "bjp",
        "name": "Fanamaket",
        "searchKey": "fanamaket bjp"
    },
    {
        "code": "fnb",
        "name": "Fanbak",
        "searchKey": "fanbak fnb"
    },
    {
        "code": "fak",
        "name": "Fang (Cameroon)",
        "searchNames": [
            "Fang"
        ],
        "searchKey": "fang cameroon fak fang"
    },
    {
        "code": "fan",
        "name": "Fang (Equatorial Guinea)",
        "searchNames": [
            "Fang"
        ],
        "searchKey": "fang equatorial guinea fan fang"
    },
    {
        "code": "fni",
        "name": "Fania",
        "searchKey": "fania fni"
    },
    {
        "code": "fat",
        "name": "Fanti",
        "searchKey": "fanti fat"
    },
    {
        "code": "fmu",
        "name": "Far Western Muria",
        "searchKey": "far western muria fmu"
    },
    {
        "code": "gur",
        "name": "Farefare",
        "searchKey": "farefare gur"
    },
    {
        "code": "fao",
        "name": "Faroese",
        "searchKey": "faroese fao"
    },
    {
        "code": "fqs",
        "name": "Fas",
        "searchKey": "fas fqs"
    },
    {
        "code": "faa",
        "name": "Fasu",
        "searchKey": "fasu faa"
    },
    {
        "code": "far",
        "name": "Fataleka",
        "searchKey": "fataleka far"
    },
    {
        "code": "ddg",
        "name": "Fataluku",
        "searchKey": "fataluku ddg"
    },
    {
        "code": "fau",
        "name": "Fayu",
        "searchKey": "fayu fau"
    },
    {
        "code": "fmp",
        "name": "Fe'fe'",
        "searchKey": "fefe fmp"
    },
    {
        "code": "agl",
        "name": "Fembe",
        "searchKey": "fembe agl"
    },
    {
        "code": "fpe",
        "name": "Fernando Po Creole English",
        "searchKey": "fernando po creole english fpe"
    },
    {
        "code": "fer",
        "name": "Feroge",
        "searchKey": "feroge fer"
    },
    {
        "code": "hif",
        "name": "Fiji Hindi",
        "searchKey": "fiji hindi hif"
    },
    {
        "code": "fij",
        "name": "Fijian",
        "searchKey": "fijian fij"
    },
    {
        "code": "fil",
        "name": "Filipino",
        "searchKey": "filipino fil"
    },
    {
        "code": "tlp",
        "name": "Filomena Mata-Coahuitlán Totonac",
        "searchKey": "filomena mata-coahuitlan totonac tlp"
    },
    {
        "code": "fss",
        "name": "Finland-Swedish Sign Language",
        "searchKey": "finland-swedish sign language fss"
    },
    {
        "code": "fin",
        "name": "Finnish",
        "searchKey": "finnish fin"
    },
    {
        "code": "fse",
        "name": "Finnish Sign Language",
        "searchKey": "finnish sign language fse"
    },
    {
        "code": "fag",
        "name": "Finongan",
        "searchKey": "finongan fag"
    },
    {
        "code": "fip",
        "name": "Fipa",
        "searchKey": "fipa fip"
    },
    {
        "code": "fir",
        "name": "Firan",
        "searchKey": "firan fir"
    },
    {
        "code": "fiw",
        "name": "Fiwaga",
        "searchKey": "fiwaga fiw"
    },
    {
        "code": "fly",
        "name": "Flaaitaal",
        "searchKey": "flaaitaal fly"
    },
    {
        "code": "fln",
        "name": "Flinders Island",
        "searchKey": "flinders island fln"
    },
    {
        "code": "flh",
        "name": "Foau",
        "searchKey": "foau flh"
    },
    {
        "code": "foi",
        "name": "Foi",
        "searchKey": "foi"
    },
    {
        "code": "ffi",
        "name": "Foia Foia",
        "searchKey": "foia foia ffi"
    },
    {
        "code": "ppo",
        "name": "Folopa",
        "searchKey": "folopa ppo"
    },
    {
        "code": "fom",
        "name": "Foma",
        "searchKey": "foma fom"
    },
    {
        "code": "fon",
        "name": "Fon",
        "searchKey": "fon"
    },
    {
        "code": "fgr",
        "name": "Fongoro",
        "searchKey": "fongoro fgr"
    },
    {
        "code": "fod",
        "name": "Foodo",
        "searchKey": "foodo fod"
    },
    {
        "code": "frq",
        "name": "Forak",
        "searchKey": "forak frq"
    },
    {
        "code": "frd",
        "name": "Fordata",
        "searchKey": "fordata frd"
    },
    {
        "code": "for",
        "name": "Fore",
        "searchKey": "fore for"
    },
    {
        "code": "enf",
        "name": "Forest Enets",
        "searchKey": "forest enets enf"
    },
    {
        "code": "frt",
        "name": "Fortsenal",
        "searchKey": "fortsenal frt"
    },
    {
        "code": "zos",
        "name": "Francisco León Zoque",
        "searchKey": "francisco leon zoque zos"
    },
    {
        "code": "frk",
        "name": "Frankish",
        "searchKey": "frankish frk"
    },
    {
        "code": "fra",
        "name": "French",
        "searchKey": "french fra"
    },
    {
        "code": "fsl",
        "name": "French Sign Language",
        "searchKey": "french sign language fsl"
    },
    {
        "code": "fur",
        "name": "Friulian",
        "searchKey": "friulian fur"
    },
    {
        "code": "ful",
        "name": "Fulah",
        "searchKey": "fulah ful"
    },
    {
        "code": "flr",
        "name": "Fuliiru",
        "searchKey": "fuliiru flr"
    },
    {
        "code": "fun",
        "name": "Fulniô",
        "searchKey": "fulnio fun"
    },
    {
        "code": "fum",
        "name": "Fum",
        "searchKey": "fum"
    },
    {
        "code": "ula",
        "name": "Fungwa",
        "searchKey": "fungwa ula"
    },
    {
        "code": "fvr",
        "name": "Fur",
        "searchKey": "fur fvr"
    },
    {
        "code": "fuu",
        "name": "Furu",
        "searchKey": "furu fuu"
    },
    {
        "code": "fut",
        "name": "Futuna-Aniwa",
        "searchKey": "futuna-aniwa fut"
    },
    {
        "code": "fuy",
        "name": "Fuyug",
        "searchKey": "fuyug fuy"
    },
    {
        "code": "fwa",
        "name": "Fwâi",
        "searchKey": "fwai fwa"
    },
    {
        "code": "fwe",
        "name": "Fwe",
        "searchKey": "fwe"
    },
    {
        "code": "pym",
        "name": "Fyam",
        "searchKey": "fyam pym"
    },
    {
        "code": "fie",
        "name": "Fyer",
        "searchKey": "fyer fie"
    },
    {
        "code": "gaa",
        "name": "Ga",
        "searchKey": "ga gaa"
    },
    {
        "code": "ttb",
        "name": "Gaa",
        "searchKey": "gaa ttb"
    },
    {
        "code": "tbi",
        "name": "Gaam",
        "searchKey": "gaam tbi"
    },
    {
        "code": "gqa",
        "name": "Ga'anda",
        "searchKey": "gaanda gqa"
    },
    {
        "code": "gbw",
        "name": "Gabi-Gabi",
        "searchKey": "gabi-gabi gbw"
    },
    {
        "code": "gie",
        "name": "Gaɓogbo",
        "searchKey": "gaɓogbo gie"
    },
    {
        "code": "gab",
        "name": "Gabri",
        "searchKey": "gabri gab"
    },
    {
        "code": "xgf",
        "name": "Gabrielino-Fernandeño",
        "searchKey": "gabrielino-fernandeno xgf"
    },
    {
        "code": "gdk",
        "name": "Gadang",
        "searchKey": "gadang gdk"
    },
    {
        "code": "gdg",
        "name": "Ga'dang",
        "searchKey": "gadang gdg"
    },
    {
        "code": "gad",
        "name": "Gaddang",
        "searchKey": "gaddang gad"
    },
    {
        "code": "gbk",
        "name": "Gaddi",
        "searchKey": "gaddi gbk"
    },
    {
        "code": "ged",
        "name": "Gade",
        "searchKey": "gade ged"
    },
    {
        "code": "gda",
        "name": "Gade Lohar",
        "searchKey": "gade lohar gda"
    },
    {
        "code": "gdh",
        "name": "Gadjerawang",
        "searchKey": "gadjerawang gdh"
    },
    {
        "code": "gaj",
        "name": "Gadsup",
        "searchKey": "gadsup gaj"
    },
    {
        "code": "gft",
        "name": "Gafat",
        "searchKey": "gafat gft"
    },
    {
        "code": "gbu",
        "name": "Gagadu",
        "searchKey": "gagadu gbu"
    },
    {
        "code": "gag",
        "name": "Gagauz",
        "searchKey": "gagauz gag"
    },
    {
        "code": "btg",
        "name": "Gagnoa Bété",
        "searchKey": "gagnoa bete btg"
    },
    {
        "code": "ggu",
        "name": "Gagu",
        "searchKey": "gagu ggu"
    },
    {
        "code": "bfu",
        "name": "Gahri",
        "searchKey": "gahri bfu"
    },
    {
        "code": "gbf",
        "name": "Gaikundi",
        "searchKey": "gaikundi gbf"
    },
    {
        "code": "gic",
        "name": "Gail",
        "searchKey": "gail gic"
    },
    {
        "code": "gcn",
        "name": "Gaina",
        "searchKey": "gaina gcn"
    },
    {
        "code": "gap",
        "name": "Gal",
        "searchKey": "gal gap"
    },
    {
        "code": "glo",
        "name": "Galambu",
        "searchKey": "galambu glo"
    },
    {
        "code": "xga",
        "name": "Galatian",
        "searchKey": "galatian xga"
    },
    {
        "code": "gbi",
        "name": "Galela",
        "searchKey": "galela gbi"
    },
    {
        "code": "gar",
        "name": "Galeya",
        "searchKey": "galeya gar"
    },
    {
        "code": "car",
        "name": "Galibi Carib",
        "searchKey": "galibi carib car"
    },
    {
        "code": "gce",
        "name": "Galice",
        "searchKey": "galice gce"
    },
    {
        "code": "glg",
        "name": "Galician",
        "searchKey": "galician glg"
    },
    {
        "code": "xgl",
        "name": "Galindan",
        "searchKey": "galindan xgl"
    },
    {
        "code": "sdn",
        "name": "Gallurese Sardinian",
        "searchKey": "gallurese sardinian sdn"
    },
    {
        "code": "adl",
        "name": "Galo",
        "searchKey": "galo adl"
    },
    {
        "code": "gal",
        "name": "Galolen",
        "searchKey": "galolen gal"
    },
    {
        "code": "kgj",
        "name": "Gamale Kham",
        "searchKey": "gamale kham kgj"
    },
    {
        "code": "gma",
        "name": "Gambera",
        "searchKey": "gambera gma"
    },
    {
        "code": "wof",
        "name": "Gambian Wolof",
        "searchKey": "gambian wolof wof"
    },
    {
        "code": "kld",
        "name": "Gamilaraay",
        "searchKey": "gamilaraay kld"
    },
    {
        "code": "gbl",
        "name": "Gamit",
        "searchKey": "gamit gbl"
    },
    {
        "code": "gak",
        "name": "Gamkonora",
        "searchKey": "gamkonora gak"
    },
    {
        "code": "gmv",
        "name": "Gamo",
        "searchKey": "gamo gmv"
    },
    {
        "code": "bte",
        "name": "Gamo-Ningi",
        "searchKey": "gamo-ningi bte"
    },
    {
        "code": "gan",
        "name": "Gan Chinese",
        "searchKey": "gan chinese gan"
    },
    {
        "code": "gnq",
        "name": "Gana",
        "searchKey": "gana gnq"
    },
    {
        "code": "gne",
        "name": "Ganang",
        "searchKey": "ganang gne"
    },
    {
        "code": "lug",
        "name": "Ganda",
        "searchKey": "ganda lug"
    },
    {
        "code": "pgd",
        "name": "Gāndhārī",
        "searchKey": "gandhari pgd"
    },
    {
        "code": "gzn",
        "name": "Gane",
        "searchKey": "gane gzn"
    },
    {
        "code": "gcd",
        "name": "Ganggalida",
        "searchKey": "ganggalida gcd"
    },
    {
        "code": "ggl",
        "name": "Ganglau",
        "searchKey": "ganglau ggl"
    },
    {
        "code": "gnb",
        "name": "Gangte",
        "searchKey": "gangte gnb"
    },
    {
        "code": "gnl",
        "name": "Gangulu",
        "searchKey": "gangulu gnl"
    },
    {
        "code": "gao",
        "name": "Gants",
        "searchKey": "gants gao"
    },
    {
        "code": "gza",
        "name": "Ganza",
        "searchKey": "ganza gza"
    },
    {
        "code": "gnz",
        "name": "Ganzi",
        "searchKey": "ganzi gnz"
    },
    {
        "code": "gga",
        "name": "Gao",
        "searchKey": "gao gga"
    },
    {
        "code": "pwg",
        "name": "Gapapaiwa",
        "searchKey": "gapapaiwa pwg"
    },
    {
        "code": "gbm",
        "name": "Garhwali",
        "searchKey": "garhwali gbm"
    },
    {
        "code": "cab",
        "name": "Garifuna",
        "searchKey": "garifuna cab"
    },
    {
        "code": "ilg",
        "name": "Garig-Ilgar",
        "searchKey": "garig-ilgar ilg"
    },
    {
        "code": "xgi",
        "name": "Garingbal",
        "searchKey": "garingbal xgi"
    },
    {
        "code": "gll",
        "name": "Garlali",
        "searchKey": "garlali gll"
    },
    {
        "code": "grt",
        "name": "Garo",
        "searchKey": "garo grt"
    },
    {
        "code": "gex",
        "name": "Garre",
        "searchKey": "garre gex"
    },
    {
        "code": "wrk",
        "name": "Garrwa",
        "searchKey": "garrwa wrk"
    },
    {
        "code": "gyb",
        "name": "Garus",
        "searchKey": "garus gyb"
    },
    {
        "code": "xgr",
        "name": "Garza",
        "searchKey": "garza xgr"
    },
    {
        "code": "gaq",
        "name": "Gata'",
        "searchKey": "gata gaq"
    },
    {
        "code": "dmc",
        "name": "Gavak",
        "searchKey": "gavak dmc"
    },
    {
        "code": "gou",
        "name": "Gavar",
        "searchKey": "gavar gou"
    },
    {
        "code": "gvo",
        "name": "Gavião Do Jiparaná",
        "searchKey": "gaviao do jiparana gvo"
    },
    {
        "code": "gwt",
        "name": "Gawar-Bati",
        "searchKey": "gawar-bati gwt"
    },
    {
        "code": "gwc",
        "name": "Gawri",
        "searchKey": "gawri gwc"
    },
    {
        "code": "gwd",
        "name": "Gawwada",
        "searchKey": "gawwada gwd"
    },
    {
        "code": "gyl",
        "name": "Gayil",
        "searchKey": "gayil gyl"
    },
    {
        "code": "gay",
        "name": "Gayo",
        "searchKey": "gayo gay"
    },
    {
        "code": "gzi",
        "name": "Gazi",
        "searchKey": "gazi gzi"
    },
    {
        "code": "gbr",
        "name": "Gbagyi",
        "searchKey": "gbagyi gbr"
    },
    {
        "code": "gbv",
        "name": "Gbanu",
        "searchKey": "gbanu gbv"
    },
    {
        "code": "gbg",
        "name": "Gbanziri",
        "searchKey": "gbanziri gbg"
    },
    {
        "code": "gby",
        "name": "Gbari",
        "searchKey": "gbari gby"
    },
    {
        "code": "gba",
        "name": "Gbaya (Central African Republic)",
        "searchNames": [
            "Gbaya"
        ],
        "searchKey": "gbaya central african republic gba gbaya"
    },
    {
        "code": "krs",
        "name": "Gbaya (Sudan)",
        "searchNames": [
            "Gbaya"
        ],
        "searchKey": "gbaya sudan krs gbaya"
    },
    {
        "code": "gbp",
        "name": "Gbaya-Bossangoa",
        "searchKey": "gbaya-bossangoa gbp"
    },
    {
        "code": "gbq",
        "name": "Gbaya-Bozoum",
        "searchKey": "gbaya-bozoum gbq"
    },
    {
        "code": "gmm",
        "name": "Gbaya-Mbodomo",
        "searchKey": "gbaya-mbodomo gmm"
    },
    {
        "code": "gyg",
        "name": "Gbayi",
        "searchKey": "gbayi gyg"
    },
    {
        "code": "gbs",
        "name": "Gbesi Gbe",
        "searchKey": "gbesi gbe gbs"
    },
    {
        "code": "ggb",
        "name": "Gbii",
        "searchKey": "gbii ggb"
    },
    {
        "code": "xgb",
        "name": "Gbin",
        "searchKey": "gbin xgb"
    },
    {
        "code": "grh",
        "name": "Gbiri-Niragu",
        "searchKey": "gbiri-niragu grh"
    },
    {
        "code": "gec",
        "name": "Gboloo Grebo",
        "searchKey": "gboloo grebo gec"
    },
    {
        "code": "hmj",
        "name": "Ge",
        "searchKey": "ge hmj"
    },
    {
        "code": "kvq",
        "name": "Geba Karen",
        "searchKey": "geba karen kvq"
    },
    {
        "code": "gei",
        "name": "Gebe",
        "searchKey": "gebe gei"
    },
    {
        "code": "gdd",
        "name": "Gedaged",
        "searchKey": "gedaged gdd"
    },
    {
        "code": "drs",
        "name": "Gedeo",
        "searchKey": "gedeo drs"
    },
    {
        "code": "gez",
        "name": "Geez",
        "searchKey": "geez gez"
    },
    {
        "code": "gyz",
        "name": "Geji",
        "searchKey": "geji gyz"
    },
    {
        "code": "ghk",
        "name": "Geko Karen",
        "searchKey": "geko karen ghk"
    },
    {
        "code": "nlg",
        "name": "Gela",
        "searchKey": "gela nlg"
    },
    {
        "code": "geq",
        "name": "Geme",
        "searchKey": "geme geq"
    },
    {
        "code": "gej",
        "name": "Gen",
        "searchKey": "gen gej"
    },
    {
        "code": "gaf",
        "name": "Gende",
        "searchKey": "gende gaf"
    },
    {
        "code": "geg",
        "name": "Gengle",
        "searchKey": "gengle geg"
    },
    {
        "code": "kat",
        "name": "Georgian",
        "searchKey": "georgian kat"
    },
    {
        "code": "ygp",
        "name": "Gepo",
        "searchKey": "gepo ygp"
    },
    {
        "code": "gew",
        "name": "Gera",
        "searchKey": "gera gew"
    },
    {
        "code": "gef",
        "name": "Gerai",
        "searchKey": "gerai gef"
    },
    {
        "code": "deu",
        "name": "German",
        "searchKey": "german deu"
    },
    {
        "code": "gsg",
        "name": "German Sign Language",
        "searchKey": "german sign language gsg"
    },
    {
        "code": "gea",
        "name": "Geruma",
        "searchKey": "geruma gea"
    },
    {
        "code": "ges",
        "name": "Geser-Gorom",
        "searchKey": "geser-gorom ges"
    },
    {
        "code": "gha",
        "name": "Ghadamès",
        "searchKey": "ghadames gha"
    },
    {
        "code": "gpe",
        "name": "Ghanaian Pidgin English",
        "searchKey": "ghanaian pidgin english gpe"
    },
    {
        "code": "gse",
        "name": "Ghanaian Sign Language",
        "searchKey": "ghanaian sign language gse"
    },
    {
        "code": "gds",
        "name": "Ghandruk Sign Language",
        "searchKey": "ghandruk sign language gds"
    },
    {
        "code": "ghn",
        "name": "Ghanongga",
        "searchKey": "ghanongga ghn"
    },
    {
        "code": "gri",
        "name": "Ghari",
        "searchKey": "ghari gri"
    },
    {
        "code": "bmk",
        "name": "Ghayavi",
        "searchKey": "ghayavi bmk"
    },
    {
        "code": "aln",
        "name": "Gheg Albanian",
        "searchKey": "gheg albanian aln"
    },
    {
        "code": "ghr",
        "name": "Ghera",
        "searchKey": "ghera ghr"
    },
    {
        "code": "gdo",
        "name": "Ghodoberi",
        "searchKey": "ghodoberi gdo"
    },
    {
        "code": "bbj",
        "name": "Ghomálá'",
        "searchKey": "ghomala bbj"
    },
    {
        "code": "gho",
        "name": "Ghomara",
        "searchKey": "ghomara gho"
    },
    {
        "code": "aaa",
        "name": "Ghotuo",
        "searchKey": "ghotuo aaa"
    },
    {
        "code": "ghl",
        "name": "Ghulfan",
        "searchKey": "ghulfan ghl"
    },
    {
        "code": "bgi",
        "name": "Giangan",
        "searchKey": "giangan bgi"
    },
    {
        "code": "gib",
        "name": "Gibanawa",
        "searchKey": "gibanawa gib"
    },
    {
        "code": "gid",
        "name": "Gidar",
        "searchKey": "gidar gid"
    },
    {
        "code": "kks",
        "name": "Giiwo",
        "searchKey": "giiwo kks"
    },
    {
        "code": "acd",
        "name": "Gikyode",
        "searchKey": "gikyode acd"
    },
    {
        "code": "glk",
        "name": "Gilaki",
        "searchKey": "gilaki glk"
    },
    {
        "code": "gil",
        "name": "Gilbertese",
        "searchKey": "gilbertese gil"
    },
    {
        "code": "gix",
        "name": "Gilima",
        "searchKey": "gilima gix"
    },
    {
        "code": "niv",
        "name": "Gilyak",
        "searchKey": "gilyak niv"
    },
    {
        "code": "gim",
        "name": "Gimi (Eastern Highlands)",
        "searchNames": [
            "Gimi"
        ],
        "searchKey": "gimi eastern highlands gim gimi"
    },
    {
        "code": "gip",
        "name": "Gimi (West New Britain)",
        "searchNames": [
            "Gimi"
        ],
        "searchKey": "gimi west new britain gip gimi"
    },
    {
        "code": "kmp",
        "name": "Gimme",
        "searchKey": "gimme kmp"
    },
    {
        "code": "gmn",
        "name": "Gimnime",
        "searchKey": "gimnime gmn"
    },
    {
        "code": "gnm",
        "name": "Ginuman",
        "searchKey": "ginuman gnm"
    },
    {
        "code": "ayg",
        "name": "Ginyanga",
        "searchKey": "ginyanga ayg"
    },
    {
        "code": "bbr",
        "name": "Girawa",
        "searchKey": "girawa bbr"
    },
    {
        "code": "gii",
        "name": "Girirra",
        "searchKey": "girirra gii"
    },
    {
        "code": "nyf",
        "name": "Giryama",
        "searchKey": "giryama nyf"
    },
    {
        "code": "gih",
        "name": "Githabul",
        "searchKey": "githabul gih"
    },
    {
        "code": "toh",
        "name": "Gitonga",
        "searchKey": "gitonga toh"
    },
    {
        "code": "ggt",
        "name": "Gitua",
        "searchKey": "gitua ggt"
    },
    {
        "code": "git",
        "name": "Gitxsan",
        "searchKey": "gitxsan git"
    },
    {
        "code": "giy",
        "name": "Giyug",
        "searchKey": "giyug giy"
    },
    {
        "code": "tof",
        "name": "Gizrra",
        "searchKey": "gizrra tof"
    },
    {
        "code": "glr",
        "name": "Glaro-Twabo",
        "searchKey": "glaro-twabo glr"
    },
    {
        "code": "glw",
        "name": "Glavda",
        "searchKey": "glavda glw"
    },
    {
        "code": "oub",
        "name": "Glio-Oubi",
        "searchKey": "glio-oubi oub"
    },
    {
        "code": "gnu",
        "name": "Gnau",
        "searchKey": "gnau gnu"
    },
    {
        "code": "gom",
        "name": "Goan Konkani",
        "searchKey": "goan konkani gom"
    },
    {
        "code": "gig",
        "name": "Goaria",
        "searchKey": "goaria gig"
    },
    {
        "code": "goi",
        "name": "Gobasi",
        "searchKey": "gobasi goi"
    },
    {
        "code": "gox",
        "name": "Gobu",
        "searchKey": "gobu gox"
    },
    {
        "code": "god",
        "name": "Godié",
        "searchKey": "godie god"
    },
    {
        "code": "gdx",
        "name": "Godwari",
        "searchKey": "godwari gdx"
    },
    {
        "code": "ank",
        "name": "Goemai",
        "searchKey": "goemai ank"
    },
    {
        "code": "gof",
        "name": "Gofa",
        "searchKey": "gofa gof"
    },
    {
        "code": "gog",
        "name": "Gogo",
        "searchKey": "gogo gog"
    },
    {
        "code": "ggw",
        "name": "Gogodala",
        "searchKey": "gogodala ggw"
    },
    {
        "code": "gkn",
        "name": "Gokana",
        "searchKey": "gokana gkn"
    },
    {
        "code": "gol",
        "name": "Gola",
        "searchKey": "gola gol"
    },
    {
        "code": "gvf",
        "name": "Golin",
        "searchKey": "golin gvf"
    },
    {
        "code": "lja",
        "name": "Golpa",
        "searchKey": "golpa lja"
    },
    {
        "code": "gon",
        "name": "Gondi",
        "searchKey": "gondi gon"
    },
    {
        "code": "goo",
        "name": "Gone Dau",
        "searchKey": "gone dau goo"
    },
    {
        "code": "goe",
        "name": "Gongduk",
        "searchKey": "gongduk goe"
    },
    {
        "code": "gjn",
        "name": "Gonja",
        "searchKey": "gonja gjn"
    },
    {
        "code": "gov",
        "name": "Goo",
        "searchKey": "goo gov"
    },
    {
        "code": "gni",
        "name": "Gooniyandi",
        "searchKey": "gooniyandi gni"
    },
    {
        "code": "gqr",
        "name": "Gor",
        "searchKey": "gor gqr"
    },
    {
        "code": "goc",
        "name": "Gorakor",
        "searchKey": "gorakor goc"
    },
    {
        "code": "goq",
        "name": "Gorap",
        "searchKey": "gorap goq"
    },
    {
        "code": "xgg",
        "name": "Goreng",
        "searchKey": "goreng xgg"
    },
    {
        "code": "gor",
        "name": "Gorontalo",
        "searchKey": "gorontalo gor"
    },
    {
        "code": "grq",
        "name": "Gorovu",
        "searchKey": "gorovu grq"
    },
    {
        "code": "gow",
        "name": "Gorowa",
        "searchKey": "gorowa gow"
    },
    {
        "code": "got",
        "name": "Gothic",
        "searchKey": "gothic got"
    },
    {
        "code": "goy",
        "name": "Goundo",
        "searchKey": "goundo goy"
    },
    {
        "code": "gux",
        "name": "Gourmanchéma",
        "searchKey": "gourmanchema gux"
    },
    {
        "code": "goj",
        "name": "Gowlan",
        "searchKey": "gowlan goj"
    },
    {
        "code": "gok",
        "name": "Gowli",
        "searchKey": "gowli gok"
    },
    {
        "code": "gwf",
        "name": "Gowro",
        "searchKey": "gowro gwf"
    },
    {
        "code": "goz",
        "name": "Gozarkhani",
        "searchKey": "gozarkhani goz"
    },
    {
        "code": "nli",
        "name": "Grangali",
        "searchKey": "grangali nli"
    },
    {
        "code": "kbk",
        "name": "Grass Koiari",
        "searchKey": "grass koiari kbk"
    },
    {
        "code": "grb",
        "name": "Grebo",
        "searchKey": "grebo grb"
    },
    {
        "code": "gss",
        "name": "Greek Sign Language",
        "searchKey": "greek sign language gss"
    },
    {
        "code": "giq",
        "name": "Green Gelao",
        "searchKey": "green gelao giq"
    },
    {
        "code": "gcl",
        "name": "Grenadian Creole English",
        "searchKey": "grenadian creole english gcl"
    },
    {
        "code": "grs",
        "name": "Gresi",
        "searchKey": "gresi grs"
    },
    {
        "code": "gro",
        "name": "Groma",
        "searchKey": "groma gro"
    },
    {
        "code": "gos",
        "name": "Gronings",
        "searchKey": "gronings gos"
    },
    {
        "code": "ats",
        "name": "Gros Ventre",
        "searchKey": "gros ventre ats"
    },
    {
        "code": "gwx",
        "name": "Gua",
        "searchKey": "gua gwx"
    },
    {
        "code": "gcf",
        "name": "Guadeloupean Creole French",
        "searchKey": "guadeloupean creole french gcf"
    },
    {
        "code": "guh",
        "name": "Guahibo",
        "searchKey": "guahibo guh"
    },
    {
        "code": "gvj",
        "name": "Guajá",
        "searchKey": "guaja gvj"
    },
    {
        "code": "gub",
        "name": "Guajajára",
        "searchKey": "guajajara gub"
    },
    {
        "code": "gum",
        "name": "Guambiano",
        "searchKey": "guambiano gum"
    },
    {
        "code": "gqn",
        "name": "Guana (Brazil)",
        "searchNames": [
            "Guana"
        ],
        "searchKey": "guana brazil gqn guana"
    },
    {
        "code": "gva",
        "name": "Guana (Paraguay)",
        "searchNames": [
            "Guana"
        ],
        "searchKey": "guana paraguay gva guana"
    },
    {
        "code": "gvc",
        "name": "Guanano",
        "searchKey": "guanano gvc"
    },
    {
        "code": "gnc",
        "name": "Guanche",
        "searchKey": "guanche gnc"
    },
    {
        "code": "jiq",
        "name": "Guanyinqiao",
        "searchKey": "guanyinqiao jiq"
    },
    {
        "code": "grn",
        "name": "Guarani",
        "searchKey": "guarani grn"
    },
    {
        "code": "gyr",
        "name": "Guarayu",
        "searchKey": "guarayu gyr"
    },
    {
        "code": "gae",
        "name": "Guarequena",
        "searchKey": "guarequena gae"
    },
    {
        "code": "gsm",
        "name": "Guatemalan Sign Language",
        "searchKey": "guatemalan sign language gsm"
    },
    {
        "code": "gta",
        "name": "Guató",
        "searchKey": "guato gta"
    },
    {
        "code": "guo",
        "name": "Guayabero",
        "searchKey": "guayabero guo"
    },
    {
        "code": "xgd",
        "name": "Gudang",
        "searchKey": "gudang xgd"
    },
    {
        "code": "nji",
        "name": "Gudanji",
        "searchKey": "gudanji nji"
    },
    {
        "code": "gde",
        "name": "Gude",
        "searchKey": "gude gde"
    },
    {
        "code": "gdu",
        "name": "Gudu",
        "searchKey": "gudu gdu"
    },
    {
        "code": "gdf",
        "name": "Guduf-Gava",
        "searchKey": "guduf-gava gdf"
    },
    {
        "code": "amu",
        "name": "Guerrero Amuzgo",
        "searchKey": "guerrero amuzgo amu"
    },
    {
        "code": "ngu",
        "name": "Guerrero Nahuatl",
        "searchKey": "guerrero nahuatl ngu"
    },
    {
        "code": "zpg",
        "name": "Guevea De Humboldt Zapotec",
        "searchKey": "guevea de humboldt zapotec zpg"
    },
    {
        "code": "ggd",
        "name": "Gugadj",
        "searchKey": "gugadj ggd"
    },
    {
        "code": "gdc",
        "name": "Gugu Badhun",
        "searchKey": "gugu badhun gdc"
    },
    {
        "code": "wrw",
        "name": "Gugu Warra",
        "searchKey": "gugu warra wrw"
    },
    {
        "code": "kkp",
        "name": "Gugubera",
        "searchKey": "gugubera kkp"
    },
    {
        "code": "ghs",
        "name": "Guhu-Samane",
        "searchKey": "guhu-samane ghs"
    },
    {
        "code": "gcr",
        "name": "Guianese Creole French",
        "searchKey": "guianese creole french gcr"
    },
    {
        "code": "zgb",
        "name": "Guibei Zhuang",
        "searchKey": "guibei zhuang zgb"
    },
    {
        "code": "bet",
        "name": "Guiberoua Béte",
        "searchKey": "guiberoua bete bet"
    },
    {
        "code": "zgn",
        "name": "Guibian Zhuang",
        "searchKey": "guibian zhuang zgn"
    },
    {
        "code": "ztu",
        "name": "Güilá Zapotec",
        "searchKey": "guila zapotec ztu"
    },
    {
        "code": "gkp",
        "name": "Guinea Kpelle",
        "searchKey": "guinea kpelle gkp"
    },
    {
        "code": "lgs",
        "name": "Guinea-Bissau Sign Language",
        "searchKey": "guinea-bissau sign language lgs"
    },
    {
        "code": "gus",
        "name": "Guinean Sign Language",
        "searchKey": "guinean sign language gus"
    },
    {
        "code": "gqi",
        "name": "Guiqiong",
        "searchKey": "guiqiong gqi"
    },
    {
        "code": "guj",
        "name": "Gujarati",
        "searchKey": "gujarati guj"
    },
    {
        "code": "gju",
        "name": "Gujari",
        "searchKey": "gujari gju"
    },
    {
        "code": "kcm",
        "name": "Gula (Central African Republic)",
        "searchNames": [
            "Gula"
        ],
        "searchKey": "gula central african republic kcm gula"
    },
    {
        "code": "glu",
        "name": "Gula (Chad)",
        "searchNames": [
            "Gula"
        ],
        "searchKey": "gula chad glu gula"
    },
    {
        "code": "glj",
        "name": "Gula Iro",
        "searchKey": "gula iro glj"
    },
    {
        "code": "gmb",
        "name": "Gula'alaa",
        "searchKey": "gulaalaa gmb"
    },
    {
        "code": "gvl",
        "name": "Gulay",
        "searchKey": "gulay gvl"
    },
    {
        "code": "gly",
        "name": "Gule",
        "searchKey": "gule gly"
    },
    {
        "code": "afb",
        "name": "Gulf Arabic",
        "searchKey": "gulf arabic afb"
    },
    {
        "code": "gmu",
        "name": "Gumalu",
        "searchKey": "gumalu gmu"
    },
    {
        "code": "gnn",
        "name": "Gumatj",
        "searchKey": "gumatj gnn"
    },
    {
        "code": "gvs",
        "name": "Gumawana",
        "searchKey": "gumawana gvs"
    },
    {
        "code": "guk",
        "name": "Gumuz",
        "searchKey": "gumuz guk"
    },
    {
        "code": "guw",
        "name": "Gun",
        "searchKey": "gun guw"
    },
    {
        "code": "gdi",
        "name": "Gundi",
        "searchKey": "gundi gdi"
    },
    {
        "code": "gjm",
        "name": "Gunditjmara",
        "searchKey": "gunditjmara gjm"
    },
    {
        "code": "xrd",
        "name": "Gundungurra",
        "searchKey": "gundungurra xrd"
    },
    {
        "code": "gyf",
        "name": "Gungabula",
        "searchKey": "gungabula gyf"
    },
    {
        "code": "rub",
        "name": "Gungu",
        "searchKey": "gungu rub"
    },
    {
        "code": "gnt",
        "name": "Guntai",
        "searchKey": "guntai gnt"
    },
    {
        "code": "gup",
        "name": "Gunwinggu",
        "searchKey": "gunwinggu gup"
    },
    {
        "code": "gyy",
        "name": "Gunya",
        "searchKey": "gunya gyy"
    },
    {
        "code": "gpa",
        "name": "Gupa-Abawa",
        "searchKey": "gupa-abawa gpa"
    },
    {
        "code": "guf",
        "name": "Gupapuyngu",
        "searchKey": "gupapuyngu guf"
    },
    {
        "code": "grz",
        "name": "Guramalum",
        "searchKey": "guramalum grz"
    },
    {
        "code": "hac",
        "name": "Gurani",
        "searchKey": "gurani hac"
    },
    {
        "code": "gdj",
        "name": "Gurdjar",
        "searchKey": "gurdjar gdj"
    },
    {
        "code": "gnr",
        "name": "Gureng Gureng",
        "searchKey": "gureng gureng gnr"
    },
    {
        "code": "ggg",
        "name": "Gurgula",
        "searchKey": "gurgula ggg"
    },
    {
        "code": "grx",
        "name": "Guriaso",
        "searchKey": "guriaso grx"
    },
    {
        "code": "gue",
        "name": "Gurindji",
        "searchKey": "gurindji gue"
    },
    {
        "code": "gjr",
        "name": "Gurindji Kriol",
        "searchKey": "gurindji kriol gjr"
    },
    {
        "code": "gvm",
        "name": "Gurmana",
        "searchKey": "gurmana gvm"
    },
    {
        "code": "goa",
        "name": "Guro",
        "searchKey": "guro goa"
    },
    {
        "code": "gge",
        "name": "Gurr-goni",
        "searchKey": "gurr-goni gge"
    },
    {
        "code": "gvr",
        "name": "Gurung",
        "searchKey": "gurung gvr"
    },
    {
        "code": "grd",
        "name": "Guruntum-Mbaaru",
        "searchKey": "guruntum-mbaaru grd"
    },
    {
        "code": "guz",
        "name": "Gusii",
        "searchKey": "gusii guz"
    },
    {
        "code": "gsl",
        "name": "Gusilay",
        "searchKey": "gusilay gsl"
    },
    {
        "code": "kky",
        "name": "Guugu Yimidhirr",
        "searchKey": "guugu yimidhirr kky"
    },
    {
        "code": "xgw",
        "name": "Guwa",
        "searchKey": "guwa xgw"
    },
    {
        "code": "gwu",
        "name": "Guwamu",
        "searchKey": "guwamu gwu"
    },
    {
        "code": "gka",
        "name": "Guya",
        "searchKey": "guya gka"
    },
    {
        "code": "gyn",
        "name": "Guyanese Creole English",
        "searchKey": "guyanese creole english gyn"
    },
    {
        "code": "gvy",
        "name": "Guyani",
        "searchKey": "guyani gvy"
    },
    {
        "code": "ngs",
        "name": "Gvoko",
        "searchKey": "gvoko ngs"
    },
    {
        "code": "gwb",
        "name": "Gwa",
        "searchKey": "gwa gwb"
    },
    {
        "code": "dah",
        "name": "Gwahatike",
        "searchKey": "gwahatike dah"
    },
    {
        "code": "jgk",
        "name": "Gwak",
        "searchKey": "gwak jgk"
    },
    {
        "code": "bga",
        "name": "Gwamhi-Wuri",
        "searchKey": "gwamhi-wuri bga"
    },
    {
        "code": "gwn",
        "name": "Gwandara",
        "searchKey": "gwandara gwn"
    },
    {
        "code": "grw",
        "name": "Gweda",
        "searchKey": "gweda grw"
    },
    {
        "code": "gwe",
        "name": "Gweno",
        "searchKey": "gweno gwe"
    },
    {
        "code": "gwr",
        "name": "Gwere",
        "searchKey": "gwere gwr"
    },
    {
        "code": "gwi",
        "name": "Gwichʼin",
        "searchKey": "gwichʼin gwi"
    },
    {
        "code": "gyo",
        "name": "Gyalsumdo",
        "searchKey": "gyalsumdo gyo"
    },
    {
        "code": "gyi",
        "name": "Gyele",
        "searchKey": "gyele gyi"
    },
    {
        "code": "gye",
        "name": "Gyem",
        "searchKey": "gyem gye"
    },
    {
        "code": "haq",
        "name": "Ha",
        "searchKey": "ha haq"
    },
    {
        "code": "hbu",
        "name": "Habu",
        "searchKey": "habu hbu"
    },
    {
        "code": "hdy",
        "name": "Hadiyya",
        "searchKey": "hadiyya hdy"
    },
    {
        "code": "hoj",
        "name": "Hadothi",
        "searchKey": "hadothi hoj"
    },
    {
        "code": "xhd",
        "name": "Hadrami",
        "searchKey": "hadrami xhd"
    },
    {
        "code": "ayh",
        "name": "Hadrami Arabic",
        "searchKey": "hadrami arabic ayh"
    },
    {
        "code": "hts",
        "name": "Hadza",
        "searchKey": "hadza hts"
    },
    {
        "code": "aek",
        "name": "Haeke",
        "searchKey": "haeke aek"
    },
    {
        "code": "hah",
        "name": "Hahon",
        "searchKey": "hahon hah"
    },
    {
        "code": "hgm",
        "name": "Haiǁom",
        "searchKey": "haiǁom hgm"
    },
    {
        "code": "hai",
        "name": "Haida",
        "searchKey": "haida hai"
    },
    {
        "code": "hgw",
        "name": "Haigwai",
        "searchKey": "haigwai hgw"
    },
    {
        "code": "hnm",
        "name": "Hainanese",
        "searchKey": "hainanese hnm"
    },
    {
        "code": "haf",
        "name": "Haiphong Sign Language",
        "searchKey": "haiphong sign language haf"
    },
    {
        "code": "has",
        "name": "Haisla",
        "searchKey": "haisla has"
    },
    {
        "code": "hat",
        "name": "Haitian",
        "searchKey": "haitian hat"
    },
    {
        "code": "hvc",
        "name": "Haitian Vodoun Culture Language",
        "searchKey": "haitian vodoun culture language hvc"
    },
    {
        "code": "hji",
        "name": "Haji",
        "searchKey": "haji hji"
    },
    {
        "code": "haj",
        "name": "Hajong",
        "searchKey": "hajong haj"
    },
    {
        "code": "cnh",
        "name": "Hakha Chin",
        "searchKey": "hakha chin cnh"
    },
    {
        "code": "hak",
        "name": "Hakka Chinese",
        "searchKey": "hakka chinese hak"
    },
    {
        "code": "hao",
        "name": "Hakö",
        "searchKey": "hako hao"
    },
    {
        "code": "hal",
        "name": "Halang",
        "searchKey": "halang hal"
    },
    {
        "code": "hld",
        "name": "Halang Doan",
        "searchKey": "halang doan hld"
    },
    {
        "code": "hlb",
        "name": "Halbi",
        "searchKey": "halbi hlb"
    },
    {
        "code": "khk",
        "name": "Halh Mongolian",
        "searchKey": "halh mongolian khk"
    },
    {
        "code": "hla",
        "name": "Halia",
        "searchKey": "halia hla"
    },
    {
        "code": "hur",
        "name": "Halkomelem",
        "searchKey": "halkomelem hur"
    },
    {
        "code": "hmu",
        "name": "Hamap",
        "searchKey": "hamap hmu"
    },
    {
        "code": "hba",
        "name": "Hamba",
        "searchKey": "hamba hba"
    },
    {
        "code": "amf",
        "name": "Hamer-Banna",
        "searchKey": "hamer-banna amf"
    },
    {
        "code": "hmt",
        "name": "Hamtai",
        "searchKey": "hamtai hmt"
    },
    {
        "code": "haa",
        "name": "Hän",
        "searchKey": "han haa"
    },
    {
        "code": "hag",
        "name": "Hanga",
        "searchKey": "hanga hag"
    },
    {
        "code": "wos",
        "name": "Hanga Hundi",
        "searchKey": "hanga hundi wos"
    },
    {
        "code": "han",
        "name": "Hangaza",
        "searchKey": "hangaza han"
    },
    {
        "code": "hni",
        "name": "Hani",
        "searchKey": "hani hni"
    },
    {
        "code": "lml",
        "name": "Hano",
        "searchKey": "hano lml"
    },
    {
        "code": "hab",
        "name": "Hanoi Sign Language",
        "searchKey": "hanoi sign language hab"
    },
    {
        "code": "hnn",
        "name": "Hanunoo",
        "searchKey": "hanunoo hnn"
    },
    {
        "code": "xha",
        "name": "Harami",
        "searchKey": "harami xha"
    },
    {
        "code": "har",
        "name": "Harari",
        "searchKey": "harari har"
    },
    {
        "code": "hro",
        "name": "Haroi",
        "searchKey": "haroi hro"
    },
    {
        "code": "hss",
        "name": "Harsusi",
        "searchKey": "harsusi hss"
    },
    {
        "code": "tmd",
        "name": "Haruai",
        "searchKey": "haruai tmd"
    },
    {
        "code": "hrk",
        "name": "Haruku",
        "searchKey": "haruku hrk"
    },
    {
        "code": "bgc",
        "name": "Haryanvi",
        "searchKey": "haryanvi bgc"
    },
    {
        "code": "hrz",
        "name": "Harzani",
        "searchKey": "harzani hrz"
    },
    {
        "code": "ybj",
        "name": "Hasha",
        "searchKey": "hasha ybj"
    },
    {
        "code": "mey",
        "name": "Hassaniyya",
        "searchKey": "hassaniyya mey"
    },
    {
        "code": "had",
        "name": "Hatam",
        "searchKey": "hatam had"
    },
    {
        "code": "xht",
        "name": "Hattic",
        "searchKey": "hattic xht"
    },
    {
        "code": "hau",
        "name": "Hausa",
        "searchKey": "hausa hau"
    },
    {
        "code": "hsl",
        "name": "Hausa Sign Language",
        "searchKey": "hausa sign language hsl"
    },
    {
        "code": "yuf",
        "name": "Havasupai-Walapai-Yavapai",
        "searchKey": "havasupai-walapai-yavapai yuf"
    },
    {
        "code": "hvk",
        "name": "Haveke",
        "searchKey": "haveke hvk"
    },
    {
        "code": "hav",
        "name": "Havu",
        "searchKey": "havu hav"
    },
    {
        "code": "hwc",
        "name": "Hawai'i Creole English",
        "searchKey": "hawaii creole english hwc"
    },
    {
        "code": "hps",
        "name": "Hawai'i Sign Language (HSL)",
        "searchNames": [
            "Hawai'i Sign Language"
        ],
        "searchKey": "hawaii sign language hsl hps hawaii sign language"
    },
    {
        "code": "haw",
        "name": "Hawaiian",
        "searchKey": "hawaiian haw"
    },
    {
        "code": "hay",
        "name": "Haya",
        "searchKey": "haya hay"
    },
    {
        "code": "haz",
        "name": "Hazaragi",
        "searchKey": "hazaragi haz"
    },
    {
        "code": "xed",
        "name": "Hdi",
        "searchKey": "hdi xed"
    },
    {
        "code": "heb",
        "name": "Hebrew",
        "searchKey": "hebrew heb"
    },
    {
        "code": "heh",
        "name": "Hehe",
        "searchKey": "hehe heh"
    },
    {
        "code": "hbn",
        "name": "Heiban",
        "searchKey": "heiban hbn"
    },
    {
        "code": "hei",
        "name": "Heiltsuk",
        "searchKey": "heiltsuk hei"
    },
    {
        "code": "heg",
        "name": "Helong",
        "searchKey": "helong heg"
    },
    {
        "code": "nix",
        "name": "Hema",
        "searchKey": "hema nix"
    },
    {
        "code": "hem",
        "name": "Hemba",
        "searchKey": "hemba hem"
    },
    {
        "code": "mmi",
        "name": "Hember Avu",
        "searchKey": "hember avu mmi"
    },
    {
        "code": "hed",
        "name": "Herdé",
        "searchKey": "herde hed"
    },
    {
        "code": "her",
        "name": "Herero",
        "searchKey": "herero her"
    },
    {
        "code": "llf",
        "name": "Hermit",
        "searchKey": "hermit llf"
    },
    {
        "code": "xhr",
        "name": "Hernican",
        "searchKey": "hernican xhr"
    },
    {
        "code": "hrt",
        "name": "Hértevin",
        "searchKey": "hertevin hrt"
    },
    {
        "code": "ham",
        "name": "Hewa",
        "searchKey": "hewa ham"
    },
    {
        "code": "auk",
        "name": "Heyo",
        "searchKey": "heyo auk"
    },
    {
        "code": "ghc",
        "name": "Hiberno-Scottish Gaelic",
        "searchKey": "hiberno-scottish gaelic ghc"
    },
    {
        "code": "hib",
        "name": "Hibito",
        "searchKey": "hibito hib"
    },
    {
        "code": "hid",
        "name": "Hidatsa",
        "searchKey": "hidatsa hid"
    },
    {
        "code": "hlu",
        "name": "Hieroglyphic Luwian",
        "searchKey": "hieroglyphic luwian hlu"
    },
    {
        "code": "mba",
        "name": "Higaonon",
        "searchKey": "higaonon mba"
    },
    {
        "code": "kjk",
        "name": "Highland Konjo",
        "searchKey": "highland konjo kjk"
    },
    {
        "code": "chd",
        "name": "Highland Oaxaca Chontal",
        "searchKey": "highland oaxaca chontal chd"
    },
    {
        "code": "poi",
        "name": "Highland Popoluca",
        "searchKey": "highland popoluca poi"
    },
    {
        "code": "azz",
        "name": "Highland Puebla Nahuatl",
        "searchKey": "highland puebla nahuatl azz"
    },
    {
        "code": "tos",
        "name": "Highland Totonac",
        "searchKey": "highland totonac tos"
    },
    {
        "code": "acw",
        "name": "Hijazi Arabic",
        "searchKey": "hijazi arabic acw"
    },
    {
        "code": "hij",
        "name": "Hijuk",
        "searchKey": "hijuk hij"
    },
    {
        "code": "hil",
        "name": "Hiligaynon",
        "searchKey": "hiligaynon hil"
    },
    {
        "code": "hir",
        "name": "Himarimã",
        "searchKey": "himarima hir"
    },
    {
        "code": "hin",
        "name": "Hindi",
        "searchKey": "hindi hin"
    },
    {
        "code": "hii",
        "name": "Hinduri",
        "searchKey": "hinduri hii"
    },
    {
        "code": "gin",
        "name": "Hinukh",
        "searchKey": "hinukh gin"
    },
    {
        "code": "hmo",
        "name": "Hiri Motu",
        "searchKey": "hiri motu hmo"
    },
    {
        "code": "hit",
        "name": "Hittite",
        "searchKey": "hittite hit"
    },
    {
        "code": "htu",
        "name": "Hitu",
        "searchKey": "hitu htu"
    },
    {
        "code": "hiw",
        "name": "Hiw",
        "searchKey": "hiw"
    },
    {
        "code": "hix",
        "name": "Hixkaryána",
        "searchKey": "hixkaryana hix"
    },
    {
        "code": "lic",
        "name": "Hlai",
        "searchKey": "hlai lic"
    },
    {
        "code": "yhl",
        "name": "Hlepho Phowa",
        "searchKey": "hlepho phowa yhl"
    },
    {
        "code": "hle",
        "name": "Hlersu",
        "searchKey": "hlersu hle"
    },
    {
        "code": "hmr",
        "name": "Hmar",
        "searchKey": "hmar hmr"
    },
    {
        "code": "hmn",
        "name": "Hmong",
        "searchKey": "hmong hmn"
    },
    {
        "code": "mww",
        "name": "Hmong Daw",
        "searchKey": "hmong daw mww"
    },
    {
        "code": "hmv",
        "name": "Hmong Dô",
        "searchKey": "hmong do hmv"
    },
    {
        "code": "hmf",
        "name": "Hmong Don",
        "searchKey": "hmong don hmf"
    },
    {
        "code": "hnj",
        "name": "Hmong Njua",
        "searchKey": "hmong njua hnj"
    },
    {
        "code": "hmz",
        "name": "Hmong Shua",
        "searchKey": "hmong shua hmz"
    },
    {
        "code": "mrk",
        "name": "Hmwaveke",
        "searchKey": "hmwaveke mrk"
    },
    {
        "code": "hoc",
        "name": "Ho",
        "searchKey": "ho hoc"
    },
    {
        "code": "hos",
        "name": "Ho Chi Minh City Sign Language",
        "searchKey": "ho chi minh city sign language hos"
    },
    {
        "code": "hoa",
        "name": "Hoava",
        "searchKey": "hoava hoa"
    },
    {
        "code": "hoh",
        "name": "Hobyót",
        "searchKey": "hobyot hoh"
    },
    {
        "code": "win",
        "name": "Ho-Chunk",
        "searchKey": "ho-chunk win"
    },
    {
        "code": "hhi",
        "name": "Hoia Hoia",
        "searchKey": "hoia hoia hhi"
    },
    {
        "code": "hoi",
        "name": "Holikachuk",
        "searchKey": "holikachuk hoi"
    },
    {
        "code": "hoy",
        "name": "Holiya",
        "searchKey": "holiya hoy"
    },
    {
        "code": "hod",
        "name": "Holma",
        "searchKey": "holma hod"
    },
    {
        "code": "hoo",
        "name": "Holoholo",
        "searchKey": "holoholo hoo"
    },
    {
        "code": "hol",
        "name": "Holu",
        "searchKey": "holu hol"
    },
    {
        "code": "hom",
        "name": "Homa",
        "searchKey": "homa hom"
    },
    {
        "code": "hds",
        "name": "Honduras Sign Language",
        "searchKey": "honduras sign language hds"
    },
    {
        "code": "juh",
        "name": "Hõne",
        "searchKey": "hone juh"
    },
    {
        "code": "hks",
        "name": "Hong Kong Sign Language",
        "searchKey": "hong kong sign language hks"
    },
    {
        "code": "how",
        "name": "Honi",
        "searchKey": "honi how"
    },
    {
        "code": "hop",
        "name": "Hopi",
        "searchKey": "hopi hop"
    },
    {
        "code": "hrm",
        "name": "Horned Miao",
        "searchKey": "horned miao hrm"
    },
    {
        "code": "hor",
        "name": "Horo",
        "searchKey": "horo hor"
    },
    {
        "code": "hoe",
        "name": "Horom",
        "searchKey": "horom hoe"
    },
    {
        "code": "ero",
        "name": "Horpa",
        "searchKey": "horpa ero"
    },
    {
        "code": "hot",
        "name": "Hote",
        "searchKey": "hote hot"
    },
    {
        "code": "hti",
        "name": "Hoti",
        "searchKey": "hoti hti"
    },
    {
        "code": "hov",
        "name": "Hovongan",
        "searchKey": "hovongan hov"
    },
    {
        "code": "hhy",
        "name": "Hoyahoya",
        "searchKey": "hoyahoya hhy"
    },
    {
        "code": "hoz",
        "name": "Hozo",
        "searchKey": "hozo hoz"
    },
    {
        "code": "hpo",
        "name": "Hpon",
        "searchKey": "hpon hpo"
    },
    {
        "code": "hra",
        "name": "Hrangkhol",
        "searchKey": "hrangkhol hra"
    },
    {
        "code": "hre",
        "name": "Hre",
        "searchKey": "hre"
    },
    {
        "code": "hru",
        "name": "Hruso",
        "searchKey": "hruso hru"
    },
    {
        "code": "huo",
        "name": "Hu",
        "searchKey": "hu huo"
    },
    {
        "code": "hug",
        "name": "Huachipaeri",
        "searchKey": "huachipaeri hug"
    },
    {
        "code": "qub",
        "name": "Huallaga Huánuco Quechua",
        "searchKey": "huallaga huanuco quechua qub"
    },
    {
        "code": "qvh",
        "name": "Huamalíes-Dos de Mayo Huánuco Quechua",
        "searchKey": "huamalies-dos de mayo huanuco quechua qvh"
    },
    {
        "code": "hub",
        "name": "Huambisa",
        "searchKey": "huambisa hub"
    },
    {
        "code": "var",
        "name": "Huarijio",
        "searchKey": "huarijio var"
    },
    {
        "code": "hus",
        "name": "Huastec",
        "searchKey": "huastec hus"
    },
    {
        "code": "hud",
        "name": "Huaulu",
        "searchKey": "huaulu hud"
    },
    {
        "code": "mau",
        "name": "Huautla Mazatec",
        "searchKey": "huautla mazatec mau"
    },
    {
        "code": "nhq",
        "name": "Huaxcaleca Nahuatl",
        "searchKey": "huaxcaleca nahuatl nhq"
    },
    {
        "code": "qwh",
        "name": "Huaylas Ancash Quechua",
        "searchKey": "huaylas ancash quechua qwh"
    },
    {
        "code": "qvw",
        "name": "Huaylla Wanca Quechua",
        "searchKey": "huaylla wanca quechua qvw"
    },
    {
        "code": "hbb",
        "name": "Huba",
        "searchKey": "huba hbb"
    },
    {
        "code": "tee",
        "name": "Huehuetla Tepehua",
        "searchKey": "huehuetla tepehua tee"
    },
    {
        "code": "hch",
        "name": "Huichol",
        "searchKey": "huichol hch"
    },
    {
        "code": "huh",
        "name": "Huilliche",
        "searchKey": "huilliche huh"
    },
    {
        "code": "mxs",
        "name": "Huitepec Mixtec",
        "searchKey": "huitepec mixtec mxs"
    },
    {
        "code": "czh",
        "name": "Huizhou Chinese",
        "searchKey": "huizhou chinese czh"
    },
    {
        "code": "huw",
        "name": "Hukumina",
        "searchKey": "hukumina huw"
    },
    {
        "code": "hul",
        "name": "Hula",
        "searchKey": "hula hul"
    },
    {
        "code": "huy",
        "name": "Hulaulá",
        "searchKey": "hulaula huy"
    },
    {
        "code": "hui",
        "name": "Huli",
        "searchKey": "huli hui"
    },
    {
        "code": "huk",
        "name": "Hulung",
        "searchKey": "hulung huk"
    },
    {
        "code": "hmb",
        "name": "Humburi Senni Songhay",
        "searchKey": "humburi senni songhay hmb"
    },
    {
        "code": "huf",
        "name": "Humene",
        "searchKey": "humene huf"
    },
    {
        "code": "hut",
        "name": "Humla",
        "searchKey": "humla hut"
    },
    {
        "code": "hke",
        "name": "Hunde",
        "searchKey": "hunde hke"
    },
    {
        "code": "hnu",
        "name": "Hung",
        "searchKey": "hung hnu"
    },
    {
        "code": "hum",
        "name": "Hungana",
        "searchKey": "hungana hum"
    },
    {
        "code": "hun",
        "name": "Hungarian",
        "searchKey": "hungarian hun"
    },
    {
        "code": "hsh",
        "name": "Hungarian Sign Language",
        "searchKey": "hungarian sign language hsh"
    },
    {
        "code": "hng",
        "name": "Hungu",
        "searchKey": "hungu hng"
    },
    {
        "code": "hkk",
        "name": "Hunjara-Kaina Ke",
        "searchKey": "hunjara-kaina ke hkk"
    },
    {
        "code": "xhc",
        "name": "Hunnic",
        "searchKey": "hunnic xhc"
    },
    {
        "code": "hrx",
        "name": "Hunsrik",
        "searchKey": "hunsrik hrx"
    },
    {
        "code": "huz",
        "name": "Hunzib",
        "searchKey": "hunzib huz"
    },
    {
        "code": "hup",
        "name": "Hupa",
        "searchKey": "hupa hup"
    },
    {
        "code": "jup",
        "name": "Hupdë",
        "searchKey": "hupde jup"
    },
    {
        "code": "hap",
        "name": "Hupla",
        "searchKey": "hupla hap"
    },
    {
        "code": "xhu",
        "name": "Hurrian",
        "searchKey": "hurrian xhu"
    },
    {
        "code": "geh",
        "name": "Hutterite German",
        "searchKey": "hutterite german geh"
    },
    {
        "code": "hwo",
        "name": "Hwana",
        "searchKey": "hwana hwo"
    },
    {
        "code": "hya",
        "name": "Hya",
        "searchKey": "hya"
    },
    {
        "code": "jab",
        "name": "Hyam",
        "searchKey": "hyam jab"
    },
    {
        "code": "scp",
        "name": "Hyolmo",
        "searchKey": "hyolmo scp"
    },
    {
        "code": "iai",
        "name": "Iaai",
        "searchKey": "iaai iai"
    },
    {
        "code": "yml",
        "name": "Iamalele",
        "searchKey": "iamalele yml"
    },
    {
        "code": "ian",
        "name": "Iatmul",
        "searchKey": "iatmul ian"
    },
    {
        "code": "tmu",
        "name": "Iau",
        "searchKey": "iau tmu"
    },
    {
        "code": "tek",
        "name": "Ibali Teke",
        "searchKey": "ibali teke tek"
    },
    {
        "code": "ibl",
        "name": "Ibaloi",
        "searchKey": "ibaloi ibl"
    },
    {
        "code": "iba",
        "name": "Iban",
        "searchKey": "iban iba"
    },
    {
        "code": "ibg",
        "name": "Ibanag",
        "searchKey": "ibanag ibg"
    },
    {
        "code": "iby",
        "name": "Ibani",
        "searchKey": "ibani iby"
    },
    {
        "code": "ivb",
        "name": "Ibatan",
        "searchKey": "ibatan ivb"
    },
    {
        "code": "xib",
        "name": "Iberian",
        "searchKey": "iberian xib"
    },
    {
        "code": "ibb",
        "name": "Ibibio",
        "searchKey": "ibibio ibb"
    },
    {
        "code": "ibn",
        "name": "Ibino",
        "searchKey": "ibino ibn"
    },
    {
        "code": "ibu",
        "name": "Ibu",
        "searchKey": "ibu"
    },
    {
        "code": "ibr",
        "name": "Ibuoro",
        "searchKey": "ibuoro ibr"
    },
    {
        "code": "isl",
        "name": "Icelandic",
        "searchKey": "icelandic isl"
    },
    {
        "code": "icl",
        "name": "Icelandic Sign Language",
        "searchKey": "icelandic sign language icl"
    },
    {
        "code": "bec",
        "name": "Iceve-Maci",
        "searchKey": "iceve-maci bec"
    },
    {
        "code": "dbj",
        "name": "Ida'an",
        "searchKey": "idaan dbj"
    },
    {
        "code": "ida",
        "name": "Idakho-Isukha-Tiriki",
        "searchKey": "idakho-isukha-tiriki ida"
    },
    {
        "code": "idt",
        "name": "Idaté",
        "searchKey": "idate idt"
    },
    {
        "code": "ide",
        "name": "Idere",
        "searchKey": "idere ide"
    },
    {
        "code": "ids",
        "name": "Idesa",
        "searchKey": "idesa ids"
    },
    {
        "code": "idi",
        "name": "Idi",
        "searchKey": "idi"
    },
    {
        "code": "ido",
        "name": "Ido",
        "searchKey": "ido"
    },
    {
        "code": "idu",
        "name": "Idoma",
        "searchKey": "idoma idu"
    },
    {
        "code": "idc",
        "name": "Idon",
        "searchKey": "idon idc"
    },
    {
        "code": "clk",
        "name": "Idu-Mishmi",
        "searchKey": "idu-mishmi clk"
    },
    {
        "code": "viv",
        "name": "Iduna",
        "searchKey": "iduna viv"
    },
    {
        "code": "ife",
        "name": "Ifè",
        "searchKey": "ife"
    },
    {
        "code": "iff",
        "name": "Ifo",
        "searchKey": "ifo iff"
    },
    {
        "code": "igl",
        "name": "Igala",
        "searchKey": "igala igl"
    },
    {
        "code": "igg",
        "name": "Igana",
        "searchKey": "igana igg"
    },
    {
        "code": "ibo",
        "name": "Igbo",
        "searchKey": "igbo ibo"
    },
    {
        "code": "ige",
        "name": "Igede",
        "searchKey": "igede ige"
    },
    {
        "code": "ign",
        "name": "Ignaciano",
        "searchKey": "ignaciano ign"
    },
    {
        "code": "ahl",
        "name": "Igo",
        "searchKey": "igo ahl"
    },
    {
        "code": "nar",
        "name": "Iguta",
        "searchKey": "iguta nar"
    },
    {
        "code": "igw",
        "name": "Igwe",
        "searchKey": "igwe igw"
    },
    {
        "code": "ihp",
        "name": "Iha",
        "searchKey": "iha ihp"
    },
    {
        "code": "ihb",
        "name": "Iha Based Pidgin",
        "searchKey": "iha based pidgin ihb"
    },
    {
        "code": "ihi",
        "name": "Ihievbe",
        "searchKey": "ihievbe ihi"
    },
    {
        "code": "ikx",
        "name": "Ik",
        "searchKey": "ik ikx"
    },
    {
        "code": "ikk",
        "name": "Ika",
        "searchKey": "ika ikk"
    },
    {
        "code": "ikr",
        "name": "Ikaranggal",
        "searchKey": "ikaranggal ikr"
    },
    {
        "code": "ikh",
        "name": "Ikhin-Arokho",
        "searchKey": "ikhin-arokho ikh"
    },
    {
        "code": "ikz",
        "name": "Ikizu",
        "searchKey": "ikizu ikz"
    },
    {
        "code": "iki",
        "name": "Iko",
        "searchKey": "iko iki"
    },
    {
        "code": "meb",
        "name": "Ikobi",
        "searchKey": "ikobi meb"
    },
    {
        "code": "ntk",
        "name": "Ikoma-Nata-Isenye",
        "searchKey": "ikoma-nata-isenye ntk"
    },
    {
        "code": "txi",
        "name": "Ikpeng",
        "searchKey": "ikpeng txi"
    },
    {
        "code": "ikp",
        "name": "Ikpeshi",
        "searchKey": "ikpeshi ikp"
    },
    {
        "code": "kpo",
        "name": "Ikposo",
        "searchKey": "ikposo kpo"
    },
    {
        "code": "ikv",
        "name": "Iku-Gora-Ankwa",
        "searchKey": "iku-gora-ankwa ikv"
    },
    {
        "code": "ikl",
        "name": "Ikulu",
        "searchKey": "ikulu ikl"
    },
    {
        "code": "ikw",
        "name": "Ikwere",
        "searchKey": "ikwere ikw"
    },
    {
        "code": "iqw",
        "name": "Ikwo",
        "searchKey": "ikwo iqw"
    },
    {
        "code": "ilb",
        "name": "Ila",
        "searchKey": "ila ilb"
    },
    {
        "code": "ila",
        "name": "Ile Ape",
        "searchKey": "ile ape ila"
    },
    {
        "code": "ili",
        "name": "Ili Turki",
        "searchKey": "ili turki ili"
    },
    {
        "code": "mbi",
        "name": "Ilianen Manobo",
        "searchKey": "ilianen manobo mbi"
    },
    {
        "code": "ilu",
        "name": "Ili'uun",
        "searchKey": "iliuun ilu"
    },
    {
        "code": "xil",
        "name": "Illyrian",
        "searchKey": "illyrian xil"
    },
    {
        "code": "ilo",
        "name": "Iloko",
        "searchKey": "iloko ilo"
    },
    {
        "code": "ilk",
        "name": "Ilongot",
        "searchKey": "ilongot ilk"
    },
    {
        "code": "ilv",
        "name": "Ilue",
        "searchKey": "ilue ilv"
    },
    {
        "code": "mlk",
        "name": "Ilwana",
        "searchKey": "ilwana mlk"
    },
    {
        "code": "qvi",
        "name": "Imbabura Highland Quichua",
        "searchKey": "imbabura highland quichua qvi"
    },
    {
        "code": "imo",
        "name": "Imbongu",
        "searchKey": "imbongu imo"
    },
    {
        "code": "imn",
        "name": "Imonda",
        "searchKey": "imonda imn"
    },
    {
        "code": "imt",
        "name": "Imotong",
        "searchKey": "imotong imt"
    },
    {
        "code": "imr",
        "name": "Imroing",
        "searchKey": "imroing imr"
    },
    {
        "code": "abx",
        "name": "Inabaknon",
        "searchKey": "inabaknon abx"
    },
    {
        "code": "mzu",
        "name": "Inapang",
        "searchKey": "inapang mzu"
    },
    {
        "code": "inp",
        "name": "Iñapari",
        "searchKey": "inapari inp"
    },
    {
        "code": "smn",
        "name": "Inari Sami",
        "searchKey": "inari sami smn"
    },
    {
        "code": "ins",
        "name": "Indian Sign Language",
        "searchKey": "indian sign language ins"
    },
    {
        "code": "ind",
        "name": "Indonesian",
        "searchKey": "indonesian ind"
    },
    {
        "code": "bdl",
        "name": "Indonesian Bajau",
        "searchKey": "indonesian bajau bdl"
    },
    {
        "code": "inl",
        "name": "Indonesian Sign Language",
        "searchKey": "indonesian sign language inl"
    },
    {
        "code": "idb",
        "name": "Indo-Portuguese",
        "searchKey": "indo-portuguese idb"
    },
    {
        "code": "idr",
        "name": "Indri",
        "searchKey": "indri idr"
    },
    {
        "code": "mvy",
        "name": "Indus Kohistani",
        "searchKey": "indus kohistani mvy"
    },
    {
        "code": "xiv",
        "name": "Indus Valley Language",
        "searchKey": "indus valley language xiv"
    },
    {
        "code": "oin",
        "name": "Inebu One",
        "searchKey": "inebu one oin"
    },
    {
        "code": "inz",
        "name": "Ineseño",
        "searchKey": "ineseno inz"
    },
    {
        "code": "inb",
        "name": "Inga",
        "searchKey": "inga inb"
    },
    {
        "code": "izh",
        "name": "Ingrian",
        "searchKey": "ingrian izh"
    },
    {
        "code": "inh",
        "name": "Ingush",
        "searchKey": "ingush inh"
    },
    {
        "code": "iti",
        "name": "Inlaod Itneg",
        "searchKey": "inlaod itneg iti"
    },
    {
        "code": "moe",
        "name": "Innu",
        "searchKey": "innu moe"
    },
    {
        "code": "ino",
        "name": "Inoke-Yate",
        "searchKey": "inoke-yate ino"
    },
    {
        "code": "loc",
        "name": "Inonhan",
        "searchKey": "inonhan loc"
    },
    {
        "code": "ior",
        "name": "Inor",
        "searchKey": "inor ior"
    },
    {
        "code": "nkf",
        "name": "Inpui Naga",
        "searchKey": "inpui naga nkf"
    },
    {
        "code": "igs",
        "name": "Interglossa",
        "searchKey": "interglossa igs"
    },
    {
        "code": "ina",
        "name": "Interlingua (IALA)",
        "searchNames": [
            "Interlingua"
        ],
        "searchKey": "interlingua iala ina interlingua"
    },
    {
        "code": "ile",
        "name": "Interlingue",
        "searchKey": "interlingue ile"
    },
    {
        "code": "ils",
        "name": "International Sign",
        "searchKey": "international sign ils"
    },
    {
        "code": "isv",
        "name": "Interslavic",
        "searchKey": "interslavic isv"
    },
    {
        "code": "int",
        "name": "Intha",
        "searchKey": "intha int"
    },
    {
        "code": "ikt",
        "name": "Inuinnaqtun",
        "searchKey": "inuinnaqtun ikt"
    },
    {
        "code": "iks",
        "name": "Inuit Sign Language",
        "searchKey": "inuit sign language iks"
    },
    {
        "code": "iku",
        "name": "Inuktitut",
        "searchKey": "inuktitut iku"
    },
    {
        "code": "ipk",
        "name": "Inupiaq",
        "searchKey": "inupiaq ipk"
    },
    {
        "code": "iow",
        "name": "Iowa-Oto",
        "searchKey": "iowa-oto iow"
    },
    {
        "code": "azm",
        "name": "Ipalapa Amuzgo",
        "searchKey": "ipalapa amuzgo azm"
    },
    {
        "code": "ipo",
        "name": "Ipiko",
        "searchKey": "ipiko ipo"
    },
    {
        "code": "ipi",
        "name": "Ipili",
        "searchKey": "ipili ipi"
    },
    {
        "code": "ass",
        "name": "Ipulo",
        "searchKey": "ipulo ass"
    },
    {
        "code": "iqu",
        "name": "Iquito",
        "searchKey": "iquito iqu"
    },
    {
        "code": "irr",
        "name": "Ir",
        "searchKey": "ir irr"
    },
    {
        "code": "pes",
        "name": "Iranian Persian",
        "searchKey": "iranian persian pes"
    },
    {
        "code": "psc",
        "name": "Iranian Sign Language",
        "searchKey": "iranian sign language psc"
    },
    {
        "code": "irn",
        "name": "Irántxe",
        "searchKey": "irantxe irn"
    },
    {
        "code": "ilm",
        "name": "Iranun (Malaysia)",
        "searchNames": [
            "Iranun"
        ],
        "searchKey": "iranun malaysia ilm iranun"
    },
    {
        "code": "ilp",
        "name": "Iranun (Philippines)",
        "searchNames": [
            "Iranun"
        ],
        "searchKey": "iranun philippines ilp iranun"
    },
    {
        "code": "irk",
        "name": "Iraqw",
        "searchKey": "iraqw irk"
    },
    {
        "code": "irh",
        "name": "Irarutu",
        "searchKey": "irarutu irh"
    },
    {
        "code": "iry",
        "name": "Iraya",
        "searchKey": "iraya iry"
    },
    {
        "code": "ire",
        "name": "Iresim",
        "searchKey": "iresim ire"
    },
    {
        "code": "gle",
        "name": "Irish",
        "searchKey": "irish gle"
    },
    {
        "code": "isg",
        "name": "Irish Sign Language",
        "searchKey": "irish sign language isg"
    },
    {
        "code": "oss",
        "name": "Iron Ossetic",
        "searchKey": "iron ossetic oss"
    },
    {
        "code": "iru",
        "name": "Irula",
        "searchKey": "irula iru"
    },
    {
        "code": "isa",
        "name": "Isabi",
        "searchKey": "isabi isa"
    },
    {
        "code": "isn",
        "name": "Isanzu",
        "searchKey": "isanzu isn"
    },
    {
        "code": "agk",
        "name": "Isarog Agta",
        "searchKey": "isarog agta agk"
    },
    {
        "code": "isc",
        "name": "Isconahua",
        "searchKey": "isconahua isc"
    },
    {
        "code": "igo",
        "name": "Isebe",
        "searchKey": "isebe igo"
    },
    {
        "code": "its",
        "name": "Isekiri",
        "searchKey": "isekiri its"
    },
    {
        "code": "isk",
        "name": "Ishkashimi",
        "searchKey": "ishkashimi isk"
    },
    {
        "code": "inn",
        "name": "Isinai",
        "searchKey": "isinai inn"
    },
    {
        "code": "srl",
        "name": "Isirawa",
        "searchKey": "isirawa srl"
    },
    {
        "code": "crb",
        "name": "Island Carib",
        "searchKey": "island carib crb"
    },
    {
        "code": "icr",
        "name": "Islander Creole English",
        "searchKey": "islander creole english icr"
    },
    {
        "code": "isd",
        "name": "Isnag",
        "searchKey": "isnag isd"
    },
    {
        "code": "iso",
        "name": "Isoko",
        "searchKey": "isoko iso"
    },
    {
        "code": "isr",
        "name": "Israeli Sign Language",
        "searchKey": "israeli sign language isr"
    },
    {
        "code": "mir",
        "name": "Isthmus Mixe",
        "searchKey": "isthmus mixe mir"
    },
    {
        "code": "zai",
        "name": "Isthmus Zapotec",
        "searchKey": "isthmus zapotec zai"
    },
    {
        "code": "nhk",
        "name": "Isthmus-Cosoleacaque Nahuatl",
        "searchKey": "isthmus-cosoleacaque nahuatl nhk"
    },
    {
        "code": "nhx",
        "name": "Isthmus-Mecayapan Nahuatl",
        "searchKey": "isthmus-mecayapan nahuatl nhx"
    },
    {
        "code": "nhp",
        "name": "Isthmus-Pajapan Nahuatl",
        "searchKey": "isthmus-pajapan nahuatl nhp"
    },
    {
        "code": "ist",
        "name": "Istriot",
        "searchKey": "istriot ist"
    },
    {
        "code": "ruo",
        "name": "Istro Romanian",
        "searchKey": "istro romanian ruo"
    },
    {
        "code": "isu",
        "name": "Isu",
        "searchKey": "isu"
    },
    {
        "code": "szv",
        "name": "Isubu",
        "searchKey": "isubu szv"
    },
    {
        "code": "ita",
        "name": "Italian",
        "searchKey": "italian ita"
    },
    {
        "code": "ise",
        "name": "Italian Sign Language",
        "searchKey": "italian sign language ise"
    },
    {
        "code": "itv",
        "name": "Itawit",
        "searchKey": "itawit itv"
    },
    {
        "code": "itl",
        "name": "Itelmen",
        "searchKey": "itelmen itl"
    },
    {
        "code": "ite",
        "name": "Itene",
        "searchKey": "itene ite"
    },
    {
        "code": "itr",
        "name": "Iteri",
        "searchKey": "iteri itr"
    },
    {
        "code": "itx",
        "name": "Itik",
        "searchKey": "itik itx"
    },
    {
        "code": "itw",
        "name": "Ito",
        "searchKey": "ito itw"
    },
    {
        "code": "ito",
        "name": "Itonama",
        "searchKey": "itonama ito"
    },
    {
        "code": "itm",
        "name": "Itu Mbon Uzo",
        "searchKey": "itu mbon uzo itm"
    },
    {
        "code": "mce",
        "name": "Itundujia Mixtec",
        "searchKey": "itundujia mixtec mce"
    },
    {
        "code": "itz",
        "name": "Itzá",
        "searchKey": "itza itz"
    },
    {
        "code": "ium",
        "name": "Iu Mien",
        "searchKey": "iu mien ium"
    },
    {
        "code": "ivv",
        "name": "Ivatan",
        "searchKey": "ivatan ivv"
    },
    {
        "code": "atg",
        "name": "Ivbie North-Okpela-Arhe",
        "searchKey": "ivbie north-okpela-arhe atg"
    },
    {
        "code": "ibd",
        "name": "Iwaidja",
        "searchKey": "iwaidja ibd"
    },
    {
        "code": "iwk",
        "name": "I-Wak",
        "searchKey": "i-wak iwk"
    },
    {
        "code": "kbm",
        "name": "Iwal",
        "searchKey": "iwal kbm"
    },
    {
        "code": "iwm",
        "name": "Iwam",
        "searchKey": "iwam iwm"
    },
    {
        "code": "iwo",
        "name": "Iwur",
        "searchKey": "iwur iwo"
    },
    {
        "code": "ixc",
        "name": "Ixcatec",
        "searchKey": "ixcatec ixc"
    },
    {
        "code": "mzi",
        "name": "Ixcatlán Mazatec",
        "searchKey": "ixcatlan mazatec mzi"
    },
    {
        "code": "ixl",
        "name": "Ixil",
        "searchKey": "ixil ixl"
    },
    {
        "code": "vmj",
        "name": "Ixtayutla Mixtec",
        "searchKey": "ixtayutla mixtec vmj"
    },
    {
        "code": "otz",
        "name": "Ixtenco Otomi",
        "searchKey": "ixtenco otomi otz"
    },
    {
        "code": "yko",
        "name": "Iyasa",
        "searchKey": "iyasa yko"
    },
    {
        "code": "iya",
        "name": "Iyayu",
        "searchKey": "iyayu iya"
    },
    {
        "code": "uiv",
        "name": "Iyive",
        "searchKey": "iyive uiv"
    },
    {
        "code": "nca",
        "name": "Iyo",
        "searchKey": "iyo nca"
    },
    {
        "code": "crt",
        "name": "Iyojwa'ja Chorote",
        "searchKey": "iyojwaja chorote crt"
    },
    {
        "code": "crq",
        "name": "Iyo'wujwa Chorote",
        "searchKey": "iyowujwa chorote crq"
    },
    {
        "code": "izr",
        "name": "Izere",
        "searchKey": "izere izr"
    },
    {
        "code": "izz",
        "name": "Izii",
        "searchKey": "izii izz"
    },
    {
        "code": "ijc",
        "name": "Izon",
        "searchKey": "izon ijc"
    },
    {
        "code": "cbo",
        "name": "Izora",
        "searchKey": "izora cbo"
    },
    {
        "code": "jbt",
        "name": "Jabutí",
        "searchKey": "jabuti jbt"
    },
    {
        "code": "jda",
        "name": "Jad",
        "searchKey": "jad jda"
    },
    {
        "code": "jdg",
        "name": "Jadgali",
        "searchKey": "jadgali jdg"
    },
    {
        "code": "jah",
        "name": "Jah Hut",
        "searchKey": "jah hut jah"
    },
    {
        "code": "jad",
        "name": "Jahanka",
        "searchKey": "jahanka jad"
    },
    {
        "code": "awv",
        "name": "Jair Awyu",
        "searchKey": "jair awyu awv"
    },
    {
        "code": "xjt",
        "name": "Jaitmatang",
        "searchKey": "jaitmatang xjt"
    },
    {
        "code": "jat",
        "name": "Jakati",
        "searchKey": "jakati jat"
    },
    {
        "code": "jrt",
        "name": "Jakattoe",
        "searchKey": "jakattoe jrt"
    },
    {
        "code": "jak",
        "name": "Jakun",
        "searchKey": "jakun jak"
    },
    {
        "code": "maj",
        "name": "Jalapa De Díaz Mazatec",
        "searchKey": "jalapa de diaz mazatec maj"
    },
    {
        "code": "bxl",
        "name": "Jalkunan",
        "searchKey": "jalkunan bxl"
    },
    {
        "code": "jcs",
        "name": "Jamaican Country Sign Language",
        "searchKey": "jamaican country sign language jcs"
    },
    {
        "code": "jam",
        "name": "Jamaican Creole English",
        "searchKey": "jamaican creole english jam"
    },
    {
        "code": "jls",
        "name": "Jamaican Sign Language",
        "searchKey": "jamaican sign language jls"
    },
    {
        "code": "jaa",
        "name": "Jamamadí",
        "searchKey": "jamamadi jaa"
    },
    {
        "code": "jax",
        "name": "Jambi Malay",
        "searchKey": "jambi malay jax"
    },
    {
        "code": "mxt",
        "name": "Jamiltepec Mixtec",
        "searchKey": "jamiltepec mixtec mxt"
    },
    {
        "code": "djm",
        "name": "Jamsay Dogon",
        "searchKey": "jamsay dogon djm"
    },
    {
        "code": "jan",
        "name": "Jandai",
        "searchKey": "jandai jan"
    },
    {
        "code": "jnd",
        "name": "Jandavra",
        "searchKey": "jandavra jnd"
    },
    {
        "code": "djo",
        "name": "Jangkang",
        "searchKey": "jangkang djo"
    },
    {
        "code": "jna",
        "name": "Jangshung",
        "searchKey": "jangshung jna"
    },
    {
        "code": "jni",
        "name": "Janji",
        "searchKey": "janji jni"
    },
    {
        "code": "jpn",
        "name": "Japanese",
        "searchKey": "japanese jpn"
    },
    {
        "code": "jsl",
        "name": "Japanese Sign Language",
        "searchKey": "japanese sign language jsl"
    },
    {
        "code": "jru",
        "name": "Japrería",
        "searchKey": "japreria jru"
    },
    {
        "code": "jqr",
        "name": "Jaqaru",
        "searchKey": "jaqaru jqr"
    },
    {
        "code": "jaf",
        "name": "Jara",
        "searchKey": "jara jaf"
    },
    {
        "code": "jra",
        "name": "Jarai",
        "searchKey": "jarai jra"
    },
    {
        "code": "anq",
        "name": "Jarawa (India)",
        "searchNames": [
            "Jarawa"
        ],
        "searchKey": "jarawa india anq jarawa"
    },
    {
        "code": "ddj",
        "name": "Jaru",
        "searchKey": "jaru ddj"
    },
    {
        "code": "qxw",
        "name": "Jauja Wanca Quechua",
        "searchKey": "jauja wanca quechua qxw"
    },
    {
        "code": "jns",
        "name": "Jaunsari",
        "searchKey": "jaunsari jns"
    },
    {
        "code": "jav",
        "name": "Javanese",
        "searchKey": "javanese jav"
    },
    {
        "code": "jvd",
        "name": "Javindo",
        "searchKey": "javindo jvd"
    },
    {
        "code": "jaz",
        "name": "Jawe",
        "searchKey": "jawe jaz"
    },
    {
        "code": "djn",
        "name": "Jawoyn",
        "searchKey": "jawoyn djn"
    },
    {
        "code": "jyy",
        "name": "Jaya",
        "searchKey": "jaya jyy"
    },
    {
        "code": "jeb",
        "name": "Jebero",
        "searchKey": "jebero jeb"
    },
    {
        "code": "jeh",
        "name": "Jeh",
        "searchKey": "jeh"
    },
    {
        "code": "jhi",
        "name": "Jehai",
        "searchKey": "jehai jhi"
    },
    {
        "code": "pzn",
        "name": "Jejara Naga",
        "searchKey": "jejara naga pzn"
    },
    {
        "code": "jje",
        "name": "Jejueo",
        "searchKey": "jejueo jje"
    },
    {
        "code": "tow",
        "name": "Jemez",
        "searchKey": "jemez tow"
    },
    {
        "code": "bze",
        "name": "Jenaama Bozo",
        "searchKey": "jenaama bozo bze"
    },
    {
        "code": "xuj",
        "name": "Jennu Kurumba",
        "searchKey": "jennu kurumba xuj"
    },
    {
        "code": "jer",
        "name": "Jere",
        "searchKey": "jere jer"
    },
    {
        "code": "jek",
        "name": "Jeri Kuo",
        "searchKey": "jeri kuo jek"
    },
    {
        "code": "nrf",
        "name": "Jèrriais",
        "searchKey": "jerriais nrf"
    },
    {
        "code": "jee",
        "name": "Jerung",
        "searchKey": "jerung jee"
    },
    {
        "code": "tmr",
        "name": "Jewish Babylonian Aramaic (ca. 200-1200 CE)",
        "searchNames": [
            "Jewish Babylonian Aramaic"
        ],
        "searchKey": "jewish babylonian aramaic ca 200-1200 ce tmr jewish babylonian aramaic"
    },
    {
        "code": "jpa",
        "name": "Jewish Palestinian Aramaic",
        "searchKey": "jewish palestinian aramaic jpa"
    },
    {
        "code": "jhs",
        "name": "Jhankot Sign Language",
        "searchKey": "jhankot sign language jhs"
    },
    {
        "code": "jio",
        "name": "Jiamao",
        "searchKey": "jiamao jio"
    },
    {
        "code": "jya",
        "name": "Jiarong",
        "searchKey": "jiarong jya"
    },
    {
        "code": "juo",
        "name": "Jiba",
        "searchKey": "jiba juo"
    },
    {
        "code": "jib",
        "name": "Jibu",
        "searchKey": "jibu jib"
    },
    {
        "code": "apj",
        "name": "Jicarilla Apache",
        "searchKey": "jicarilla apache apj"
    },
    {
        "code": "jii",
        "name": "Jiiddu",
        "searchKey": "jiiddu jii"
    },
    {
        "code": "jie",
        "name": "Jilbe",
        "searchKey": "jilbe jie"
    },
    {
        "code": "jil",
        "name": "Jilim",
        "searchKey": "jilim jil"
    },
    {
        "code": "jim",
        "name": "Jimi (Cameroon)",
        "searchNames": [
            "Jimi"
        ],
        "searchKey": "jimi cameroon jim jimi"
    },
    {
        "code": "jmi",
        "name": "Jimi (Nigeria)",
        "searchNames": [
            "Jimi"
        ],
        "searchKey": "jimi nigeria jmi jimi"
    },
    {
        "code": "jia",
        "name": "Jina",
        "searchKey": "jina jia"
    },
    {
        "code": "jig",
        "name": "Jingulu",
        "searchKey": "jingulu jig"
    },
    {
        "code": "cjy",
        "name": "Jinyu Chinese",
        "searchKey": "jinyu chinese cjy"
    },
    {
        "code": "pnu",
        "name": "Jiongnai Bunu",
        "searchKey": "jiongnai bunu pnu"
    },
    {
        "code": "jul",
        "name": "Jirel",
        "searchKey": "jirel jul"
    },
    {
        "code": "jrr",
        "name": "Jiru",
        "searchKey": "jiru jrr"
    },
    {
        "code": "jit",
        "name": "Jita",
        "searchKey": "jita jit"
    },
    {
        "code": "kaj",
        "name": "Jju",
        "searchKey": "jju kaj"
    },
    {
        "code": "job",
        "name": "Joba",
        "searchKey": "joba job"
    },
    {
        "code": "jbr",
        "name": "Jofotek-Bromnya",
        "searchKey": "jofotek-bromnya jbr"
    },
    {
        "code": "jog",
        "name": "Jogi",
        "searchKey": "jogi jog"
    },
    {
        "code": "dyo",
        "name": "Jola-Fonyi",
        "searchKey": "jola-fonyi dyo"
    },
    {
        "code": "csk",
        "name": "Jola-Kasa",
        "searchKey": "jola-kasa csk"
    },
    {
        "code": "jeu",
        "name": "Jonkor Bourmataguil",
        "searchKey": "jonkor bourmataguil jeu"
    },
    {
        "code": "jor",
        "name": "Jorá",
        "searchKey": "jora jor"
    },
    {
        "code": "jos",
        "name": "Jordanian Sign Language",
        "searchKey": "jordanian sign language jos"
    },
    {
        "code": "jow",
        "name": "Jowulu",
        "searchKey": "jowulu jow"
    },
    {
        "code": "juu",
        "name": "Ju",
        "searchKey": "ju juu"
    },
    {
        "code": "ktz",
        "name": "Juǀʼhoan",
        "searchKey": "juǀʼhoan ktz"
    },
    {
        "code": "jun",
        "name": "Juang",
        "searchKey": "juang jun"
    },
    {
        "code": "jrb",
        "name": "Judeo-Arabic",
        "searchKey": "judeo-arabic jrb"
    },
    {
        "code": "jbe",
        "name": "Judeo-Berber",
        "searchKey": "judeo-berber jbe"
    },
    {
        "code": "jge",
        "name": "Judeo-Georgian",
        "searchKey": "judeo-georgian jge"
    },
    {
        "code": "yhd",
        "name": "Judeo-Iraqi Arabic",
        "searchKey": "judeo-iraqi arabic yhd"
    },
    {
        "code": "itk",
        "name": "Judeo-Italian",
        "searchKey": "judeo-italian itk"
    },
    {
        "code": "aju",
        "name": "Judeo-Moroccan Arabic",
        "searchKey": "judeo-moroccan arabic aju"
    },
    {
        "code": "jpr",
        "name": "Judeo-Persian",
        "searchKey": "judeo-persian jpr"
    },
    {
        "code": "jdt",
        "name": "Judeo-Tat",
        "searchKey": "judeo-tat jdt"
    },
    {
        "code": "yud",
        "name": "Judeo-Tripolitanian Arabic",
        "searchKey": "judeo-tripolitanian arabic yud"
    },
    {
        "code": "jye",
        "name": "Judeo-Yemeni Arabic",
        "searchKey": "judeo-yemeni arabic jye"
    },
    {
        "code": "jbu",
        "name": "Jukun Takum",
        "searchKey": "jukun takum jbu"
    },
    {
        "code": "jua",
        "name": "Júma",
        "searchKey": "juma jua"
    },
    {
        "code": "jum",
        "name": "Jumjum",
        "searchKey": "jumjum jum"
    },
    {
        "code": "jus",
        "name": "Jumla Sign Language",
        "searchKey": "jumla sign language jus"
    },
    {
        "code": "jml",
        "name": "Jumli",
        "searchKey": "jumli jml"
    },
    {
        "code": "inj",
        "name": "Jungle Inga",
        "searchKey": "jungle inga inj"
    },
    {
        "code": "mxq",
        "name": "Juquila Mixe",
        "searchKey": "juquila mixe mxq"
    },
    {
        "code": "bex",
        "name": "Jur Modo",
        "searchKey": "jur modo bex"
    },
    {
        "code": "juy",
        "name": "Juray",
        "searchKey": "juray juy"
    },
    {
        "code": "juc",
        "name": "Jurchen",
        "searchKey": "jurchen juc"
    },
    {
        "code": "jur",
        "name": "Jurúna",
        "searchKey": "juruna jur"
    },
    {
        "code": "jut",
        "name": "Jutish",
        "searchKey": "jutish jut"
    },
    {
        "code": "mwb",
        "name": "Juwal",
        "searchKey": "juwal mwb"
    },
    {
        "code": "vmc",
        "name": "Juxtlahuaca Mixtec",
        "searchKey": "juxtlahuaca mixtec vmc"
    },
    {
        "code": "jwi",
        "name": "Jwira-Pepesa",
        "searchKey": "jwira-pepesa jwi"
    },
    {
        "code": "xku",
        "name": "Kaamba",
        "searchKey": "kaamba xku"
    },
    {
        "code": "ldl",
        "name": "Kaan",
        "searchKey": "kaan ldl"
    },
    {
        "code": "ckn",
        "name": "Kaang Chin",
        "searchKey": "kaang chin ckn"
    },
    {
        "code": "gna",
        "name": "Kaansa",
        "searchKey": "kaansa gna"
    },
    {
        "code": "ksp",
        "name": "Kaba",
        "searchKey": "kaba ksp"
    },
    {
        "code": "kvf",
        "name": "Kabalai",
        "searchKey": "kabalai kvf"
    },
    {
        "code": "kbd",
        "name": "Kabardian",
        "searchKey": "kabardian kbd"
    },
    {
        "code": "xkp",
        "name": "Kabatei",
        "searchKey": "kabatei xkp"
    },
    {
        "code": "kbp",
        "name": "Kabiyè",
        "searchKey": "kabiye kbp"
    },
    {
        "code": "klz",
        "name": "Kabola",
        "searchKey": "kabola klz"
    },
    {
        "code": "onk",
        "name": "Kabore One",
        "searchKey": "kabore one onk"
    },
    {
        "code": "lkb",
        "name": "Kabras",
        "searchKey": "kabras lkb"
    },
    {
        "code": "uka",
        "name": "Kaburi",
        "searchKey": "kaburi uka"
    },
    {
        "code": "kbu",
        "name": "Kabutra",
        "searchKey": "kabutra kbu"
    },
    {
        "code": "kea",
        "name": "Kabuverdianu",
        "searchKey": "kabuverdianu kea"
    },
    {
        "code": "cwa",
        "name": "Kabwa",
        "searchKey": "kabwa cwa"
    },
    {
        "code": "kcw",
        "name": "Kabwari",
        "searchKey": "kabwari kcw"
    },
    {
        "code": "kab",
        "name": "Kabyle",
        "searchKey": "kabyle kab"
    },
    {
        "code": "kcx",
        "name": "Kachama-Ganjule",
        "searchKey": "kachama-ganjule kcx"
    },
    {
        "code": "xac",
        "name": "Kachari",
        "searchKey": "kachari xac"
    },
    {
        "code": "kfr",
        "name": "Kachhi",
        "searchKey": "kachhi kfr"
    },
    {
        "code": "gjk",
        "name": "Kachi Koli",
        "searchKey": "kachi koli gjk"
    },
    {
        "code": "kac",
        "name": "Kachin",
        "searchKey": "kachin kac"
    },
    {
        "code": "xkk",
        "name": "Kachok",
        "searchKey": "kachok xkk"
    },
    {
        "code": "koe",
        "name": "Kacipo-Bale Suri",
        "searchKey": "kacipo-bale suri koe"
    },
    {
        "code": "kzd",
        "name": "Kadai",
        "searchKey": "kadai kzd"
    },
    {
        "code": "kej",
        "name": "Kadar",
        "searchKey": "kadar kej"
    },
    {
        "code": "kdu",
        "name": "Kadaru",
        "searchKey": "kadaru kdu"
    },
    {
        "code": "dtp",
        "name": "Kadazan Dusun",
        "searchKey": "kadazan dusun dtp"
    },
    {
        "code": "kbc",
        "name": "Kadiwéu",
        "searchKey": "kadiweu kbc"
    },
    {
        "code": "zkd",
        "name": "Kadu",
        "searchKey": "kadu zkd"
    },
    {
        "code": "dkg",
        "name": "Kadung",
        "searchKey": "kadung dkg"
    },
    {
        "code": "ktp",
        "name": "Kaduo",
        "searchKey": "kaduo ktp"
    },
    {
        "code": "kkq",
        "name": "Kaeku",
        "searchKey": "kaeku kkq"
    },
    {
        "code": "jka",
        "name": "Kaera",
        "searchKey": "kaera jka"
    },
    {
        "code": "kbr",
        "name": "Kafa",
        "searchKey": "kafa kbr"
    },
    {
        "code": "kpu",
        "name": "Kafoa",
        "searchKey": "kafoa kpu"
    },
    {
        "code": "kll",
        "name": "Kagan Kalagan",
        "searchKey": "kagan kalagan kll"
    },
    {
        "code": "syw",
        "name": "Kagate",
        "searchKey": "kagate syw"
    },
    {
        "code": "cgc",
        "name": "Kagayanen",
        "searchKey": "kagayanen cgc"
    },
    {
        "code": "kdm",
        "name": "Kagoma",
        "searchKey": "kagoma kdm"
    },
    {
        "code": "xkg",
        "name": "Kagoro",
        "searchKey": "kagoro xkg"
    },
    {
        "code": "kki",
        "name": "Kagulu",
        "searchKey": "kagulu kki"
    },
    {
        "code": "hka",
        "name": "Kahe",
        "searchKey": "kahe hka"
    },
    {
        "code": "agw",
        "name": "Kahua",
        "searchKey": "kahua agw"
    },
    {
        "code": "kct",
        "name": "Kaian",
        "searchKey": "kaian kct"
    },
    {
        "code": "kzb",
        "name": "Kaibobo",
        "searchKey": "kaibobo kzb"
    },
    {
        "code": "kzp",
        "name": "Kaidipang",
        "searchKey": "kaidipang kzp"
    },
    {
        "code": "kbw",
        "name": "Kaiep",
        "searchKey": "kaiep kbw"
    },
    {
        "code": "kep",
        "name": "Kaikadi",
        "searchKey": "kaikadi kep"
    },
    {
        "code": "kjv",
        "name": "Kaikavian Literary Language",
        "searchKey": "kaikavian literary language kjv"
    },
    {
        "code": "kzq",
        "name": "Kaike",
        "searchKey": "kaike kzq"
    },
    {
        "code": "xai",
        "name": "Kaimbé",
        "searchKey": "kaimbe xai"
    },
    {
        "code": "zka",
        "name": "Kaimbulawa",
        "searchKey": "kaimbulawa zka"
    },
    {
        "code": "kgp",
        "name": "Kaingang",
        "searchKey": "kaingang kgp"
    },
    {
        "code": "ckr",
        "name": "Kairak",
        "searchKey": "kairak ckr"
    },
    {
        "code": "kxa",
        "name": "Kairiru",
        "searchKey": "kairiru kxa"
    },
    {
        "code": "krd",
        "name": "Kairui-Midiki",
        "searchKey": "kairui-midiki krd"
    },
    {
        "code": "kzm",
        "name": "Kais",
        "searchKey": "kais kzm"
    },
    {
        "code": "xdq",
        "name": "Kaitag",
        "searchKey": "kaitag xdq"
    },
    {
        "code": "kce",
        "name": "Kaivi",
        "searchKey": "kaivi kce"
    },
    {
        "code": "kgk",
        "name": "Kaiwá",
        "searchKey": "kaiwa kgk"
    },
    {
        "code": "tcq",
        "name": "Kaiy",
        "searchKey": "kaiy tcq"
    },
    {
        "code": "ckq",
        "name": "Kajakse",
        "searchKey": "kajakse ckq"
    },
    {
        "code": "xkj",
        "name": "Kajali",
        "searchKey": "kajali xkj"
    },
    {
        "code": "kag",
        "name": "Kajaman",
        "searchKey": "kajaman kag"
    },
    {
        "code": "kqf",
        "name": "Kakabai",
        "searchKey": "kakabai kqf"
    },
    {
        "code": "kke",
        "name": "Kakabe",
        "searchKey": "kakabe kke"
    },
    {
        "code": "kka",
        "name": "Kakanda",
        "searchKey": "kakanda kka"
    },
    {
        "code": "tbd",
        "name": "Kaki Ae",
        "searchKey": "kaki ae tbd"
    },
    {
        "code": "kkj",
        "name": "Kako",
        "searchKey": "kako kkj"
    },
    {
        "code": "keo",
        "name": "Kakwa",
        "searchKey": "kakwa keo"
    },
    {
        "code": "mwp",
        "name": "Kala Lagaw Ya",
        "searchKey": "kala lagaw ya mwp"
    },
    {
        "code": "kal",
        "name": "Kalaallisut",
        "displayName": "Kalaallisut",
        "alternateNames": [
            "Greenlandic"
        ],
        "countries": [
            "Greenland"
        ],
        "script": "Latin",
        "searchKey": "kalaallisut kal"
    },
    {
        "code": "lkm",
        "name": "Kalaamaya",
        "searchKey": "kalaamaya lkm"
    },
    {
        "code": "kve",
        "name": "Kalabakan",
        "searchKey": "kalabakan kve"
    },
    {
        "code": "ijn",
        "name": "Kalabari",
        "searchKey": "kalabari ijn"
    },
    {
        "code": "kzz",
        "name": "Kalabra",
        "searchKey": "kalabra kzz"
    },
    {
        "code": "kqe",
        "name": "Kalagan",
        "searchKey": "kalagan kqe"
    },
    {
        "code": "kkf",
        "name": "Kalaktang Monpa",
        "searchKey": "kalaktang monpa kkf"
    },
    {
        "code": "kmh",
        "name": "Kalam",
        "searchKey": "kalam kmh"
    },
    {
        "code": "knz",
        "name": "Kalamsé",
        "searchKey": "kalamse knz"
    },
    {
        "code": "wkl",
        "name": "Kalanadi",
        "searchKey": "kalanadi wkl"
    },
    {
        "code": "kck",
        "name": "Kalanga",
        "searchKey": "kalanga kck"
    },
    {
        "code": "kak",
        "name": "Kalanguya",
        "searchKey": "kalanguya kak"
    },
    {
        "code": "kly",
        "name": "Kalao",
        "searchKey": "kalao kly"
    },
    {
        "code": "kyl",
        "name": "Kalapuya",
        "searchKey": "kalapuya kyl"
    },
    {
        "code": "kba",
        "name": "Kalarko",
        "searchKey": "kalarko kba"
    },
    {
        "code": "kls",
        "name": "Kalasha",
        "searchKey": "kalasha kls"
    },
    {
        "code": "kln",
        "name": "Kalenjin",
        "searchKey": "kalenjin kln"
    },
    {
        "code": "fla",
        "name": "Kalispel-Pend d'Oreille",
        "searchKey": "kalispel-pend doreille fla"
    },
    {
        "code": "xka",
        "name": "Kalkoti",
        "searchKey": "kalkoti xka"
    },
    {
        "code": "ktg",
        "name": "Kalkutung",
        "searchKey": "kalkutung ktg"
    },
    {
        "code": "xal",
        "name": "Kalmyk",
        "searchKey": "kalmyk xal"
    },
    {
        "code": "rmf",
        "name": "Kalo Finnish Romani",
        "searchKey": "kalo finnish romani rmf"
    },
    {
        "code": "ywa",
        "name": "Kalou",
        "searchKey": "kalou ywa"
    },
    {
        "code": "bco",
        "name": "Kaluli",
        "searchKey": "kaluli bco"
    },
    {
        "code": "kli",
        "name": "Kalumpang",
        "searchKey": "kalumpang kli"
    },
    {
        "code": "kdx",
        "name": "Kam",
        "searchKey": "kam kdx"
    },
    {
        "code": "vkm",
        "name": "Kamakan",
        "searchKey": "kamakan vkm"
    },
    {
        "code": "woi",
        "name": "Kamang",
        "searchKey": "kamang woi"
    },
    {
        "code": "kbq",
        "name": "Kamano",
        "searchKey": "kamano kbq"
    },
    {
        "code": "keq",
        "name": "Kamar",
        "searchKey": "kamar keq"
    },
    {
        "code": "jmr",
        "name": "Kamara",
        "searchKey": "kamara jmr"
    },
    {
        "code": "kzx",
        "name": "Kamarian",
        "searchKey": "kamarian kzx"
    },
    {
        "code": "kgx",
        "name": "Kamaru",
        "searchKey": "kamaru kgx"
    },
    {
        "code": "xas",
        "name": "Kamas",
        "searchKey": "kamas xas"
    },
    {
        "code": "klp",
        "name": "Kamasa",
        "searchKey": "kamasa klp"
    },
    {
        "code": "kms",
        "name": "Kamasau",
        "searchKey": "kamasau kms"
    },
    {
        "code": "kyk",
        "name": "Kamayo",
        "searchKey": "kamayo kyk"
    },
    {
        "code": "kay",
        "name": "Kamayurá",
        "searchKey": "kamayura kay"
    },
    {
        "code": "kam",
        "name": "Kamba (Kenya)",
        "searchNames": [
            "Kamba"
        ],
        "searchKey": "kamba kenya kam kamba"
    },
    {
        "code": "ktb",
        "name": "Kambaata",
        "searchKey": "kambaata ktb"
    },
    {
        "code": "kyy",
        "name": "Kambaira",
        "searchKey": "kambaira kyy"
    },
    {
        "code": "xbr",
        "name": "Kambera",
        "searchKey": "kambera xbr"
    },
    {
        "code": "irx",
        "name": "Kamberau",
        "searchKey": "kamberau irx"
    },
    {
        "code": "xbw",
        "name": "Kambiwá",
        "searchKey": "kambiwa xbw"
    },
    {
        "code": "kmi",
        "name": "Kami (Nigeria)",
        "searchNames": [
            "Kami"
        ],
        "searchKey": "kami nigeria kmi kami"
    },
    {
        "code": "kcu",
        "name": "Kami (Tanzania)",
        "searchNames": [
            "Kami"
        ],
        "searchKey": "kami tanzania kcu kami"
    },
    {
        "code": "kcq",
        "name": "Kamo",
        "searchKey": "kamo kcq"
    },
    {
        "code": "kgq",
        "name": "Kamoro",
        "searchKey": "kamoro kgq"
    },
    {
        "code": "xmu",
        "name": "Kamu",
        "searchKey": "kamu xmu"
    },
    {
        "code": "xla",
        "name": "Kamula",
        "searchKey": "kamula xla"
    },
    {
        "code": "xvi",
        "name": "Kamviri",
        "searchKey": "kamviri xvi"
    },
    {
        "code": "hig",
        "name": "Kamwe",
        "searchKey": "kamwe hig"
    },
    {
        "code": "xnb",
        "name": "Kanakanabu",
        "searchKey": "kanakanabu xnb"
    },
    {
        "code": "knm",
        "name": "Kanamarí",
        "searchKey": "kanamari knm"
    },
    {
        "code": "zkn",
        "name": "Kanan",
        "searchKey": "kanan zkn"
    },
    {
        "code": "xns",
        "name": "Kanashi",
        "searchKey": "kanashi xns"
    },
    {
        "code": "soq",
        "name": "Kanasi",
        "searchKey": "kanasi soq"
    },
    {
        "code": "bjj",
        "name": "Kanauji",
        "searchKey": "kanauji bjj"
    },
    {
        "code": "kqw",
        "name": "Kandas",
        "searchKey": "kandas kqw"
    },
    {
        "code": "gam",
        "name": "Kandawo",
        "searchKey": "kandawo gam"
    },
    {
        "code": "kbs",
        "name": "Kande",
        "searchKey": "kande kbs"
    },
    {
        "code": "kbl",
        "name": "Kanembu",
        "searchKey": "kanembu kbl"
    },
    {
        "code": "kyp",
        "name": "Kang",
        "searchKey": "kang kyp"
    },
    {
        "code": "kcp",
        "name": "Kanga",
        "searchKey": "kanga kcp"
    },
    {
        "code": "kkv",
        "name": "Kangean",
        "searchKey": "kangean kkv"
    },
    {
        "code": "igm",
        "name": "Kanggape",
        "searchKey": "kanggape igm"
    },
    {
        "code": "kxs",
        "name": "Kangjia",
        "searchKey": "kangjia kxs"
    },
    {
        "code": "kty",
        "name": "Kango (Bas-Uélé District)",
        "searchNames": [
            "Kango"
        ],
        "searchKey": "kango bas-uele district kty kango"
    },
    {
        "code": "kzy",
        "name": "Kango (Tshopo District)",
        "searchNames": [
            "Kango"
        ],
        "searchKey": "kango tshopo district kzy kango"
    },
    {
        "code": "xnr",
        "name": "Kangri",
        "searchKey": "kangri xnr"
    },
    {
        "code": "ktk",
        "name": "Kaniet",
        "searchKey": "kaniet ktk"
    },
    {
        "code": "kev",
        "name": "Kanikkaran",
        "searchKey": "kanikkaran kev"
    },
    {
        "code": "kdp",
        "name": "Kaningdon-Nindem",
        "searchKey": "kaningdon-nindem kdp"
    },
    {
        "code": "kzo",
        "name": "Kaningi",
        "searchKey": "kaningi kzo"
    },
    {
        "code": "knr",
        "name": "Kaningra",
        "searchKey": "kaningra knr"
    },
    {
        "code": "wat",
        "name": "Kaninuwa",
        "searchKey": "kaninuwa wat"
    },
    {
        "code": "kmu",
        "name": "Kanite",
        "searchKey": "kanite kmu"
    },
    {
        "code": "kft",
        "name": "Kanjari",
        "searchKey": "kanjari kft"
    },
    {
        "code": "kbe",
        "name": "Kanju",
        "searchKey": "kanju kbe"
    },
    {
        "code": "kne",
        "name": "Kankanaey",
        "searchKey": "kankanaey kne"
    },
    {
        "code": "kan",
        "name": "Kannada",
        "searchKey": "kannada kan"
    },
    {
        "code": "kfi",
        "name": "Kannada Kurumba",
        "searchKey": "kannada kurumba kfi"
    },
    {
        "code": "kxo",
        "name": "Kanoé",
        "searchKey": "kanoe kxo"
    },
    {
        "code": "kxn",
        "name": "Kanowit-Tanjong Melanau",
        "searchKey": "kanowit-tanjong melanau kxn"
    },
    {
        "code": "ksk",
        "name": "Kansa",
        "searchKey": "kansa ksk"
    },
    {
        "code": "xkt",
        "name": "Kantosi",
        "searchKey": "kantosi xkt"
    },
    {
        "code": "khx",
        "name": "Kanu",
        "searchKey": "kanu khx"
    },
    {
        "code": "kni",
        "name": "Kanufi",
        "searchKey": "kanufi kni"
    },
    {
        "code": "kau",
        "name": "Kanuri",
        "searchKey": "kanuri kau"
    },
    {
        "code": "kny",
        "name": "Kanyok",
        "searchKey": "kanyok kny"
    },
    {
        "code": "kax",
        "name": "Kao",
        "searchKey": "kao kax"
    },
    {
        "code": "kqn",
        "name": "Kaonde",
        "searchKey": "kaonde kqn"
    },
    {
        "code": "ykm",
        "name": "Kap",
        "searchKey": "kap ykm"
    },
    {
        "code": "tbx",
        "name": "Kapin",
        "searchKey": "kapin tbx"
    },
    {
        "code": "xpn",
        "name": "Kapinawá",
        "searchKey": "kapinawa xpn"
    },
    {
        "code": "kpg",
        "name": "Kapingamarangi",
        "searchKey": "kapingamarangi kpg"
    },
    {
        "code": "khp",
        "name": "Kapori",
        "searchKey": "kapori khp"
    },
    {
        "code": "dju",
        "name": "Kapriman",
        "searchKey": "kapriman dju"
    },
    {
        "code": "kbi",
        "name": "Kaptiau",
        "searchKey": "kaptiau kbi"
    },
    {
        "code": "klo",
        "name": "Kapya",
        "searchKey": "kapya klo"
    },
    {
        "code": "cak",
        "name": "Kaqchikel",
        "searchKey": "kaqchikel cak"
    },
    {
        "code": "kah",
        "name": "Kara (Central African Republic)",
        "searchNames": [
            "Kara"
        ],
        "searchKey": "kara central african republic kah kara"
    },
    {
        "code": "zra",
        "name": "Kara (Korea)",
        "searchNames": [
            "Kara"
        ],
        "searchKey": "kara korea zra kara"
    },
    {
        "code": "leu",
        "name": "Kara (Papua New Guinea)",
        "searchNames": [
            "Kara"
        ],
        "searchKey": "kara papua new guinea leu kara"
    },
    {
        "code": "reg",
        "name": "Kara (Tanzania)",
        "searchNames": [
            "Kara"
        ],
        "searchKey": "kara tanzania reg kara"
    },
    {
        "code": "krc",
        "name": "Karachay-Balkar",
        "searchKey": "karachay-balkar krc"
    },
    {
        "code": "kim",
        "name": "Karagas",
        "searchKey": "karagas kim"
    },
    {
        "code": "kdr",
        "name": "Karaim",
        "searchKey": "karaim kdr"
    },
    {
        "code": "kpj",
        "name": "Karajá",
        "searchKey": "karaja kpj"
    },
    {
        "code": "gbd",
        "name": "Karajarri",
        "searchKey": "karajarri gbd"
    },
    {
        "code": "kaa",
        "name": "Kara-Kalpak",
        "searchKey": "kara-kalpak kaa"
    },
    {
        "code": "xqa",
        "name": "Karakhanid",
        "searchKey": "karakhanid xqa"
    },
    {
        "code": "xar",
        "name": "Karami",
        "searchKey": "karami xar"
    },
    {
        "code": "kdj",
        "name": "Karamojong",
        "searchKey": "karamojong kdj"
    },
    {
        "code": "kzr",
        "name": "Karang",
        "searchKey": "karang kzr"
    },
    {
        "code": "kth",
        "name": "Karanga",
        "searchKey": "karanga kth"
    },
    {
        "code": "zkk",
        "name": "Karankawa",
        "searchKey": "karankawa zkk"
    },
    {
        "code": "kyj",
        "name": "Karao",
        "searchKey": "karao kyj"
    },
    {
        "code": "kgv",
        "name": "Karas",
        "searchKey": "karas kgv"
    },
    {
        "code": "kpt",
        "name": "Karata",
        "searchKey": "karata kpt"
    },
    {
        "code": "xrw",
        "name": "Karawa",
        "searchKey": "karawa xrw"
    },
    {
        "code": "mjw",
        "name": "Karbi",
        "searchKey": "karbi mjw"
    },
    {
        "code": "kbn",
        "name": "Kare (Central African Republic)",
        "searchNames": [
            "Kare"
        ],
        "searchKey": "kare central african republic kbn kare"
    },
    {
        "code": "kmf",
        "name": "Kare (Papua New Guinea)",
        "searchNames": [
            "Kare"
        ],
        "searchKey": "kare papua new guinea kmf kare"
    },
    {
        "code": "kai",
        "name": "Karekare",
        "searchKey": "karekare kai"
    },
    {
        "code": "krl",
        "name": "Karelian",
        "searchKey": "karelian krl"
    },
    {
        "code": "eaa",
        "name": "Karenggapa",
        "searchKey": "karenggapa eaa"
    },
    {
        "code": "kyd",
        "name": "Karey",
        "searchKey": "karey kyd"
    },
    {
        "code": "kbj",
        "name": "Kari",
        "searchKey": "kari kbj"
    },
    {
        "code": "bql",
        "name": "Karian",
        "searchKey": "karian bql"
    },
    {
        "code": "kgn",
        "name": "Karingani",
        "searchKey": "karingani kgn"
    },
    {
        "code": "kuq",
        "name": "Karipuna",
        "searchKey": "karipuna kuq"
    },
    {
        "code": "kmv",
        "name": "Karipúna Creole French",
        "searchKey": "karipuna creole french kmv"
    },
    {
        "code": "kzw",
        "name": "Karirí-Xocó",
        "searchKey": "kariri-xoco kzw"
    },
    {
        "code": "ktn",
        "name": "Karitiâna",
        "searchKey": "karitiana ktn"
    },
    {
        "code": "kil",
        "name": "Kariya",
        "searchKey": "kariya kil"
    },
    {
        "code": "vka",
        "name": "Kariyarra",
        "searchKey": "kariyarra vka"
    },
    {
        "code": "yuj",
        "name": "Karkar-Yuri",
        "searchKey": "karkar-yuri yuj"
    },
    {
        "code": "krb",
        "name": "Karkin",
        "searchKey": "karkin krb"
    },
    {
        "code": "kko",
        "name": "Karko",
        "searchKey": "karko kko"
    },
    {
        "code": "bbv",
        "name": "Karnai",
        "searchKey": "karnai bbv"
    },
    {
        "code": "arr",
        "name": "Karo (Brazil)",
        "searchNames": [
            "Karo"
        ],
        "searchKey": "karo brazil arr karo"
    },
    {
        "code": "kxh",
        "name": "Karo (Ethiopia)",
        "searchNames": [
            "Karo"
        ],
        "searchKey": "karo ethiopia kxh karo"
    },
    {
        "code": "kyh",
        "name": "Karok",
        "searchKey": "karok kyh"
    },
    {
        "code": "krx",
        "name": "Karon",
        "searchKey": "karon krx"
    },
    {
        "code": "kgw",
        "name": "Karon Dori",
        "searchKey": "karon dori kgw"
    },
    {
        "code": "xkx",
        "name": "Karore",
        "searchKey": "karore xkx"
    },
    {
        "code": "rxw",
        "name": "Karuwali",
        "searchKey": "karuwali rxw"
    },
    {
        "code": "ccj",
        "name": "Kasanga",
        "searchKey": "kasanga ccj"
    },
    {
        "code": "xsm",
        "name": "Kasem",
        "searchKey": "kasem xsm"
    },
    {
        "code": "kju",
        "name": "Kashaya",
        "searchKey": "kashaya kju"
    },
    {
        "code": "kas",
        "name": "Kashmiri",
        "searchKey": "kashmiri kas"
    },
    {
        "code": "csb",
        "name": "Kashubian",
        "searchKey": "kashubian csb"
    },
    {
        "code": "ksn",
        "name": "Kasiguranin",
        "searchKey": "kasiguranin ksn"
    },
    {
        "code": "kkz",
        "name": "Kaska",
        "searchKey": "kaska kkz"
    },
    {
        "code": "zsk",
        "name": "Kaskean",
        "searchKey": "kaskean zsk"
    },
    {
        "code": "khs",
        "name": "Kasua",
        "searchKey": "kasua khs"
    },
    {
        "code": "ktq",
        "name": "Katabaga",
        "searchKey": "katabaga ktq"
    },
    {
        "code": "xat",
        "name": "Katawixi",
        "searchKey": "katawixi xat"
    },
    {
        "code": "tmb",
        "name": "Katbol",
        "searchKey": "katbol tmb"
    },
    {
        "code": "xtc",
        "name": "Katcha-Kadugli-Miri",
        "searchKey": "katcha-kadugli-miri xtc"
    },
    {
        "code": "kmg",
        "name": "Kâte",
        "searchKey": "kate kmg"
    },
    {
        "code": "tkt",
        "name": "Kathoriya Tharu",
        "searchKey": "kathoriya tharu tkt"
    },
    {
        "code": "ykt",
        "name": "Kathu",
        "searchKey": "kathu ykt"
    },
    {
        "code": "bsh",
        "name": "Kati",
        "searchKey": "kati bsh"
    },
    {
        "code": "kfu",
        "name": "Katkari",
        "searchKey": "katkari kfu"
    },
    {
        "code": "kcr",
        "name": "Katla",
        "searchKey": "katla kcr"
    },
    {
        "code": "ktw",
        "name": "Kato",
        "searchKey": "kato ktw"
    },
    {
        "code": "kaf",
        "name": "Katso",
        "searchKey": "katso kaf"
    },
    {
        "code": "kta",
        "name": "Katua",
        "searchKey": "katua kta"
    },
    {
        "code": "kav",
        "name": "Katukína",
        "searchKey": "katukina kav"
    },
    {
        "code": "pss",
        "name": "Kaulong",
        "searchKey": "kaulong pss"
    },
    {
        "code": "vkk",
        "name": "Kaur",
        "searchKey": "kaur vkk"
    },
    {
        "code": "bpp",
        "name": "Kaure",
        "searchKey": "kaure bpp"
    },
    {
        "code": "zku",
        "name": "Kaurna",
        "searchKey": "kaurna zku"
    },
    {
        "code": "xau",
        "name": "Kauwera",
        "searchKey": "kauwera xau"
    },
    {
        "code": "ckv",
        "name": "Kavalan",
        "searchKey": "kavalan ckv"
    },
    {
        "code": "krv",
        "name": "Kavet",
        "searchKey": "kavet krv"
    },
    {
        "code": "kcb",
        "name": "Kawacha",
        "searchKey": "kawacha kcb"
    },
    {
        "code": "xaw",
        "name": "Kawaiisu",
        "searchKey": "kawaiisu xaw"
    },
    {
        "code": "kgb",
        "name": "Kawe",
        "searchKey": "kawe kgb"
    },
    {
        "code": "kaw",
        "name": "Kawi",
        "searchKey": "kawi kaw"
    },
    {
        "code": "ktx",
        "name": "Kaxararí",
        "searchKey": "kaxarari ktx"
    },
    {
        "code": "kbb",
        "name": "Kaxuiâna",
        "searchKey": "kaxuiana kbb"
    },
    {
        "code": "kyz",
        "name": "Kayabí",
        "searchKey": "kayabi kyz"
    },
    {
        "code": "kyt",
        "name": "Kayagar",
        "searchKey": "kayagar kyt"
    },
    {
        "code": "pdu",
        "name": "Kayan",
        "searchKey": "kayan pdu"
    },
    {
        "code": "xay",
        "name": "Kayan Mahakam",
        "searchKey": "kayan mahakam xay"
    },
    {
        "code": "xkn",
        "name": "Kayan River Kayan",
        "searchKey": "kayan river kayan xkn"
    },
    {
        "code": "txu",
        "name": "Kayapó",
        "searchKey": "kayapo txu"
    },
    {
        "code": "gyd",
        "name": "Kayardild",
        "searchKey": "kayardild gyd"
    },
    {
        "code": "kvl",
        "name": "Kayaw",
        "searchKey": "kayaw kvl"
    },
    {
        "code": "kzl",
        "name": "Kayeli",
        "searchKey": "kayeli kzl"
    },
    {
        "code": "kxy",
        "name": "Kayong",
        "searchKey": "kayong kxy"
    },
    {
        "code": "kyv",
        "name": "Kayort",
        "searchKey": "kayort kyv"
    },
    {
        "code": "gbb",
        "name": "Kaytetye",
        "searchKey": "kaytetye gbb"
    },
    {
        "code": "kzu",
        "name": "Kayupulau",
        "searchKey": "kayupulau kzu"
    },
    {
        "code": "kaz",
        "name": "Kazakh",
        "searchKey": "kazakh kaz"
    },
    {
        "code": "kzk",
        "name": "Kazukuru",
        "searchKey": "kazukuru kzk"
    },
    {
        "code": "keh",
        "name": "Keak",
        "searchKey": "keak keh"
    },
    {
        "code": "khz",
        "name": "Keapara",
        "searchKey": "keapara khz"
    },
    {
        "code": "meo",
        "name": "Kedah Malay",
        "searchKey": "kedah malay meo"
    },
    {
        "code": "ksx",
        "name": "Kedang",
        "searchKey": "kedang ksx"
    },
    {
        "code": "kdy",
        "name": "Keder",
        "searchKey": "keder kdy"
    },
    {
        "code": "wkr",
        "name": "Keerray-Woorroong",
        "searchKey": "keerray-woorroong wkr"
    },
    {
        "code": "khh",
        "name": "Kehu",
        "searchKey": "kehu khh"
    },
    {
        "code": "kei",
        "name": "Kei",
        "searchKey": "kei"
    },
    {
        "code": "kec",
        "name": "Keiga",
        "searchKey": "keiga kec"
    },
    {
        "code": "bmh",
        "name": "Kein",
        "searchKey": "kein bmh"
    },
    {
        "code": "eyo",
        "name": "Keiyo",
        "searchKey": "keiyo eyo"
    },
    {
        "code": "kek",
        "name": "Kekchí",
        "searchKey": "kekchi kek"
    },
    {
        "code": "kel",
        "name": "Kela (Democratic Republic of Congo)",
        "searchNames": [
            "Kela"
        ],
        "searchKey": "kela democratic republic of congo kel kela"
    },
    {
        "code": "kcl",
        "name": "Kela (Papua New Guinea)",
        "searchNames": [
            "Kela"
        ],
        "searchKey": "kela papua new guinea kcl kela"
    },
    {
        "code": "kzi",
        "name": "Kelabit",
        "searchKey": "kelabit kzi"
    },
    {
        "code": "keb",
        "name": "Kélé",
        "searchKey": "kele keb"
    },
    {
        "code": "khy",
        "name": "Kele (Democratic Republic of Congo)",
        "searchNames": [
            "Kele"
        ],
        "searchKey": "kele democratic republic of congo khy kele"
    },
    {
        "code": "sbc",
        "name": "Kele (Papua New Guinea)",
        "searchNames": [
            "Kele"
        ],
        "searchKey": "kele papua new guinea sbc kele"
    },
    {
        "code": "ify",
        "name": "Keley-I Kallahan",
        "searchKey": "keley-i kallahan ify"
    },
    {
        "code": "kbo",
        "name": "Keliko",
        "searchKey": "keliko kbo"
    },
    {
        "code": "xel",
        "name": "Kelo",
        "searchKey": "kelo xel"
    },
    {
        "code": "kyo",
        "name": "Kelon",
        "searchKey": "kelon kyo"
    },
    {
        "code": "kem",
        "name": "Kemak",
        "searchKey": "kemak kem"
    },
    {
        "code": "xem",
        "name": "Kembayan",
        "searchKey": "kembayan xem"
    },
    {
        "code": "bzp",
        "name": "Kemberano",
        "searchKey": "kemberano bzp"
    },
    {
        "code": "xkw",
        "name": "Kembra",
        "searchKey": "kembra xkw"
    },
    {
        "code": "dmo",
        "name": "Kemedzung",
        "searchKey": "kemedzung dmo"
    },
    {
        "code": "sjk",
        "name": "Kemi Sami",
        "searchKey": "kemi sami sjk"
    },
    {
        "code": "kfj",
        "name": "Kemiehua",
        "searchKey": "kemiehua kfj"
    },
    {
        "code": "kmt",
        "name": "Kemtuik",
        "searchKey": "kemtuik kmt"
    },
    {
        "code": "xbn",
        "name": "Kenaboi",
        "searchKey": "kenaboi xbn"
    },
    {
        "code": "gat",
        "name": "Kenati",
        "searchKey": "kenati gat"
    },
    {
        "code": "knx",
        "name": "Kendayan",
        "searchKey": "kendayan knx"
    },
    {
        "code": "klf",
        "name": "Kendeje",
        "searchKey": "kendeje klf"
    },
    {
        "code": "kvm",
        "name": "Kendem",
        "searchKey": "kendem kvm"
    },
    {
        "code": "kyq",
        "name": "Kenga",
        "searchKey": "kenga kyq"
    },
    {
        "code": "kxi",
        "name": "Keningau Murut",
        "searchKey": "keningau murut kxi"
    },
    {
        "code": "knl",
        "name": "Keninjal",
        "searchKey": "keninjal knl"
    },
    {
        "code": "kns",
        "name": "Kensiu",
        "searchKey": "kensiu kns"
    },
    {
        "code": "ndb",
        "name": "Kenswei Nsei",
        "searchKey": "kenswei nsei ndb"
    },
    {
        "code": "xki",
        "name": "Kenyan Sign Language",
        "searchKey": "kenyan sign language xki"
    },
    {
        "code": "ken",
        "name": "Kenyang",
        "searchKey": "kenyang ken"
    },
    {
        "code": "lke",
        "name": "Kenyi",
        "searchKey": "kenyi lke"
    },
    {
        "code": "xnz",
        "name": "Kenzi",
        "searchKey": "kenzi xnz"
    },
    {
        "code": "xxk",
        "name": "Ke'o",
        "searchKey": "keo xxk"
    },
    {
        "code": "xeu",
        "name": "Keoru-Ahia",
        "searchKey": "keoru-ahia xeu"
    },
    {
        "code": "kpn",
        "name": "Kepkiriwát",
        "searchKey": "kepkiriwat kpn"
    },
    {
        "code": "kuk",
        "name": "Kepo'",
        "searchKey": "kepo kuk"
    },
    {
        "code": "ker",
        "name": "Kera",
        "searchKey": "kera ker"
    },
    {
        "code": "hhr",
        "name": "Kerak",
        "searchKey": "kerak hhr"
    },
    {
        "code": "xke",
        "name": "Kereho",
        "searchKey": "kereho xke"
    },
    {
        "code": "krk",
        "name": "Kerek",
        "searchKey": "kerek krk"
    },
    {
        "code": "ked",
        "name": "Kerewe",
        "searchKey": "kerewe ked"
    },
    {
        "code": "kxz",
        "name": "Kerewo",
        "searchKey": "kerewo kxz"
    },
    {
        "code": "kvr",
        "name": "Kerinci",
        "searchKey": "kerinci kvr"
    },
    {
        "code": "xes",
        "name": "Kesawai",
        "searchKey": "kesawai xes"
    },
    {
        "code": "ket",
        "name": "Ket",
        "searchKey": "ket"
    },
    {
        "code": "kae",
        "name": "Ketangalan",
        "searchKey": "ketangalan kae"
    },
    {
        "code": "kcv",
        "name": "Kete",
        "searchKey": "kete kcv"
    },
    {
        "code": "xte",
        "name": "Ketengban",
        "searchKey": "ketengban xte"
    },
    {
        "code": "ktt",
        "name": "Ketum",
        "searchKey": "ketum ktt"
    },
    {
        "code": "kyg",
        "name": "Keyagana",
        "searchKey": "keyagana kyg"
    },
    {
        "code": "bzx",
        "name": "Kɛlɛngaxo Bozo",
        "searchKey": "kɛlɛngaxo bozo bzx"
    },
    {
        "code": "xkv",
        "name": "Kgalagadi",
        "searchKey": "kgalagadi xkv"
    },
    {
        "code": "hkh",
        "name": "Khah",
        "searchKey": "khah hkh"
    },
    {
        "code": "kjh",
        "name": "Khakas",
        "searchKey": "khakas kjh"
    },
    {
        "code": "klj",
        "name": "Khalaj",
        "searchKey": "khalaj klj"
    },
    {
        "code": "klr",
        "name": "Khaling",
        "searchKey": "khaling klr"
    },
    {
        "code": "kbg",
        "name": "Khamba",
        "searchKey": "khamba kbg"
    },
    {
        "code": "ykh",
        "name": "Khamnigan Mongol",
        "searchKey": "khamnigan mongol ykh"
    },
    {
        "code": "khg",
        "name": "Khams Tibetan",
        "searchKey": "khams tibetan khg"
    },
    {
        "code": "kht",
        "name": "Khamti",
        "searchKey": "khamti kht"
    },
    {
        "code": "ksu",
        "name": "Khamyang",
        "searchKey": "khamyang ksu"
    },
    {
        "code": "ogo",
        "name": "Khana",
        "searchKey": "khana ogo"
    },
    {
        "code": "khn",
        "name": "Khandesi",
        "searchKey": "khandesi khn"
    },
    {
        "code": "kjm",
        "name": "Kháng",
        "searchKey": "khang kjm"
    },
    {
        "code": "kca",
        "name": "Khanty",
        "searchKey": "khanty kca"
    },
    {
        "code": "xao",
        "name": "Khao",
        "searchKey": "khao xao"
    },
    {
        "code": "kfw",
        "name": "Kharam Naga",
        "searchKey": "kharam naga kfw"
    },
    {
        "code": "khr",
        "name": "Kharia",
        "searchKey": "kharia khr"
    },
    {
        "code": "ksy",
        "name": "Kharia Thar",
        "searchKey": "kharia thar ksy"
    },
    {
        "code": "kha",
        "name": "Khasi",
        "searchKey": "khasi kha"
    },
    {
        "code": "lko",
        "name": "Khayo",
        "searchKey": "khayo lko"
    },
    {
        "code": "zkz",
        "name": "Khazar",
        "searchKey": "khazar zkz"
    },
    {
        "code": "kqg",
        "name": "Khe",
        "searchKey": "khe kqg"
    },
    {
        "code": "tlx",
        "name": "Khehek",
        "searchKey": "khehek tlx"
    },
    {
        "code": "xkf",
        "name": "Khengkha",
        "searchKey": "khengkha xkf"
    },
    {
        "code": "xhe",
        "name": "Khetrani",
        "searchKey": "khetrani xhe"
    },
    {
        "code": "nkh",
        "name": "Khezha Naga",
        "searchKey": "khezha naga nkh"
    },
    {
        "code": "kix",
        "name": "Khiamniungan Naga",
        "searchKey": "khiamniungan naga kix"
    },
    {
        "code": "kjj",
        "name": "Khinalugh",
        "searchKey": "khinalugh kjj"
    },
    {
        "code": "kwx",
        "name": "Khirwar",
        "searchKey": "khirwar kwx"
    },
    {
        "code": "kqm",
        "name": "Khisa",
        "searchKey": "khisa kqm"
    },
    {
        "code": "ykl",
        "name": "Khlula",
        "searchKey": "khlula ykl"
    },
    {
        "code": "khm",
        "name": "Khmer",
        "searchKey": "khmer khm"
    },
    {
        "code": "kjg",
        "name": "Khmu",
        "searchKey": "khmu kjg"
    },
    {
        "code": "naq",
        "name": "Khoekhoe",
        "searchKey": "khoekhoe naq"
    },
    {
        "code": "nkb",
        "name": "Khoibu Naga",
        "searchKey": "khoibu naga nkb"
    },
    {
        "code": "xkc",
        "name": "Kho'ini",
        "searchKey": "khoini xkc"
    },
    {
        "code": "ktc",
        "name": "Kholok",
        "searchKey": "kholok ktc"
    },
    {
        "code": "kmz",
        "name": "Khorasani Turkish",
        "searchKey": "khorasani turkish kmz"
    },
    {
        "code": "zkh",
        "name": "Khorezmian",
        "searchKey": "khorezmian zkh"
    },
    {
        "code": "kho",
        "name": "Khotanese",
        "searchKey": "khotanese kho"
    },
    {
        "code": "khw",
        "name": "Khowar",
        "searchKey": "khowar khw"
    },
    {
        "code": "xhv",
        "name": "Khua",
        "searchKey": "khua xhv"
    },
    {
        "code": "khf",
        "name": "Khuen",
        "searchKey": "khuen khf"
    },
    {
        "code": "cnk",
        "name": "Khumi Chin",
        "searchKey": "khumi chin cnk"
    },
    {
        "code": "kkh",
        "name": "Khün",
        "searchKey": "khun kkh"
    },
    {
        "code": "kfm",
        "name": "Khunsari",
        "searchKey": "khunsari kfm"
    },
    {
        "code": "khv",
        "name": "Khvarshi",
        "searchKey": "khvarshi khv"
    },
    {
        "code": "blv",
        "name": "Kibala",
        "searchKey": "kibala blv"
    },
    {
        "code": "kie",
        "name": "Kibet",
        "searchKey": "kibet kie"
    },
    {
        "code": "prm",
        "name": "Kibiri",
        "searchKey": "kibiri prm"
    },
    {
        "code": "quc",
        "name": "K'iche'",
        "searchKey": "kiche quc"
    },
    {
        "code": "kic",
        "name": "Kickapoo",
        "searchKey": "kickapoo kic"
    },
    {
        "code": "gia",
        "name": "Kija",
        "searchKey": "kija gia"
    },
    {
        "code": "kzg",
        "name": "Kikai",
        "searchKey": "kikai kzg"
    },
    {
        "code": "kik",
        "name": "Kikuyu",
        "displayName": "Kikuyu",
        "alternateNames": [
            "Gikuyu",
            "Gĩkũyũ"
        ],
        "countries": [
            "Kenya"
        ],
        "script": "Latin",
        "searchKey": "kikuyu kik"
    },
    {
        "code": "sjd",
        "name": "Kildin Sami",
        "searchKey": "kildin sami sjd"
    },
    {
        "code": "kij",
        "name": "Kilivila",
        "searchKey": "kilivila kij"
    },
    {
        "code": "klb",
        "name": "Kiliwa",
        "searchKey": "kiliwa klb"
    },
    {
        "code": "kih",
        "name": "Kilmeri",
        "searchKey": "kilmeri kih"
    },
    {
        "code": "kia",
        "name": "Kim",
        "searchKey": "kim kia"
    },
    {
        "code": "mji",
        "name": "Kim Mun",
        "searchKey": "kim mun mji"
    },
    {
        "code": "kig",
        "name": "Kimaama",
        "searchKey": "kimaama kig"
    },
    {
        "code": "kqr",
        "name": "Kimaragang",
        "searchKey": "kimaragang kqr"
    },
    {
        "code": "kiv",
        "name": "Kimbu",
        "searchKey": "kimbu kiv"
    },
    {
        "code": "kmb",
        "name": "Kimbundu",
        "searchKey": "kimbundu kmb"
    },
    {
        "code": "sbt",
        "name": "Kimki",
        "searchKey": "kimki sbt"
    },
    {
        "code": "kqp",
        "name": "Kimré",
        "searchKey": "kimre kqp"
    },
    {
        "code": "cbw",
        "name": "Kinabalian",
        "searchKey": "kinabalian cbw"
    },
    {
        "code": "kco",
        "name": "Kinalakna",
        "searchKey": "kinalakna kco"
    },
    {
        "code": "mkx",
        "name": "Kinamiging Manobo",
        "searchKey": "kinamiging manobo mkx"
    },
    {
        "code": "krj",
        "name": "Kinaray-A",
        "searchKey": "kinaray-a krj"
    },
    {
        "code": "zga",
        "name": "Kinga",
        "searchKey": "kinga zga"
    },
    {
        "code": "kfk",
        "name": "Kinnauri",
        "searchKey": "kinnauri kfk"
    },
    {
        "code": "kjo",
        "name": "Kinnauri Pahari",
        "searchKey": "kinnauri pahari kjo"
    },
    {
        "code": "knq",
        "name": "Kintaq",
        "searchKey": "kintaq knq"
    },
    {
        "code": "kkd",
        "name": "Kinuku",
        "searchKey": "kinuku kkd"
    },
    {
        "code": "kin",
        "name": "Kinyarwanda",
        "searchKey": "kinyarwanda kin"
    },
    {
        "code": "ues",
        "name": "Kioko",
        "searchKey": "kioko ues"
    },
    {
        "code": "kkm",
        "name": "Kiong",
        "searchKey": "kiong kkm"
    },
    {
        "code": "xko",
        "name": "Kiorr",
        "searchKey": "kiorr xko"
    },
    {
        "code": "kio",
        "name": "Kiowa",
        "searchKey": "kiowa kio"
    },
    {
        "code": "apk",
        "name": "Kiowa Apache",
        "searchKey": "kiowa apache apk"
    },
    {
        "code": "sgc",
        "name": "Kipsigis",
        "searchKey": "kipsigis sgc"
    },
    {
        "code": "kyi",
        "name": "Kiput",
        "searchKey": "kiput kyi"
    },
    {
        "code": "kkr",
        "name": "Kir-Balar",
        "searchKey": "kir-balar kkr"
    },
    {
        "code": "geb",
        "name": "Kire",
        "searchKey": "kire geb"
    },
    {
        "code": "kir",
        "name": "Kirghiz",
        "searchKey": "kirghiz kir"
    },
    {
        "code": "okr",
        "name": "Kirike",
        "searchKey": "kirike okr"
    },
    {
        "code": "kiy",
        "name": "Kirikiri",
        "searchKey": "kirikiri kiy"
    },
    {
        "code": "kiu",
        "name": "Kirmanjki (individual language)",
        "searchNames": [
            "Kirmanjki"
        ],
        "searchKey": "kirmanjki individual language kiu kirmanjki"
    },
    {
        "code": "fkk",
        "name": "Kirya-Konzəl",
        "searchKey": "kirya-konzəl fkk"
    },
    {
        "code": "kis",
        "name": "Kis",
        "searchKey": "kis"
    },
    {
        "code": "lks",
        "name": "Kisa",
        "searchKey": "kisa lks"
    },
    {
        "code": "xis",
        "name": "Kisan",
        "searchKey": "kisan xis"
    },
    {
        "code": "kqh",
        "name": "Kisankasa",
        "searchKey": "kisankasa kqh"
    },
    {
        "code": "kje",
        "name": "Kisar",
        "searchKey": "kisar kje"
    },
    {
        "code": "kiz",
        "name": "Kisi",
        "searchKey": "kisi kiz"
    },
    {
        "code": "gru",
        "name": "Kistane",
        "searchKey": "kistane gru"
    },
    {
        "code": "mwk",
        "name": "Kita Maninkakan",
        "searchKey": "kita maninkakan mwk"
    },
    {
        "code": "zkt",
        "name": "Kitan",
        "searchKey": "kitan zkt"
    },
    {
        "code": "kii",
        "name": "Kitsai",
        "searchKey": "kitsai kii"
    },
    {
        "code": "mkw",
        "name": "Kituba (Congo)",
        "searchNames": [
            "Kituba"
        ],
        "searchKey": "kituba congo mkw kituba"
    },
    {
        "code": "ktu",
        "name": "Kituba (Democratic Republic of Congo)",
        "searchNames": [
            "Kituba"
        ],
        "searchKey": "kituba democratic republic of congo ktu kituba"
    },
    {
        "code": "wei",
        "name": "Kiunum",
        "searchKey": "kiunum wei"
    },
    {
        "code": "izm",
        "name": "Kizamani",
        "searchKey": "kizamani izm"
    },
    {
        "code": "lda",
        "name": "Kla-Dan",
        "searchKey": "kla-dan lda"
    },
    {
        "code": "clm",
        "name": "Klallam",
        "searchKey": "klallam clm"
    },
    {
        "code": "kla",
        "name": "Klamath-Modoc",
        "searchKey": "klamath-modoc kla"
    },
    {
        "code": "klu",
        "name": "Klao",
        "searchKey": "klao klu"
    },
    {
        "code": "kqt",
        "name": "Klias River Kadazan",
        "searchKey": "klias river kadazan kqt"
    },
    {
        "code": "tlh",
        "name": "Klingon",
        "searchKey": "klingon tlh"
    },
    {
        "code": "czk",
        "name": "Knaanic",
        "searchKey": "knaanic czk"
    },
    {
        "code": "fuj",
        "name": "Ko",
        "searchKey": "ko fuj"
    },
    {
        "code": "kib",
        "name": "Koalib",
        "searchKey": "koalib kib"
    },
    {
        "code": "cku",
        "name": "Koasati",
        "searchKey": "koasati cku"
    },
    {
        "code": "kpd",
        "name": "Koba",
        "searchKey": "koba kpd"
    },
    {
        "code": "kcj",
        "name": "Kobiana",
        "searchKey": "kobiana kcj"
    },
    {
        "code": "okc",
        "name": "Kobo",
        "searchKey": "kobo okc"
    },
    {
        "code": "kgu",
        "name": "Kobol",
        "searchKey": "kobol kgu"
    },
    {
        "code": "kpw",
        "name": "Kobon",
        "searchKey": "kobon kpw"
    },
    {
        "code": "kdq",
        "name": "Koch",
        "searchKey": "koch kdq"
    },
    {
        "code": "thq",
        "name": "Kochila Tharu",
        "searchKey": "kochila tharu thq"
    },
    {
        "code": "cdz",
        "name": "Koda",
        "searchKey": "koda cdz"
    },
    {
        "code": "ksz",
        "name": "Kodaku",
        "searchKey": "kodaku ksz"
    },
    {
        "code": "kfa",
        "name": "Kodava",
        "searchKey": "kodava kfa"
    },
    {
        "code": "vko",
        "name": "Kodeoha",
        "searchKey": "kodeoha vko"
    },
    {
        "code": "kod",
        "name": "Kodi",
        "searchKey": "kodi kod"
    },
    {
        "code": "kwp",
        "name": "Kodia",
        "searchKey": "kodia kwp"
    },
    {
        "code": "kcs",
        "name": "Koenoem",
        "searchKey": "koenoem kcs"
    },
    {
        "code": "kso",
        "name": "Kofa",
        "searchKey": "kofa kso"
    },
    {
        "code": "kpi",
        "name": "Kofei",
        "searchKey": "kofei kpi"
    },
    {
        "code": "kwl",
        "name": "Kofyar",
        "searchKey": "kofyar kwl"
    },
    {
        "code": "zkg",
        "name": "Koguryo",
        "searchKey": "koguryo zkg"
    },
    {
        "code": "kkx",
        "name": "Kohin",
        "searchKey": "kohin kkx"
    },
    {
        "code": "plk",
        "name": "Kohistani Shina",
        "searchKey": "kohistani shina plk"
    },
    {
        "code": "kpm",
        "name": "Koho",
        "searchKey": "koho kpm"
    },
    {
        "code": "bcs",
        "name": "Kohumono",
        "searchKey": "kohumono bcs"
    },
    {
        "code": "kkt",
        "name": "Koi",
        "searchKey": "koi kkt"
    },
    {
        "code": "nkd",
        "name": "Koireng",
        "searchKey": "koireng nkd"
    },
    {
        "code": "kqi",
        "name": "Koitabu",
        "searchKey": "koitabu kqi"
    },
    {
        "code": "kxt",
        "name": "Koiwat",
        "searchKey": "koiwat kxt"
    },
    {
        "code": "trp",
        "name": "Kok Borok",
        "searchKey": "kok borok trp"
    },
    {
        "code": "ktd",
        "name": "Kokata",
        "searchKey": "kokata ktd"
    },
    {
        "code": "kou",
        "name": "Koke",
        "searchKey": "koke kou"
    },
    {
        "code": "nxk",
        "name": "Koki Naga",
        "searchKey": "koki naga nxk"
    },
    {
        "code": "gko",
        "name": "Kok-Nar",
        "searchKey": "kok-nar gko"
    },
    {
        "code": "okg",
        "name": "Koko Babangk",
        "searchKey": "koko babangk okg"
    },
    {
        "code": "xod",
        "name": "Kokoda",
        "searchKey": "kokoda xod"
    },
    {
        "code": "kzn",
        "name": "Kokola",
        "searchKey": "kokola kzn"
    },
    {
        "code": "kkk",
        "name": "Kokota",
        "searchKey": "kokota kkk"
    },
    {
        "code": "ekl",
        "name": "Kol (Bangladesh)",
        "searchNames": [
            "Kol"
        ],
        "searchKey": "kol bangladesh ekl kol"
    },
    {
        "code": "biw",
        "name": "Kol (Cameroon)",
        "searchNames": [
            "Kol"
        ],
        "searchKey": "kol cameroon biw kol"
    },
    {
        "code": "kol",
        "name": "Kol (Papua New Guinea)",
        "searchNames": [
            "Kol"
        ],
        "searchKey": "kol papua new guinea kol"
    },
    {
        "code": "kvv",
        "name": "Kola",
        "searchKey": "kola kvv"
    },
    {
        "code": "klc",
        "name": "Kolbila",
        "searchKey": "kolbila klc"
    },
    {
        "code": "skn",
        "name": "Kolibugan Subanon",
        "searchKey": "kolibugan subanon skn"
    },
    {
        "code": "ksh",
        "name": "Kölsch",
        "searchKey": "kolsch ksh"
    },
    {
        "code": "klx",
        "name": "Koluwawa",
        "searchKey": "koluwawa klx"
    },
    {
        "code": "bkm",
        "name": "Kom (Cameroon)",
        "searchNames": [
            "Kom"
        ],
        "searchKey": "kom cameroon bkm kom"
    },
    {
        "code": "kmm",
        "name": "Kom (India)",
        "searchNames": [
            "Kom"
        ],
        "searchKey": "kom india kmm kom"
    },
    {
        "code": "kmy",
        "name": "Koma",
        "searchKey": "koma kmy"
    },
    {
        "code": "kpf",
        "name": "Komba",
        "searchKey": "komba kpf"
    },
    {
        "code": "tyn",
        "name": "Kombai",
        "searchKey": "kombai tyn"
    },
    {
        "code": "xbi",
        "name": "Kombio",
        "searchKey": "kombio xbi"
    },
    {
        "code": "kge",
        "name": "Komering",
        "searchKey": "komering kge"
    },
    {
        "code": "kom",
        "name": "Komi",
        "searchKey": "komi kom"
    },
    {
        "code": "xoi",
        "name": "Kominimung",
        "searchKey": "kominimung xoi"
    },
    {
        "code": "koi",
        "name": "Komi-Permyak",
        "searchKey": "komi-permyak koi"
    },
    {
        "code": "kpv",
        "name": "Komi-Zyrian",
        "searchKey": "komi-zyrian kpv"
    },
    {
        "code": "kmw",
        "name": "Komo (Democratic Republic of Congo)",
        "searchNames": [
            "Komo"
        ],
        "searchKey": "komo democratic republic of congo kmw komo"
    },
    {
        "code": "xom",
        "name": "Komo (Sudan)",
        "searchNames": [
            "Komo"
        ],
        "searchKey": "komo sudan xom komo"
    },
    {
        "code": "kvh",
        "name": "Komodo",
        "searchKey": "komodo kvh"
    },
    {
        "code": "kvp",
        "name": "Kompane",
        "searchKey": "kompane kvp"
    },
    {
        "code": "kzv",
        "name": "Komyandaret",
        "searchKey": "komyandaret kzv"
    },
    {
        "code": "kkn",
        "name": "Kon Keu",
        "searchKey": "kon keu kkn"
    },
    {
        "code": "kxw",
        "name": "Konai",
        "searchKey": "konai kxw"
    },
    {
        "code": "knd",
        "name": "Konda",
        "searchKey": "konda knd"
    },
    {
        "code": "kfc",
        "name": "Konda-Dora",
        "searchKey": "konda-dora kfc"
    },
    {
        "code": "kdw",
        "name": "Koneraw",
        "searchKey": "koneraw kdw"
    },
    {
        "code": "kon",
        "name": "Kongo",
        "searchKey": "kongo kon"
    },
    {
        "code": "knn",
        "name": "Konkani (individual language)",
        "searchNames": [
            "Konkani"
        ],
        "searchKey": "konkani individual language knn konkani"
    },
    {
        "code": "kok",
        "name": "Konkani (macrolanguage)",
        "searchNames": [
            "Konkani"
        ],
        "searchKey": "konkani macrolanguage kok konkani"
    },
    {
        "code": "xon",
        "name": "Konkomba",
        "searchKey": "konkomba xon"
    },
    {
        "code": "kma",
        "name": "Konni",
        "searchKey": "konni kma"
    },
    {
        "code": "knu",
        "name": "Kono (Guinea)",
        "searchNames": [
            "Kono"
        ],
        "searchKey": "kono guinea knu kono"
    },
    {
        "code": "klk",
        "name": "Kono (Nigeria)",
        "searchNames": [
            "Kono"
        ],
        "searchKey": "kono nigeria klk kono"
    },
    {
        "code": "kno",
        "name": "Kono (Sierra Leone)",
        "searchNames": [
            "Kono"
        ],
        "searchKey": "kono sierra leone kno kono"
    },
    {
        "code": "koa",
        "name": "Konomala",
        "searchKey": "konomala koa"
    },
    {
        "code": "kcz",
        "name": "Konongo",
        "searchKey": "konongo kcz"
    },
    {
        "code": "kxc",
        "name": "Konso",
        "searchKey": "konso kxc"
    },
    {
        "code": "nbe",
        "name": "Konyak Naga",
        "searchKey": "konyak naga nbe"
    },
    {
        "code": "mku",
        "name": "Konyanka Maninka",
        "searchKey": "konyanka maninka mku"
    },
    {
        "code": "koo",
        "name": "Konzo",
        "searchKey": "konzo koo"
    },
    {
        "code": "kng",
        "name": "Koongo",
        "searchKey": "koongo kng"
    },
    {
        "code": "ozm",
        "name": "Koonzime",
        "searchKey": "koonzime ozm"
    },
    {
        "code": "kqy",
        "name": "Koorete",
        "searchKey": "koorete kqy"
    },
    {
        "code": "xop",
        "name": "Kopar",
        "searchKey": "kopar xop"
    },
    {
        "code": "opk",
        "name": "Kopkaka",
        "searchKey": "kopkaka opk"
    },
    {
        "code": "kpr",
        "name": "Korafe-Yegha",
        "searchKey": "korafe-yegha kpr"
    },
    {
        "code": "koz",
        "name": "Korak",
        "searchKey": "korak koz"
    },
    {
        "code": "kqz",
        "name": "Korana",
        "searchKey": "korana kqz"
    },
    {
        "code": "kcy",
        "name": "Korandje",
        "searchKey": "korandje kcy"
    },
    {
        "code": "kor",
        "name": "Korean",
        "searchKey": "korean kor"
    },
    {
        "code": "kvk",
        "name": "Korean Sign Language",
        "searchKey": "korean sign language kvk"
    },
    {
        "code": "coe",
        "name": "Koreguaje",
        "searchKey": "koreguaje coe"
    },
    {
        "code": "okh",
        "name": "Koresh-e Rostam",
        "searchKey": "koresh-e rostam okh"
    },
    {
        "code": "kfq",
        "name": "Korku",
        "searchKey": "korku kfq"
    },
    {
        "code": "vkp",
        "name": "Korlai Creole Portuguese",
        "searchKey": "korlai creole portuguese vkp"
    },
    {
        "code": "kfo",
        "name": "Koro (Côte d'Ivoire)",
        "searchNames": [
            "Koro"
        ],
        "searchKey": "koro cote divoire kfo koro"
    },
    {
        "code": "jkr",
        "name": "Koro (India)",
        "searchNames": [
            "Koro"
        ],
        "searchKey": "koro india jkr koro"
    },
    {
        "code": "kxr",
        "name": "Koro (Papua New Guinea)",
        "searchNames": [
            "Koro"
        ],
        "searchKey": "koro papua new guinea kxr koro"
    },
    {
        "code": "krf",
        "name": "Koro (Vanuatu)",
        "searchNames": [
            "Koro"
        ],
        "searchKey": "koro vanuatu krf koro"
    },
    {
        "code": "vkn",
        "name": "Koro Nulu",
        "searchKey": "koro nulu vkn"
    },
    {
        "code": "bqv",
        "name": "Koro Wachi",
        "searchKey": "koro wachi bqv"
    },
    {
        "code": "vkz",
        "name": "Koro Zuba",
        "searchKey": "koro zuba vkz"
    },
    {
        "code": "kfz",
        "name": "Koromfé",
        "searchKey": "koromfe kfz"
    },
    {
        "code": "kqj",
        "name": "Koromira",
        "searchKey": "koromira kqj"
    },
    {
        "code": "bpr",
        "name": "Koronadal Blaan",
        "searchKey": "koronadal blaan bpr"
    },
    {
        "code": "xkq",
        "name": "Koroni",
        "searchKey": "koroni xkq"
    },
    {
        "code": "xxr",
        "name": "Koropó",
        "searchKey": "koropo xxr"
    },
    {
        "code": "ktl",
        "name": "Koroshi",
        "searchKey": "koroshi ktl"
    },
    {
        "code": "khe",
        "name": "Korowai",
        "searchKey": "korowai khe"
    },
    {
        "code": "kfd",
        "name": "Korra Koraga",
        "searchKey": "korra koraga kfd"
    },
    {
        "code": "xor",
        "name": "Korubo",
        "searchKey": "korubo xor"
    },
    {
        "code": "kpq",
        "name": "Korupun-Sela",
        "searchKey": "korupun-sela kpq"
    },
    {
        "code": "kfp",
        "name": "Korwa",
        "searchKey": "korwa kfp"
    },
    {
        "code": "kpy",
        "name": "Koryak",
        "searchKey": "koryak kpy"
    },
    {
        "code": "kiq",
        "name": "Kosadle",
        "searchKey": "kosadle kiq"
    },
    {
        "code": "kkl",
        "name": "Kosarek Yale",
        "searchKey": "kosarek yale kkl"
    },
    {
        "code": "kze",
        "name": "Kosena",
        "searchKey": "kosena kze"
    },
    {
        "code": "kid",
        "name": "Koshin",
        "searchKey": "koshin kid"
    },
    {
        "code": "kos",
        "name": "Kosraean",
        "searchKey": "kosraean kos"
    },
    {
        "code": "koq",
        "name": "Kota (Gabon)",
        "searchNames": [
            "Kota"
        ],
        "searchKey": "kota gabon koq kota"
    },
    {
        "code": "kfe",
        "name": "Kota (India)",
        "searchNames": [
            "Kota"
        ],
        "searchKey": "kota india kfe kota"
    },
    {
        "code": "mqg",
        "name": "Kota Bangun Kutai Malay",
        "searchKey": "kota bangun kutai malay mqg"
    },
    {
        "code": "grm",
        "name": "Kota Marudu Talantang",
        "searchKey": "kota marudu talantang grm"
    },
    {
        "code": "kqk",
        "name": "Kotafon Gbe",
        "searchKey": "kotafon gbe kqk"
    },
    {
        "code": "avk",
        "name": "Kotava",
        "searchKey": "kotava avk"
    },
    {
        "code": "eko",
        "name": "Koti",
        "searchKey": "koti eko"
    },
    {
        "code": "zko",
        "name": "Kott",
        "searchKey": "kott zko"
    },
    {
        "code": "snz",
        "name": "Kou",
        "searchKey": "kou snz"
    },
    {
        "code": "kyf",
        "name": "Kouya",
        "searchKey": "kouya kyf"
    },
    {
        "code": "kqb",
        "name": "Kovai",
        "searchKey": "kovai kqb"
    },
    {
        "code": "kvc",
        "name": "Kove",
        "searchKey": "kove kvc"
    },
    {
        "code": "xow",
        "name": "Kowaki",
        "searchKey": "kowaki xow"
    },
    {
        "code": "kwh",
        "name": "Kowiai",
        "searchKey": "kowiai kwh"
    },
    {
        "code": "kqd",
        "name": "Koy Sanjaq Surat",
        "searchKey": "koy sanjaq surat kqd"
    },
    {
        "code": "kff",
        "name": "Koya",
        "searchKey": "koya kff"
    },
    {
        "code": "kga",
        "name": "Koyaga",
        "searchKey": "koyaga kga"
    },
    {
        "code": "koh",
        "name": "Koyo",
        "searchKey": "koyo koh"
    },
    {
        "code": "khq",
        "name": "Koyra Chiini Songhay",
        "searchKey": "koyra chiini songhay khq"
    },
    {
        "code": "ses",
        "name": "Koyraboro Senni Songhai",
        "searchKey": "koyraboro senni songhai ses"
    },
    {
        "code": "koy",
        "name": "Koyukon",
        "searchKey": "koyukon koy"
    },
    {
        "code": "kuw",
        "name": "Kpagua",
        "searchKey": "kpagua kuw"
    },
    {
        "code": "kpl",
        "name": "Kpala",
        "searchKey": "kpala kpl"
    },
    {
        "code": "kpk",
        "name": "Kpan",
        "searchKey": "kpan kpk"
    },
    {
        "code": "pbn",
        "name": "Kpasam",
        "searchKey": "kpasam pbn"
    },
    {
        "code": "koc",
        "name": "Kpati",
        "searchKey": "kpati koc"
    },
    {
        "code": "kym",
        "name": "Kpatili",
        "searchKey": "kpatili kym"
    },
    {
        "code": "cpo",
        "name": "Kpeego",
        "searchKey": "kpeego cpo"
    },
    {
        "code": "kpe",
        "name": "Kpelle",
        "searchKey": "kpelle kpe"
    },
    {
        "code": "kef",
        "name": "Kpessi",
        "searchKey": "kpessi kef"
    },
    {
        "code": "kph",
        "name": "Kplang",
        "searchKey": "kplang kph"
    },
    {
        "code": "kye",
        "name": "Krache",
        "searchKey": "krache kye"
    },
    {
        "code": "xra",
        "name": "Krahô",
        "searchKey": "kraho xra"
    },
    {
        "code": "rka",
        "name": "Kraol",
        "searchKey": "kraol rka"
    },
    {
        "code": "kqq",
        "name": "Krenak",
        "searchKey": "krenak kqq"
    },
    {
        "code": "zkv",
        "name": "Krevinian",
        "searchKey": "krevinian zkv"
    },
    {
        "code": "xre",
        "name": "Kreye",
        "searchKey": "kreye xre"
    },
    {
        "code": "ngt",
        "name": "Kriang",
        "searchKey": "kriang ngt"
    },
    {
        "code": "xri",
        "name": "Krikati-Timbira",
        "searchKey": "krikati-timbira xri"
    },
    {
        "code": "kri",
        "name": "Krio",
        "searchKey": "krio kri"
    },
    {
        "code": "rop",
        "name": "Kriol",
        "searchKey": "kriol rop"
    },
    {
        "code": "ksi",
        "name": "Krisa",
        "searchKey": "krisa ksi"
    },
    {
        "code": "kxb",
        "name": "Krobu",
        "searchKey": "krobu kxb"
    },
    {
        "code": "kgo",
        "name": "Krongo",
        "searchKey": "krongo kgo"
    },
    {
        "code": "krr",
        "name": "Krung",
        "searchKey": "krung krr"
    },
    {
        "code": "jct",
        "name": "Krymchak",
        "searchKey": "krymchak jct"
    },
    {
        "code": "kry",
        "name": "Kryts",
        "searchKey": "kryts kry"
    },
    {
        "code": "kut",
        "name": "Ktunaxa",
        "searchKey": "ktunaxa kut"
    },
    {
        "code": "tyu",
        "name": "Kua",
        "searchKey": "kua tyu"
    },
    {
        "code": "yku",
        "name": "Kuamasi",
        "searchKey": "kuamasi yku"
    },
    {
        "code": "uan",
        "name": "Kuan",
        "searchKey": "kuan uan"
    },
    {
        "code": "xnh",
        "name": "Kuanhua",
        "searchKey": "kuanhua xnh"
    },
    {
        "code": "ykn",
        "name": "Kua-nsi",
        "searchKey": "kua-nsi ykn"
    },
    {
        "code": "ksd",
        "name": "Kuanua",
        "searchKey": "kuanua ksd"
    },
    {
        "code": "kua",
        "name": "Kuanyama",
        "searchKey": "kuanyama kua"
    },
    {
        "code": "ugh",
        "name": "Kubachi",
        "searchKey": "kubachi ugh"
    },
    {
        "code": "kgf",
        "name": "Kube",
        "searchKey": "kube kgf"
    },
    {
        "code": "kof",
        "name": "Kubi",
        "searchKey": "kubi kof"
    },
    {
        "code": "jko",
        "name": "Kubo",
        "searchKey": "kubo jko"
    },
    {
        "code": "kvb",
        "name": "Kubu",
        "searchKey": "kubu kvb"
    },
    {
        "code": "lkc",
        "name": "Kucong",
        "searchKey": "kucong lkc"
    },
    {
        "code": "kfg",
        "name": "Kudiya",
        "searchKey": "kudiya kfg"
    },
    {
        "code": "kyw",
        "name": "Kudmali",
        "searchKey": "kudmali kyw"
    },
    {
        "code": "kov",
        "name": "Kudu-Camo",
        "searchKey": "kudu-camo kov"
    },
    {
        "code": "sqx",
        "name": "Kufr Qassem Sign Language (KQSL)",
        "searchNames": [
            "Kufr Qassem Sign Language"
        ],
        "searchKey": "kufr qassem sign language kqsl sqx kufr qassem sign language"
    },
    {
        "code": "kow",
        "name": "Kugama",
        "searchKey": "kugama kow"
    },
    {
        "code": "kes",
        "name": "Kugbo",
        "searchKey": "kugbo kes"
    },
    {
        "code": "xmh",
        "name": "Kugu-Muminh",
        "searchKey": "kugu-muminh xmh"
    },
    {
        "code": "uki",
        "name": "Kui (India)",
        "searchNames": [
            "Kui"
        ],
        "searchKey": "kui india uki kui"
    },
    {
        "code": "kvd",
        "name": "Kui (Indonesia)",
        "searchNames": [
            "Kui"
        ],
        "searchKey": "kui indonesia kvd kui"
    },
    {
        "code": "dkr",
        "name": "Kuijau",
        "searchKey": "kuijau dkr"
    },
    {
        "code": "kui",
        "name": "Kuikúro-Kalapálo",
        "searchKey": "kuikuro-kalapalo kui"
    },
    {
        "code": "vkj",
        "name": "Kujarge",
        "searchKey": "kujarge vkj"
    },
    {
        "code": "kfn",
        "name": "Kuk",
        "searchKey": "kuk kfn"
    },
    {
        "code": "kux",
        "name": "Kukatja",
        "searchKey": "kukatja kux"
    },
    {
        "code": "ght",
        "name": "Kuke",
        "searchKey": "kuke ght"
    },
    {
        "code": "kez",
        "name": "Kukele",
        "searchKey": "kukele kez"
    },
    {
        "code": "kex",
        "name": "Kukna",
        "searchKey": "kukna kex"
    },
    {
        "code": "ukv",
        "name": "Kuku",
        "searchKey": "kuku ukv"
    },
    {
        "code": "xmq",
        "name": "Kuku-Mangk",
        "searchKey": "kuku-mangk xmq"
    },
    {
        "code": "xmp",
        "name": "Kuku-Mu'inh",
        "searchKey": "kuku-muinh xmp"
    },
    {
        "code": "ugb",
        "name": "Kuku-Ugbanh",
        "searchKey": "kuku-ugbanh ugb"
    },
    {
        "code": "uwa",
        "name": "Kuku-Uwanh",
        "searchKey": "kuku-uwanh uwa"
    },
    {
        "code": "gvn",
        "name": "Kuku-Yalanji",
        "searchKey": "kuku-yalanji gvn"
    },
    {
        "code": "tpg",
        "name": "Kula",
        "searchKey": "kula tpg"
    },
    {
        "code": "kul",
        "name": "Kulere",
        "searchKey": "kulere kul"
    },
    {
        "code": "kxj",
        "name": "Kulfa",
        "searchKey": "kulfa kxj"
    },
    {
        "code": "xpk",
        "name": "Kulina Pano",
        "searchKey": "kulina pano xpk"
    },
    {
        "code": "vkl",
        "name": "Kulisusu",
        "searchKey": "kulisusu vkl"
    },
    {
        "code": "kfx",
        "name": "Kullu Pahari",
        "searchKey": "kullu pahari kfx"
    },
    {
        "code": "uon",
        "name": "Kulon",
        "searchKey": "kulon uon"
    },
    {
        "code": "kle",
        "name": "Kulung (Nepal)",
        "searchNames": [
            "Kulung"
        ],
        "searchKey": "kulung nepal kle kulung"
    },
    {
        "code": "bbu",
        "name": "Kulung (Nigeria)",
        "searchNames": [
            "Kulung"
        ],
        "searchKey": "kulung nigeria bbu kulung"
    },
    {
        "code": "ksl",
        "name": "Kumalu",
        "searchKey": "kumalu ksl"
    },
    {
        "code": "kdi",
        "name": "Kumam",
        "searchKey": "kumam kdi"
    },
    {
        "code": "kue",
        "name": "Kuman (Papua New Guinea)",
        "searchNames": [
            "Kuman"
        ],
        "searchKey": "kuman papua new guinea kue kuman"
    },
    {
        "code": "qwm",
        "name": "Kuman (Russia)",
        "searchNames": [
            "Kuman"
        ],
        "searchKey": "kuman russia qwm kuman"
    },
    {
        "code": "kfy",
        "name": "Kumaoni",
        "searchKey": "kumaoni kfy"
    },
    {
        "code": "kmj",
        "name": "Kumarbhag Paharia",
        "searchKey": "kumarbhag paharia kmj"
    },
    {
        "code": "ksm",
        "name": "Kumba",
        "searchKey": "kumba ksm"
    },
    {
        "code": "kgs",
        "name": "Kumbainggar",
        "searchKey": "kumbainggar kgs"
    },
    {
        "code": "wkb",
        "name": "Kumbaran",
        "searchKey": "kumbaran wkb"
    },
    {
        "code": "xks",
        "name": "Kumbewaha",
        "searchKey": "kumbewaha xks"
    },
    {
        "code": "kra",
        "name": "Kumhali",
        "searchKey": "kumhali kra"
    },
    {
        "code": "dih",
        "name": "Kumiai",
        "searchKey": "kumiai dih"
    },
    {
        "code": "kuo",
        "name": "Kumukio",
        "searchKey": "kumukio kuo"
    },
    {
        "code": "kum",
        "name": "Kumyk",
        "searchKey": "kumyk kum"
    },
    {
        "code": "zum",
        "name": "Kumzari",
        "searchKey": "kumzari zum"
    },
    {
        "code": "kun",
        "name": "Kunama",
        "searchKey": "kunama kun"
    },
    {
        "code": "wlg",
        "name": "Kunbarlang",
        "searchKey": "kunbarlang wlg"
    },
    {
        "code": "kdn",
        "name": "Kunda",
        "searchKey": "kunda kdn"
    },
    {
        "code": "shd",
        "name": "Kundal Shahi",
        "searchKey": "kundal shahi shd"
    },
    {
        "code": "wku",
        "name": "Kunduvadi",
        "searchKey": "kunduvadi wku"
    },
    {
        "code": "kfl",
        "name": "Kung",
        "searchKey": "kung kfl"
    },
    {
        "code": "ggk",
        "name": "Kungarakany",
        "searchKey": "kungarakany ggk"
    },
    {
        "code": "gdt",
        "name": "Kungardutyi",
        "searchKey": "kungardutyi gdt"
    },
    {
        "code": "knw",
        "name": "Kung-Ekoka",
        "searchKey": "kung-ekoka knw"
    },
    {
        "code": "kgl",
        "name": "Kunggari",
        "searchKey": "kunggari kgl"
    },
    {
        "code": "lku",
        "name": "Kungkari",
        "searchKey": "kungkari lku"
    },
    {
        "code": "kse",
        "name": "Kuni",
        "searchKey": "kuni kse"
    },
    {
        "code": "kvg",
        "name": "Kuni-Boazi",
        "searchKey": "kuni-boazi kvg"
    },
    {
        "code": "xug",
        "name": "Kunigami",
        "searchKey": "kunigami xug"
    },
    {
        "code": "kup",
        "name": "Kunimaipa",
        "searchKey": "kunimaipa kup"
    },
    {
        "code": "pep",
        "name": "Kunja",
        "searchKey": "kunja pep"
    },
    {
        "code": "kjn",
        "name": "Kunjen",
        "searchKey": "kunjen kjn"
    },
    {
        "code": "njx",
        "name": "Kunyi",
        "searchKey": "kunyi njx"
    },
    {
        "code": "kuz",
        "name": "Kunza",
        "searchKey": "kunza kuz"
    },
    {
        "code": "xuo",
        "name": "Kuo",
        "searchKey": "kuo xuo"
    },
    {
        "code": "kto",
        "name": "Kuot",
        "searchKey": "kuot kto"
    },
    {
        "code": "kug",
        "name": "Kupa",
        "searchKey": "kupa kug"
    },
    {
        "code": "mkn",
        "name": "Kupang Malay",
        "searchKey": "kupang malay mkn"
    },
    {
        "code": "key",
        "name": "Kupia",
        "searchKey": "kupia key"
    },
    {
        "code": "kpz",
        "name": "Kupsabiny",
        "searchKey": "kupsabiny kpz"
    },
    {
        "code": "kuv",
        "name": "Kur",
        "searchKey": "kur kuv"
    },
    {
        "code": "nqk",
        "name": "Kura Ede Nago",
        "searchKey": "kura ede nago nqk"
    },
    {
        "code": "krh",
        "name": "Kurama",
        "searchKey": "kurama krh"
    },
    {
        "code": "knk",
        "name": "Kuranko",
        "searchKey": "kuranko knk"
    },
    {
        "code": "kur",
        "name": "Kurdish",
        "searchKey": "kurdish kur"
    },
    {
        "code": "zhk",
        "name": "Kurdish Sign Language",
        "searchKey": "kurdish sign language zhk"
    },
    {
        "code": "nbn",
        "name": "Kuri",
        "searchKey": "kuri nbn"
    },
    {
        "code": "kuj",
        "name": "Kuria",
        "searchKey": "kuria kuj"
    },
    {
        "code": "kfh",
        "name": "Kurichiya",
        "searchKey": "kurichiya kfh"
    },
    {
        "code": "kfv",
        "name": "Kurmukar",
        "searchKey": "kurmukar kfv"
    },
    {
        "code": "unn",
        "name": "Kurnai",
        "searchKey": "kurnai unn"
    },
    {
        "code": "vku",
        "name": "Kurrama",
        "searchKey": "kurrama vku"
    },
    {
        "code": "ktm",
        "name": "Kurti",
        "searchKey": "kurti ktm"
    },
    {
        "code": "xkz",
        "name": "Kurtokha",
        "searchKey": "kurtokha xkz"
    },
    {
        "code": "kyr",
        "name": "Kuruáya",
        "searchKey": "kuruaya kyr"
    },
    {
        "code": "kjr",
        "name": "Kurudu",
        "searchKey": "kurudu kjr"
    },
    {
        "code": "kru",
        "name": "Kurukh",
        "searchKey": "kurukh kru"
    },
    {
        "code": "kus",
        "name": "Kusaal",
        "searchKey": "kusaal kus"
    },
    {
        "code": "ksg",
        "name": "Kusaghe",
        "searchKey": "kusaghe ksg"
    },
    {
        "code": "kuh",
        "name": "Kushi",
        "searchKey": "kushi kuh"
    },
    {
        "code": "ksv",
        "name": "Kusu",
        "searchKey": "kusu ksv"
    },
    {
        "code": "kgg",
        "name": "Kusunda",
        "searchKey": "kusunda kgg"
    },
    {
        "code": "kub",
        "name": "Kutep",
        "searchKey": "kutep kub"
    },
    {
        "code": "xut",
        "name": "Kuthant",
        "searchKey": "kuthant xut"
    },
    {
        "code": "skm",
        "name": "Kutong",
        "searchKey": "kutong skm"
    },
    {
        "code": "kpa",
        "name": "Kutto",
        "searchKey": "kutto kpa"
    },
    {
        "code": "kdc",
        "name": "Kutu",
        "searchKey": "kutu kdc"
    },
    {
        "code": "khj",
        "name": "Kuturmi",
        "searchKey": "kuturmi khj"
    },
    {
        "code": "thd",
        "name": "Kuuk Thaayorre",
        "searchKey": "kuuk thaayorre thd"
    },
    {
        "code": "kuy",
        "name": "Kuuku-Ya'u",
        "searchKey": "kuuku-yau kuy"
    },
    {
        "code": "uky",
        "name": "Kuuk-Yak",
        "searchKey": "kuuk-yak uky"
    },
    {
        "code": "olu",
        "name": "Kuvale",
        "searchKey": "kuvale olu"
    },
    {
        "code": "kxv",
        "name": "Kuvi",
        "searchKey": "kuvi kxv"
    },
    {
        "code": "blh",
        "name": "Kuwaa",
        "searchKey": "kuwaa blh"
    },
    {
        "code": "cwt",
        "name": "Kuwaataay",
        "searchKey": "kuwaataay cwt"
    },
    {
        "code": "woa",
        "name": "Kuwema",
        "searchKey": "kuwema woa"
    },
    {
        "code": "kdt",
        "name": "Kuy",
        "searchKey": "kuy kdt"
    },
    {
        "code": "fkv",
        "name": "Kven Finnish",
        "searchKey": "kven finnish fkv"
    },
    {
        "code": "kwb",
        "name": "Kwa",
        "searchKey": "kwa kwb"
    },
    {
        "code": "bko",
        "name": "Kwa'",
        "searchKey": "kwa bko"
    },
    {
        "code": "ksq",
        "name": "Kwaami",
        "searchKey": "kwaami ksq"
    },
    {
        "code": "kwz",
        "name": "Kwadi",
        "searchKey": "kwadi kwz"
    },
    {
        "code": "wka",
        "name": "Kw'adza",
        "searchKey": "kwadza wka"
    },
    {
        "code": "kwd",
        "name": "Kwaio",
        "searchKey": "kwaio kwd"
    },
    {
        "code": "kdz",
        "name": "Kwaja",
        "searchKey": "kwaja kdz"
    },
    {
        "code": "kwu",
        "name": "Kwakum",
        "searchKey": "kwakum kwu"
    },
    {
        "code": "kwk",
        "name": "Kwak'wala",
        "searchKey": "kwakwala kwk"
    },
    {
        "code": "qwt",
        "name": "Kwalhioqua-Tlatskanai",
        "searchKey": "kwalhioqua-tlatskanai qwt"
    },
    {
        "code": "kmq",
        "name": "Kwama",
        "searchKey": "kwama kmq"
    },
    {
        "code": "kwm",
        "name": "Kwambi",
        "searchKey": "kwambi kwm"
    },
    {
        "code": "tnk",
        "name": "Kwamera",
        "searchKey": "kwamera tnk"
    },
    {
        "code": "ktf",
        "name": "Kwami",
        "searchKey": "kwami ktf"
    },
    {
        "code": "okk",
        "name": "Kwamtim One",
        "searchKey": "kwamtim one okk"
    },
    {
        "code": "xdo",
        "name": "Kwandu",
        "searchKey": "kwandu xdo"
    },
    {
        "code": "kvi",
        "name": "Kwang",
        "searchKey": "kwang kvi"
    },
    {
        "code": "kwj",
        "name": "Kwanga",
        "searchKey": "kwanga kwj"
    },
    {
        "code": "kwn",
        "name": "Kwangali",
        "searchKey": "kwangali kwn"
    },
    {
        "code": "knp",
        "name": "Kwanja",
        "searchKey": "kwanja knp"
    },
    {
        "code": "kwf",
        "name": "Kwara'ae",
        "searchKey": "kwaraae kwf"
    },
    {
        "code": "nmg",
        "name": "Kwasio",
        "searchKey": "kwasio nmg"
    },
    {
        "code": "kya",
        "name": "Kwaya",
        "searchKey": "kwaya kya"
    },
    {
        "code": "xwa",
        "name": "Kwaza",
        "searchKey": "kwaza xwa"
    },
    {
        "code": "xwg",
        "name": "Kwegu",
        "searchKey": "kwegu xwg"
    },
    {
        "code": "kwr",
        "name": "Kwer",
        "searchKey": "kwer kwr"
    },
    {
        "code": "kwe",
        "name": "Kwerba",
        "searchKey": "kwerba kwe"
    },
    {
        "code": "xwr",
        "name": "Kwerba Mamberamo",
        "searchKey": "kwerba mamberamo xwr"
    },
    {
        "code": "cwe",
        "name": "Kwere",
        "searchKey": "kwere cwe"
    },
    {
        "code": "kkb",
        "name": "Kwerisa",
        "searchKey": "kwerisa kkb"
    },
    {
        "code": "kws",
        "name": "Kwese",
        "searchKey": "kwese kws"
    },
    {
        "code": "kwt",
        "name": "Kwesten",
        "searchKey": "kwesten kwt"
    },
    {
        "code": "gww",
        "name": "Kwini",
        "searchKey": "kwini gww"
    },
    {
        "code": "kuc",
        "name": "Kwinsu",
        "searchKey": "kwinsu kuc"
    },
    {
        "code": "kww",
        "name": "Kwinti",
        "searchKey": "kwinti kww"
    },
    {
        "code": "kmo",
        "name": "Kwoma",
        "searchKey": "kwoma kmo"
    },
    {
        "code": "kwo",
        "name": "Kwomtari",
        "searchKey": "kwomtari kwo"
    },
    {
        "code": "xuu",
        "name": "Kxoe",
        "searchKey": "kxoe xuu"
    },
    {
        "code": "bka",
        "name": "Kyak",
        "searchKey": "kyak bka"
    },
    {
        "code": "kyc",
        "name": "Kyaka",
        "searchKey": "kyaka kyc"
    },
    {
        "code": "tye",
        "name": "Kyanga",
        "searchKey": "kyanga tye"
    },
    {
        "code": "nqq",
        "name": "Kyan-Karyaw Naga",
        "searchKey": "kyan-karyaw naga nqq"
    },
    {
        "code": "kql",
        "name": "Kyenele",
        "searchKey": "kyenele kql"
    },
    {
        "code": "kgy",
        "name": "Kyerung",
        "searchKey": "kyerung kgy"
    },
    {
        "code": "bwj",
        "name": "Láá Láá Bwamu",
        "searchKey": "laa laa bwamu bwj"
    },
    {
        "code": "ldn",
        "name": "Láadan",
        "searchKey": "laadan ldn"
    },
    {
        "code": "gdm",
        "name": "Laal",
        "searchKey": "laal gdm"
    },
    {
        "code": "ldi",
        "name": "Laari",
        "searchKey": "laari ldi"
    },
    {
        "code": "loh",
        "name": "Laarim",
        "searchKey": "laarim loh"
    },
    {
        "code": "lau",
        "name": "Laba",
        "searchKey": "laba lau"
    },
    {
        "code": "lbb",
        "name": "Label",
        "searchKey": "label lbb"
    },
    {
        "code": "lbi",
        "name": "La'bi",
        "searchKey": "labi lbi"
    },
    {
        "code": "jku",
        "name": "Labir",
        "searchKey": "labir jku"
    },
    {
        "code": "mwi",
        "name": "Labo",
        "searchKey": "labo mwi"
    },
    {
        "code": "ypb",
        "name": "Labo Phowa",
        "searchKey": "labo phowa ypb"
    },
    {
        "code": "lbu",
        "name": "Labu",
        "searchKey": "labu lbu"
    },
    {
        "code": "dtb",
        "name": "Labuk-Kinabatangan Kadazan",
        "searchKey": "labuk-kinabatangan kadazan dtb"
    },
    {
        "code": "lac",
        "name": "Lacandon",
        "searchKey": "lacandon lac"
    },
    {
        "code": "lbt",
        "name": "Lachi",
        "searchKey": "lachi lbt"
    },
    {
        "code": "zpa",
        "name": "Lachiguiri Zapotec",
        "searchKey": "lachiguiri zapotec zpa"
    },
    {
        "code": "zpl",
        "name": "Lachixío Zapotec",
        "searchKey": "lachixio zapotec zpl"
    },
    {
        "code": "lbj",
        "name": "Ladakhi",
        "searchKey": "ladakhi lbj"
    },
    {
        "code": "lld",
        "name": "Ladin",
        "searchKey": "ladin lld"
    },
    {
        "code": "lad",
        "name": "Ladino",
        "searchKey": "ladino lad"
    },
    {
        "code": "llj",
        "name": "Ladji Ladji",
        "searchKey": "ladji ladji llj"
    },
    {
        "code": "lkl",
        "name": "Laeko-Libuat",
        "searchKey": "laeko-libuat lkl"
    },
    {
        "code": "laf",
        "name": "Lafofa",
        "searchKey": "lafofa laf"
    },
    {
        "code": "lgb",
        "name": "Laghu",
        "searchKey": "laghu lgb"
    },
    {
        "code": "lgh",
        "name": "Laghuu",
        "searchKey": "laghuu lgh"
    },
    {
        "code": "kot",
        "name": "Lagwan",
        "searchKey": "lagwan kot"
    },
    {
        "code": "lhh",
        "name": "Laha (Indonesia)",
        "searchNames": [
            "Laha"
        ],
        "searchKey": "laha indonesia lhh laha"
    },
    {
        "code": "lha",
        "name": "Laha (Viet Nam)",
        "searchNames": [
            "Laha"
        ],
        "searchKey": "laha viet nam lha laha"
    },
    {
        "code": "lhn",
        "name": "Lahanan",
        "searchKey": "lahanan lhn"
    },
    {
        "code": "lah",
        "name": "Lahnda",
        "searchKey": "lahnda lah"
    },
    {
        "code": "kvt",
        "name": "Lahta Karen",
        "searchKey": "lahta karen kvt"
    },
    {
        "code": "lhu",
        "name": "Lahu",
        "searchKey": "lahu lhu"
    },
    {
        "code": "lhi",
        "name": "Lahu Shi",
        "searchKey": "lahu shi lhi"
    },
    {
        "code": "lhl",
        "name": "Lahul Lohar",
        "searchKey": "lahul lohar lhl"
    },
    {
        "code": "lmx",
        "name": "Laimbue",
        "searchKey": "laimbue lmx"
    },
    {
        "code": "clj",
        "name": "Laitu Chin",
        "searchKey": "laitu chin clj"
    },
    {
        "code": "lji",
        "name": "Laiyolo",
        "searchKey": "laiyolo lji"
    },
    {
        "code": "lbe",
        "name": "Lak",
        "searchKey": "lak lbe"
    },
    {
        "code": "lap",
        "name": "Laka (Chad)",
        "searchNames": [
            "Laka"
        ],
        "searchKey": "laka chad lap laka"
    },
    {
        "code": "lka",
        "name": "Lakalei",
        "searchKey": "lakalei lka"
    },
    {
        "code": "lmw",
        "name": "Lake Miwok",
        "searchKey": "lake miwok lmw"
    },
    {
        "code": "lkh",
        "name": "Lakha",
        "searchKey": "lakha lkh"
    },
    {
        "code": "lki",
        "name": "Laki",
        "searchKey": "laki lki"
    },
    {
        "code": "lbc",
        "name": "Lakkia",
        "searchKey": "lakkia lbc"
    },
    {
        "code": "lkn",
        "name": "Lakon",
        "searchKey": "lakon lkn"
    },
    {
        "code": "lkd",
        "name": "Lakondê",
        "searchKey": "lakonde lkd"
    },
    {
        "code": "lkt",
        "name": "Lakota",
        "searchKey": "lakota lkt"
    },
    {
        "code": "dic",
        "name": "Lakota Dida",
        "searchKey": "lakota dida dic"
    },
    {
        "code": "lxm",
        "name": "Lakurumau",
        "searchKey": "lakurumau lxm"
    },
    {
        "code": "nrz",
        "name": "Lala",
        "searchKey": "lala nrz"
    },
    {
        "code": "leb",
        "name": "Lala-Bisa",
        "searchKey": "lala-bisa leb"
    },
    {
        "code": "cnl",
        "name": "Lalana Chinantec",
        "searchKey": "lalana chinantec cnl"
    },
    {
        "code": "lla",
        "name": "Lala-Roba",
        "searchKey": "lala-roba lla"
    },
    {
        "code": "lal",
        "name": "Lalia",
        "searchKey": "lalia lal"
    },
    {
        "code": "las",
        "name": "Lama (Togo)",
        "searchNames": [
            "Lama"
        ],
        "searchKey": "lama togo las lama"
    },
    {
        "code": "lay",
        "name": "Lama Bai",
        "searchKey": "lama bai lay"
    },
    {
        "code": "slp",
        "name": "Lamaholot",
        "searchKey": "lamaholot slp"
    },
    {
        "code": "lby",
        "name": "Lamalama",
        "searchKey": "lamalama lby"
    },
    {
        "code": "lmr",
        "name": "Lamalera",
        "searchKey": "lamalera lmr"
    },
    {
        "code": "hia",
        "name": "Lamang",
        "searchKey": "lamang hia"
    },
    {
        "code": "lmq",
        "name": "Lamatuka",
        "searchKey": "lamatuka lmq"
    },
    {
        "code": "lam",
        "name": "Lamba",
        "searchKey": "lamba lam"
    },
    {
        "code": "lmn",
        "name": "Lambadi",
        "searchKey": "lambadi lmn"
    },
    {
        "code": "quf",
        "name": "Lambayeque Quechua",
        "searchKey": "lambayeque quechua quf"
    },
    {
        "code": "lmh",
        "name": "Lambichhong",
        "searchKey": "lambichhong lmh"
    },
    {
        "code": "lmy",
        "name": "Lamboya",
        "searchKey": "lamboya lmy"
    },
    {
        "code": "lai",
        "name": "Lambya",
        "searchKey": "lambya lai"
    },
    {
        "code": "bma",
        "name": "Lame",
        "searchKey": "lame bma"
    },
    {
        "code": "lmu",
        "name": "Lamenu",
        "searchKey": "lamenu lmu"
    },
    {
        "code": "ldh",
        "name": "Lamja-Dengsa-Tola",
        "searchKey": "lamja-dengsa-tola ldh"
    },
    {
        "code": "lmk",
        "name": "Lamkang",
        "searchKey": "lamkang lmk"
    },
    {
        "code": "lev",
        "name": "Lamma",
        "searchKey": "lamma lev"
    },
    {
        "code": "lns",
        "name": "Lamnso'",
        "searchKey": "lamnso lns"
    },
    {
        "code": "lmg",
        "name": "Lamogai",
        "searchKey": "lamogai lmg"
    },
    {
        "code": "ljp",
        "name": "Lampung Api",
        "searchKey": "lampung api ljp"
    },
    {
        "code": "abl",
        "name": "Lampung Nyo",
        "searchKey": "lampung nyo abl"
    },
    {
        "code": "llh",
        "name": "Lamu",
        "searchKey": "lamu llh"
    },
    {
        "code": "ruu",
        "name": "Lanas Lobu",
        "searchKey": "lanas lobu ruu"
    },
    {
        "code": "ldm",
        "name": "Landoma",
        "searchKey": "landoma ldm"
    },
    {
        "code": "lnm",
        "name": "Langam",
        "searchKey": "langam lnm"
    },
    {
        "code": "lna",
        "name": "Langbashe",
        "searchKey": "langbashe lna"
    },
    {
        "code": "yne",
        "name": "Lang'e",
        "searchKey": "lange yne"
    },
    {
        "code": "yln",
        "name": "Langnian Buyang",
        "searchKey": "langnian buyang yln"
    },
    {
        "code": "lgo",
        "name": "Lango (South Sudan)",
        "searchNames": [
            "Lango"
        ],
        "searchKey": "lango south sudan lgo lango"
    },
    {
        "code": "laj",
        "name": "Lango (Uganda)",
        "searchNames": [
            "Lango"
        ],
        "searchKey": "lango uganda laj lango"
    },
    {
        "code": "lng",
        "name": "Langobardic",
        "searchKey": "langobardic lng"
    },
    {
        "code": "sfb",
        "name": "Langue des signes de Belgique Francophone",
        "searchKey": "langue des signes de belgique francophone sfb"
    },
    {
        "code": "lnw",
        "name": "Lanima",
        "searchKey": "lanima lnw"
    },
    {
        "code": "lnh",
        "name": "Lanoh",
        "searchKey": "lanoh lnh"
    },
    {
        "code": "lao",
        "name": "Lao",
        "searchKey": "lao"
    },
    {
        "code": "nlq",
        "name": "Lao Naga",
        "searchKey": "lao naga nlq"
    },
    {
        "code": "cey",
        "name": "Laoktu Chin",
        "searchKey": "laoktu chin cey"
    },
    {
        "code": "lwm",
        "name": "Laomian",
        "searchKey": "laomian lwm"
    },
    {
        "code": "lbg",
        "name": "Laopang",
        "searchKey": "laopang lbg"
    },
    {
        "code": "lso",
        "name": "Laos Sign Language",
        "searchKey": "laos sign language lso"
    },
    {
        "code": "ztl",
        "name": "Lapaguía-Guivini Zapotec",
        "searchKey": "lapaguia-guivini zapotec ztl"
    },
    {
        "code": "lrg",
        "name": "Laragia",
        "searchKey": "laragia lrg"
    },
    {
        "code": "lrt",
        "name": "Larantuka Malay",
        "searchKey": "larantuka malay lrt"
    },
    {
        "code": "lbz",
        "name": "Lardil",
        "searchKey": "lardil lbz"
    },
    {
        "code": "lrv",
        "name": "Larevat",
        "searchKey": "larevat lrv"
    },
    {
        "code": "hmd",
        "name": "Large Flowery Miao",
        "searchKey": "large flowery miao hmd"
    },
    {
        "code": "lrl",
        "name": "Lari",
        "searchKey": "lari lrl"
    },
    {
        "code": "alo",
        "name": "Larike-Wakasihu",
        "searchKey": "larike-wakasihu alo"
    },
    {
        "code": "lro",
        "name": "Laro",
        "searchKey": "laro lro"
    },
    {
        "code": "lar",
        "name": "Larteh",
        "searchKey": "larteh lar"
    },
    {
        "code": "lan",
        "name": "Laru",
        "searchKey": "laru lan"
    },
    {
        "code": "zcd",
        "name": "Las Delicias Zapotec",
        "searchKey": "las delicias zapotec zcd"
    },
    {
        "code": "llm",
        "name": "Lasalimu",
        "searchKey": "lasalimu llm"
    },
    {
        "code": "lsa",
        "name": "Lasgerdi",
        "searchKey": "lasgerdi lsa"
    },
    {
        "code": "lsi",
        "name": "Lashi",
        "searchKey": "lashi lsi"
    },
    {
        "code": "lss",
        "name": "Lasi",
        "searchKey": "lasi lss"
    },
    {
        "code": "ltc",
        "name": "Late Middle Chinese",
        "searchKey": "late middle chinese ltc"
    },
    {
        "code": "ltg",
        "name": "Latgalian",
        "searchKey": "latgalian ltg"
    },
    {
        "code": "lat",
        "name": "Latin",
        "searchKey": "latin lat"
    },
    {
        "code": "ltu",
        "name": "Latu",
        "searchKey": "latu ltu"
    },
    {
        "code": "ltn",
        "name": "Latundê",
        "searchKey": "latunde ltn"
    },
    {
        "code": "lav",
        "name": "Latvian",
        "searchKey": "latvian lav"
    },
    {
        "code": "lsl",
        "name": "Latvian Sign Language",
        "searchKey": "latvian sign language lsl"
    },
    {
        "code": "llu",
        "name": "Lau",
        "searchKey": "lau llu"
    },
    {
        "code": "luf",
        "name": "Laua",
        "searchKey": "laua luf"
    },
    {
        "code": "llx",
        "name": "Lauan",
        "searchKey": "lauan llx"
    },
    {
        "code": "law",
        "name": "Lauje",
        "searchKey": "lauje law"
    },
    {
        "code": "lur",
        "name": "Laura",
        "searchKey": "laura lur"
    },
    {
        "code": "lre",
        "name": "Laurentian",
        "searchKey": "laurentian lre"
    },
    {
        "code": "clt",
        "name": "Lautu Chin",
        "searchKey": "lautu chin clt"
    },
    {
        "code": "lbv",
        "name": "Lavatbura-Lamusong",
        "searchKey": "lavatbura-lamusong lbv"
    },
    {
        "code": "lbo",
        "name": "Laven",
        "searchKey": "laven lbo"
    },
    {
        "code": "lvi",
        "name": "Lavi",
        "searchKey": "lavi lvi"
    },
    {
        "code": "lvk",
        "name": "Lavukaleve",
        "searchKey": "lavukaleve lvk"
    },
    {
        "code": "lbx",
        "name": "Lawangan",
        "searchKey": "lawangan lbx"
    },
    {
        "code": "lwu",
        "name": "Lawu",
        "searchKey": "lawu lwu"
    },
    {
        "code": "tgi",
        "name": "Lawunuia",
        "searchKey": "lawunuia tgi"
    },
    {
        "code": "lya",
        "name": "Layakha",
        "searchKey": "layakha lya"
    },
    {
        "code": "lzz",
        "name": "Laz",
        "searchKey": "laz lzz"
    },
    {
        "code": "cle",
        "name": "Lealao Chinantec",
        "searchKey": "lealao chinantec cle"
    },
    {
        "code": "lec",
        "name": "Leco",
        "searchKey": "leco lec"
    },
    {
        "code": "lew",
        "name": "Ledo Kaili",
        "searchKey": "ledo kaili lew"
    },
    {
        "code": "ldk",
        "name": "Leelau",
        "searchKey": "leelau ldk"
    },
    {
        "code": "lfa",
        "name": "Lefa",
        "searchKey": "lefa lfa"
    },
    {
        "code": "lgm",
        "name": "Lega-Mwenga",
        "searchKey": "lega-mwenga lgm"
    },
    {
        "code": "lea",
        "name": "Lega-Shabunda",
        "searchKey": "lega-shabunda lea"
    },
    {
        "code": "agb",
        "name": "Legbo",
        "searchKey": "legbo agb"
    },
    {
        "code": "lcc",
        "name": "Legenyem",
        "searchKey": "legenyem lcc"
    },
    {
        "code": "tql",
        "name": "Lehali",
        "searchKey": "lehali tql"
    },
    {
        "code": "urr",
        "name": "Lehalurup",
        "searchKey": "lehalurup urr"
    },
    {
        "code": "cae",
        "name": "Lehar",
        "searchKey": "lehar cae"
    },
    {
        "code": "lzn",
        "name": "Leinong Naga",
        "searchKey": "leinong naga lzn"
    },
    {
        "code": "lek",
        "name": "Leipon",
        "searchKey": "leipon lek"
    },
    {
        "code": "luh",
        "name": "Leizhou Chinese",
        "searchKey": "leizhou chinese luh"
    },
    {
        "code": "llk",
        "name": "Lelak",
        "searchKey": "lelak llk"
    },
    {
        "code": "lln",
        "name": "Lele (Chad)",
        "searchNames": [
            "Lele"
        ],
        "searchKey": "lele chad lln lele"
    },
    {
        "code": "lel",
        "name": "Lele (Democratic Republic of Congo)",
        "searchNames": [
            "Lele"
        ],
        "searchKey": "lele democratic republic of congo lel lele"
    },
    {
        "code": "llc",
        "name": "Lele (Guinea)",
        "searchNames": [
            "Lele"
        ],
        "searchKey": "lele guinea llc lele"
    },
    {
        "code": "lle",
        "name": "Lele (Papua New Guinea)",
        "searchNames": [
            "Lele"
        ],
        "searchKey": "lele papua new guinea lle lele"
    },
    {
        "code": "lef",
        "name": "Lelemi",
        "searchKey": "lelemi lef"
    },
    {
        "code": "lpa",
        "name": "Lelepa",
        "searchKey": "lelepa lpa"
    },
    {
        "code": "leq",
        "name": "Lembena",
        "searchKey": "lembena leq"
    },
    {
        "code": "lrz",
        "name": "Lemerig",
        "searchKey": "lemerig lrz"
    },
    {
        "code": "lei",
        "name": "Lemio",
        "searchKey": "lemio lei"
    },
    {
        "code": "xle",
        "name": "Lemnian",
        "searchKey": "lemnian xle"
    },
    {
        "code": "ley",
        "name": "Lemolang",
        "searchKey": "lemolang ley"
    },
    {
        "code": "ldj",
        "name": "Lemoro",
        "searchKey": "lemoro ldj"
    },
    {
        "code": "tnl",
        "name": "Lenakel",
        "searchKey": "lenakel tnl"
    },
    {
        "code": "len",
        "name": "Lenca",
        "searchKey": "lenca len"
    },
    {
        "code": "led",
        "name": "Lendu",
        "searchKey": "lendu led"
    },
    {
        "code": "lgi",
        "name": "Lengilu",
        "searchKey": "lengilu lgi"
    },
    {
        "code": "lgr",
        "name": "Lengo",
        "searchKey": "lengo lgr"
    },
    {
        "code": "lej",
        "name": "Lengola",
        "searchKey": "lengola lej"
    },
    {
        "code": "lnj",
        "name": "Leningitij",
        "searchKey": "leningitij lnj"
    },
    {
        "code": "leh",
        "name": "Lenje",
        "searchKey": "lenje leh"
    },
    {
        "code": "ler",
        "name": "Lenkau",
        "searchKey": "lenkau ler"
    },
    {
        "code": "ldg",
        "name": "Lenyima",
        "searchKey": "lenyima ldg"
    },
    {
        "code": "lep",
        "name": "Lepcha",
        "searchKey": "lepcha lep"
    },
    {
        "code": "lpe",
        "name": "Lepki",
        "searchKey": "lepki lpe"
    },
    {
        "code": "xlp",
        "name": "Lepontic",
        "searchKey": "lepontic xlp"
    },
    {
        "code": "gnh",
        "name": "Lere",
        "searchKey": "lere gnh"
    },
    {
        "code": "les",
        "name": "Lese",
        "searchKey": "lese les"
    },
    {
        "code": "let",
        "name": "Lesing-Gelimi",
        "searchKey": "lesing-gelimi let"
    },
    {
        "code": "nms",
        "name": "Letemboi",
        "searchKey": "letemboi nms"
    },
    {
        "code": "leo",
        "name": "Leti (Cameroon)",
        "searchNames": [
            "Leti"
        ],
        "searchKey": "leti cameroon leo leti"
    },
    {
        "code": "lti",
        "name": "Leti (Indonesia)",
        "searchNames": [
            "Leti"
        ],
        "searchKey": "leti indonesia lti leti"
    },
    {
        "code": "apc",
        "name": "Levantine Arabic",
        "searchKey": "levantine arabic apc"
    },
    {
        "code": "lvu",
        "name": "Levuka",
        "searchKey": "levuka lvu"
    },
    {
        "code": "lww",
        "name": "Lewo",
        "searchKey": "lewo lww"
    },
    {
        "code": "lwe",
        "name": "Lewo Eleng",
        "searchKey": "lewo eleng lwe"
    },
    {
        "code": "lwt",
        "name": "Lewotobi",
        "searchKey": "lewotobi lwt"
    },
    {
        "code": "ayi",
        "name": "Leyigha",
        "searchKey": "leyigha ayi"
    },
    {
        "code": "lez",
        "name": "Lezghian",
        "searchKey": "lezghian lez"
    },
    {
        "code": "lhp",
        "name": "Lhokpu",
        "searchKey": "lhokpu lhp"
    },
    {
        "code": "lhm",
        "name": "Lhomi",
        "searchKey": "lhomi lhm"
    },
    {
        "code": "lix",
        "name": "Liabuku",
        "searchKey": "liabuku lix"
    },
    {
        "code": "ste",
        "name": "Liana-Seti",
        "searchKey": "liana-seti ste"
    },
    {
        "code": "njn",
        "name": "Liangmai Naga",
        "searchKey": "liangmai naga njn"
    },
    {
        "code": "zln",
        "name": "Lianshan Zhuang",
        "searchKey": "lianshan zhuang zln"
    },
    {
        "code": "xpe",
        "name": "Liberia Kpelle",
        "searchKey": "liberia kpelle xpe"
    },
    {
        "code": "lir",
        "name": "Liberian English",
        "searchKey": "liberian english lir"
    },
    {
        "code": "liq",
        "name": "Libido",
        "searchKey": "libido liq"
    },
    {
        "code": "liz",
        "name": "Libinza",
        "searchKey": "libinza liz"
    },
    {
        "code": "lbl",
        "name": "Libon Bikol",
        "searchKey": "libon bikol lbl"
    },
    {
        "code": "xli",
        "name": "Liburnian",
        "searchKey": "liburnian xli"
    },
    {
        "code": "ayl",
        "name": "Libyan Arabic",
        "searchKey": "libyan arabic ayl"
    },
    {
        "code": "lbs",
        "name": "Libyan Sign Language",
        "searchKey": "libyan sign language lbs"
    },
    {
        "code": "add",
        "name": "Lidzonka",
        "searchKey": "lidzonka add"
    },
    {
        "code": "lig",
        "name": "Ligbi",
        "searchKey": "ligbi lig"
    },
    {
        "code": "lgz",
        "name": "Ligenza",
        "searchKey": "ligenza lgz"
    },
    {
        "code": "lij",
        "name": "Ligurian",
        "searchKey": "ligurian lij"
    },
    {
        "code": "xlg",
        "name": "Ligurian (Ancient)",
        "searchNames": [
            "Ligurian"
        ],
        "searchKey": "ligurian ancient xlg ligurian"
    },
    {
        "code": "lih",
        "name": "Lihir",
        "searchKey": "lihir lih"
    },
    {
        "code": "mgi",
        "name": "Lijili",
        "searchKey": "lijili mgi"
    },
    {
        "code": "lik",
        "name": "Lika",
        "searchKey": "lika lik"
    },
    {
        "code": "lio",
        "name": "Liki",
        "searchKey": "liki lio"
    },
    {
        "code": "lie",
        "name": "Likila",
        "searchKey": "likila lie"
    },
    {
        "code": "kxx",
        "name": "Likuba",
        "searchKey": "likuba kxx"
    },
    {
        "code": "lib",
        "name": "Likum",
        "searchKey": "likum lib"
    },
    {
        "code": "kwc",
        "name": "Likwala",
        "searchKey": "likwala kwc"
    },
    {
        "code": "lll",
        "name": "Lilau",
        "searchKey": "lilau lll"
    },
    {
        "code": "lil",
        "name": "Lillooet",
        "searchKey": "lillooet lil"
    },
    {
        "code": "bme",
        "name": "Limassa",
        "searchKey": "limassa bme"
    },
    {
        "code": "lif",
        "name": "Limbu",
        "searchKey": "limbu lif"
    },
    {
        "code": "lmp",
        "name": "Limbum",
        "searchKey": "limbum lmp"
    },
    {
        "code": "lim",
        "name": "Limburgan",
        "searchKey": "limburgan lim"
    },
    {
        "code": "ylm",
        "name": "Limi",
        "searchKey": "limi ylm"
    },
    {
        "code": "lmc",
        "name": "Limilngan",
        "searchKey": "limilngan lmc"
    },
    {
        "code": "kmk",
        "name": "Limos Kalinga",
        "searchKey": "limos kalinga kmk"
    },
    {
        "code": "lab",
        "name": "Linear A",
        "searchKey": "linear a lab"
    },
    {
        "code": "lin",
        "name": "Lingala",
        "searchKey": "lingala lin"
    },
    {
        "code": "onb",
        "name": "Lingao",
        "searchKey": "lingao onb"
    },
    {
        "code": "lgk",
        "name": "Lingarak",
        "searchKey": "lingarak lgk"
    },
    {
        "code": "pml",
        "name": "Lingua Franca",
        "searchKey": "lingua franca pml"
    },
    {
        "code": "lfn",
        "name": "Lingua Franca Nova",
        "searchKey": "lingua franca nova lfn"
    },
    {
        "code": "ljl",
        "name": "Li'o",
        "searchKey": "lio ljl"
    },
    {
        "code": "apl",
        "name": "Lipan Apache",
        "searchKey": "lipan apache apl"
    },
    {
        "code": "lpo",
        "name": "Lipo",
        "searchKey": "lipo lpo"
    },
    {
        "code": "lcs",
        "name": "Lisabata-Nuniali",
        "searchKey": "lisabata-nuniali lcs"
    },
    {
        "code": "lcl",
        "name": "Lisela",
        "searchKey": "lisela lcl"
    },
    {
        "code": "lsh",
        "name": "Lish",
        "searchKey": "lish lsh"
    },
    {
        "code": "trg",
        "name": "Lishán Didán",
        "searchKey": "lishan didan trg"
    },
    {
        "code": "lsd",
        "name": "Lishana Deni",
        "searchKey": "lishana deni lsd"
    },
    {
        "code": "aij",
        "name": "Lishanid Noshan",
        "searchKey": "lishanid noshan aij"
    },
    {
        "code": "lis",
        "name": "Lisu",
        "searchKey": "lisu lis"
    },
    {
        "code": "lzh",
        "name": "Literary Chinese",
        "searchKey": "literary chinese lzh"
    },
    {
        "code": "lit",
        "name": "Lithuanian",
        "searchKey": "lithuanian lit"
    },
    {
        "code": "lls",
        "name": "Lithuanian Sign Language",
        "searchKey": "lithuanian sign language lls"
    },
    {
        "code": "lzl",
        "name": "Litzlitz",
        "searchKey": "litzlitz lzl"
    },
    {
        "code": "zlj",
        "name": "Liujiang Zhuang",
        "searchKey": "liujiang zhuang zlj"
    },
    {
        "code": "zlq",
        "name": "Liuqian Zhuang",
        "searchKey": "liuqian zhuang zlq"
    },
    {
        "code": "liv",
        "name": "Liv",
        "searchKey": "liv"
    },
    {
        "code": "olo",
        "name": "Livvi",
        "searchKey": "livvi olo"
    },
    {
        "code": "lrk",
        "name": "Loarki",
        "searchKey": "loarki lrk"
    },
    {
        "code": "loq",
        "name": "Lobala",
        "searchKey": "lobala loq"
    },
    {
        "code": "lob",
        "name": "Lobi",
        "searchKey": "lobi lob"
    },
    {
        "code": "lbm",
        "name": "Lodhi",
        "searchKey": "lodhi lbm"
    },
    {
        "code": "lgq",
        "name": "Logba",
        "searchKey": "logba lgq"
    },
    {
        "code": "lqr",
        "name": "Logir",
        "searchKey": "logir lqr"
    },
    {
        "code": "log",
        "name": "Logo",
        "searchKey": "logo log"
    },
    {
        "code": "lof",
        "name": "Logol",
        "searchKey": "logol lof"
    },
    {
        "code": "rag",
        "name": "Logooli",
        "searchKey": "logooli rag"
    },
    {
        "code": "liu",
        "name": "Logorik",
        "searchKey": "logorik liu"
    },
    {
        "code": "src",
        "name": "Logudorese Sardinian",
        "searchKey": "logudorese sardinian src"
    },
    {
        "code": "lbr",
        "name": "Lohorung",
        "searchKey": "lohorung lbr"
    },
    {
        "code": "qvj",
        "name": "Loja Highland Quichua",
        "searchKey": "loja highland quichua qvj"
    },
    {
        "code": "jbo",
        "name": "Lojban",
        "searchKey": "lojban jbo"
    },
    {
        "code": "yaz",
        "name": "Lokaa",
        "searchKey": "lokaa yaz"
    },
    {
        "code": "loy",
        "name": "Loke",
        "searchKey": "loke loy"
    },
    {
        "code": "lok",
        "name": "Loko",
        "searchKey": "loko lok"
    },
    {
        "code": "lky",
        "name": "Lokoya",
        "searchKey": "lokoya lky"
    },
    {
        "code": "lcd",
        "name": "Lola",
        "searchKey": "lola lcd"
    },
    {
        "code": "llq",
        "name": "Lolak",
        "searchKey": "lolak llq"
    },
    {
        "code": "llg",
        "name": "Lole",
        "searchKey": "lole llg"
    },
    {
        "code": "llb",
        "name": "Lolo",
        "searchKey": "lolo llb"
    },
    {
        "code": "loa",
        "name": "Loloda",
        "searchKey": "loloda loa"
    },
    {
        "code": "ycl",
        "name": "Lolopo",
        "searchKey": "lolopo ycl"
    },
    {
        "code": "loi",
        "name": "Loma (Côte d'Ivoire)",
        "searchNames": [
            "Loma"
        ],
        "searchKey": "loma cote divoire loi loma"
    },
    {
        "code": "lom",
        "name": "Loma (Liberia)",
        "searchNames": [
            "Loma"
        ],
        "searchKey": "loma liberia lom loma"
    },
    {
        "code": "lmv",
        "name": "Lomaiviti",
        "searchKey": "lomaiviti lmv"
    },
    {
        "code": "rmi",
        "name": "Lomavren",
        "searchKey": "lomavren rmi"
    },
    {
        "code": "lmo",
        "name": "Lombard",
        "searchKey": "lombard lmo"
    },
    {
        "code": "lmi",
        "name": "Lombi",
        "searchKey": "lombi lmi"
    },
    {
        "code": "loo",
        "name": "Lombo",
        "searchKey": "lombo loo"
    },
    {
        "code": "ngl",
        "name": "Lomwe",
        "searchKey": "lomwe ngl"
    },
    {
        "code": "lce",
        "name": "Loncong",
        "searchKey": "loncong lce"
    },
    {
        "code": "lpn",
        "name": "Long Phuri Naga",
        "searchKey": "long phuri naga lpn"
    },
    {
        "code": "ttw",
        "name": "Long Wat",
        "searchKey": "long wat ttw"
    },
    {
        "code": "lgu",
        "name": "Longgu",
        "searchKey": "longgu lgu"
    },
    {
        "code": "wok",
        "name": "Longto",
        "searchKey": "longto wok"
    },
    {
        "code": "lnu",
        "name": "Longuda",
        "searchKey": "longuda lnu"
    },
    {
        "code": "los",
        "name": "Loniu",
        "searchKey": "loniu los"
    },
    {
        "code": "crc",
        "name": "Lonwolwol",
        "searchKey": "lonwolwol crc"
    },
    {
        "code": "lnz",
        "name": "Lonzo",
        "searchKey": "lonzo lnz"
    },
    {
        "code": "ldo",
        "name": "Loo",
        "searchKey": "loo ldo"
    },
    {
        "code": "lop",
        "name": "Lopa",
        "searchKey": "lopa lop"
    },
    {
        "code": "lov",
        "name": "Lopi",
        "searchKey": "lopi lov"
    },
    {
        "code": "lpx",
        "name": "Lopit",
        "searchKey": "lopit lpx"
    },
    {
        "code": "lrn",
        "name": "Lorang",
        "searchKey": "lorang lrn"
    },
    {
        "code": "lnn",
        "name": "Lorediakarkar",
        "searchKey": "lorediakarkar lnn"
    },
    {
        "code": "spq",
        "name": "Loreto-Ucayali Spanish",
        "searchKey": "loreto-ucayali spanish spq"
    },
    {
        "code": "uvl",
        "name": "Lote",
        "searchKey": "lote uvl"
    },
    {
        "code": "njh",
        "name": "Lotha Naga",
        "searchKey": "lotha naga njh"
    },
    {
        "code": "lht",
        "name": "Lo-Toga",
        "searchKey": "lo-toga lht"
    },
    {
        "code": "dtr",
        "name": "Lotud",
        "searchKey": "lotud dtr"
    },
    {
        "code": "loj",
        "name": "Lou",
        "searchKey": "lou loj"
    },
    {
        "code": "lou",
        "name": "Louisiana Creole",
        "searchKey": "louisiana creole lou"
    },
    {
        "code": "lox",
        "name": "Loun",
        "searchKey": "loun lox"
    },
    {
        "code": "xlo",
        "name": "Loup A",
        "searchKey": "loup a xlo"
    },
    {
        "code": "xlb",
        "name": "Loup B",
        "searchKey": "loup b xlb"
    },
    {
        "code": "nds",
        "name": "Low German",
        "searchKey": "low german nds"
    },
    {
        "code": "xbb",
        "name": "Lower Burdekin",
        "searchKey": "lower burdekin xbb"
    },
    {
        "code": "cea",
        "name": "Lower Chehalis",
        "searchKey": "lower chehalis cea"
    },
    {
        "code": "dni",
        "name": "Lower Grand Valley Dani",
        "searchKey": "lower grand valley dani dni"
    },
    {
        "code": "nsb",
        "name": "Lower Nossob",
        "searchKey": "lower nossob nsb"
    },
    {
        "code": "sli",
        "name": "Lower Silesian",
        "searchKey": "lower silesian sli"
    },
    {
        "code": "dsb",
        "name": "Lower Sorbian",
        "searchKey": "lower sorbian dsb"
    },
    {
        "code": "axl",
        "name": "Lower Southern Aranda",
        "searchKey": "lower southern aranda axl"
    },
    {
        "code": "taa",
        "name": "Lower Tanana",
        "searchKey": "lower tanana taa"
    },
    {
        "code": "tto",
        "name": "Lower Ta'oih",
        "searchKey": "lower taoih tto"
    },
    {
        "code": "clo",
        "name": "Lowland Oaxaca Chontal",
        "searchKey": "lowland oaxaca chontal clo"
    },
    {
        "code": "tac",
        "name": "Lowland Tarahumara",
        "searchKey": "lowland tarahumara tac"
    },
    {
        "code": "ztp",
        "name": "Loxicha Zapotec",
        "searchKey": "loxicha zapotec ztp"
    },
    {
        "code": "loz",
        "name": "Lozi",
        "searchKey": "lozi loz"
    },
    {
        "code": "khb",
        "name": "Lü",
        "searchKey": "lu khb"
    },
    {
        "code": "lex",
        "name": "Luang",
        "searchKey": "luang lex"
    },
    {
        "code": "lub",
        "name": "Luba-Katanga",
        "searchKey": "luba-katanga lub"
    },
    {
        "code": "lua",
        "name": "Luba-Lulua",
        "searchKey": "luba-lulua lua"
    },
    {
        "code": "kcc",
        "name": "Lubila",
        "searchKey": "lubila kcc"
    },
    {
        "code": "lcf",
        "name": "Lubu",
        "searchKey": "lubu lcf"
    },
    {
        "code": "knb",
        "name": "Lubuagan Kalinga",
        "searchKey": "lubuagan kalinga knb"
    },
    {
        "code": "lch",
        "name": "Luchazi",
        "searchKey": "luchazi lch"
    },
    {
        "code": "luq",
        "name": "Lucumi",
        "searchKey": "lucumi luq"
    },
    {
        "code": "lud",
        "name": "Ludian",
        "searchKey": "ludian lud"
    },
    {
        "code": "ldq",
        "name": "Lufu",
        "searchKey": "lufu ldq"
    },
    {
        "code": "lgg",
        "name": "Lugbara",
        "searchKey": "lugbara lgg"
    },
    {
        "code": "ruf",
        "name": "Luguru",
        "searchKey": "luguru ruf"
    },
    {
        "code": "lcq",
        "name": "Luhu",
        "searchKey": "luhu lcq"
    },
    {
        "code": "lum",
        "name": "Luimbi",
        "searchKey": "luimbi lum"
    },
    {
        "code": "lui",
        "name": "Luiseño",
        "searchKey": "luiseno lui"
    },
    {
        "code": "dop",
        "name": "Lukpa",
        "searchKey": "lukpa dop"
    },
    {
        "code": "ule",
        "name": "Lule",
        "searchKey": "lule ule"
    },
    {
        "code": "smj",
        "name": "Lule Sami",
        "searchKey": "lule sami smj"
    },
    {
        "code": "luu",
        "name": "Lumba-Yakkha",
        "searchKey": "lumba-yakkha luu"
    },
    {
        "code": "lup",
        "name": "Lumbu",
        "searchKey": "lumbu lup"
    },
    {
        "code": "lmd",
        "name": "Lumun",
        "searchKey": "lumun lmd"
    },
    {
        "code": "luj",
        "name": "Luna",
        "searchKey": "luna luj"
    },
    {
        "code": "luk",
        "name": "Lunanakha",
        "searchKey": "lunanakha luk"
    },
    {
        "code": "lun",
        "name": "Lunda",
        "searchKey": "lunda lun"
    },
    {
        "code": "lnd",
        "name": "Lundayeh",
        "searchKey": "lundayeh lnd"
    },
    {
        "code": "vmg",
        "name": "Lungalunga",
        "searchKey": "lungalunga vmg"
    },
    {
        "code": "lga",
        "name": "Lungga",
        "searchKey": "lungga lga"
    },
    {
        "code": "luw",
        "name": "Luo (Cameroon)",
        "searchNames": [
            "Luo"
        ],
        "searchKey": "luo cameroon luw luo"
    },
    {
        "code": "luo",
        "name": "Luo (Kenya and Tanzania)",
        "displayName": "Luo",
        "alternateNames": [
            "Dholuo"
        ],
        "countries": [
            "Kenya",
            "Tanzania"
        ],
        "script": "Latin",
        "searchNames": [
            "Luo"
        ],
        "searchKey": "luo kenya and tanzania luo"
    },
    {
        "code": "hml",
        "name": "Luopohe Hmong",
        "searchKey": "luopohe hmong hml"
    },
    {
        "code": "ldd",
        "name": "Luri",
        "searchKey": "luri ldd"
    },
    {
        "code": "lse",
        "name": "Lusengo",
        "searchKey": "lusengo lse"
    },
    {
        "code": "lus",
        "name": "Lushai",
        "searchKey": "lushai lus"
    },
    {
        "code": "lut",
        "name": "Lushootseed",
        "searchKey": "lushootseed lut"
    },
    {
        "code": "khl",
        "name": "Lusi",
        "searchKey": "lusi khl"
    },
    {
        "code": "xls",
        "name": "Lusitanian",
        "searchKey": "lusitanian xls"
    },
    {
        "code": "ndy",
        "name": "Lutos",
        "searchKey": "lutos ndy"
    },
    {
        "code": "lue",
        "name": "Luvale",
        "searchKey": "luvale lue"
    },
    {
        "code": "luv",
        "name": "Luwati",
        "searchKey": "luwati luv"
    },
    {
        "code": "lwo",
        "name": "Luwo",
        "searchKey": "luwo lwo"
    },
    {
        "code": "ltz",
        "name": "Luxembourgish",
        "searchKey": "luxembourgish ltz"
    },
    {
        "code": "lyn",
        "name": "Luyana",
        "searchKey": "luyana lyn"
    },
    {
        "code": "luy",
        "name": "Luyia",
        "searchKey": "luyia luy"
    },
    {
        "code": "lwa",
        "name": "Lwalu",
        "searchKey": "lwalu lwa"
    },
    {
        "code": "lvl",
        "name": "Lwel",
        "searchKey": "lwel lvl"
    },
    {
        "code": "xlc",
        "name": "Lycian",
        "searchKey": "lycian xlc"
    },
    {
        "code": "xld",
        "name": "Lydian",
        "searchKey": "lydian xld"
    },
    {
        "code": "lee",
        "name": "Lyélé",
        "searchKey": "lyele lee"
    },
    {
        "code": "lyg",
        "name": "Lyngngam",
        "searchKey": "lyngngam lyg"
    },
    {
        "code": "msj",
        "name": "Ma (Democratic Republic of Congo)",
        "searchNames": [
            "Ma"
        ],
        "searchKey": "ma democratic republic of congo msj ma"
    },
    {
        "code": "mjn",
        "name": "Ma (Papua New Guinea)",
        "searchNames": [
            "Ma"
        ],
        "searchKey": "ma papua new guinea mjn ma"
    },
    {
        "code": "skc",
        "name": "Ma Manda",
        "searchKey": "ma manda skc"
    },
    {
        "code": "cma",
        "name": "Maa",
        "searchKey": "maa cma"
    },
    {
        "code": "mew",
        "name": "Maaka",
        "searchKey": "maaka mew"
    },
    {
        "code": "mhy",
        "name": "Ma'anyan",
        "searchKey": "maanyan mhy"
    },
    {
        "code": "ffm",
        "name": "Maasina Fulfulde",
        "searchKey": "maasina fulfulde ffm"
    },
    {
        "code": "ymm",
        "name": "Maay",
        "searchKey": "maay ymm"
    },
    {
        "code": "mde",
        "name": "Maba (Chad)",
        "searchNames": [
            "Maba"
        ],
        "searchKey": "maba chad mde maba"
    },
    {
        "code": "mqa",
        "name": "Maba (Indonesia)",
        "searchNames": [
            "Maba"
        ],
        "searchKey": "maba indonesia mqa maba"
    },
    {
        "code": "mmz",
        "name": "Mabaale",
        "searchKey": "mabaale mmz"
    },
    {
        "code": "mfz",
        "name": "Mabaan",
        "searchKey": "mabaan mfz"
    },
    {
        "code": "kkg",
        "name": "Mabaka Valley Kalinga",
        "searchKey": "mabaka valley kalinga kkg"
    },
    {
        "code": "muj",
        "name": "Mabire",
        "searchKey": "mabire muj"
    },
    {
        "code": "mca",
        "name": "Maca",
        "searchKey": "maca mca"
    },
    {
        "code": "mcl",
        "name": "Macaguaje",
        "searchKey": "macaguaje mcl"
    },
    {
        "code": "mbn",
        "name": "Macaguán",
        "searchKey": "macaguan mbn"
    },
    {
        "code": "mzs",
        "name": "Macanese",
        "searchKey": "macanese mzs"
    },
    {
        "code": "mkd",
        "name": "Macedonian",
        "searchKey": "macedonian mkd"
    },
    {
        "code": "rup",
        "name": "Macedo-Romanian",
        "searchKey": "macedo-romanian rup"
    },
    {
        "code": "jmc",
        "name": "Machame",
        "searchKey": "machame jmc"
    },
    {
        "code": "mcb",
        "name": "Machiguenga",
        "searchKey": "machiguenga mcb"
    },
    {
        "code": "mpd",
        "name": "Machinere",
        "searchKey": "machinere mpd"
    },
    {
        "code": "mvw",
        "name": "Machinga",
        "searchKey": "machinga mvw"
    },
    {
        "code": "wpc",
        "name": "Maco",
        "searchKey": "maco wpc"
    },
    {
        "code": "myy",
        "name": "Macuna",
        "searchKey": "macuna myy"
    },
    {
        "code": "mbc",
        "name": "Macushi",
        "searchKey": "macushi mbc"
    },
    {
        "code": "mxu",
        "name": "Mada (Cameroon)",
        "searchNames": [
            "Mada"
        ],
        "searchKey": "mada cameroon mxu mada"
    },
    {
        "code": "mda",
        "name": "Mada (Nigeria)",
        "searchNames": [
            "Mada"
        ],
        "searchKey": "mada nigeria mda mada"
    },
    {
        "code": "mzc",
        "name": "Madagascar Sign Language",
        "searchKey": "madagascar sign language mzc"
    },
    {
        "code": "mmx",
        "name": "Madak",
        "searchKey": "madak mmx"
    },
    {
        "code": "dmd",
        "name": "Madhi Madhi",
        "searchKey": "madhi madhi dmd"
    },
    {
        "code": "grg",
        "name": "Madi",
        "searchKey": "madi grg"
    },
    {
        "code": "mhi",
        "name": "Ma'di",
        "searchKey": "madi mhi"
    },
    {
        "code": "mad",
        "name": "Madurese",
        "searchKey": "madurese mad"
    },
    {
        "code": "mme",
        "name": "Mae",
        "searchKey": "mae mme"
    },
    {
        "code": "hmk",
        "name": "Maek",
        "searchKey": "maek hmk"
    },
    {
        "code": "itt",
        "name": "Maeng Itneg",
        "searchKey": "maeng itneg itt"
    },
    {
        "code": "maf",
        "name": "Mafa",
        "searchKey": "mafa maf"
    },
    {
        "code": "mkv",
        "name": "Mafea",
        "searchKey": "mafea mkv"
    },
    {
        "code": "mag",
        "name": "Magahi",
        "searchKey": "magahi mag"
    },
    {
        "code": "sgb",
        "name": "Mag-antsi Ayta",
        "searchKey": "mag-antsi ayta sgb"
    },
    {
        "code": "mgp",
        "name": "Magar",
        "searchKey": "magar mgp"
    },
    {
        "code": "ayt",
        "name": "Magbukun Ayta",
        "searchKey": "magbukun ayta ayt"
    },
    {
        "code": "xtm",
        "name": "Magdalena Peñasco Mixtec",
        "searchKey": "magdalena penasco mixtec xtm"
    },
    {
        "code": "gmd",
        "name": "Mághdì",
        "searchKey": "maghdi gmd"
    },
    {
        "code": "gkd",
        "name": "Magɨ (Madang Province)",
        "searchNames": [
            "Magɨ"
        ],
        "searchKey": "magɨ madang province gkd magɨ"
    },
    {
        "code": "blx",
        "name": "Mag-Indi Ayta",
        "searchKey": "mag-indi ayta blx"
    },
    {
        "code": "gmg",
        "name": "Magɨyi",
        "searchKey": "magɨyi gmg"
    },
    {
        "code": "gmx",
        "name": "Magoma",
        "searchKey": "magoma gmx"
    },
    {
        "code": "zgr",
        "name": "Magori",
        "searchKey": "magori zgr"
    },
    {
        "code": "mdh",
        "name": "Maguindanaon",
        "searchKey": "maguindanaon mdh"
    },
    {
        "code": "mjx",
        "name": "Mahali",
        "searchKey": "mahali mjx"
    },
    {
        "code": "pmh",
        "name": "Māhārāṣṭri Prākrit",
        "searchKey": "maharastri prakrit pmh"
    },
    {
        "code": "bfz",
        "name": "Mahasu Pahari",
        "searchKey": "mahasu pahari bfz"
    },
    {
        "code": "mjy",
        "name": "Mahican",
        "searchKey": "mahican mjy"
    },
    {
        "code": "mhb",
        "name": "Mahongwe",
        "searchKey": "mahongwe mhb"
    },
    {
        "code": "mxx",
        "name": "Mahou",
        "searchKey": "mahou mxx"
    },
    {
        "code": "ayz",
        "name": "Mai Brat",
        "searchKey": "mai brat ayz"
    },
    {
        "code": "sks",
        "name": "Maia",
        "searchKey": "maia sks"
    },
    {
        "code": "mzz",
        "name": "Maiadomu",
        "searchKey": "maiadomu mzz"
    },
    {
        "code": "tnh",
        "name": "Maiani",
        "searchKey": "maiani tnh"
    },
    {
        "code": "mmm",
        "name": "Maii",
        "searchKey": "maii mmm"
    },
    {
        "code": "mgu",
        "name": "Mailu",
        "searchKey": "mailu mgu"
    },
    {
        "code": "cwb",
        "name": "Maindo",
        "searchKey": "maindo cwb"
    },
    {
        "code": "vmf",
        "name": "Mainfränkisch",
        "searchKey": "mainfrankisch vmf"
    },
    {
        "code": "xkl",
        "name": "Mainstream Kenyah",
        "searchKey": "mainstream kenyah xkl"
    },
    {
        "code": "zrs",
        "name": "Mairasi",
        "searchKey": "mairasi zrs"
    },
    {
        "code": "mbq",
        "name": "Maisin",
        "searchKey": "maisin mbq"
    },
    {
        "code": "mai",
        "name": "Maithili",
        "searchKey": "maithili mai"
    },
    {
        "code": "wmm",
        "name": "Maiwa (Indonesia)",
        "searchNames": [
            "Maiwa"
        ],
        "searchKey": "maiwa indonesia wmm maiwa"
    },
    {
        "code": "mti",
        "name": "Maiwa (Papua New Guinea)",
        "searchNames": [
            "Maiwa"
        ],
        "searchKey": "maiwa papua new guinea mti maiwa"
    },
    {
        "code": "mum",
        "name": "Maiwala",
        "searchKey": "maiwala mum"
    },
    {
        "code": "mpe",
        "name": "Majang",
        "searchKey": "majang mpe"
    },
    {
        "code": "xmj",
        "name": "Majera",
        "searchKey": "majera xmj"
    },
    {
        "code": "mjz",
        "name": "Majhi",
        "searchKey": "majhi mjz"
    },
    {
        "code": "mmj",
        "name": "Majhwar",
        "searchKey": "majhwar mmj"
    },
    {
        "code": "kmd",
        "name": "Majukayang Kalinga",
        "searchKey": "majukayang kalinga kmd"
    },
    {
        "code": "mkg",
        "name": "Mak (China)",
        "searchNames": [
            "Mak"
        ],
        "searchKey": "mak china mkg mak"
    },
    {
        "code": "pbl",
        "name": "Mak (Nigeria)",
        "searchNames": [
            "Mak"
        ],
        "searchKey": "mak nigeria pbl mak"
    },
    {
        "code": "mcp",
        "name": "Makaa",
        "searchKey": "makaa mcp"
    },
    {
        "code": "myh",
        "name": "Makah",
        "searchKey": "makah myh"
    },
    {
        "code": "mjb",
        "name": "Makalero",
        "searchKey": "makalero mjb"
    },
    {
        "code": "mkz",
        "name": "Makasae",
        "searchKey": "makasae mkz"
    },
    {
        "code": "mak",
        "name": "Makasar",
        "searchKey": "makasar mak"
    },
    {
        "code": "mfp",
        "name": "Makassar Malay",
        "searchKey": "makassar malay mfp"
    },
    {
        "code": "aup",
        "name": "Makayam",
        "searchKey": "makayam aup"
    },
    {
        "code": "vmw",
        "name": "Makhuwa",
        "searchKey": "makhuwa vmw"
    },
    {
        "code": "xmc",
        "name": "Makhuwa-Marrevone",
        "searchKey": "makhuwa-marrevone xmc"
    },
    {
        "code": "mgh",
        "name": "Makhuwa-Meetto",
        "searchKey": "makhuwa-meetto mgh"
    },
    {
        "code": "mhm",
        "name": "Makhuwa-Moniga",
        "searchKey": "makhuwa-moniga mhm"
    },
    {
        "code": "xsq",
        "name": "Makhuwa-Saka",
        "searchKey": "makhuwa-saka xsq"
    },
    {
        "code": "vmk",
        "name": "Makhuwa-Shirima",
        "searchKey": "makhuwa-shirima vmk"
    },
    {
        "code": "mgf",
        "name": "Maklew",
        "searchKey": "maklew mgf"
    },
    {
        "code": "zmh",
        "name": "Makolkol",
        "searchKey": "makolkol zmh"
    },
    {
        "code": "kde",
        "name": "Makonde",
        "searchKey": "makonde kde"
    },
    {
        "code": "xak",
        "name": "Máku",
        "searchKey": "maku xak"
    },
    {
        "code": "lva",
        "name": "Maku'a",
        "searchKey": "makua lva"
    },
    {
        "code": "mpu",
        "name": "Makuráp",
        "searchKey": "makurap mpu"
    },
    {
        "code": "jmn",
        "name": "Makuri Naga",
        "searchKey": "makuri naga jmn"
    },
    {
        "code": "ymk",
        "name": "Makwe",
        "searchKey": "makwe ymk"
    },
    {
        "code": "umn",
        "name": "Makyan Naga",
        "searchKey": "makyan naga umn"
    },
    {
        "code": "mlf",
        "name": "Mal",
        "searchKey": "mal mlf"
    },
    {
        "code": "mkb",
        "name": "Mal Paharia",
        "searchKey": "mal paharia mkb"
    },
    {
        "code": "ruy",
        "name": "Mala (Nigeria)",
        "searchNames": [
            "Mala"
        ],
        "searchKey": "mala nigeria ruy mala"
    },
    {
        "code": "ped",
        "name": "Mala (Papua New Guinea)",
        "searchNames": [
            "Mala"
        ],
        "searchKey": "mala papua new guinea ped mala"
    },
    {
        "code": "ima",
        "name": "Mala Malasar",
        "searchKey": "mala malasar ima"
    },
    {
        "code": "ccm",
        "name": "Malaccan Creole Malay",
        "searchKey": "malaccan creole malay ccm"
    },
    {
        "code": "mcm",
        "name": "Malaccan Creole Portuguese",
        "searchKey": "malaccan creole portuguese mcm"
    },
    {
        "code": "mlg",
        "name": "Malagasy",
        "searchKey": "malagasy mlg"
    },
    {
        "code": "mpb",
        "name": "Malak Malak",
        "searchKey": "malak malak mpb"
    },
    {
        "code": "mmt",
        "name": "Malalamai",
        "searchKey": "malalamai mmt"
    },
    {
        "code": "mln",
        "name": "Malango",
        "searchKey": "malango mln"
    },
    {
        "code": "mjo",
        "name": "Malankuravan",
        "searchKey": "malankuravan mjo"
    },
    {
        "code": "mjp",
        "name": "Malapandaram",
        "searchKey": "malapandaram mjp"
    },
    {
        "code": "mjq",
        "name": "Malaryan",
        "searchKey": "malaryan mjq"
    },
    {
        "code": "mkr",
        "name": "Malas",
        "searchKey": "malas mkr"
    },
    {
        "code": "ymr",
        "name": "Malasar",
        "searchKey": "malasar ymr"
    },
    {
        "code": "mjr",
        "name": "Malavedan",
        "searchKey": "malavedan mjr"
    },
    {
        "code": "lon",
        "name": "Malawi Lomwe",
        "searchKey": "malawi lomwe lon"
    },
    {
        "code": "swk",
        "name": "Malawi Sena",
        "searchKey": "malawi sena swk"
    },
    {
        "code": "lws",
        "name": "Malawian Sign Language",
        "searchKey": "malawian sign language lws"
    },
    {
        "code": "zlm",
        "name": "Malay (individual language)",
        "searchNames": [
            "Malay"
        ],
        "searchKey": "malay individual language zlm malay"
    },
    {
        "code": "msa",
        "name": "Malay (macrolanguage)",
        "searchNames": [
            "Malay"
        ],
        "searchKey": "malay macrolanguage msa malay"
    },
    {
        "code": "mal",
        "name": "Malayalam",
        "searchKey": "malayalam mal"
    },
    {
        "code": "xdy",
        "name": "Malayic Dayak",
        "searchKey": "malayic dayak xdy"
    },
    {
        "code": "mlz",
        "name": "Malaynon",
        "searchKey": "malaynon mlz"
    },
    {
        "code": "mbp",
        "name": "Malayo",
        "searchKey": "malayo mbp"
    },
    {
        "code": "xml",
        "name": "Malaysian Sign Language",
        "searchKey": "malaysian sign language xml"
    },
    {
        "code": "bfo",
        "name": "Malba Birifor",
        "searchKey": "malba birifor bfo"
    },
    {
        "code": "mdy",
        "name": "Male",
        "searchKey": "male mdy"
    },
    {
        "code": "pqm",
        "name": "Malecite-Passamaquoddy",
        "searchKey": "malecite-passamaquoddy pqm"
    },
    {
        "code": "gut",
        "name": "Maléku Jaíka",
        "searchKey": "maleku jaika gut"
    },
    {
        "code": "pkt",
        "name": "Maleng",
        "searchKey": "maleng pkt"
    },
    {
        "code": "mgl",
        "name": "Maleu-Kilenge",
        "searchKey": "maleu-kilenge mgl"
    },
    {
        "code": "mlx",
        "name": "Malfaxal",
        "searchKey": "malfaxal mlx"
    },
    {
        "code": "vml",
        "name": "Malgana",
        "searchKey": "malgana vml"
    },
    {
        "code": "mxf",
        "name": "Malgbe",
        "searchKey": "malgbe mxf"
    },
    {
        "code": "gcc",
        "name": "Mali",
        "searchKey": "mali gcc"
    },
    {
        "code": "mgq",
        "name": "Malila",
        "searchKey": "malila mgq"
    },
    {
        "code": "mzd",
        "name": "Malimba",
        "searchKey": "malimba mzd"
    },
    {
        "code": "mli",
        "name": "Malimpung",
        "searchKey": "malimpung mli"
    },
    {
        "code": "tcf",
        "name": "Malinaltepec Me'phaa",
        "searchKey": "malinaltepec mephaa tcf"
    },
    {
        "code": "mla",
        "name": "Malo",
        "searchKey": "malo mla"
    },
    {
        "code": "mbk",
        "name": "Malol",
        "searchKey": "malol mbk"
    },
    {
        "code": "mlt",
        "name": "Maltese",
        "searchKey": "maltese mlt"
    },
    {
        "code": "mdl",
        "name": "Maltese Sign Language",
        "searchKey": "maltese sign language mdl"
    },
    {
        "code": "mll",
        "name": "Malua Bay",
        "searchKey": "malua bay mll"
    },
    {
        "code": "mup",
        "name": "Malvi",
        "searchKey": "malvi mup"
    },
    {
        "code": "yga",
        "name": "Malyangapa",
        "searchKey": "malyangapa yga"
    },
    {
        "code": "mam",
        "name": "Mam",
        "searchKey": "mam"
    },
    {
        "code": "mma",
        "name": "Mama",
        "searchKey": "mama mma"
    },
    {
        "code": "mhf",
        "name": "Mamaa",
        "searchKey": "mamaa mhf"
    },
    {
        "code": "wmd",
        "name": "Mamaindé",
        "searchKey": "mamainde wmd"
    },
    {
        "code": "mmn",
        "name": "Mamanwa",
        "searchKey": "mamanwa mmn"
    },
    {
        "code": "myk",
        "name": "Mamara Senoufo",
        "searchKey": "mamara senoufo myk"
    },
    {
        "code": "mqj",
        "name": "Mamasa",
        "searchKey": "mamasa mqj"
    },
    {
        "code": "mgm",
        "name": "Mambae",
        "searchKey": "mambae mgm"
    },
    {
        "code": "mcs",
        "name": "Mambai",
        "searchKey": "mambai mcs"
    },
    {
        "code": "mvd",
        "name": "Mamboru",
        "searchKey": "mamboru mvd"
    },
    {
        "code": "mgr",
        "name": "Mambwe-Lungu",
        "searchKey": "mambwe-lungu mgr"
    },
    {
        "code": "maw",
        "name": "Mampruli",
        "searchKey": "mampruli maw"
    },
    {
        "code": "mqx",
        "name": "Mamuju",
        "searchKey": "mamuju mqx"
    },
    {
        "code": "emm",
        "name": "Mamulique",
        "searchKey": "mamulique emm"
    },
    {
        "code": "kdf",
        "name": "Mamusi",
        "searchKey": "mamusi kdf"
    },
    {
        "code": "mdi",
        "name": "Mamvu",
        "searchKey": "mamvu mdi"
    },
    {
        "code": "mml",
        "name": "Man Met",
        "searchKey": "man met mml"
    },
    {
        "code": "xmm",
        "name": "Manado Malay",
        "searchKey": "manado malay xmm"
    },
    {
        "code": "mva",
        "name": "Manam",
        "searchKey": "manam mva"
    },
    {
        "code": "mle",
        "name": "Manambu",
        "searchKey": "manambu mle"
    },
    {
        "code": "nmm",
        "name": "Manangba",
        "searchKey": "manangba nmm"
    },
    {
        "code": "znk",
        "name": "Manangkari",
        "searchKey": "manangkari znk"
    },
    {
        "code": "mnc",
        "name": "Manchu",
        "searchKey": "manchu mnc"
    },
    {
        "code": "zma",
        "name": "Manda (Australia)",
        "searchNames": [
            "Manda"
        ],
        "searchKey": "manda australia zma manda"
    },
    {
        "code": "mha",
        "name": "Manda (India)",
        "searchNames": [
            "Manda"
        ],
        "searchKey": "manda india mha manda"
    },
    {
        "code": "mgs",
        "name": "Manda (Tanzania)",
        "searchNames": [
            "Manda"
        ],
        "searchKey": "manda tanzania mgs manda"
    },
    {
        "code": "mht",
        "name": "Mandahuaca",
        "searchKey": "mandahuaca mht"
    },
    {
        "code": "mid",
        "name": "Mandaic",
        "searchKey": "mandaic mid"
    },
    {
        "code": "mhq",
        "name": "Mandan",
        "searchKey": "mandan mhq"
    },
    {
        "code": "zmk",
        "name": "Mandandanyi",
        "searchKey": "mandandanyi zmk"
    },
    {
        "code": "mdr",
        "name": "Mandar",
        "searchKey": "mandar mdr"
    },
    {
        "code": "tbf",
        "name": "Mandara",
        "searchKey": "mandara tbf"
    },
    {
        "code": "mqu",
        "name": "Mandari",
        "searchKey": "mandari mqu"
    },
    {
        "code": "cmn",
        "name": "Mandarin Chinese",
        "searchKey": "mandarin chinese cmn"
    },
    {
        "code": "mry",
        "name": "Mandaya",
        "searchKey": "mandaya mry"
    },
    {
        "code": "mjl",
        "name": "Mandeali",
        "searchKey": "mandeali mjl"
    },
    {
        "code": "mqr",
        "name": "Mander",
        "searchKey": "mander mqr"
    },
    {
        "code": "man",
        "name": "Mandingo",
        "searchKey": "mandingo man"
    },
    {
        "code": "mnk",
        "name": "Mandinka",
        "searchKey": "mandinka mnk"
    },
    {
        "code": "mfv",
        "name": "Mandjak",
        "searchKey": "mandjak mfv"
    },
    {
        "code": "aax",
        "name": "Mandobo Atas",
        "searchKey": "mandobo atas aax"
    },
    {
        "code": "bwp",
        "name": "Mandobo Bawah",
        "searchKey": "mandobo bawah bwp"
    },
    {
        "code": "jet",
        "name": "Manem",
        "searchKey": "manem jet"
    },
    {
        "code": "zng",
        "name": "Mang",
        "searchKey": "mang zng"
    },
    {
        "code": "kby",
        "name": "Manga Kanuri",
        "searchKey": "manga kanuri kby"
    },
    {
        "code": "mem",
        "name": "Mangala",
        "searchKey": "mangala mem"
    },
    {
        "code": "mrv",
        "name": "Mangareva",
        "searchKey": "mangareva mrv"
    },
    {
        "code": "mpc",
        "name": "Mangarrayi",
        "searchKey": "mangarrayi mpc"
    },
    {
        "code": "zns",
        "name": "Mangas",
        "searchKey": "mangas zns"
    },
    {
        "code": "myj",
        "name": "Mangayat",
        "searchKey": "mangayat myj"
    },
    {
        "code": "mdj",
        "name": "Mangbetu",
        "searchKey": "mangbetu mdj"
    },
    {
        "code": "mdk",
        "name": "Mangbutu",
        "searchKey": "mangbutu mdk"
    },
    {
        "code": "zme",
        "name": "Mangerr",
        "searchKey": "mangerr zme"
    },
    {
        "code": "mmo",
        "name": "Mangga Buang",
        "searchKey": "mangga buang mmo"
    },
    {
        "code": "mqy",
        "name": "Manggarai",
        "searchKey": "manggarai mqy"
    },
    {
        "code": "mge",
        "name": "Mango",
        "searchKey": "mango mge"
    },
    {
        "code": "mqc",
        "name": "Mangole",
        "searchKey": "mangole mqc"
    },
    {
        "code": "mbh",
        "name": "Mangseng",
        "searchKey": "mangseng mbh"
    },
    {
        "code": "mom",
        "name": "Mangue",
        "searchKey": "mangue mom"
    },
    {
        "code": "xmn",
        "name": "Manichaean Middle Persian",
        "searchKey": "manichaean middle persian xmn"
    },
    {
        "code": "abd",
        "name": "Manide",
        "searchKey": "manide abd"
    },
    {
        "code": "mnx",
        "name": "Manikion",
        "searchKey": "manikion mnx"
    },
    {
        "code": "mqp",
        "name": "Manipa",
        "searchKey": "manipa mqp"
    },
    {
        "code": "mni",
        "name": "Manipuri",
        "searchKey": "manipuri mni"
    },
    {
        "code": "knf",
        "name": "Mankanya",
        "searchKey": "mankanya knf"
    },
    {
        "code": "nlm",
        "name": "Mankiyali",
        "searchKey": "mankiyali nlm"
    },
    {
        "code": "mju",
        "name": "Manna-Dora",
        "searchKey": "manna-dora mju"
    },
    {
        "code": "mjv",
        "name": "Mannan",
        "searchKey": "mannan mjv"
    },
    {
        "code": "mev",
        "name": "Mano",
        "searchKey": "mano mev"
    },
    {
        "code": "woo",
        "name": "Manombai",
        "searchKey": "manombai woo"
    },
    {
        "code": "msk",
        "name": "Mansaka",
        "searchKey": "mansaka msk"
    },
    {
        "code": "mns",
        "name": "Mansi",
        "searchKey": "mansi mns"
    },
    {
        "code": "msw",
        "name": "Mansoanka",
        "searchKey": "mansoanka msw"
    },
    {
        "code": "myg",
        "name": "Manta",
        "searchKey": "manta myg"
    },
    {
        "code": "nty",
        "name": "Mantsi",
        "searchKey": "mantsi nty"
    },
    {
        "code": "kxf",
        "name": "Manumanaw Karen",
        "searchKey": "manumanaw karen kxf"
    },
    {
        "code": "glv",
        "name": "Manx",
        "searchKey": "manx glv"
    },
    {
        "code": "mzj",
        "name": "Manya",
        "searchKey": "manya mzj"
    },
    {
        "code": "mny",
        "name": "Manyawa",
        "searchKey": "manyawa mny"
    },
    {
        "code": "mxc",
        "name": "Manyika",
        "searchKey": "manyika mxc"
    },
    {
        "code": "mzv",
        "name": "Manza",
        "searchKey": "manza mzv"
    },
    {
        "code": "nbi",
        "name": "Mao Naga",
        "searchKey": "mao naga nbi"
    },
    {
        "code": "mmd",
        "name": "Maonan",
        "searchKey": "maonan mmd"
    },
    {
        "code": "swb",
        "name": "Maore Comorian",
        "searchKey": "maore comorian swb"
    },
    {
        "code": "mri",
        "name": "Maori",
        "searchKey": "maori mri"
    },
    {
        "code": "mlh",
        "name": "Mape",
        "searchKey": "mape mlh"
    },
    {
        "code": "mnm",
        "name": "Mapena",
        "searchKey": "mapena mnm"
    },
    {
        "code": "mpy",
        "name": "Mapia",
        "searchKey": "mapia mpy"
    },
    {
        "code": "mpw",
        "name": "Mapidian",
        "searchKey": "mapidian mpw"
    },
    {
        "code": "bzh",
        "name": "Mapos Buang",
        "searchKey": "mapos buang bzh"
    },
    {
        "code": "mcg",
        "name": "Mapoyo",
        "searchKey": "mapoyo mcg"
    },
    {
        "code": "arn",
        "name": "Mapudungun",
        "searchKey": "mapudungun arn"
    },
    {
        "code": "sjm",
        "name": "Mapun",
        "searchKey": "mapun sjm"
    },
    {
        "code": "mch",
        "name": "Maquiritari",
        "searchKey": "maquiritari mch"
    },
    {
        "code": "mrh",
        "name": "Mara",
        "searchKey": "mara mrh"
    },
    {
        "code": "lri",
        "name": "Marachi",
        "searchKey": "marachi lri"
    },
    {
        "code": "vmh",
        "name": "Maraghei",
        "searchKey": "maraghei vmh"
    },
    {
        "code": "mrs",
        "name": "Maragus",
        "searchKey": "maragus mrs"
    },
    {
        "code": "nma",
        "name": "Maram Naga",
        "searchKey": "maram naga nma"
    },
    {
        "code": "lrm",
        "name": "Marama",
        "searchKey": "marama lrm"
    },
    {
        "code": "mrw",
        "name": "Maranao",
        "searchKey": "maranao mrw"
    },
    {
        "code": "zmr",
        "name": "Maranunggu",
        "searchKey": "maranunggu zmr"
    },
    {
        "code": "mgb",
        "name": "Mararit",
        "searchKey": "mararit mgb"
    },
    {
        "code": "mar",
        "name": "Marathi",
        "searchKey": "marathi mar"
    },
    {
        "code": "mvr",
        "name": "Marau",
        "searchKey": "marau mvr"
    },
    {
        "code": "mpg",
        "name": "Marba",
        "searchKey": "marba mpg"
    },
    {
        "code": "dsz",
        "name": "Mardin Sign Language",
        "searchKey": "mardin sign language dsz"
    },
    {
        "code": "mrx",
        "name": "Maremgi",
        "searchKey": "maremgi mrx"
    },
    {
        "code": "vmr",
        "name": "Marenje",
        "searchKey": "marenje vmr"
    },
    {
        "code": "mvu",
        "name": "Marfa",
        "searchKey": "marfa mvu"
    },
    {
        "code": "zmc",
        "name": "Margany",
        "searchKey": "margany zmc"
    },
    {
        "code": "mrt",
        "name": "Marghi Central",
        "searchKey": "marghi central mrt"
    },
    {
        "code": "mfm",
        "name": "Marghi South",
        "searchKey": "marghi south mfm"
    },
    {
        "code": "qvm",
        "name": "Margos-Yarowilca-Lauricocha Quechua",
        "searchKey": "margos-yarowilca-lauricocha quechua qvm"
    },
    {
        "code": "mhg",
        "name": "Margu",
        "searchKey": "margu mhg"
    },
    {
        "code": "mbx",
        "name": "Mari (East Sepik Province)",
        "searchNames": [
            "Mari"
        ],
        "searchKey": "mari east sepik province mbx mari"
    },
    {
        "code": "hob",
        "name": "Mari (Madang Province)",
        "searchNames": [
            "Mari"
        ],
        "searchKey": "mari madang province hob mari"
    },
    {
        "code": "chm",
        "name": "Mari (Russia)",
        "searchNames": [
            "Mari"
        ],
        "searchKey": "mari russia chm mari"
    },
    {
        "code": "mrr",
        "name": "Maria (India)",
        "searchNames": [
            "Maria"
        ],
        "searchKey": "maria india mrr maria"
    },
    {
        "code": "mds",
        "name": "Maria (Papua New Guinea)",
        "searchNames": [
            "Maria"
        ],
        "searchKey": "maria papua new guinea mds maria"
    },
    {
        "code": "mrc",
        "name": "Maricopa",
        "searchKey": "maricopa mrc"
    },
    {
        "code": "zmd",
        "name": "Maridan",
        "searchKey": "maridan zmd"
    },
    {
        "code": "zmj",
        "name": "Maridjabin",
        "searchKey": "maridjabin zmj"
    },
    {
        "code": "dad",
        "name": "Marik",
        "searchKey": "marik dad"
    },
    {
        "code": "zmm",
        "name": "Marimanindji",
        "searchKey": "marimanindji zmm"
    },
    {
        "code": "mrz",
        "name": "Marind",
        "searchKey": "marind mrz"
    },
    {
        "code": "mbw",
        "name": "Maring",
        "searchKey": "maring mbw"
    },
    {
        "code": "nng",
        "name": "Maring Naga",
        "searchKey": "maring naga nng"
    },
    {
        "code": "zmt",
        "name": "Maringarr",
        "searchKey": "maringarr zmt"
    },
    {
        "code": "mrb",
        "name": "Marino",
        "searchKey": "marino mrb"
    },
    {
        "code": "mqi",
        "name": "Mariri",
        "searchKey": "mariri mqi"
    },
    {
        "code": "nsr",
        "name": "Maritime Sign Language",
        "searchKey": "maritime sign language nsr"
    },
    {
        "code": "msp",
        "name": "Maritsauá",
        "searchKey": "maritsaua msp"
    },
    {
        "code": "zmy",
        "name": "Mariyedi",
        "searchKey": "mariyedi zmy"
    },
    {
        "code": "rkm",
        "name": "Marka",
        "searchKey": "marka rkm"
    },
    {
        "code": "enb",
        "name": "Markweeta",
        "searchKey": "markweeta enb"
    },
    {
        "code": "rmz",
        "name": "Marma",
        "searchKey": "marma rmz"
    },
    {
        "code": "mvo",
        "name": "Marovo",
        "searchKey": "marovo mvo"
    },
    {
        "code": "mec",
        "name": "Marra",
        "searchKey": "marra mec"
    },
    {
        "code": "xru",
        "name": "Marriammu",
        "searchKey": "marriammu xru"
    },
    {
        "code": "mfr",
        "name": "Marrithiyel",
        "searchKey": "marrithiyel mfr"
    },
    {
        "code": "umc",
        "name": "Marrucinian",
        "searchKey": "marrucinian umc"
    },
    {
        "code": "mah",
        "name": "Marshallese",
        "searchKey": "marshallese mah"
    },
    {
        "code": "ims",
        "name": "Marsian",
        "searchKey": "marsian ims"
    },
    {
        "code": "mre",
        "name": "Martha's Vineyard Sign Language",
        "searchKey": "marthas vineyard sign language mre"
    },
    {
        "code": "zmg",
        "name": "Marti Ke",
        "searchKey": "marti ke zmg"
    },
    {
        "code": "mpj",
        "name": "Martu Wangka",
        "searchKey": "martu wangka mpj"
    },
    {
        "code": "vma",
        "name": "Martuyhunira",
        "searchKey": "martuyhunira vma"
    },
    {
        "code": "mhx",
        "name": "Maru",
        "searchKey": "maru mhx"
    },
    {
        "code": "mzr",
        "name": "Marúbo",
        "searchKey": "marubo mzr"
    },
    {
        "code": "mwr",
        "name": "Marwari",
        "searchKey": "marwari mwr"
    },
    {
        "code": "rwr",
        "name": "Marwari (India)",
        "searchNames": [
            "Marwari"
        ],
        "searchKey": "marwari india rwr marwari"
    },
    {
        "code": "mve",
        "name": "Marwari (Pakistan)",
        "searchNames": [
            "Marwari"
        ],
        "searchKey": "marwari pakistan mve marwari"
    },
    {
        "code": "myx",
        "name": "Masaaba",
        "searchKey": "masaaba myx"
    },
    {
        "code": "tis",
        "name": "Masadiit Itneg",
        "searchKey": "masadiit itneg tis"
    },
    {
        "code": "mas",
        "name": "Masai",
        "displayName": "Maasai",
        "alternateNames": [
            "Masai",
            "Maa"
        ],
        "countries": [
            "Kenya",
            "Tanzania"
        ],
        "script": "Latin",
        "searchKey": "masai mas"
    },
    {
        "code": "mls",
        "name": "Masalit",
        "searchKey": "masalit mls"
    },
    {
        "code": "mcn",
        "name": "Masana",
        "searchKey": "masana mcn"
    },
    {
        "code": "msb",
        "name": "Masbatenyo",
        "searchKey": "masbatenyo msb"
    },
    {
        "code": "cuj",
        "name": "Mashco Piro",
        "searchKey": "mashco piro cuj"
    },
    {
        "code": "jms",
        "name": "Mashi (Nigeria)",
        "searchNames": [
            "Mashi"
        ],
        "searchKey": "mashi nigeria jms mashi"
    },
    {
        "code": "mho",
        "name": "Mashi (Zambia)",
        "searchNames": [
            "Mashi"
        ],
        "searchKey": "mashi zambia mho mashi"
    },
    {
        "code": "msh",
        "name": "Masikoro Malagasy",
        "searchKey": "masikoro malagasy msh"
    },
    {
        "code": "ism",
        "name": "Masimasi",
        "searchKey": "masimasi ism"
    },
    {
        "code": "bnf",
        "name": "Masiwang",
        "searchKey": "masiwang bnf"
    },
    {
        "code": "klv",
        "name": "Maskelynes",
        "searchKey": "maskelynes klv"
    },
    {
        "code": "msv",
        "name": "Maslam",
        "searchKey": "maslam msv"
    },
    {
        "code": "mes",
        "name": "Masmaje",
        "searchKey": "masmaje mes"
    },
    {
        "code": "mdg",
        "name": "Massalat",
        "searchKey": "massalat mdg"
    },
    {
        "code": "mvs",
        "name": "Massep",
        "searchKey": "massep mvs"
    },
    {
        "code": "mtn",
        "name": "Matagalpa",
        "searchKey": "matagalpa mtn"
    },
    {
        "code": "mfh",
        "name": "Matal",
        "searchKey": "matal mfh"
    },
    {
        "code": "wtb",
        "name": "Matambwe",
        "searchKey": "matambwe wtb"
    },
    {
        "code": "xmt",
        "name": "Matbat",
        "searchKey": "matbat xmt"
    },
    {
        "code": "mgv",
        "name": "Matengo",
        "searchKey": "matengo mgv"
    },
    {
        "code": "mqe",
        "name": "Matepi",
        "searchKey": "matepi mqe"
    },
    {
        "code": "mbt",
        "name": "Matigsalug Manobo",
        "searchKey": "matigsalug manobo mbt"
    },
    {
        "code": "mzo",
        "name": "Matipuhy",
        "searchKey": "matipuhy mzo"
    },
    {
        "code": "mpq",
        "name": "Matís",
        "searchKey": "matis mpq"
    },
    {
        "code": "zml",
        "name": "Matngala",
        "searchKey": "matngala zml"
    },
    {
        "code": "met",
        "name": "Mato",
        "searchKey": "mato met"
    },
    {
        "code": "axg",
        "name": "Mato Grosso Arára",
        "searchKey": "mato grosso arara axg"
    },
    {
        "code": "mtm",
        "name": "Mator",
        "searchKey": "mator mtm"
    },
    {
        "code": "mcf",
        "name": "Matsés",
        "searchKey": "matses mcf"
    },
    {
        "code": "mvb",
        "name": "Mattole",
        "searchKey": "mattole mvb"
    },
    {
        "code": "hlt",
        "name": "Matu Chin",
        "searchKey": "matu chin hlt"
    },
    {
        "code": "mjk",
        "name": "Matukar",
        "searchKey": "matukar mjk"
    },
    {
        "code": "mgw",
        "name": "Matumbi",
        "searchKey": "matumbi mgw"
    },
    {
        "code": "stj",
        "name": "Matya Samo",
        "searchKey": "matya samo stj"
    },
    {
        "code": "mph",
        "name": "Maung",
        "searchKey": "maung mph"
    },
    {
        "code": "lsy",
        "name": "Mauritian Sign Language",
        "searchKey": "mauritian sign language lsy"
    },
    {
        "code": "mhl",
        "name": "Mauwake",
        "searchKey": "mauwake mhl"
    },
    {
        "code": "mcw",
        "name": "Mawa (Chad)",
        "searchNames": [
            "Mawa"
        ],
        "searchKey": "mawa chad mcw mawa"
    },
    {
        "code": "wma",
        "name": "Mawa (Nigeria)",
        "searchNames": [
            "Mawa"
        ],
        "searchKey": "mawa nigeria wma mawa"
    },
    {
        "code": "mjj",
        "name": "Mawak",
        "searchKey": "mawak mjj"
    },
    {
        "code": "mcz",
        "name": "Mawan",
        "searchKey": "mawan mcz"
    },
    {
        "code": "mzx",
        "name": "Mawayana",
        "searchKey": "mawayana mzx"
    },
    {
        "code": "mke",
        "name": "Mawchi",
        "searchKey": "mawchi mke"
    },
    {
        "code": "mgk",
        "name": "Mawes",
        "searchKey": "mawes mgk"
    },
    {
        "code": "mbl",
        "name": "Maxakalí",
        "searchKey": "maxakali mbl"
    },
    {
        "code": "mxl",
        "name": "Maxi Gbe",
        "searchKey": "maxi gbe mxl"
    },
    {
        "code": "slz",
        "name": "Ma'ya",
        "searchKey": "maya slz"
    },
    {
        "code": "sym",
        "name": "Maya Samo",
        "searchKey": "maya samo sym"
    },
    {
        "code": "xmy",
        "name": "Mayaguduna",
        "searchKey": "mayaguduna xmy"
    },
    {
        "code": "yan",
        "name": "Mayangna",
        "searchKey": "mayangna yan"
    },
    {
        "code": "yxa",
        "name": "Mayawali",
        "searchKey": "mayawali yxa"
    },
    {
        "code": "myc",
        "name": "Mayeka",
        "searchKey": "mayeka myc"
    },
    {
        "code": "xyk",
        "name": "Mayi-Kulan",
        "searchKey": "mayi-kulan xyk"
    },
    {
        "code": "xyt",
        "name": "Mayi-Thakurti",
        "searchKey": "mayi-thakurti xyt"
    },
    {
        "code": "xyj",
        "name": "Mayi-Yapi",
        "searchKey": "mayi-yapi xyj"
    },
    {
        "code": "mfy",
        "name": "Mayo",
        "searchKey": "mayo mfy"
    },
    {
        "code": "mdm",
        "name": "Mayogo",
        "searchKey": "mayogo mdm"
    },
    {
        "code": "ifu",
        "name": "Mayoyao Ifugao",
        "searchKey": "mayoyao ifugao ifu"
    },
    {
        "code": "dkx",
        "name": "Mazagway",
        "searchKey": "mazagway dkx"
    },
    {
        "code": "zpy",
        "name": "Mazaltepec Zapotec",
        "searchKey": "mazaltepec zapotec zpy"
    },
    {
        "code": "mzn",
        "name": "Mazanderani",
        "searchKey": "mazanderani mzn"
    },
    {
        "code": "vmz",
        "name": "Mazatlán Mazatec",
        "searchKey": "mazatlan mazatec vmz"
    },
    {
        "code": "mzl",
        "name": "Mazatlán Mixe",
        "searchKey": "mazatlan mixe mzl"
    },
    {
        "code": "mfc",
        "name": "Mba",
        "searchKey": "mba mfc"
    },
    {
        "code": "mdp",
        "name": "Mbala",
        "searchKey": "mbala mdp"
    },
    {
        "code": "lnb",
        "name": "Mbalanhu",
        "searchKey": "mbalanhu lnb"
    },
    {
        "code": "zmz",
        "name": "Mbandja",
        "searchKey": "mbandja zmz"
    },
    {
        "code": "mxg",
        "name": "Mbangala",
        "searchKey": "mbangala mxg"
    },
    {
        "code": "mgn",
        "name": "Mbangi",
        "searchKey": "mbangi mgn"
    },
    {
        "code": "zmn",
        "name": "Mbangwe",
        "searchKey": "mbangwe zmn"
    },
    {
        "code": "mvl",
        "name": "Mbara (Australia)",
        "searchNames": [
            "Mbara"
        ],
        "searchKey": "mbara australia mvl mbara"
    },
    {
        "code": "mpk",
        "name": "Mbara (Chad)",
        "searchNames": [
            "Mbara"
        ],
        "searchKey": "mbara chad mpk mbara"
    },
    {
        "code": "zmv",
        "name": "Mbariman-Gudhinma",
        "searchKey": "mbariman-gudhinma zmv"
    },
    {
        "code": "mdn",
        "name": "Mbati",
        "searchKey": "mbati mdn"
    },
    {
        "code": "gwa",
        "name": "Mbato",
        "searchKey": "mbato gwa"
    },
    {
        "code": "myb",
        "name": "Mbay",
        "searchKey": "mbay myb"
    },
    {
        "code": "mfo",
        "name": "Mbe",
        "searchKey": "mbe mfo"
    },
    {
        "code": "mtk",
        "name": "Mbe'",
        "searchKey": "mbe mtk"
    },
    {
        "code": "mql",
        "name": "Mbelime",
        "searchKey": "mbelime mql"
    },
    {
        "code": "mdt",
        "name": "Mbere",
        "searchKey": "mbere mdt"
    },
    {
        "code": "zms",
        "name": "Mbesa",
        "searchKey": "mbesa zms"
    },
    {
        "code": "emz",
        "name": "Mbessa",
        "searchKey": "mbessa emz"
    },
    {
        "code": "mbo",
        "name": "Mbo (Cameroon)",
        "searchNames": [
            "Mbo"
        ],
        "searchKey": "mbo cameroon mbo"
    },
    {
        "code": "zmw",
        "name": "Mbo (Democratic Republic of Congo)",
        "searchNames": [
            "Mbo"
        ],
        "searchKey": "mbo democratic republic of congo zmw mbo"
    },
    {
        "code": "moi",
        "name": "Mboi",
        "searchKey": "mboi moi"
    },
    {
        "code": "mdu",
        "name": "Mboko",
        "searchKey": "mboko mdu"
    },
    {
        "code": "mdq",
        "name": "Mbole",
        "searchKey": "mbole mdq"
    },
    {
        "code": "xmb",
        "name": "Mbonga",
        "searchKey": "mbonga xmb"
    },
    {
        "code": "bgu",
        "name": "Mbongno",
        "searchKey": "mbongno bgu"
    },
    {
        "code": "mdw",
        "name": "Mbosi",
        "searchKey": "mbosi mdw"
    },
    {
        "code": "mxo",
        "name": "Mbowe",
        "searchKey": "mbowe mxo"
    },
    {
        "code": "mka",
        "name": "Mbre",
        "searchKey": "mbre mka"
    },
    {
        "code": "xmd",
        "name": "Mbudum",
        "searchKey": "mbudum xmd"
    },
    {
        "code": "mhd",
        "name": "Mbugu",
        "searchKey": "mbugu mhd"
    },
    {
        "code": "mgz",
        "name": "Mbugwe",
        "searchKey": "mbugwe mgz"
    },
    {
        "code": "bpc",
        "name": "Mbuk",
        "searchKey": "mbuk bpc"
    },
    {
        "code": "mqb",
        "name": "Mbuko",
        "searchKey": "mbuko mqb"
    },
    {
        "code": "mhw",
        "name": "Mbukushu",
        "searchKey": "mbukushu mhw"
    },
    {
        "code": "mna",
        "name": "Mbula",
        "searchKey": "mbula mna"
    },
    {
        "code": "mbu",
        "name": "Mbula-Bwazza",
        "searchKey": "mbula-bwazza mbu"
    },
    {
        "code": "mlb",
        "name": "Mbule",
        "searchKey": "mbule mlb"
    },
    {
        "code": "mbv",
        "name": "Mbulungish",
        "searchKey": "mbulungish mbv"
    },
    {
        "code": "mdd",
        "name": "Mbum",
        "searchKey": "mbum mdd"
    },
    {
        "code": "mck",
        "name": "Mbunda",
        "searchKey": "mbunda mck"
    },
    {
        "code": "mgy",
        "name": "Mbunga",
        "searchKey": "mbunga mgy"
    },
    {
        "code": "bbt",
        "name": "Mburku",
        "searchKey": "mburku bbt"
    },
    {
        "code": "zmp",
        "name": "Mbuun",
        "searchKey": "mbuun zmp"
    },
    {
        "code": "mfu",
        "name": "Mbwela",
        "searchKey": "mbwela mfu"
    },
    {
        "code": "gun",
        "name": "Mbyá Guaraní",
        "searchKey": "mbya guarani gun"
    },
    {
        "code": "mjm",
        "name": "Medebur",
        "searchKey": "medebur mjm"
    },
    {
        "code": "dmf",
        "name": "Medefaidrin",
        "searchKey": "medefaidrin dmf"
    },
    {
        "code": "mue",
        "name": "Media Lengua",
        "searchKey": "media lengua mue"
    },
    {
        "code": "xme",
        "name": "Median",
        "searchKey": "median xme"
    },
    {
        "code": "mud",
        "name": "Mednyj Aleut",
        "searchKey": "mednyj aleut mud"
    },
    {
        "code": "byv",
        "name": "Medumba",
        "searchKey": "medumba byv"
    },
    {
        "code": "mym",
        "name": "Me'en",
        "searchKey": "meen mym"
    },
    {
        "code": "mfj",
        "name": "Mefele",
        "searchKey": "mefele mfj"
    },
    {
        "code": "mef",
        "name": "Megam",
        "searchKey": "megam mef"
    },
    {
        "code": "ruq",
        "name": "Megleno Romanian",
        "searchKey": "megleno romanian ruq"
    },
    {
        "code": "nux",
        "name": "Mehek",
        "searchKey": "mehek nux"
    },
    {
        "code": "mmh",
        "name": "Mehináku",
        "searchKey": "mehinaku mmh"
    },
    {
        "code": "gdq",
        "name": "Mehri",
        "searchKey": "mehri gdq"
    },
    {
        "code": "mek",
        "name": "Mekeo",
        "searchKey": "mekeo mek"
    },
    {
        "code": "mvk",
        "name": "Mekmek",
        "searchKey": "mekmek mvk"
    },
    {
        "code": "msf",
        "name": "Mekwei",
        "searchKey": "mekwei msf"
    },
    {
        "code": "mxe",
        "name": "Mele-Fila",
        "searchKey": "mele-fila mxe"
    },
    {
        "code": "hkn",
        "name": "Mel-Khaonh",
        "searchKey": "mel-khaonh hkn"
    },
    {
        "code": "mfx",
        "name": "Melo",
        "searchKey": "melo mfx"
    },
    {
        "code": "med",
        "name": "Melpa",
        "searchKey": "melpa med"
    },
    {
        "code": "mby",
        "name": "Memoni",
        "searchKey": "memoni mby"
    },
    {
        "code": "xkd",
        "name": "Mendalam Kayan",
        "searchKey": "mendalam kayan xkd"
    },
    {
        "code": "mfd",
        "name": "Mendankwe-Nkwen",
        "searchKey": "mendankwe-nkwen mfd"
    },
    {
        "code": "sim",
        "name": "Mende (Papua New Guinea)",
        "searchNames": [
            "Mende"
        ],
        "searchKey": "mende papua new guinea sim mende"
    },
    {
        "code": "men",
        "name": "Mende (Sierra Leone)",
        "searchNames": [
            "Mende"
        ],
        "searchKey": "mende sierra leone men mende"
    },
    {
        "code": "xmg",
        "name": "Mengaka",
        "searchKey": "mengaka xmg"
    },
    {
        "code": "mee",
        "name": "Mengen",
        "searchKey": "mengen mee"
    },
    {
        "code": "mct",
        "name": "Mengisa",
        "searchKey": "mengisa mct"
    },
    {
        "code": "tnr",
        "name": "Ménik",
        "searchKey": "menik tnr"
    },
    {
        "code": "mea",
        "name": "Menka",
        "searchKey": "menka mea"
    },
    {
        "code": "mez",
        "name": "Menominee",
        "searchKey": "menominee mez"
    },
    {
        "code": "mwv",
        "name": "Mentawai",
        "searchKey": "mentawai mwv"
    },
    {
        "code": "mcr",
        "name": "Menya",
        "searchKey": "menya mcr"
    },
    {
        "code": "mvx",
        "name": "Meoswar",
        "searchKey": "meoswar mvx"
    },
    {
        "code": "mnu",
        "name": "Mer",
        "searchKey": "mer mnu"
    },
    {
        "code": "mxm",
        "name": "Meramera",
        "searchKey": "meramera mxm"
    },
    {
        "code": "lmb",
        "name": "Merei",
        "searchKey": "merei lmb"
    },
    {
        "code": "meq",
        "name": "Merey",
        "searchKey": "merey meq"
    },
    {
        "code": "ulk",
        "name": "Meriam Mir",
        "searchKey": "meriam mir ulk"
    },
    {
        "code": "mrm",
        "name": "Merlav",
        "searchKey": "merlav mrm"
    },
    {
        "code": "xmr",
        "name": "Meroitic",
        "searchKey": "meroitic xmr"
    },
    {
        "code": "mer",
        "name": "Meru",
        "searchKey": "meru mer"
    },
    {
        "code": "wry",
        "name": "Merwari",
        "searchKey": "merwari wry"
    },
    {
        "code": "iyo",
        "name": "Mesaka",
        "searchKey": "mesaka iyo"
    },
    {
        "code": "apm",
        "name": "Mescalero-Chiricahua Apache",
        "searchKey": "mescalero-chiricahua apache apm"
    },
    {
        "code": "mci",
        "name": "Mese",
        "searchKey": "mese mci"
    },
    {
        "code": "sac",
        "name": "Meskwaki",
        "searchKey": "meskwaki sac"
    },
    {
        "code": "zim",
        "name": "Mesme",
        "searchKey": "mesme zim"
    },
    {
        "code": "mys",
        "name": "Mesmes",
        "searchKey": "mesmes mys"
    },
    {
        "code": "acm",
        "name": "Mesopotamian Arabic",
        "searchKey": "mesopotamian arabic acm"
    },
    {
        "code": "mvz",
        "name": "Mesqan",
        "searchKey": "mesqan mvz"
    },
    {
        "code": "cms",
        "name": "Messapic",
        "searchKey": "messapic cms"
    },
    {
        "code": "mgo",
        "name": "Meta'",
        "searchKey": "meta mgo"
    },
    {
        "code": "mxv",
        "name": "Metlatónoc Mixtec",
        "searchKey": "metlatonoc mixtec mxv"
    },
    {
        "code": "mtr",
        "name": "Mewari",
        "searchKey": "mewari mtr"
    },
    {
        "code": "wtm",
        "name": "Mewati",
        "searchKey": "mewati wtm"
    },
    {
        "code": "mfs",
        "name": "Mexican Sign Language",
        "searchKey": "mexican sign language mfs"
    },
    {
        "code": "mej",
        "name": "Meyah",
        "searchKey": "meyah mej"
    },
    {
        "code": "pbe",
        "name": "Mezontla Popoloca",
        "searchKey": "mezontla popoloca pbe"
    },
    {
        "code": "ote",
        "name": "Mezquital Otomi",
        "searchKey": "mezquital otomi ote"
    },
    {
        "code": "zmf",
        "name": "Mfinu",
        "searchKey": "mfinu zmf"
    },
    {
        "code": "nfu",
        "name": "Mfumte",
        "searchKey": "mfumte nfu"
    },
    {
        "code": "gmz",
        "name": "Mgbolizhia",
        "searchKey": "mgbolizhia gmz"
    },
    {
        "code": "zam",
        "name": "Miahuatlán Zapotec",
        "searchKey": "miahuatlan zapotec zam"
    },
    {
        "code": "mia",
        "name": "Miami",
        "searchKey": "miami mia"
    },
    {
        "code": "mpt",
        "name": "Mian",
        "searchKey": "mian mpt"
    },
    {
        "code": "pla",
        "name": "Miani",
        "searchKey": "miani pla"
    },
    {
        "code": "crg",
        "name": "Michif",
        "searchKey": "michif crg"
    },
    {
        "code": "cmm",
        "name": "Michigamea",
        "searchKey": "michigamea cmm"
    },
    {
        "code": "mmc",
        "name": "Michoacán Mazahua",
        "searchKey": "michoacan mazahua mmc"
    },
    {
        "code": "ncl",
        "name": "Michoacán Nahuatl",
        "searchKey": "michoacan nahuatl ncl"
    },
    {
        "code": "dnt",
        "name": "Mid Grand Valley Dani",
        "searchKey": "mid grand valley dani dnt"
    },
    {
        "code": "axm",
        "name": "Middle Armenian",
        "searchKey": "middle armenian axm"
    },
    {
        "code": "xbm",
        "name": "Middle Breton",
        "searchKey": "middle breton xbm"
    },
    {
        "code": "cnx",
        "name": "Middle Cornish",
        "searchKey": "middle cornish cnx"
    },
    {
        "code": "dum",
        "name": "Middle Dutch (ca. 1050-1350)",
        "searchNames": [
            "Middle Dutch"
        ],
        "searchKey": "middle dutch ca 1050-1350 dum middle dutch"
    },
    {
        "code": "enm",
        "name": "Middle English (1100-1500)",
        "searchNames": [
            "Middle English"
        ],
        "searchKey": "middle english 1100-1500 enm middle english"
    },
    {
        "code": "frm",
        "name": "Middle French (ca. 1400-1600)",
        "searchNames": [
            "Middle French"
        ],
        "searchKey": "middle french ca 1400-1600 frm middle french"
    },
    {
        "code": "gmh",
        "name": "Middle High German (ca. 1050-1500)",
        "searchNames": [
            "Middle High German"
        ],
        "searchKey": "middle high german ca 1050-1500 gmh middle high german"
    },
    {
        "code": "htx",
        "name": "Middle Hittite",
        "searchKey": "middle hittite htx"
    },
    {
        "code": "mga",
        "name": "Middle Irish (900-1200)",
        "searchNames": [
            "Middle Irish"
        ],
        "searchKey": "middle irish 900-1200 mga middle irish"
    },
    {
        "code": "xhm",
        "name": "Middle Khmer (1400 to 1850 CE)",
        "searchNames": [
            "Middle Khmer"
        ],
        "searchKey": "middle khmer 1400 to 1850 ce xhm middle khmer"
    },
    {
        "code": "okm",
        "name": "Middle Korean (10th-16th cent.)",
        "searchNames": [
            "Middle Korean"
        ],
        "searchKey": "middle korean 10th-16th cent okm middle korean"
    },
    {
        "code": "gml",
        "name": "Middle Low German",
        "searchKey": "middle low german gml"
    },
    {
        "code": "xng",
        "name": "Middle Mongolian",
        "searchKey": "middle mongolian xng"
    },
    {
        "code": "nwx",
        "name": "Middle Newar",
        "searchKey": "middle newar nwx"
    },
    {
        "code": "mpl",
        "name": "Middle Watut",
        "searchKey": "middle watut mpl"
    },
    {
        "code": "wlm",
        "name": "Middle Welsh",
        "searchKey": "middle welsh wlm"
    },
    {
        "code": "mei",
        "name": "Midob",
        "searchKey": "midob mei"
    },
    {
        "code": "bjo",
        "name": "Mid-Southern Banda",
        "searchKey": "mid-southern banda bjo"
    },
    {
        "code": "mmy",
        "name": "Migaama",
        "searchKey": "migaama mmy"
    },
    {
        "code": "mpp",
        "name": "Migabac",
        "searchKey": "migabac mpp"
    },
    {
        "code": "klm",
        "name": "Migum",
        "searchKey": "migum klm"
    },
    {
        "code": "mxj",
        "name": "Miju-Mishmi",
        "searchKey": "miju-mishmi mxj"
    },
    {
        "code": "mik",
        "name": "Mikasuki",
        "searchKey": "mikasuki mik"
    },
    {
        "code": "mic",
        "name": "Mi'kmaq",
        "searchKey": "mikmaq mic"
    },
    {
        "code": "ymh",
        "name": "Mili",
        "searchKey": "mili ymh"
    },
    {
        "code": "mlj",
        "name": "Miltu",
        "searchKey": "miltu mlj"
    },
    {
        "code": "iml",
        "name": "Miluk",
        "searchKey": "miluk iml"
    },
    {
        "code": "imy",
        "name": "Milyan",
        "searchKey": "milyan imy"
    },
    {
        "code": "mnp",
        "name": "Min Bei Chinese",
        "searchKey": "min bei chinese mnp"
    },
    {
        "code": "cdo",
        "name": "Min Dong Chinese",
        "searchKey": "min dong chinese cdo"
    },
    {
        "code": "nan",
        "name": "Min Nan Chinese",
        "searchKey": "min nan chinese nan"
    },
    {
        "code": "czo",
        "name": "Min Zhong Chinese",
        "searchKey": "min zhong chinese czo"
    },
    {
        "code": "hna",
        "name": "Mina (Cameroon)",
        "searchNames": [
            "Mina"
        ],
        "searchKey": "mina cameroon hna mina"
    },
    {
        "code": "inm",
        "name": "Minaean",
        "searchKey": "minaean inm"
    },
    {
        "code": "xrg",
        "name": "Minang",
        "searchKey": "minang xrg"
    },
    {
        "code": "min",
        "name": "Minangkabau",
        "searchKey": "minangkabau min"
    },
    {
        "code": "mcv",
        "name": "Minanibai",
        "searchKey": "minanibai mcv"
    },
    {
        "code": "mvn",
        "name": "Minaveha",
        "searchKey": "minaveha mvn"
    },
    {
        "code": "drc",
        "name": "Minderico",
        "searchKey": "minderico drc"
    },
    {
        "code": "mpn",
        "name": "Mindiri",
        "searchKey": "mindiri mpn"
    },
    {
        "code": "mko",
        "name": "Mingang Doso",
        "searchKey": "mingang doso mko"
    },
    {
        "code": "xmf",
        "name": "Mingrelian",
        "searchKey": "mingrelian xmf"
    },
    {
        "code": "hto",
        "name": "Minica Huitoto",
        "searchKey": "minica huitoto hto"
    },
    {
        "code": "wii",
        "name": "Minidien",
        "searchKey": "minidien wii"
    },
    {
        "code": "xjb",
        "name": "Minjungbal",
        "searchKey": "minjungbal xjb"
    },
    {
        "code": "xxm",
        "name": "Minkin",
        "searchKey": "minkin xxm"
    },
    {
        "code": "omn",
        "name": "Minoan",
        "searchKey": "minoan omn"
    },
    {
        "code": "mqq",
        "name": "Minokok",
        "searchKey": "minokok mqq"
    },
    {
        "code": "mnq",
        "name": "Minriq",
        "searchKey": "minriq mnq"
    },
    {
        "code": "mzt",
        "name": "Mintil",
        "searchKey": "mintil mzt"
    },
    {
        "code": "zgm",
        "name": "Minz Zhuang",
        "searchKey": "minz zhuang zgm"
    },
    {
        "code": "yiq",
        "name": "Miqie",
        "searchKey": "miqie yiq"
    },
    {
        "code": "mwl",
        "name": "Mirandese",
        "searchKey": "mirandese mwl"
    },
    {
        "code": "rbl",
        "name": "Miraya Bikol",
        "searchKey": "miraya bikol rbl"
    },
    {
        "code": "zrg",
        "name": "Mirgan",
        "searchKey": "mirgan zrg"
    },
    {
        "code": "mmv",
        "name": "Miriti",
        "searchKey": "miriti mmv"
    },
    {
        "code": "mep",
        "name": "Miriwoong",
        "searchKey": "miriwoong mep"
    },
    {
        "code": "rsm",
        "name": "Miriwoong Sign Language",
        "searchKey": "miriwoong sign language rsm"
    },
    {
        "code": "gmr",
        "name": "Mirning",
        "searchKey": "mirning gmr"
    },
    {
        "code": "mjs",
        "name": "Miship",
        "searchKey": "miship mjs"
    },
    {
        "code": "mpx",
        "name": "Misima-Panaeati",
        "searchKey": "misima-panaeati mpx"
    },
    {
        "code": "mrg",
        "name": "Mising",
        "searchKey": "mising mrg"
    },
    {
        "code": "miq",
        "name": "Mískito",
        "searchKey": "miskito miq"
    },
    {
        "code": "zaw",
        "name": "Mitla Zapotec",
        "searchKey": "mitla zapotec zaw"
    },
    {
        "code": "vmm",
        "name": "Mitlatongo Mixtec",
        "searchKey": "mitlatongo mixtec vmm"
    },
    {
        "code": "mwu",
        "name": "Mittu",
        "searchKey": "mittu mwu"
    },
    {
        "code": "zmq",
        "name": "Mituku",
        "searchKey": "mituku zmq"
    },
    {
        "code": "mpo",
        "name": "Miu",
        "searchKey": "miu mpo"
    },
    {
        "code": "vmi",
        "name": "Miwa",
        "searchKey": "miwa vmi"
    },
    {
        "code": "gac",
        "name": "Mixed Great Andamanese",
        "searchKey": "mixed great andamanese gac"
    },
    {
        "code": "mix",
        "name": "Mixtepec Mixtec",
        "searchKey": "mixtepec mixtec mix"
    },
    {
        "code": "zpm",
        "name": "Mixtepec Zapotec",
        "searchKey": "mixtepec zapotec zpm"
    },
    {
        "code": "mkf",
        "name": "Miya",
        "searchKey": "miya mkf"
    },
    {
        "code": "mvi",
        "name": "Miyako",
        "searchKey": "miyako mvi"
    },
    {
        "code": "ehs",
        "name": "Miyakubo Sign Language",
        "searchKey": "miyakubo sign language ehs"
    },
    {
        "code": "soy",
        "name": "Miyobe",
        "searchKey": "miyobe soy"
    },
    {
        "code": "mra",
        "name": "Mlabri",
        "searchKey": "mlabri mra"
    },
    {
        "code": "lhs",
        "name": "Mlahsö",
        "searchKey": "mlahso lhs"
    },
    {
        "code": "kja",
        "name": "Mlap",
        "searchKey": "mlap kja"
    },
    {
        "code": "mlo",
        "name": "Mlomp",
        "searchKey": "mlomp mlo"
    },
    {
        "code": "mmu",
        "name": "Mmaala",
        "searchKey": "mmaala mmu"
    },
    {
        "code": "bfm",
        "name": "Mmen",
        "searchKey": "mmen bfm"
    },
    {
        "code": "obm",
        "name": "Moabite",
        "searchKey": "moabite obm"
    },
    {
        "code": "mfq",
        "name": "Moba",
        "searchKey": "moba mfq"
    },
    {
        "code": "mod",
        "name": "Mobilian",
        "searchKey": "mobilian mod"
    },
    {
        "code": "ahm",
        "name": "Mobumrin Aizi",
        "searchKey": "mobumrin aizi ahm"
    },
    {
        "code": "jkm",
        "name": "Mobwa Karen",
        "searchKey": "mobwa karen jkm"
    },
    {
        "code": "mhn",
        "name": "Mòcheno",
        "searchKey": "mocheno mhn"
    },
    {
        "code": "old",
        "name": "Mochi",
        "searchKey": "mochi old"
    },
    {
        "code": "omc",
        "name": "Mochica",
        "searchKey": "mochica omc"
    },
    {
        "code": "mhc",
        "name": "Mocho",
        "searchKey": "mocho mhc"
    },
    {
        "code": "moc",
        "name": "Mocoví",
        "searchKey": "mocovi moc"
    },
    {
        "code": "gbn",
        "name": "Mo'da",
        "searchKey": "moda gbn"
    },
    {
        "code": "mxd",
        "name": "Modang",
        "searchKey": "modang mxd"
    },
    {
        "code": "ell",
        "name": "Modern Greek (1453-)",
        "searchNames": [
            "Modern Greek"
        ],
        "searchKey": "modern greek 1453- ell modern greek"
    },
    {
        "code": "mqo",
        "name": "Modole",
        "searchKey": "modole mqo"
    },
    {
        "code": "mvq",
        "name": "Moere",
        "searchKey": "moere mvq"
    },
    {
        "code": "mif",
        "name": "Mofu-Gudur",
        "searchKey": "mofu-gudur mif"
    },
    {
        "code": "mhj",
        "name": "Mogholi",
        "searchKey": "mogholi mhj"
    },
    {
        "code": "mfg",
        "name": "Mogofin",
        "searchKey": "mogofin mfg"
    },
    {
        "code": "mou",
        "name": "Mogum",
        "searchKey": "mogum mou"
    },
    {
        "code": "mov",
        "name": "Mohave",
        "searchKey": "mohave mov"
    },
    {
        "code": "moh",
        "name": "Mohawk",
        "searchKey": "mohawk moh"
    },
    {
        "code": "xpq",
        "name": "Mohegan-Pequot",
        "searchKey": "mohegan-pequot xpq"
    },
    {
        "code": "mow",
        "name": "Moi (Congo)",
        "searchNames": [
            "Moi"
        ],
        "searchKey": "moi congo mow moi"
    },
    {
        "code": "mxn",
        "name": "Moi (Indonesia)",
        "searchNames": [
            "Moi"
        ],
        "searchKey": "moi indonesia mxn moi"
    },
    {
        "code": "mkp",
        "name": "Moikodi",
        "searchKey": "moikodi mkp"
    },
    {
        "code": "mwz",
        "name": "Moingi",
        "searchKey": "moingi mwz"
    },
    {
        "code": "daz",
        "name": "Moi-Wadea",
        "searchKey": "moi-wadea daz"
    },
    {
        "code": "ymi",
        "name": "Moji",
        "searchKey": "moji ymi"
    },
    {
        "code": "mqt",
        "name": "Mok",
        "searchKey": "mok mqt"
    },
    {
        "code": "wnb",
        "name": "Mokati",
        "searchKey": "mokati wnb"
    },
    {
        "code": "mwt",
        "name": "Moken",
        "searchKey": "moken mwt"
    },
    {
        "code": "mft",
        "name": "Mokerang",
        "searchKey": "mokerang mft"
    },
    {
        "code": "mkj",
        "name": "Mokilese",
        "searchKey": "mokilese mkj"
    },
    {
        "code": "mkm",
        "name": "Moklen",
        "searchKey": "moklen mkm"
    },
    {
        "code": "mkl",
        "name": "Mokole",
        "searchKey": "mokole mkl"
    },
    {
        "code": "bri",
        "name": "Mokpwe",
        "searchKey": "mokpwe bri"
    },
    {
        "code": "vms",
        "name": "Moksela",
        "searchKey": "moksela vms"
    },
    {
        "code": "mdf",
        "name": "Moksha",
        "searchKey": "moksha mdf"
    },
    {
        "code": "mbe",
        "name": "Molale",
        "searchKey": "molale mbe"
    },
    {
        "code": "pwm",
        "name": "Molbog",
        "searchKey": "molbog pwm"
    },
    {
        "code": "vsi",
        "name": "Moldova Sign Language",
        "searchKey": "moldova sign language vsi"
    },
    {
        "code": "bxc",
        "name": "Molengue",
        "searchKey": "molengue bxc"
    },
    {
        "code": "mox",
        "name": "Molima",
        "searchKey": "molima mox"
    },
    {
        "code": "aun",
        "name": "Molmo One",
        "searchKey": "molmo one aun"
    },
    {
        "code": "zmo",
        "name": "Molo",
        "searchKey": "molo zmo"
    },
    {
        "code": "msl",
        "name": "Molof",
        "searchKey": "molof msl"
    },
    {
        "code": "mlw",
        "name": "Moloko",
        "searchKey": "moloko mlw"
    },
    {
        "code": "ver",
        "name": "Mom Jango",
        "searchKey": "mom jango ver"
    },
    {
        "code": "myl",
        "name": "Moma",
        "searchKey": "moma myl"
    },
    {
        "code": "msz",
        "name": "Momare",
        "searchKey": "momare msz"
    },
    {
        "code": "dmb",
        "name": "Mombo Dogon",
        "searchKey": "mombo dogon dmb"
    },
    {
        "code": "mso",
        "name": "Mombum",
        "searchKey": "mombum mso"
    },
    {
        "code": "mmb",
        "name": "Momina",
        "searchKey": "momina mmb"
    },
    {
        "code": "mqf",
        "name": "Momuna",
        "searchKey": "momuna mqf"
    },
    {
        "code": "mnw",
        "name": "Mon",
        "searchKey": "mon mnw"
    },
    {
        "code": "mzg",
        "name": "Monastic Sign Language",
        "searchKey": "monastic sign language mzg"
    },
    {
        "code": "mnd",
        "name": "Mondé",
        "searchKey": "monde mnd"
    },
    {
        "code": "npn",
        "name": "Mondropolon",
        "searchKey": "mondropolon npn"
    },
    {
        "code": "lol",
        "name": "Mongo",
        "searchKey": "mongo lol"
    },
    {
        "code": "mgt",
        "name": "Mongol",
        "searchKey": "mongol mgt"
    },
    {
        "code": "bxm",
        "name": "Mongolia Buriat",
        "searchKey": "mongolia buriat bxm"
    },
    {
        "code": "mon",
        "name": "Mongolian",
        "searchKey": "mongolian mon"
    },
    {
        "code": "msr",
        "name": "Mongolian Sign Language",
        "searchKey": "mongolian sign language msr"
    },
    {
        "code": "mog",
        "name": "Mongondow",
        "searchKey": "mongondow mog"
    },
    {
        "code": "mnz",
        "name": "Moni",
        "searchKey": "moni mnz"
    },
    {
        "code": "mru",
        "name": "Mono (Cameroon)",
        "searchNames": [
            "Mono"
        ],
        "searchKey": "mono cameroon mru mono"
    },
    {
        "code": "mnh",
        "name": "Mono (Democratic Republic of Congo)",
        "searchNames": [
            "Mono"
        ],
        "searchKey": "mono democratic republic of congo mnh mono"
    },
    {
        "code": "mte",
        "name": "Mono (Solomon Islands)",
        "searchNames": [
            "Mono"
        ],
        "searchKey": "mono solomon islands mte mono"
    },
    {
        "code": "mnr",
        "name": "Mono (USA)",
        "searchNames": [
            "Mono"
        ],
        "searchKey": "mono usa mnr mono"
    },
    {
        "code": "moo",
        "name": "Monom",
        "searchKey": "monom moo"
    },
    {
        "code": "nmh",
        "name": "Monsang Naga",
        "searchKey": "monsang naga nmh"
    },
    {
        "code": "cnr",
        "name": "Montenegrin",
        "searchKey": "montenegrin cnr"
    },
    {
        "code": "mtl",
        "name": "Montol",
        "searchKey": "montol mtl"
    },
    {
        "code": "mxk",
        "name": "Monumbo",
        "searchKey": "monumbo mxk"
    },
    {
        "code": "moj",
        "name": "Monzombo",
        "searchKey": "monzombo moj"
    },
    {
        "code": "gwg",
        "name": "Moo",
        "searchKey": "moo gwg"
    },
    {
        "code": "crm",
        "name": "Moose Cree",
        "searchKey": "moose cree crm"
    },
    {
        "code": "mop",
        "name": "Mopán Maya",
        "searchKey": "mopan maya mop"
    },
    {
        "code": "moq",
        "name": "Mor (Bomberai Peninsula)",
        "searchNames": [
            "Mor"
        ],
        "searchKey": "mor bomberai peninsula moq mor"
    },
    {
        "code": "mhz",
        "name": "Mor (Mor Islands)",
        "searchNames": [
            "Mor"
        ],
        "searchKey": "mor mor islands mhz mor"
    },
    {
        "code": "msg",
        "name": "Moraid",
        "searchKey": "moraid msg"
    },
    {
        "code": "mze",
        "name": "Morawa",
        "searchKey": "morawa mze"
    },
    {
        "code": "nhm",
        "name": "Morelos Nahuatl",
        "searchKey": "morelos nahuatl nhm"
    },
    {
        "code": "xmo",
        "name": "Morerebi",
        "searchKey": "morerebi xmo"
    },
    {
        "code": "msx",
        "name": "Moresada",
        "searchKey": "moresada msx"
    },
    {
        "code": "mzq",
        "name": "Mori Atas",
        "searchKey": "mori atas mzq"
    },
    {
        "code": "xmz",
        "name": "Mori Bawah",
        "searchKey": "mori bawah xmz"
    },
    {
        "code": "mdb",
        "name": "Morigi",
        "searchKey": "morigi mdb"
    },
    {
        "code": "rrm",
        "name": "Moriori",
        "searchKey": "moriori rrm"
    },
    {
        "code": "mfe",
        "name": "Morisyen",
        "searchKey": "morisyen mfe"
    },
    {
        "code": "mor",
        "name": "Moro",
        "searchKey": "moro mor"
    },
    {
        "code": "ary",
        "name": "Moroccan Arabic",
        "searchKey": "moroccan arabic ary"
    },
    {
        "code": "xms",
        "name": "Moroccan Sign Language",
        "searchKey": "moroccan sign language xms"
    },
    {
        "code": "mgc",
        "name": "Morokodo",
        "searchKey": "morokodo mgc"
    },
    {
        "code": "bdo",
        "name": "Morom",
        "searchKey": "morom bdo"
    },
    {
        "code": "mqn",
        "name": "Moronene",
        "searchKey": "moronene mqn"
    },
    {
        "code": "mok",
        "name": "Morori",
        "searchKey": "morori mok"
    },
    {
        "code": "mrp",
        "name": "Morouas",
        "searchKey": "morouas mrp"
    },
    {
        "code": "umg",
        "name": "Morrobalama",
        "searchKey": "morrobalama umg"
    },
    {
        "code": "mrl",
        "name": "Mortlockese",
        "searchKey": "mortlockese mrl"
    },
    {
        "code": "mgd",
        "name": "Moru",
        "searchKey": "moru mgd"
    },
    {
        "code": "mqv",
        "name": "Mosimo",
        "searchKey": "mosimo mqv"
    },
    {
        "code": "mtj",
        "name": "Moskona",
        "searchKey": "moskona mtj"
    },
    {
        "code": "mos",
        "name": "Mossi",
        "searchKey": "mossi mos"
    },
    {
        "code": "mtt",
        "name": "Mota",
        "searchKey": "mota mtt"
    },
    {
        "code": "mlv",
        "name": "Motlav",
        "searchKey": "motlav mlv"
    },
    {
        "code": "meu",
        "name": "Motu",
        "searchKey": "motu meu"
    },
    {
        "code": "mwh",
        "name": "Mouk-Aria",
        "searchKey": "mouk-aria mwh"
    },
    {
        "code": "cty",
        "name": "Moundadan Chetty",
        "searchKey": "moundadan chetty cty"
    },
    {
        "code": "kpx",
        "name": "Mountain Koiali",
        "searchKey": "mountain koiali kpx"
    },
    {
        "code": "jmw",
        "name": "Mouwase",
        "searchKey": "mouwase jmw"
    },
    {
        "code": "mzp",
        "name": "Movima",
        "searchKey": "movima mzp"
    },
    {
        "code": "ity",
        "name": "Moyadan Itneg",
        "searchKey": "moyadan itneg ity"
    },
    {
        "code": "nmo",
        "name": "Moyon Naga",
        "searchKey": "moyon naga nmo"
    },
    {
        "code": "mzy",
        "name": "Mozambican Sign Language",
        "searchKey": "mozambican sign language mzy"
    },
    {
        "code": "mxi",
        "name": "Mozarabic",
        "searchKey": "mozarabic mxi"
    },
    {
        "code": "mpi",
        "name": "Mpade",
        "searchKey": "mpade mpi"
    },
    {
        "code": "xpj",
        "name": "Mpalitjanh",
        "searchKey": "mpalitjanh xpj"
    },
    {
        "code": "mpz",
        "name": "Mpi",
        "searchKey": "mpi mpz"
    },
    {
        "code": "mcx",
        "name": "Mpiemo",
        "searchKey": "mpiemo mcx"
    },
    {
        "code": "pnd",
        "name": "Mpinda",
        "searchKey": "mpinda pnd"
    },
    {
        "code": "mpa",
        "name": "Mpoto",
        "searchKey": "mpoto mpa"
    },
    {
        "code": "mvt",
        "name": "Mpotovoro",
        "searchKey": "mpotovoro mvt"
    },
    {
        "code": "mgg",
        "name": "Mpumpong",
        "searchKey": "mpumpong mgg"
    },
    {
        "code": "akc",
        "name": "Mpur",
        "searchKey": "mpur akc"
    },
    {
        "code": "cmr",
        "name": "Mro-Khimi Chin",
        "searchKey": "mro-khimi chin cmr"
    },
    {
        "code": "mro",
        "name": "Mru",
        "searchKey": "mru mro"
    },
    {
        "code": "kqx",
        "name": "Mser",
        "searchKey": "mser kqx"
    },
    {
        "code": "atl",
        "name": "Mt. Iraya Agta",
        "searchKey": "mt iraya agta atl"
    },
    {
        "code": "agz",
        "name": "Mt. Iriga Agta",
        "searchKey": "mt iriga agta agz"
    },
    {
        "code": "ukk",
        "name": "Muak Sa-aak",
        "searchKey": "muak sa-aak ukk"
    },
    {
        "code": "mtd",
        "name": "Mualang",
        "searchKey": "mualang mtd"
    },
    {
        "code": "tsx",
        "name": "Mubami",
        "searchKey": "mubami tsx"
    },
    {
        "code": "mub",
        "name": "Mubi",
        "searchKey": "mubi mub"
    },
    {
        "code": "ymd",
        "name": "Muda",
        "searchKey": "muda ymd"
    },
    {
        "code": "dmw",
        "name": "Mudburra",
        "searchKey": "mudburra dmw"
    },
    {
        "code": "gau",
        "name": "Mudhili Gadaba",
        "searchKey": "mudhili gadaba gau"
    },
    {
        "code": "vmd",
        "name": "Mudu Koraga",
        "searchKey": "mudu koraga vmd"
    },
    {
        "code": "udg",
        "name": "Muduga",
        "searchKey": "muduga udg"
    },
    {
        "code": "aoj",
        "name": "Mufian",
        "searchKey": "mufian aoj"
    },
    {
        "code": "muk",
        "name": "Mugom",
        "searchKey": "mugom muk"
    },
    {
        "code": "bmr",
        "name": "Muinane",
        "searchKey": "muinane bmr"
    },
    {
        "code": "mmk",
        "name": "Mukha-Dora",
        "searchKey": "mukha-dora mmk"
    },
    {
        "code": "moz",
        "name": "Mukulu",
        "searchKey": "mukulu moz"
    },
    {
        "code": "mfw",
        "name": "Mulaha",
        "searchKey": "mulaha mfw"
    },
    {
        "code": "mlm",
        "name": "Mulam",
        "searchKey": "mulam mlm"
    },
    {
        "code": "giu",
        "name": "Mulao",
        "searchKey": "mulao giu"
    },
    {
        "code": "mvh",
        "name": "Mulgi",
        "searchKey": "mulgi mvh"
    },
    {
        "code": "kpb",
        "name": "Mullu Kurumba",
        "searchKey": "mullu kurumba kpb"
    },
    {
        "code": "mul",
        "name": "Multiple languages",
        "searchKey": "multiple languages mul"
    },
    {
        "code": "vmu",
        "name": "Muluridyi",
        "searchKey": "muluridyi vmu"
    },
    {
        "code": "kqa",
        "name": "Mum",
        "searchKey": "mum kqa"
    },
    {
        "code": "mzm",
        "name": "Mumuye",
        "searchKey": "mumuye mzm"
    },
    {
        "code": "mwq",
        "name": "Mün Chin",
        "searchKey": "mun chin mwq"
    },
    {
        "code": "mnb",
        "name": "Muna",
        "searchKey": "muna mnb"
    },
    {
        "code": "unx",
        "name": "Munda",
        "searchKey": "munda unx"
    },
    {
        "code": "boe",
        "name": "Mundabli-Mufu",
        "searchKey": "mundabli-mufu boe"
    },
    {
        "code": "mua",
        "name": "Mundang",
        "searchKey": "mundang mua"
    },
    {
        "code": "mnf",
        "name": "Mundani",
        "searchKey": "mundani mnf"
    },
    {
        "code": "unr",
        "name": "Mundari",
        "searchKey": "mundari unr"
    },
    {
        "code": "mmf",
        "name": "Mundat",
        "searchKey": "mundat mmf"
    },
    {
        "code": "muh",
        "name": "Mündü",
        "searchKey": "mundu muh"
    },
    {
        "code": "myu",
        "name": "Mundurukú",
        "searchKey": "munduruku myu"
    },
    {
        "code": "mhk",
        "name": "Mungaka",
        "searchKey": "mungaka mhk"
    },
    {
        "code": "mth",
        "name": "Munggui",
        "searchKey": "munggui mth"
    },
    {
        "code": "mpv",
        "name": "Mungkip",
        "searchKey": "mungkip mpv"
    },
    {
        "code": "myr",
        "name": "Muniche",
        "searchKey": "muniche myr"
    },
    {
        "code": "mtc",
        "name": "Munit",
        "searchKey": "munit mtc"
    },
    {
        "code": "mnj",
        "name": "Munji",
        "searchKey": "munji mnj"
    },
    {
        "code": "umu",
        "name": "Munsee",
        "searchKey": "munsee umu"
    },
    {
        "code": "mtq",
        "name": "Muong",
        "searchKey": "muong mtq"
    },
    {
        "code": "tkv",
        "name": "Mur Pano",
        "searchKey": "mur pano tkv"
    },
    {
        "code": "asx",
        "name": "Muratayak",
        "searchKey": "muratayak asx"
    },
    {
        "code": "mxr",
        "name": "Murik (Malaysia)",
        "searchNames": [
            "Murik"
        ],
        "searchKey": "murik malaysia mxr murik"
    },
    {
        "code": "mtf",
        "name": "Murik (Papua New Guinea)",
        "searchNames": [
            "Murik"
        ],
        "searchKey": "murik papua new guinea mtf murik"
    },
    {
        "code": "rmh",
        "name": "Murkim",
        "searchKey": "murkim rmh"
    },
    {
        "code": "mur",
        "name": "Murle",
        "searchKey": "murle mur"
    },
    {
        "code": "mwf",
        "name": "Murrinh-Patha",
        "searchKey": "murrinh-patha mwf"
    },
    {
        "code": "muz",
        "name": "Mursi",
        "searchKey": "mursi muz"
    },
    {
        "code": "huu",
        "name": "Murui Huitoto",
        "searchKey": "murui huitoto huu"
    },
    {
        "code": "mqw",
        "name": "Murupi",
        "searchKey": "murupi mqw"
    },
    {
        "code": "zmu",
        "name": "Muruwari",
        "searchKey": "muruwari zmu"
    },
    {
        "code": "mmq",
        "name": "Musak",
        "searchKey": "musak mmq"
    },
    {
        "code": "smm",
        "name": "Musasa",
        "searchKey": "musasa smm"
    },
    {
        "code": "mse",
        "name": "Musey",
        "searchKey": "musey mse"
    },
    {
        "code": "mug",
        "name": "Musgu",
        "searchKey": "musgu mug"
    },
    {
        "code": "xma",
        "name": "Mushungulu",
        "searchKey": "mushungulu xma"
    },
    {
        "code": "mui",
        "name": "Musi",
        "searchKey": "musi mui"
    },
    {
        "code": "mje",
        "name": "Muskum",
        "searchKey": "muskum mje"
    },
    {
        "code": "ttt",
        "name": "Muslim Tat",
        "searchKey": "muslim tat ttt"
    },
    {
        "code": "msu",
        "name": "Musom",
        "searchKey": "musom msu"
    },
    {
        "code": "emi",
        "name": "Mussau-Emira",
        "searchKey": "mussau-emira emi"
    },
    {
        "code": "muv",
        "name": "Muthuvan",
        "searchKey": "muthuvan muv"
    },
    {
        "code": "tuc",
        "name": "Mutu",
        "searchKey": "mutu tuc"
    },
    {
        "code": "muy",
        "name": "Muyang",
        "searchKey": "muyang muy"
    },
    {
        "code": "myw",
        "name": "Muyuw",
        "searchKey": "muyuw myw"
    },
    {
        "code": "ymz",
        "name": "Muzi",
        "searchKey": "muzi ymz"
    },
    {
        "code": "mcj",
        "name": "Mvanip",
        "searchKey": "mvanip mcj"
    },
    {
        "code": "mxh",
        "name": "Mvuba",
        "searchKey": "mvuba mxh"
    },
    {
        "code": "sur",
        "name": "Mwaghavul",
        "searchKey": "mwaghavul sur"
    },
    {
        "code": "wlc",
        "name": "Mwali Comorian",
        "searchKey": "mwali comorian wlc"
    },
    {
        "code": "moa",
        "name": "Mwan",
        "searchKey": "mwan moa"
    },
    {
        "code": "wmw",
        "name": "Mwani",
        "searchKey": "mwani wmw"
    },
    {
        "code": "mwa",
        "name": "Mwatebu",
        "searchKey": "mwatebu mwa"
    },
    {
        "code": "mwe",
        "name": "Mwera (Chimwera)",
        "searchNames": [
            "Mwera"
        ],
        "searchKey": "mwera chimwera mwe mwera"
    },
    {
        "code": "mjh",
        "name": "Mwera (Nyasa)",
        "searchNames": [
            "Mwera"
        ],
        "searchKey": "mwera nyasa mjh mwera"
    },
    {
        "code": "mws",
        "name": "Mwimbi-Muthambi",
        "searchKey": "mwimbi-muthambi mws"
    },
    {
        "code": "ysm",
        "name": "Myanmar Sign Language",
        "searchKey": "myanmar sign language ysm"
    },
    {
        "code": "gmy",
        "name": "Mycenaean Greek",
        "searchKey": "mycenaean greek gmy"
    },
    {
        "code": "mye",
        "name": "Myene",
        "searchKey": "myene mye"
    },
    {
        "code": "yms",
        "name": "Mysian",
        "searchKey": "mysian yms"
    },
    {
        "code": "nme",
        "name": "Mzieme Naga",
        "searchKey": "mzieme naga nme"
    },
    {
        "code": "ngh",
        "name": "Nǁng",
        "searchKey": "nǁng ngh"
    },
    {
        "code": "nbt",
        "name": "Na",
        "searchKey": "na nbt"
    },
    {
        "code": "nao",
        "name": "Naaba",
        "searchKey": "naaba nao"
    },
    {
        "code": "bzv",
        "name": "Naami",
        "searchKey": "naami bzv"
    },
    {
        "code": "nas",
        "name": "Naasioi",
        "searchKey": "naasioi nas"
    },
    {
        "code": "mne",
        "name": "Naba",
        "searchKey": "naba mne"
    },
    {
        "code": "naf",
        "name": "Nabak",
        "searchKey": "nabak naf"
    },
    {
        "code": "mty",
        "name": "Nabi",
        "searchKey": "nabi mty"
    },
    {
        "code": "ncd",
        "name": "Nachering",
        "searchKey": "nachering ncd"
    },
    {
        "code": "mbj",
        "name": "Nadëb",
        "searchKey": "nadeb mbj"
    },
    {
        "code": "ndf",
        "name": "Nadruvian",
        "searchKey": "nadruvian ndf"
    },
    {
        "code": "nfr",
        "name": "Nafaanra",
        "searchKey": "nafaanra nfr"
    },
    {
        "code": "srf",
        "name": "Nafi",
        "searchKey": "nafi srf"
    },
    {
        "code": "nxx",
        "name": "Nafri",
        "searchKey": "nafri nxx"
    },
    {
        "code": "jbn",
        "name": "Nafusi",
        "searchKey": "nafusi jbn"
    },
    {
        "code": "nag",
        "name": "Naga Pidgin",
        "searchKey": "naga pidgin nag"
    },
    {
        "code": "nbg",
        "name": "Nagarchal",
        "searchKey": "nagarchal nbg"
    },
    {
        "code": "nxe",
        "name": "Nage",
        "searchKey": "nage nxe"
    },
    {
        "code": "ngv",
        "name": "Nagumi",
        "searchKey": "nagumi ngv"
    },
    {
        "code": "nlx",
        "name": "Nahali",
        "searchKey": "nahali nlx"
    },
    {
        "code": "nhh",
        "name": "Nahari",
        "searchKey": "nahari nhh"
    },
    {
        "code": "bio",
        "name": "Nai",
        "searchKey": "nai bio"
    },
    {
        "code": "ars",
        "name": "Najdi Arabic",
        "searchKey": "najdi arabic ars"
    },
    {
        "code": "nae",
        "name": "Naka'ela",
        "searchKey": "nakaela nae"
    },
    {
        "code": "nkj",
        "name": "Nakai",
        "searchKey": "nakai nkj"
    },
    {
        "code": "nib",
        "name": "Nakame",
        "searchKey": "nakame nib"
    },
    {
        "code": "nak",
        "name": "Nakanai",
        "searchKey": "nakanai nak"
    },
    {
        "code": "nck",
        "name": "Na-kara",
        "searchKey": "na-kara nck"
    },
    {
        "code": "nbk",
        "name": "Nake",
        "searchKey": "nake nbk"
    },
    {
        "code": "mff",
        "name": "Naki",
        "searchKey": "naki mff"
    },
    {
        "code": "nax",
        "name": "Nakwi",
        "searchKey": "nakwi nax"
    },
    {
        "code": "nlc",
        "name": "Nalca",
        "searchKey": "nalca nlc"
    },
    {
        "code": "nss",
        "name": "Nali",
        "searchKey": "nali nss"
    },
    {
        "code": "nal",
        "name": "Nalik",
        "searchKey": "nalik nal"
    },
    {
        "code": "nlz",
        "name": "Nalögo",
        "searchKey": "nalogo nlz"
    },
    {
        "code": "naj",
        "name": "Nalu",
        "searchKey": "nalu naj"
    },
    {
        "code": "ylo",
        "name": "Naluo Yi",
        "searchKey": "naluo yi ylo"
    },
    {
        "code": "nmx",
        "name": "Nama (Papua New Guinea)",
        "searchNames": [
            "Nama"
        ],
        "searchKey": "nama papua new guinea nmx nama"
    },
    {
        "code": "nmk",
        "name": "Namakura",
        "searchKey": "namakura nmk"
    },
    {
        "code": "nkm",
        "name": "Namat",
        "searchKey": "namat nkm"
    },
    {
        "code": "ncm",
        "name": "Nambo",
        "searchKey": "nambo ncm"
    },
    {
        "code": "nmq",
        "name": "Nambya",
        "searchKey": "nambya nmq"
    },
    {
        "code": "neo",
        "name": "Ná-Meo",
        "searchKey": "na-meo neo"
    },
    {
        "code": "nnm",
        "name": "Namia",
        "searchKey": "namia nnm"
    },
    {
        "code": "nvm",
        "name": "Namiae",
        "searchKey": "namiae nvm"
    },
    {
        "code": "nbs",
        "name": "Namibian Sign Language",
        "searchKey": "namibian sign language nbs"
    },
    {
        "code": "naa",
        "name": "Namla",
        "searchKey": "namla naa"
    },
    {
        "code": "mxw",
        "name": "Namo",
        "searchKey": "namo mxw"
    },
    {
        "code": "nmt",
        "name": "Namonuito",
        "searchKey": "namonuito nmt"
    },
    {
        "code": "bwb",
        "name": "Namosi-Naitasiri-Serua",
        "searchKey": "namosi-naitasiri-serua bwb"
    },
    {
        "code": "nmy",
        "name": "Namuyi",
        "searchKey": "namuyi nmy"
    },
    {
        "code": "gld",
        "name": "Nanai",
        "searchKey": "nanai gld"
    },
    {
        "code": "nnc",
        "name": "Nancere",
        "searchKey": "nancere nnc"
    },
    {
        "code": "nnb",
        "name": "Nande",
        "searchKey": "nande nnb"
    },
    {
        "code": "niq",
        "name": "Nandi",
        "searchKey": "nandi niq"
    },
    {
        "code": "sen",
        "name": "Nanerigé Sénoufo",
        "searchKey": "nanerige senoufo sen"
    },
    {
        "code": "nzz",
        "name": "Nanga Dama Dogon",
        "searchKey": "nanga dama dogon nzz"
    },
    {
        "code": "nnk",
        "name": "Nankina",
        "searchKey": "nankina nnk"
    },
    {
        "code": "cox",
        "name": "Nanti",
        "searchKey": "nanti cox"
    },
    {
        "code": "nnt",
        "name": "Nanticoke",
        "searchKey": "nanticoke nnt"
    },
    {
        "code": "afk",
        "name": "Nanubae",
        "searchKey": "nanubae afk"
    },
    {
        "code": "qvo",
        "name": "Napo Lowland Quechua",
        "searchKey": "napo lowland quechua qvo"
    },
    {
        "code": "npy",
        "name": "Napu",
        "searchKey": "napu npy"
    },
    {
        "code": "npa",
        "name": "Nar Phu",
        "searchKey": "nar phu npa"
    },
    {
        "code": "nrb",
        "name": "Nara",
        "searchKey": "nara nrb"
    },
    {
        "code": "nac",
        "name": "Narak",
        "searchKey": "narak nac"
    },
    {
        "code": "nrg",
        "name": "Narango",
        "searchKey": "narango nrg"
    },
    {
        "code": "rnr",
        "name": "Nari Nari",
        "searchKey": "nari nari rnr"
    },
    {
        "code": "nhr",
        "name": "Naro",
        "searchKey": "naro nhr"
    },
    {
        "code": "nrm",
        "name": "Narom",
        "searchKey": "narom nrm"
    },
    {
        "code": "xnt",
        "name": "Narragansett",
        "searchKey": "narragansett xnt"
    },
    {
        "code": "nru",
        "name": "Narua",
        "searchKey": "narua nru"
    },
    {
        "code": "nnr",
        "name": "Narungga",
        "searchKey": "narungga nnr"
    },
    {
        "code": "nsy",
        "name": "Nasal",
        "searchKey": "nasal nsy"
    },
    {
        "code": "nvh",
        "name": "Nasarian",
        "searchKey": "nasarian nvh"
    },
    {
        "code": "nsk",
        "name": "Naskapi",
        "searchKey": "naskapi nsk"
    },
    {
        "code": "ntz",
        "name": "Natanzi",
        "searchKey": "natanzi ntz"
    },
    {
        "code": "ncz",
        "name": "Natchez",
        "searchKey": "natchez ncz"
    },
    {
        "code": "ntm",
        "name": "Nateni",
        "searchKey": "nateni ntm"
    },
    {
        "code": "nti",
        "name": "Natioro",
        "searchKey": "natioro nti"
    },
    {
        "code": "ntu",
        "name": "Natügu",
        "searchKey": "natugu ntu"
    },
    {
        "code": "nxa",
        "name": "Nauete",
        "searchKey": "nauete nxa"
    },
    {
        "code": "ynk",
        "name": "Naukan Yupik",
        "searchKey": "naukan yupik ynk"
    },
    {
        "code": "ncn",
        "name": "Nauna",
        "searchKey": "nauna ncn"
    },
    {
        "code": "nwo",
        "name": "Nauo",
        "searchKey": "nauo nwo"
    },
    {
        "code": "nau",
        "name": "Nauru",
        "searchKey": "nauru nau"
    },
    {
        "code": "nav",
        "name": "Navajo",
        "searchKey": "navajo nav"
    },
    {
        "code": "nsw",
        "name": "Navut",
        "searchKey": "navut nsw"
    },
    {
        "code": "nwr",
        "name": "Nawaru",
        "searchKey": "nawaru nwr"
    },
    {
        "code": "nwa",
        "name": "Nawathinehena",
        "searchKey": "nawathinehena nwa"
    },
    {
        "code": "nmz",
        "name": "Nawdm",
        "searchKey": "nawdm nmz"
    },
    {
        "code": "naw",
        "name": "Nawuri",
        "searchKey": "nawuri naw"
    },
    {
        "code": "nxq",
        "name": "Naxi",
        "searchKey": "naxi nxq"
    },
    {
        "code": "noz",
        "name": "Nayi",
        "searchKey": "nayi noz"
    },
    {
        "code": "nyq",
        "name": "Nayini",
        "searchKey": "nayini nyq"
    },
    {
        "code": "ncr",
        "name": "Ncane",
        "searchKey": "ncane ncr"
    },
    {
        "code": "nlu",
        "name": "Nchumbulu",
        "searchKey": "nchumbulu nlu"
    },
    {
        "code": "gke",
        "name": "Ndai",
        "searchKey": "ndai gke"
    },
    {
        "code": "ndk",
        "name": "Ndaka",
        "searchKey": "ndaka ndk"
    },
    {
        "code": "ndh",
        "name": "Ndali",
        "searchKey": "ndali ndh"
    },
    {
        "code": "ndm",
        "name": "Ndam",
        "searchKey": "ndam ndm"
    },
    {
        "code": "ndj",
        "name": "Ndamba",
        "searchKey": "ndamba ndj"
    },
    {
        "code": "nxo",
        "name": "Ndambomo",
        "searchKey": "ndambomo nxo"
    },
    {
        "code": "nnz",
        "name": "Nda'nda'",
        "searchKey": "ndanda nnz"
    },
    {
        "code": "nda",
        "name": "Ndasa",
        "searchKey": "ndasa nda"
    },
    {
        "code": "ndc",
        "name": "Ndau",
        "searchKey": "ndau ndc"
    },
    {
        "code": "ned",
        "name": "Nde-Gbite",
        "searchKey": "nde-gbite ned"
    },
    {
        "code": "nml",
        "name": "Ndemli",
        "searchKey": "ndemli nml"
    },
    {
        "code": "dne",
        "name": "Ndendeule",
        "searchKey": "ndendeule dne"
    },
    {
        "code": "ndg",
        "name": "Ndengereko",
        "searchKey": "ndengereko ndg"
    },
    {
        "code": "ndd",
        "name": "Nde-Nsele-Nta",
        "searchKey": "nde-nsele-nta ndd"
    },
    {
        "code": "eli",
        "name": "Nding",
        "searchKey": "nding eli"
    },
    {
        "code": "ndp",
        "name": "Ndo",
        "searchKey": "ndo ndp"
    },
    {
        "code": "ndw",
        "name": "Ndobo",
        "searchKey": "ndobo ndw"
    },
    {
        "code": "nbb",
        "name": "Ndoe",
        "searchKey": "ndoe nbb"
    },
    {
        "code": "ndz",
        "name": "Ndogo",
        "searchKey": "ndogo ndz"
    },
    {
        "code": "ndl",
        "name": "Ndolo",
        "searchKey": "ndolo ndl"
    },
    {
        "code": "nqm",
        "name": "Ndom",
        "searchKey": "ndom nqm"
    },
    {
        "code": "ndq",
        "name": "Ndombe",
        "searchKey": "ndombe ndq"
    },
    {
        "code": "njd",
        "name": "Ndonde Hamba",
        "searchKey": "ndonde hamba njd"
    },
    {
        "code": "ndo",
        "name": "Ndonga",
        "searchKey": "ndonga ndo"
    },
    {
        "code": "ndr",
        "name": "Ndoola",
        "searchKey": "ndoola ndr"
    },
    {
        "code": "dgt",
        "name": "Ndra'ngith",
        "searchKey": "ndrangith dgt"
    },
    {
        "code": "dno",
        "name": "Ndrulo",
        "searchKey": "ndrulo dno"
    },
    {
        "code": "ndx",
        "name": "Nduga",
        "searchKey": "nduga ndx"
    },
    {
        "code": "nmd",
        "name": "Ndumu",
        "searchKey": "ndumu nmd"
    },
    {
        "code": "nuh",
        "name": "Ndunda",
        "searchKey": "ndunda nuh"
    },
    {
        "code": "ndt",
        "name": "Ndunga",
        "searchKey": "ndunga ndt"
    },
    {
        "code": "ndv",
        "name": "Ndut",
        "searchKey": "ndut ndv"
    },
    {
        "code": "nww",
        "name": "Ndwewe",
        "searchKey": "ndwewe nww"
    },
    {
        "code": "njt",
        "name": "Ndyuka-Trio Pidgin",
        "searchKey": "ndyuka-trio pidgin njt"
    },
    {
        "code": "wni",
        "name": "Ndzwani Comorian",
        "searchKey": "ndzwani comorian wni"
    },
    {
        "code": "nap",
        "name": "Neapolitan",
        "searchKey": "neapolitan nap"
    },
    {
        "code": "nec",
        "name": "Nedebang",
        "searchKey": "nedebang nec"
    },
    {
        "code": "nef",
        "name": "Nefamese",
        "searchKey": "nefamese nef"
    },
    {
        "code": "dcr",
        "name": "Negerhollands",
        "searchKey": "negerhollands dcr"
    },
    {
        "code": "zmi",
        "name": "Negeri Sembilan Malay",
        "searchKey": "negeri sembilan malay zmi"
    },
    {
        "code": "neg",
        "name": "Negidal",
        "searchKey": "negidal neg"
    },
    {
        "code": "nsn",
        "name": "Nehan",
        "searchKey": "nehan nsn"
    },
    {
        "code": "nif",
        "name": "Nek",
        "searchKey": "nek nif"
    },
    {
        "code": "nkg",
        "name": "Nekgini",
        "searchKey": "nekgini nkg"
    },
    {
        "code": "nej",
        "name": "Neko",
        "searchKey": "neko nej"
    },
    {
        "code": "nek",
        "name": "Neku",
        "searchKey": "neku nek"
    },
    {
        "code": "nee",
        "name": "Nêlêmwa-Nixumwak",
        "searchKey": "nelemwa-nixumwak nee"
    },
    {
        "code": "gsn",
        "name": "Nema",
        "searchKey": "nema gsn"
    },
    {
        "code": "nex",
        "name": "Neme",
        "searchKey": "neme nex"
    },
    {
        "code": "nem",
        "name": "Nemi",
        "searchKey": "nemi nem"
    },
    {
        "code": "nqn",
        "name": "Nen",
        "searchKey": "nen nqn"
    },
    {
        "code": "anh",
        "name": "Nend",
        "searchKey": "nend anh"
    },
    {
        "code": "yrk",
        "name": "Nenets",
        "searchKey": "nenets yrk"
    },
    {
        "code": "nen",
        "name": "Nengone",
        "searchKey": "nengone nen"
    },
    {
        "code": "neu",
        "name": "Neo",
        "searchKey": "neo neu"
    },
    {
        "code": "nei",
        "name": "Neo-Hittite",
        "searchKey": "neo-hittite nei"
    },
    {
        "code": "new",
        "name": "Nepal Bhasa",
        "searchKey": "nepal bhasa new"
    },
    {
        "code": "nsp",
        "name": "Nepalese Sign Language",
        "searchKey": "nepalese sign language nsp"
    },
    {
        "code": "npi",
        "name": "Nepali (individual language)",
        "searchNames": [
            "Nepali"
        ],
        "searchKey": "nepali individual language npi nepali"
    },
    {
        "code": "nep",
        "name": "Nepali (macrolanguage)",
        "searchNames": [
            "Nepali"
        ],
        "searchKey": "nepali macrolanguage nep nepali"
    },
    {
        "code": "net",
        "name": "Nete",
        "searchKey": "nete net"
    },
    {
        "code": "jas",
        "name": "New Caledonian Javanese",
        "searchKey": "new caledonian javanese jas"
    },
    {
        "code": "nzs",
        "name": "New Zealand Sign Language",
        "searchKey": "new zealand sign language nzs"
    },
    {
        "code": "ney",
        "name": "Neyo",
        "searchKey": "neyo ney"
    },
    {
        "code": "nez",
        "name": "Nez Perce",
        "searchKey": "nez perce nez"
    },
    {
        "code": "ntj",
        "name": "Ngaanyatjarra",
        "searchKey": "ngaanyatjarra ntj"
    },
    {
        "code": "gym",
        "name": "Ngäbere",
        "searchKey": "ngabere gym"
    },
    {
        "code": "nxg",
        "name": "Ngad'a",
        "searchKey": "ngada nxg"
    },
    {
        "code": "nju",
        "name": "Ngadjunmaya",
        "searchKey": "ngadjunmaya nju"
    },
    {
        "code": "jui",
        "name": "Ngadjuri",
        "searchKey": "ngadjuri jui"
    },
    {
        "code": "nnf",
        "name": "Ngaing",
        "searchKey": "ngaing nnf"
    },
    {
        "code": "nij",
        "name": "Ngaju",
        "searchKey": "ngaju nij"
    },
    {
        "code": "nud",
        "name": "Ngala",
        "searchKey": "ngala nud"
    },
    {
        "code": "nig",
        "name": "Ngalakgan",
        "searchKey": "ngalakgan nig"
    },
    {
        "code": "szb",
        "name": "Ngalum",
        "searchKey": "ngalum szb"
    },
    {
        "code": "nmc",
        "name": "Ngam",
        "searchKey": "ngam nmc"
    },
    {
        "code": "nbv",
        "name": "Ngamambo",
        "searchKey": "ngamambo nbv"
    },
    {
        "code": "sba",
        "name": "Ngambay",
        "searchKey": "ngambay sba"
    },
    {
        "code": "nmv",
        "name": "Ngamini",
        "searchKey": "ngamini nmv"
    },
    {
        "code": "nbh",
        "name": "Ngamo",
        "searchKey": "ngamo nbh"
    },
    {
        "code": "xnk",
        "name": "Nganakarti",
        "searchKey": "nganakarti xnk"
    },
    {
        "code": "nio",
        "name": "Nganasan",
        "searchKey": "nganasan nio"
    },
    {
        "code": "nid",
        "name": "Ngandi",
        "searchKey": "ngandi nid"
    },
    {
        "code": "ngd",
        "name": "Ngando (Central African Republic)",
        "searchNames": [
            "Ngando"
        ],
        "searchKey": "ngando central african republic ngd ngando"
    },
    {
        "code": "nxd",
        "name": "Ngando (Democratic Republic of Congo)",
        "searchNames": [
            "Ngando"
        ],
        "searchKey": "ngando democratic republic of congo nxd ngando"
    },
    {
        "code": "nne",
        "name": "Ngandyera",
        "searchKey": "ngandyera nne"
    },
    {
        "code": "gng",
        "name": "Ngangam",
        "searchKey": "ngangam gng"
    },
    {
        "code": "nam",
        "name": "Ngan'gityemerri",
        "searchKey": "ngangityemerri nam"
    },
    {
        "code": "ntg",
        "name": "Ngantangarra",
        "searchKey": "ngantangarra ntg"
    },
    {
        "code": "nyx",
        "name": "Nganyaywana",
        "searchKey": "nganyaywana nyx"
    },
    {
        "code": "rxd",
        "name": "Ngardi",
        "searchKey": "ngardi rxd"
    },
    {
        "code": "xni",
        "name": "Ngarigu",
        "searchKey": "ngarigu xni"
    },
    {
        "code": "ung",
        "name": "Ngarinyin",
        "searchKey": "ngarinyin ung"
    },
    {
        "code": "nbj",
        "name": "Ngarinyman",
        "searchKey": "ngarinyman nbj"
    },
    {
        "code": "nrk",
        "name": "Ngarla",
        "searchKey": "ngarla nrk"
    },
    {
        "code": "nrl",
        "name": "Ngarluma",
        "searchKey": "ngarluma nrl"
    },
    {
        "code": "nay",
        "name": "Ngarrindjeri",
        "searchKey": "ngarrindjeri nay"
    },
    {
        "code": "anc",
        "name": "Ngas",
        "searchKey": "ngas anc"
    },
    {
        "code": "nsg",
        "name": "Ngasa",
        "searchKey": "ngasa nsg"
    },
    {
        "code": "ngm",
        "name": "Ngatik Men's Creole",
        "searchKey": "ngatik mens creole ngm"
    },
    {
        "code": "cnw",
        "name": "Ngawn Chin",
        "searchKey": "ngawn chin cnw"
    },
    {
        "code": "nxn",
        "name": "Ngawun",
        "searchKey": "ngawun nxn"
    },
    {
        "code": "nwg",
        "name": "Ngayawung",
        "searchKey": "ngayawung nwg"
    },
    {
        "code": "zdj",
        "name": "Ngazidja Comorian",
        "searchKey": "ngazidja comorian zdj"
    },
    {
        "code": "nga",
        "name": "Ngbaka",
        "searchKey": "ngbaka nga"
    },
    {
        "code": "nbm",
        "name": "Ngbaka Ma'bo",
        "searchKey": "ngbaka mabo nbm"
    },
    {
        "code": "ngg",
        "name": "Ngbaka Manza",
        "searchKey": "ngbaka manza ngg"
    },
    {
        "code": "jgb",
        "name": "Ngbee",
        "searchKey": "ngbee jgb"
    },
    {
        "code": "nbd",
        "name": "Ngbinda",
        "searchKey": "ngbinda nbd"
    },
    {
        "code": "nuu",
        "name": "Ngbundu",
        "searchKey": "ngbundu nuu"
    },
    {
        "code": "agh",
        "name": "Ngelima",
        "searchKey": "ngelima agh"
    },
    {
        "code": "nge",
        "name": "Ngemba",
        "searchKey": "ngemba nge"
    },
    {
        "code": "gnj",
        "name": "Ngen",
        "searchKey": "ngen gnj"
    },
    {
        "code": "nql",
        "name": "Ngendelengo",
        "searchKey": "ngendelengo nql"
    },
    {
        "code": "nnn",
        "name": "Ngete",
        "searchKey": "ngete nnn"
    },
    {
        "code": "nbq",
        "name": "Nggem",
        "searchKey": "nggem nbq"
    },
    {
        "code": "ngx",
        "name": "Nggwahyi",
        "searchKey": "nggwahyi ngx"
    },
    {
        "code": "ngj",
        "name": "Ngie",
        "searchKey": "ngie ngj"
    },
    {
        "code": "nnh",
        "name": "Ngiemboon",
        "searchKey": "ngiemboon nnh"
    },
    {
        "code": "jle",
        "name": "Ngile",
        "searchKey": "ngile jle"
    },
    {
        "code": "nnq",
        "name": "Ngindo",
        "searchKey": "ngindo nnq"
    },
    {
        "code": "niy",
        "name": "Ngiti",
        "searchKey": "ngiti niy"
    },
    {
        "code": "ngi",
        "name": "Ngizim",
        "searchKey": "ngizim ngi"
    },
    {
        "code": "kcd",
        "name": "Ngkâlmpw Kanum",
        "searchKey": "ngkalmpw kanum kcd"
    },
    {
        "code": "nra",
        "name": "Ngom",
        "searchKey": "ngom nra"
    },
    {
        "code": "jgo",
        "name": "Ngomba",
        "searchKey": "ngomba jgo"
    },
    {
        "code": "nla",
        "name": "Ngombale",
        "searchKey": "ngombale nla"
    },
    {
        "code": "nmj",
        "name": "Ngombe (Central African Republic)",
        "searchNames": [
            "Ngombe"
        ],
        "searchKey": "ngombe central african republic nmj ngombe"
    },
    {
        "code": "ngc",
        "name": "Ngombe (Democratic Republic of Congo)",
        "searchNames": [
            "Ngombe"
        ],
        "searchKey": "ngombe democratic republic of congo ngc ngombe"
    },
    {
        "code": "noq",
        "name": "Ngongo",
        "searchKey": "ngongo noq"
    },
    {
        "code": "xnq",
        "name": "Ngoni (Mozambique)",
        "searchNames": [
            "Ngoni"
        ],
        "searchKey": "ngoni mozambique xnq ngoni"
    },
    {
        "code": "xnj",
        "name": "Ngoni (Tanzania)",
        "searchNames": [
            "Ngoni"
        ],
        "searchKey": "ngoni tanzania xnj ngoni"
    },
    {
        "code": "nsh",
        "name": "Ngoshie",
        "searchKey": "ngoshie nsh"
    },
    {
        "code": "nlo",
        "name": "Ngul",
        "searchKey": "ngul nlo"
    },
    {
        "code": "ngp",
        "name": "Ngulu",
        "searchKey": "ngulu ngp"
    },
    {
        "code": "nuw",
        "name": "Nguluwan",
        "searchKey": "nguluwan nuw"
    },
    {
        "code": "xnm",
        "name": "Ngumbarl",
        "searchKey": "ngumbarl xnm"
    },
    {
        "code": "nui",
        "name": "Ngumbi",
        "searchKey": "ngumbi nui"
    },
    {
        "code": "xul",
        "name": "Ngunawal",
        "searchKey": "ngunawal xul"
    },
    {
        "code": "ndn",
        "name": "Ngundi",
        "searchKey": "ngundi ndn"
    },
    {
        "code": "nue",
        "name": "Ngundu",
        "searchKey": "ngundu nue"
    },
    {
        "code": "ngz",
        "name": "Ngungwel",
        "searchKey": "ngungwel ngz"
    },
    {
        "code": "nuo",
        "name": "Nguôn",
        "searchKey": "nguon nuo"
    },
    {
        "code": "ngq",
        "name": "Ngurimi",
        "searchKey": "ngurimi ngq"
    },
    {
        "code": "nrx",
        "name": "Ngurmbur",
        "searchKey": "ngurmbur nrx"
    },
    {
        "code": "ngw",
        "name": "Ngwaba",
        "searchKey": "ngwaba ngw"
    },
    {
        "code": "nwe",
        "name": "Ngwe",
        "searchKey": "ngwe nwe"
    },
    {
        "code": "ngn",
        "name": "Ngwo",
        "searchKey": "ngwo ngn"
    },
    {
        "code": "kci",
        "name": "Ngyian",
        "searchKey": "ngyian kci"
    },
    {
        "code": "nha",
        "name": "Nhanda",
        "searchKey": "nhanda nha"
    },
    {
        "code": "yrl",
        "name": "Nhengatu",
        "searchKey": "nhengatu yrl"
    },
    {
        "code": "hrp",
        "name": "Nhirrpi",
        "searchKey": "nhirrpi hrp"
    },
    {
        "code": "nhf",
        "name": "Nhuwala",
        "searchKey": "nhuwala nhf"
    },
    {
        "code": "nia",
        "name": "Nias",
        "searchKey": "nias nia"
    },
    {
        "code": "bzk",
        "name": "Nicaragua Creole English",
        "searchKey": "nicaragua creole english bzk"
    },
    {
        "code": "ncs",
        "name": "Nicaraguan Sign Language",
        "searchKey": "nicaraguan sign language ncs"
    },
    {
        "code": "nie",
        "name": "Niellim",
        "searchKey": "niellim nie"
    },
    {
        "code": "mzk",
        "name": "Nigeria Mambila",
        "searchKey": "nigeria mambila mzk"
    },
    {
        "code": "fuv",
        "name": "Nigerian Fulfulde",
        "searchKey": "nigerian fulfulde fuv"
    },
    {
        "code": "pcm",
        "name": "Nigerian Pidgin",
        "searchKey": "nigerian pidgin pcm"
    },
    {
        "code": "nsi",
        "name": "Nigerian Sign Language",
        "searchKey": "nigerian sign language nsi"
    },
    {
        "code": "nll",
        "name": "Nihali",
        "searchKey": "nihali nll"
    },
    {
        "code": "nii",
        "name": "Nii",
        "searchKey": "nii"
    },
    {
        "code": "gbe",
        "name": "Niksek",
        "searchKey": "niksek gbe"
    },
    {
        "code": "nil",
        "name": "Nila",
        "searchKey": "nila nil"
    },
    {
        "code": "nim",
        "name": "Nilamba",
        "searchKey": "nilamba nim"
    },
    {
        "code": "noe",
        "name": "Nimadi",
        "searchKey": "nimadi noe"
    },
    {
        "code": "nmp",
        "name": "Nimanbur",
        "searchKey": "nimanbur nmp"
    },
    {
        "code": "nmr",
        "name": "Nimbari",
        "searchKey": "nimbari nmr"
    },
    {
        "code": "nir",
        "name": "Nimboran",
        "searchKey": "nimboran nir"
    },
    {
        "code": "nis",
        "name": "Nimi",
        "searchKey": "nimi nis"
    },
    {
        "code": "niw",
        "name": "Nimo",
        "searchKey": "nimo niw"
    },
    {
        "code": "nmw",
        "name": "Nimoa",
        "searchKey": "nimoa nmw"
    },
    {
        "code": "shb",
        "name": "Ninam",
        "searchKey": "ninam shb"
    },
    {
        "code": "nxi",
        "name": "Nindi",
        "searchKey": "nindi nxi"
    },
    {
        "code": "nby",
        "name": "Ningera",
        "searchKey": "ningera nby"
    },
    {
        "code": "nxr",
        "name": "Ninggerum",
        "searchKey": "ninggerum nxr"
    },
    {
        "code": "niz",
        "name": "Ningil",
        "searchKey": "ningil niz"
    },
    {
        "code": "nlk",
        "name": "Ninia Yali",
        "searchKey": "ninia yali nlk"
    },
    {
        "code": "nin",
        "name": "Ninzo",
        "searchKey": "ninzo nin"
    },
    {
        "code": "nps",
        "name": "Nipsan",
        "searchKey": "nipsan nps"
    },
    {
        "code": "njs",
        "name": "Nisa",
        "searchKey": "nisa njs"
    },
    {
        "code": "nsz",
        "name": "Nisenan",
        "searchKey": "nisenan nsz"
    },
    {
        "code": "ncg",
        "name": "Nisga'a",
        "searchKey": "nisgaa ncg"
    },
    {
        "code": "yso",
        "name": "Nisi (China)",
        "searchNames": [
            "Nisi"
        ],
        "searchKey": "nisi china yso nisi"
    },
    {
        "code": "num",
        "name": "Niuafo'ou",
        "searchKey": "niuafoou num"
    },
    {
        "code": "nkp",
        "name": "Niuatoputapu",
        "searchKey": "niuatoputapu nkp"
    },
    {
        "code": "niu",
        "name": "Niuean",
        "searchKey": "niuean niu"
    },
    {
        "code": "cag",
        "name": "Nivaclé",
        "searchKey": "nivacle cag"
    },
    {
        "code": "hrc",
        "name": "Niwer Mil",
        "searchKey": "niwer mil hrc"
    },
    {
        "code": "njl",
        "name": "Njalgulgule",
        "searchKey": "njalgulgule njl"
    },
    {
        "code": "nzb",
        "name": "Njebi",
        "searchKey": "njebi nzb"
    },
    {
        "code": "njj",
        "name": "Njen",
        "searchKey": "njen njj"
    },
    {
        "code": "njr",
        "name": "Njerep",
        "searchKey": "njerep njr"
    },
    {
        "code": "njy",
        "name": "Njyem",
        "searchKey": "njyem njy"
    },
    {
        "code": "nkq",
        "name": "Nkami",
        "searchKey": "nkami nkq"
    },
    {
        "code": "nkn",
        "name": "Nkangala",
        "searchKey": "nkangala nkn"
    },
    {
        "code": "nkz",
        "name": "Nkari",
        "searchKey": "nkari nkz"
    },
    {
        "code": "isi",
        "name": "Nkem-Nkum",
        "searchKey": "nkem-nkum isi"
    },
    {
        "code": "khu",
        "name": "Nkhumbi",
        "searchKey": "nkhumbi khu"
    },
    {
        "code": "nqo",
        "name": "N'Ko",
        "searchKey": "nko nqo"
    },
    {
        "code": "nkc",
        "name": "Nkongho",
        "searchKey": "nkongho nkc"
    },
    {
        "code": "nko",
        "name": "Nkonya",
        "searchKey": "nkonya nko"
    },
    {
        "code": "nkx",
        "name": "Nkoroo",
        "searchKey": "nkoroo nkx"
    },
    {
        "code": "nka",
        "name": "Nkoya",
        "searchKey": "nkoya nka"
    },
    {
        "code": "nbo",
        "name": "Nkukoli",
        "searchKey": "nkukoli nbo"
    },
    {
        "code": "nkw",
        "name": "Nkutu",
        "searchKey": "nkutu nkw"
    },
    {
        "code": "nbp",
        "name": "Nnam",
        "searchKey": "nnam nbp"
    },
    {
        "code": "zxx",
        "name": "No linguistic content",
        "searchKey": "no linguistic content zxx"
    },
    {
        "code": "oak",
        "name": "Noakhali",
        "searchKey": "noakhali oak"
    },
    {
        "code": "fia",
        "name": "Nobiin",
        "searchKey": "nobiin fia"
    },
    {
        "code": "gaw",
        "name": "Nobonob",
        "searchKey": "nobonob gaw"
    },
    {
        "code": "njb",
        "name": "Nocte Naga",
        "searchKey": "nocte naga njb"
    },
    {
        "code": "nog",
        "name": "Nogai",
        "searchKey": "nogai nog"
    },
    {
        "code": "npx",
        "name": "Noipx",
        "searchKey": "noipx npx"
    },
    {
        "code": "noi",
        "name": "Noiri",
        "searchKey": "noiri noi"
    },
    {
        "code": "nkk",
        "name": "Nokuku",
        "searchKey": "nokuku nkk"
    },
    {
        "code": "lem",
        "name": "Nomaande",
        "searchKey": "nomaande lem"
    },
    {
        "code": "nof",
        "name": "Nomane",
        "searchKey": "nomane nof"
    },
    {
        "code": "not",
        "name": "Nomatsiguenga",
        "searchKey": "nomatsiguenga not"
    },
    {
        "code": "nol",
        "name": "Nomlaki",
        "searchKey": "nomlaki nol"
    },
    {
        "code": "noh",
        "name": "Nomu",
        "searchKey": "nomu noh"
    },
    {
        "code": "zhn",
        "name": "Nong Zhuang",
        "searchKey": "nong zhuang zhn"
    },
    {
        "code": "noj",
        "name": "Nonuya",
        "searchKey": "nonuya noj"
    },
    {
        "code": "nok",
        "name": "Nooksack",
        "searchKey": "nooksack nok"
    },
    {
        "code": "snf",
        "name": "Noon",
        "searchKey": "noon snf"
    },
    {
        "code": "nhu",
        "name": "Noone",
        "searchKey": "noone nhu"
    },
    {
        "code": "cya",
        "name": "Nopala Chatino",
        "searchKey": "nopala chatino cya"
    },
    {
        "code": "nrc",
        "name": "Noric",
        "searchKey": "noric nrc"
    },
    {
        "code": "nrn",
        "name": "Norn",
        "searchKey": "norn nrn"
    },
    {
        "code": "nrr",
        "name": "Norra",
        "searchKey": "norra nrr"
    },
    {
        "code": "esi",
        "name": "North Alaskan Inupiatun",
        "searchKey": "north alaskan inupiatun esi"
    },
    {
        "code": "mmg",
        "name": "North Ambrym",
        "searchKey": "north ambrym mmg"
    },
    {
        "code": "nks",
        "name": "North Asmat",
        "searchKey": "north asmat nks"
    },
    {
        "code": "yir",
        "name": "North Awyu",
        "searchKey": "north awyu yir"
    },
    {
        "code": "azj",
        "name": "North Azerbaijani",
        "searchKey": "north azerbaijani azj"
    },
    {
        "code": "bcd",
        "name": "North Babar",
        "searchKey": "north babar bcd"
    },
    {
        "code": "qul",
        "name": "North Bolivian Quechua",
        "searchKey": "north bolivian quechua qul"
    },
    {
        "code": "neq",
        "name": "North Central Mixe",
        "searchKey": "north central mixe neq"
    },
    {
        "code": "llp",
        "name": "North Efate",
        "searchKey": "north efate llp"
    },
    {
        "code": "fll",
        "name": "North Fali",
        "searchKey": "north fali fll"
    },
    {
        "code": "gis",
        "name": "North Giziga",
        "searchKey": "north giziga gis"
    },
    {
        "code": "qvn",
        "name": "North Junín Quechua",
        "searchKey": "north junin quechua qvn"
    },
    {
        "code": "mrq",
        "name": "North Marquesan",
        "searchKey": "north marquesan mrq"
    },
    {
        "code": "ayp",
        "name": "North Mesopotamian Arabic",
        "searchKey": "north mesopotamian arabic ayp"
    },
    {
        "code": "xph",
        "name": "North Midlands Tasmanian",
        "searchKey": "north midlands tasmanian xph"
    },
    {
        "code": "mfk",
        "name": "North Mofu",
        "searchKey": "north mofu mfk"
    },
    {
        "code": "max",
        "name": "North Moluccan Malay",
        "searchKey": "north moluccan malay max"
    },
    {
        "code": "kti",
        "name": "North Muyu",
        "searchKey": "north muyu kti"
    },
    {
        "code": "nde",
        "name": "North Ndebele",
        "searchKey": "north ndebele nde"
    },
    {
        "code": "nni",
        "name": "North Nuaulu",
        "searchKey": "north nuaulu nni"
    },
    {
        "code": "nrp",
        "name": "North Picene",
        "searchKey": "north picene nrp"
    },
    {
        "code": "scs",
        "name": "North Slavey",
        "searchKey": "north slavey scs"
    },
    {
        "code": "tbg",
        "name": "North Tairora",
        "searchKey": "north tairora tbg"
    },
    {
        "code": "tnn",
        "name": "North Tanna",
        "searchKey": "north tanna tnn"
    },
    {
        "code": "whg",
        "name": "North Wahgi",
        "searchKey": "north wahgi whg"
    },
    {
        "code": "una",
        "name": "North Watut",
        "searchKey": "north watut una"
    },
    {
        "code": "kiw",
        "name": "Northeast Kiwai",
        "searchKey": "northeast kiwai kiw"
    },
    {
        "code": "nmu",
        "name": "Northeast Maidu",
        "searchKey": "northeast maidu nmu"
    },
    {
        "code": "aee",
        "name": "Northeast Pashai",
        "searchKey": "northeast pashai aee"
    },
    {
        "code": "dip",
        "name": "Northeastern Dinka",
        "searchKey": "northeastern dinka dip"
    },
    {
        "code": "pef",
        "name": "Northeastern Pomo",
        "searchKey": "northeastern pomo pef"
    },
    {
        "code": "xpb",
        "name": "Northeastern Tasmanian",
        "searchKey": "northeastern tasmanian xpb"
    },
    {
        "code": "tts",
        "name": "Northeastern Thai",
        "searchKey": "northeastern thai tts"
    },
    {
        "code": "aqn",
        "name": "Northern Alta",
        "searchKey": "northern alta aqn"
    },
    {
        "code": "atv",
        "name": "Northern Altai",
        "searchKey": "northern altai atv"
    },
    {
        "code": "ryn",
        "name": "Northern Amami-Oshima",
        "searchKey": "northern amami-oshima ryn"
    },
    {
        "code": "bmm",
        "name": "Northern Betsimisaraka Malagasy",
        "searchKey": "northern betsimisaraka malagasy bmm"
    },
    {
        "code": "kyn",
        "name": "Northern Binukidnon",
        "searchKey": "northern binukidnon kyn"
    },
    {
        "code": "bbo",
        "name": "Northern Bobo Madaré",
        "searchKey": "northern bobo madare bbo"
    },
    {
        "code": "rbk",
        "name": "Northern Bontok",
        "searchKey": "northern bontok rbk"
    },
    {
        "code": "cts",
        "name": "Northern Catanduanes Bikol",
        "searchKey": "northern catanduanes bikol cts"
    },
    {
        "code": "qxn",
        "name": "Northern Conchucos Ancash Quechua",
        "searchKey": "northern conchucos ancash quechua qxn"
    },
    {
        "code": "dgi",
        "name": "Northern Dagara",
        "searchKey": "northern dagara dgi"
    },
    {
        "code": "doc",
        "name": "Northern Dong",
        "searchKey": "northern dong doc"
    },
    {
        "code": "crl",
        "name": "Northern East Cree",
        "searchKey": "northern east cree crl"
    },
    {
        "code": "emp",
        "name": "Northern Emberá",
        "searchKey": "northern embera emp"
    },
    {
        "code": "frr",
        "name": "Northern Frisian",
        "searchKey": "northern frisian frr"
    },
    {
        "code": "ghh",
        "name": "Northern Ghale",
        "searchKey": "northern ghale ghh"
    },
    {
        "code": "gno",
        "name": "Northern Gondi",
        "searchKey": "northern gondi gno"
    },
    {
        "code": "gbo",
        "name": "Northern Grebo",
        "searchKey": "northern grebo gbo"
    },
    {
        "code": "huj",
        "name": "Northern Guiyang Hmong",
        "searchKey": "northern guiyang hmong huj"
    },
    {
        "code": "hdn",
        "name": "Northern Haida",
        "searchKey": "northern haida hdn"
    },
    {
        "code": "hno",
        "name": "Northern Hindko",
        "searchKey": "northern hindko hno"
    },
    {
        "code": "hmi",
        "name": "Northern Huishui Hmong",
        "searchKey": "northern huishui hmong hmi"
    },
    {
        "code": "nrt",
        "name": "Northern Kalapuya",
        "searchKey": "northern kalapuya nrt"
    },
    {
        "code": "xnn",
        "name": "Northern Kankanay",
        "searchKey": "northern kankanay xnn"
    },
    {
        "code": "ncq",
        "name": "Northern Katang",
        "searchKey": "northern katang ncq"
    },
    {
        "code": "kxm",
        "name": "Northern Khmer",
        "searchKey": "northern khmer kxm"
    },
    {
        "code": "kqs",
        "name": "Northern Kissi",
        "searchKey": "northern kissi kqs"
    },
    {
        "code": "kmr",
        "name": "Northern Kurdish",
        "searchKey": "northern kurdish kmr"
    },
    {
        "code": "lrc",
        "name": "Northern Luri",
        "searchKey": "northern luri lrc"
    },
    {
        "code": "hmp",
        "name": "Northern Mashan Hmong",
        "searchKey": "northern mashan hmong hmp"
    },
    {
        "code": "ymx",
        "name": "Northern Muji",
        "searchKey": "northern muji ymx"
    },
    {
        "code": "xkb",
        "name": "Northern Nago",
        "searchKey": "northern nago xkb"
    },
    {
        "code": "ngb",
        "name": "Northern Ngbandi",
        "searchKey": "northern ngbandi ngb"
    },
    {
        "code": "yiv",
        "name": "Northern Nisu",
        "searchKey": "northern nisu yiv"
    },
    {
        "code": "nuv",
        "name": "Northern Nuni",
        "searchKey": "northern nuni nuv"
    },
    {
        "code": "nhy",
        "name": "Northern Oaxaca Nahuatl",
        "searchKey": "northern oaxaca nahuatl nhy"
    },
    {
        "code": "cst",
        "name": "Northern Ohlone",
        "searchKey": "northern ohlone cst"
    },
    {
        "code": "onr",
        "name": "Northern One",
        "searchKey": "northern one onr"
    },
    {
        "code": "pao",
        "name": "Northern Paiute",
        "searchKey": "northern paiute pao"
    },
    {
        "code": "pmq",
        "name": "Northern Pame",
        "searchKey": "northern pame pmq"
    },
    {
        "code": "pbu",
        "name": "Northern Pashto",
        "searchKey": "northern pashto pbu"
    },
    {
        "code": "qvz",
        "name": "Northern Pastaza Quichua",
        "searchKey": "northern pastaza quichua qvz"
    },
    {
        "code": "cnp",
        "name": "Northern Ping Chinese",
        "searchKey": "northern ping chinese cnp"
    },
    {
        "code": "pej",
        "name": "Northern Pomo",
        "searchKey": "northern pomo pej"
    },
    {
        "code": "ncj",
        "name": "Northern Puebla Nahuatl",
        "searchKey": "northern puebla nahuatl ncj"
    },
    {
        "code": "pmi",
        "name": "Northern Pumi",
        "searchKey": "northern pumi pmi"
    },
    {
        "code": "hea",
        "name": "Northern Qiandong Miao",
        "searchKey": "northern qiandong miao hea"
    },
    {
        "code": "cng",
        "name": "Northern Qiang",
        "searchKey": "northern qiang cng"
    },
    {
        "code": "nnl",
        "name": "Northern Rengma Naga",
        "searchKey": "northern rengma naga nnl"
    },
    {
        "code": "rog",
        "name": "Northern Roglai",
        "searchKey": "northern roglai rog"
    },
    {
        "code": "sme",
        "name": "Northern Sami",
        "searchKey": "northern sami sme"
    },
    {
        "code": "nsq",
        "name": "Northern Sierra Miwok",
        "searchKey": "northern sierra miwok nsq"
    },
    {
        "code": "bks",
        "name": "Northern Sorsoganon",
        "searchKey": "northern sorsoganon bks"
    },
    {
        "code": "stb",
        "name": "Northern Subanen",
        "searchKey": "northern subanen stb"
    },
    {
        "code": "thh",
        "name": "Northern Tarahumara",
        "searchKey": "northern tarahumara thh"
    },
    {
        "code": "xpv",
        "name": "Northern Tasmanian",
        "searchKey": "northern tasmanian xpv"
    },
    {
        "code": "ntp",
        "name": "Northern Tepehuan",
        "searchKey": "northern tepehuan ntp"
    },
    {
        "code": "nod",
        "name": "Northern Thai",
        "searchKey": "northern thai nod"
    },
    {
        "code": "ntd",
        "name": "Northern Tidung",
        "searchKey": "northern tidung ntd"
    },
    {
        "code": "twf",
        "name": "Northern Tiwa",
        "searchKey": "northern tiwa twf"
    },
    {
        "code": "xtn",
        "name": "Northern Tlaxiaco Mixtec",
        "searchKey": "northern tlaxiaco mixtec xtn"
    },
    {
        "code": "tsp",
        "name": "Northern Toussian",
        "searchKey": "northern toussian tsp"
    },
    {
        "code": "tji",
        "name": "Northern Tujia",
        "searchKey": "northern tujia tji"
    },
    {
        "code": "ttm",
        "name": "Northern Tutchone",
        "searchKey": "northern tutchone ttm"
    },
    {
        "code": "uzn",
        "name": "Northern Uzbek",
        "searchKey": "northern uzbek uzn"
    },
    {
        "code": "ykg",
        "name": "Northern Yukaghir",
        "searchKey": "northern yukaghir ykg"
    },
    {
        "code": "esk",
        "name": "Northwest Alaska Inupiatun",
        "searchKey": "northwest alaska inupiatun esk"
    },
    {
        "code": "gya",
        "name": "Northwest Gbaya",
        "searchKey": "northwest gbaya gya"
    },
    {
        "code": "mjd",
        "name": "Northwest Maidu",
        "searchKey": "northwest maidu mjd"
    },
    {
        "code": "mxa",
        "name": "Northwest Oaxaca Mixtec",
        "searchKey": "northwest oaxaca mixtec mxa"
    },
    {
        "code": "glh",
        "name": "Northwest Pashai",
        "searchKey": "northwest pashai glh"
    },
    {
        "code": "diw",
        "name": "Northwestern Dinka",
        "searchKey": "northwestern dinka diw"
    },
    {
        "code": "faz",
        "name": "Northwestern Fars",
        "searchKey": "northwestern fars faz"
    },
    {
        "code": "kfb",
        "name": "Northwestern Kolami",
        "searchKey": "northwestern kolami kfb"
    },
    {
        "code": "nsf",
        "name": "Northwestern Nisu",
        "searchKey": "northwestern nisu nsf"
    },
    {
        "code": "ojb",
        "name": "Northwestern Ojibwa",
        "searchKey": "northwestern ojibwa ojb"
    },
    {
        "code": "xpw",
        "name": "Northwestern Tasmanian",
        "searchKey": "northwestern tasmanian xpw"
    },
    {
        "code": "nor",
        "name": "Norwegian",
        "searchKey": "norwegian nor"
    },
    {
        "code": "nob",
        "name": "Norwegian Bokmål",
        "searchKey": "norwegian bokmal nob"
    },
    {
        "code": "nno",
        "name": "Norwegian Nynorsk",
        "searchKey": "norwegian nynorsk nno"
    },
    {
        "code": "nsl",
        "name": "Norwegian Sign Language",
        "searchKey": "norwegian sign language nsl"
    },
    {
        "code": "bly",
        "name": "Notre",
        "searchKey": "notre bly"
    },
    {
        "code": "ncf",
        "name": "Notsi",
        "searchKey": "notsi ncf"
    },
    {
        "code": "ntw",
        "name": "Nottoway",
        "searchKey": "nottoway ntw"
    },
    {
        "code": "nwy",
        "name": "Nottoway-Meherrin",
        "searchKey": "nottoway-meherrin nwy"
    },
    {
        "code": "nov",
        "name": "Novial",
        "searchKey": "novial nov"
    },
    {
        "code": "noy",
        "name": "Noy",
        "searchKey": "noy"
    },
    {
        "code": "nse",
        "name": "Nsenga",
        "searchKey": "nsenga nse"
    },
    {
        "code": "nsc",
        "name": "Nshi",
        "searchKey": "nshi nsc"
    },
    {
        "code": "nsx",
        "name": "Nsongo",
        "searchKey": "nsongo nsx"
    },
    {
        "code": "bud",
        "name": "Ntcham",
        "searchKey": "ntcham bud"
    },
    {
        "code": "nqt",
        "name": "Nteng",
        "searchKey": "nteng nqt"
    },
    {
        "code": "nto",
        "name": "Ntomba",
        "searchKey": "ntomba nto"
    },
    {
        "code": "baf",
        "name": "Nubaca",
        "searchKey": "nubaca baf"
    },
    {
        "code": "kcn",
        "name": "Nubi",
        "searchKey": "nubi kcn"
    },
    {
        "code": "kte",
        "name": "Nubri",
        "searchKey": "nubri kte"
    },
    {
        "code": "nus",
        "name": "Nuer",
        "searchKey": "nuer nus"
    },
    {
        "code": "nnv",
        "name": "Nugunu (Australia)",
        "searchNames": [
            "Nugunu"
        ],
        "searchKey": "nugunu australia nnv nugunu"
    },
    {
        "code": "yas",
        "name": "Nugunu (Cameroon)",
        "searchNames": [
            "Nugunu"
        ],
        "searchKey": "nugunu cameroon yas nugunu"
    },
    {
        "code": "noc",
        "name": "Nuk",
        "searchKey": "nuk noc"
    },
    {
        "code": "mbr",
        "name": "Nukak Makú",
        "searchKey": "nukak maku mbr"
    },
    {
        "code": "klt",
        "name": "Nukna",
        "searchKey": "nukna klt"
    },
    {
        "code": "nuc",
        "name": "Nukuini",
        "searchKey": "nukuini nuc"
    },
    {
        "code": "nuq",
        "name": "Nukumanu",
        "searchKey": "nukumanu nuq"
    },
    {
        "code": "xnu",
        "name": "Nukunul",
        "searchKey": "nukunul xnu"
    },
    {
        "code": "nkr",
        "name": "Nukuoro",
        "searchKey": "nukuoro nkr"
    },
    {
        "code": "nur",
        "name": "Nukuria",
        "searchKey": "nukuria nur"
    },
    {
        "code": "nbr",
        "name": "Numana",
        "searchKey": "numana nbr"
    },
    {
        "code": "nop",
        "name": "Numanggang",
        "searchKey": "numanggang nop"
    },
    {
        "code": "sij",
        "name": "Numbami",
        "searchKey": "numbami sij"
    },
    {
        "code": "tgs",
        "name": "Nume",
        "searchKey": "nume tgs"
    },
    {
        "code": "kdk",
        "name": "Numèè",
        "searchKey": "numee kdk"
    },
    {
        "code": "nxm",
        "name": "Numidian",
        "searchKey": "numidian nxm"
    },
    {
        "code": "nut",
        "name": "Nung (Viet Nam)",
        "searchNames": [
            "Nung"
        ],
        "searchKey": "nung viet nam nut nung"
    },
    {
        "code": "nug",
        "name": "Nungali",
        "searchKey": "nungali nug"
    },
    {
        "code": "nuy",
        "name": "Nunggubuyu",
        "searchKey": "nunggubuyu nuy"
    },
    {
        "code": "rin",
        "name": "Nungu",
        "searchKey": "nungu rin"
    },
    {
        "code": "npb",
        "name": "Nupbikha",
        "searchKey": "nupbikha npb"
    },
    {
        "code": "nup",
        "name": "Nupe-Nupe-Tako",
        "searchKey": "nupe-nupe-tako nup"
    },
    {
        "code": "hux",
        "name": "Nüpode Huitoto",
        "searchKey": "nupode huitoto hux"
    },
    {
        "code": "nul",
        "name": "Nusa Laut",
        "searchKey": "nusa laut nul"
    },
    {
        "code": "nuf",
        "name": "Nusu",
        "searchKey": "nusu nuf"
    },
    {
        "code": "nuk",
        "name": "Nuu-chah-nulth",
        "searchKey": "nuu-chah-nulth nuk"
    },
    {
        "code": "nwb",
        "name": "Nyabwa",
        "searchKey": "nyabwa nwb"
    },
    {
        "code": "nev",
        "name": "Nyaheun",
        "searchKey": "nyaheun nev"
    },
    {
        "code": "cbn",
        "name": "Nyahkur",
        "searchKey": "nyahkur cbn"
    },
    {
        "code": "nyy",
        "name": "Nyakyusa-Ngonde",
        "searchKey": "nyakyusa-ngonde nyy"
    },
    {
        "code": "yly",
        "name": "Nyâlayu",
        "searchKey": "nyalayu yly"
    },
    {
        "code": "nlj",
        "name": "Nyali",
        "searchKey": "nyali nlj"
    },
    {
        "code": "nmi",
        "name": "Nyam",
        "searchKey": "nyam nmi"
    },
    {
        "code": "nly",
        "name": "Nyamal",
        "searchKey": "nyamal nly"
    },
    {
        "code": "now",
        "name": "Nyambo",
        "searchKey": "nyambo now"
    },
    {
        "code": "nwm",
        "name": "Nyamusa-Molo",
        "searchKey": "nyamusa-molo nwm"
    },
    {
        "code": "mwn",
        "name": "Nyamwanga",
        "searchKey": "nyamwanga mwn"
    },
    {
        "code": "nym",
        "name": "Nyamwezi",
        "searchKey": "nyamwezi nym"
    },
    {
        "code": "nyk",
        "name": "Nyaneka",
        "searchKey": "nyaneka nyk"
    },
    {
        "code": "nyj",
        "name": "Nyanga",
        "searchKey": "nyanga nyj"
    },
    {
        "code": "nyc",
        "name": "Nyanga-li",
        "searchKey": "nyanga-li nyc"
    },
    {
        "code": "nnj",
        "name": "Nyangatom",
        "searchKey": "nyangatom nnj"
    },
    {
        "code": "nyb",
        "name": "Nyangbo",
        "searchKey": "nyangbo nyb"
    },
    {
        "code": "nny",
        "name": "Nyangga",
        "searchKey": "nyangga nny"
    },
    {
        "code": "nyp",
        "name": "Nyang'i",
        "searchKey": "nyangi nyp"
    },
    {
        "code": "nna",
        "name": "Nyangumarta",
        "searchKey": "nyangumarta nna"
    },
    {
        "code": "nyn",
        "name": "Nyankole",
        "searchKey": "nyankole nyn"
    },
    {
        "code": "yes",
        "name": "Nyankpa",
        "searchKey": "nyankpa yes"
    },
    {
        "code": "sev",
        "name": "Nyarafolo Senoufo",
        "searchKey": "nyarafolo senoufo sev"
    },
    {
        "code": "rim",
        "name": "Nyaturu",
        "searchKey": "nyaturu rim"
    },
    {
        "code": "nyw",
        "name": "Nyaw",
        "searchKey": "nyaw nyw"
    },
    {
        "code": "nyt",
        "name": "Nyawaygi",
        "searchKey": "nyawaygi nyt"
    },
    {
        "code": "nba",
        "name": "Nyemba",
        "searchKey": "nyemba nba"
    },
    {
        "code": "nye",
        "name": "Nyengo",
        "searchKey": "nyengo nye"
    },
    {
        "code": "neh",
        "name": "Nyenkha",
        "searchKey": "nyenkha neh"
    },
    {
        "code": "nyl",
        "name": "Nyeu",
        "searchKey": "nyeu nyl"
    },
    {
        "code": "nyr",
        "name": "Nyiha (Malawi)",
        "searchNames": [
            "Nyiha"
        ],
        "searchKey": "nyiha malawi nyr nyiha"
    },
    {
        "code": "nih",
        "name": "Nyiha (Tanzania)",
        "searchNames": [
            "Nyiha"
        ],
        "searchKey": "nyiha tanzania nih nyiha"
    },
    {
        "code": "nkv",
        "name": "Nyika (Malawi and Zambia)",
        "searchNames": [
            "Nyika"
        ],
        "searchKey": "nyika malawi and zambia nkv nyika"
    },
    {
        "code": "nkt",
        "name": "Nyika (Tanzania)",
        "searchNames": [
            "Nyika"
        ],
        "searchKey": "nyika tanzania nkt nyika"
    },
    {
        "code": "nyh",
        "name": "Nyikina",
        "searchKey": "nyikina nyh"
    },
    {
        "code": "lid",
        "name": "Nyindrou",
        "searchKey": "nyindrou lid"
    },
    {
        "code": "nyg",
        "name": "Nyindu",
        "searchKey": "nyindu nyg"
    },
    {
        "code": "njz",
        "name": "Nyishi",
        "searchKey": "nyishi njz"
    },
    {
        "code": "xny",
        "name": "Nyiyaparli",
        "searchKey": "nyiyaparli xny"
    },
    {
        "code": "nvo",
        "name": "Nyokon",
        "searchKey": "nyokon nvo"
    },
    {
        "code": "nuj",
        "name": "Nyole",
        "searchKey": "nyole nuj"
    },
    {
        "code": "muo",
        "name": "Nyong",
        "searchKey": "nyong muo"
    },
    {
        "code": "nyd",
        "name": "Nyore",
        "searchKey": "nyore nyd"
    },
    {
        "code": "nyo",
        "name": "Nyoro",
        "searchKey": "nyoro nyo"
    },
    {
        "code": "nyv",
        "name": "Nyulnyul",
        "searchKey": "nyulnyul nyv"
    },
    {
        "code": "nys",
        "name": "Nyungar",
        "searchKey": "nyungar nys"
    },
    {
        "code": "nyu",
        "name": "Nyungwe",
        "searchKey": "nyungwe nyu"
    },
    {
        "code": "nzd",
        "name": "Nzadi",
        "searchKey": "nzadi nzd"
    },
    {
        "code": "nzy",
        "name": "Nzakambay",
        "searchKey": "nzakambay nzy"
    },
    {
        "code": "nzk",
        "name": "Nzakara",
        "searchKey": "nzakara nzk"
    },
    {
        "code": "nja",
        "name": "Nzanyi",
        "searchKey": "nzanyi nja"
    },
    {
        "code": "nzi",
        "name": "Nzima",
        "searchKey": "nzima nzi"
    },
    {
        "code": "bzy",
        "name": "Obanliku",
        "searchKey": "obanliku bzy"
    },
    {
        "code": "obi",
        "name": "Obispeño",
        "searchKey": "obispeno obi"
    },
    {
        "code": "obl",
        "name": "Oblo",
        "searchKey": "oblo obl"
    },
    {
        "code": "obo",
        "name": "Obo Manobo",
        "searchKey": "obo manobo obo"
    },
    {
        "code": "afz",
        "name": "Obokuitai",
        "searchKey": "obokuitai afz"
    },
    {
        "code": "ann",
        "name": "Obolo",
        "searchKey": "obolo ann"
    },
    {
        "code": "obu",
        "name": "Obulom",
        "searchKey": "obulom obu"
    },
    {
        "code": "oca",
        "name": "Ocaina",
        "searchKey": "ocaina oca"
    },
    {
        "code": "oci",
        "name": "Occitan (post 1500)",
        "searchNames": [
            "Occitan"
        ],
        "searchKey": "occitan post 1500 oci occitan"
    },
    {
        "code": "xoc",
        "name": "O'chi'chi'",
        "searchKey": "ochichi xoc"
    },
    {
        "code": "mie",
        "name": "Ocotepec Mixtec",
        "searchKey": "ocotepec mixtec mie"
    },
    {
        "code": "zac",
        "name": "Ocotlán Zapotec",
        "searchKey": "ocotlan zapotec zac"
    },
    {
        "code": "odk",
        "name": "Od",
        "searchKey": "od odk"
    },
    {
        "code": "ory",
        "name": "Odia",
        "searchKey": "odia ory"
    },
    {
        "code": "bhf",
        "name": "Odiai",
        "searchKey": "odiai bhf"
    },
    {
        "code": "kkc",
        "name": "Odoodee",
        "searchKey": "odoodee kkc"
    },
    {
        "code": "tyh",
        "name": "O'du",
        "searchKey": "odu tyh"
    },
    {
        "code": "odu",
        "name": "Odual",
        "searchKey": "odual odu"
    },
    {
        "code": "oda",
        "name": "Odut",
        "searchKey": "odut oda"
    },
    {
        "code": "opy",
        "name": "Ofayé",
        "searchKey": "ofaye opy"
    },
    {
        "code": "arc",
        "name": "Official Aramaic (700-300 BCE)",
        "searchNames": [
            "Official Aramaic"
        ],
        "searchKey": "official aramaic 700-300 bce arc official aramaic"
    },
    {
        "code": "ofo",
        "name": "Ofo",
        "searchKey": "ofo"
    },
    {
        "code": "ogc",
        "name": "Ogbah",
        "searchKey": "ogbah ogc"
    },
    {
        "code": "ogb",
        "name": "Ogbia",
        "searchKey": "ogbia ogb"
    },
    {
        "code": "ogg",
        "name": "Ogbogolo",
        "searchKey": "ogbogolo ogg"
    },
    {
        "code": "ogu",
        "name": "Ogbronuagum",
        "searchKey": "ogbronuagum ogu"
    },
    {
        "code": "eri",
        "name": "Ogea",
        "searchKey": "ogea eri"
    },
    {
        "code": "oia",
        "name": "Oirata",
        "searchKey": "oirata oia"
    },
    {
        "code": "oji",
        "name": "Ojibwa",
        "searchKey": "ojibwa oji"
    },
    {
        "code": "chj",
        "name": "Ojitlán Chinantec",
        "searchKey": "ojitlan chinantec chj"
    },
    {
        "code": "oka",
        "name": "Okanagan",
        "searchKey": "okanagan oka"
    },
    {
        "code": "oki",
        "name": "Okiek",
        "searchKey": "okiek oki"
    },
    {
        "code": "okn",
        "name": "Oki-No-Erabu",
        "searchKey": "oki-no-erabu okn"
    },
    {
        "code": "okb",
        "name": "Okobo",
        "searchKey": "okobo okb"
    },
    {
        "code": "okd",
        "name": "Okodia",
        "searchKey": "okodia okd"
    },
    {
        "code": "oks",
        "name": "Oko-Eni-Osayen",
        "searchKey": "oko-eni-osayen oks"
    },
    {
        "code": "okj",
        "name": "Oko-Juwoi",
        "searchKey": "oko-juwoi okj"
    },
    {
        "code": "oie",
        "name": "Okolie",
        "searchKey": "okolie oie"
    },
    {
        "code": "kqv",
        "name": "Okolod",
        "searchKey": "okolod kqv"
    },
    {
        "code": "opa",
        "name": "Okpamheri",
        "searchKey": "okpamheri opa"
    },
    {
        "code": "okx",
        "name": "Okpe (Northwestern Edo)",
        "searchNames": [
            "Okpe"
        ],
        "searchKey": "okpe northwestern edo okx okpe"
    },
    {
        "code": "oke",
        "name": "Okpe (Southwestern Edo)",
        "searchNames": [
            "Okpe"
        ],
        "searchKey": "okpe southwestern edo oke okpe"
    },
    {
        "code": "opm",
        "name": "Oksapmin",
        "searchKey": "oksapmin opm"
    },
    {
        "code": "oku",
        "name": "Oku",
        "searchKey": "oku"
    },
    {
        "code": "oar",
        "name": "Old Aramaic (up to 700 BCE)",
        "searchNames": [
            "Old Aramaic"
        ],
        "searchKey": "old aramaic up to 700 bce oar old aramaic"
    },
    {
        "code": "oav",
        "name": "Old Avar",
        "searchKey": "old avar oav"
    },
    {
        "code": "obt",
        "name": "Old Breton",
        "searchKey": "old breton obt"
    },
    {
        "code": "obr",
        "name": "Old Burmese",
        "searchKey": "old burmese obr"
    },
    {
        "code": "ocm",
        "name": "Old Cham",
        "searchKey": "old cham ocm"
    },
    {
        "code": "och",
        "name": "Old Chinese",
        "searchKey": "old chinese och"
    },
    {
        "code": "oco",
        "name": "Old Cornish",
        "searchKey": "old cornish oco"
    },
    {
        "code": "odt",
        "name": "Old Dutch",
        "searchKey": "old dutch odt"
    },
    {
        "code": "ang",
        "name": "Old English (ca. 450-1100)",
        "searchNames": [
            "Old English"
        ],
        "searchKey": "old english ca 450-1100 ang old english"
    },
    {
        "code": "fro",
        "name": "Old French (842-ca. 1400)",
        "searchNames": [
            "Old French"
        ],
        "searchKey": "old french 842-ca 1400 fro old french"
    },
    {
        "code": "ofs",
        "name": "Old Frisian",
        "searchKey": "old frisian ofs"
    },
    {
        "code": "oge",
        "name": "Old Georgian",
        "searchKey": "old georgian oge"
    },
    {
        "code": "goh",
        "name": "Old High German (ca. 750-1050)",
        "searchNames": [
            "Old High German"
        ],
        "searchKey": "old high german ca 750-1050 goh old high german"
    },
    {
        "code": "oht",
        "name": "Old Hittite",
        "searchKey": "old hittite oht"
    },
    {
        "code": "ohu",
        "name": "Old Hungarian",
        "searchKey": "old hungarian ohu"
    },
    {
        "code": "sga",
        "name": "Old Irish (to 900)",
        "searchNames": [
            "Old Irish"
        ],
        "searchKey": "old irish to 900 sga old irish"
    },
    {
        "code": "ojp",
        "name": "Old Japanese",
        "searchKey": "old japanese ojp"
    },
    {
        "code": "okl",
        "name": "Old Kentish Sign Language",
        "searchKey": "old kentish sign language okl"
    },
    {
        "code": "okz",
        "name": "Old Khmer",
        "searchKey": "old khmer okz"
    },
    {
        "code": "oko",
        "name": "Old Korean (3rd-9th cent.)",
        "searchNames": [
            "Old Korean"
        ],
        "searchKey": "old korean 3rd-9th cent oko old korean"
    },
    {
        "code": "olt",
        "name": "Old Lithuanian",
        "searchKey": "old lithuanian olt"
    },
    {
        "code": "omy",
        "name": "Old Malay",
        "searchKey": "old malay omy"
    },
    {
        "code": "omp",
        "name": "Old Manipuri",
        "searchKey": "old manipuri omp"
    },
    {
        "code": "omr",
        "name": "Old Marathi",
        "searchKey": "old marathi omr"
    },
    {
        "code": "omx",
        "name": "Old Mon",
        "searchKey": "old mon omx"
    },
    {
        "code": "non",
        "name": "Old Norse",
        "searchKey": "old norse non"
    },
    {
        "code": "onw",
        "name": "Old Nubian",
        "searchKey": "old nubian onw"
    },
    {
        "code": "oos",
        "name": "Old Ossetic",
        "searchKey": "old ossetic oos"
    },
    {
        "code": "peo",
        "name": "Old Persian (ca. 600-400 B.C.)",
        "searchNames": [
            "Old Persian"
        ],
        "searchKey": "old persian ca 600-400 bc peo old persian"
    },
    {
        "code": "pro",
        "name": "Old Provençal (to 1500)",
        "searchNames": [
            "Old Provençal"
        ],
        "searchKey": "old provencal to 1500 pro old provencal"
    },
    {
        "code": "orv",
        "name": "Old Russian",
        "searchKey": "old russian orv"
    },
    {
        "code": "osx",
        "name": "Old Saxon",
        "searchKey": "old saxon osx"
    },
    {
        "code": "osp",
        "name": "Old Spanish",
        "searchKey": "old spanish osp"
    },
    {
        "code": "osn",
        "name": "Old Sundanese",
        "searchKey": "old sundanese osn"
    },
    {
        "code": "oty",
        "name": "Old Tamil",
        "searchKey": "old tamil oty"
    },
    {
        "code": "otb",
        "name": "Old Tibetan",
        "searchKey": "old tibetan otb"
    },
    {
        "code": "otk",
        "name": "Old Turkish",
        "searchKey": "old turkish otk"
    },
    {
        "code": "oui",
        "name": "Old Uighur",
        "searchKey": "old uighur oui"
    },
    {
        "code": "owl",
        "name": "Old Welsh",
        "searchKey": "old welsh owl"
    },
    {
        "code": "ole",
        "name": "Olekha",
        "searchKey": "olekha ole"
    },
    {
        "code": "olb",
        "name": "Oli-Bodiman",
        "searchKey": "oli-bodiman olb"
    },
    {
        "code": "olk",
        "name": "Olkol",
        "searchKey": "olkol olk"
    },
    {
        "code": "ong",
        "name": "Olo",
        "searchKey": "olo ong"
    },
    {
        "code": "olm",
        "name": "Oloma",
        "searchKey": "oloma olm"
    },
    {
        "code": "olr",
        "name": "Olrat",
        "searchKey": "olrat olr"
    },
    {
        "code": "lul",
        "name": "Olu'bo",
        "searchKey": "olubo lul"
    },
    {
        "code": "iko",
        "name": "Olulumo-Ikom",
        "searchKey": "olulumo-ikom iko"
    },
    {
        "code": "plo",
        "name": "Oluta Popoluca",
        "searchKey": "oluta popoluca plo"
    },
    {
        "code": "omg",
        "name": "Omagua",
        "searchKey": "omagua omg"
    },
    {
        "code": "oma",
        "name": "Omaha-Ponca",
        "searchKey": "omaha-ponca oma"
    },
    {
        "code": "acx",
        "name": "Omani Arabic",
        "searchKey": "omani arabic acx"
    },
    {
        "code": "mbm",
        "name": "Ombamba",
        "searchKey": "ombamba mbm"
    },
    {
        "code": "oml",
        "name": "Ombo",
        "searchKey": "ombo oml"
    },
    {
        "code": "nht",
        "name": "Ometepec Nahuatl",
        "searchKey": "ometepec nahuatl nht"
    },
    {
        "code": "omi",
        "name": "Omi",
        "searchKey": "omi"
    },
    {
        "code": "omk",
        "name": "Omok",
        "searchKey": "omok omk"
    },
    {
        "code": "omt",
        "name": "Omotik",
        "searchKey": "omotik omt"
    },
    {
        "code": "omu",
        "name": "Omurano",
        "searchKey": "omurano omu"
    },
    {
        "code": "ona",
        "name": "Ona",
        "searchKey": "ona"
    },
    {
        "code": "one",
        "name": "Oneida",
        "searchKey": "oneida one"
    },
    {
        "code": "oog",
        "name": "Ong",
        "searchKey": "ong oog"
    },
    {
        "code": "oni",
        "name": "Onin",
        "searchKey": "onin oni"
    },
    {
        "code": "onx",
        "name": "Onin Based Pidgin",
        "searchKey": "onin based pidgin onx"
    },
    {
        "code": "onj",
        "name": "Onjob",
        "searchKey": "onjob onj"
    },
    {
        "code": "ons",
        "name": "Ono",
        "searchKey": "ono ons"
    },
    {
        "code": "onn",
        "name": "Onobasulu",
        "searchKey": "onobasulu onn"
    },
    {
        "code": "ono",
        "name": "Onondaga",
        "searchKey": "onondaga ono"
    },
    {
        "code": "ont",
        "name": "Ontenu",
        "searchKey": "ontenu ont"
    },
    {
        "code": "ojv",
        "name": "Ontong Java",
        "searchKey": "ontong java ojv"
    },
    {
        "code": "oor",
        "name": "Oorlams",
        "searchKey": "oorlams oor"
    },
    {
        "code": "opo",
        "name": "Opao",
        "searchKey": "opao opo"
    },
    {
        "code": "opt",
        "name": "Opata",
        "searchKey": "opata opt"
    },
    {
        "code": "orn",
        "name": "Orang Kanaq",
        "searchKey": "orang kanaq orn"
    },
    {
        "code": "ors",
        "name": "Orang Seletar",
        "searchKey": "orang seletar ors"
    },
    {
        "code": "sdr",
        "name": "Oraon Sadri",
        "searchKey": "oraon sadri sdr"
    },
    {
        "code": "ore",
        "name": "Orejón",
        "searchKey": "orejon ore"
    },
    {
        "code": "org",
        "name": "Oring",
        "searchKey": "oring org"
    },
    {
        "code": "ori",
        "name": "Oriya (macrolanguage)",
        "searchNames": [
            "Oriya"
        ],
        "searchKey": "oriya macrolanguage ori oriya"
    },
    {
        "code": "nlv",
        "name": "Orizaba Nahuatl",
        "searchKey": "orizaba nahuatl nlv"
    },
    {
        "code": "orc",
        "name": "Orma",
        "searchKey": "orma orc"
    },
    {
        "code": "orz",
        "name": "Ormu",
        "searchKey": "ormu orz"
    },
    {
        "code": "oru",
        "name": "Ormuri",
        "searchKey": "ormuri oru"
    },
    {
        "code": "orx",
        "name": "Oro",
        "searchKey": "oro orx"
    },
    {
        "code": "orw",
        "name": "Oro Win",
        "searchKey": "oro win orw"
    },
    {
        "code": "oac",
        "name": "Oroch",
        "searchKey": "oroch oac"
    },
    {
        "code": "ora",
        "name": "Oroha",
        "searchKey": "oroha ora"
    },
    {
        "code": "oaa",
        "name": "Orok",
        "searchKey": "orok oaa"
    },
    {
        "code": "okv",
        "name": "Orokaiva",
        "searchKey": "orokaiva okv"
    },
    {
        "code": "bdu",
        "name": "Oroko",
        "searchKey": "oroko bdu"
    },
    {
        "code": "oro",
        "name": "Orokolo",
        "searchKey": "orokolo oro"
    },
    {
        "code": "orm",
        "name": "Oromo",
        "searchKey": "oromo orm"
    },
    {
        "code": "orh",
        "name": "Oroqen",
        "searchKey": "oroqen orh"
    },
    {
        "code": "bpk",
        "name": "Orowe",
        "searchKey": "orowe bpk"
    },
    {
        "code": "orr",
        "name": "Oruma",
        "searchKey": "oruma orr"
    },
    {
        "code": "ury",
        "name": "Orya",
        "searchKey": "orya ury"
    },
    {
        "code": "osa",
        "name": "Osage",
        "searchKey": "osage osa"
    },
    {
        "code": "ost",
        "name": "Osatu",
        "searchKey": "osatu ost"
    },
    {
        "code": "osc",
        "name": "Oscan",
        "searchKey": "oscan osc"
    },
    {
        "code": "osi",
        "name": "Osing",
        "searchKey": "osing osi"
    },
    {
        "code": "oso",
        "name": "Ososo",
        "searchKey": "ososo oso"
    },
    {
        "code": "otd",
        "name": "Ot Danum",
        "searchKey": "ot danum otd"
    },
    {
        "code": "uta",
        "name": "Otank",
        "searchKey": "otank uta"
    },
    {
        "code": "oti",
        "name": "Oti",
        "searchKey": "oti"
    },
    {
        "code": "otr",
        "name": "Otoro",
        "searchKey": "otoro otr"
    },
    {
        "code": "otw",
        "name": "Ottawa",
        "searchKey": "ottawa otw"
    },
    {
        "code": "ota",
        "name": "Ottoman Turkish (1500-1928)",
        "searchNames": [
            "Ottoman Turkish"
        ],
        "searchKey": "ottoman turkish 1500-1928 ota ottoman turkish"
    },
    {
        "code": "lot",
        "name": "Otuho",
        "searchKey": "otuho lot"
    },
    {
        "code": "otu",
        "name": "Otuke",
        "searchKey": "otuke otu"
    },
    {
        "code": "oum",
        "name": "Ouma",
        "searchKey": "ouma oum"
    },
    {
        "code": "oue",
        "name": "Oune",
        "searchKey": "oune oue"
    },
    {
        "code": "stn",
        "name": "Owa",
        "searchKey": "owa stn"
    },
    {
        "code": "wsr",
        "name": "Owenia",
        "searchKey": "owenia wsr"
    },
    {
        "code": "owi",
        "name": "Owiniga",
        "searchKey": "owiniga owi"
    },
    {
        "code": "oyb",
        "name": "Oy",
        "searchKey": "oy oyb"
    },
    {
        "code": "oyy",
        "name": "Oya'oya",
        "searchKey": "oyaoya oyy"
    },
    {
        "code": "oyd",
        "name": "Oyda",
        "searchKey": "oyda oyd"
    },
    {
        "code": "xpd",
        "name": "Oyster Bay Tasmanian",
        "searchKey": "oyster bay tasmanian xpd"
    },
    {
        "code": "zao",
        "name": "Ozolotepec Zapotec",
        "searchKey": "ozolotepec zapotec zao"
    },
    {
        "code": "chz",
        "name": "Ozumacín Chinantec",
        "searchKey": "ozumacin chinantec chz"
    },
    {
        "code": "pdi",
        "name": "Pa Di",
        "searchKey": "pa di pdi"
    },
    {
        "code": "pqa",
        "name": "Pa'a",
        "searchKey": "paa pqa"
    },
    {
        "code": "pfa",
        "name": "Pááfang",
        "searchKey": "paafang pfa"
    },
    {
        "code": "drl",
        "name": "Paakantyi",
        "searchKey": "paakantyi drl"
    },
    {
        "code": "pma",
        "name": "Paama",
        "searchKey": "paama pma"
    },
    {
        "code": "sig",
        "name": "Paasaal",
        "searchKey": "paasaal sig"
    },
    {
        "code": "pcp",
        "name": "Pacahuara",
        "searchKey": "pacahuara pcp"
    },
    {
        "code": "qvp",
        "name": "Pacaraos Quechua",
        "searchKey": "pacaraos quechua qvp"
    },
    {
        "code": "ems",
        "name": "Pacific Gulf Yupik",
        "searchKey": "pacific gulf yupik ems"
    },
    {
        "code": "pac",
        "name": "Pacoh",
        "searchKey": "pacoh pac"
    },
    {
        "code": "pdo",
        "name": "Padoe",
        "searchKey": "padoe pdo"
    },
    {
        "code": "pkc",
        "name": "Paekche",
        "searchKey": "paekche pkc"
    },
    {
        "code": "pgn",
        "name": "Paelignian",
        "searchKey": "paelignian pgn"
    },
    {
        "code": "pbb",
        "name": "Páez",
        "searchKey": "paez pbb"
    },
    {
        "code": "pgi",
        "name": "Pagi",
        "searchKey": "pagi pgi"
    },
    {
        "code": "pae",
        "name": "Pagibete",
        "searchKey": "pagibete pae"
    },
    {
        "code": "pgu",
        "name": "Pagu",
        "searchKey": "pagu pgu"
    },
    {
        "code": "apf",
        "name": "Pahanan Agta",
        "searchKey": "pahanan agta apf"
    },
    {
        "code": "phj",
        "name": "Pahari",
        "searchKey": "pahari phj"
    },
    {
        "code": "phr",
        "name": "Pahari-Potwari",
        "searchKey": "pahari-potwari phr"
    },
    {
        "code": "lgt",
        "name": "Pahi",
        "searchKey": "pahi lgt"
    },
    {
        "code": "phv",
        "name": "Pahlavani",
        "searchKey": "pahlavani phv"
    },
    {
        "code": "pal",
        "name": "Pahlavi",
        "searchKey": "pahlavi pal"
    },
    {
        "code": "pha",
        "name": "Pa-Hng",
        "searchKey": "pa-hng pha"
    },
    {
        "code": "pta",
        "name": "Pai Tavytera",
        "searchKey": "pai tavytera pta"
    },
    {
        "code": "pri",
        "name": "Paicî",
        "searchKey": "paici pri"
    },
    {
        "code": "ppi",
        "name": "Paipai",
        "searchKey": "paipai ppi"
    },
    {
        "code": "pck",
        "name": "Paite Chin",
        "searchKey": "paite chin pck"
    },
    {
        "code": "pwn",
        "name": "Paiwan",
        "searchKey": "paiwan pwn"
    },
    {
        "code": "pav",
        "name": "Pakaásnovos",
        "searchKey": "pakaasnovos pav"
    },
    {
        "code": "pkn",
        "name": "Pakanha",
        "searchKey": "pakanha pkn"
    },
    {
        "code": "pks",
        "name": "Pakistan Sign Language",
        "searchKey": "pakistan sign language pks"
    },
    {
        "code": "pkg",
        "name": "Pak-Tong",
        "searchKey": "pak-tong pkg"
    },
    {
        "code": "pku",
        "name": "Paku",
        "searchKey": "paku pku"
    },
    {
        "code": "jkp",
        "name": "Paku Karen",
        "searchKey": "paku karen jkp"
    },
    {
        "code": "abw",
        "name": "Pal",
        "searchKey": "pal abw"
    },
    {
        "code": "plq",
        "name": "Palaic",
        "searchKey": "palaic plq"
    },
    {
        "code": "plr",
        "name": "Palaka Senoufo",
        "searchKey": "palaka senoufo plr"
    },
    {
        "code": "cpa",
        "name": "Palantla Chinantec",
        "searchKey": "palantla chinantec cpa"
    },
    {
        "code": "pau",
        "name": "Palauan",
        "searchKey": "palauan pau"
    },
    {
        "code": "pnl",
        "name": "Paleni",
        "searchKey": "paleni pnl"
    },
    {
        "code": "pln",
        "name": "Palenquero",
        "searchKey": "palenquero pln"
    },
    {
        "code": "pli",
        "name": "Pali",
        "searchKey": "pali pli"
    },
    {
        "code": "plu",
        "name": "Palikúr",
        "searchKey": "palikur plu"
    },
    {
        "code": "pcf",
        "name": "Paliyan",
        "searchKey": "paliyan pcf"
    },
    {
        "code": "pmd",
        "name": "Pallanganmiddang",
        "searchKey": "pallanganmiddang pmd"
    },
    {
        "code": "fap",
        "name": "Paloor",
        "searchKey": "paloor fap"
    },
    {
        "code": "plz",
        "name": "Paluan",
        "searchKey": "paluan plz"
    },
    {
        "code": "ple",
        "name": "Palu'e",
        "searchKey": "palue ple"
    },
    {
        "code": "bpx",
        "name": "Palya Bareli",
        "searchKey": "palya bareli bpx"
    },
    {
        "code": "pmn",
        "name": "Pam",
        "searchKey": "pam pmn"
    },
    {
        "code": "pmb",
        "name": "Pambia",
        "searchKey": "pambia pmb"
    },
    {
        "code": "pmf",
        "name": "Pamona",
        "searchKey": "pamona pmf"
    },
    {
        "code": "hih",
        "name": "Pamosu",
        "searchKey": "pamosu hih"
    },
    {
        "code": "pam",
        "name": "Pampanga",
        "searchKey": "pampanga pam"
    },
    {
        "code": "att",
        "name": "Pamplona Atta",
        "searchKey": "pamplona atta att"
    },
    {
        "code": "pnq",
        "name": "Pana (Burkina Faso)",
        "searchNames": [
            "Pana"
        ],
        "searchKey": "pana burkina faso pnq pana"
    },
    {
        "code": "pnz",
        "name": "Pana (Central African Republic)",
        "searchNames": [
            "Pana"
        ],
        "searchKey": "pana central african republic pnz pana"
    },
    {
        "code": "lsp",
        "name": "Panamanian Sign Language",
        "searchKey": "panamanian sign language lsp"
    },
    {
        "code": "par",
        "name": "Panamint",
        "searchKey": "panamint par"
    },
    {
        "code": "qxh",
        "name": "Panao Huánuco Quechua",
        "searchKey": "panao huanuco quechua qxh"
    },
    {
        "code": "kre",
        "name": "Panará",
        "searchKey": "panara kre"
    },
    {
        "code": "psn",
        "name": "Panasuan",
        "searchKey": "panasuan psn"
    },
    {
        "code": "pwb",
        "name": "Panawa",
        "searchKey": "panawa pwb"
    },
    {
        "code": "pnp",
        "name": "Pancana",
        "searchKey": "pancana pnp"
    },
    {
        "code": "tdb",
        "name": "Panchpargania",
        "searchKey": "panchpargania tdb"
    },
    {
        "code": "bkj",
        "name": "Pande",
        "searchKey": "pande bkj"
    },
    {
        "code": "pag",
        "name": "Pangasinan",
        "searchKey": "pangasinan pag"
    },
    {
        "code": "pgs",
        "name": "Pangseng",
        "searchKey": "pangseng pgs"
    },
    {
        "code": "png",
        "name": "Pangu",
        "searchKey": "pangu png"
    },
    {
        "code": "slm",
        "name": "Pangutaran Sama",
        "searchKey": "pangutaran sama slm"
    },
    {
        "code": "pbr",
        "name": "Pangwa",
        "searchKey": "pangwa pbr"
    },
    {
        "code": "pgg",
        "name": "Pangwali",
        "searchKey": "pangwali pgg"
    },
    {
        "code": "pnr",
        "name": "Panim",
        "searchKey": "panim pnr"
    },
    {
        "code": "pcg",
        "name": "Paniya",
        "searchKey": "paniya pcg"
    },
    {
        "code": "pan",
        "name": "Panjabi",
        "searchKey": "panjabi pan"
    },
    {
        "code": "pax",
        "name": "Pankararé",
        "searchKey": "pankarare pax"
    },
    {
        "code": "paz",
        "name": "Pankararú",
        "searchKey": "pankararu paz"
    },
    {
        "code": "pkh",
        "name": "Pankhu",
        "searchKey": "pankhu pkh"
    },
    {
        "code": "pnc",
        "name": "Pannei",
        "searchKey": "pannei pnc"
    },
    {
        "code": "mqz",
        "name": "Pano",
        "searchKey": "pano mqz"
    },
    {
        "code": "knt",
        "name": "Panoan Katukína",
        "searchKey": "panoan katukina knt"
    },
    {
        "code": "pno",
        "name": "Panobo",
        "searchKey": "panobo pno"
    },
    {
        "code": "bfc",
        "name": "Panyi Bai",
        "searchKey": "panyi bai bfc"
    },
    {
        "code": "blk",
        "name": "Pa'o Karen",
        "searchKey": "pao karen blk"
    },
    {
        "code": "top",
        "name": "Papantla Totonac",
        "searchKey": "papantla totonac top"
    },
    {
        "code": "ppn",
        "name": "Papapana",
        "searchKey": "papapana ppn"
    },
    {
        "code": "dpp",
        "name": "Papar",
        "searchKey": "papar dpp"
    },
    {
        "code": "pas",
        "name": "Papasena",
        "searchKey": "papasena pas"
    },
    {
        "code": "pbo",
        "name": "Papel",
        "searchKey": "papel pbo"
    },
    {
        "code": "ppe",
        "name": "Papi",
        "searchKey": "papi ppe"
    },
    {
        "code": "pap",
        "name": "Papiamento",
        "searchKey": "papiamento pap"
    },
    {
        "code": "ppu",
        "name": "Papora",
        "searchKey": "papora ppu"
    },
    {
        "code": "pgz",
        "name": "Papua New Guinean Sign Language",
        "searchKey": "papua new guinean sign language pgz"
    },
    {
        "code": "pmy",
        "name": "Papuan Malay",
        "searchKey": "papuan malay pmy"
    },
    {
        "code": "ppm",
        "name": "Papuma",
        "searchKey": "papuma ppm"
    },
    {
        "code": "aap",
        "name": "Pará Arára",
        "searchKey": "para arara aap"
    },
    {
        "code": "gvp",
        "name": "Pará Gavião",
        "searchKey": "para gaviao gvp"
    },
    {
        "code": "prc",
        "name": "Parachi",
        "searchKey": "parachi prc"
    },
    {
        "code": "gug",
        "name": "Paraguayan Guaraní",
        "searchKey": "paraguayan guarani gug"
    },
    {
        "code": "pys",
        "name": "Paraguayan Sign Language",
        "searchKey": "paraguayan sign language pys"
    },
    {
        "code": "pak",
        "name": "Parakanã",
        "searchKey": "parakana pak"
    },
    {
        "code": "prf",
        "name": "Paranan",
        "searchKey": "paranan prf"
    },
    {
        "code": "paf",
        "name": "Paranawát",
        "searchKey": "paranawat paf"
    },
    {
        "code": "pbg",
        "name": "Paraujano",
        "searchKey": "paraujano pbg"
    },
    {
        "code": "prk",
        "name": "Parauk",
        "searchKey": "parauk prk"
    },
    {
        "code": "prw",
        "name": "Parawen",
        "searchKey": "parawen prw"
    },
    {
        "code": "pch",
        "name": "Pardhan",
        "searchKey": "pardhan pch"
    },
    {
        "code": "pcl",
        "name": "Pardhi",
        "searchKey": "pardhi pcl"
    },
    {
        "code": "ppt",
        "name": "Pare",
        "searchKey": "pare ppt"
    },
    {
        "code": "pab",
        "name": "Parecís",
        "searchKey": "parecis pab"
    },
    {
        "code": "pcj",
        "name": "Parenga",
        "searchKey": "parenga pcj"
    },
    {
        "code": "lkr",
        "name": "Päri",
        "searchKey": "pari lkr"
    },
    {
        "code": "kvx",
        "name": "Parkari Koli",
        "searchKey": "parkari koli kvx"
    },
    {
        "code": "pbi",
        "name": "Parkwa",
        "searchKey": "parkwa pbi"
    },
    {
        "code": "prd",
        "name": "Parsi-Dari",
        "searchKey": "parsi-dari prd"
    },
    {
        "code": "xpr",
        "name": "Parthian",
        "searchKey": "parthian xpr"
    },
    {
        "code": "paq",
        "name": "Parya",
        "searchKey": "parya paq"
    },
    {
        "code": "psq",
        "name": "Pasi",
        "searchKey": "pasi psq"
    },
    {
        "code": "yac",
        "name": "Pass Valley Yali",
        "searchKey": "pass valley yali yac"
    },
    {
        "code": "pbc",
        "name": "Patamona",
        "searchKey": "patamona pbc"
    },
    {
        "code": "ptn",
        "name": "Patani",
        "searchKey": "patani ptn"
    },
    {
        "code": "pth",
        "name": "Pataxó Hã-Ha-Hãe",
        "searchKey": "pataxo ha-ha-hae pth"
    },
    {
        "code": "ptp",
        "name": "Patep",
        "searchKey": "patep ptp"
    },
    {
        "code": "pty",
        "name": "Pathiya",
        "searchKey": "pathiya pty"
    },
    {
        "code": "gfk",
        "name": "Patpatar",
        "searchKey": "patpatar gfk"
    },
    {
        "code": "lae",
        "name": "Pattani",
        "searchKey": "pattani lae"
    },
    {
        "code": "mfa",
        "name": "Pattani Malay",
        "searchKey": "pattani malay mfa"
    },
    {
        "code": "ptq",
        "name": "Pattapu",
        "searchKey": "pattapu ptq"
    },
    {
        "code": "pwi",
        "name": "Patwin",
        "searchKey": "patwin pwi"
    },
    {
        "code": "plh",
        "name": "Paulohi",
        "searchKey": "paulohi plh"
    },
    {
        "code": "pad",
        "name": "Paumarí",
        "searchKey": "paumari pad"
    },
    {
        "code": "pnk",
        "name": "Paunaka",
        "searchKey": "paunaka pnk"
    },
    {
        "code": "bfb",
        "name": "Pauri Bareli",
        "searchKey": "pauri bareli bfb"
    },
    {
        "code": "psm",
        "name": "Pauserna",
        "searchKey": "pauserna psm"
    },
    {
        "code": "pwa",
        "name": "Pawaia",
        "searchKey": "pawaia pwa"
    },
    {
        "code": "paw",
        "name": "Pawnee",
        "searchKey": "pawnee paw"
    },
    {
        "code": "pmr",
        "name": "Paynamar",
        "searchKey": "paynamar pmr"
    },
    {
        "code": "pzh",
        "name": "Pazeh",
        "searchKey": "pazeh pzh"
    },
    {
        "code": "pai",
        "name": "Pe",
        "searchKey": "pe pai"
    },
    {
        "code": "pcb",
        "name": "Pear",
        "searchKey": "pear pcb"
    },
    {
        "code": "pay",
        "name": "Pech",
        "searchKey": "pech pay"
    },
    {
        "code": "xpc",
        "name": "Pecheneg",
        "searchKey": "pecheneg xpc"
    },
    {
        "code": "nso",
        "name": "Pedi",
        "searchKey": "pedi nso"
    },
    {
        "code": "ppq",
        "name": "Pei",
        "searchKey": "pei ppq"
    },
    {
        "code": "pel",
        "name": "Pekal",
        "searchKey": "pekal pel"
    },
    {
        "code": "bxd",
        "name": "Pela",
        "searchKey": "pela bxd"
    },
    {
        "code": "ata",
        "name": "Pele-Ata",
        "searchKey": "pele-ata ata"
    },
    {
        "code": "ppp",
        "name": "Pelende",
        "searchKey": "pelende ppp"
    },
    {
        "code": "aoc",
        "name": "Pemon",
        "searchKey": "pemon aoc"
    },
    {
        "code": "pev",
        "name": "Pémono",
        "searchKey": "pemono pev"
    },
    {
        "code": "psg",
        "name": "Penang Sign Language",
        "searchKey": "penang sign language psg"
    },
    {
        "code": "pek",
        "name": "Penchal",
        "searchKey": "penchal pek"
    },
    {
        "code": "ums",
        "name": "Pendau",
        "searchKey": "pendau ums"
    },
    {
        "code": "peg",
        "name": "Pengo",
        "searchKey": "pengo peg"
    },
    {
        "code": "pdc",
        "name": "Pennsylvania German",
        "searchKey": "pennsylvania german pdc"
    },
    {
        "code": "mil",
        "name": "Peñoles Mixtec",
        "searchKey": "penoles mixtec mil"
    },
    {
        "code": "pnh",
        "name": "Penrhyn",
        "searchKey": "penrhyn pnh"
    },
    {
        "code": "ptw",
        "name": "Pentlatch",
        "searchKey": "pentlatch ptw"
    },
    {
        "code": "wet",
        "name": "Perai",
        "searchKey": "perai wet"
    },
    {
        "code": "pea",
        "name": "Peranakan Indonesian",
        "searchKey": "peranakan indonesian pea"
    },
    {
        "code": "pfe",
        "name": "Pere",
        "searchKey": "pere pfe"
    },
    {
        "code": "mvf",
        "name": "Peripheral Mongolian",
        "searchKey": "peripheral mongolian mvf"
    },
    {
        "code": "pip",
        "name": "Pero",
        "searchKey": "pero pip"
    },
    {
        "code": "fas",
        "name": "Persian",
        "searchKey": "persian fas"
    },
    {
        "code": "prl",
        "name": "Peruvian Sign Language",
        "searchKey": "peruvian sign language prl"
    },
    {
        "code": "pze",
        "name": "Pesse",
        "searchKey": "pesse pze"
    },
    {
        "code": "zpe",
        "name": "Petapa Zapotec",
        "searchKey": "petapa zapotec zpe"
    },
    {
        "code": "pex",
        "name": "Petats",
        "searchKey": "petats pex"
    },
    {
        "code": "pey",
        "name": "Petjo",
        "searchKey": "petjo pey"
    },
    {
        "code": "lme",
        "name": "Pévé",
        "searchKey": "peve lme"
    },
    {
        "code": "pfl",
        "name": "Pfaelzisch",
        "searchKey": "pfaelzisch pfl"
    },
    {
        "code": "prt",
        "name": "Phai",
        "searchKey": "phai prt"
    },
    {
        "code": "phk",
        "name": "Phake",
        "searchKey": "phake phk"
    },
    {
        "code": "ypa",
        "name": "Phala",
        "searchKey": "phala ypa"
    },
    {
        "code": "phl",
        "name": "Phalura",
        "searchKey": "phalura phl"
    },
    {
        "code": "phq",
        "name": "Phana'",
        "searchKey": "phana phq"
    },
    {
        "code": "phw",
        "name": "Phangduwali",
        "searchKey": "phangduwali phw"
    },
    {
        "code": "pem",
        "name": "Phende",
        "searchKey": "phende pem"
    },
    {
        "code": "psp",
        "name": "Philippine Sign Language",
        "searchKey": "philippine sign language psp"
    },
    {
        "code": "phm",
        "name": "Phimbi",
        "searchKey": "phimbi phm"
    },
    {
        "code": "phn",
        "name": "Phoenician",
        "searchKey": "phoenician phn"
    },
    {
        "code": "ypg",
        "name": "Phola",
        "searchKey": "phola ypg"
    },
    {
        "code": "yip",
        "name": "Pholo",
        "searchKey": "pholo yip"
    },
    {
        "code": "nph",
        "name": "Phom Naga",
        "searchKey": "phom naga nph"
    },
    {
        "code": "pnx",
        "name": "Phong-Kniang",
        "searchKey": "phong-kniang pnx"
    },
    {
        "code": "kjt",
        "name": "Phrae Pwo Karen",
        "searchKey": "phrae pwo karen kjt"
    },
    {
        "code": "xpg",
        "name": "Phrygian",
        "searchKey": "phrygian xpg"
    },
    {
        "code": "pht",
        "name": "Phu Thai",
        "searchKey": "phu thai pht"
    },
    {
        "code": "phu",
        "name": "Phuan",
        "searchKey": "phuan phu"
    },
    {
        "code": "phd",
        "name": "Phudagi",
        "searchKey": "phudagi phd"
    },
    {
        "code": "pug",
        "name": "Phuie",
        "searchKey": "phuie pug"
    },
    {
        "code": "phh",
        "name": "Phukha",
        "searchKey": "phukha phh"
    },
    {
        "code": "ypm",
        "name": "Phuma",
        "searchKey": "phuma ypm"
    },
    {
        "code": "pho",
        "name": "Phunoi",
        "searchKey": "phunoi pho"
    },
    {
        "code": "phg",
        "name": "Phuong",
        "searchKey": "phuong phg"
    },
    {
        "code": "ypp",
        "name": "Phupa",
        "searchKey": "phupa ypp"
    },
    {
        "code": "yph",
        "name": "Phupha",
        "searchKey": "phupha yph"
    },
    {
        "code": "ypz",
        "name": "Phuza",
        "searchKey": "phuza ypz"
    },
    {
        "code": "ptr",
        "name": "Piamatsina",
        "searchKey": "piamatsina ptr"
    },
    {
        "code": "pin",
        "name": "Piame",
        "searchKey": "piame pin"
    },
    {
        "code": "pio",
        "name": "Piapoco",
        "searchKey": "piapoco pio"
    },
    {
        "code": "pid",
        "name": "Piaroa",
        "searchKey": "piaroa pid"
    },
    {
        "code": "pcd",
        "name": "Picard",
        "searchKey": "picard pcd"
    },
    {
        "code": "cpu",
        "name": "Pichis Ashéninka",
        "searchKey": "pichis asheninka cpu"
    },
    {
        "code": "xpi",
        "name": "Pictish",
        "searchKey": "pictish xpi"
    },
    {
        "code": "dep",
        "name": "Pidgin Delaware",
        "searchKey": "pidgin delaware dep"
    },
    {
        "code": "pms",
        "name": "Piemontese",
        "searchKey": "piemontese pms"
    },
    {
        "code": "pij",
        "name": "Pijao",
        "searchKey": "pijao pij"
    },
    {
        "code": "piz",
        "name": "Pije",
        "searchKey": "pije piz"
    },
    {
        "code": "pis",
        "name": "Pijin",
        "searchKey": "pijin pis"
    },
    {
        "code": "plg",
        "name": "Pilagá",
        "searchKey": "pilaga plg"
    },
    {
        "code": "piv",
        "name": "Pileni",
        "searchKey": "pileni piv"
    },
    {
        "code": "pia",
        "name": "Pima Bajo",
        "searchKey": "pima bajo pia"
    },
    {
        "code": "piw",
        "name": "Pimbwe",
        "searchKey": "pimbwe piw"
    },
    {
        "code": "pnn",
        "name": "Pinai-Hagahai",
        "searchKey": "pinai-hagahai pnn"
    },
    {
        "code": "pti",
        "name": "Pindiini",
        "searchKey": "pindiini pti"
    },
    {
        "code": "pif",
        "name": "Pingelapese",
        "searchKey": "pingelapese pif"
    },
    {
        "code": "pnv",
        "name": "Pinigura",
        "searchKey": "pinigura pnv"
    },
    {
        "code": "pnj",
        "name": "Pinjarup",
        "searchKey": "pinjarup pnj"
    },
    {
        "code": "pic",
        "name": "Pinji",
        "searchKey": "pinji pic"
    },
    {
        "code": "mio",
        "name": "Pinotepa Nacional Mixtec",
        "searchKey": "pinotepa nacional mixtec mio"
    },
    {
        "code": "piu",
        "name": "Pintupi-Luritja",
        "searchKey": "pintupi-luritja piu"
    },
    {
        "code": "pny",
        "name": "Pinyin",
        "searchKey": "pinyin pny"
    },
    {
        "code": "ppl",
        "name": "Pipil",
        "searchKey": "pipil ppl"
    },
    {
        "code": "myp",
        "name": "Pirahã",
        "searchKey": "piraha myp"
    },
    {
        "code": "pir",
        "name": "Piratapuyo",
        "searchKey": "piratapuyo pir"
    },
    {
        "code": "bxi",
        "name": "Pirlatapa",
        "searchKey": "pirlatapa bxi"
    },
    {
        "code": "pie",
        "name": "Piro",
        "searchKey": "piro pie"
    },
    {
        "code": "xpa",
        "name": "Pirriya",
        "searchKey": "pirriya xpa"
    },
    {
        "code": "pig",
        "name": "Pisabo",
        "searchKey": "pisabo pig"
    },
    {
        "code": "tpp",
        "name": "Pisaflores Tepehua",
        "searchKey": "pisaflores tepehua tpp"
    },
    {
        "code": "psy",
        "name": "Piscataway",
        "searchKey": "piscataway psy"
    },
    {
        "code": "xps",
        "name": "Pisidian",
        "searchKey": "pisidian xps"
    },
    {
        "code": "pih",
        "name": "Pitcairn-Norfolk",
        "searchKey": "pitcairn-norfolk pih"
    },
    {
        "code": "sje",
        "name": "Pite Sami",
        "searchKey": "pite sami sje"
    },
    {
        "code": "pcn",
        "name": "Piti",
        "searchKey": "piti pcn"
    },
    {
        "code": "pjt",
        "name": "Pitjantjatjara",
        "searchKey": "pitjantjatjara pjt"
    },
    {
        "code": "pit",
        "name": "Pitta Pitta",
        "searchKey": "pitta pitta pit"
    },
    {
        "code": "pix",
        "name": "Piu",
        "searchKey": "piu pix"
    },
    {
        "code": "piy",
        "name": "Piya-Kwonci",
        "searchKey": "piya-kwonci piy"
    },
    {
        "code": "crk",
        "name": "Plains Cree",
        "searchKey": "plains cree crk"
    },
    {
        "code": "psd",
        "name": "Plains Indian Sign Language",
        "searchKey": "plains indian sign language psd"
    },
    {
        "code": "pmw",
        "name": "Plains Miwok",
        "searchKey": "plains miwok pmw"
    },
    {
        "code": "ktj",
        "name": "Plapo Krumen",
        "searchKey": "plapo krumen ktj"
    },
    {
        "code": "plt",
        "name": "Plateau Malagasy",
        "searchKey": "plateau malagasy plt"
    },
    {
        "code": "pdt",
        "name": "Plautdietsch",
        "searchKey": "plautdietsch pdt"
    },
    {
        "code": "gob",
        "name": "Playero",
        "searchKey": "playero gob"
    },
    {
        "code": "pbv",
        "name": "Pnar",
        "searchKey": "pnar pbv"
    },
    {
        "code": "npo",
        "name": "Pochuri Naga",
        "searchKey": "pochuri naga npo"
    },
    {
        "code": "xpo",
        "name": "Pochutec",
        "searchKey": "pochutec xpo"
    },
    {
        "code": "pdn",
        "name": "Podena",
        "searchKey": "podena pdn"
    },
    {
        "code": "poy",
        "name": "Pogolo",
        "searchKey": "pogolo poy"
    },
    {
        "code": "pon",
        "name": "Pohnpeian",
        "searchKey": "pohnpeian pon"
    },
    {
        "code": "pok",
        "name": "Pokangá",
        "searchKey": "pokanga pok"
    },
    {
        "code": "pof",
        "name": "Poke",
        "searchKey": "poke pof"
    },
    {
        "code": "pkb",
        "name": "Pokomo",
        "searchKey": "pokomo pkb"
    },
    {
        "code": "pko",
        "name": "Pökoot",
        "searchKey": "pokoot pko"
    },
    {
        "code": "pox",
        "name": "Polabian",
        "searchKey": "polabian pox"
    },
    {
        "code": "pld",
        "name": "Polari",
        "searchKey": "polari pld"
    },
    {
        "code": "pol",
        "name": "Polish",
        "searchKey": "polish pol"
    },
    {
        "code": "pso",
        "name": "Polish Sign Language",
        "searchKey": "polish sign language pso"
    },
    {
        "code": "plb",
        "name": "Polonombauk",
        "searchKey": "polonombauk plb"
    },
    {
        "code": "pmo",
        "name": "Pom",
        "searchKey": "pom pmo"
    },
    {
        "code": "pmm",
        "name": "Pomo",
        "searchKey": "pomo pmm"
    },
    {
        "code": "ncc",
        "name": "Ponam",
        "searchKey": "ponam ncc"
    },
    {
        "code": "pns",
        "name": "Ponosakan",
        "searchKey": "ponosakan pns"
    },
    {
        "code": "pnt",
        "name": "Pontic",
        "searchKey": "pontic pnt"
    },
    {
        "code": "npg",
        "name": "Ponyo-Gongwang Naga",
        "searchKey": "ponyo-gongwang naga npg"
    },
    {
        "code": "jac",
        "name": "Popti'",
        "searchKey": "popti jac"
    },
    {
        "code": "poc",
        "name": "Poqomam",
        "searchKey": "poqomam poc"
    },
    {
        "code": "poh",
        "name": "Poqomchi'",
        "searchKey": "poqomchi poh"
    },
    {
        "code": "prh",
        "name": "Porohanon",
        "searchKey": "porohanon prh"
    },
    {
        "code": "psw",
        "name": "Port Sandwich",
        "searchKey": "port sandwich psw"
    },
    {
        "code": "xpl",
        "name": "Port Sorell Tasmanian",
        "searchKey": "port sorell tasmanian xpl"
    },
    {
        "code": "ptv",
        "name": "Port Vato",
        "searchKey": "port vato ptv"
    },
    {
        "code": "por",
        "name": "Portuguese",
        "searchKey": "portuguese por"
    },
    {
        "code": "psr",
        "name": "Portuguese Sign Language",
        "searchKey": "portuguese sign language psr"
    },
    {
        "code": "pot",
        "name": "Potawatomi",
        "searchKey": "potawatomi pot"
    },
    {
        "code": "pog",
        "name": "Potiguára",
        "searchKey": "potiguara pog"
    },
    {
        "code": "gdb",
        "name": "Pottangi Ollar Gadaba",
        "searchKey": "pottangi ollar gadaba gdb"
    },
    {
        "code": "pmx",
        "name": "Poumei Naga",
        "searchKey": "poumei naga pmx"
    },
    {
        "code": "bye",
        "name": "Pouye",
        "searchKey": "pouye bye"
    },
    {
        "code": "pwr",
        "name": "Powari",
        "searchKey": "powari pwr"
    },
    {
        "code": "pim",
        "name": "Powhatan",
        "searchKey": "powhatan pim"
    },
    {
        "code": "pyn",
        "name": "Poyanáwa",
        "searchKey": "poyanawa pyn"
    },
    {
        "code": "prn",
        "name": "Prasuni",
        "searchKey": "prasuni prn"
    },
    {
        "code": "pgl",
        "name": "Primitive Irish",
        "searchKey": "primitive irish pgl"
    },
    {
        "code": "pre",
        "name": "Principense",
        "searchKey": "principense pre"
    },
    {
        "code": "prz",
        "name": "Providencia Sign Language",
        "searchKey": "providencia sign language prz"
    },
    {
        "code": "prg",
        "name": "Prussian",
        "searchKey": "prussian prg"
    },
    {
        "code": "kvj",
        "name": "Psikye",
        "searchKey": "psikye kvj"
    },
    {
        "code": "pux",
        "name": "Puare",
        "searchKey": "puare pux"
    },
    {
        "code": "atp",
        "name": "Pudtol Atta",
        "searchKey": "pudtol atta atp"
    },
    {
        "code": "pbm",
        "name": "Puebla Mazatec",
        "searchKey": "puebla mazatec pbm"
    },
    {
        "code": "pue",
        "name": "Puelche",
        "searchKey": "puelche pue"
    },
    {
        "code": "psl",
        "name": "Puerto Rican Sign Language",
        "searchKey": "puerto rican sign language psl"
    },
    {
        "code": "npu",
        "name": "Puimei Naga",
        "searchKey": "puimei naga npu"
    },
    {
        "code": "pui",
        "name": "Puinave",
        "searchKey": "puinave pui"
    },
    {
        "code": "pkp",
        "name": "Pukapuka",
        "searchKey": "pukapuka pkp"
    },
    {
        "code": "fuc",
        "name": "Pulaar",
        "searchKey": "pulaar fuc"
    },
    {
        "code": "pup",
        "name": "Pulabu",
        "searchKey": "pulabu pup"
    },
    {
        "code": "fuf",
        "name": "Pular",
        "searchKey": "pular fuf"
    },
    {
        "code": "puw",
        "name": "Puluwatese",
        "searchKey": "puluwatese puw"
    },
    {
        "code": "pum",
        "name": "Puma",
        "searchKey": "puma pum"
    },
    {
        "code": "yae",
        "name": "Pumé",
        "searchKey": "pume yae"
    },
    {
        "code": "xpm",
        "name": "Pumpokol",
        "searchKey": "pumpokol xpm"
    },
    {
        "code": "pud",
        "name": "Punan Aput",
        "searchKey": "punan aput pud"
    },
    {
        "code": "pna",
        "name": "Punan Bah-Biau",
        "searchKey": "punan bah-biau pna"
    },
    {
        "code": "pnm",
        "name": "Punan Batu 1",
        "searchKey": "punan batu 1 pnm"
    },
    {
        "code": "puf",
        "name": "Punan Merah",
        "searchKey": "punan merah puf"
    },
    {
        "code": "puc",
        "name": "Punan Merap",
        "searchKey": "punan merap puc"
    },
    {
        "code": "puj",
        "name": "Punan Tubu",
        "searchKey": "punan tubu puj"
    },
    {
        "code": "xpu",
        "name": "Punic",
        "searchKey": "punic xpu"
    },
    {
        "code": "qxp",
        "name": "Puno Quechua",
        "searchKey": "puno quechua qxp"
    },
    {
        "code": "xpt",
        "name": "Punthamara",
        "searchKey": "punthamara xpt"
    },
    {
        "code": "puu",
        "name": "Punu",
        "searchKey": "punu puu"
    },
    {
        "code": "puo",
        "name": "Puoc",
        "searchKey": "puoc puo"
    },
    {
        "code": "puq",
        "name": "Puquina",
        "searchKey": "puquina puq"
    },
    {
        "code": "pru",
        "name": "Puragi",
        "searchKey": "puragi pru"
    },
    {
        "code": "iar",
        "name": "Purari",
        "searchKey": "purari iar"
    },
    {
        "code": "tsz",
        "name": "Purepecha",
        "searchKey": "purepecha tsz"
    },
    {
        "code": "prr",
        "name": "Puri",
        "searchKey": "puri prr"
    },
    {
        "code": "prx",
        "name": "Purik",
        "searchKey": "purik prx"
    },
    {
        "code": "puy",
        "name": "Purisimeño",
        "searchKey": "purisimeno puy"
    },
    {
        "code": "suv",
        "name": "Puroik",
        "searchKey": "puroik suv"
    },
    {
        "code": "pur",
        "name": "Puruborá",
        "searchKey": "purubora pur"
    },
    {
        "code": "pub",
        "name": "Purum",
        "searchKey": "purum pub"
    },
    {
        "code": "pus",
        "name": "Pushto",
        "searchKey": "pushto pus"
    },
    {
        "code": "mfl",
        "name": "Putai",
        "searchKey": "putai mfl"
    },
    {
        "code": "put",
        "name": "Putoh",
        "searchKey": "putoh put"
    },
    {
        "code": "afe",
        "name": "Putukwam",
        "searchKey": "putukwam afe"
    },
    {
        "code": "cpx",
        "name": "Pu-Xian Chinese",
        "searchKey": "pu-xian chinese cpx"
    },
    {
        "code": "xpy",
        "name": "Puyo",
        "searchKey": "puyo xpy"
    },
    {
        "code": "xpp",
        "name": "Puyo-Paekche",
        "searchKey": "puyo-paekche xpp"
    },
    {
        "code": "pyu",
        "name": "Puyuma",
        "searchKey": "puyuma pyu"
    },
    {
        "code": "pme",
        "name": "Pwaamei",
        "searchKey": "pwaamei pme"
    },
    {
        "code": "pop",
        "name": "Pwapwâ",
        "searchKey": "pwapwa pop"
    },
    {
        "code": "kjp",
        "name": "Pwo Eastern Karen",
        "searchKey": "pwo eastern karen kjp"
    },
    {
        "code": "pww",
        "name": "Pwo Northern Karen",
        "searchKey": "pwo northern karen pww"
    },
    {
        "code": "pwo",
        "name": "Pwo Western Karen",
        "searchKey": "pwo western karen pwo"
    },
    {
        "code": "pcw",
        "name": "Pyapun",
        "searchKey": "pyapun pcw"
    },
    {
        "code": "pye",
        "name": "Pye Krumen",
        "searchKey": "pye krumen pye"
    },
    {
        "code": "pyy",
        "name": "Pyen",
        "searchKey": "pyen pyy"
    },
    {
        "code": "pyx",
        "name": "Pyu (Myanmar)",
        "searchNames": [
            "Pyu"
        ],
        "searchKey": "pyu myanmar pyx pyu"
    },
    {
        "code": "pby",
        "name": "Pyu (Papua New Guinea)",
        "searchNames": [
            "Pyu"
        ],
        "searchKey": "pyu papua new guinea pby pyu"
    },
    {
        "code": "laq",
        "name": "Qabiao",
        "searchKey": "qabiao laq"
    },
    {
        "code": "kjb",
        "name": "Q'anjob'al",
        "searchKey": "qanjobal kjb"
    },
    {
        "code": "byx",
        "name": "Qaqet",
        "searchKey": "qaqet byx"
    },
    {
        "code": "qxq",
        "name": "Qashqa'i",
        "searchKey": "qashqai qxq"
    },
    {
        "code": "xqt",
        "name": "Qatabanian",
        "searchKey": "qatabanian xqt"
    },
    {
        "code": "gqu",
        "name": "Qau",
        "searchKey": "qau gqu"
    },
    {
        "code": "alc",
        "name": "Qawasqar",
        "searchKey": "qawasqar alc"
    },
    {
        "code": "ymq",
        "name": "Qila Muji",
        "searchKey": "qila muji ymq"
    },
    {
        "code": "ahg",
        "name": "Qimant",
        "searchKey": "qimant ahg"
    },
    {
        "code": "zqe",
        "name": "Qiubei Zhuang",
        "searchKey": "qiubei zhuang zqe"
    },
    {
        "code": "qua",
        "name": "Quapaw",
        "searchKey": "quapaw qua"
    },
    {
        "code": "fcs",
        "name": "Quebec Sign Language",
        "searchKey": "quebec sign language fcs"
    },
    {
        "code": "yum",
        "name": "Quechan",
        "searchKey": "quechan yum"
    },
    {
        "code": "que",
        "name": "Quechua",
        "searchKey": "quechua que"
    },
    {
        "code": "qya",
        "name": "Quenya",
        "searchKey": "quenya qya"
    },
    {
        "code": "otq",
        "name": "Querétaro Otomi",
        "searchKey": "queretaro otomi otq"
    },
    {
        "code": "pxm",
        "name": "Quetzaltepec Mixe",
        "searchKey": "quetzaltepec mixe pxm"
    },
    {
        "code": "qvy",
        "name": "Queyu",
        "searchKey": "queyu qvy"
    },
    {
        "code": "zpj",
        "name": "Quiavicuzas Zapotec",
        "searchKey": "quiavicuzas zapotec zpj"
    },
    {
        "code": "qui",
        "name": "Quileute",
        "searchKey": "quileute qui"
    },
    {
        "code": "qun",
        "name": "Quinault",
        "searchKey": "quinault qun"
    },
    {
        "code": "quq",
        "name": "Quinqui",
        "searchKey": "quinqui quq"
    },
    {
        "code": "ztq",
        "name": "Quioquitani-Quierí Zapotec",
        "searchKey": "quioquitani-quieri zapotec ztq"
    },
    {
        "code": "chq",
        "name": "Quiotepec Chinantec",
        "searchKey": "quiotepec chinantec chq"
    },
    {
        "code": "qyp",
        "name": "Quiripi",
        "searchKey": "quiripi qyp"
    },
    {
        "code": "rah",
        "name": "Rabha",
        "searchKey": "rabha rah"
    },
    {
        "code": "rad",
        "name": "Rade",
        "searchKey": "rade rad"
    },
    {
        "code": "xrr",
        "name": "Raetic",
        "searchKey": "raetic xrr"
    },
    {
        "code": "raz",
        "name": "Rahambuu",
        "searchKey": "rahambuu raz"
    },
    {
        "code": "mqk",
        "name": "Rajah Kabunsuwan Manobo",
        "searchKey": "rajah kabunsuwan manobo mqk"
    },
    {
        "code": "raj",
        "name": "Rajasthani",
        "searchKey": "rajasthani raj"
    },
    {
        "code": "rjs",
        "name": "Rajbanshi",
        "searchKey": "rajbanshi rjs"
    },
    {
        "code": "rji",
        "name": "Raji",
        "searchKey": "raji rji"
    },
    {
        "code": "rjg",
        "name": "Rajong",
        "searchKey": "rajong rjg"
    },
    {
        "code": "gra",
        "name": "Rajput Garasia",
        "searchKey": "rajput garasia gra"
    },
    {
        "code": "rkh",
        "name": "Rakahanga-Manihiki",
        "searchKey": "rakahanga-manihiki rkh"
    },
    {
        "code": "rki",
        "name": "Rakhine",
        "searchKey": "rakhine rki"
    },
    {
        "code": "ral",
        "name": "Ralte",
        "searchKey": "ralte ral"
    },
    {
        "code": "rma",
        "name": "Rama",
        "searchKey": "rama rma"
    },
    {
        "code": "rai",
        "name": "Ramoaaina",
        "searchKey": "ramoaaina rai"
    },
    {
        "code": "kjx",
        "name": "Ramopa",
        "searchKey": "ramopa kjx"
    },
    {
        "code": "lje",
        "name": "Rampi",
        "searchKey": "rampi lje"
    },
    {
        "code": "thr",
        "name": "Rana Tharu",
        "searchKey": "rana tharu thr"
    },
    {
        "code": "rax",
        "name": "Rang",
        "searchKey": "rang rax"
    },
    {
        "code": "lag",
        "name": "Rangi",
        "searchKey": "rangi lag"
    },
    {
        "code": "rgk",
        "name": "Rangkas",
        "searchKey": "rangkas rgk"
    },
    {
        "code": "rnl",
        "name": "Ranglong",
        "searchKey": "ranglong rnl"
    },
    {
        "code": "rkt",
        "name": "Rangpuri",
        "searchKey": "rangpuri rkt"
    },
    {
        "code": "rao",
        "name": "Rao",
        "searchKey": "rao"
    },
    {
        "code": "ray",
        "name": "Rapa",
        "searchKey": "rapa ray"
    },
    {
        "code": "rap",
        "name": "Rapanui",
        "searchKey": "rapanui rap"
    },
    {
        "code": "kyx",
        "name": "Rapoisi",
        "searchKey": "rapoisi kyx"
    },
    {
        "code": "rpt",
        "name": "Rapting",
        "searchKey": "rapting rpt"
    },
    {
        "code": "lra",
        "name": "Rara Bakati'",
        "searchKey": "rara bakati lra"
    },
    {
        "code": "rar",
        "name": "Rarotongan",
        "searchKey": "rarotongan rar"
    },
    {
        "code": "rac",
        "name": "Rasawa",
        "searchKey": "rasawa rac"
    },
    {
        "code": "btn",
        "name": "Ratagnon",
        "searchKey": "ratagnon btn"
    },
    {
        "code": "rth",
        "name": "Ratahan",
        "searchKey": "ratahan rth"
    },
    {
        "code": "rtw",
        "name": "Rathawi",
        "searchKey": "rathawi rtw"
    },
    {
        "code": "bgd",
        "name": "Rathwi Bareli",
        "searchKey": "rathwi bareli bgd"
    },
    {
        "code": "rau",
        "name": "Raute",
        "searchKey": "raute rau"
    },
    {
        "code": "yea",
        "name": "Ravula",
        "searchKey": "ravula yea"
    },
    {
        "code": "rwo",
        "name": "Rawa",
        "searchKey": "rawa rwo"
    },
    {
        "code": "raw",
        "name": "Rawang",
        "searchKey": "rawang raw"
    },
    {
        "code": "jnl",
        "name": "Rawat",
        "searchKey": "rawat jnl"
    },
    {
        "code": "weu",
        "name": "Rawngtu Chin",
        "searchKey": "rawngtu chin weu"
    },
    {
        "code": "rwa",
        "name": "Rawo",
        "searchKey": "rawo rwa"
    },
    {
        "code": "zor",
        "name": "Rayón Zoque",
        "searchKey": "rayon zoque zor"
    },
    {
        "code": "rat",
        "name": "Razajerdi",
        "searchKey": "razajerdi rat"
    },
    {
        "code": "rzh",
        "name": "Rāziḥī",
        "searchKey": "razihi rzh"
    },
    {
        "code": "gir",
        "name": "Red Gelao",
        "searchKey": "red gelao gir"
    },
    {
        "code": "atu",
        "name": "Reel",
        "searchKey": "reel atu"
    },
    {
        "code": "rej",
        "name": "Rejang",
        "searchKey": "rejang rej"
    },
    {
        "code": "ree",
        "name": "Rejang Kayan",
        "searchKey": "rejang kayan ree"
    },
    {
        "code": "rei",
        "name": "Reli",
        "searchKey": "reli rei"
    },
    {
        "code": "bow",
        "name": "Rema",
        "searchKey": "rema bow"
    },
    {
        "code": "rmb",
        "name": "Rembarrnga",
        "searchKey": "rembarrnga rmb"
    },
    {
        "code": "reb",
        "name": "Rembong",
        "searchKey": "rembong reb"
    },
    {
        "code": "rem",
        "name": "Remo",
        "searchKey": "remo rem"
    },
    {
        "code": "agv",
        "name": "Remontado Dumagat",
        "searchKey": "remontado dumagat agv"
    },
    {
        "code": "rmp",
        "name": "Rempi",
        "searchKey": "rempi rmp"
    },
    {
        "code": "lkj",
        "name": "Remun",
        "searchKey": "remun lkj"
    },
    {
        "code": "rel",
        "name": "Rendille",
        "searchKey": "rendille rel"
    },
    {
        "code": "ren",
        "name": "Rengao",
        "searchKey": "rengao ren"
    },
    {
        "code": "mnv",
        "name": "Rennell-Bellona",
        "searchKey": "rennell-bellona mnv"
    },
    {
        "code": "rpn",
        "name": "Repanbitip",
        "searchKey": "repanbitip rpn"
    },
    {
        "code": "rer",
        "name": "Rer Bare",
        "searchKey": "rer bare rer"
    },
    {
        "code": "rea",
        "name": "Rerau",
        "searchKey": "rerau rea"
    },
    {
        "code": "pgk",
        "name": "Rerep",
        "searchKey": "rerep pgk"
    },
    {
        "code": "res",
        "name": "Reshe",
        "searchKey": "reshe res"
    },
    {
        "code": "rgr",
        "name": "Resígaro",
        "searchKey": "resigaro rgr"
    },
    {
        "code": "ret",
        "name": "Retta",
        "searchKey": "retta ret"
    },
    {
        "code": "rcf",
        "name": "Réunion Creole French",
        "searchKey": "reunion creole french rcf"
    },
    {
        "code": "rey",
        "name": "Reyesano",
        "searchKey": "reyesano rey"
    },
    {
        "code": "ria",
        "name": "Riang (India)",
        "searchNames": [
            "Riang"
        ],
        "searchKey": "riang india ria riang"
    },
    {
        "code": "yin",
        "name": "Riang Lai",
        "searchKey": "riang lai yin"
    },
    {
        "code": "ril",
        "name": "Riang Lang",
        "searchKey": "riang lang ril"
    },
    {
        "code": "ran",
        "name": "Riantana",
        "searchKey": "riantana ran"
    },
    {
        "code": "rir",
        "name": "Ribun",
        "searchKey": "ribun rir"
    },
    {
        "code": "iri",
        "name": "Rigwe",
        "searchKey": "rigwe iri"
    },
    {
        "code": "rkb",
        "name": "Rikbaktsa",
        "searchKey": "rikbaktsa rkb"
    },
    {
        "code": "zar",
        "name": "Rincón Zapotec",
        "searchKey": "rincon zapotec zar"
    },
    {
        "code": "bto",
        "name": "Rinconada Bikol",
        "searchKey": "rinconada bikol bto"
    },
    {
        "code": "rgu",
        "name": "Ringgou",
        "searchKey": "ringgou rgu"
    },
    {
        "code": "rri",
        "name": "Ririo",
        "searchKey": "ririo rri"
    },
    {
        "code": "rsw",
        "name": "Rishiwa",
        "searchKey": "rishiwa rsw"
    },
    {
        "code": "rit",
        "name": "Ritharrngu",
        "searchKey": "ritharrngu rit"
    },
    {
        "code": "riu",
        "name": "Riung",
        "searchKey": "riung riu"
    },
    {
        "code": "snj",
        "name": "Riverain Sango",
        "searchKey": "riverain sango snj"
    },
    {
        "code": "lbn",
        "name": "Rmeet",
        "searchKey": "rmeet lbn"
    },
    {
        "code": "rod",
        "name": "Rogo",
        "searchKey": "rogo rod"
    },
    {
        "code": "rhg",
        "name": "Rohingya",
        "searchKey": "rohingya rhg"
    },
    {
        "code": "rmm",
        "name": "Roma",
        "searchKey": "roma rmm"
    },
    {
        "code": "rgn",
        "name": "Romagnol",
        "searchKey": "romagnol rgn"
    },
    {
        "code": "rmx",
        "name": "Romam",
        "searchKey": "romam rmx"
    },
    {
        "code": "ron",
        "name": "Romanian",
        "searchKey": "romanian ron"
    },
    {
        "code": "rms",
        "name": "Romanian Sign Language",
        "searchKey": "romanian sign language rms"
    },
    {
        "code": "rge",
        "name": "Romano-Greek",
        "searchKey": "romano-greek rge"
    },
    {
        "code": "rsb",
        "name": "Romano-Serbian",
        "searchKey": "romano-serbian rsb"
    },
    {
        "code": "rmv",
        "name": "Romanova",
        "searchKey": "romanova rmv"
    },
    {
        "code": "roh",
        "name": "Romansh",
        "searchKey": "romansh roh"
    },
    {
        "code": "rom",
        "name": "Romany",
        "searchKey": "romany rom"
    },
    {
        "code": "rol",
        "name": "Romblomanon",
        "searchKey": "romblomanon rol"
    },
    {
        "code": "rof",
        "name": "Rombo",
        "searchKey": "rombo rof"
    },
    {
        "code": "rmk",
        "name": "Romkun",
        "searchKey": "romkun rmk"
    },
    {
        "code": "cla",
        "name": "Ron",
        "searchKey": "ron cla"
    },
    {
        "code": "rng",
        "name": "Ronga",
        "searchKey": "ronga rng"
    },
    {
        "code": "ror",
        "name": "Rongga",
        "searchKey": "rongga ror"
    },
    {
        "code": "nbu",
        "name": "Rongmei Naga",
        "searchKey": "rongmei naga nbu"
    },
    {
        "code": "rnp",
        "name": "Rongpo",
        "searchKey": "rongpo rnp"
    },
    {
        "code": "roe",
        "name": "Ronji",
        "searchKey": "ronji roe"
    },
    {
        "code": "rnn",
        "name": "Roon",
        "searchKey": "roon rnn"
    },
    {
        "code": "rga",
        "name": "Roria",
        "searchKey": "roria rga"
    },
    {
        "code": "roo",
        "name": "Rotokas",
        "searchKey": "rotokas roo"
    },
    {
        "code": "rtm",
        "name": "Rotuman",
        "searchKey": "rotuman rtm"
    },
    {
        "code": "rug",
        "name": "Roviana",
        "searchKey": "roviana rug"
    },
    {
        "code": "pce",
        "name": "Ruching Palaung",
        "searchKey": "ruching palaung pce"
    },
    {
        "code": "rdb",
        "name": "Rudbari",
        "searchKey": "rudbari rdb"
    },
    {
        "code": "rui",
        "name": "Rufiji",
        "searchKey": "rufiji rui"
    },
    {
        "code": "ruh",
        "name": "Ruga",
        "searchKey": "ruga ruh"
    },
    {
        "code": "dru",
        "name": "Rukai",
        "searchKey": "rukai dru"
    },
    {
        "code": "ruz",
        "name": "Ruma",
        "searchKey": "ruma ruz"
    },
    {
        "code": "rbb",
        "name": "Rumai Palaung",
        "searchKey": "rumai palaung rbb"
    },
    {
        "code": "klq",
        "name": "Rumu",
        "searchKey": "rumu klq"
    },
    {
        "code": "run",
        "name": "Rundi",
        "searchKey": "rundi run"
    },
    {
        "code": "rou",
        "name": "Runga",
        "searchKey": "runga rou"
    },
    {
        "code": "rtc",
        "name": "Rungtu Chin",
        "searchKey": "rungtu chin rtc"
    },
    {
        "code": "drg",
        "name": "Rungus",
        "searchKey": "rungus drg"
    },
    {
        "code": "rnw",
        "name": "Rungwa",
        "searchKey": "rungwa rnw"
    },
    {
        "code": "bxr",
        "name": "Russia Buriat",
        "searchKey": "russia buriat bxr"
    },
    {
        "code": "rus",
        "name": "Russian",
        "searchKey": "russian rus"
    },
    {
        "code": "rsl",
        "name": "Russian Sign Language",
        "searchKey": "russian sign language rsl"
    },
    {
        "code": "rue",
        "name": "Rusyn",
        "searchKey": "rusyn rue"
    },
    {
        "code": "rsk",
        "name": "Ruthenian",
        "searchKey": "ruthenian rsk"
    },
    {
        "code": "rut",
        "name": "Rutul",
        "searchKey": "rutul rut"
    },
    {
        "code": "ruc",
        "name": "Ruuli",
        "searchKey": "ruuli ruc"
    },
    {
        "code": "rnd",
        "name": "Ruund",
        "searchKey": "ruund rnd"
    },
    {
        "code": "rwl",
        "name": "Ruwila",
        "searchKey": "ruwila rwl"
    },
    {
        "code": "rwk",
        "name": "Rwa",
        "searchKey": "rwa rwk"
    },
    {
        "code": "rsn",
        "name": "Rwandan Sign Language",
        "searchKey": "rwandan sign language rsn"
    },
    {
        "code": "sax",
        "name": "Sa",
        "searchKey": "sa sax"
    },
    {
        "code": "apb",
        "name": "Sa'a",
        "searchKey": "saa apb"
    },
    {
        "code": "sav",
        "name": "Saafi-Saafi",
        "searchKey": "saafi-saafi sav"
    },
    {
        "code": "raq",
        "name": "Saam",
        "searchKey": "saam raq"
    },
    {
        "code": "lsm",
        "name": "Saamia",
        "searchKey": "saamia lsm"
    },
    {
        "code": "sxr",
        "name": "Saaroa",
        "searchKey": "saaroa sxr"
    },
    {
        "code": "saa",
        "name": "Saba",
        "searchKey": "saba saa"
    },
    {
        "code": "xsa",
        "name": "Sabaean",
        "searchKey": "sabaean xsa"
    },
    {
        "code": "bsy",
        "name": "Sabah Bisaya",
        "searchKey": "sabah bisaya bsy"
    },
    {
        "code": "msi",
        "name": "Sabah Malay",
        "searchKey": "sabah malay msi"
    },
    {
        "code": "snv",
        "name": "Sa'ban",
        "searchKey": "saban snv"
    },
    {
        "code": "sae",
        "name": "Sabanê",
        "searchKey": "sabane sae"
    },
    {
        "code": "spy",
        "name": "Sabaot",
        "searchKey": "sabaot spy"
    },
    {
        "code": "sbv",
        "name": "Sabine",
        "searchKey": "sabine sbv"
    },
    {
        "code": "hvn",
        "name": "Sabu",
        "searchKey": "sabu hvn"
    },
    {
        "code": "sbo",
        "name": "Sabüm",
        "searchKey": "sabum sbo"
    },
    {
        "code": "quv",
        "name": "Sacapulteco",
        "searchKey": "sacapulteco quv"
    },
    {
        "code": "sck",
        "name": "Sadri",
        "searchKey": "sadri sck"
    },
    {
        "code": "skb",
        "name": "Saek",
        "searchKey": "saek skb"
    },
    {
        "code": "spd",
        "name": "Saep",
        "searchKey": "saep spd"
    },
    {
        "code": "saf",
        "name": "Safaliba",
        "searchKey": "safaliba saf"
    },
    {
        "code": "apz",
        "name": "Safeyoka",
        "searchKey": "safeyoka apz"
    },
    {
        "code": "sbk",
        "name": "Safwa",
        "searchKey": "safwa sbk"
    },
    {
        "code": "sbm",
        "name": "Sagala",
        "searchKey": "sagala sbm"
    },
    {
        "code": "tga",
        "name": "Sagalla",
        "searchKey": "sagalla tga"
    },
    {
        "code": "ssy",
        "name": "Saho",
        "searchKey": "saho ssy"
    },
    {
        "code": "saj",
        "name": "Sahu",
        "searchKey": "sahu saj"
    },
    {
        "code": "aec",
        "name": "Saidi Arabic",
        "searchKey": "saidi arabic aec"
    },
    {
        "code": "acf",
        "name": "Saint Lucian Creole French",
        "searchKey": "saint lucian creole french acf"
    },
    {
        "code": "xsy",
        "name": "Saisiyat",
        "searchKey": "saisiyat xsy"
    },
    {
        "code": "sjl",
        "name": "Sajalong",
        "searchKey": "sajalong sjl"
    },
    {
        "code": "sjb",
        "name": "Sajau Basap",
        "searchKey": "sajau basap sjb"
    },
    {
        "code": "sch",
        "name": "Sakachep",
        "searchKey": "sakachep sch"
    },
    {
        "code": "skg",
        "name": "Sakalava Malagasy",
        "searchKey": "sakalava malagasy skg"
    },
    {
        "code": "sku",
        "name": "Sakao",
        "searchKey": "sakao sku"
    },
    {
        "code": "skt",
        "name": "Sakata",
        "searchKey": "sakata skt"
    },
    {
        "code": "sak",
        "name": "Sake",
        "searchKey": "sake sak"
    },
    {
        "code": "skf",
        "name": "Sakirabiá",
        "searchKey": "sakirabia skf"
    },
    {
        "code": "szy",
        "name": "Sakizaya",
        "searchKey": "sakizaya szy"
    },
    {
        "code": "shq",
        "name": "Sala",
        "searchKey": "sala shq"
    },
    {
        "code": "slx",
        "name": "Salampasu",
        "searchKey": "salampasu slx"
    },
    {
        "code": "slr",
        "name": "Salar",
        "searchKey": "salar slr"
    },
    {
        "code": "sgu",
        "name": "Salas",
        "searchKey": "salas sgu"
    },
    {
        "code": "qxl",
        "name": "Salasaca Highland Quichua",
        "searchKey": "salasaca highland quichua qxl"
    },
    {
        "code": "xmx",
        "name": "Salawati",
        "searchKey": "salawati xmx"
    },
    {
        "code": "sau",
        "name": "Saleman",
        "searchKey": "saleman sau"
    },
    {
        "code": "sbe",
        "name": "Saliba",
        "searchKey": "saliba sbe"
    },
    {
        "code": "slc",
        "name": "Sáliba",
        "searchKey": "saliba slc"
    },
    {
        "code": "sln",
        "name": "Salinan",
        "searchKey": "salinan sln"
    },
    {
        "code": "sdz",
        "name": "Sallands",
        "searchKey": "sallands sdz"
    },
    {
        "code": "sll",
        "name": "Salt-Yui",
        "searchKey": "salt-yui sll"
    },
    {
        "code": "loe",
        "name": "Saluan",
        "searchKey": "saluan loe"
    },
    {
        "code": "slj",
        "name": "Salumá",
        "searchKey": "saluma slj"
    },
    {
        "code": "esn",
        "name": "Salvadoran Sign Language",
        "searchKey": "salvadoran sign language esn"
    },
    {
        "code": "snx",
        "name": "Sam",
        "searchKey": "sam snx"
    },
    {
        "code": "smp",
        "name": "Samaritan",
        "searchKey": "samaritan smp"
    },
    {
        "code": "sam",
        "name": "Samaritan Aramaic",
        "searchKey": "samaritan aramaic sam"
    },
    {
        "code": "tmj",
        "name": "Samarokena",
        "searchKey": "samarokena tmj"
    },
    {
        "code": "ysd",
        "name": "Samatao",
        "searchKey": "samatao ysd"
    },
    {
        "code": "syx",
        "name": "Samay",
        "searchKey": "samay syx"
    },
    {
        "code": "smx",
        "name": "Samba",
        "searchKey": "samba smx"
    },
    {
        "code": "ccg",
        "name": "Samba Daka",
        "searchKey": "samba daka ccg"
    },
    {
        "code": "ndi",
        "name": "Samba Leko",
        "searchKey": "samba leko ndi"
    },
    {
        "code": "xsb",
        "name": "Sambal",
        "searchKey": "sambal xsb"
    },
    {
        "code": "spv",
        "name": "Sambalpuri",
        "searchKey": "sambalpuri spv"
    },
    {
        "code": "xab",
        "name": "Sambe",
        "searchKey": "sambe xab"
    },
    {
        "code": "ssx",
        "name": "Samberigi",
        "searchKey": "samberigi ssx"
    },
    {
        "code": "saq",
        "name": "Samburu",
        "searchKey": "samburu saq"
    },
    {
        "code": "smh",
        "name": "Samei",
        "searchKey": "samei smh"
    },
    {
        "code": "smq",
        "name": "Samo",
        "searchKey": "samo smq"
    },
    {
        "code": "smo",
        "name": "Samoan",
        "searchKey": "samoan smo"
    },
    {
        "code": "sgs",
        "name": "Samogitian",
        "searchKey": "samogitian sgs"
    },
    {
        "code": "swm",
        "name": "Samosa",
        "searchKey": "samosa swm"
    },
    {
        "code": "rav",
        "name": "Sampang",
        "searchKey": "sampang rav"
    },
    {
        "code": "sxm",
        "name": "Samre",
        "searchKey": "samre sxm"
    },
    {
        "code": "stu",
        "name": "Samtao",
        "searchKey": "samtao stu"
    },
    {
        "code": "smv",
        "name": "Samvedi",
        "searchKey": "samvedi smv"
    },
    {
        "code": "ztm",
        "name": "San Agustín Mixtepec Zapotec",
        "searchKey": "san agustin mixtepec zapotec ztm"
    },
    {
        "code": "zpx",
        "name": "San Baltazar Loxicha Zapotec",
        "searchKey": "san baltazar loxicha zapotec zpx"
    },
    {
        "code": "cuk",
        "name": "San Blas Kuna",
        "searchKey": "san blas kuna cuk"
    },
    {
        "code": "hve",
        "name": "San Dionisio Del Mar Huave",
        "searchKey": "san dionisio del mar huave hve"
    },
    {
        "code": "pow",
        "name": "San Felipe Otlaltepec Popoloca",
        "searchKey": "san felipe otlaltepec popoloca pow"
    },
    {
        "code": "hue",
        "name": "San Francisco Del Mar Huave",
        "searchKey": "san francisco del mar huave hue"
    },
    {
        "code": "mat",
        "name": "San Francisco Matlatzinca",
        "searchKey": "san francisco matlatzinca mat"
    },
    {
        "code": "maa",
        "name": "San Jerónimo Tecóatl Mazatec",
        "searchKey": "san jeronimo tecoatl mazatec maa"
    },
    {
        "code": "poe",
        "name": "San Juan Atzingo Popoloca",
        "searchKey": "san juan atzingo popoloca poe"
    },
    {
        "code": "mjc",
        "name": "San Juan Colorado Mixtec",
        "searchKey": "san juan colorado mixtec mjc"
    },
    {
        "code": "xtj",
        "name": "San Juan Teita Mixtec",
        "searchKey": "san juan teita mixtec xtj"
    },
    {
        "code": "pps",
        "name": "San Luís Temalacayuca Popoloca",
        "searchKey": "san luis temalacayuca popoloca pps"
    },
    {
        "code": "pls",
        "name": "San Marcos Tlacoyalco Popoloca",
        "searchKey": "san marcos tlacoyalco popoloca pls"
    },
    {
        "code": "trq",
        "name": "San Martín Itunyoso Triqui",
        "searchKey": "san martin itunyoso triqui trq"
    },
    {
        "code": "qvs",
        "name": "San Martín Quechua",
        "searchKey": "san martin quechua qvs"
    },
    {
        "code": "huv",
        "name": "San Mateo Del Mar Huave",
        "searchKey": "san mateo del mar huave huv"
    },
    {
        "code": "scf",
        "name": "San Miguel Creole French",
        "searchKey": "san miguel creole french scf"
    },
    {
        "code": "mig",
        "name": "San Miguel El Grande Mixtec",
        "searchKey": "san miguel el grande mixtec mig"
    },
    {
        "code": "xtp",
        "name": "San Miguel Piedras Mixtec",
        "searchKey": "san miguel piedras mixtec xtp"
    },
    {
        "code": "azg",
        "name": "San Pedro Amuzgos Amuzgo",
        "searchKey": "san pedro amuzgos amuzgo azg"
    },
    {
        "code": "zpf",
        "name": "San Pedro Quiatoni Zapotec",
        "searchKey": "san pedro quiatoni zapotec zpf"
    },
    {
        "code": "kwy",
        "name": "San Salvador Kongo",
        "searchKey": "san salvador kongo kwy"
    },
    {
        "code": "zpt",
        "name": "San Vicente Coatlán Zapotec",
        "searchKey": "san vicente coatlan zapotec zpt"
    },
    {
        "code": "ayn",
        "name": "Sanaani Arabic",
        "searchKey": "sanaani arabic ayn"
    },
    {
        "code": "spn",
        "name": "Sanapaná",
        "searchKey": "sanapana spn"
    },
    {
        "code": "sad",
        "name": "Sandawe",
        "searchKey": "sandawe sad"
    },
    {
        "code": "sng",
        "name": "Sanga (Democratic Republic of Congo)",
        "searchNames": [
            "Sanga"
        ],
        "searchKey": "sanga democratic republic of congo sng sanga"
    },
    {
        "code": "xsn",
        "name": "Sanga (Nigeria)",
        "searchNames": [
            "Sanga"
        ],
        "searchKey": "sanga nigeria xsn sanga"
    },
    {
        "code": "scg",
        "name": "Sanggau",
        "searchKey": "sanggau scg"
    },
    {
        "code": "snl",
        "name": "Sangil",
        "searchKey": "sangil snl"
    },
    {
        "code": "sxn",
        "name": "Sangir",
        "searchKey": "sangir sxn"
    },
    {
        "code": "sgr",
        "name": "Sangisari",
        "searchKey": "sangisari sgr"
    },
    {
        "code": "sgk",
        "name": "Sangkong",
        "searchKey": "sangkong sgk"
    },
    {
        "code": "sgy",
        "name": "Sanglechi",
        "searchKey": "sanglechi sgy"
    },
    {
        "code": "sag",
        "name": "Sango",
        "searchKey": "sango sag"
    },
    {
        "code": "nsa",
        "name": "Sangtam Naga",
        "searchKey": "sangtam naga nsa"
    },
    {
        "code": "snq",
        "name": "Sangu (Gabon)",
        "searchNames": [
            "Sangu"
        ],
        "searchKey": "sangu gabon snq sangu"
    },
    {
        "code": "sbp",
        "name": "Sangu (Tanzania)",
        "searchNames": [
            "Sangu"
        ],
        "searchKey": "sangu tanzania sbp sangu"
    },
    {
        "code": "ysn",
        "name": "Sani",
        "searchKey": "sani ysn"
    },
    {
        "code": "ysy",
        "name": "Sanie",
        "searchKey": "sanie ysy"
    },
    {
        "code": "sny",
        "name": "Saniyo-Hiyewe",
        "searchKey": "saniyo-hiyewe sny"
    },
    {
        "code": "msc",
        "name": "Sankaran Maninka",
        "searchKey": "sankaran maninka msc"
    },
    {
        "code": "ssi",
        "name": "Sansi",
        "searchKey": "sansi ssi"
    },
    {
        "code": "san",
        "name": "Sanskrit",
        "searchKey": "sanskrit san"
    },
    {
        "code": "qxt",
        "name": "Santa Ana de Tusi Pasco Quechua",
        "searchKey": "santa ana de tusi pasco quechua qxt"
    },
    {
        "code": "ztn",
        "name": "Santa Catarina Albarradas Zapotec",
        "searchKey": "santa catarina albarradas zapotec ztn"
    },
    {
        "code": "pca",
        "name": "Santa Inés Ahuatempan Popoloca",
        "searchKey": "santa ines ahuatempan popoloca pca"
    },
    {
        "code": "zpn",
        "name": "Santa Inés Yatzechi Zapotec",
        "searchKey": "santa ines yatzechi zapotec zpn"
    },
    {
        "code": "mdv",
        "name": "Santa Lucía Monteverde Mixtec",
        "searchKey": "santa lucia monteverde mixtec mdv"
    },
    {
        "code": "hvv",
        "name": "Santa María Del Mar Huave",
        "searchKey": "santa maria del mar huave hvv"
    },
    {
        "code": "nhz",
        "name": "Santa María La Alta Nahuatl",
        "searchKey": "santa maria la alta nahuatl nhz"
    },
    {
        "code": "zpi",
        "name": "Santa María Quiegolani Zapotec",
        "searchKey": "santa maria quiegolani zapotec zpi"
    },
    {
        "code": "mza",
        "name": "Santa María Zacatepec Mixtec",
        "searchKey": "santa maria zacatepec mixtec mza"
    },
    {
        "code": "cok",
        "name": "Santa Teresa Cora",
        "searchKey": "santa teresa cora cok"
    },
    {
        "code": "sat",
        "name": "Santali",
        "searchKey": "santali sat"
    },
    {
        "code": "qus",
        "name": "Santiago del Estero Quichua",
        "searchKey": "santiago del estero quichua qus"
    },
    {
        "code": "zpr",
        "name": "Santiago Xanica Zapotec",
        "searchKey": "santiago xanica zapotec zpr"
    },
    {
        "code": "zas",
        "name": "Santo Domingo Albarradas Zapotec",
        "searchKey": "santo domingo albarradas zapotec zas"
    },
    {
        "code": "xsu",
        "name": "Sanumá",
        "searchKey": "sanuma xsu"
    },
    {
        "code": "zkp",
        "name": "São Paulo Kaingáng",
        "searchKey": "sao paulo kaingang zkp"
    },
    {
        "code": "scq",
        "name": "Sa'och",
        "searchKey": "saoch scq"
    },
    {
        "code": "cri",
        "name": "Sãotomense",
        "searchKey": "saotomense cri"
    },
    {
        "code": "spr",
        "name": "Saparua",
        "searchKey": "saparua spr"
    },
    {
        "code": "spc",
        "name": "Sapé",
        "searchKey": "sape spc"
    },
    {
        "code": "krn",
        "name": "Sapo",
        "searchKey": "sapo krn"
    },
    {
        "code": "spi",
        "name": "Saponi",
        "searchKey": "saponi spi"
    },
    {
        "code": "sps",
        "name": "Saposa",
        "searchKey": "saposa sps"
    },
    {
        "code": "spu",
        "name": "Sapuan",
        "searchKey": "sapuan spu"
    },
    {
        "code": "mwm",
        "name": "Sar",
        "searchKey": "sar mwm"
    },
    {
        "code": "sre",
        "name": "Sara",
        "searchKey": "sara sre"
    },
    {
        "code": "sbz",
        "name": "Sara Kaba",
        "searchKey": "sara kaba sbz"
    },
    {
        "code": "kwg",
        "name": "Sara Kaba Deme",
        "searchKey": "sara kaba deme kwg"
    },
    {
        "code": "kwv",
        "name": "Sara Kaba Náà",
        "searchKey": "sara kaba naa kwv"
    },
    {
        "code": "skr",
        "name": "Saraiki",
        "searchKey": "saraiki skr"
    },
    {
        "code": "srm",
        "name": "Saramaccan",
        "searchKey": "saramaccan srm"
    },
    {
        "code": "bps",
        "name": "Sarangani Blaan",
        "searchKey": "sarangani blaan bps"
    },
    {
        "code": "mbs",
        "name": "Sarangani Manobo",
        "searchKey": "sarangani manobo mbs"
    },
    {
        "code": "zsa",
        "name": "Sarasira",
        "searchKey": "sarasira zsa"
    },
    {
        "code": "sar",
        "name": "Saraveca",
        "searchKey": "saraveca sar"
    },
    {
        "code": "srd",
        "name": "Sardinian",
        "searchKey": "sardinian srd"
    },
    {
        "code": "asj",
        "name": "Sari",
        "searchKey": "sari asj"
    },
    {
        "code": "srh",
        "name": "Sarikoli",
        "searchKey": "sarikoli srh"
    },
    {
        "code": "sdf",
        "name": "Sarli",
        "searchKey": "sarli sdf"
    },
    {
        "code": "onp",
        "name": "Sartang",
        "searchKey": "sartang onp"
    },
    {
        "code": "swy",
        "name": "Sarua",
        "searchKey": "sarua swy"
    },
    {
        "code": "sdu",
        "name": "Sarudu",
        "searchKey": "sarudu sdu"
    },
    {
        "code": "sra",
        "name": "Saruga",
        "searchKey": "saruga sra"
    },
    {
        "code": "sas",
        "name": "Sasak",
        "searchKey": "sasak sas"
    },
    {
        "code": "sxs",
        "name": "Sasaru",
        "searchKey": "sasaru sxs"
    },
    {
        "code": "sdc",
        "name": "Sassarese Sardinian",
        "searchKey": "sassarese sardinian sdc"
    },
    {
        "code": "stw",
        "name": "Satawalese",
        "searchKey": "satawalese stw"
    },
    {
        "code": "mav",
        "name": "Sateré-Mawé",
        "searchKey": "satere-mawe mav"
    },
    {
        "code": "stq",
        "name": "Saterfriesisch",
        "searchKey": "saterfriesisch stq"
    },
    {
        "code": "sdl",
        "name": "Saudi Arabian Sign Language",
        "searchKey": "saudi arabian sign language sdl"
    },
    {
        "code": "psu",
        "name": "Sauraseni Prākrit",
        "searchKey": "sauraseni prakrit psu"
    },
    {
        "code": "saz",
        "name": "Saurashtra",
        "searchKey": "saurashtra saz"
    },
    {
        "code": "srt",
        "name": "Sauri",
        "searchKey": "sauri srt"
    },
    {
        "code": "mjt",
        "name": "Sauria Paharia",
        "searchKey": "sauria paharia mjt"
    },
    {
        "code": "sao",
        "name": "Sause",
        "searchKey": "sause sao"
    },
    {
        "code": "ssj",
        "name": "Sausi",
        "searchKey": "sausi ssj"
    },
    {
        "code": "sdg",
        "name": "Savi",
        "searchKey": "savi sdg"
    },
    {
        "code": "svs",
        "name": "Savosavo",
        "searchKey": "savosavo svs"
    },
    {
        "code": "szw",
        "name": "Sawai",
        "searchKey": "sawai szw"
    },
    {
        "code": "swr",
        "name": "Saweru",
        "searchKey": "saweru swr"
    },
    {
        "code": "saw",
        "name": "Sawi",
        "searchKey": "sawi saw"
    },
    {
        "code": "swt",
        "name": "Sawila",
        "searchKey": "sawila swt"
    },
    {
        "code": "swn",
        "name": "Sawknah",
        "searchKey": "sawknah swn"
    },
    {
        "code": "sxw",
        "name": "Saxwe Gbe",
        "searchKey": "saxwe gbe sxw"
    },
    {
        "code": "say",
        "name": "Saya",
        "searchKey": "saya say"
    },
    {
        "code": "pos",
        "name": "Sayula Popoluca",
        "searchKey": "sayula popoluca pos"
    },
    {
        "code": "sco",
        "name": "Scots",
        "searchKey": "scots sco"
    },
    {
        "code": "gla",
        "name": "Scottish Gaelic",
        "searchKey": "scottish gaelic gla"
    },
    {
        "code": "xsc",
        "name": "Scythian",
        "searchKey": "scythian xsc"
    },
    {
        "code": "gul",
        "name": "Sea Island Creole English",
        "searchKey": "sea island creole english gul"
    },
    {
        "code": "kdg",
        "name": "Seba",
        "searchKey": "seba kdg"
    },
    {
        "code": "sgw",
        "name": "Sebat Bet Gurage",
        "searchKey": "sebat bet gurage sgw"
    },
    {
        "code": "sbx",
        "name": "Seberuang",
        "searchKey": "seberuang sbx"
    },
    {
        "code": "sib",
        "name": "Sebop",
        "searchKey": "sebop sib"
    },
    {
        "code": "sec",
        "name": "Sechelt",
        "searchKey": "sechelt sec"
    },
    {
        "code": "sey",
        "name": "Secoya",
        "searchKey": "secoya sey"
    },
    {
        "code": "sed",
        "name": "Sedang",
        "searchKey": "sedang sed"
    },
    {
        "code": "trv",
        "name": "Sediq",
        "searchKey": "sediq trv"
    },
    {
        "code": "tvw",
        "name": "Sedoa",
        "searchKey": "sedoa tvw"
    },
    {
        "code": "sos",
        "name": "Seeku",
        "searchKey": "seeku sos"
    },
    {
        "code": "sge",
        "name": "Segai",
        "searchKey": "segai sge"
    },
    {
        "code": "seg",
        "name": "Segeju",
        "searchKey": "segeju seg"
    },
    {
        "code": "sbg",
        "name": "Seget",
        "searchKey": "seget sbg"
    },
    {
        "code": "sfw",
        "name": "Sehwi",
        "searchKey": "sehwi sfw"
    },
    {
        "code": "ssg",
        "name": "Seimat",
        "searchKey": "seimat ssg"
    },
    {
        "code": "hik",
        "name": "Seit-Kaitetu",
        "searchKey": "seit-kaitetu hik"
    },
    {
        "code": "sek",
        "name": "Sekani",
        "searchKey": "sekani sek"
    },
    {
        "code": "skp",
        "name": "Sekapan",
        "searchKey": "sekapan skp"
    },
    {
        "code": "skz",
        "name": "Sekar",
        "searchKey": "sekar skz"
    },
    {
        "code": "skj",
        "name": "Seke (Nepal)",
        "searchNames": [
            "Seke"
        ],
        "searchKey": "seke nepal skj seke"
    },
    {
        "code": "ske",
        "name": "Seke (Vanuatu)",
        "searchNames": [
            "Seke"
        ],
        "searchKey": "seke vanuatu ske seke"
    },
    {
        "code": "vaj",
        "name": "Sekele",
        "searchKey": "sekele vaj"
    },
    {
        "code": "syi",
        "name": "Seki",
        "searchKey": "seki syi"
    },
    {
        "code": "skx",
        "name": "Seko Padang",
        "searchKey": "seko padang skx"
    },
    {
        "code": "sko",
        "name": "Seko Tengah",
        "searchKey": "seko tengah sko"
    },
    {
        "code": "lip",
        "name": "Sekpele",
        "searchKey": "sekpele lip"
    },
    {
        "code": "kgi",
        "name": "Selangor Sign Language",
        "searchKey": "selangor sign language kgi"
    },
    {
        "code": "slu",
        "name": "Selaru",
        "searchKey": "selaru slu"
    },
    {
        "code": "sly",
        "name": "Selayar",
        "searchKey": "selayar sly"
    },
    {
        "code": "snw",
        "name": "Selee",
        "searchKey": "selee snw"
    },
    {
        "code": "spl",
        "name": "Selepet",
        "searchKey": "selepet spl"
    },
    {
        "code": "sxl",
        "name": "Selian",
        "searchKey": "selian sxl"
    },
    {
        "code": "sel",
        "name": "Selkup",
        "searchKey": "selkup sel"
    },
    {
        "code": "slg",
        "name": "Selungai Murut",
        "searchKey": "selungai murut slg"
    },
    {
        "code": "sws",
        "name": "Seluwasan",
        "searchKey": "seluwasan sws"
    },
    {
        "code": "sea",
        "name": "Semai",
        "searchKey": "semai sea"
    },
    {
        "code": "sdq",
        "name": "Semandang",
        "searchKey": "semandang sdq"
    },
    {
        "code": "szc",
        "name": "Semaq Beri",
        "searchKey": "semaq beri szc"
    },
    {
        "code": "sbr",
        "name": "Sembakung Murut",
        "searchKey": "sembakung murut sbr"
    },
    {
        "code": "sza",
        "name": "Semelai",
        "searchKey": "semelai sza"
    },
    {
        "code": "etz",
        "name": "Semimi",
        "searchKey": "semimi etz"
    },
    {
        "code": "ssm",
        "name": "Semnam",
        "searchKey": "semnam ssm"
    },
    {
        "code": "smy",
        "name": "Semnani",
        "searchKey": "semnani smy"
    },
    {
        "code": "xse",
        "name": "Sempan",
        "searchKey": "sempan xse"
    },
    {
        "code": "seh",
        "name": "Sena",
        "searchKey": "sena seh"
    },
    {
        "code": "seq",
        "name": "Senara Sénoufo",
        "searchKey": "senara senoufo seq"
    },
    {
        "code": "syn",
        "name": "Senaya",
        "searchKey": "senaya syn"
    },
    {
        "code": "sej",
        "name": "Sene",
        "searchKey": "sene sej"
    },
    {
        "code": "see",
        "name": "Seneca",
        "searchKey": "seneca see"
    },
    {
        "code": "sds",
        "name": "Sened",
        "searchKey": "sened sds"
    },
    {
        "code": "szg",
        "name": "Sengele",
        "searchKey": "sengele szg"
    },
    {
        "code": "snu",
        "name": "Senggi",
        "searchKey": "senggi snu"
    },
    {
        "code": "spk",
        "name": "Sengo",
        "searchKey": "sengo spk"
    },
    {
        "code": "ssz",
        "name": "Sengseng",
        "searchKey": "sengseng ssz"
    },
    {
        "code": "sjs",
        "name": "Senhaja De Srair",
        "searchKey": "senhaja de srair sjs"
    },
    {
        "code": "sni",
        "name": "Sensi",
        "searchKey": "sensi sni"
    },
    {
        "code": "set",
        "name": "Sentani",
        "searchKey": "sentani set"
    },
    {
        "code": "sez",
        "name": "Senthang Chin",
        "searchKey": "senthang chin sez"
    },
    {
        "code": "std",
        "name": "Sentinel",
        "searchKey": "sentinel std"
    },
    {
        "code": "spb",
        "name": "Sepa (Indonesia)",
        "searchNames": [
            "Sepa"
        ],
        "searchKey": "sepa indonesia spb sepa"
    },
    {
        "code": "spe",
        "name": "Sepa (Papua New Guinea)",
        "searchNames": [
            "Sepa"
        ],
        "searchKey": "sepa papua new guinea spe sepa"
    },
    {
        "code": "iws",
        "name": "Sepik Iwam",
        "searchKey": "sepik iwam iws"
    },
    {
        "code": "sry",
        "name": "Sera",
        "searchKey": "sera sry"
    },
    {
        "code": "srp",
        "name": "Serbian",
        "searchKey": "serbian srp"
    },
    {
        "code": "hbs",
        "name": "Serbo-Croatian",
        "searchKey": "serbo-croatian hbs"
    },
    {
        "code": "swf",
        "name": "Sere",
        "searchKey": "sere swf"
    },
    {
        "code": "srr",
        "name": "Serer",
        "searchKey": "serer srr"
    },
    {
        "code": "sei",
        "name": "Seri",
        "searchKey": "seri sei"
    },
    {
        "code": "sve",
        "name": "Serili",
        "searchKey": "serili sve"
    },
    {
        "code": "kqu",
        "name": "Seroa",
        "searchKey": "seroa kqu"
    },
    {
        "code": "ser",
        "name": "Serrano",
        "searchKey": "serrano ser"
    },
    {
        "code": "srw",
        "name": "Serua",
        "searchKey": "serua srw"
    },
    {
        "code": "srk",
        "name": "Serudung Murut",
        "searchKey": "serudung murut srk"
    },
    {
        "code": "seu",
        "name": "Serui-Laut",
        "searchKey": "serui-laut seu"
    },
    {
        "code": "crs",
        "name": "Seselwa Creole French",
        "searchKey": "seselwa creole french crs"
    },
    {
        "code": "stf",
        "name": "Seta",
        "searchKey": "seta stf"
    },
    {
        "code": "stm",
        "name": "Setaman",
        "searchKey": "setaman stm"
    },
    {
        "code": "sbi",
        "name": "Seti",
        "searchKey": "seti sbi"
    },
    {
        "code": "sta",
        "name": "Settla",
        "searchKey": "settla sta"
    },
    {
        "code": "ojs",
        "name": "Severn Ojibwa",
        "searchKey": "severn ojibwa ojs"
    },
    {
        "code": "sew",
        "name": "Sewa Bay",
        "searchKey": "sewa bay sew"
    },
    {
        "code": "lsw",
        "name": "Seychelles Sign Language",
        "searchKey": "seychelles sign language lsw"
    },
    {
        "code": "sze",
        "name": "Seze",
        "searchKey": "seze sze"
    },
    {
        "code": "ksw",
        "name": "S'gaw Karen",
        "searchKey": "sgaw karen ksw"
    },
    {
        "code": "scw",
        "name": "Sha",
        "searchKey": "sha scw"
    },
    {
        "code": "sdb",
        "name": "Shabak",
        "searchKey": "shabak sdb"
    },
    {
        "code": "scz",
        "name": "Shaetlan",
        "searchKey": "shaetlan scz"
    },
    {
        "code": "srz",
        "name": "Shahmirzadi",
        "searchKey": "shahmirzadi srz"
    },
    {
        "code": "shm",
        "name": "Shahrudi",
        "searchKey": "shahrudi shm"
    },
    {
        "code": "sha",
        "name": "Shall-Zwall",
        "searchKey": "shall-zwall sha"
    },
    {
        "code": "xsh",
        "name": "Shamang",
        "searchKey": "shamang xsh"
    },
    {
        "code": "sqa",
        "name": "Shama-Sambuga",
        "searchKey": "shama-sambuga sqa"
    },
    {
        "code": "ksb",
        "name": "Shambala",
        "searchKey": "shambala ksb"
    },
    {
        "code": "shn",
        "name": "Shan",
        "searchKey": "shan shn"
    },
    {
        "code": "swo",
        "name": "Shanenawa",
        "searchKey": "shanenawa swo"
    },
    {
        "code": "sho",
        "name": "Shanga",
        "searchKey": "shanga sho"
    },
    {
        "code": "sjc",
        "name": "Shaojiang Chinese",
        "searchKey": "shaojiang chinese sjc"
    },
    {
        "code": "mcd",
        "name": "Sharanahua",
        "searchKey": "sharanahua mcd"
    },
    {
        "code": "ssv",
        "name": "Shark Bay",
        "searchKey": "shark bay ssv"
    },
    {
        "code": "swq",
        "name": "Sharwa",
        "searchKey": "sharwa swq"
    },
    {
        "code": "sht",
        "name": "Shasta",
        "searchKey": "shasta sht"
    },
    {
        "code": "shj",
        "name": "Shatt",
        "searchKey": "shatt shj"
    },
    {
        "code": "sqh",
        "name": "Shau",
        "searchKey": "shau sqh"
    },
    {
        "code": "sjw",
        "name": "Shawnee",
        "searchKey": "shawnee sjw"
    },
    {
        "code": "shx",
        "name": "She",
        "searchKey": "she shx"
    },
    {
        "code": "shv",
        "name": "Shehri",
        "searchKey": "shehri shv"
    },
    {
        "code": "swv",
        "name": "Shekhawati",
        "searchKey": "shekhawati swv"
    },
    {
        "code": "moy",
        "name": "Shekkacho",
        "searchKey": "shekkacho moy"
    },
    {
        "code": "she",
        "name": "Sheko",
        "searchKey": "sheko she"
    },
    {
        "code": "sth",
        "name": "Shelta",
        "searchKey": "shelta sth"
    },
    {
        "code": "seb",
        "name": "Shempire Senoufo",
        "searchKey": "shempire senoufo seb"
    },
    {
        "code": "scv",
        "name": "Sheni",
        "searchKey": "sheni scv"
    },
    {
        "code": "bun",
        "name": "Sherbro",
        "searchKey": "sherbro bun"
    },
    {
        "code": "sdp",
        "name": "Sherdukpen",
        "searchKey": "sherdukpen sdp"
    },
    {
        "code": "xsr",
        "name": "Sherpa",
        "searchKey": "sherpa xsr"
    },
    {
        "code": "kip",
        "name": "Sheshi Kham",
        "searchKey": "sheshi kham kip"
    },
    {
        "code": "shr",
        "name": "Shi",
        "searchKey": "shi shr"
    },
    {
        "code": "ssh",
        "name": "Shihhi Arabic",
        "searchKey": "shihhi arabic ssh"
    },
    {
        "code": "gua",
        "name": "Shiki",
        "searchKey": "shiki gua"
    },
    {
        "code": "shk",
        "name": "Shilluk",
        "searchKey": "shilluk shk"
    },
    {
        "code": "scl",
        "name": "Shina",
        "searchKey": "shina scl"
    },
    {
        "code": "shp",
        "name": "Shipibo-Conibo",
        "searchKey": "shipibo-conibo shp"
    },
    {
        "code": "sle",
        "name": "Sholaga",
        "searchKey": "sholaga sle"
    },
    {
        "code": "sii",
        "name": "Shom Peng",
        "searchKey": "shom peng sii"
    },
    {
        "code": "sna",
        "name": "Shona",
        "searchKey": "shona sna"
    },
    {
        "code": "bcv",
        "name": "Shoo-Minda-Nye",
        "searchKey": "shoo-minda-nye bcv"
    },
    {
        "code": "cjs",
        "name": "Shor",
        "searchKey": "shor cjs"
    },
    {
        "code": "shh",
        "name": "Shoshoni",
        "searchKey": "shoshoni shh"
    },
    {
        "code": "shg",
        "name": "Shua",
        "searchKey": "shua shg"
    },
    {
        "code": "sdt",
        "name": "Shuadit",
        "searchKey": "shuadit sdt"
    },
    {
        "code": "jiv",
        "name": "Shuar",
        "searchKey": "shuar jiv"
    },
    {
        "code": "suj",
        "name": "Shubi",
        "searchKey": "shubi suj"
    },
    {
        "code": "sgh",
        "name": "Shughni",
        "searchKey": "shughni sgh"
    },
    {
        "code": "sxg",
        "name": "Shuhi",
        "searchKey": "shuhi sxg"
    },
    {
        "code": "sts",
        "name": "Shumashti",
        "searchKey": "shumashti sts"
    },
    {
        "code": "scu",
        "name": "Shumcho",
        "searchKey": "shumcho scu"
    },
    {
        "code": "shs",
        "name": "Shuswap",
        "searchKey": "shuswap shs"
    },
    {
        "code": "shw",
        "name": "Shwai",
        "searchKey": "shwai shw"
    },
    {
        "code": "pll",
        "name": "Shwe Palaung",
        "searchKey": "shwe palaung pll"
    },
    {
        "code": "slw",
        "name": "Sialum",
        "searchKey": "sialum slw"
    },
    {
        "code": "sif",
        "name": "Siamou",
        "searchKey": "siamou sif"
    },
    {
        "code": "spg",
        "name": "Sian",
        "searchKey": "sian spg"
    },
    {
        "code": "snp",
        "name": "Siane",
        "searchKey": "siane snp"
    },
    {
        "code": "sya",
        "name": "Siang",
        "searchKey": "siang sya"
    },
    {
        "code": "sjr",
        "name": "Siar-Lak",
        "searchKey": "siar-lak sjr"
    },
    {
        "code": "mmp",
        "name": "Siawi",
        "searchKey": "siawi mmp"
    },
    {
        "code": "nco",
        "name": "Sibe",
        "searchKey": "sibe nco"
    },
    {
        "code": "sty",
        "name": "Siberian Tatar",
        "searchKey": "siberian tatar sty"
    },
    {
        "code": "sdx",
        "name": "Sibu Melanau",
        "searchKey": "sibu melanau sdx"
    },
    {
        "code": "sxc",
        "name": "Sicanian",
        "searchKey": "sicanian sxc"
    },
    {
        "code": "scx",
        "name": "Sicel",
        "searchKey": "sicel scx"
    },
    {
        "code": "iii",
        "name": "Sichuan Yi",
        "searchKey": "sichuan yi iii"
    },
    {
        "code": "scn",
        "name": "Sicilian",
        "searchKey": "sicilian scn"
    },
    {
        "code": "sep",
        "name": "Sìcìté Sénoufo",
        "searchKey": "sicite senoufo sep"
    },
    {
        "code": "sqr",
        "name": "Siculo Arabic",
        "searchKey": "siculo arabic sqr"
    },
    {
        "code": "sid",
        "name": "Sidamo",
        "searchKey": "sidamo sid"
    },
    {
        "code": "xsd",
        "name": "Sidetic",
        "searchKey": "sidetic xsd"
    },
    {
        "code": "erg",
        "name": "Sie",
        "searchKey": "sie erg"
    },
    {
        "code": "zaa",
        "name": "Sierra de Juárez Zapotec",
        "searchKey": "sierra de juarez zapotec zaa"
    },
    {
        "code": "sgx",
        "name": "Sierra Leone Sign Language",
        "searchKey": "sierra leone sign language sgx"
    },
    {
        "code": "nsu",
        "name": "Sierra Negra Nahuatl",
        "searchKey": "sierra negra nahuatl nsu"
    },
    {
        "code": "sxe",
        "name": "Sighu",
        "searchKey": "sighu sxe"
    },
    {
        "code": "snr",
        "name": "Sihan",
        "searchKey": "sihan snr"
    },
    {
        "code": "qws",
        "name": "Sihuas Ancash Quechua",
        "searchKey": "sihuas ancash quechua qws"
    },
    {
        "code": "ski",
        "name": "Sika",
        "searchKey": "sika ski"
    },
    {
        "code": "sky",
        "name": "Sikaiana",
        "searchKey": "sikaiana sky"
    },
    {
        "code": "tty",
        "name": "Sikaritai",
        "searchKey": "sikaritai tty"
    },
    {
        "code": "sik",
        "name": "Sikiana",
        "searchKey": "sikiana sik"
    },
    {
        "code": "sip",
        "name": "Sikkimese",
        "searchKey": "sikkimese sip"
    },
    {
        "code": "bla",
        "name": "Siksika",
        "searchKey": "siksika bla"
    },
    {
        "code": "skh",
        "name": "Sikule",
        "searchKey": "sikule skh"
    },
    {
        "code": "slt",
        "name": "Sila",
        "searchKey": "sila slt"
    },
    {
        "code": "mks",
        "name": "Silacayoapan Mixtec",
        "searchKey": "silacayoapan mixtec mks"
    },
    {
        "code": "sbq",
        "name": "Sileibi",
        "searchKey": "sileibi sbq"
    },
    {
        "code": "szl",
        "name": "Silesian",
        "searchKey": "silesian szl"
    },
    {
        "code": "wul",
        "name": "Silimo",
        "searchKey": "silimo wul"
    },
    {
        "code": "mkc",
        "name": "Siliput",
        "searchKey": "siliput mkc"
    },
    {
        "code": "xsp",
        "name": "Silopi",
        "searchKey": "silopi xsp"
    },
    {
        "code": "stv",
        "name": "Silt'e",
        "searchKey": "silte stv"
    },
    {
        "code": "sie",
        "name": "Simaa",
        "searchKey": "simaa sie"
    },
    {
        "code": "sbw",
        "name": "Simba",
        "searchKey": "simba sbw"
    },
    {
        "code": "smg",
        "name": "Simbali",
        "searchKey": "simbali smg"
    },
    {
        "code": "smb",
        "name": "Simbari",
        "searchKey": "simbari smb"
    },
    {
        "code": "sbb",
        "name": "Simbo",
        "searchKey": "simbo sbb"
    },
    {
        "code": "smz",
        "name": "Simeku",
        "searchKey": "simeku smz"
    },
    {
        "code": "smr",
        "name": "Simeulue",
        "searchKey": "simeulue smr"
    },
    {
        "code": "smt",
        "name": "Simte",
        "searchKey": "simte smt"
    },
    {
        "code": "siu",
        "name": "Sinagen",
        "searchKey": "sinagen siu"
    },
    {
        "code": "sst",
        "name": "Sinasina",
        "searchKey": "sinasina sst"
    },
    {
        "code": "snc",
        "name": "Sinaugoro",
        "searchKey": "sinaugoro snc"
    },
    {
        "code": "sjn",
        "name": "Sindarin",
        "searchKey": "sindarin sjn"
    },
    {
        "code": "snd",
        "name": "Sindhi",
        "searchKey": "sindhi snd"
    },
    {
        "code": "sbn",
        "name": "Sindhi Bhil",
        "searchKey": "sindhi bhil sbn"
    },
    {
        "code": "xts",
        "name": "Sindihui Mixtec",
        "searchKey": "sindihui mixtec xts"
    },
    {
        "code": "sgm",
        "name": "Singa",
        "searchKey": "singa sgm"
    },
    {
        "code": "sls",
        "name": "Singapore Sign Language",
        "searchKey": "singapore sign language sls"
    },
    {
        "code": "sgp",
        "name": "Singpho",
        "searchKey": "singpho sgp"
    },
    {
        "code": "sin",
        "name": "Sinhala",
        "searchKey": "sinhala sin"
    },
    {
        "code": "xti",
        "name": "Sinicahua Mixtec",
        "searchKey": "sinicahua mixtec xti"
    },
    {
        "code": "skq",
        "name": "Sininkere",
        "searchKey": "sininkere skq"
    },
    {
        "code": "rmo",
        "name": "Sinte Romani",
        "searchKey": "sinte romani rmo"
    },
    {
        "code": "sys",
        "name": "Sinyar",
        "searchKey": "sinyar sys"
    },
    {
        "code": "xsi",
        "name": "Sio",
        "searchKey": "sio xsi"
    },
    {
        "code": "snn",
        "name": "Siona",
        "searchKey": "siona snn"
    },
    {
        "code": "qum",
        "name": "Sipacapense",
        "searchKey": "sipacapense qum"
    },
    {
        "code": "swj",
        "name": "Sira",
        "searchKey": "sira swj"
    },
    {
        "code": "fos",
        "name": "Siraya",
        "searchKey": "siraya fos"
    },
    {
        "code": "ysr",
        "name": "Sirenik Yupik",
        "searchKey": "sirenik yupik ysr"
    },
    {
        "code": "sir",
        "name": "Siri",
        "searchKey": "siri sir"
    },
    {
        "code": "sri",
        "name": "Siriano",
        "searchKey": "siriano sri"
    },
    {
        "code": "srq",
        "name": "Sirionó",
        "searchKey": "siriono srq"
    },
    {
        "code": "srx",
        "name": "Sirmauri",
        "searchKey": "sirmauri srx"
    },
    {
        "code": "ssd",
        "name": "Siroi",
        "searchKey": "siroi ssd"
    },
    {
        "code": "sld",
        "name": "Sissala",
        "searchKey": "sissala sld"
    },
    {
        "code": "sso",
        "name": "Sissano",
        "searchKey": "sissano sso"
    },
    {
        "code": "sis",
        "name": "Siuslaw",
        "searchKey": "siuslaw sis"
    },
    {
        "code": "siy",
        "name": "Sivandi",
        "searchKey": "sivandi siy"
    },
    {
        "code": "lsv",
        "name": "Sivia Sign Language",
        "searchKey": "sivia sign language lsv"
    },
    {
        "code": "siw",
        "name": "Siwai",
        "searchKey": "siwai siw"
    },
    {
        "code": "siz",
        "name": "Siwi",
        "searchKey": "siwi siz"
    },
    {
        "code": "akp",
        "name": "Siwu",
        "searchKey": "siwu akp"
    },
    {
        "code": "csy",
        "name": "Siyin Chin",
        "searchKey": "siyin chin csy"
    },
    {
        "code": "ska",
        "name": "Skagit",
        "searchKey": "skagit ska"
    },
    {
        "code": "svx",
        "name": "Skalvian",
        "searchKey": "skalvian svx"
    },
    {
        "code": "skw",
        "name": "Skepi Creole Dutch",
        "searchKey": "skepi creole dutch skw"
    },
    {
        "code": "sms",
        "name": "Skolt Sami",
        "searchKey": "skolt sami sms"
    },
    {
        "code": "skv",
        "name": "Skou",
        "searchKey": "skou skv"
    },
    {
        "code": "den",
        "name": "Slavey",
        "searchKey": "slavey den"
    },
    {
        "code": "svm",
        "name": "Slavomolisano",
        "searchKey": "slavomolisano svm"
    },
    {
        "code": "slk",
        "name": "Slovak",
        "searchKey": "slovak slk"
    },
    {
        "code": "svk",
        "name": "Slovakian Sign Language",
        "searchKey": "slovakian sign language svk"
    },
    {
        "code": "slv",
        "name": "Slovenian",
        "searchKey": "slovenian slv"
    },
    {
        "code": "sfm",
        "name": "Small Flowery Miao",
        "searchKey": "small flowery miao sfm"
    },
    {
        "code": "kxq",
        "name": "Smärky Kanum",
        "searchKey": "smarky kanum kxq"
    },
    {
        "code": "sno",
        "name": "Snohomish",
        "searchKey": "snohomish sno"
    },
    {
        "code": "sss",
        "name": "Sô",
        "searchKey": "so sss"
    },
    {
        "code": "soc",
        "name": "So (Democratic Republic of Congo)",
        "searchNames": [
            "So"
        ],
        "searchKey": "so democratic republic of congo soc so"
    },
    {
        "code": "ssq",
        "name": "So'a",
        "searchKey": "soa ssq"
    },
    {
        "code": "sob",
        "name": "Sobei",
        "searchKey": "sobei sob"
    },
    {
        "code": "cso",
        "name": "Sochiapam Chinantec",
        "searchKey": "sochiapam chinantec cso"
    },
    {
        "code": "xog",
        "name": "Soga",
        "searchKey": "soga xog"
    },
    {
        "code": "sog",
        "name": "Sogdian",
        "searchKey": "sogdian sog"
    },
    {
        "code": "soj",
        "name": "Soi",
        "searchKey": "soi soj"
    },
    {
        "code": "sok",
        "name": "Sokoro",
        "searchKey": "sokoro sok"
    },
    {
        "code": "xso",
        "name": "Solano",
        "searchKey": "solano xso"
    },
    {
        "code": "sby",
        "name": "Soli",
        "searchKey": "soli sby"
    },
    {
        "code": "szs",
        "name": "Solomon Islands Sign Language",
        "searchKey": "solomon islands sign language szs"
    },
    {
        "code": "aaw",
        "name": "Solong",
        "searchKey": "solong aaw"
    },
    {
        "code": "sol",
        "name": "Solos",
        "searchKey": "solos sol"
    },
    {
        "code": "smc",
        "name": "Som",
        "searchKey": "som smc"
    },
    {
        "code": "som",
        "name": "Somali",
        "searchKey": "somali som"
    },
    {
        "code": "bmu",
        "name": "Somba-Siawari",
        "searchKey": "somba-siawari bmu"
    },
    {
        "code": "sor",
        "name": "Somrai",
        "searchKey": "somrai sor"
    },
    {
        "code": "smu",
        "name": "Somray",
        "searchKey": "somray smu"
    },
    {
        "code": "kgt",
        "name": "Somyev",
        "searchKey": "somyev kgt"
    },
    {
        "code": "ysg",
        "name": "Sonaga",
        "searchKey": "sonaga ysg"
    },
    {
        "code": "shc",
        "name": "Sonde",
        "searchKey": "sonde shc"
    },
    {
        "code": "sop",
        "name": "Songe",
        "searchKey": "songe sop"
    },
    {
        "code": "csj",
        "name": "Songlai Chin",
        "searchKey": "songlai chin csj"
    },
    {
        "code": "soo",
        "name": "Songo",
        "searchKey": "songo soo"
    },
    {
        "code": "soe",
        "name": "Songomeno",
        "searchKey": "songomeno soe"
    },
    {
        "code": "sod",
        "name": "Songoora",
        "searchKey": "songoora sod"
    },
    {
        "code": "soi",
        "name": "Sonha",
        "searchKey": "sonha soi"
    },
    {
        "code": "siq",
        "name": "Sonia",
        "searchKey": "sonia siq"
    },
    {
        "code": "snk",
        "name": "Soninke",
        "searchKey": "soninke snk"
    },
    {
        "code": "sov",
        "name": "Sonsorol",
        "searchKey": "sonsorol sov"
    },
    {
        "code": "teu",
        "name": "Soo",
        "searchKey": "soo teu"
    },
    {
        "code": "urw",
        "name": "Sop",
        "searchKey": "sop urw"
    },
    {
        "code": "mdc",
        "name": "Soq",
        "searchKey": "soq mdc"
    },
    {
        "code": "sqt",
        "name": "Soqotri",
        "searchKey": "soqotri sqt"
    },
    {
        "code": "srb",
        "name": "Sora",
        "searchKey": "sora srb"
    },
    {
        "code": "sbh",
        "name": "Sori-Harengan",
        "searchKey": "sori-harengan sbh"
    },
    {
        "code": "sqo",
        "name": "Sorkhei",
        "searchKey": "sorkhei sqo"
    },
    {
        "code": "sxo",
        "name": "Sorothaptic",
        "searchKey": "sorothaptic sxo"
    },
    {
        "code": "ays",
        "name": "Sorsogon Ayta",
        "searchKey": "sorsogon ayta ays"
    },
    {
        "code": "sdk",
        "name": "Sos Kundi",
        "searchKey": "sos kundi sdk"
    },
    {
        "code": "krz",
        "name": "Sota Kanum",
        "searchKey": "sota kanum krz"
    },
    {
        "code": "sqq",
        "name": "Sou",
        "searchKey": "sou sqq"
    },
    {
        "code": "tlt",
        "name": "Sou Nama",
        "searchKey": "sou nama tlt"
    },
    {
        "code": "wha",
        "name": "Sou Upaa",
        "searchKey": "sou upaa wha"
    },
    {
        "code": "sfs",
        "name": "South African Sign Language",
        "searchKey": "south african sign language sfs"
    },
    {
        "code": "aws",
        "name": "South Awyu",
        "searchKey": "south awyu aws"
    },
    {
        "code": "azb",
        "name": "South Azerbaijani",
        "searchKey": "south azerbaijani azb"
    },
    {
        "code": "quh",
        "name": "South Bolivian Quechua",
        "searchKey": "south bolivian quechua quh"
    },
    {
        "code": "lnl",
        "name": "South Central Banda",
        "searchKey": "south central banda lnl"
    },
    {
        "code": "dib",
        "name": "South Central Dinka",
        "searchKey": "south central dinka dib"
    },
    {
        "code": "erk",
        "name": "South Efate",
        "searchKey": "south efate erk"
    },
    {
        "code": "fal",
        "name": "South Fali",
        "searchKey": "south fali fal"
    },
    {
        "code": "giz",
        "name": "South Giziga",
        "searchKey": "south giziga giz"
    },
    {
        "code": "lmf",
        "name": "South Lembata",
        "searchKey": "south lembata lmf"
    },
    {
        "code": "mqm",
        "name": "South Marquesan",
        "searchKey": "south marquesan mqm"
    },
    {
        "code": "kts",
        "name": "South Muyu",
        "searchKey": "south muyu kts"
    },
    {
        "code": "nbl",
        "name": "South Ndebele",
        "searchKey": "south ndebele nbl"
    },
    {
        "code": "nxl",
        "name": "South Nuaulu",
        "searchKey": "south nuaulu nxl"
    },
    {
        "code": "spx",
        "name": "South Picene",
        "searchKey": "south picene spx"
    },
    {
        "code": "xsl",
        "name": "South Slavey",
        "searchKey": "south slavey xsl"
    },
    {
        "code": "omw",
        "name": "South Tairora",
        "searchKey": "south tairora omw"
    },
    {
        "code": "cpy",
        "name": "South Ucayali Ashéninka",
        "searchKey": "south ucayali asheninka cpy"
    },
    {
        "code": "mcy",
        "name": "South Watut",
        "searchKey": "south watut mcy"
    },
    {
        "code": "sns",
        "name": "South West Bay",
        "searchKey": "south west bay sns"
    },
    {
        "code": "tvk",
        "name": "Southeast Ambrym",
        "searchKey": "southeast ambrym tvk"
    },
    {
        "code": "vbb",
        "name": "Southeast Babar",
        "searchKey": "southeast babar vbb"
    },
    {
        "code": "ijs",
        "name": "Southeast Ijo",
        "searchKey": "southeast ijo ijs"
    },
    {
        "code": "psi",
        "name": "Southeast Pashai",
        "searchKey": "southeast pashai psi"
    },
    {
        "code": "xpf",
        "name": "Southeast Tasmanian",
        "searchKey": "southeast tasmanian xpf"
    },
    {
        "code": "dks",
        "name": "Southeastern Dinka",
        "searchKey": "southeastern dinka dks"
    },
    {
        "code": "zpd",
        "name": "Southeastern Ixtlán Zapotec",
        "searchKey": "southeastern ixtlan zapotec zpd"
    },
    {
        "code": "nit",
        "name": "Southeastern Kolami",
        "searchKey": "southeastern kolami nit"
    },
    {
        "code": "mxy",
        "name": "Southeastern Nochixtlán Mixtec",
        "searchKey": "southeastern nochixtlan mixtec mxy"
    },
    {
        "code": "pom",
        "name": "Southeastern Pomo",
        "searchKey": "southeastern pomo pom"
    },
    {
        "code": "npl",
        "name": "Southeastern Puebla Nahuatl",
        "searchKey": "southeastern puebla nahuatl npl"
    },
    {
        "code": "tcu",
        "name": "Southeastern Tarahumara",
        "searchKey": "southeastern tarahumara tcu"
    },
    {
        "code": "stp",
        "name": "Southeastern Tepehuan",
        "searchKey": "southeastern tepehuan stp"
    },
    {
        "code": "agy",
        "name": "Southern Alta",
        "searchKey": "southern alta agy"
    },
    {
        "code": "alt",
        "name": "Southern Altai",
        "searchKey": "southern altai alt"
    },
    {
        "code": "ams",
        "name": "Southern Amami-Oshima",
        "searchKey": "southern amami-oshima ams"
    },
    {
        "code": "ayc",
        "name": "Southern Aymara",
        "searchKey": "southern aymara ayc"
    },
    {
        "code": "bfs",
        "name": "Southern Bai",
        "searchKey": "southern bai bfs"
    },
    {
        "code": "bcc",
        "name": "Southern Balochi",
        "searchKey": "southern balochi bcc"
    },
    {
        "code": "bzc",
        "name": "Southern Betsimisaraka Malagasy",
        "searchKey": "southern betsimisaraka malagasy bzc"
    },
    {
        "code": "mtw",
        "name": "Southern Binukidnon",
        "searchKey": "southern binukidnon mtw"
    },
    {
        "code": "biv",
        "name": "Southern Birifor",
        "searchKey": "southern birifor biv"
    },
    {
        "code": "bwq",
        "name": "Southern Bobo Madaré",
        "searchKey": "southern bobo madare bwq"
    },
    {
        "code": "obk",
        "name": "Southern Bontok",
        "searchKey": "southern bontok obk"
    },
    {
        "code": "caf",
        "name": "Southern Carrier",
        "searchKey": "southern carrier caf"
    },
    {
        "code": "bln",
        "name": "Southern Catanduanes Bikol",
        "searchKey": "southern catanduanes bikol bln"
    },
    {
        "code": "qxo",
        "name": "Southern Conchucos Ancash Quechua",
        "searchKey": "southern conchucos ancash quechua qxo"
    },
    {
        "code": "dga",
        "name": "Southern Dagaare",
        "searchKey": "southern dagaare dga"
    },
    {
        "code": "kmc",
        "name": "Southern Dong",
        "searchKey": "southern dong kmc"
    },
    {
        "code": "crj",
        "name": "Southern East Cree",
        "searchKey": "southern east cree crj"
    },
    {
        "code": "ghe",
        "name": "Southern Ghale",
        "searchKey": "southern ghale ghe"
    },
    {
        "code": "grj",
        "name": "Southern Grebo",
        "searchKey": "southern grebo grj"
    },
    {
        "code": "hmy",
        "name": "Southern Guiyang Hmong",
        "searchKey": "southern guiyang hmong hmy"
    },
    {
        "code": "hax",
        "name": "Southern Haida",
        "searchKey": "southern haida hax"
    },
    {
        "code": "hnd",
        "name": "Southern Hindko",
        "searchKey": "southern hindko hnd"
    },
    {
        "code": "sxk",
        "name": "Southern Kalapuya",
        "searchKey": "southern kalapuya sxk"
    },
    {
        "code": "ksc",
        "name": "Southern Kalinga",
        "searchKey": "southern kalinga ksc"
    },
    {
        "code": "sct",
        "name": "Southern Katang",
        "searchKey": "southern katang sct"
    },
    {
        "code": "kss",
        "name": "Southern Kisi",
        "searchKey": "southern kisi kss"
    },
    {
        "code": "kjd",
        "name": "Southern Kiwai",
        "searchKey": "southern kiwai kjd"
    },
    {
        "code": "sdh",
        "name": "Southern Kurdish",
        "searchKey": "southern kurdish sdh"
    },
    {
        "code": "ysp",
        "name": "Southern Lolopo",
        "searchKey": "southern lolopo ysp"
    },
    {
        "code": "luz",
        "name": "Southern Luri",
        "searchKey": "southern luri luz"
    },
    {
        "code": "snm",
        "name": "Southern Ma'di",
        "searchKey": "southern madi snm"
    },
    {
        "code": "hma",
        "name": "Southern Mashan Hmong",
        "searchKey": "southern mashan hmong hma"
    },
    {
        "code": "mnn",
        "name": "Southern Mnong",
        "searchKey": "southern mnong mnn"
    },
    {
        "code": "ymc",
        "name": "Southern Muji",
        "searchKey": "southern muji ymc"
    },
    {
        "code": "nqg",
        "name": "Southern Nago",
        "searchKey": "southern nago nqg"
    },
    {
        "code": "nab",
        "name": "Southern Nambikuára",
        "searchKey": "southern nambikuara nab"
    },
    {
        "code": "nbw",
        "name": "Southern Ngbandi",
        "searchKey": "southern ngbandi nbw"
    },
    {
        "code": "nik",
        "name": "Southern Nicobarese",
        "searchKey": "southern nicobarese nik"
    },
    {
        "code": "nsd",
        "name": "Southern Nisu",
        "searchKey": "southern nisu nsd"
    },
    {
        "code": "nnw",
        "name": "Southern Nuni",
        "searchKey": "southern nuni nnw"
    },
    {
        "code": "css",
        "name": "Southern Ohlone",
        "searchKey": "southern ohlone css"
    },
    {
        "code": "osu",
        "name": "Southern One",
        "searchKey": "southern one osu"
    },
    {
        "code": "pmz",
        "name": "Southern Pame",
        "searchKey": "southern pame pmz"
    },
    {
        "code": "pbt",
        "name": "Southern Pashto",
        "searchKey": "southern pashto pbt"
    },
    {
        "code": "qup",
        "name": "Southern Pastaza Quechua",
        "searchKey": "southern pastaza quechua qup"
    },
    {
        "code": "csp",
        "name": "Southern Ping Chinese",
        "searchKey": "southern ping chinese csp"
    },
    {
        "code": "peq",
        "name": "Southern Pomo",
        "searchKey": "southern pomo peq"
    },
    {
        "code": "mit",
        "name": "Southern Puebla Mixtec",
        "searchKey": "southern puebla mixtec mit"
    },
    {
        "code": "slh",
        "name": "Southern Puget Sound Salish",
        "searchKey": "southern puget sound salish slh"
    },
    {
        "code": "pmj",
        "name": "Southern Pumi",
        "searchKey": "southern pumi pmj"
    },
    {
        "code": "hms",
        "name": "Southern Qiandong Miao",
        "searchKey": "southern qiandong miao hms"
    },
    {
        "code": "qxs",
        "name": "Southern Qiang",
        "searchKey": "southern qiang qxs"
    },
    {
        "code": "nre",
        "name": "Southern Rengma Naga",
        "searchKey": "southern rengma naga nre"
    },
    {
        "code": "zsr",
        "name": "Southern Rincon Zapotec",
        "searchKey": "southern rincon zapotec zsr"
    },
    {
        "code": "rgs",
        "name": "Southern Roglai",
        "searchKey": "southern roglai rgs"
    },
    {
        "code": "ssb",
        "name": "Southern Sama",
        "searchKey": "southern sama ssb"
    },
    {
        "code": "sma",
        "name": "Southern Sami",
        "searchKey": "southern sami sma"
    },
    {
        "code": "sbd",
        "name": "Southern Samo",
        "searchKey": "southern samo sbd"
    },
    {
        "code": "skd",
        "name": "Southern Sierra Miwok",
        "searchKey": "southern sierra miwok skd"
    },
    {
        "code": "srv",
        "name": "Southern Sorsoganon",
        "searchKey": "southern sorsoganon srv"
    },
    {
        "code": "sot",
        "name": "Southern Sotho",
        "searchKey": "southern sotho sot"
    },
    {
        "code": "laa",
        "name": "Southern Subanen",
        "searchKey": "southern subanen laa"
    },
    {
        "code": "sou",
        "name": "Southern Thai",
        "searchKey": "southern thai sou"
    },
    {
        "code": "itd",
        "name": "Southern Tidung",
        "searchKey": "southern tidung itd"
    },
    {
        "code": "tix",
        "name": "Southern Tiwa",
        "searchKey": "southern tiwa tix"
    },
    {
        "code": "wib",
        "name": "Southern Toussian",
        "searchKey": "southern toussian wib"
    },
    {
        "code": "tjs",
        "name": "Southern Tujia",
        "searchKey": "southern tujia tjs"
    },
    {
        "code": "tce",
        "name": "Southern Tutchone",
        "searchKey": "southern tutchone tce"
    },
    {
        "code": "uzs",
        "name": "Southern Uzbek",
        "searchKey": "southern uzbek uzs"
    },
    {
        "code": "lrr",
        "name": "Southern Yamphu",
        "searchKey": "southern yamphu lrr"
    },
    {
        "code": "yux",
        "name": "Southern Yukaghir",
        "searchKey": "southern yukaghir yux"
    },
    {
        "code": "gso",
        "name": "Southwest Gbaya",
        "searchKey": "southwest gbaya gso"
    },
    {
        "code": "plv",
        "name": "Southwest Palawano",
        "searchKey": "southwest palawano plv"
    },
    {
        "code": "psh",
        "name": "Southwest Pashai",
        "searchKey": "southwest pashai psh"
    },
    {
        "code": "nwi",
        "name": "Southwest Tanna",
        "searchKey": "southwest tanna nwi"
    },
    {
        "code": "vbk",
        "name": "Southwestern Bontok",
        "searchKey": "southwestern bontok vbk"
    },
    {
        "code": "dik",
        "name": "Southwestern Dinka",
        "searchKey": "southwestern dinka dik"
    },
    {
        "code": "fay",
        "name": "Southwestern Fars",
        "searchKey": "southwestern fars fay"
    },
    {
        "code": "hmg",
        "name": "Southwestern Guiyang Hmong",
        "searchKey": "southwestern guiyang hmong hmg"
    },
    {
        "code": "hmh",
        "name": "Southwestern Huishui Hmong",
        "searchKey": "southwestern huishui hmong hmh"
    },
    {
        "code": "nsv",
        "name": "Southwestern Nisu",
        "searchKey": "southwestern nisu nsv"
    },
    {
        "code": "twr",
        "name": "Southwestern Tarahumara",
        "searchKey": "southwestern tarahumara twr"
    },
    {
        "code": "xpx",
        "name": "Southwestern Tasmanian",
        "searchKey": "southwestern tasmanian xpx"
    },
    {
        "code": "tla",
        "name": "Southwestern Tepehuan",
        "searchKey": "southwestern tepehuan tla"
    },
    {
        "code": "meh",
        "name": "Southwestern Tlaxiaco Mixtec",
        "searchKey": "southwestern tlaxiaco mixtec meh"
    },
    {
        "code": "sww",
        "name": "Sowa",
        "searchKey": "sowa sww"
    },
    {
        "code": "sow",
        "name": "Sowanda",
        "searchKey": "sowanda sow"
    },
    {
        "code": "vmp",
        "name": "Soyaltepec Mazatec",
        "searchKey": "soyaltepec mazatec vmp"
    },
    {
        "code": "vmq",
        "name": "Soyaltepec Mixtec",
        "searchKey": "soyaltepec mixtec vmq"
    },
    {
        "code": "spa",
        "name": "Spanish",
        "searchKey": "spanish spa"
    },
    {
        "code": "ssp",
        "name": "Spanish Sign Language",
        "searchKey": "spanish sign language ssp"
    },
    {
        "code": "spt",
        "name": "Spiti Bhoti",
        "searchKey": "spiti bhoti spt"
    },
    {
        "code": "spo",
        "name": "Spokane",
        "searchKey": "spokane spo"
    },
    {
        "code": "squ",
        "name": "Squamish",
        "searchKey": "squamish squ"
    },
    {
        "code": "srn",
        "name": "Sranan Tongo",
        "searchKey": "sranan tongo srn"
    },
    {
        "code": "sci",
        "name": "Sri Lankan Creole Malay",
        "searchKey": "sri lankan creole malay sci"
    },
    {
        "code": "sqs",
        "name": "Sri Lankan Sign Language",
        "searchKey": "sri lankan sign language sqs"
    },
    {
        "code": "arb",
        "name": "Standard Arabic",
        "searchKey": "standard arabic arb"
    },
    {
        "code": "ekk",
        "name": "Standard Estonian",
        "searchKey": "standard estonian ekk"
    },
    {
        "code": "lvs",
        "name": "Standard Latvian",
        "searchKey": "standard latvian lvs"
    },
    {
        "code": "zsm",
        "name": "Standard Malay",
        "searchKey": "standard malay zsm"
    },
    {
        "code": "zgh",
        "name": "Standard Moroccan Tamazight",
        "searchKey": "standard moroccan tamazight zgh"
    },
    {
        "code": "stl",
        "name": "Stellingwerfs",
        "searchKey": "stellingwerfs stl"
    },
    {
        "code": "sbu",
        "name": "Stod Bhoti",
        "searchKey": "stod bhoti sbu"
    },
    {
        "code": "jih",
        "name": "sTodsde",
        "searchKey": "stodsde jih"
    },
    {
        "code": "sto",
        "name": "Stoney",
        "searchKey": "stoney sto"
    },
    {
        "code": "str",
        "name": "Straits Salish",
        "searchKey": "straits salish str"
    },
    {
        "code": "szp",
        "name": "Suabo",
        "searchKey": "suabo szp"
    },
    {
        "code": "seo",
        "name": "Suarmin",
        "searchKey": "suarmin seo"
    },
    {
        "code": "swp",
        "name": "Suau",
        "searchKey": "suau swp"
    },
    {
        "code": "sxb",
        "name": "Suba",
        "searchKey": "suba sxb"
    },
    {
        "code": "ssc",
        "name": "Suba-Simbiti",
        "searchKey": "suba-simbiti ssc"
    },
    {
        "code": "xsj",
        "name": "Subi",
        "searchKey": "subi xsj"
    },
    {
        "code": "sbs",
        "name": "Subiya",
        "searchKey": "subiya sbs"
    },
    {
        "code": "sut",
        "name": "Subtiaba",
        "searchKey": "subtiaba sut"
    },
    {
        "code": "apd",
        "name": "Sudanese Arabic",
        "searchKey": "sudanese arabic apd"
    },
    {
        "code": "pga",
        "name": "Sudanese Creole Arabic",
        "searchKey": "sudanese creole arabic pga"
    },
    {
        "code": "tgo",
        "name": "Sudest",
        "searchKey": "sudest tgo"
    },
    {
        "code": "xsv",
        "name": "Sudovian",
        "searchKey": "sudovian xsv"
    },
    {
        "code": "sue",
        "name": "Suena",
        "searchKey": "suena sue"
    },
    {
        "code": "sgi",
        "name": "Suga",
        "searchKey": "suga sgi"
    },
    {
        "code": "sug",
        "name": "Suganga",
        "searchKey": "suganga sug"
    },
    {
        "code": "kzs",
        "name": "Sugut Dusun",
        "searchKey": "sugut dusun kzs"
    },
    {
        "code": "swi",
        "name": "Sui",
        "searchKey": "sui swi"
    },
    {
        "code": "sui",
        "name": "Suki",
        "searchKey": "suki sui"
    },
    {
        "code": "sub",
        "name": "Suku",
        "searchKey": "suku sub"
    },
    {
        "code": "suk",
        "name": "Sukuma",
        "searchKey": "sukuma suk"
    },
    {
        "code": "syk",
        "name": "Sukur",
        "searchKey": "sukur syk"
    },
    {
        "code": "zsu",
        "name": "Sukurum",
        "searchKey": "sukurum zsu"
    },
    {
        "code": "szn",
        "name": "Sula",
        "searchKey": "sula szn"
    },
    {
        "code": "sua",
        "name": "Sulka",
        "searchKey": "sulka sua"
    },
    {
        "code": "srg",
        "name": "Sulod",
        "searchKey": "sulod srg"
    },
    {
        "code": "sqm",
        "name": "Suma",
        "searchKey": "suma sqm"
    },
    {
        "code": "siv",
        "name": "Sumariup",
        "searchKey": "sumariup siv"
    },
    {
        "code": "six",
        "name": "Sumau",
        "searchKey": "sumau six"
    },
    {
        "code": "smw",
        "name": "Sumbawa",
        "searchKey": "sumbawa smw"
    },
    {
        "code": "suw",
        "name": "Sumbwa",
        "searchKey": "sumbwa suw"
    },
    {
        "code": "sux",
        "name": "Sumerian",
        "searchKey": "sumerian sux"
    },
    {
        "code": "nsm",
        "name": "Sumi Naga",
        "searchKey": "sumi naga nsm"
    },
    {
        "code": "csv",
        "name": "Sumtu Chin",
        "searchKey": "sumtu chin csv"
    },
    {
        "code": "ssk",
        "name": "Sunam",
        "searchKey": "sunam ssk"
    },
    {
        "code": "sun",
        "name": "Sundanese",
        "searchKey": "sundanese sun"
    },
    {
        "code": "suz",
        "name": "Sunwar",
        "searchKey": "sunwar suz"
    },
    {
        "code": "syo",
        "name": "Suoy",
        "searchKey": "suoy syo"
    },
    {
        "code": "spp",
        "name": "Supyire Senoufo",
        "searchKey": "supyire senoufo spp"
    },
    {
        "code": "tdl",
        "name": "Sur",
        "searchKey": "sur tdl"
    },
    {
        "code": "sbj",
        "name": "Surbakhal",
        "searchKey": "surbakhal sbj"
    },
    {
        "code": "sgj",
        "name": "Surgujia",
        "searchKey": "surgujia sgj"
    },
    {
        "code": "sgd",
        "name": "Surigaonon",
        "searchKey": "surigaonon sgd"
    },
    {
        "code": "sjp",
        "name": "Surjapuri",
        "searchKey": "surjapuri sjp"
    },
    {
        "code": "sgz",
        "name": "Sursurunga",
        "searchKey": "sursurunga sgz"
    },
    {
        "code": "swx",
        "name": "Suruahá",
        "searchKey": "suruaha swx"
    },
    {
        "code": "sde",
        "name": "Surubu",
        "searchKey": "surubu sde"
    },
    {
        "code": "sru",
        "name": "Suruí",
        "searchKey": "surui sru"
    },
    {
        "code": "mdz",
        "name": "Suruí Do Pará",
        "searchKey": "surui do para mdz"
    },
    {
        "code": "sqn",
        "name": "Susquehannock",
        "searchKey": "susquehannock sqn"
    },
    {
        "code": "sus",
        "name": "Susu",
        "searchKey": "susu sus"
    },
    {
        "code": "ssu",
        "name": "Susuami",
        "searchKey": "susuami ssu"
    },
    {
        "code": "sdj",
        "name": "Suundi",
        "searchKey": "suundi sdj"
    },
    {
        "code": "swu",
        "name": "Suwawa",
        "searchKey": "suwawa swu"
    },
    {
        "code": "suy",
        "name": "Suyá",
        "searchKey": "suya suy"
    },
    {
        "code": "sva",
        "name": "Svan",
        "searchKey": "svan sva"
    },
    {
        "code": "swg",
        "name": "Swabian",
        "searchKey": "swabian swg"
    },
    {
        "code": "swh",
        "name": "Swahili (individual language)",
        "displayName": "Swahili",
        "alternateNames": [
            "Kiswahili"
        ],
        "countries": [
            "Kenya",
            "Tanzania"
        ],
        "script": "Latin",
        "searchNames": [
            "Swahili"
        ],
        "searchKey": "swahili individual language swh swahili"
    },
    {
        "code": "swa",
        "name": "Swahili (macrolanguage)",
        "displayName": "Swahili",
        "alternateNames": [
            "Kiswahili"
        ],
        "countries": [
            "Kenya",
            "Tanzania",
            "Uganda",
            "Democratic Republic of the Congo"
        ],
        "script": "Latin",
        "searchNames": [
            "Swahili"
        ],
        "searchKey": "swahili macrolanguage swa swahili"
    },
    {
        "code": "csw",
        "name": "Swampy Cree",
        "searchKey": "swampy cree csw"
    },
    {
        "code": "ssw",
        "name": "Swati",
        "searchKey": "swati ssw"
    },
    {
        "code": "swe",
        "name": "Swedish",
        "searchKey": "swedish swe"
    },
    {
        "code": "swl",
        "name": "Swedish Sign Language",
        "searchKey": "swedish sign language swl"
    },
    {
        "code": "gsw",
        "name": "Swiss German",
        "searchKey": "swiss german gsw"
    },
    {
        "code": "ssr",
        "name": "Swiss-French Sign Language",
        "searchKey": "swiss-french sign language ssr"
    },
    {
        "code": "sgg",
        "name": "Swiss-German Sign Language",
        "searchKey": "swiss-german sign language sgg"
    },
    {
        "code": "slf",
        "name": "Swiss-Italian Sign Language",
        "searchKey": "swiss-italian sign language slf"
    },
    {
        "code": "sox",
        "name": "Swo",
        "searchKey": "swo sox"
    },
    {
        "code": "shz",
        "name": "Syenara Senoufo",
        "searchKey": "syenara senoufo shz"
    },
    {
        "code": "syl",
        "name": "Sylheti",
        "searchKey": "sylheti syl"
    },
    {
        "code": "syr",
        "name": "Syriac",
        "searchKey": "syriac syr"
    },
    {
        "code": "tap",
        "name": "Taabwa",
        "searchKey": "taabwa tap"
    },
    {
        "code": "zat",
        "name": "Tabaa Zapotec",
        "searchKey": "tabaa zapotec zat"
    },
    {
        "code": "tby",
        "name": "Tabaru",
        "searchKey": "tabaru tby"
    },
    {
        "code": "chf",
        "name": "Tabasco Chontal",
        "searchKey": "tabasco chontal chf"
    },
    {
        "code": "nhc",
        "name": "Tabasco Nahuatl",
        "searchKey": "tabasco nahuatl nhc"
    },
    {
        "code": "zoq",
        "name": "Tabasco Zoque",
        "searchKey": "tabasco zoque zoq"
    },
    {
        "code": "tab",
        "name": "Tabassaran",
        "searchKey": "tabassaran tab"
    },
    {
        "code": "tnm",
        "name": "Tabla",
        "searchKey": "tabla tnm"
    },
    {
        "code": "knv",
        "name": "Tabo",
        "searchKey": "tabo knv"
    },
    {
        "code": "tzx",
        "name": "Tabriak",
        "searchKey": "tabriak tzx"
    },
    {
        "code": "xtt",
        "name": "Tacahua Mixtec",
        "searchKey": "tacahua mixtec xtt"
    },
    {
        "code": "tna",
        "name": "Tacana",
        "searchKey": "tacana tna"
    },
    {
        "code": "shy",
        "name": "Tachawit",
        "searchKey": "tachawit shy"
    },
    {
        "code": "shi",
        "name": "Tachelhit",
        "searchKey": "tachelhit shi"
    },
    {
        "code": "lts",
        "name": "Tachoni",
        "searchKey": "tachoni lts"
    },
    {
        "code": "dsq",
        "name": "Tadaksahak",
        "searchKey": "tadaksahak dsq"
    },
    {
        "code": "klw",
        "name": "Tado",
        "searchKey": "tado klw"
    },
    {
        "code": "tdy",
        "name": "Tadyawan",
        "searchKey": "tadyawan tdy"
    },
    {
        "code": "rob",
        "name": "Tae'",
        "searchKey": "tae rob"
    },
    {
        "code": "tcd",
        "name": "Tafi",
        "searchKey": "tafi tcd"
    },
    {
        "code": "bgs",
        "name": "Tagabawa",
        "searchKey": "tagabawa bgs"
    },
    {
        "code": "klg",
        "name": "Tagakaulo",
        "searchKey": "tagakaulo klg"
    },
    {
        "code": "mvv",
        "name": "Tagal Murut",
        "searchKey": "tagal murut mvv"
    },
    {
        "code": "tgz",
        "name": "Tagalaka",
        "searchKey": "tagalaka tgz"
    },
    {
        "code": "tgl",
        "name": "Tagalog",
        "searchKey": "tagalog tgl"
    },
    {
        "code": "oua",
        "name": "Tagargrent",
        "searchKey": "tagargrent oua"
    },
    {
        "code": "tbw",
        "name": "Tagbanwa",
        "searchKey": "tagbanwa tbw"
    },
    {
        "code": "tbm",
        "name": "Tagbu",
        "searchKey": "tagbu tbm"
    },
    {
        "code": "tda",
        "name": "Tagdal",
        "searchKey": "tagdal tda"
    },
    {
        "code": "tgj",
        "name": "Tagin",
        "searchKey": "tagin tgj"
    },
    {
        "code": "tgx",
        "name": "Tagish",
        "searchKey": "tagish tgx"
    },
    {
        "code": "tag",
        "name": "Tagoi",
        "searchKey": "tagoi tag"
    },
    {
        "code": "tgw",
        "name": "Tagwana Senoufo",
        "searchKey": "tagwana senoufo tgw"
    },
    {
        "code": "thv",
        "name": "Tahaggart Tamahaq",
        "searchKey": "tahaggart tamahaq thv"
    },
    {
        "code": "tah",
        "name": "Tahitian",
        "searchKey": "tahitian tah"
    },
    {
        "code": "tht",
        "name": "Tahltan",
        "searchKey": "tahltan tht"
    },
    {
        "code": "taw",
        "name": "Tai",
        "searchKey": "tai taw"
    },
    {
        "code": "tyr",
        "name": "Tai Daeng",
        "searchKey": "tai daeng tyr"
    },
    {
        "code": "blt",
        "name": "Tai Dam",
        "searchKey": "tai dam blt"
    },
    {
        "code": "tyj",
        "name": "Tai Do",
        "searchKey": "tai do tyj"
    },
    {
        "code": "twh",
        "name": "Tai Dón",
        "searchKey": "tai don twh"
    },
    {
        "code": "tiz",
        "name": "Tai Hongjin",
        "searchKey": "tai hongjin tiz"
    },
    {
        "code": "tjl",
        "name": "Tai Laing",
        "searchKey": "tai laing tjl"
    },
    {
        "code": "tlq",
        "name": "Tai Loi",
        "searchKey": "tai loi tlq"
    },
    {
        "code": "thi",
        "name": "Tai Long",
        "searchKey": "tai long thi"
    },
    {
        "code": "tdd",
        "name": "Tai Nüa",
        "searchKey": "tai nua tdd"
    },
    {
        "code": "tpo",
        "name": "Tai Pao",
        "searchKey": "tai pao tpo"
    },
    {
        "code": "tmm",
        "name": "Tai Thanh",
        "searchKey": "tai thanh tmm"
    },
    {
        "code": "cuu",
        "name": "Tai Ya",
        "searchKey": "tai ya cuu"
    },
    {
        "code": "gpn",
        "name": "Taiap",
        "searchKey": "taiap gpn"
    },
    {
        "code": "aos",
        "name": "Taikat",
        "searchKey": "taikat aos"
    },
    {
        "code": "ago",
        "name": "Tainae",
        "searchKey": "tainae ago"
    },
    {
        "code": "tnq",
        "name": "Taino",
        "searchKey": "taino tnq"
    },
    {
        "code": "bxa",
        "name": "Tairaha",
        "searchKey": "tairaha bxa"
    },
    {
        "code": "uar",
        "name": "Tairuma",
        "searchKey": "tairuma uar"
    },
    {
        "code": "dav",
        "name": "Taita",
        "searchKey": "taita dav"
    },
    {
        "code": "tvx",
        "name": "Taivoan",
        "searchKey": "taivoan tvx"
    },
    {
        "code": "tss",
        "name": "Taiwan Sign Language",
        "searchKey": "taiwan sign language tss"
    },
    {
        "code": "acq",
        "name": "Ta'izzi-Adeni Arabic",
        "searchKey": "taizzi-adeni arabic acq"
    },
    {
        "code": "pee",
        "name": "Taje",
        "searchKey": "taje pee"
    },
    {
        "code": "tgk",
        "name": "Tajik",
        "searchKey": "tajik tgk"
    },
    {
        "code": "abh",
        "name": "Tajiki Arabic",
        "searchKey": "tajiki arabic abh"
    },
    {
        "code": "tdj",
        "name": "Tajio",
        "searchKey": "tajio tdj"
    },
    {
        "code": "tja",
        "name": "Tajuasohn",
        "searchKey": "tajuasohn tja"
    },
    {
        "code": "tkm",
        "name": "Takelma",
        "searchKey": "takelma tkm"
    },
    {
        "code": "tks",
        "name": "Takestani",
        "searchKey": "takestani tks"
    },
    {
        "code": "tbc",
        "name": "Takia",
        "searchKey": "takia tbc"
    },
    {
        "code": "tkz",
        "name": "Takua",
        "searchKey": "takua tkz"
    },
    {
        "code": "nho",
        "name": "Takuu",
        "searchKey": "takuu nho"
    },
    {
        "code": "tke",
        "name": "Takwane",
        "searchKey": "takwane tke"
    },
    {
        "code": "tal",
        "name": "Tal",
        "searchKey": "tal"
    },
    {
        "code": "tak",
        "name": "Tala",
        "searchKey": "tala tak"
    },
    {
        "code": "tld",
        "name": "Talaud",
        "searchKey": "talaud tld"
    },
    {
        "code": "tlv",
        "name": "Taliabu",
        "searchKey": "taliabu tlv"
    },
    {
        "code": "tdf",
        "name": "Talieng",
        "searchKey": "talieng tdf"
    },
    {
        "code": "tlj",
        "name": "Talinga-Bwisi",
        "searchKey": "talinga-bwisi tlj"
    },
    {
        "code": "tlr",
        "name": "Talise",
        "searchKey": "talise tlr"
    },
    {
        "code": "tlo",
        "name": "Talodi",
        "searchKey": "talodi tlo"
    },
    {
        "code": "tlk",
        "name": "Taloki",
        "searchKey": "taloki tlk"
    },
    {
        "code": "tln",
        "name": "Talondo'",
        "searchKey": "talondo tln"
    },
    {
        "code": "tzl",
        "name": "Talossan",
        "searchKey": "talossan tzl"
    },
    {
        "code": "yta",
        "name": "Talu",
        "searchKey": "talu yta"
    },
    {
        "code": "tly",
        "name": "Talysh",
        "searchKey": "talysh tly"
    },
    {
        "code": "tma",
        "name": "Tama (Chad)",
        "searchNames": [
            "Tama"
        ],
        "searchKey": "tama chad tma tama"
    },
    {
        "code": "ten",
        "name": "Tama (Colombia)",
        "searchNames": [
            "Tama"
        ],
        "searchKey": "tama colombia ten tama"
    },
    {
        "code": "tcg",
        "name": "Tamagario",
        "searchKey": "tamagario tcg"
    },
    {
        "code": "tmn",
        "name": "Taman (Indonesia)",
        "searchNames": [
            "Taman"
        ],
        "searchKey": "taman indonesia tmn taman"
    },
    {
        "code": "tcl",
        "name": "Taman (Myanmar)",
        "searchNames": [
            "Taman"
        ],
        "searchKey": "taman myanmar tcl taman"
    },
    {
        "code": "tmz",
        "name": "Tamanaku",
        "searchKey": "tamanaku tmz"
    },
    {
        "code": "tmh",
        "name": "Tamashek",
        "searchKey": "tamashek tmh"
    },
    {
        "code": "taq",
        "name": "Tamasheq",
        "searchKey": "tamasheq taq"
    },
    {
        "code": "vmx",
        "name": "Tamazola Mixtec",
        "searchKey": "tamazola mixtec vmx"
    },
    {
        "code": "tdk",
        "name": "Tambas",
        "searchKey": "tambas tdk"
    },
    {
        "code": "xxt",
        "name": "Tambora",
        "searchKey": "tambora xxt"
    },
    {
        "code": "tls",
        "name": "Tambotalo",
        "searchKey": "tambotalo tls"
    },
    {
        "code": "tmy",
        "name": "Tami",
        "searchKey": "tami tmy"
    },
    {
        "code": "tam",
        "name": "Tamil",
        "searchKey": "tamil tam"
    },
    {
        "code": "tax",
        "name": "Tamki",
        "searchKey": "tamki tax"
    },
    {
        "code": "tml",
        "name": "Tamnim Citak",
        "searchKey": "tamnim citak tml"
    },
    {
        "code": "low",
        "name": "Tampias Lobu",
        "searchKey": "tampias lobu low"
    },
    {
        "code": "tpu",
        "name": "Tampuan",
        "searchKey": "tampuan tpu"
    },
    {
        "code": "tpm",
        "name": "Tampulma",
        "searchKey": "tampulma tpm"
    },
    {
        "code": "tcb",
        "name": "Tanacross",
        "searchKey": "tanacross tcb"
    },
    {
        "code": "tcm",
        "name": "Tanahmerah",
        "searchKey": "tanahmerah tcm"
    },
    {
        "code": "tfn",
        "name": "Tanaina",
        "searchKey": "tanaina tfn"
    },
    {
        "code": "tpv",
        "name": "Tanapag",
        "searchKey": "tanapag tpv"
    },
    {
        "code": "tgn",
        "name": "Tandaganon",
        "searchKey": "tandaganon tgn"
    },
    {
        "code": "tni",
        "name": "Tandia",
        "searchKey": "tandia tni"
    },
    {
        "code": "tdx",
        "name": "Tandroy-Mahafaly Malagasy",
        "searchKey": "tandroy-mahafaly malagasy tdx"
    },
    {
        "code": "tnx",
        "name": "Tanema",
        "searchKey": "tanema tnx"
    },
    {
        "code": "tan",
        "name": "Tangale",
        "searchKey": "tangale tan"
    },
    {
        "code": "tnv",
        "name": "Tangchangya",
        "searchKey": "tangchangya tnv"
    },
    {
        "code": "tgu",
        "name": "Tanggu",
        "searchKey": "tanggu tgu"
    },
    {
        "code": "nmf",
        "name": "Tangkhul Naga (India)",
        "searchNames": [
            "Tangkhul Naga"
        ],
        "searchKey": "tangkhul naga india nmf tangkhul naga"
    },
    {
        "code": "ntx",
        "name": "Tangkhul Naga (Myanmar)",
        "searchNames": [
            "Tangkhul Naga"
        ],
        "searchKey": "tangkhul naga myanmar ntx tangkhul naga"
    },
    {
        "code": "tkx",
        "name": "Tangko",
        "searchKey": "tangko tkx"
    },
    {
        "code": "ytl",
        "name": "Tanglang",
        "searchKey": "tanglang ytl"
    },
    {
        "code": "tgp",
        "name": "Tangoa",
        "searchKey": "tangoa tgp"
    },
    {
        "code": "tbs",
        "name": "Tanguat",
        "searchKey": "tanguat tbs"
    },
    {
        "code": "txg",
        "name": "Tangut",
        "searchKey": "tangut txg"
    },
    {
        "code": "tbe",
        "name": "Tanimbili",
        "searchKey": "tanimbili tbe"
    },
    {
        "code": "tnc",
        "name": "Tanimuca-Retuarã",
        "searchKey": "tanimuca-retuara tnc"
    },
    {
        "code": "uji",
        "name": "Tanjijili",
        "searchKey": "tanjijili uji"
    },
    {
        "code": "txy",
        "name": "Tanosy Malagasy",
        "searchKey": "tanosy malagasy txy"
    },
    {
        "code": "kml",
        "name": "Tanudan Kalinga",
        "searchKey": "tanudan kalinga kml"
    },
    {
        "code": "tza",
        "name": "Tanzanian Sign Language",
        "searchKey": "tanzanian sign language tza"
    },
    {
        "code": "afp",
        "name": "Tapei",
        "searchKey": "tapei afp"
    },
    {
        "code": "tpj",
        "name": "Tapieté",
        "searchKey": "tapiete tpj"
    },
    {
        "code": "taf",
        "name": "Tapirapé",
        "searchKey": "tapirape taf"
    },
    {
        "code": "lgn",
        "name": "T'apo",
        "searchKey": "tapo lgn"
    },
    {
        "code": "tro",
        "name": "Tarao Naga",
        "searchKey": "tarao naga tro"
    },
    {
        "code": "tgr",
        "name": "Tareng",
        "searchKey": "tareng tgr"
    },
    {
        "code": "tae",
        "name": "Tariana",
        "searchKey": "tariana tae"
    },
    {
        "code": "rif",
        "name": "Tarifit",
        "searchKey": "tarifit rif"
    },
    {
        "code": "txj",
        "name": "Tarjumo",
        "searchKey": "tarjumo txj"
    },
    {
        "code": "yer",
        "name": "Tarok",
        "searchKey": "tarok yer"
    },
    {
        "code": "tpf",
        "name": "Tarpia",
        "searchKey": "tarpia tpf"
    },
    {
        "code": "txr",
        "name": "Tartessian",
        "searchKey": "tartessian txr"
    },
    {
        "code": "tdm",
        "name": "Taruma",
        "searchKey": "taruma tdm"
    },
    {
        "code": "twq",
        "name": "Tasawaq",
        "searchKey": "tasawaq twq"
    },
    {
        "code": "nst",
        "name": "Tase Naga",
        "searchKey": "tase naga nst"
    },
    {
        "code": "tmt",
        "name": "Tasmate",
        "searchKey": "tasmate tmt"
    },
    {
        "code": "cta",
        "name": "Tataltepec Chatino",
        "searchKey": "tataltepec chatino cta"
    },
    {
        "code": "txx",
        "name": "Tatana",
        "searchKey": "tatana txx"
    },
    {
        "code": "tat",
        "name": "Tatar",
        "searchKey": "tatar tat"
    },
    {
        "code": "tav",
        "name": "Tatuyo",
        "searchKey": "tatuyo tav"
    },
    {
        "code": "ttd",
        "name": "Tauade",
        "searchKey": "tauade ttd"
    },
    {
        "code": "tuh",
        "name": "Taulil",
        "searchKey": "taulil tuh"
    },
    {
        "code": "tco",
        "name": "Taungyo",
        "searchKey": "taungyo tco"
    },
    {
        "code": "tpa",
        "name": "Taupota",
        "searchKey": "taupota tpa"
    },
    {
        "code": "tad",
        "name": "Tause",
        "searchKey": "tause tad"
    },
    {
        "code": "trr",
        "name": "Taushiro",
        "searchKey": "taushiro trr"
    },
    {
        "code": "tsg",
        "name": "Tausug",
        "searchKey": "tausug tsg"
    },
    {
        "code": "tya",
        "name": "Tauya",
        "searchKey": "tauya tya"
    },
    {
        "code": "tvs",
        "name": "Taveta",
        "searchKey": "taveta tvs"
    },
    {
        "code": "tvn",
        "name": "Tavoyan",
        "searchKey": "tavoyan tvn"
    },
    {
        "code": "rmu",
        "name": "Tavringer Romani",
        "searchKey": "tavringer romani rmu"
    },
    {
        "code": "tbo",
        "name": "Tawala",
        "searchKey": "tawala tbo"
    },
    {
        "code": "ttq",
        "name": "Tawallammat Tamajaq",
        "searchKey": "tawallammat tamajaq ttq"
    },
    {
        "code": "xtw",
        "name": "Tawandê",
        "searchKey": "tawande xtw"
    },
    {
        "code": "twm",
        "name": "Tawang Monpa",
        "searchKey": "tawang monpa twm"
    },
    {
        "code": "twl",
        "name": "Tawara",
        "searchKey": "tawara twl"
    },
    {
        "code": "tbp",
        "name": "Taworta",
        "searchKey": "taworta tbp"
    },
    {
        "code": "twy",
        "name": "Tawoyan",
        "searchKey": "tawoyan twy"
    },
    {
        "code": "tcp",
        "name": "Tawr Chin",
        "searchKey": "tawr chin tcp"
    },
    {
        "code": "tyz",
        "name": "Tày",
        "searchKey": "tay tyz"
    },
    {
        "code": "tas",
        "name": "Tay Boi",
        "searchKey": "tay boi tas"
    },
    {
        "code": "tnu",
        "name": "Tay Khang",
        "searchKey": "tay khang tnu"
    },
    {
        "code": "tys",
        "name": "Tày Sa Pa",
        "searchKey": "tay sa pa tys"
    },
    {
        "code": "tyt",
        "name": "Tày Tac",
        "searchKey": "tay tac tyt"
    },
    {
        "code": "thz",
        "name": "Tayart Tamajeq",
        "searchKey": "tayart tamajeq thz"
    },
    {
        "code": "cks",
        "name": "Tayo",
        "searchKey": "tayo cks"
    },
    {
        "code": "grr",
        "name": "Taznatit",
        "searchKey": "taznatit grr"
    },
    {
        "code": "tbl",
        "name": "Tboli",
        "searchKey": "tboli tbl"
    },
    {
        "code": "tck",
        "name": "Tchitchege",
        "searchKey": "tchitchege tck"
    },
    {
        "code": "bqa",
        "name": "Tchumbuli",
        "searchKey": "tchumbuli bqa"
    },
    {
        "code": "tkw",
        "name": "Teanu",
        "searchKey": "teanu tkw"
    },
    {
        "code": "tsy",
        "name": "Tebul Sign Language",
        "searchKey": "tebul sign language tsy"
    },
    {
        "code": "dtu",
        "name": "Tebul Ure Dogon",
        "searchKey": "tebul ure dogon dtu"
    },
    {
        "code": "tcw",
        "name": "Tecpatlán Totonac",
        "searchKey": "tecpatlan totonac tcw"
    },
    {
        "code": "tuq",
        "name": "Tedaga",
        "searchKey": "tedaga tuq"
    },
    {
        "code": "ctd",
        "name": "Tedim Chin",
        "searchKey": "tedim chin ctd"
    },
    {
        "code": "tkq",
        "name": "Tee",
        "searchKey": "tee tkq"
    },
    {
        "code": "lor",
        "name": "Téén",
        "searchKey": "teen lor"
    },
    {
        "code": "tfo",
        "name": "Tefaro",
        "searchKey": "tefaro tfo"
    },
    {
        "code": "ras",
        "name": "Tegali",
        "searchKey": "tegali ras"
    },
    {
        "code": "kps",
        "name": "Tehit",
        "searchKey": "tehit kps"
    },
    {
        "code": "teh",
        "name": "Tehuelche",
        "searchKey": "tehuelche teh"
    },
    {
        "code": "ztt",
        "name": "Tejalapan Zapotec",
        "searchKey": "tejalapan zapotec ztt"
    },
    {
        "code": "ebo",
        "name": "Teke-Ebo",
        "searchKey": "teke-ebo ebo"
    },
    {
        "code": "ifm",
        "name": "Teke-Fuumu",
        "searchKey": "teke-fuumu ifm"
    },
    {
        "code": "kkw",
        "name": "Teke-Kukuya",
        "searchKey": "teke-kukuya kkw"
    },
    {
        "code": "lli",
        "name": "Teke-Laali",
        "searchKey": "teke-laali lli"
    },
    {
        "code": "nzu",
        "name": "Teke-Nzikou",
        "searchKey": "teke-nzikou nzu"
    },
    {
        "code": "teg",
        "name": "Teke-Tege",
        "searchKey": "teke-tege teg"
    },
    {
        "code": "tyi",
        "name": "Teke-Tsaayi",
        "searchKey": "teke-tsaayi tyi"
    },
    {
        "code": "tyx",
        "name": "Teke-Tyee",
        "searchKey": "teke-tyee tyx"
    },
    {
        "code": "ttc",
        "name": "Tektiteko",
        "searchKey": "tektiteko ttc"
    },
    {
        "code": "tvm",
        "name": "Tela-Masbuar",
        "searchKey": "tela-masbuar tvm"
    },
    {
        "code": "tlf",
        "name": "Telefol",
        "searchKey": "telefol tlf"
    },
    {
        "code": "tel",
        "name": "Telugu",
        "searchKey": "telugu tel"
    },
    {
        "code": "kdh",
        "name": "Tem",
        "searchKey": "tem kdh"
    },
    {
        "code": "tjo",
        "name": "Temacine Tamazight",
        "searchKey": "temacine tamazight tjo"
    },
    {
        "code": "nhv",
        "name": "Temascaltepec Nahuatl",
        "searchKey": "temascaltepec nahuatl nhv"
    },
    {
        "code": "tqb",
        "name": "Tembé",
        "searchKey": "tembe tqb"
    },
    {
        "code": "tbt",
        "name": "Tembo (Kitembo)",
        "searchNames": [
            "Tembo"
        ],
        "searchKey": "tembo kitembo tbt tembo"
    },
    {
        "code": "tmv",
        "name": "Tembo (Motembo)",
        "searchNames": [
            "Tembo"
        ],
        "searchKey": "tembo motembo tmv tembo"
    },
    {
        "code": "tdo",
        "name": "Teme",
        "searchKey": "teme tdo"
    },
    {
        "code": "teq",
        "name": "Temein",
        "searchKey": "temein teq"
    },
    {
        "code": "soz",
        "name": "Temi",
        "searchKey": "temi soz"
    },
    {
        "code": "tea",
        "name": "Temiar",
        "searchKey": "temiar tea"
    },
    {
        "code": "ott",
        "name": "Temoaya Otomi",
        "searchKey": "temoaya otomi ott"
    },
    {
        "code": "tmo",
        "name": "Temoq",
        "searchKey": "temoq tmo"
    },
    {
        "code": "tmw",
        "name": "Temuan",
        "searchKey": "temuan tmw"
    },
    {
        "code": "tct",
        "name": "T'en",
        "searchKey": "ten tct"
    },
    {
        "code": "quw",
        "name": "Tena Lowland Quichua",
        "searchKey": "tena lowland quichua quw"
    },
    {
        "code": "otn",
        "name": "Tenango Otomi",
        "searchKey": "tenango otomi otn"
    },
    {
        "code": "dtk",
        "name": "Tene Kan Dogon",
        "searchKey": "tene kan dogon dtk"
    },
    {
        "code": "tnz",
        "name": "Ten'edn",
        "searchKey": "tenedn tnz"
    },
    {
        "code": "vkt",
        "name": "Tenggarong Kutai Malay",
        "searchKey": "tenggarong kutai malay vkt"
    },
    {
        "code": "tes",
        "name": "Tengger",
        "searchKey": "tengger tes"
    },
    {
        "code": "pah",
        "name": "Tenharim",
        "searchKey": "tenharim pah"
    },
    {
        "code": "tqn",
        "name": "Tenino",
        "searchKey": "tenino tqn"
    },
    {
        "code": "tns",
        "name": "Tenis",
        "searchKey": "tenis tns"
    },
    {
        "code": "tex",
        "name": "Tennet",
        "searchKey": "tennet tex"
    },
    {
        "code": "tio",
        "name": "Teop",
        "searchKey": "teop tio"
    },
    {
        "code": "tev",
        "name": "Teor",
        "searchKey": "teor tev"
    },
    {
        "code": "tep",
        "name": "Tepecano",
        "searchKey": "tepecano tep"
    },
    {
        "code": "cnt",
        "name": "Tepetotutla Chinantec",
        "searchKey": "tepetotutla chinantec cnt"
    },
    {
        "code": "cux",
        "name": "Tepeuxila Cuicatec",
        "searchKey": "tepeuxila cuicatec cux"
    },
    {
        "code": "cte",
        "name": "Tepinapa Chinantec",
        "searchKey": "tepinapa chinantec cte"
    },
    {
        "code": "ted",
        "name": "Tepo Krumen",
        "searchKey": "tepo krumen ted"
    },
    {
        "code": "sjt",
        "name": "Ter Sami",
        "searchKey": "ter sami sjt"
    },
    {
        "code": "ttr",
        "name": "Tera",
        "searchKey": "tera ttr"
    },
    {
        "code": "trb",
        "name": "Terebu",
        "searchKey": "terebu trb"
    },
    {
        "code": "buo",
        "name": "Terei",
        "searchKey": "terei buo"
    },
    {
        "code": "ter",
        "name": "Tereno",
        "searchKey": "tereno ter"
    },
    {
        "code": "tef",
        "name": "Teressa",
        "searchKey": "teressa tef"
    },
    {
        "code": "twg",
        "name": "Tereweng",
        "searchKey": "tereweng twg"
    },
    {
        "code": "tfr",
        "name": "Teribe",
        "searchKey": "teribe tfr"
    },
    {
        "code": "tec",
        "name": "Terik",
        "searchKey": "terik tec"
    },
    {
        "code": "twu",
        "name": "Termanu",
        "searchKey": "termanu twu"
    },
    {
        "code": "tft",
        "name": "Ternate",
        "searchKey": "ternate tft"
    },
    {
        "code": "tmg",
        "name": "Ternateño",
        "searchKey": "ternateno tmg"
    },
    {
        "code": "tkg",
        "name": "Tesaka Malagasy",
        "searchKey": "tesaka malagasy tkg"
    },
    {
        "code": "keg",
        "name": "Tese",
        "searchKey": "tese keg"
    },
    {
        "code": "twc",
        "name": "Teshenawa",
        "searchKey": "teshenawa twc"
    },
    {
        "code": "teo",
        "name": "Teso",
        "searchKey": "teso teo"
    },
    {
        "code": "tll",
        "name": "Tetela",
        "searchKey": "tetela tll"
    },
    {
        "code": "nhg",
        "name": "Tetelcingo Nahuatl",
        "searchKey": "tetelcingo nahuatl nhg"
    },
    {
        "code": "teb",
        "name": "Tetete",
        "searchKey": "tetete teb"
    },
    {
        "code": "tez",
        "name": "Tetserret",
        "searchKey": "tetserret tez"
    },
    {
        "code": "tet",
        "name": "Tetum",
        "searchKey": "tetum tet"
    },
    {
        "code": "tdt",
        "name": "Tetun Dili",
        "searchKey": "tetun dili tdt"
    },
    {
        "code": "tve",
        "name": "Te'un",
        "searchKey": "teun tve"
    },
    {
        "code": "cut",
        "name": "Teutila Cuicatec",
        "searchKey": "teutila cuicatec cut"
    },
    {
        "code": "twe",
        "name": "Tewa (Indonesia)",
        "searchNames": [
            "Tewa"
        ],
        "searchKey": "tewa indonesia twe tewa"
    },
    {
        "code": "tew",
        "name": "Tewa (USA)",
        "searchNames": [
            "Tewa"
        ],
        "searchKey": "tewa usa tew tewa"
    },
    {
        "code": "twx",
        "name": "Tewe",
        "searchKey": "tewe twx"
    },
    {
        "code": "otx",
        "name": "Texcatepec Otomi",
        "searchKey": "texcatepec otomi otx"
    },
    {
        "code": "poq",
        "name": "Texistepec Popoluca",
        "searchKey": "texistepec popoluca poq"
    },
    {
        "code": "zpz",
        "name": "Texmelucan Zapotec",
        "searchKey": "texmelucan zapotec zpz"
    },
    {
        "code": "mxb",
        "name": "Tezoatlán Mixtec",
        "searchKey": "tezoatlan mixtec mxb"
    },
    {
        "code": "thy",
        "name": "Tha",
        "searchKey": "tha thy"
    },
    {
        "code": "thn",
        "name": "Thachanadan",
        "searchKey": "thachanadan thn"
    },
    {
        "code": "tcz",
        "name": "Thado Chin",
        "searchKey": "thado chin tcz"
    },
    {
        "code": "tha",
        "name": "Thai",
        "searchKey": "thai tha"
    },
    {
        "code": "tsq",
        "name": "Thai Sign Language",
        "searchKey": "thai sign language tsq"
    },
    {
        "code": "soa",
        "name": "Thai Song",
        "searchKey": "thai song soa"
    },
    {
        "code": "cth",
        "name": "Thaiphum Chin",
        "searchKey": "thaiphum chin cth"
    },
    {
        "code": "ths",
        "name": "Thakali",
        "searchKey": "thakali ths"
    },
    {
        "code": "nki",
        "name": "Thangal Naga",
        "searchKey": "thangal naga nki"
    },
    {
        "code": "thf",
        "name": "Thangmi",
        "searchKey": "thangmi thf"
    },
    {
        "code": "ssf",
        "name": "Thao",
        "searchKey": "thao ssf"
    },
    {
        "code": "thk",
        "name": "Tharaka",
        "searchKey": "tharaka thk"
    },
    {
        "code": "xtv",
        "name": "Thawa",
        "searchKey": "thawa xtv"
    },
    {
        "code": "typ",
        "name": "Thaypan",
        "searchKey": "thaypan typ"
    },
    {
        "code": "iin",
        "name": "Thiin",
        "searchKey": "thiin iin"
    },
    {
        "code": "tou",
        "name": "Tho",
        "searchKey": "tho tou"
    },
    {
        "code": "thp",
        "name": "Thompson",
        "searchKey": "thompson thp"
    },
    {
        "code": "ytp",
        "name": "Thopho",
        "searchKey": "thopho ytp"
    },
    {
        "code": "txh",
        "name": "Thracian",
        "searchKey": "thracian txh"
    },
    {
        "code": "tyl",
        "name": "Thu Lao",
        "searchKey": "thu lao tyl"
    },
    {
        "code": "tdh",
        "name": "Thulung",
        "searchKey": "thulung tdh"
    },
    {
        "code": "lth",
        "name": "Thur",
        "searchKey": "thur lth"
    },
    {
        "code": "thu",
        "name": "Thuri",
        "searchKey": "thuri thu"
    },
    {
        "code": "ahi",
        "name": "Tiagbamrin Aizi",
        "searchKey": "tiagbamrin aizi ahi"
    },
    {
        "code": "mnl",
        "name": "Tiale",
        "searchKey": "tiale mnl"
    },
    {
        "code": "tbj",
        "name": "Tiang",
        "searchKey": "tiang tbj"
    },
    {
        "code": "ngy",
        "name": "Tibea",
        "searchKey": "tibea ngy"
    },
    {
        "code": "bod",
        "name": "Tibetan",
        "searchKey": "tibetan bod"
    },
    {
        "code": "lsn",
        "name": "Tibetan Sign Language",
        "searchKey": "tibetan sign language lsn"
    },
    {
        "code": "tcn",
        "name": "Tichurong",
        "searchKey": "tichurong tcn"
    },
    {
        "code": "tca",
        "name": "Ticuna",
        "searchKey": "ticuna tca"
    },
    {
        "code": "mtx",
        "name": "Tidaá Mixtec",
        "searchKey": "tidaa mixtec mtx"
    },
    {
        "code": "tia",
        "name": "Tidikelt Tamazight",
        "searchKey": "tidikelt tamazight tia"
    },
    {
        "code": "tvo",
        "name": "Tidore",
        "searchKey": "tidore tvo"
    },
    {
        "code": "tiq",
        "name": "Tiéfo",
        "searchKey": "tiefo tiq"
    },
    {
        "code": "boo",
        "name": "Tiemacèwè Bozo",
        "searchKey": "tiemacewe bozo boo"
    },
    {
        "code": "tii",
        "name": "Tiene",
        "searchKey": "tiene tii"
    },
    {
        "code": "boz",
        "name": "Tiéyaxo Bozo",
        "searchKey": "tieyaxo bozo boz"
    },
    {
        "code": "tif",
        "name": "Tifal",
        "searchKey": "tifal tif"
    },
    {
        "code": "tgc",
        "name": "Tigak",
        "searchKey": "tigak tgc"
    },
    {
        "code": "nza",
        "name": "Tigon Mbembe",
        "searchKey": "tigon mbembe nza"
    },
    {
        "code": "tig",
        "name": "Tigre",
        "searchKey": "tigre tig"
    },
    {
        "code": "tir",
        "name": "Tigrinya",
        "searchKey": "tigrinya tir"
    },
    {
        "code": "txq",
        "name": "Tii",
        "searchKey": "tii txq"
    },
    {
        "code": "xtl",
        "name": "Tijaltepec Mixtec",
        "searchKey": "tijaltepec mixtec xtl"
    },
    {
        "code": "tik",
        "name": "Tikar",
        "searchKey": "tikar tik"
    },
    {
        "code": "tkp",
        "name": "Tikopia",
        "searchKey": "tikopia tkp"
    },
    {
        "code": "otl",
        "name": "Tilapa Otomi",
        "searchKey": "tilapa otomi otl"
    },
    {
        "code": "til",
        "name": "Tillamook",
        "searchKey": "tillamook til"
    },
    {
        "code": "zts",
        "name": "Tilquiapan Zapotec",
        "searchKey": "tilquiapan zapotec zts"
    },
    {
        "code": "tij",
        "name": "Tilung",
        "searchKey": "tilung tij"
    },
    {
        "code": "tms",
        "name": "Tima",
        "searchKey": "tima tms"
    },
    {
        "code": "tim",
        "name": "Timbe",
        "searchKey": "timbe tim"
    },
    {
        "code": "tem",
        "name": "Timne",
        "searchKey": "timne tem"
    },
    {
        "code": "tvy",
        "name": "Timor Pidgin",
        "searchKey": "timor pidgin tvy"
    },
    {
        "code": "tjm",
        "name": "Timucua",
        "searchKey": "timucua tjm"
    },
    {
        "code": "tih",
        "name": "Timugon Murut",
        "searchKey": "timugon murut tih"
    },
    {
        "code": "lbf",
        "name": "Tinani",
        "searchKey": "tinani lbf"
    },
    {
        "code": "tin",
        "name": "Tindi",
        "searchKey": "tindi tin"
    },
    {
        "code": "tgv",
        "name": "Tingui-Boto",
        "searchKey": "tingui-boto tgv"
    },
    {
        "code": "tit",
        "name": "Tinigua",
        "searchKey": "tinigua tit"
    },
    {
        "code": "tpz",
        "name": "Tinputz",
        "searchKey": "tinputz tpz"
    },
    {
        "code": "tpe",
        "name": "Tippera",
        "searchKey": "tippera tpe"
    },
    {
        "code": "tic",
        "name": "Tira",
        "searchKey": "tira tic"
    },
    {
        "code": "tra",
        "name": "Tirahi",
        "searchKey": "tirahi tra"
    },
    {
        "code": "tde",
        "name": "Tiranige Diga Dogon",
        "searchKey": "tiranige diga dogon tde"
    },
    {
        "code": "cir",
        "name": "Tiri",
        "searchKey": "tiri cir"
    },
    {
        "code": "suq",
        "name": "Tirmaga-Chai Suri",
        "searchKey": "tirmaga-chai suri suq"
    },
    {
        "code": "tiy",
        "name": "Tiruray",
        "searchKey": "tiruray tiy"
    },
    {
        "code": "tdq",
        "name": "Tita",
        "searchKey": "tita tdq"
    },
    {
        "code": "ttv",
        "name": "Titan",
        "searchKey": "titan ttv"
    },
    {
        "code": "tiv",
        "name": "Tiv",
        "searchKey": "tiv"
    },
    {
        "code": "lax",
        "name": "Tiwa",
        "searchKey": "tiwa lax"
    },
    {
        "code": "tiw",
        "name": "Tiwi",
        "searchKey": "tiwi tiw"
    },
    {
        "code": "tyy",
        "name": "Tiyaa",
        "searchKey": "tiyaa tyy"
    },
    {
        "code": "tjj",
        "name": "Tjungundji",
        "searchKey": "tjungundji tjj"
    },
    {
        "code": "tjp",
        "name": "Tjupany",
        "searchKey": "tjupany tjp"
    },
    {
        "code": "tju",
        "name": "Tjurruru",
        "searchKey": "tjurruru tju"
    },
    {
        "code": "tpt",
        "name": "Tlachichilco Tepehua",
        "searchKey": "tlachichilco tepehua tpt"
    },
    {
        "code": "tpl",
        "name": "Tlacoapa Me'phaa",
        "searchKey": "tlacoapa mephaa tpl"
    },
    {
        "code": "ctl",
        "name": "Tlacoatzintepec Chinantec",
        "searchKey": "tlacoatzintepec chinantec ctl"
    },
    {
        "code": "zpk",
        "name": "Tlacolulita Zapotec",
        "searchKey": "tlacolulita zapotec zpk"
    },
    {
        "code": "mxp",
        "name": "Tlahuitoltepec Mixe",
        "searchKey": "tlahuitoltepec mixe mxp"
    },
    {
        "code": "nuz",
        "name": "Tlamacazapa Nahuatl",
        "searchKey": "tlamacazapa nahuatl nuz"
    },
    {
        "code": "mqh",
        "name": "Tlazoyaltepec Mixtec",
        "searchKey": "tlazoyaltepec mixtec mqh"
    },
    {
        "code": "dgr",
        "name": "Tlicho",
        "searchKey": "tlicho dgr"
    },
    {
        "code": "tli",
        "name": "Tlingit",
        "searchKey": "tlingit tli"
    },
    {
        "code": "toz",
        "name": "To",
        "searchKey": "to toz"
    },
    {
        "code": "mlu",
        "name": "To'abaita",
        "searchKey": "toabaita mlu"
    },
    {
        "code": "tqo",
        "name": "Toaripi",
        "searchKey": "toaripi tqo"
    },
    {
        "code": "tob",
        "name": "Toba",
        "searchKey": "toba tob"
    },
    {
        "code": "tgh",
        "name": "Tobagonian Creole English",
        "searchKey": "tobagonian creole english tgh"
    },
    {
        "code": "tmf",
        "name": "Toba-Maskoy",
        "searchKey": "toba-maskoy tmf"
    },
    {
        "code": "tng",
        "name": "Tobanga",
        "searchKey": "tobanga tng"
    },
    {
        "code": "tti",
        "name": "Tobati",
        "searchKey": "tobati tti"
    },
    {
        "code": "tlb",
        "name": "Tobelo",
        "searchKey": "tobelo tlb"
    },
    {
        "code": "tox",
        "name": "Tobian",
        "searchKey": "tobian tox"
    },
    {
        "code": "tgb",
        "name": "Tobilung",
        "searchKey": "tobilung tgb"
    },
    {
        "code": "tbv",
        "name": "Tobo",
        "searchKey": "tobo tbv"
    },
    {
        "code": "asu",
        "name": "Tocantins Asurini",
        "searchKey": "tocantins asurini asu"
    },
    {
        "code": "taz",
        "name": "Tocho",
        "searchKey": "tocho taz"
    },
    {
        "code": "tcx",
        "name": "Toda",
        "searchKey": "toda tcx"
    },
    {
        "code": "tdr",
        "name": "Todrah",
        "searchKey": "todrah tdr"
    },
    {
        "code": "tlg",
        "name": "Tofanma",
        "searchKey": "tofanma tlg"
    },
    {
        "code": "tfi",
        "name": "Tofin Gbe",
        "searchKey": "tofin gbe tfi"
    },
    {
        "code": "tor",
        "name": "Togbo-Vara Banda",
        "searchKey": "togbo-vara banda tor"
    },
    {
        "code": "tgy",
        "name": "Togoyo",
        "searchKey": "togoyo tgy"
    },
    {
        "code": "ood",
        "name": "Tohono O'odham",
        "searchKey": "tohono oodham ood"
    },
    {
        "code": "toj",
        "name": "Tojolabal",
        "searchKey": "tojolabal toj"
    },
    {
        "code": "tpi",
        "name": "Tok Pisin",
        "searchKey": "tok pisin tpi"
    },
    {
        "code": "zuh",
        "name": "Tokano",
        "searchKey": "tokano zuh"
    },
    {
        "code": "tkl",
        "name": "Tokelau",
        "searchKey": "tokelau tkl"
    },
    {
        "code": "xto",
        "name": "Tokharian A",
        "searchKey": "tokharian a xto"
    },
    {
        "code": "txb",
        "name": "Tokharian B",
        "searchKey": "tokharian b txb"
    },
    {
        "code": "tok",
        "name": "Toki Pona",
        "searchKey": "toki pona tok"
    },
    {
        "code": "tkn",
        "name": "Toku-No-Shima",
        "searchKey": "toku-no-shima tkn"
    },
    {
        "code": "jic",
        "name": "Tol",
        "searchKey": "tol jic"
    },
    {
        "code": "lbw",
        "name": "Tolaki",
        "searchKey": "tolaki lbw"
    },
    {
        "code": "tlm",
        "name": "Tolomako",
        "searchKey": "tolomako tlm"
    },
    {
        "code": "tol",
        "name": "Tolowa",
        "searchKey": "tolowa tol"
    },
    {
        "code": "tod",
        "name": "Toma",
        "searchKey": "toma tod"
    },
    {
        "code": "tdi",
        "name": "Tomadino",
        "searchKey": "tomadino tdi"
    },
    {
        "code": "ttp",
        "name": "Tombelala",
        "searchKey": "tombelala ttp"
    },
    {
        "code": "txa",
        "name": "Tombonuo",
        "searchKey": "tombonuo txa"
    },
    {
        "code": "tom",
        "name": "Tombulu",
        "searchKey": "tombulu tom"
    },
    {
        "code": "txm",
        "name": "Tomini",
        "searchKey": "tomini txm"
    },
    {
        "code": "dto",
        "name": "Tommo So Dogon",
        "searchKey": "tommo so dogon dto"
    },
    {
        "code": "dtm",
        "name": "Tomo Kan Dogon",
        "searchKey": "tomo kan dogon dtm"
    },
    {
        "code": "tqp",
        "name": "Tomoip",
        "searchKey": "tomoip tqp"
    },
    {
        "code": "tdn",
        "name": "Tondano",
        "searchKey": "tondano tdn"
    },
    {
        "code": "tst",
        "name": "Tondi Songway Kiini",
        "searchKey": "tondi songway kiini tst"
    },
    {
        "code": "tog",
        "name": "Tonga (Nyasa)",
        "searchNames": [
            "Tonga"
        ],
        "searchKey": "tonga nyasa tog tonga"
    },
    {
        "code": "ton",
        "name": "Tonga (Tonga Islands)",
        "searchNames": [
            "Tonga"
        ],
        "searchKey": "tonga tonga islands ton tonga"
    },
    {
        "code": "toi",
        "name": "Tonga (Zambia)",
        "searchNames": [
            "Tonga"
        ],
        "searchKey": "tonga zambia toi tonga"
    },
    {
        "code": "tny",
        "name": "Tongwe",
        "searchKey": "tongwe tny"
    },
    {
        "code": "tjn",
        "name": "Tonjon",
        "searchKey": "tonjon tjn"
    },
    {
        "code": "tqw",
        "name": "Tonkawa",
        "searchKey": "tonkawa tqw"
    },
    {
        "code": "tnw",
        "name": "Tonsawang",
        "searchKey": "tonsawang tnw"
    },
    {
        "code": "txs",
        "name": "Tonsea",
        "searchKey": "tonsea txs"
    },
    {
        "code": "tnt",
        "name": "Tontemboan",
        "searchKey": "tontemboan tnt"
    },
    {
        "code": "ttj",
        "name": "Tooro",
        "searchKey": "tooro ttj"
    },
    {
        "code": "toy",
        "name": "Topoiyo",
        "searchKey": "topoiyo toy"
    },
    {
        "code": "toq",
        "name": "Toposa",
        "searchKey": "toposa toq"
    },
    {
        "code": "trz",
        "name": "Torá",
        "searchKey": "tora trz"
    },
    {
        "code": "sda",
        "name": "Toraja-Sa'dan",
        "searchKey": "toraja-sadan sda"
    },
    {
        "code": "trj",
        "name": "Toram",
        "searchKey": "toram trj"
    },
    {
        "code": "ttu",
        "name": "Torau",
        "searchKey": "torau ttu"
    },
    {
        "code": "fit",
        "name": "Tornedalen Finnish",
        "searchKey": "tornedalen finnish fit"
    },
    {
        "code": "tdv",
        "name": "Toro",
        "searchKey": "toro tdv"
    },
    {
        "code": "dts",
        "name": "Toro So Dogon",
        "searchKey": "toro so dogon dts"
    },
    {
        "code": "dtt",
        "name": "Toro Tegu Dogon",
        "searchKey": "toro tegu dogon dtt"
    },
    {
        "code": "tno",
        "name": "Toromono",
        "searchKey": "toromono tno"
    },
    {
        "code": "tqr",
        "name": "Torona",
        "searchKey": "torona tqr"
    },
    {
        "code": "tcs",
        "name": "Torres Strait Creole",
        "searchKey": "torres strait creole tcs"
    },
    {
        "code": "tei",
        "name": "Torricelli",
        "searchKey": "torricelli tei"
    },
    {
        "code": "trw",
        "name": "Torwali",
        "searchKey": "torwali trw"
    },
    {
        "code": "als",
        "name": "Tosk Albanian",
        "searchKey": "tosk albanian als"
    },
    {
        "code": "ttl",
        "name": "Totela",
        "searchKey": "totela ttl"
    },
    {
        "code": "txo",
        "name": "Toto",
        "searchKey": "toto txo"
    },
    {
        "code": "txe",
        "name": "Totoli",
        "searchKey": "totoli txe"
    },
    {
        "code": "zph",
        "name": "Totomachapan Zapotec",
        "searchKey": "totomachapan zapotec zph"
    },
    {
        "code": "mto",
        "name": "Totontepec Mixe",
        "searchKey": "totontepec mixe mto"
    },
    {
        "code": "ttk",
        "name": "Totoro",
        "searchKey": "totoro ttk"
    },
    {
        "code": "tqu",
        "name": "Touo",
        "searchKey": "touo tqu"
    },
    {
        "code": "neb",
        "name": "Toura (Côte d'Ivoire)",
        "searchNames": [
            "Toura"
        ],
        "searchKey": "toura cote divoire neb toura"
    },
    {
        "code": "don",
        "name": "Toura (Papua New Guinea)",
        "searchNames": [
            "Toura"
        ],
        "searchKey": "toura papua new guinea don toura"
    },
    {
        "code": "ttn",
        "name": "Towei",
        "searchKey": "towei ttn"
    },
    {
        "code": "xtg",
        "name": "Transalpine Gaulish",
        "searchKey": "transalpine gaulish xtg"
    },
    {
        "code": "rmd",
        "name": "Traveller Danish",
        "searchKey": "traveller danish rmd"
    },
    {
        "code": "rmg",
        "name": "Traveller Norwegian",
        "searchKey": "traveller norwegian rmg"
    },
    {
        "code": "trl",
        "name": "Traveller Scottish",
        "searchKey": "traveller scottish trl"
    },
    {
        "code": "trm",
        "name": "Tregami",
        "searchKey": "tregami trm"
    },
    {
        "code": "tme",
        "name": "Tremembé",
        "searchKey": "tremembe tme"
    },
    {
        "code": "stg",
        "name": "Trieng",
        "searchKey": "trieng stg"
    },
    {
        "code": "tip",
        "name": "Trimuris",
        "searchKey": "trimuris tip"
    },
    {
        "code": "tgq",
        "name": "Tring",
        "searchKey": "tring tgq"
    },
    {
        "code": "trx",
        "name": "Tringgus-Sembaan Bidayuh",
        "searchKey": "tringgus-sembaan bidayuh trx"
    },
    {
        "code": "lst",
        "name": "Trinidad and Tobago Sign Language",
        "searchKey": "trinidad and tobago sign language lst"
    },
    {
        "code": "trf",
        "name": "Trinidadian Creole English",
        "searchKey": "trinidadian creole english trf"
    },
    {
        "code": "trn",
        "name": "Trinitario",
        "searchKey": "trinitario trn"
    },
    {
        "code": "tri",
        "name": "Trió",
        "searchKey": "trio tri"
    },
    {
        "code": "tka",
        "name": "Truká",
        "searchKey": "truka tka"
    },
    {
        "code": "tpy",
        "name": "Trumai",
        "searchKey": "trumai tpy"
    },
    {
        "code": "tsa",
        "name": "Tsaangi",
        "searchKey": "tsaangi tsa"
    },
    {
        "code": "tkr",
        "name": "Tsakhur",
        "searchKey": "tsakhur tkr"
    },
    {
        "code": "tsd",
        "name": "Tsakonian",
        "searchKey": "tsakonian tsd"
    },
    {
        "code": "kvz",
        "name": "Tsakwambo",
        "searchKey": "tsakwambo kvz"
    },
    {
        "code": "tsb",
        "name": "Tsamai",
        "searchKey": "tsamai tsb"
    },
    {
        "code": "huq",
        "name": "Tsat",
        "searchKey": "tsat huq"
    },
    {
        "code": "tsk",
        "name": "Tseku",
        "searchKey": "tseku tsk"
    },
    {
        "code": "txc",
        "name": "Tsetsaut",
        "searchKey": "tsetsaut txc"
    },
    {
        "code": "tsj",
        "name": "Tshangla",
        "searchKey": "tshangla tsj"
    },
    {
        "code": "kdl",
        "name": "Tsikimba",
        "searchKey": "tsikimba kdl"
    },
    {
        "code": "cas",
        "name": "Tsimané",
        "searchKey": "tsimane cas"
    },
    {
        "code": "xmw",
        "name": "Tsimihety Malagasy",
        "searchKey": "tsimihety malagasy xmw"
    },
    {
        "code": "tsi",
        "name": "Tsimshian",
        "searchKey": "tsimshian tsi"
    },
    {
        "code": "tsw",
        "name": "Tsishingini",
        "searchKey": "tsishingini tsw"
    },
    {
        "code": "ldp",
        "name": "Tso",
        "searchKey": "tso ldp"
    },
    {
        "code": "hio",
        "name": "Tsoa",
        "searchKey": "tsoa hio"
    },
    {
        "code": "tsv",
        "name": "Tsogo",
        "searchKey": "tsogo tsv"
    },
    {
        "code": "tso",
        "name": "Tsonga",
        "searchKey": "tsonga tso"
    },
    {
        "code": "lto",
        "name": "Tsotso",
        "searchKey": "tsotso lto"
    },
    {
        "code": "tsu",
        "name": "Tsou",
        "searchKey": "tsou tsu"
    },
    {
        "code": "cbq",
        "name": "Tsucuba",
        "searchKey": "tsucuba cbq"
    },
    {
        "code": "ttz",
        "name": "Tsum",
        "searchKey": "tsum ttz"
    },
    {
        "code": "tsl",
        "name": "Ts'ün-Lao",
        "searchKey": "tsun-lao tsl"
    },
    {
        "code": "srs",
        "name": "Tsuut'ina",
        "searchKey": "tsuutina srs"
    },
    {
        "code": "tvd",
        "name": "Tsuvadi",
        "searchKey": "tsuvadi tvd"
    },
    {
        "code": "tsh",
        "name": "Tsuvan",
        "searchKey": "tsuvan tsh"
    },
    {
        "code": "tsc",
        "name": "Tswa",
        "searchKey": "tswa tsc"
    },
    {
        "code": "tsn",
        "name": "Tswana",
        "searchKey": "tswana tsn"
    },
    {
        "code": "two",
        "name": "Tswapong",
        "searchKey": "tswapong two"
    },
    {
        "code": "mjg",
        "name": "Tu",
        "searchKey": "tu mjg"
    },
    {
        "code": "pmt",
        "name": "Tuamotuan",
        "searchKey": "tuamotuan pmt"
    },
    {
        "code": "tbu",
        "name": "Tubar",
        "searchKey": "tubar tbu"
    },
    {
        "code": "tub",
        "name": "Tübatulabal",
        "searchKey": "tubatulabal tub"
    },
    {
        "code": "tuo",
        "name": "Tucano",
        "searchKey": "tucano tuo"
    },
    {
        "code": "tuy",
        "name": "Tugen",
        "searchKey": "tugen tuy"
    },
    {
        "code": "tzn",
        "name": "Tugun",
        "searchKey": "tugun tzn"
    },
    {
        "code": "tvg",
        "name": "Tugunese",
        "searchKey": "tugunese tvg"
    },
    {
        "code": "tuj",
        "name": "Tugutil",
        "searchKey": "tugutil tuj"
    },
    {
        "code": "khc",
        "name": "Tukang Besi North",
        "searchKey": "tukang besi north khc"
    },
    {
        "code": "bhq",
        "name": "Tukang Besi South",
        "searchKey": "tukang besi south bhq"
    },
    {
        "code": "bag",
        "name": "Tuki",
        "searchKey": "tuki bag"
    },
    {
        "code": "tpq",
        "name": "Tukpa",
        "searchKey": "tukpa tpq"
    },
    {
        "code": "tkd",
        "name": "Tukudede",
        "searchKey": "tukudede tkd"
    },
    {
        "code": "tkf",
        "name": "Tukumanféd",
        "searchKey": "tukumanfed tkf"
    },
    {
        "code": "tul",
        "name": "Tula",
        "searchKey": "tula tul"
    },
    {
        "code": "tvi",
        "name": "Tulai",
        "searchKey": "tulai tvi"
    },
    {
        "code": "tlu",
        "name": "Tulehu",
        "searchKey": "tulehu tlu"
    },
    {
        "code": "tey",
        "name": "Tulishi",
        "searchKey": "tulishi tey"
    },
    {
        "code": "tcy",
        "name": "Tulu",
        "searchKey": "tulu tcy"
    },
    {
        "code": "rak",
        "name": "Tulu-Bohuai",
        "searchKey": "tulu-bohuai rak"
    },
    {
        "code": "iou",
        "name": "Tuma-Irumu",
        "searchKey": "tuma-irumu iou"
    },
    {
        "code": "tmc",
        "name": "Tumak",
        "searchKey": "tumak tmc"
    },
    {
        "code": "krt",
        "name": "Tumari Kanuri",
        "searchKey": "tumari kanuri krt"
    },
    {
        "code": "tum",
        "name": "Tumbuka",
        "searchKey": "tumbuka tum"
    },
    {
        "code": "kku",
        "name": "Tumi",
        "searchKey": "tumi kku"
    },
    {
        "code": "tmq",
        "name": "Tumleo",
        "searchKey": "tumleo tmq"
    },
    {
        "code": "xtq",
        "name": "Tumshuqese",
        "searchKey": "tumshuqese xtq"
    },
    {
        "code": "tbr",
        "name": "Tumtum",
        "searchKey": "tumtum tbr"
    },
    {
        "code": "sil",
        "name": "Tumulung Sisaala",
        "searchKey": "tumulung sisaala sil"
    },
    {
        "code": "mzb",
        "name": "Tumzabt",
        "searchKey": "tumzabt mzb"
    },
    {
        "code": "enh",
        "name": "Tundra Enets",
        "searchKey": "tundra enets enh"
    },
    {
        "code": "tvu",
        "name": "Tunen",
        "searchKey": "tunen tvu"
    },
    {
        "code": "lcm",
        "name": "Tungag",
        "searchKey": "tungag lcm"
    },
    {
        "code": "trt",
        "name": "Tunggare",
        "searchKey": "tunggare trt"
    },
    {
        "code": "tug",
        "name": "Tunia",
        "searchKey": "tunia tug"
    },
    {
        "code": "tun",
        "name": "Tunica",
        "searchKey": "tunica tun"
    },
    {
        "code": "aeb",
        "name": "Tunisian Arabic",
        "searchKey": "tunisian arabic aeb"
    },
    {
        "code": "tse",
        "name": "Tunisian Sign Language",
        "searchKey": "tunisian sign language tse"
    },
    {
        "code": "tjg",
        "name": "Tunjung",
        "searchKey": "tunjung tjg"
    },
    {
        "code": "tqq",
        "name": "Tunni",
        "searchKey": "tunni tqq"
    },
    {
        "code": "dza",
        "name": "Tunzu",
        "searchKey": "tunzu dza"
    },
    {
        "code": "ttf",
        "name": "Tuotomb",
        "searchKey": "tuotomb ttf"
    },
    {
        "code": "tpr",
        "name": "Tuparí",
        "searchKey": "tupari tpr"
    },
    {
        "code": "tpn",
        "name": "Tupinambá",
        "searchKey": "tupinamba tpn"
    },
    {
        "code": "tpk",
        "name": "Tupinikin",
        "searchKey": "tupinikin tpk"
    },
    {
        "code": "tui",
        "name": "Tupuri",
        "searchKey": "tupuri tui"
    },
    {
        "code": "trh",
        "name": "Turaka",
        "searchKey": "turaka trh"
    },
    {
        "code": "trd",
        "name": "Turi",
        "searchKey": "turi trd"
    },
    {
        "code": "twt",
        "name": "Turiwára",
        "searchKey": "turiwara twt"
    },
    {
        "code": "tuz",
        "name": "Turka",
        "searchKey": "turka tuz"
    },
    {
        "code": "tuv",
        "name": "Turkana",
        "searchKey": "turkana tuv"
    },
    {
        "code": "tur",
        "name": "Turkish",
        "searchKey": "turkish tur"
    },
    {
        "code": "tsm",
        "name": "Turkish Sign Language",
        "searchKey": "turkish sign language tsm"
    },
    {
        "code": "tuk",
        "name": "Turkmen",
        "displayName": "Turkmen",
        "alternateNames": [
            "Türkmen"
        ],
        "countries": [
            "Turkmenistan",
            "Afghanistan",
            "Iran"
        ],
        "script": "Latin",
        "searchKey": "turkmen tuk"
    },
    {
        "code": "tch",
        "name": "Turks And Caicos Creole English",
        "searchKey": "turks and caicos creole english tch"
    },
    {
        "code": "tru",
        "name": "Turoyo",
        "searchKey": "turoyo tru"
    },
    {
        "code": "tqm",
        "name": "Turumsa",
        "searchKey": "turumsa tqm"
    },
    {
        "code": "try",
        "name": "Turung",
        "searchKey": "turung try"
    },
    {
        "code": "tus",
        "name": "Tuscarora",
        "searchKey": "tuscarora tus"
    },
    {
        "code": "tta",
        "name": "Tutelo",
        "searchKey": "tutelo tta"
    },
    {
        "code": "ttg",
        "name": "Tutong",
        "searchKey": "tutong ttg"
    },
    {
        "code": "tvt",
        "name": "Tutsa Naga",
        "searchKey": "tutsa naga tvt"
    },
    {
        "code": "tmi",
        "name": "Tutuba",
        "searchKey": "tutuba tmi"
    },
    {
        "code": "mtu",
        "name": "Tututepec Mixtec",
        "searchKey": "tututepec mixtec mtu"
    },
    {
        "code": "tuu",
        "name": "Tututni",
        "searchKey": "tututni tuu"
    },
    {
        "code": "tvl",
        "name": "Tuvalu",
        "searchKey": "tuvalu tvl"
    },
    {
        "code": "tyv",
        "name": "Tuvinian",
        "searchKey": "tuvinian tyv"
    },
    {
        "code": "ifk",
        "name": "Tuwali Ifugao",
        "searchKey": "tuwali ifugao ifk"
    },
    {
        "code": "tww",
        "name": "Tuwari",
        "searchKey": "tuwari tww"
    },
    {
        "code": "bov",
        "name": "Tuwuli",
        "searchKey": "tuwuli bov"
    },
    {
        "code": "tud",
        "name": "Tuxá",
        "searchKey": "tuxa tud"
    },
    {
        "code": "tux",
        "name": "Tuxináwa",
        "searchKey": "tuxinawa tux"
    },
    {
        "code": "tue",
        "name": "Tuyuca",
        "searchKey": "tuyuca tue"
    },
    {
        "code": "twa",
        "name": "Twana",
        "searchKey": "twana twa"
    },
    {
        "code": "twn",
        "name": "Twendi",
        "searchKey": "twendi twn"
    },
    {
        "code": "twd",
        "name": "Twents",
        "searchKey": "twents twd"
    },
    {
        "code": "twi",
        "name": "Twi",
        "searchKey": "twi"
    },
    {
        "code": "kcg",
        "name": "Tyap",
        "searchKey": "tyap kcg"
    },
    {
        "code": "tzh",
        "name": "Tzeltal",
        "searchKey": "tzeltal tzh"
    },
    {
        "code": "tzo",
        "name": "Tzotzil",
        "searchKey": "tzotzil tzo"
    },
    {
        "code": "tzj",
        "name": "Tz'utujil",
        "searchKey": "tzutujil tzj"
    },
    {
        "code": "uuu",
        "name": "U",
        "searchKey": "u uuu"
    },
    {
        "code": "aoz",
        "name": "Uab Meto",
        "searchKey": "uab meto aoz"
    },
    {
        "code": "uam",
        "name": "Uamué",
        "searchKey": "uamue uam"
    },
    {
        "code": "ksj",
        "name": "Uare",
        "searchKey": "uare ksj"
    },
    {
        "code": "byc",
        "name": "Ubaghara",
        "searchKey": "ubaghara byc"
    },
    {
        "code": "uba",
        "name": "Ubang",
        "searchKey": "ubang uba"
    },
    {
        "code": "ubi",
        "name": "Ubi",
        "searchKey": "ubi"
    },
    {
        "code": "ubr",
        "name": "Ubir",
        "searchKey": "ubir ubr"
    },
    {
        "code": "uby",
        "name": "Ubykh",
        "searchKey": "ubykh uby"
    },
    {
        "code": "cpb",
        "name": "Ucayali-Yurúa Ashéninka",
        "searchKey": "ucayali-yurua asheninka cpb"
    },
    {
        "code": "uda",
        "name": "Uda",
        "searchKey": "uda"
    },
    {
        "code": "udi",
        "name": "Udi",
        "searchKey": "udi"
    },
    {
        "code": "ude",
        "name": "Udihe",
        "searchKey": "udihe ude"
    },
    {
        "code": "udm",
        "name": "Udmurt",
        "searchKey": "udmurt udm"
    },
    {
        "code": "udu",
        "name": "Uduk",
        "searchKey": "uduk udu"
    },
    {
        "code": "ufi",
        "name": "Ufim",
        "searchKey": "ufim ufi"
    },
    {
        "code": "ugn",
        "name": "Ugandan Sign Language",
        "searchKey": "ugandan sign language ugn"
    },
    {
        "code": "uga",
        "name": "Ugaritic",
        "searchKey": "ugaritic uga"
    },
    {
        "code": "uge",
        "name": "Ughele",
        "searchKey": "ughele uge"
    },
    {
        "code": "ugo",
        "name": "Ugong",
        "searchKey": "ugong ugo"
    },
    {
        "code": "uha",
        "name": "Uhami",
        "searchKey": "uhami uha"
    },
    {
        "code": "uig",
        "name": "Uighur",
        "searchKey": "uighur uig"
    },
    {
        "code": "uis",
        "name": "Uisai",
        "searchKey": "uisai uis"
    },
    {
        "code": "udj",
        "name": "Ujir",
        "searchKey": "ujir udj"
    },
    {
        "code": "kcf",
        "name": "Ukaan",
        "searchKey": "ukaan kcf"
    },
    {
        "code": "ukh",
        "name": "Ukhwejo",
        "searchKey": "ukhwejo ukh"
    },
    {
        "code": "umi",
        "name": "Ukit",
        "searchKey": "ukit umi"
    },
    {
        "code": "ukp",
        "name": "Ukpe-Bayobiri",
        "searchKey": "ukpe-bayobiri ukp"
    },
    {
        "code": "akd",
        "name": "Ukpet-Ehom",
        "searchKey": "ukpet-ehom akd"
    },
    {
        "code": "ukr",
        "name": "Ukrainian",
        "searchKey": "ukrainian ukr"
    },
    {
        "code": "ukl",
        "name": "Ukrainian Sign Language",
        "searchKey": "ukrainian sign language ukl"
    },
    {
        "code": "uku",
        "name": "Ukue",
        "searchKey": "ukue uku"
    },
    {
        "code": "ukg",
        "name": "Ukuriguma",
        "searchKey": "ukuriguma ukg"
    },
    {
        "code": "ukq",
        "name": "Ukwa",
        "searchKey": "ukwa ukq"
    },
    {
        "code": "ukw",
        "name": "Ukwuani-Aboh-Ndoni",
        "searchKey": "ukwuani-aboh-ndoni ukw"
    },
    {
        "code": "svb",
        "name": "Ulau-Suain",
        "searchKey": "ulau-suain svb"
    },
    {
        "code": "ulc",
        "name": "Ulch",
        "searchKey": "ulch ulc"
    },
    {
        "code": "uli",
        "name": "Ulithian",
        "searchKey": "ulithian uli"
    },
    {
        "code": "ull",
        "name": "Ullatan",
        "searchKey": "ullatan ull"
    },
    {
        "code": "ulb",
        "name": "Ulukwumi",
        "searchKey": "ulukwumi ulb"
    },
    {
        "code": "ulm",
        "name": "Ulumanda'",
        "searchKey": "ulumanda ulm"
    },
    {
        "code": "ulw",
        "name": "Ulwa",
        "searchKey": "ulwa ulw"
    },
    {
        "code": "ppk",
        "name": "Uma",
        "searchKey": "uma ppk"
    },
    {
        "code": "xky",
        "name": "Uma' Lasan",
        "searchKey": "uma lasan xky"
    },
    {
        "code": "ulu",
        "name": "Uma' Lung",
        "searchKey": "uma lung ulu"
    },
    {
        "code": "gdn",
        "name": "Umanakaina",
        "searchKey": "umanakaina gdn"
    },
    {
        "code": "uma",
        "name": "Umatilla",
        "searchKey": "umatilla uma"
    },
    {
        "code": "umd",
        "name": "Umbindhamu",
        "searchKey": "umbindhamu umd"
    },
    {
        "code": "xum",
        "name": "Umbrian",
        "searchKey": "umbrian xum"
    },
    {
        "code": "umr",
        "name": "Umbugarla",
        "searchKey": "umbugarla umr"
    },
    {
        "code": "umb",
        "name": "Umbundu",
        "searchKey": "umbundu umb"
    },
    {
        "code": "ubu",
        "name": "Umbu-Ungu",
        "searchKey": "umbu-ungu ubu"
    },
    {
        "code": "sju",
        "name": "Ume Sami",
        "searchKey": "ume sami sju"
    },
    {
        "code": "upi",
        "name": "Umeda",
        "searchKey": "umeda upi"
    },
    {
        "code": "xud",
        "name": "Umiida",
        "searchKey": "umiida xud"
    },
    {
        "code": "due",
        "name": "Umiray Dumaget Agta",
        "searchKey": "umiray dumaget agta due"
    },
    {
        "code": "umm",
        "name": "Umon",
        "searchKey": "umon umm"
    },
    {
        "code": "umo",
        "name": "Umotína",
        "searchKey": "umotina umo"
    },
    {
        "code": "ump",
        "name": "Umpila",
        "searchKey": "umpila ump"
    },
    {
        "code": "mtg",
        "name": "Una",
        "searchKey": "una mtg"
    },
    {
        "code": "unm",
        "name": "Unami",
        "searchKey": "unami unm"
    },
    {
        "code": "mis",
        "name": "Uncoded languages",
        "searchKey": "uncoded languages mis"
    },
    {
        "code": "unz",
        "name": "Unde Kaili",
        "searchKey": "unde kaili unz"
    },
    {
        "code": "und",
        "name": "Undetermined",
        "searchKey": "undetermined und"
    },
    {
        "code": "bbn",
        "name": "Uneapa",
        "searchKey": "uneapa bbn"
    },
    {
        "code": "une",
        "name": "Uneme",
        "searchKey": "uneme une"
    },
    {
        "code": "xun",
        "name": "Unggaranggu",
        "searchKey": "unggaranggu xun"
    },
    {
        "code": "xgu",
        "name": "Unggumi",
        "searchKey": "unggumi xgu"
    },
    {
        "code": "uni",
        "name": "Uni",
        "searchKey": "uni"
    },
    {
        "code": "uln",
        "name": "Unserdeutsch",
        "searchKey": "unserdeutsch uln"
    },
    {
        "code": "onu",
        "name": "Unua",
        "searchKey": "unua onu"
    },
    {
        "code": "unu",
        "name": "Unubahe",
        "searchKey": "unubahe unu"
    },
    {
        "code": "cjh",
        "name": "Upper Chehalis",
        "searchKey": "upper chehalis cjh"
    },
    {
        "code": "dna",
        "name": "Upper Grand Valley Dani",
        "searchKey": "upper grand valley dani dna"
    },
    {
        "code": "pov",
        "name": "Upper Guinea Crioulo",
        "searchKey": "upper guinea crioulo pov"
    },
    {
        "code": "dmg",
        "name": "Upper Kinabatangan",
        "searchKey": "upper kinabatangan dmg"
    },
    {
        "code": "kuu",
        "name": "Upper Kuskokwim",
        "searchKey": "upper kuskokwim kuu"
    },
    {
        "code": "tku",
        "name": "Upper Necaxa Totonac",
        "searchKey": "upper necaxa totonac tku"
    },
    {
        "code": "sxu",
        "name": "Upper Saxon",
        "searchKey": "upper saxon sxu"
    },
    {
        "code": "hsb",
        "name": "Upper Sorbian",
        "searchKey": "upper sorbian hsb"
    },
    {
        "code": "tau",
        "name": "Upper Tanana",
        "searchKey": "upper tanana tau"
    },
    {
        "code": "tth",
        "name": "Upper Ta'oih",
        "searchKey": "upper taoih tth"
    },
    {
        "code": "tov",
        "name": "Upper Taromi",
        "searchKey": "upper taromi tov"
    },
    {
        "code": "xup",
        "name": "Upper Umpqua",
        "searchKey": "upper umpqua xup"
    },
    {
        "code": "uro",
        "name": "Ura (Papua New Guinea)",
        "searchNames": [
            "Ura"
        ],
        "searchKey": "ura papua new guinea uro ura"
    },
    {
        "code": "uur",
        "name": "Ura (Vanuatu)",
        "searchNames": [
            "Ura"
        ],
        "searchKey": "ura vanuatu uur ura"
    },
    {
        "code": "urf",
        "name": "Uradhi",
        "searchKey": "uradhi urf"
    },
    {
        "code": "urk",
        "name": "Urak Lawoi'",
        "searchKey": "urak lawoi urk"
    },
    {
        "code": "url",
        "name": "Urali",
        "searchKey": "urali url"
    },
    {
        "code": "urm",
        "name": "Urapmin",
        "searchKey": "urapmin urm"
    },
    {
        "code": "ura",
        "name": "Urarina",
        "searchKey": "urarina ura"
    },
    {
        "code": "xur",
        "name": "Urartian",
        "searchKey": "urartian xur"
    },
    {
        "code": "urt",
        "name": "Urat",
        "searchKey": "urat urt"
    },
    {
        "code": "urd",
        "name": "Urdu",
        "searchKey": "urdu urd"
    },
    {
        "code": "urh",
        "name": "Urhobo",
        "searchKey": "urhobo urh"
    },
    {
        "code": "uvh",
        "name": "Uri",
        "searchKey": "uri uvh"
    },
    {
        "code": "urg",
        "name": "Urigina",
        "searchKey": "urigina urg"
    },
    {
        "code": "uri",
        "name": "Urim",
        "searchKey": "urim uri"
    },
    {
        "code": "urx",
        "name": "Urimo",
        "searchKey": "urimo urx"
    },
    {
        "code": "upv",
        "name": "Uripiv-Wala-Rano-Atchin",
        "searchKey": "uripiv-wala-rano-atchin upv"
    },
    {
        "code": "urc",
        "name": "Urningangg",
        "searchKey": "urningangg urc"
    },
    {
        "code": "ure",
        "name": "Uru",
        "searchKey": "uru ure"
    },
    {
        "code": "urn",
        "name": "Uruangnirin",
        "searchKey": "uruangnirin urn"
    },
    {
        "code": "urv",
        "name": "Uruava",
        "searchKey": "uruava urv"
    },
    {
        "code": "urb",
        "name": "Urubú-Kaapor",
        "searchKey": "urubu-kaapor urb"
    },
    {
        "code": "uks",
        "name": "Urubú-Kaapor Sign Language",
        "searchKey": "urubu-kaapor sign language uks"
    },
    {
        "code": "urz",
        "name": "Uru-Eu-Wau-Wau",
        "searchKey": "uru-eu-wau-wau urz"
    },
    {
        "code": "ugy",
        "name": "Uruguayan Sign Language",
        "searchKey": "uruguayan sign language ugy"
    },
    {
        "code": "uum",
        "name": "Urum",
        "searchKey": "urum uum"
    },
    {
        "code": "uru",
        "name": "Urumi",
        "searchKey": "urumi uru"
    },
    {
        "code": "urp",
        "name": "Uru-Pa-In",
        "searchKey": "uru-pa-in urp"
    },
    {
        "code": "usk",
        "name": "Usaghade",
        "searchKey": "usaghade usk"
    },
    {
        "code": "wnu",
        "name": "Usan",
        "searchKey": "usan wnu"
    },
    {
        "code": "usa",
        "name": "Usarufa",
        "searchKey": "usarufa usa"
    },
    {
        "code": "ush",
        "name": "Ushojo",
        "searchKey": "ushojo ush"
    },
    {
        "code": "cuc",
        "name": "Usila Chinantec",
        "searchKey": "usila chinantec cuc"
    },
    {
        "code": "ulf",
        "name": "Usku",
        "searchKey": "usku ulf"
    },
    {
        "code": "usp",
        "name": "Uspanteco",
        "searchKey": "uspanteco usp"
    },
    {
        "code": "uss",
        "name": "us-Saare",
        "searchKey": "us-saare uss"
    },
    {
        "code": "usi",
        "name": "Usui",
        "searchKey": "usui usi"
    },
    {
        "code": "omo",
        "name": "Utarmbung",
        "searchKey": "utarmbung omo"
    },
    {
        "code": "ute",
        "name": "Ute-Southern Paiute",
        "searchKey": "ute-southern paiute ute"
    },
    {
        "code": "uth",
        "name": "ut-Hun",
        "searchKey": "ut-hun uth"
    },
    {
        "code": "gel",
        "name": "ut-Ma'in",
        "searchKey": "ut-main gel"
    },
    {
        "code": "utu",
        "name": "Utu",
        "searchKey": "utu"
    },
    {
        "code": "evh",
        "name": "Uvbie",
        "searchKey": "uvbie evh"
    },
    {
        "code": "usu",
        "name": "Uya",
        "searchKey": "uya usu"
    },
    {
        "code": "duk",
        "name": "Uyajitaya",
        "searchKey": "uyajitaya duk"
    },
    {
        "code": "uzb",
        "name": "Uzbek",
        "searchKey": "uzbek uzb"
    },
    {
        "code": "auz",
        "name": "Uzbeki Arabic",
        "searchKey": "uzbeki arabic auz"
    },
    {
        "code": "eze",
        "name": "Uzekwe",
        "searchKey": "uzekwe eze"
    },
    {
        "code": "vaa",
        "name": "Vaagri Booli",
        "searchKey": "vaagri booli vaa"
    },
    {
        "code": "vaf",
        "name": "Vafsi",
        "searchKey": "vafsi vaf"
    },
    {
        "code": "vgr",
        "name": "Vaghri",
        "searchKey": "vaghri vgr"
    },
    {
        "code": "tva",
        "name": "Vaghua",
        "searchKey": "vaghua tva"
    },
    {
        "code": "vag",
        "name": "Vagla",
        "searchKey": "vagla vag"
    },
    {
        "code": "vai",
        "name": "Vai",
        "searchKey": "vai"
    },
    {
        "code": "vap",
        "name": "Vaiphei",
        "searchKey": "vaiphei vap"
    },
    {
        "code": "vae",
        "name": "Vale",
        "searchKey": "vale vae"
    },
    {
        "code": "vsv",
        "name": "Valencian Sign Language",
        "searchKey": "valencian sign language vsv"
    },
    {
        "code": "cvn",
        "name": "Valle Nacional Chinantec",
        "searchKey": "valle nacional chinantec cvn"
    },
    {
        "code": "vmv",
        "name": "Valley Maidu",
        "searchKey": "valley maidu vmv"
    },
    {
        "code": "van",
        "name": "Valman",
        "searchKey": "valman van"
    },
    {
        "code": "vlp",
        "name": "Valpei",
        "searchKey": "valpei vlp"
    },
    {
        "code": "mkt",
        "name": "Vamale",
        "searchKey": "vamale mkt"
    },
    {
        "code": "mlr",
        "name": "Vame",
        "searchKey": "vame mlr"
    },
    {
        "code": "xvn",
        "name": "Vandalic",
        "searchKey": "vandalic xvn"
    },
    {
        "code": "mpr",
        "name": "Vangunu",
        "searchKey": "vangunu mpr"
    },
    {
        "code": "vam",
        "name": "Vanimo",
        "searchKey": "vanimo vam"
    },
    {
        "code": "vnk",
        "name": "Vano",
        "searchKey": "vano vnk"
    },
    {
        "code": "vau",
        "name": "Vanuma",
        "searchKey": "vanuma vau"
    },
    {
        "code": "vao",
        "name": "Vao",
        "searchKey": "vao"
    },
    {
        "code": "vah",
        "name": "Varhadi-Nagpuri",
        "searchKey": "varhadi-nagpuri vah"
    },
    {
        "code": "vrs",
        "name": "Varisi",
        "searchKey": "varisi vrs"
    },
    {
        "code": "vav",
        "name": "Varli",
        "searchKey": "varli vav"
    },
    {
        "code": "vas",
        "name": "Vasavi",
        "searchKey": "vasavi vas"
    },
    {
        "code": "ved",
        "name": "Veddah",
        "searchKey": "veddah ved"
    },
    {
        "code": "vsn",
        "name": "Vedic Sanskrit",
        "searchKey": "vedic sanskrit vsn"
    },
    {
        "code": "val",
        "name": "Vehes",
        "searchKey": "vehes val"
    },
    {
        "code": "vel",
        "name": "Veluws",
        "searchKey": "veluws vel"
    },
    {
        "code": "vem",
        "name": "Vemgo-Mabas",
        "searchKey": "vemgo-mabas vem"
    },
    {
        "code": "ven",
        "name": "Venda",
        "searchKey": "venda ven"
    },
    {
        "code": "vec",
        "name": "Venetian",
        "searchKey": "venetian vec"
    },
    {
        "code": "xve",
        "name": "Venetic",
        "searchKey": "venetic xve"
    },
    {
        "code": "vsl",
        "name": "Venezuelan Sign Language",
        "searchKey": "venezuelan sign language vsl"
    },
    {
        "code": "bav",
        "name": "Vengo",
        "searchKey": "vengo bav"
    },
    {
        "code": "veo",
        "name": "Ventureño",
        "searchKey": "ventureno veo"
    },
    {
        "code": "vep",
        "name": "Veps",
        "searchKey": "veps vep"
    },
    {
        "code": "vra",
        "name": "Vera'a",
        "searchKey": "veraa vra"
    },
    {
        "code": "xvs",
        "name": "Vestinian",
        "searchKey": "vestinian xvs"
    },
    {
        "code": "vid",
        "name": "Vidunda",
        "searchKey": "vidunda vid"
    },
    {
        "code": "vig",
        "name": "Viemo",
        "searchKey": "viemo vig"
    },
    {
        "code": "vie",
        "name": "Vietnamese",
        "searchKey": "vietnamese vie"
    },
    {
        "code": "vil",
        "name": "Vilela",
        "searchKey": "vilela vil"
    },
    {
        "code": "vif",
        "name": "Vili",
        "searchKey": "vili vif"
    },
    {
        "code": "dyg",
        "name": "Villa Viciosa Agta",
        "searchKey": "villa viciosa agta dyg"
    },
    {
        "code": "svc",
        "name": "Vincentian Creole English",
        "searchKey": "vincentian creole english svc"
    },
    {
        "code": "vnm",
        "name": "Vinmavis",
        "searchKey": "vinmavis vnm"
    },
    {
        "code": "vin",
        "name": "Vinza",
        "searchKey": "vinza vin"
    },
    {
        "code": "vic",
        "name": "Virgin Islands Creole English",
        "searchKey": "virgin islands creole english vic"
    },
    {
        "code": "vis",
        "name": "Vishavan",
        "searchKey": "vishavan vis"
    },
    {
        "code": "vit",
        "name": "Viti",
        "searchKey": "viti vit"
    },
    {
        "code": "vto",
        "name": "Vitou",
        "searchKey": "vitou vto"
    },
    {
        "code": "wiv",
        "name": "Vitu",
        "searchKey": "vitu wiv"
    },
    {
        "code": "vls",
        "name": "Vlaams",
        "searchKey": "vlaams vls"
    },
    {
        "code": "vgt",
        "name": "Vlaamse Gebarentaal",
        "searchKey": "vlaamse gebarentaal vgt"
    },
    {
        "code": "rmy",
        "name": "Vlax Romani",
        "searchKey": "vlax romani rmy"
    },
    {
        "code": "vol",
        "name": "Volapük",
        "searchKey": "volapuk vol"
    },
    {
        "code": "xvo",
        "name": "Volscian",
        "searchKey": "volscian xvo"
    },
    {
        "code": "kch",
        "name": "Vono",
        "searchKey": "vono kch"
    },
    {
        "code": "vor",
        "name": "Voro",
        "searchKey": "voro vor"
    },
    {
        "code": "vro",
        "name": "Võro",
        "searchKey": "voro vro"
    },
    {
        "code": "vot",
        "name": "Votic",
        "searchKey": "votic vot"
    },
    {
        "code": "vum",
        "name": "Vumbu",
        "searchKey": "vumbu vum"
    },
    {
        "code": "vnp",
        "name": "Vunapu",
        "searchKey": "vunapu vnp"
    },
    {
        "code": "vun",
        "name": "Vunjo",
        "searchKey": "vunjo vun"
    },
    {
        "code": "msn",
        "name": "Vurës",
        "searchKey": "vures msn"
    },
    {
        "code": "vut",
        "name": "Vute",
        "searchKey": "vute vut"
    },
    {
        "code": "wbi",
        "name": "Vwanji",
        "searchKey": "vwanji wbi"
    },
    {
        "code": "wbm",
        "name": "Wa",
        "searchKey": "wa wbm"
    },
    {
        "code": "wwa",
        "name": "Waama",
        "searchKey": "waama wwa"
    },
    {
        "code": "wmn",
        "name": "Waamwang",
        "searchKey": "waamwang wmn"
    },
    {
        "code": "ssn",
        "name": "Waata",
        "searchKey": "waata ssn"
    },
    {
        "code": "wbb",
        "name": "Wabo",
        "searchKey": "wabo wbb"
    },
    {
        "code": "kmx",
        "name": "Waboda",
        "searchKey": "waboda kmx"
    },
    {
        "code": "wci",
        "name": "Waci Gbe",
        "searchKey": "waci gbe wci"
    },
    {
        "code": "wdg",
        "name": "Wadaginam",
        "searchKey": "wadaginam wdg"
    },
    {
        "code": "wbq",
        "name": "Waddar",
        "searchKey": "waddar wbq"
    },
    {
        "code": "xwd",
        "name": "Wadi Wadi",
        "searchKey": "wadi wadi xwd"
    },
    {
        "code": "wdk",
        "name": "Wadikali",
        "searchKey": "wadikali wdk"
    },
    {
        "code": "kxp",
        "name": "Wadiyara Koli",
        "searchKey": "wadiyara koli kxp"
    },
    {
        "code": "wdy",
        "name": "Wadjabangayi",
        "searchKey": "wadjabangayi wdy"
    },
    {
        "code": "wdj",
        "name": "Wadjiginy",
        "searchKey": "wadjiginy wdj"
    },
    {
        "code": "wdu",
        "name": "Wadjigu",
        "searchKey": "wadjigu wdu"
    },
    {
        "code": "wrx",
        "name": "Wae Rana",
        "searchKey": "wae rana wrx"
    },
    {
        "code": "wag",
        "name": "Wa'ema",
        "searchKey": "waema wag"
    },
    {
        "code": "waj",
        "name": "Waffa",
        "searchKey": "waffa waj"
    },
    {
        "code": "wgb",
        "name": "Wagawaga",
        "searchKey": "wagawaga wgb"
    },
    {
        "code": "wga",
        "name": "Wagaya",
        "searchKey": "wagaya wga"
    },
    {
        "code": "wbr",
        "name": "Wagdi",
        "searchKey": "wagdi wbr"
    },
    {
        "code": "fad",
        "name": "Wagi",
        "searchKey": "wagi fad"
    },
    {
        "code": "waq",
        "name": "Wagiman",
        "searchKey": "wagiman waq"
    },
    {
        "code": "whu",
        "name": "Wahau Kayan",
        "searchKey": "wahau kayan whu"
    },
    {
        "code": "whk",
        "name": "Wahau Kenyah",
        "searchKey": "wahau kenyah whk"
    },
    {
        "code": "wgi",
        "name": "Wahgi",
        "searchKey": "wahgi wgi"
    },
    {
        "code": "wbk",
        "name": "Waigali",
        "searchKey": "waigali wbk"
    },
    {
        "code": "wgo",
        "name": "Waigeo",
        "searchKey": "waigeo wgo"
    },
    {
        "code": "wlk",
        "name": "Wailaki",
        "searchKey": "wailaki wlk"
    },
    {
        "code": "wlr",
        "name": "Wailapa",
        "searchKey": "wailapa wlr"
    },
    {
        "code": "rro",
        "name": "Waima",
        "searchKey": "waima rro"
    },
    {
        "code": "wmh",
        "name": "Waima'a",
        "searchKey": "waimaa wmh"
    },
    {
        "code": "bao",
        "name": "Waimaha",
        "searchKey": "waimaha bao"
    },
    {
        "code": "atr",
        "name": "Waimiri-Atroari",
        "searchKey": "waimiri-atroari atr"
    },
    {
        "code": "wli",
        "name": "Waioli",
        "searchKey": "waioli wli"
    },
    {
        "code": "waw",
        "name": "Waiwai",
        "searchKey": "waiwai waw"
    },
    {
        "code": "wja",
        "name": "Waja",
        "searchKey": "waja wja"
    },
    {
        "code": "wbv",
        "name": "Wajarri",
        "searchKey": "wajarri wbv"
    },
    {
        "code": "xwj",
        "name": "Wajuk",
        "searchKey": "wajuk xwj"
    },
    {
        "code": "wav",
        "name": "Waka",
        "searchKey": "waka wav"
    },
    {
        "code": "wwb",
        "name": "Wakabunga",
        "searchKey": "wakabunga wwb"
    },
    {
        "code": "wkw",
        "name": "Wakawaka",
        "searchKey": "wakawaka wkw"
    },
    {
        "code": "wkd",
        "name": "Wakde",
        "searchKey": "wakde wkd"
    },
    {
        "code": "wbl",
        "name": "Wakhi",
        "searchKey": "wakhi wbl"
    },
    {
        "code": "waf",
        "name": "Wakoná",
        "searchKey": "wakona waf"
    },
    {
        "code": "lgl",
        "name": "Wala",
        "searchKey": "wala lgl"
    },
    {
        "code": "wlw",
        "name": "Walak",
        "searchKey": "walak wlw"
    },
    {
        "code": "nlw",
        "name": "Walangama",
        "searchKey": "walangama nlw"
    },
    {
        "code": "wlx",
        "name": "Wali (Ghana)",
        "searchNames": [
            "Wali"
        ],
        "searchKey": "wali ghana wlx wali"
    },
    {
        "code": "wll",
        "name": "Wali (Sudan)",
        "searchNames": [
            "Wali"
        ],
        "searchKey": "wali sudan wll wali"
    },
    {
        "code": "wly",
        "name": "Waling",
        "searchKey": "waling wly"
    },
    {
        "code": "wla",
        "name": "Walio",
        "searchKey": "walio wla"
    },
    {
        "code": "waa",
        "name": "Walla Walla",
        "searchKey": "walla walla waa"
    },
    {
        "code": "wls",
        "name": "Wallisian",
        "searchKey": "wallisian wls"
    },
    {
        "code": "wln",
        "name": "Walloon",
        "searchKey": "walloon wln"
    },
    {
        "code": "wmt",
        "name": "Walmajarri",
        "searchKey": "walmajarri wmt"
    },
    {
        "code": "wae",
        "name": "Walser",
        "searchKey": "walser wae"
    },
    {
        "code": "ola",
        "name": "Walungge",
        "searchKey": "walungge ola"
    },
    {
        "code": "wrb",
        "name": "Waluwarra",
        "searchKey": "waluwarra wrb"
    },
    {
        "code": "wmc",
        "name": "Wamas",
        "searchKey": "wamas wmc"
    },
    {
        "code": "wmb",
        "name": "Wambaya",
        "searchKey": "wambaya wmb"
    },
    {
        "code": "wms",
        "name": "Wambon",
        "searchKey": "wambon wms"
    },
    {
        "code": "wme",
        "name": "Wambule",
        "searchKey": "wambule wme"
    },
    {
        "code": "wad",
        "name": "Wamesa",
        "searchKey": "wamesa wad"
    },
    {
        "code": "cou",
        "name": "Wamey",
        "searchKey": "wamey cou"
    },
    {
        "code": "wmi",
        "name": "Wamin",
        "searchKey": "wamin wmi"
    },
    {
        "code": "wam",
        "name": "Wampanoag",
        "searchKey": "wampanoag wam"
    },
    {
        "code": "lbq",
        "name": "Wampar",
        "searchKey": "wampar lbq"
    },
    {
        "code": "waz",
        "name": "Wampur",
        "searchKey": "wampur waz"
    },
    {
        "code": "wan",
        "name": "Wan",
        "searchKey": "wan"
    },
    {
        "code": "wnp",
        "name": "Wanap",
        "searchKey": "wanap wnp"
    },
    {
        "code": "nnp",
        "name": "Wancho Naga",
        "searchKey": "wancho naga nnp"
    },
    {
        "code": "wbh",
        "name": "Wanda",
        "searchKey": "wanda wbh"
    },
    {
        "code": "mfi",
        "name": "Wandala",
        "searchKey": "wandala mfi"
    },
    {
        "code": "wnd",
        "name": "Wandarang",
        "searchKey": "wandarang wnd"
    },
    {
        "code": "wdd",
        "name": "Wandji",
        "searchKey": "wandji wdd"
    },
    {
        "code": "hwa",
        "name": "Wané",
        "searchKey": "wane hwa"
    },
    {
        "code": "wne",
        "name": "Waneci",
        "searchKey": "waneci wne"
    },
    {
        "code": "lwg",
        "name": "Wanga",
        "searchKey": "wanga lwg"
    },
    {
        "code": "wyb",
        "name": "Wangaaybuwan-Ngiyambaa",
        "searchKey": "wangaaybuwan-ngiyambaa wyb"
    },
    {
        "code": "wnm",
        "name": "Wanggamala",
        "searchKey": "wanggamala wnm"
    },
    {
        "code": "wng",
        "name": "Wanggom",
        "searchKey": "wanggom wng"
    },
    {
        "code": "wgg",
        "name": "Wangkangurru",
        "searchKey": "wangkangurru wgg"
    },
    {
        "code": "wky",
        "name": "Wangkayutyuru",
        "searchKey": "wangkayutyuru wky"
    },
    {
        "code": "xwk",
        "name": "Wangkumara",
        "searchKey": "wangkumara xwk"
    },
    {
        "code": "jub",
        "name": "Wannu",
        "searchKey": "wannu jub"
    },
    {
        "code": "wno",
        "name": "Wano",
        "searchKey": "wano wno"
    },
    {
        "code": "wnc",
        "name": "Wantoat",
        "searchKey": "wantoat wnc"
    },
    {
        "code": "wnk",
        "name": "Wanukaka",
        "searchKey": "wanukaka wnk"
    },
    {
        "code": "wny",
        "name": "Wanyi",
        "searchKey": "wanyi wny"
    },
    {
        "code": "auc",
        "name": "Waorani",
        "searchKey": "waorani auc"
    },
    {
        "code": "juk",
        "name": "Wapan",
        "searchKey": "wapan juk"
    },
    {
        "code": "juw",
        "name": "Wãpha",
        "searchKey": "wapha juw"
    },
    {
        "code": "wap",
        "name": "Wapishana",
        "searchKey": "wapishana wap"
    },
    {
        "code": "wao",
        "name": "Wappo",
        "searchKey": "wappo wao"
    },
    {
        "code": "wbf",
        "name": "Wara",
        "searchKey": "wara wbf"
    },
    {
        "code": "tci",
        "name": "Wára",
        "searchKey": "wara tci"
    },
    {
        "code": "wba",
        "name": "Warao",
        "searchKey": "warao wba"
    },
    {
        "code": "wrz",
        "name": "Waray (Australia)",
        "searchNames": [
            "Waray"
        ],
        "searchKey": "waray australia wrz waray"
    },
    {
        "code": "war",
        "name": "Waray (Philippines)",
        "searchNames": [
            "Waray"
        ],
        "searchKey": "waray philippines war waray"
    },
    {
        "code": "wrr",
        "name": "Wardaman",
        "searchKey": "wardaman wrr"
    },
    {
        "code": "wxw",
        "name": "Wardandi",
        "searchKey": "wardandi wxw"
    },
    {
        "code": "wsa",
        "name": "Warembori",
        "searchKey": "warembori wsa"
    },
    {
        "code": "wai",
        "name": "Wares",
        "searchKey": "wares wai"
    },
    {
        "code": "wrs",
        "name": "Waris",
        "searchKey": "waris wrs"
    },
    {
        "code": "wbe",
        "name": "Waritai",
        "searchKey": "waritai wbe"
    },
    {
        "code": "wri",
        "name": "Wariyangga",
        "searchKey": "wariyangga wri"
    },
    {
        "code": "aml",
        "name": "War-Jaintia",
        "searchKey": "war-jaintia aml"
    },
    {
        "code": "wji",
        "name": "Warji",
        "searchKey": "warji wji"
    },
    {
        "code": "bgv",
        "name": "Warkay-Bipim",
        "searchKey": "warkay-bipim bgv"
    },
    {
        "code": "wrl",
        "name": "Warlmanpa",
        "searchKey": "warlmanpa wrl"
    },
    {
        "code": "wbp",
        "name": "Warlpiri",
        "searchKey": "warlpiri wbp"
    },
    {
        "code": "wrn",
        "name": "Warnang",
        "searchKey": "warnang wrn"
    },
    {
        "code": "wbt",
        "name": "Warnman",
        "searchKey": "warnman wbt"
    },
    {
        "code": "wrp",
        "name": "Waropen",
        "searchKey": "waropen wrp"
    },
    {
        "code": "wgy",
        "name": "Warrgamay",
        "searchKey": "warrgamay wgy"
    },
    {
        "code": "wwr",
        "name": "Warrwa",
        "searchKey": "warrwa wwr"
    },
    {
        "code": "wru",
        "name": "Waru",
        "searchKey": "waru wru"
    },
    {
        "code": "wrm",
        "name": "Warumungu",
        "searchKey": "warumungu wrm"
    },
    {
        "code": "wrv",
        "name": "Waruna",
        "searchKey": "waruna wrv"
    },
    {
        "code": "wrg",
        "name": "Warungu",
        "searchKey": "warungu wrg"
    },
    {
        "code": "hrw",
        "name": "Warwar Feni",
        "searchKey": "warwar feni hrw"
    },
    {
        "code": "wss",
        "name": "Wasa",
        "searchKey": "wasa wss"
    },
    {
        "code": "wac",
        "name": "Wasco-Wishram",
        "searchKey": "wasco-wishram wac"
    },
    {
        "code": "gsp",
        "name": "Wasembo",
        "searchKey": "wasembo gsp"
    },
    {
        "code": "was",
        "name": "Washo",
        "searchKey": "washo was"
    },
    {
        "code": "wsk",
        "name": "Waskia",
        "searchKey": "waskia wsk"
    },
    {
        "code": "wsu",
        "name": "Wasu",
        "searchKey": "wasu wsu"
    },
    {
        "code": "wtk",
        "name": "Watakataui",
        "searchKey": "watakataui wtk"
    },
    {
        "code": "wax",
        "name": "Watam",
        "searchKey": "watam wax"
    },
    {
        "code": "wth",
        "name": "Wathawurrung",
        "searchKey": "wathawurrung wth"
    },
    {
        "code": "wtf",
        "name": "Watiwa",
        "searchKey": "watiwa wtf"
    },
    {
        "code": "wah",
        "name": "Watubela",
        "searchKey": "watubela wah"
    },
    {
        "code": "kop",
        "name": "Waube",
        "searchKey": "waube kop"
    },
    {
        "code": "wau",
        "name": "Waurá",
        "searchKey": "waura wau"
    },
    {
        "code": "wuy",
        "name": "Wauyai",
        "searchKey": "wauyai wuy"
    },
    {
        "code": "www",
        "name": "Wawa",
        "searchKey": "wawa www"
    },
    {
        "code": "wow",
        "name": "Wawonii",
        "searchKey": "wawonii wow"
    },
    {
        "code": "wxa",
        "name": "Waxianghua",
        "searchKey": "waxianghua wxa"
    },
    {
        "code": "oym",
        "name": "Wayampi",
        "searchKey": "wayampi oym"
    },
    {
        "code": "way",
        "name": "Wayana",
        "searchKey": "wayana way"
    },
    {
        "code": "ctt",
        "name": "Wayanad Chetti",
        "searchKey": "wayanad chetti ctt"
    },
    {
        "code": "wyr",
        "name": "Wayoró",
        "searchKey": "wayoro wyr"
    },
    {
        "code": "vay",
        "name": "Wayu",
        "searchKey": "wayu vay"
    },
    {
        "code": "guc",
        "name": "Wayuu",
        "searchKey": "wayuu guc"
    },
    {
        "code": "wob",
        "name": "Wè Northern",
        "searchKey": "we northern wob"
    },
    {
        "code": "gxx",
        "name": "Wè Southern",
        "searchKey": "we southern gxx"
    },
    {
        "code": "wec",
        "name": "Wè Western",
        "searchKey": "we western wec"
    },
    {
        "code": "wed",
        "name": "Wedau",
        "searchKey": "wedau wed"
    },
    {
        "code": "weh",
        "name": "Weh",
        "searchKey": "weh"
    },
    {
        "code": "wew",
        "name": "Wejewa",
        "searchKey": "wejewa wew"
    },
    {
        "code": "wlh",
        "name": "Welaun",
        "searchKey": "welaun wlh"
    },
    {
        "code": "klh",
        "name": "Weliki",
        "searchKey": "weliki klh"
    },
    {
        "code": "cym",
        "name": "Welsh",
        "searchKey": "welsh cym"
    },
    {
        "code": "rmw",
        "name": "Welsh Romani",
        "searchKey": "welsh romani rmw"
    },
    {
        "code": "weo",
        "name": "Wemale",
        "searchKey": "wemale weo"
    },
    {
        "code": "xww",
        "name": "Wemba Wemba",
        "searchKey": "wemba wemba xww"
    },
    {
        "code": "wem",
        "name": "Weme Gbe",
        "searchKey": "weme gbe wem"
    },
    {
        "code": "wdt",
        "name": "Wendat",
        "searchKey": "wendat wdt"
    },
    {
        "code": "weg",
        "name": "Wergaia",
        "searchKey": "wergaia weg"
    },
    {
        "code": "wer",
        "name": "Weri",
        "searchKey": "weri wer"
    },
    {
        "code": "kvw",
        "name": "Wersing",
        "searchKey": "wersing kvw"
    },
    {
        "code": "fbl",
        "name": "West Albay Bikol",
        "searchKey": "west albay bikol fbl"
    },
    {
        "code": "nnd",
        "name": "West Ambae",
        "searchKey": "west ambae nnd"
    },
    {
        "code": "wbs",
        "name": "West Bengal Sign Language",
        "searchKey": "west bengal sign language wbs"
    },
    {
        "code": "zbw",
        "name": "West Berawan",
        "searchKey": "west berawan zbw"
    },
    {
        "code": "bbp",
        "name": "West Central Banda",
        "searchKey": "west central banda bbp"
    },
    {
        "code": "gaz",
        "name": "West Central Oromo",
        "searchKey": "west central oromo gaz"
    },
    {
        "code": "bdr",
        "name": "West Coast Bajau",
        "searchKey": "west coast bajau bdr"
    },
    {
        "code": "drn",
        "name": "West Damar",
        "searchKey": "west damar drn"
    },
    {
        "code": "ddi",
        "name": "West Goodenough",
        "searchKey": "west goodenough ddi"
    },
    {
        "code": "kew",
        "name": "West Kewa",
        "searchKey": "west kewa kew"
    },
    {
        "code": "lmj",
        "name": "West Lembata",
        "searchKey": "west lembata lmj"
    },
    {
        "code": "mqs",
        "name": "West Makian",
        "searchKey": "west makian mqs"
    },
    {
        "code": "mss",
        "name": "West Masela",
        "searchKey": "west masela mss"
    },
    {
        "code": "txn",
        "name": "West Tarangan",
        "searchKey": "west tarangan txn"
    },
    {
        "code": "uve",
        "name": "West Uvean",
        "searchKey": "west uvean uve"
    },
    {
        "code": "ybe",
        "name": "West Yugur",
        "searchKey": "west yugur ybe"
    },
    {
        "code": "lia",
        "name": "West-Central Limba",
        "searchKey": "west-central limba lia"
    },
    {
        "code": "abe",
        "name": "Western Abnaki",
        "searchKey": "western abnaki abe"
    },
    {
        "code": "apw",
        "name": "Western Apache",
        "searchKey": "western apache apw"
    },
    {
        "code": "hyw",
        "name": "Western Armenian",
        "searchKey": "western armenian hyw"
    },
    {
        "code": "are",
        "name": "Western Arrarnta",
        "searchKey": "western arrarnta are"
    },
    {
        "code": "bgn",
        "name": "Western Balochi",
        "searchKey": "western balochi bgn"
    },
    {
        "code": "gnw",
        "name": "Western Bolivian Guaraní",
        "searchKey": "western bolivian guarani gnw"
    },
    {
        "code": "brv",
        "name": "Western Bru",
        "searchKey": "western bru brv"
    },
    {
        "code": "mbb",
        "name": "Western Bukidnon Manobo",
        "searchKey": "western bukidnon manobo mbb"
    },
    {
        "code": "cja",
        "name": "Western Cham",
        "searchKey": "western cham cja"
    },
    {
        "code": "dnw",
        "name": "Western Dani",
        "searchKey": "western dani dnw"
    },
    {
        "code": "azn",
        "name": "Western Durango Nahuatl",
        "searchKey": "western durango nahuatl azn"
    },
    {
        "code": "wyy",
        "name": "Western Fijian",
        "searchKey": "western fijian wyy"
    },
    {
        "code": "fry",
        "name": "Western Frisian",
        "searchKey": "western frisian fry"
    },
    {
        "code": "ctp",
        "name": "Western Highland Chatino",
        "searchKey": "western highland chatino ctp"
    },
    {
        "code": "pua",
        "name": "Western Highland Purepecha",
        "searchKey": "western highland purepecha pua"
    },
    {
        "code": "nhw",
        "name": "Western Huasteca Nahuatl",
        "searchKey": "western huasteca nahuatl nhw"
    },
    {
        "code": "jmx",
        "name": "Western Juxtlahuaca Mixtec",
        "searchKey": "western juxtlahuaca mixtec jmx"
    },
    {
        "code": "knj",
        "name": "Western Kanjobal",
        "searchKey": "western kanjobal knj"
    },
    {
        "code": "kza",
        "name": "Western Karaboro",
        "searchKey": "western karaboro kza"
    },
    {
        "code": "kuf",
        "name": "Western Katu",
        "searchKey": "western katu kuf"
    },
    {
        "code": "kyu",
        "name": "Western Kayah",
        "searchKey": "western kayah kyu"
    },
    {
        "code": "kjq",
        "name": "Western Keres",
        "searchKey": "western keres kjq"
    },
    {
        "code": "krw",
        "name": "Western Krahn",
        "searchKey": "western krahn krw"
    },
    {
        "code": "ywl",
        "name": "Western Lalu",
        "searchKey": "western lalu ywl"
    },
    {
        "code": "lcp",
        "name": "Western Lawa",
        "searchKey": "western lawa lcp"
    },
    {
        "code": "mlq",
        "name": "Western Maninkakan",
        "searchKey": "western maninkakan mlq"
    },
    {
        "code": "mrj",
        "name": "Western Mari",
        "searchKey": "western mari mrj"
    },
    {
        "code": "hmw",
        "name": "Western Mashan Hmong",
        "searchKey": "western mashan hmong hmw"
    },
    {
        "code": "raf",
        "name": "Western Meohang",
        "searchKey": "western meohang raf"
    },
    {
        "code": "wmg",
        "name": "Western Minyag",
        "searchKey": "western minyag wmg"
    },
    {
        "code": "mut",
        "name": "Western Muria",
        "searchKey": "western muria mut"
    },
    {
        "code": "amw",
        "name": "Western Neo-Aramaic",
        "searchKey": "western neo-aramaic amw"
    },
    {
        "code": "fuh",
        "name": "Western Niger Fulfulde",
        "searchKey": "western niger fulfulde fuh"
    },
    {
        "code": "ojw",
        "name": "Western Ojibwa",
        "searchKey": "western ojibwa ojw"
    },
    {
        "code": "pnb",
        "name": "Western Panjabi",
        "searchKey": "western panjabi pnb"
    },
    {
        "code": "kjl",
        "name": "Western Parbate Kham",
        "searchKey": "western parbate kham kjl"
    },
    {
        "code": "pne",
        "name": "Western Penan",
        "searchKey": "western penan pne"
    },
    {
        "code": "ssl",
        "name": "Western Sisaala",
        "searchKey": "western sisaala ssl"
    },
    {
        "code": "suc",
        "name": "Western Subanon",
        "searchKey": "western subanon suc"
    },
    {
        "code": "tdg",
        "name": "Western Tamang",
        "searchKey": "western tamang tdg"
    },
    {
        "code": "twb",
        "name": "Western Tawbuid",
        "searchKey": "western tawbuid twb"
    },
    {
        "code": "zab",
        "name": "Western Tlacolula Valley Zapotec",
        "searchKey": "western tlacolula valley zapotec zab"
    },
    {
        "code": "tqt",
        "name": "Western Totonac",
        "searchKey": "western totonac tqt"
    },
    {
        "code": "tnb",
        "name": "Western Tunebo",
        "searchKey": "western tunebo tnb"
    },
    {
        "code": "mmr",
        "name": "Western Xiangxi Miao",
        "searchKey": "western xiangxi miao mmr"
    },
    {
        "code": "xwl",
        "name": "Western Xwla Gbe",
        "searchKey": "western xwla gbe xwl"
    },
    {
        "code": "yih",
        "name": "Western Yiddish",
        "searchKey": "western yiddish yih"
    },
    {
        "code": "wep",
        "name": "Westphalien",
        "searchKey": "westphalien wep"
    },
    {
        "code": "wwo",
        "name": "Wetamut",
        "searchKey": "wetamut wwo"
    },
    {
        "code": "wea",
        "name": "Wewaw",
        "searchKey": "wewaw wea"
    },
    {
        "code": "woy",
        "name": "Weyto",
        "searchKey": "weyto woy"
    },
    {
        "code": "giw",
        "name": "White Gelao",
        "searchKey": "white gelao giw"
    },
    {
        "code": "lwh",
        "name": "White Lachi",
        "searchKey": "white lachi lwh"
    },
    {
        "code": "tnp",
        "name": "Whitesands",
        "searchKey": "whitesands tnp"
    },
    {
        "code": "tua",
        "name": "Wiarumus",
        "searchKey": "wiarumus tua"
    },
    {
        "code": "mzh",
        "name": "Wichí Lhamtés Güisnay",
        "searchKey": "wichi lhamtes guisnay mzh"
    },
    {
        "code": "mtp",
        "name": "Wichí Lhamtés Nocten",
        "searchKey": "wichi lhamtes nocten mtp"
    },
    {
        "code": "wlv",
        "name": "Wichí Lhamtés Vejoz",
        "searchKey": "wichi lhamtes vejoz wlv"
    },
    {
        "code": "wic",
        "name": "Wichita",
        "searchKey": "wichita wic"
    },
    {
        "code": "wig",
        "name": "Wik Ngathan",
        "searchKey": "wik ngathan wig"
    },
    {
        "code": "wik",
        "name": "Wikalkan",
        "searchKey": "wikalkan wik"
    },
    {
        "code": "wie",
        "name": "Wik-Epa",
        "searchKey": "wik-epa wie"
    },
    {
        "code": "wij",
        "name": "Wik-Iiyanh",
        "searchKey": "wik-iiyanh wij"
    },
    {
        "code": "wif",
        "name": "Wik-Keyangan",
        "searchKey": "wik-keyangan wif"
    },
    {
        "code": "wih",
        "name": "Wik-Me'anha",
        "searchKey": "wik-meanha wih"
    },
    {
        "code": "wim",
        "name": "Wik-Mungkan",
        "searchKey": "wik-mungkan wim"
    },
    {
        "code": "wua",
        "name": "Wikngenchera",
        "searchKey": "wikngenchera wua"
    },
    {
        "code": "wil",
        "name": "Wilawila",
        "searchKey": "wilawila wil"
    },
    {
        "code": "wnw",
        "name": "Wintu",
        "searchKey": "wintu wnw"
    },
    {
        "code": "kst",
        "name": "Winyé",
        "searchKey": "winye kst"
    },
    {
        "code": "gdr",
        "name": "Wipi",
        "searchKey": "wipi gdr"
    },
    {
        "code": "wrh",
        "name": "Wiradjuri",
        "searchKey": "wiradjuri wrh"
    },
    {
        "code": "wir",
        "name": "Wiraféd",
        "searchKey": "wirafed wir"
    },
    {
        "code": "wgu",
        "name": "Wirangu",
        "searchKey": "wirangu wgu"
    },
    {
        "code": "wiu",
        "name": "Wiru",
        "searchKey": "wiru wiu"
    },
    {
        "code": "wiy",
        "name": "Wiyot",
        "searchKey": "wiyot wiy"
    },
    {
        "code": "xwc",
        "name": "Woccon",
        "searchKey": "woccon xwc"
    },
    {
        "code": "wog",
        "name": "Wogamusin",
        "searchKey": "wogamusin wog"
    },
    {
        "code": "woc",
        "name": "Wogeo",
        "searchKey": "wogeo woc"
    },
    {
        "code": "wbw",
        "name": "Woi",
        "searchKey": "woi wbw"
    },
    {
        "code": "wyi",
        "name": "Woiwurrung",
        "searchKey": "woiwurrung wyi"
    },
    {
        "code": "jod",
        "name": "Wojenaka",
        "searchKey": "wojenaka jod"
    },
    {
        "code": "wle",
        "name": "Wolane",
        "searchKey": "wolane wle"
    },
    {
        "code": "wod",
        "name": "Wolani",
        "searchKey": "wolani wod"
    },
    {
        "code": "wal",
        "name": "Wolaytta",
        "searchKey": "wolaytta wal"
    },
    {
        "code": "woe",
        "name": "Woleaian",
        "searchKey": "woleaian woe"
    },
    {
        "code": "wlo",
        "name": "Wolio",
        "searchKey": "wolio wlo"
    },
    {
        "code": "wol",
        "name": "Wolof",
        "searchKey": "wolof wol"
    },
    {
        "code": "wom",
        "name": "Wom (Nigeria)",
        "searchNames": [
            "Wom"
        ],
        "searchKey": "wom nigeria wom"
    },
    {
        "code": "wmo",
        "name": "Wom (Papua New Guinea)",
        "searchNames": [
            "Wom"
        ],
        "searchKey": "wom papua new guinea wmo wom"
    },
    {
        "code": "wmx",
        "name": "Womo",
        "searchKey": "womo wmx"
    },
    {
        "code": "won",
        "name": "Wongo",
        "searchKey": "wongo won"
    },
    {
        "code": "cwd",
        "name": "Woods Cree",
        "searchKey": "woods cree cwd"
    },
    {
        "code": "wor",
        "name": "Woria",
        "searchKey": "woria wor"
    },
    {
        "code": "kda",
        "name": "Worimi",
        "searchKey": "worimi kda"
    },
    {
        "code": "jud",
        "name": "Worodougou",
        "searchKey": "worodougou jud"
    },
    {
        "code": "wro",
        "name": "Worrorra",
        "searchKey": "worrorra wro"
    },
    {
        "code": "wsv",
        "name": "Wotapuri-Katarqalai",
        "searchKey": "wotapuri-katarqalai wsv"
    },
    {
        "code": "xwt",
        "name": "Wotjobaluk",
        "searchKey": "wotjobaluk xwt"
    },
    {
        "code": "wtw",
        "name": "Wotu",
        "searchKey": "wotu wtw"
    },
    {
        "code": "noa",
        "name": "Woun Meu",
        "searchKey": "woun meu noa"
    },
    {
        "code": "xwo",
        "name": "Written Oirat",
        "searchKey": "written oirat xwo"
    },
    {
        "code": "wuu",
        "name": "Wu Chinese",
        "searchKey": "wu chinese wuu"
    },
    {
        "code": "ywq",
        "name": "Wuding-Luquan Yi",
        "searchKey": "wuding-luquan yi ywq"
    },
    {
        "code": "wud",
        "name": "Wudu",
        "searchKey": "wudu wud"
    },
    {
        "code": "wlu",
        "name": "Wuliwuli",
        "searchKey": "wuliwuli wlu"
    },
    {
        "code": "wux",
        "name": "Wulna",
        "searchKey": "wulna wux"
    },
    {
        "code": "bqm",
        "name": "Wumboko",
        "searchKey": "wumboko bqm"
    },
    {
        "code": "wum",
        "name": "Wumbvu",
        "searchKey": "wumbvu wum"
    },
    {
        "code": "ywu",
        "name": "Wumeng Nasu",
        "searchKey": "wumeng nasu ywu"
    },
    {
        "code": "bwn",
        "name": "Wunai Bunu",
        "searchKey": "wunai bunu bwn"
    },
    {
        "code": "wub",
        "name": "Wunambal",
        "searchKey": "wunambal wub"
    },
    {
        "code": "wnn",
        "name": "Wunumara",
        "searchKey": "wunumara wnn"
    },
    {
        "code": "wur",
        "name": "Wurrugu",
        "searchKey": "wurrugu wur"
    },
    {
        "code": "yig",
        "name": "Wusa Nasu",
        "searchKey": "wusa nasu yig"
    },
    {
        "code": "bse",
        "name": "Wushi",
        "searchKey": "wushi bse"
    },
    {
        "code": "wsi",
        "name": "Wusi",
        "searchKey": "wusi wsi"
    },
    {
        "code": "wut",
        "name": "Wutung",
        "searchKey": "wutung wut"
    },
    {
        "code": "wuh",
        "name": "Wutunhua",
        "searchKey": "wutunhua wuh"
    },
    {
        "code": "wuv",
        "name": "Wuvulu-Aua",
        "searchKey": "wuvulu-aua wuv"
    },
    {
        "code": "udl",
        "name": "Wuzlam",
        "searchKey": "wuzlam udl"
    },
    {
        "code": "wyn",
        "name": "Wyandot",
        "searchKey": "wyandot wyn"
    },
    {
        "code": "wym",
        "name": "Wymysorys",
        "searchKey": "wymysorys wym"
    },
    {
        "code": "kao",
        "name": "Xaasongaxango",
        "searchKey": "xaasongaxango kao"
    },
    {
        "code": "zax",
        "name": "Xadani Zapotec",
        "searchKey": "xadani zapotec zax"
    },
    {
        "code": "xkr",
        "name": "Xakriabá",
        "searchKey": "xakriaba xkr"
    },
    {
        "code": "xan",
        "name": "Xamtanga",
        "searchKey": "xamtanga xan"
    },
    {
        "code": "ztg",
        "name": "Xanaguía Zapotec",
        "searchKey": "xanaguia zapotec ztg"
    },
    {
        "code": "ane",
        "name": "Xârâcùù",
        "searchKey": "xaracuu ane"
    },
    {
        "code": "axx",
        "name": "Xârâgurè",
        "searchKey": "xaragure axx"
    },
    {
        "code": "xav",
        "name": "Xavánte",
        "searchKey": "xavante xav"
    },
    {
        "code": "xer",
        "name": "Xerénte",
        "searchKey": "xerente xer"
    },
    {
        "code": "xet",
        "name": "Xetá",
        "searchKey": "xeta xet"
    },
    {
        "code": "xho",
        "name": "Xhosa",
        "searchKey": "xhosa xho"
    },
    {
        "code": "hsn",
        "name": "Xiang Chinese",
        "searchKey": "xiang chinese hsn"
    },
    {
        "code": "sjo",
        "name": "Xibe",
        "searchKey": "xibe sjo"
    },
    {
        "code": "too",
        "name": "Xicotepec De Juárez Totonac",
        "searchKey": "xicotepec de juarez totonac too"
    },
    {
        "code": "xin",
        "name": "Xinca",
        "searchKey": "xinca xin"
    },
    {
        "code": "asn",
        "name": "Xingú Asuriní",
        "searchKey": "xingu asurini asn"
    },
    {
        "code": "xiy",
        "name": "Xipaya",
        "searchKey": "xipaya xiy"
    },
    {
        "code": "xii",
        "name": "Xiri",
        "searchKey": "xiri xii"
    },
    {
        "code": "xir",
        "name": "Xiriâna",
        "searchKey": "xiriana xir"
    },
    {
        "code": "ywt",
        "name": "Xishanba Lalo",
        "searchKey": "xishanba lalo ywt"
    },
    {
        "code": "xok",
        "name": "Xokleng",
        "searchKey": "xokleng xok"
    },
    {
        "code": "xoo",
        "name": "Xukurú",
        "searchKey": "xukuru xoo"
    },
    {
        "code": "xwe",
        "name": "Xwela Gbe",
        "searchKey": "xwela gbe xwe"
    },
    {
        "code": "muu",
        "name": "Yaaku",
        "searchKey": "yaaku muu"
    },
    {
        "code": "ybn",
        "name": "Yabaâna",
        "searchKey": "yabaana ybn"
    },
    {
        "code": "yar",
        "name": "Yabarana",
        "searchKey": "yabarana yar"
    },
    {
        "code": "jae",
        "name": "Yabem",
        "searchKey": "yabem jae"
    },
    {
        "code": "ybm",
        "name": "Yaben",
        "searchKey": "yaben ybm"
    },
    {
        "code": "ybo",
        "name": "Yabong",
        "searchKey": "yabong ybo"
    },
    {
        "code": "yxy",
        "name": "Yabula Yabula",
        "searchKey": "yabula yabula yxy"
    },
    {
        "code": "ekr",
        "name": "Yace",
        "searchKey": "yace ekr"
    },
    {
        "code": "rys",
        "name": "Yaeyama",
        "searchKey": "yaeyama rys"
    },
    {
        "code": "wfg",
        "name": "Yafi",
        "searchKey": "yafi wfg"
    },
    {
        "code": "yxg",
        "name": "Yagara",
        "searchKey": "yagara yxg"
    },
    {
        "code": "ygr",
        "name": "Yagaria",
        "searchKey": "yagaria ygr"
    },
    {
        "code": "yai",
        "name": "Yagnobi",
        "searchKey": "yagnobi yai"
    },
    {
        "code": "ygm",
        "name": "Yagomi",
        "searchKey": "yagomi ygm"
    },
    {
        "code": "yad",
        "name": "Yagua",
        "searchKey": "yagua yad"
    },
    {
        "code": "ygw",
        "name": "Yagwoia",
        "searchKey": "yagwoia ygw"
    },
    {
        "code": "ner",
        "name": "Yahadian",
        "searchKey": "yahadian ner"
    },
    {
        "code": "rhp",
        "name": "Yahang",
        "searchKey": "yahang rhp"
    },
    {
        "code": "ynu",
        "name": "Yahuna",
        "searchKey": "yahuna ynu"
    },
    {
        "code": "axk",
        "name": "Yaka (Central African Republic)",
        "searchNames": [
            "Yaka"
        ],
        "searchKey": "yaka central african republic axk yaka"
    },
    {
        "code": "iyx",
        "name": "Yaka (Congo)",
        "searchNames": [
            "Yaka"
        ],
        "searchKey": "yaka congo iyx yaka"
    },
    {
        "code": "yaf",
        "name": "Yaka (Democratic Republic of Congo)",
        "searchNames": [
            "Yaka"
        ],
        "searchKey": "yaka democratic republic of congo yaf yaka"
    },
    {
        "code": "ykk",
        "name": "Yakaikeke",
        "searchKey": "yakaikeke ykk"
    },
    {
        "code": "yak",
        "name": "Yakama",
        "searchKey": "yakama yak"
    },
    {
        "code": "yka",
        "name": "Yakan",
        "searchKey": "yakan yka"
    },
    {
        "code": "ybh",
        "name": "Yakha",
        "searchKey": "yakha ybh"
    },
    {
        "code": "yky",
        "name": "Yakoma",
        "searchKey": "yakoma yky"
    },
    {
        "code": "sah",
        "name": "Yakut",
        "searchKey": "yakut sah"
    },
    {
        "code": "yba",
        "name": "Yala",
        "searchKey": "yala yba"
    },
    {
        "code": "jal",
        "name": "Yalahatan",
        "searchKey": "yalahatan jal"
    },
    {
        "code": "xyl",
        "name": "Yalakalore",
        "searchKey": "yalakalore xyl"
    },
    {
        "code": "zpu",
        "name": "Yalálag Zapotec",
        "searchKey": "yalalag zapotec zpu"
    },
    {
        "code": "ylr",
        "name": "Yalarnnga",
        "searchKey": "yalarnnga ylr"
    },
    {
        "code": "nce",
        "name": "Yale",
        "searchKey": "yale nce"
    },
    {
        "code": "ylb",
        "name": "Yaleba",
        "searchKey": "yaleba ylb"
    },
    {
        "code": "yal",
        "name": "Yalunka",
        "searchKey": "yalunka yal"
    },
    {
        "code": "yag",
        "name": "Yámana",
        "searchKey": "yamana yag"
    },
    {
        "code": "ymp",
        "name": "Yamap",
        "searchKey": "yamap ymp"
    },
    {
        "code": "yam",
        "name": "Yamba",
        "searchKey": "yamba yam"
    },
    {
        "code": "ynb",
        "name": "Yamben",
        "searchKey": "yamben ynb"
    },
    {
        "code": "ymb",
        "name": "Yambes",
        "searchKey": "yambes ymb"
    },
    {
        "code": "yat",
        "name": "Yambeta",
        "searchKey": "yambeta yat"
    },
    {
        "code": "jmd",
        "name": "Yamdena",
        "searchKey": "yamdena jmd"
    },
    {
        "code": "yme",
        "name": "Yameo",
        "searchKey": "yameo yme"
    },
    {
        "code": "tao",
        "name": "Yami",
        "searchKey": "yami tao"
    },
    {
        "code": "yaa",
        "name": "Yaminahua",
        "searchKey": "yaminahua yaa"
    },
    {
        "code": "ymn",
        "name": "Yamna",
        "searchKey": "yamna ymn"
    },
    {
        "code": "ymg",
        "name": "Yamongeri",
        "searchKey": "yamongeri ymg"
    },
    {
        "code": "ybi",
        "name": "Yamphu",
        "searchKey": "yamphu ybi"
    },
    {
        "code": "ynn",
        "name": "Yana",
        "searchKey": "yana ynn"
    },
    {
        "code": "qur",
        "name": "Yanahuanca Pasco Quechua",
        "searchKey": "yanahuanca pasco quechua qur"
    },
    {
        "code": "yda",
        "name": "Yanda",
        "searchKey": "yanda yda"
    },
    {
        "code": "dym",
        "name": "Yanda Dom Dogon",
        "searchKey": "yanda dom dogon dym"
    },
    {
        "code": "xyb",
        "name": "Yandjibara",
        "searchKey": "yandjibara xyb"
    },
    {
        "code": "ynd",
        "name": "Yandruwandha",
        "searchKey": "yandruwandha ynd"
    },
    {
        "code": "ame",
        "name": "Yanesha'",
        "searchKey": "yanesha ame"
    },
    {
        "code": "zyg",
        "name": "Yang Zhuang",
        "searchKey": "yang zhuang zyg"
    },
    {
        "code": "yav",
        "name": "Yangben",
        "searchKey": "yangben yav"
    },
    {
        "code": "bsx",
        "name": "Yangkam",
        "searchKey": "yangkam bsx"
    },
    {
        "code": "jng",
        "name": "Yangman",
        "searchKey": "yangman jng"
    },
    {
        "code": "yng",
        "name": "Yango",
        "searchKey": "yango yng"
    },
    {
        "code": "ynl",
        "name": "Yangulam",
        "searchKey": "yangulam ynl"
    },
    {
        "code": "yde",
        "name": "Yangum Dey",
        "searchKey": "yangum dey yde"
    },
    {
        "code": "ygl",
        "name": "Yangum Gel",
        "searchKey": "yangum gel ygl"
    },
    {
        "code": "ymo",
        "name": "Yangum Mon",
        "searchKey": "yangum mon ymo"
    },
    {
        "code": "kdd",
        "name": "Yankunytjatjara",
        "searchKey": "yankunytjatjara kdd"
    },
    {
        "code": "jay",
        "name": "Yan-nhangu",
        "searchKey": "yan-nhangu jay"
    },
    {
        "code": "yhs",
        "name": "Yan-nhaŋu Sign Language",
        "searchKey": "yan-nhaŋu sign language yhs"
    },
    {
        "code": "wca",
        "name": "Yanomámi",
        "searchKey": "yanomami wca"
    },
    {
        "code": "guu",
        "name": "Yanomamö",
        "searchKey": "yanomamo guu"
    },
    {
        "code": "yns",
        "name": "Yansi",
        "searchKey": "yansi yns"
    },
    {
        "code": "jao",
        "name": "Yanyuwa",
        "searchKey": "yanyuwa jao"
    },
    {
        "code": "yao",
        "name": "Yao",
        "searchKey": "yao"
    },
    {
        "code": "asy",
        "name": "Yaosakor Asmat",
        "searchKey": "yaosakor asmat asy"
    },
    {
        "code": "yre",
        "name": "Yaouré",
        "searchKey": "yaoure yre"
    },
    {
        "code": "yap",
        "name": "Yapese",
        "searchKey": "yapese yap"
    },
    {
        "code": "yev",
        "name": "Yapunda",
        "searchKey": "yapunda yev"
    },
    {
        "code": "jaq",
        "name": "Yaqay",
        "searchKey": "yaqay jaq"
    },
    {
        "code": "yaq",
        "name": "Yaqui",
        "searchKey": "yaqui yaq"
    },
    {
        "code": "yrw",
        "name": "Yarawata",
        "searchKey": "yarawata yrw"
    },
    {
        "code": "yxl",
        "name": "Yardliyawarra",
        "searchKey": "yardliyawarra yxl"
    },
    {
        "code": "yrb",
        "name": "Yareba",
        "searchKey": "yareba yrb"
    },
    {
        "code": "zae",
        "name": "Yareni Zapotec",
        "searchKey": "yareni zapotec zae"
    },
    {
        "code": "yry",
        "name": "Yarluyandi",
        "searchKey": "yarluyandi yry"
    },
    {
        "code": "yro",
        "name": "Yaroamë",
        "searchKey": "yaroame yro"
    },
    {
        "code": "yrs",
        "name": "Yarsun",
        "searchKey": "yarsun yrs"
    },
    {
        "code": "ysc",
        "name": "Yassic",
        "searchKey": "yassic ysc"
    },
    {
        "code": "yty",
        "name": "Yatay",
        "searchKey": "yatay yty"
    },
    {
        "code": "zty",
        "name": "Yatee Zapotec",
        "searchKey": "yatee zapotec zty"
    },
    {
        "code": "zav",
        "name": "Yatzachi Zapotec",
        "searchKey": "yatzachi zapotec zav"
    },
    {
        "code": "yuw",
        "name": "Yau (Morobe Province)",
        "searchNames": [
            "Yau"
        ],
        "searchKey": "yau morobe province yuw yau"
    },
    {
        "code": "yyu",
        "name": "Yau (Sandaun Province)",
        "searchNames": [
            "Yau"
        ],
        "searchKey": "yau sandaun province yyu yau"
    },
    {
        "code": "yla",
        "name": "Yaul",
        "searchKey": "yaul yla"
    },
    {
        "code": "yax",
        "name": "Yauma",
        "searchKey": "yauma yax"
    },
    {
        "code": "jau",
        "name": "Yaur",
        "searchKey": "yaur jau"
    },
    {
        "code": "zpb",
        "name": "Yautepec Zapotec",
        "searchKey": "yautepec zapotec zpb"
    },
    {
        "code": "qux",
        "name": "Yauyos Quechua",
        "searchKey": "yauyos quechua qux"
    },
    {
        "code": "yvt",
        "name": "Yavitero",
        "searchKey": "yavitero yvt"
    },
    {
        "code": "yva",
        "name": "Yawa",
        "searchKey": "yawa yva"
    },
    {
        "code": "yaw",
        "name": "Yawalapití",
        "searchKey": "yawalapiti yaw"
    },
    {
        "code": "ywn",
        "name": "Yawanawa",
        "searchKey": "yawanawa ywn"
    },
    {
        "code": "yww",
        "name": "Yawarawarga",
        "searchKey": "yawarawarga yww"
    },
    {
        "code": "yby",
        "name": "Yaweyuha",
        "searchKey": "yaweyuha yby"
    },
    {
        "code": "jbw",
        "name": "Yawijibaya",
        "searchKey": "yawijibaya jbw"
    },
    {
        "code": "ybx",
        "name": "Yawiyo",
        "searchKey": "yawiyo ybx"
    },
    {
        "code": "ywr",
        "name": "Yawuru",
        "searchKey": "yawuru ywr"
    },
    {
        "code": "xya",
        "name": "Yaygir",
        "searchKey": "yaygir xya"
    },
    {
        "code": "yah",
        "name": "Yazgulyam",
        "searchKey": "yazgulyam yah"
    },
    {
        "code": "tlc",
        "name": "Yecuatla Totonac",
        "searchKey": "yecuatla totonac tlc"
    },
    {
        "code": "jei",
        "name": "Yei",
        "searchKey": "yei jei"
    },
    {
        "code": "ets",
        "name": "Yekhee",
        "searchKey": "yekhee ets"
    },
    {
        "code": "ykr",
        "name": "Yekora",
        "searchKey": "yekora ykr"
    },
    {
        "code": "yel",
        "name": "Yela",
        "searchKey": "yela yel"
    },
    {
        "code": "yle",
        "name": "Yele",
        "searchKey": "yele yle"
    },
    {
        "code": "jel",
        "name": "Yelmek",
        "searchKey": "yelmek jel"
    },
    {
        "code": "ylg",
        "name": "Yelogu",
        "searchKey": "yelogu ylg"
    },
    {
        "code": "ybb",
        "name": "Yemba",
        "searchKey": "yemba ybb"
    },
    {
        "code": "jnj",
        "name": "Yemsa",
        "searchKey": "yemsa jnj"
    },
    {
        "code": "ynq",
        "name": "Yendang",
        "searchKey": "yendang ynq"
    },
    {
        "code": "yei",
        "name": "Yeni",
        "searchKey": "yeni yei"
    },
    {
        "code": "yec",
        "name": "Yeniche",
        "searchKey": "yeniche yec"
    },
    {
        "code": "yra",
        "name": "Yerakai",
        "searchKey": "yerakai yra"
    },
    {
        "code": "gop",
        "name": "Yeretuar",
        "searchKey": "yeretuar gop"
    },
    {
        "code": "yrn",
        "name": "Yerong",
        "searchKey": "yerong yrn"
    },
    {
        "code": "yeu",
        "name": "Yerukula",
        "searchKey": "yerukula yeu"
    },
    {
        "code": "yss",
        "name": "Yessan-Mayo",
        "searchKey": "yessan-mayo yss"
    },
    {
        "code": "yet",
        "name": "Yetfa",
        "searchKey": "yetfa yet"
    },
    {
        "code": "yej",
        "name": "Yevanic",
        "searchKey": "yevanic yej"
    },
    {
        "code": "yey",
        "name": "Yeyi",
        "searchKey": "yeyi yey"
    },
    {
        "code": "yid",
        "name": "Yiddish",
        "searchKey": "yiddish yid"
    },
    {
        "code": "ydg",
        "name": "Yidgha",
        "searchKey": "yidgha ydg"
    },
    {
        "code": "yii",
        "name": "Yidiny",
        "searchKey": "yidiny yii"
    },
    {
        "code": "yll",
        "name": "Yil",
        "searchKey": "yil yll"
    },
    {
        "code": "ycr",
        "name": "Yilan Creole",
        "searchKey": "yilan creole ycr"
    },
    {
        "code": "yee",
        "name": "Yimas",
        "searchKey": "yimas yee"
    },
    {
        "code": "yim",
        "name": "Yimchungru Naga",
        "searchKey": "yimchungru naga yim"
    },
    {
        "code": "kvu",
        "name": "Yinbaw Karen",
        "searchKey": "yinbaw karen kvu"
    },
    {
        "code": "yij",
        "name": "Yindjibarndi",
        "searchKey": "yindjibarndi yij"
    },
    {
        "code": "yil",
        "name": "Yindjilandji",
        "searchKey": "yindjilandji yil"
    },
    {
        "code": "pib",
        "name": "Yine",
        "searchKey": "yine pib"
    },
    {
        "code": "yia",
        "name": "Yinggarda",
        "searchKey": "yinggarda yia"
    },
    {
        "code": "ywg",
        "name": "Yinhawangka",
        "searchKey": "yinhawangka ywg"
    },
    {
        "code": "ygi",
        "name": "Yiningayi",
        "searchKey": "yiningayi ygi"
    },
    {
        "code": "kvy",
        "name": "Yintale Karen",
        "searchKey": "yintale karen kvy"
    },
    {
        "code": "yxm",
        "name": "Yinwum",
        "searchKey": "yinwum yxm"
    },
    {
        "code": "yyr",
        "name": "Yir Yoront",
        "searchKey": "yir yoront yyr"
    },
    {
        "code": "ljw",
        "name": "Yirandali",
        "searchKey": "yirandali ljw"
    },
    {
        "code": "yrm",
        "name": "Yirrk-Mel",
        "searchKey": "yirrk-mel yrm"
    },
    {
        "code": "yis",
        "name": "Yis",
        "searchKey": "yis"
    },
    {
        "code": "xth",
        "name": "Yitha Yitha",
        "searchKey": "yitha yitha xth"
    },
    {
        "code": "yob",
        "name": "Yoba",
        "searchKey": "yoba yob"
    },
    {
        "code": "gud",
        "name": "Yocoboué Dida",
        "searchKey": "yocoboue dida gud"
    },
    {
        "code": "yog",
        "name": "Yogad",
        "searchKey": "yogad yog"
    },
    {
        "code": "ydk",
        "name": "Yoidik",
        "searchKey": "yoidik ydk"
    },
    {
        "code": "yki",
        "name": "Yoke",
        "searchKey": "yoke yki"
    },
    {
        "code": "yok",
        "name": "Yokuts",
        "searchKey": "yokuts yok"
    },
    {
        "code": "ygs",
        "name": "Yolŋu Sign Language",
        "searchKey": "yolŋu sign language ygs"
    },
    {
        "code": "xty",
        "name": "Yoloxochitl Mixtec",
        "searchKey": "yoloxochitl mixtec xty"
    },
    {
        "code": "pil",
        "name": "Yom",
        "searchKey": "yom pil"
    },
    {
        "code": "yom",
        "name": "Yombe",
        "searchKey": "yombe yom"
    },
    {
        "code": "yoi",
        "name": "Yonaguni",
        "searchKey": "yonaguni yoi"
    },
    {
        "code": "yno",
        "name": "Yong",
        "searchKey": "yong yno"
    },
    {
        "code": "zyb",
        "name": "Yongbei Zhuang",
        "searchKey": "yongbei zhuang zyb"
    },
    {
        "code": "yon",
        "name": "Yongkom",
        "searchKey": "yongkom yon"
    },
    {
        "code": "zyn",
        "name": "Yongnan Zhuang",
        "searchKey": "yongnan zhuang zyn"
    },
    {
        "code": "yut",
        "name": "Yopno",
        "searchKey": "yopno yut"
    },
    {
        "code": "mts",
        "name": "Yora",
        "searchKey": "yora mts"
    },
    {
        "code": "yox",
        "name": "Yoron",
        "searchKey": "yoron yox"
    },
    {
        "code": "xyy",
        "name": "Yorta Yorta",
        "searchKey": "yorta yorta xyy"
    },
    {
        "code": "yor",
        "name": "Yoruba",
        "searchKey": "yoruba yor"
    },
    {
        "code": "mpm",
        "name": "Yosondúa Mixtec",
        "searchKey": "yosondua mixtec mpm"
    },
    {
        "code": "wab",
        "name": "Yote",
        "searchKey": "yote wab"
    },
    {
        "code": "yot",
        "name": "Yotti",
        "searchKey": "yotti yot"
    },
    {
        "code": "zyj",
        "name": "Youjiang Zhuang",
        "searchKey": "youjiang zhuang zyj"
    },
    {
        "code": "jiu",
        "name": "Youle Jinuo",
        "searchKey": "youle jinuo jiu"
    },
    {
        "code": "buh",
        "name": "Younuo Bunu",
        "searchKey": "younuo bunu buh"
    },
    {
        "code": "ytw",
        "name": "Yout Wam",
        "searchKey": "yout wam ytw"
    },
    {
        "code": "yoy",
        "name": "Yoy",
        "searchKey": "yoy"
    },
    {
        "code": "nua",
        "name": "Yuanga",
        "searchKey": "yuanga nua"
    },
    {
        "code": "msd",
        "name": "Yucatec Maya Sign Language",
        "searchKey": "yucatec maya sign language msd"
    },
    {
        "code": "yua",
        "name": "Yucateco",
        "searchKey": "yucateco yua"
    },
    {
        "code": "yuc",
        "name": "Yuchi",
        "searchKey": "yuchi yuc"
    },
    {
        "code": "mvg",
        "name": "Yucuañe Mixtec",
        "searchKey": "yucuane mixtec mvg"
    },
    {
        "code": "ycn",
        "name": "Yucuna",
        "searchKey": "yucuna ycn"
    },
    {
        "code": "yue",
        "name": "Yue Chinese",
        "searchKey": "yue chinese yue"
    },
    {
        "code": "yug",
        "name": "Yug",
        "searchKey": "yug"
    },
    {
        "code": "yub",
        "name": "Yugambal",
        "searchKey": "yugambal yub"
    },
    {
        "code": "ysl",
        "name": "Yugoslavian Sign Language",
        "searchKey": "yugoslavian sign language ysl"
    },
    {
        "code": "ygu",
        "name": "Yugul",
        "searchKey": "yugul ygu"
    },
    {
        "code": "yab",
        "name": "Yuhup",
        "searchKey": "yuhup yab"
    },
    {
        "code": "yuk",
        "name": "Yuki",
        "searchKey": "yuki yuk"
    },
    {
        "code": "yup",
        "name": "Yukpa",
        "searchKey": "yukpa yup"
    },
    {
        "code": "ybl",
        "name": "Yukuben",
        "searchKey": "yukuben ybl"
    },
    {
        "code": "yul",
        "name": "Yulu",
        "searchKey": "yulu yul"
    },
    {
        "code": "yuq",
        "name": "Yuqui",
        "searchKey": "yuqui yuq"
    },
    {
        "code": "yuz",
        "name": "Yuracare",
        "searchKey": "yuracare yuz"
    },
    {
        "code": "rts",
        "name": "Yurats",
        "searchKey": "yurats rts"
    },
    {
        "code": "yur",
        "name": "Yurok",
        "searchKey": "yurok yur"
    },
    {
        "code": "ljx",
        "name": "Yuru",
        "searchKey": "yuru ljx"
    },
    {
        "code": "yui",
        "name": "Yurutí",
        "searchKey": "yuruti yui"
    },
    {
        "code": "mab",
        "name": "Yutanduchi Mixtec",
        "searchKey": "yutanduchi mixtec mab"
    },
    {
        "code": "yau",
        "name": "Yuwana",
        "searchKey": "yuwana yau"
    },
    {
        "code": "yxu",
        "name": "Yuyu",
        "searchKey": "yuyu yxu"
    },
    {
        "code": "gek",
        "name": "Ywom",
        "searchKey": "ywom gek"
    },
    {
        "code": "ztx",
        "name": "Zaachila Zapotec",
        "searchKey": "zaachila zapotec ztx"
    },
    {
        "code": "kji",
        "name": "Zabana",
        "searchKey": "zabana kji"
    },
    {
        "code": "ctz",
        "name": "Zacatepec Chatino",
        "searchKey": "zacatepec chatino ctz"
    },
    {
        "code": "nhi",
        "name": "Zacatlán-Ahuacatlán-Tepetzintla Nahuatl",
        "searchKey": "zacatlan-ahuacatlan-tepetzintla nahuatl nhi"
    },
    {
        "code": "zag",
        "name": "Zaghawa",
        "searchKey": "zaghawa zag"
    },
    {
        "code": "atb",
        "name": "Zaiwa",
        "searchKey": "zaiwa atb"
    },
    {
        "code": "zkr",
        "name": "Zakhring",
        "searchKey": "zakhring zkr"
    },
    {
        "code": "zsl",
        "name": "Zambian Sign Language",
        "searchKey": "zambian sign language zsl"
    },
    {
        "code": "zna",
        "name": "Zan Gula",
        "searchKey": "zan gula zna"
    },
    {
        "code": "zak",
        "name": "Zanaki",
        "searchKey": "zanaki zak"
    },
    {
        "code": "zne",
        "name": "Zande (individual language)",
        "searchNames": [
            "Zande"
        ],
        "searchKey": "zande individual language zne zande"
    },
    {
        "code": "zau",
        "name": "Zangskari",
        "searchKey": "zangskari zau"
    },
    {
        "code": "zah",
        "name": "Zangwal",
        "searchKey": "zangwal zah"
    },
    {
        "code": "zpw",
        "name": "Zaniza Zapotec",
        "searchKey": "zaniza zapotec zpw"
    },
    {
        "code": "zro",
        "name": "Záparo",
        "searchKey": "zaparo zro"
    },
    {
        "code": "zap",
        "name": "Zapotec",
        "searchKey": "zapotec zap"
    },
    {
        "code": "zaj",
        "name": "Zaramo",
        "searchKey": "zaramo zaj"
    },
    {
        "code": "zaz",
        "name": "Zari",
        "searchKey": "zari zaz"
    },
    {
        "code": "dje",
        "name": "Zarma",
        "searchKey": "zarma dje"
    },
    {
        "code": "zrp",
        "name": "Zarphatic",
        "searchKey": "zarphatic zrp"
    },
    {
        "code": "zal",
        "name": "Zauzou",
        "searchKey": "zauzou zal"
    },
    {
        "code": "zwa",
        "name": "Zay",
        "searchKey": "zay zwa"
    },
    {
        "code": "kxk",
        "name": "Zayein Karen",
        "searchKey": "zayein karen kxk"
    },
    {
        "code": "zay",
        "name": "Zayse-Zergulla",
        "searchKey": "zayse-zergulla zay"
    },
    {
        "code": "zza",
        "name": "Zaza",
        "searchKey": "zaza zza"
    },
    {
        "code": "jaj",
        "name": "Zazao",
        "searchKey": "zazao jaj"
    },
    {
        "code": "zem",
        "name": "Zeem",
        "searchKey": "zeem zem"
    },
    {
        "code": "zea",
        "name": "Zeeuws",
        "searchKey": "zeeuws zea"
    },
    {
        "code": "dhm",
        "name": "Zemba",
        "searchKey": "zemba dhm"
    },
    {
        "code": "nzm",
        "name": "Zeme Naga",
        "searchKey": "zeme naga nzm"
    },
    {
        "code": "xzm",
        "name": "Zemgalian",
        "searchKey": "zemgalian xzm"
    },
    {
        "code": "zeg",
        "name": "Zenag",
        "searchKey": "zenag zeg"
    },
    {
        "code": "zen",
        "name": "Zenaga",
        "searchKey": "zenaga zen"
    },
    {
        "code": "czn",
        "name": "Zenzontepec Chatino",
        "searchKey": "zenzontepec chatino czn"
    },
    {
        "code": "zrn",
        "name": "Zerenkel",
        "searchKey": "zerenkel zrn"
    },
    {
        "code": "zhb",
        "name": "Zhaba",
        "searchKey": "zhaba zhb"
    },
    {
        "code": "xzh",
        "name": "Zhang-Zhung",
        "searchKey": "zhang-zhung xzh"
    },
    {
        "code": "zhi",
        "name": "Zhire",
        "searchKey": "zhire zhi"
    },
    {
        "code": "zhw",
        "name": "Zhoa",
        "searchKey": "zhoa zhw"
    },
    {
        "code": "zha",
        "name": "Zhuang",
        "searchKey": "zhuang zha"
    },
    {
        "code": "zia",
        "name": "Zia",
        "searchKey": "zia"
    },
    {
        "code": "zil",
        "name": "Zialo",
        "searchKey": "zialo zil"
    },
    {
        "code": "ziw",
        "name": "Zigula",
        "searchKey": "zigula ziw"
    },
    {
        "code": "zik",
        "name": "Zimakani",
        "searchKey": "zimakani zik"
    },
    {
        "code": "zmb",
        "name": "Zimba",
        "searchKey": "zimba zmb"
    },
    {
        "code": "zib",
        "name": "Zimbabwe Sign Language",
        "searchKey": "zimbabwe sign language zib"
    },
    {
        "code": "zin",
        "name": "Zinza",
        "searchKey": "zinza zin"
    },
    {
        "code": "sih",
        "name": "Zire",
        "searchKey": "zire sih"
    },
    {
        "code": "ziz",
        "name": "Zizilivakan",
        "searchKey": "zizilivakan ziz"
    },
    {
        "code": "pto",
        "name": "Zo'é",
        "searchKey": "zoe pto"
    },
    {
        "code": "yzk",
        "name": "Zokhuo",
        "searchKey": "zokhuo yzk"
    },
    {
        "code": "zpq",
        "name": "Zoogocho Zapotec",
        "searchKey": "zoogocho zapotec zpq"
    },
    {
        "code": "gbz",
        "name": "Zoroastrian Dari",
        "searchKey": "zoroastrian dari gbz"
    },
    {
        "code": "czt",
        "name": "Zotung Chin",
        "searchKey": "zotung chin czt"
    },
    {
        "code": "zom",
        "name": "Zou",
        "searchKey": "zou zom"
    },
    {
        "code": "zlu",
        "name": "Zul",
        "searchKey": "zul zlu"
    },
    {
        "code": "zla",
        "name": "Zula",
        "searchKey": "zula zla"
    },
    {
        "code": "gnd",
        "name": "Zulgo-Gemzek",
        "searchKey": "zulgo-gemzek gnd"
    },
    {
        "code": "zul",
        "name": "Zulu",
        "searchKey": "zulu zul"
    },
    {
        "code": "zuy",
        "name": "Zumaya",
        "searchKey": "zumaya zuy"
    },
    {
        "code": "jmb",
        "name": "Zumbun",
        "searchKey": "zumbun jmb"
    },
    {
        "code": "zun",
        "name": "Zuni",
        "searchKey": "zuni zun"
    },
    {
        "code": "zzj",
        "name": "Zuojiang Zhuang",
        "searchKey": "zuojiang zhuang zzj"
    },
    {
        "code": "zyp",
        "name": "Zyphe Chin",
        "searchKey": "zyphe chin zyp"
    },
    {
        "code": "nmn",
        "name": "ǃXóõ",
        "searchKey": "ǃxoo nmn"
    },
    {
        "code": "gwj",
        "name": "ǀGwi",
        "searchKey": "ǀgwi gwj"
    },
    {
        "code": "xam",
        "name": "ǀXam",
        "searchKey": "ǀxam xam"
    },
    {
        "code": "hnh",
        "name": "ǁAni",
        "searchKey": "ǁani hnh"
    },
    {
        "code": "gnk",
        "name": "ǁGana",
        "searchKey": "ǁgana gnk"
    },
    {
        "code": "xeg",
        "name": "ǁXegwi",
        "searchKey": "ǁxegwi xeg"
    },
    {
        "code": "huc",
        "name": "ǂHua",
        "searchKey": "ǂhua huc"
    },
    {
        "code": "gku",
        "name": "ǂUngkue",
        "searchKey": "ǂungkue gku"
    },
    {
        "code": "ahn",
        "name": "Àhàn",
        "searchKey": "ahan ahn"
    },
    {
        "code": "acb",
        "name": "Áncá",
        "searchKey": "anca acb"
    },
    {
        "code": "alu",
        "name": "'Are'are",
        "searchKey": "areare alu"
    },
    {
        "code": "kud",
        "name": "'Auhelawa",
        "searchKey": "auhelawa kud"
    },
    {
        "code": "aom",
        "name": "Ömie",
        "searchKey": "omie aom"
    },
    {
        "code": "oon",
        "name": "Önge",
        "searchKey": "onge oon"
    }
];
/* ==========================================
   FIND LANGUAGE
========================================== */

function getTransLLanguage(code) {

    if (!code) {
        return null;
    }

    return TRANSL_LANGUAGES.find(
        language =>
            language.code ===
            String(code).toLowerCase()
    ) || null;

}


/* ==========================================
   GET ALL LANGUAGES
========================================== */

function getTransLLanguages() {

    return [
        ...TRANSL_LANGUAGES
    ];

}