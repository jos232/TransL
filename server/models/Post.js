"use strict";

/* ==========================================
   TRANSL
   POST MODEL
========================================== */

const mongoose = require("mongoose");

/* ==========================================
   COMMENT SCHEMA
========================================== */

const CommentSchema = new mongoose.Schema(
    {

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        text: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000
        }

    },
    {
        timestamps: true
    }
);

/* ==========================================
   POST SCHEMA
========================================== */

const PostSchema = new mongoose.Schema(
    {

        /* ==================================
           POST OWNER
        ================================== */

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        /* ==================================
           CONTENT
        ================================== */

        content: {
            type: String,
            required: false,
            default: "",
            trim: true,
            maxlength: 5000
        },

        /* ==================================
           OPTIONAL CONTENT
        ================================== */

        feeling: {
            type: String,
            default: null,
            maxlength: 100
        },

        photo: {
            type: String,
            default: null
        },

        video: {
            type: String,
            default: null
        },

        /* ==================================
           POST INTERACTIONS
        ================================== */

        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        comments: [
            CommentSchema
        ],

        shares: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        favorites: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ]

    },
    {
        timestamps: true
    }
);

/* ==========================================
   EXPORT MODEL
========================================== */

module.exports =
    mongoose.model("Post", PostSchema);