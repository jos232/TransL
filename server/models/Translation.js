"use strict";

/* ==========================================
   TRANSL
   TRANSLATION MODEL
========================================== */

const mongoose = require("mongoose");

const TranslationSchema = new mongoose.Schema(
    {

        /* ==================================
           SOURCE
        ================================== */

        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
            index: true
        },

        sourceLanguage: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        sourceTextHash: {
            type: String,
            required: true,
            trim: true
        },

        /* ==================================
           TARGET
        ================================== */

        targetLanguage: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },

        translatedText: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000
        },

        /* ==================================
           TRANSLATION ENGINE
        ================================== */

        provider: {
            type: String,
            default: "",
            trim: true
        },

        model: {
            type: String,
            default: "",
            trim: true
        }

    },
    {
        timestamps: true
    }
);


/* ==========================================
   ONE TRANSLATION PER POST / LANGUAGE / TEXT
========================================== */

TranslationSchema.index(
    {
        post: 1,
        targetLanguage: 1,
        sourceTextHash: 1
    },
    {
        unique: true
    }
);


/* ==========================================
   EXPORT MODEL
========================================== */

module.exports =
    mongoose.model(
        "Translation",
        TranslationSchema
    );