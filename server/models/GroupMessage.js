"use strict";

/* ==========================================
   TRANSL
   GROUP MESSAGE MODEL
========================================== */

const mongoose = require("mongoose");

const GroupMessageSchema = new mongoose.Schema(
    {
        group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Group",
            required: true,
            index: true
        },

        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000
        }
    },
    {
        timestamps: true
    }
);


/* ==========================================
   INDEXES
========================================== */

GroupMessageSchema.index({
    group: 1,
    createdAt: 1
});


module.exports =
    mongoose.model(
        "GroupMessage",
        GroupMessageSchema
    );
