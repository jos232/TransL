"use strict";

/* ==========================================
   TRANSL
   MESSAGE CONTROLLER
========================================== */

const mongoose = require("mongoose");

const Message = require("../models/Message");
const Notification = require("./models/Notification");
const User = require("../models/User");


/* ==========================================
   SEND MESSAGE
========================================== */

async function sendMessage(req, res) {

    try {

        const senderId =
            req.user._id;

        const {
            recipient,
            content
        } = req.body;


        /* ==================================
           VALIDATE RECIPIENT
        ================================== */

        if (!recipient) {

            return res.status(400).json({

                success: false,

                message:
                    "Recipient is required."

            });

        }


        if (
            !mongoose.Types.ObjectId.isValid(
                recipient
            )
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid recipient."

            });

        }


        /* ==================================
           VALIDATE CONTENT
        ================================== */

        if (
            !content ||
            !String(content).trim()
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Message content is required."

            });

        }


        const cleanContent =
            String(content).trim();


        if (cleanContent.length > 5000) {

            return res.status(400).json({

                success: false,

                message:
                    "Message is too long."

            });

        }


        /* ==================================
           PREVENT SELF-MESSAGING
        ================================== */

        if (
            String(senderId) ===
            String(recipient)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "You cannot send a message to yourself."

            });

        }


        /* ==================================
           CHECK RECIPIENT
        ================================== */

        const recipientUser =
            await User.findById(recipient);


        if (!recipientUser) {

            return res.status(404).json({

                success: false,

                message:
                    "Recipient not found."

            });

        }


        /* ==================================
           CREATE MESSAGE
        ================================== */

        const message =
            await Message.create({

                sender:
                    senderId,

                recipient:
                    recipientUser._id,

                content:
                    cleanContent,

                read:
                    false

            });


        /* ==================================
           POPULATE USERS
        ================================== */

        await message.populate([
            {
                path: "sender",
                select:
                    "name username avatar"
            },
            {
                path: "recipient",
                select:
                    "name username avatar"
            }
        ]);


        /* ==================================
           RESPONSE
        ================================== */

        return res.status(201).json({

            success: true,

            message:
                "Message sent successfully.",

            data:
                message

        });

    } catch (error) {

        console.error(
            "Send message error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Unable to send message."

        });

    }

}


/* ==========================================
   GET CONVERSATION
========================================== */

async function getConversation(req, res) {

    try {

        const currentUserId =
            req.user._id;

        const otherUserId =
            req.params.userId;


        /* ==================================
           VALIDATE USER ID
        ================================== */

        if (
            !mongoose.Types.ObjectId.isValid(
                otherUserId
            )
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Invalid user ID."

            });

        }


        /* ==================================
           CHECK OTHER USER
        ================================== */

        const otherUser =
            await User.findById(
                otherUserId
            )
                .select(
                    "name username avatar bio"
                );


        if (!otherUser) {

            return res.status(404).json({

                success: false,

                message:
                    "User not found."

            });

        }


        /* ==================================
           GET MESSAGES
        ================================== */

        const messages =
            await Message.find({

                $or: [

                    {
                        sender:
                            currentUserId,

                        recipient:
                            otherUserId
                    },

                    {
                        sender:
                            otherUserId,

                        recipient:
                            currentUserId
                    }

                ]

            })
                .sort({
                    createdAt: 1
                })
                .populate(
                    "sender",
                    "name username avatar"
                )
                .populate(
                    "recipient",
                    "name username avatar"
                );


        /* ==================================
           MARK RECEIVED MESSAGES AS READ
        ================================== */

        await Message.updateMany(

            {

                sender:
                    otherUserId,

                recipient:
                    currentUserId,

                read:
                    false

            },

            {

                $set: {
                    read: true
                }

            }

        );


        /* ==================================
           RESPONSE
        ================================== */

        return res.json({

            success: true,

            user:
                otherUser,

            messages:
                messages

        });

    } catch (error) {

        console.error(
            "Get conversation error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Unable to load conversation."

        });

    }

}


/* ==========================================
   GET UNREAD COUNT
========================================== */

async function getUnreadCount(req, res) {

    try {

        const currentUserId =
            req.user._id;


        const unreadCount =
            await Message.countDocuments({

                recipient:
                    currentUserId,

                read:
                    false

            });


        return res.json({

            success: true,

            unreadCount:
                unreadCount

        });

    } catch (error) {

        console.error(
            "Get unread count error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Unable to get unread messages."

        });

    }

}


/* ==========================================
   EXPORTS
========================================== */

module.exports = {

    sendMessage,

    getConversation,

    getUnreadCount

};