"use strict";

const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
    {
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },

        actor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        type: {
            type: String,
            required: true,
            enum: [
                "friend_request",
                "friend_accepted",
                "message",
                "like",
                "comment",
                "share"
            ]
        },

        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500
        },

        targetId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null
        },

        read: {
            type: Boolean,
            default: false,
            index: true
        }
    },
    {
        timestamps: true
    }
);

NotificationSchema.index({
    recipient: 1,
    createdAt: -1
});

module.exports =
    mongoose.model(
        "Notification",
        NotificationSchema
    );