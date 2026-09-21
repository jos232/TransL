"use strict";

/* ==========================================
   TRANSL
   SAVED POST MODEL
========================================== */

const mongoose = require("mongoose");

/* ==========================================
   SAVED POST SCHEMA
========================================== */

const SavedPostSchema = new mongoose.Schema(
    {

        /* ==================================
           USER WHO SAVED THE POST
        ================================== */

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        /* ==================================
           SAVED POST
        ================================== */

        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
            index: true
        }

    },
    {
        timestamps: true
    }
);

/* ==========================================
   PREVENT DUPLICATE SAVES
========================================== */

SavedPostSchema.index(
    {
        user: 1,
        post: 1
    },
    {
        unique: true
    }
);

/* ==========================================
   EXPORT MODEL
========================================== */

module.exports =
    mongoose.model("SavedPost", SavedPostSchema);
