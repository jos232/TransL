"use strict";

/* ==========================================
   TRANSL
   GROUP MODEL
========================================== */

const mongoose = require("mongoose");

/* ==========================================
   GROUP SCHEMA
========================================== */

const GroupSchema = new mongoose.Schema(
    {

        /* ==================================
           GROUP INFORMATION
        ================================== */

        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100
        },

        description: {
            type: String,
            default: "",
            trim: true,
            maxlength: 1000
        },

        /* ==================================
           GROUP CREATOR
        ================================== */

        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        /* ==================================
           GROUP ADMINS
        ================================== */

        admins: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        /* ==================================
           GROUP MEMBERS
        ================================== */

        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        /* ==================================
           GROUP PRIVACY
        ================================== */

        privacy: {
            type: String,
            enum: [
                "public",
                "private"
            ],
            default: "public",
            index: true
        }

    },
    {
        timestamps: true
    }
);

/* ==========================================
   GROUP INDEXES
========================================== */

GroupSchema.index({
    members: 1
});

GroupSchema.index({
    createdAt: -1
});

/* ==========================================
   EXPORT MODEL
========================================== */

module.exports =
    mongoose.model("Group", GroupSchema);
