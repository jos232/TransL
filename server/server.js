"use strict";

/* ==========================================
   TRANSL
   SERVER
========================================== */

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const multer = require("multer");

const connectDatabase =
    require("./config/database");

const User =
    require("./models/User");

const Message =
    require("./models/Message");

const Notification =
    require("./models/Notification");

const Group =
    require("./models/Group");

const GroupMessage =
    require("./models/GroupMessage");
const Post =
    require("./models/Post");
dotenv.config();

const app = express();

const PORT =
    process.env.PORT || 3000;


/* ==========================================
   PHOTO UPLOAD CONFIGURATION
========================================== */

const frontendPath =
    path.resolve(__dirname, "..");


/* ==========================================
   PHOTO UPLOAD CONFIGURATION
========================================== */

const uploadsPath =
    path.join(
        frontendPath,
        "uploads",
        "photos"
    );

const photoStorage =
    multer.diskStorage({

        destination: (req, file, callback) => {

            const fs =
                require("fs");

            fs.mkdirSync(
                uploadsPath,
                {
                    recursive:
                        true
                }
            );

            callback(
                null,
                uploadsPath
            );

        },

        filename: (req, file, callback) => {

            const extension =
                path.extname(
                    file.originalname
                ).toLowerCase();

            const uniqueName =
                crypto.randomBytes(16).toString("hex") +
                extension;

            callback(
                null,
                uniqueName
            );

        }

    });
const photoUpload =
    multer({

        storage:
            photoStorage,

        limits: {
            fileSize:
                10 * 1024 * 1024
        }

    });


/* ==========================================
   VIDEO UPLOAD CONFIGURATION
========================================== */

const videoUploadsPath =
    path.join(
        frontendPath,
        "uploads",
        "videos"
    );

const videoStorage =
    multer.diskStorage({

        destination: (req, file, callback) => {

            const fs =
                require("fs");

            fs.mkdirSync(
                videoUploadsPath,
                {
                    recursive:
                        true
                }
            );

            callback(
                null,
                videoUploadsPath
            );

        },

        filename: (req, file, callback) => {

            const extension =
                path.extname(
                    file.originalname
                ).toLowerCase();

            const uniqueName =
                crypto.randomBytes(16).toString("hex") +
                extension;

            callback(
                null,
                uniqueName
            );

        }

    });

const videoUpload =
    multer({

        storage:
            videoStorage,

        limits: {
            fileSize:
                10 * 1024 * 1024
        }

    });

fileFilter: (
    req,
    file,
    callback
) => {

    if (
        file.mimetype &&
        file.mimetype.startsWith("image/")
    ) {

        callback(
            null,
            true
        );

        return;

    }

    callback(
        new Error(
            "Only image files are allowed."
        )
    );

}

app.use(
    express.json({
        limit: "10mb"
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "10mb"
    })
);

app.use(
    express.static(frontendPath)
);


/* ==========================================
   TRANSL HOME PAGE
========================================== */

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            frontendPath,
            "index.html"
        )
    );

});


/* ==========================================
   BASIC API TEST
========================================== */

app.get("/api", (req, res) => {

    res.json({

        success: true,

        message:
            "TransL API is running."

    });

});


/* ==========================================
   AUTHENTICATION HELPERS
========================================== */

/*
 * Generate a secure random session token.
 */

function generateSessionToken() {

    return crypto
        .randomBytes(32)
        .toString("hex");

}


/*
 * Get token from Authorization header.
 *
 * Expected format:
 *
 * Authorization: Bearer TOKEN
 */

function getSessionToken(req) {

    const authorization =
        req.headers.authorization;

    if (!authorization) {
        return null;
    }

    if (
        !authorization.startsWith(
            "Bearer "
        )
    ) {
        return null;
    }

    return authorization
        .substring(7)
        .trim();

}


/* ==========================================
   AUTHENTICATION MIDDLEWARE
========================================== */

async function requireAuth(req, res, next) {

    try {

        const token =
            getSessionToken(req);

        if (!token) {

            return res.status(401).json({

                success: false,

                message:
                    "Authentication required."

            });

        }


        const user =
            await User.findOne({
                sessionToken: token
            });


        if (!user) {

            return res.status(401).json({

                success: false,

                message:
                    "Invalid or expired session."

            });

        }


        if (
            !user.sessionTokenExpires ||
            user.sessionTokenExpires <= new Date()
        ) {

            user.sessionToken = null;
            user.sessionTokenExpires = null;

            await user.save();

            return res.status(401).json({

                success: false,

                message:
                    "Session expired."

            });

        }


        req.user = user;

        next();

    } catch (error) {

        console.error(
            "Authentication error:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Authentication failed."

        });

    }

}


/* ==========================================
   SAFE USER RESPONSE
========================================== */



/* ==========================================
   PHOTO UPLOAD API
========================================== */

app.post(
    "/api/uploads/photo",
    requireAuth,
    (req, res) => {

        photoUpload.single("photo")(
            req,
            res,
            (error) => {

                if (error) {

                    console.error(
                        "Photo upload error:",
                        error
                    );

                    return res.status(400).json({

                        success: false,

                        message:
                            error.message ||
                            "Unable to upload photo."

                    });

                }

                if (req.file) {
                    console.log(
                        "TransL upload physical file:",
                        req.file.path
                    );
                    console.log(
                        "TransL upload file exists:",
                        require("fs").existsSync(req.file.path)
                    );
                }

                if (!req.file) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Please select an image."

                    });

                }

                return res.status(201).json({

                    success: true,

                    message:
                        "Photo uploaded successfully.",

                    photo:
                        "/uploads/photos/" +
                        req.file.filename

                });

            }
        );

    }
);

/* ==========================================
   VIDEO UPLOAD API
========================================== */

app.post(
    "/api/uploads/video",
    requireAuth,
    (req, res) => {

        videoUpload.single("video")(
            req,
            res,
            (error) => {

                if (error) {

                    console.error(
                        "Video upload error:",
                        error
                    );

                    return res.status(400).json({

                        success: false,

                        message:
                            error.message ||
                            "Unable to upload video."

                    });

                }

                if (req.file) {
                    console.log(
                        "TransL upload physical file:",
                        req.file.path
                    );
                    console.log(
                        "TransL upload file exists:",
                        require("fs").existsSync(req.file.path)
                    );
                }

                if (!req.file) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Please select a video."

                    });

                }

                return res.status(201).json({

                    success: true,

                    message:
                        "Video uploaded successfully.",

                    video:
                        "/uploads/videos/" +
                        req.file.filename

                });

            }
        );

    }
);


function getSafeUser(user) {

    return {

        id:
            user._id.toString(),

        name:
            user.name,

        username:
            user.username,

        email:
            user.email,

        avatar:
            user.avatar,

        bio:
            user.bio,

        favoriteLanguage:
            user.favoriteLanguage || {
                code: "",
                name: ""
            }

    };

}


/* ==========================================
   REGISTER USER
========================================== */

app.post(
    "/api/auth/register",
    async (req, res) => {

        try {

            const {
                name,
                username,
                email,
                password
            } = req.body || {};


            /* ==================================
               VALIDATION
            ================================== */

            if (
                !name ||
                !username ||
                !email ||
                !password
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Name, username, email and password are required."

                });

            }


            const cleanName =
                String(name).trim();

            const cleanUsername =
                String(username)
                    .trim()
                    .toLowerCase();

            const cleanEmail =
                String(email)
                    .trim()
                    .toLowerCase();

            const cleanPassword =
                String(password);


            if (cleanName.length < 2) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Name must contain at least 2 characters."

                });

            }


            if (cleanUsername.length < 3) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Username must contain at least 3 characters."

                });

            }


            if (cleanPassword.length < 8) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Password must contain at least 8 characters."

                });

            }


            /* ==================================
               CHECK EXISTING USER
            ================================== */

            const existingUser =
                await User.findOne({
                    $or: [
                        {
                            username:
                                cleanUsername
                        },
                        {
                            email:
                                cleanEmail
                        }
                    ]
                });


            if (existingUser) {

                if (
                    existingUser.username ===
                    cleanUsername
                ) {

                    return res.status(409).json({

                        success: false,

                        message:
                            "Username is already registered."

                    });

                }


                if (
                    existingUser.email ===
                    cleanEmail
                ) {

                    return res.status(409).json({

                        success: false,

                        message:
                            "Email is already registered."

                    });

                }

            }


            /* ==================================
               HASH PASSWORD
            ================================== */

            const passwordHash =
                await bcrypt.hash(
                    cleanPassword,
                    12
                );


            /* ==================================
               CREATE USER
            ================================== */

            const user =
                await User.create({

                    name:
                        cleanName,

                    username:
                        cleanUsername,

                    email:
                        cleanEmail,

                    passwordHash:
                        passwordHash,

                    avatar:
                        cleanName
                            .charAt(0)
                            .toUpperCase(),

                    favoriteLanguage: {

                        code: "",

                        name: ""

                    }

                });


            /* ==================================
               CREATE SESSION
            ================================== */

            const sessionToken =
                generateSessionToken();

            const sessionExpiry =
                new Date(
                    Date.now() +
                    7 * 24 * 60 * 60 * 1000
                );


            user.sessionToken =
                sessionToken;

            user.sessionTokenExpires =
                sessionExpiry;

            await user.save();


            /* ==================================
               RESPONSE
            ================================== */

            return res.status(201).json({

                success: true,

                message:
                    "Account created successfully.",

                token:
                    sessionToken,

                requiresFavoriteLanguage:
                    true,

                user:
                    getSafeUser(user)

            });

        } catch (error) {

            console.error(
                "Registration error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to create account."

            });

        }

    }
);


/* ==========================================
   LOGIN USER
========================================== */

app.post(
    "/api/auth/login",
    async (req, res) => {

        try {

            const {
                identifier,
                password,
                favoriteLanguage
            } = req.body || {};


            /* ==================================
               VALIDATION
            ================================== */

            if (
                !identifier ||
                !password
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Username/email and password are required."

                });

            }


            const cleanIdentifier =
                String(identifier)
                    .trim()
                    .toLowerCase();


            /* ==================================
               FIND USER
            ================================== */

            const user =
                await User.findOne({

                    $or: [

                        {
                            username:
                                cleanIdentifier
                        },

                        {
                            email:
                                cleanIdentifier
                        }

                    ]

                });


            if (!user) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid username/email or password."

                });

            }


            /* ==================================
               VERIFY PASSWORD
            ================================== */

            const passwordMatches =
                await bcrypt.compare(
                    String(password),
                    user.passwordHash
                );


            if (!passwordMatches) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid username/email or password."

                });

            }


            /* ==================================
               SAVE FAVORITE LANGUAGE
               IF PROVIDED
            ================================== */

            if (
                favoriteLanguage &&
                favoriteLanguage.code &&
                favoriteLanguage.name
            ) {

                user.favoriteLanguage = {

                    code:
                        String(
                            favoriteLanguage.code
                        )
                            .trim()
                            .toLowerCase(),

                    name:
                        String(
                            favoriteLanguage.name
                        ).trim()

                };

            }


            /* ==================================
               CREATE NEW SESSION
            ================================== */

            const sessionToken =
                generateSessionToken();

            const sessionExpiry =
                new Date(
                    Date.now() +
                    7 * 24 * 60 * 60 * 1000
                );


            user.sessionToken =
                sessionToken;

            user.sessionTokenExpires =
                sessionExpiry;


            await user.save();


            /* ==================================
               CHECK FAVORITE LANGUAGE
            ================================== */

            const hasFavoriteLanguage =
                Boolean(
                    user.favoriteLanguage &&
                    user.favoriteLanguage.code &&
                    user.favoriteLanguage.name
                );


            /* ==================================
               RESPONSE
            ================================== */

            return res.json({

                success: true,

                message:
                    "Login successful.",

                token:
                    sessionToken,

                requiresFavoriteLanguage:
                    !hasFavoriteLanguage,

                user:
                    getSafeUser(user)

            });

        } catch (error) {

            console.error(
                "Login error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to log in."

            });

        }

    }
);


/* ==========================================
   GET CURRENT USER
========================================== */

app.get(
    "/api/auth/me",
    requireAuth,
    async (req, res) => {

        return res.json({

            success: true,

            user:
                getSafeUser(req.user)

        });

    }
);


/* ==========================================
   UPDATE FAVORITE LANGUAGE
========================================== */

app.put(
    "/api/auth/favorite-language",
    requireAuth,
    async (req, res) => {

        try {

            const {
                code,
                name
            } = req.body || {};


            if (
                !code ||
                !name
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Language code and name are required."

                });

            }


            const cleanString =
                (value) => String(value || '').trim();

            const cleanArray =
                (value) =>
                    Array.isArray(value)
                        ? value.map(cleanString).filter(Boolean)
                        : [];

            req.user.favoriteLanguage = {

                code:
                    cleanString(code).toLowerCase(),

                name:
                    cleanString(name),

                displayName:
                    cleanString(req.body.displayName),

                searchNames:
                    cleanArray(req.body.searchNames),

                searchKey:
                    cleanString(req.body.searchKey),

                alternateNames:
                    cleanArray(req.body.alternateNames),

                countries:
                    cleanArray(req.body.countries),

                script:
                    cleanString(req.body.script)

            };

            await req.user.save();


            return res.json({

                success: true,

                message:
                    "Favorite language saved successfully.",

                favoriteLanguage:
                    req.user.favoriteLanguage

            });

        } catch (error) {

            console.error(
                "Favorite language update error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to save favorite language."

            });

        }

    }
);

/* ==========================================
   UPDATE PROFILE
========================================== */

app.put(
    "/api/auth/profile",
    requireAuth,
    async (req, res) => {

        try {

            const {
                name,
                username,
                email,
                bio,
                favoriteLanguage
            } = req.body || {};


            /* ==================================
               VALIDATION
            ================================== */

            const cleanName =
                String(name || "").trim();

            const cleanUsername =
                String(username || "")
                    .trim()
                    .toLowerCase();

            const cleanEmail =
                String(email || "")
                    .trim()
                    .toLowerCase();

            const cleanBio =
                String(bio || "").trim();


            if (
                !cleanName ||
                !cleanUsername ||
                !cleanEmail
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Name, username and email are required."

                });

            }


            if (cleanName.length < 2) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Name must contain at least 2 characters."

                });

            }


            if (cleanUsername.length < 3) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Username must contain at least 3 characters."

                });

            }


            if (cleanBio.length > 500) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Bio cannot exceed 500 characters."

                });

            }


            /* ==================================
               CHECK USERNAME
            ================================== */

            const existingUsername =
                await User.findOne({

                    username:
                        cleanUsername,

                    _id: {
                        $ne: req.user._id
                    }

                });


            if (existingUsername) {

                return res.status(409).json({

                    success: false,

                    message:
                        "That username is already in use."

                });

            }


            /* ==================================
               CHECK EMAIL
            ================================== */

            const existingEmail =
                await User.findOne({

                    email:
                        cleanEmail,

                    _id: {
                        $ne: req.user._id
                    }

                });


            if (existingEmail) {

                return res.status(409).json({

                    success: false,

                    message:
                        "That email is already in use."

                });

            }


            /* ==================================
               UPDATE BASIC PROFILE
            ================================== */

            req.user.name =
                cleanName;

            req.user.username =
                cleanUsername;

            req.user.email =
                cleanEmail;

            req.user.bio =
                cleanBio;


            /* ==================================
               UPDATE FAVORITE LANGUAGE
            ================================== */

            if (
                favoriteLanguage &&
                typeof favoriteLanguage === "object" &&
                favoriteLanguage.code &&
                favoriteLanguage.name
            ) {

                req.user.favoriteLanguage = {

                    code:
                        String(
                            favoriteLanguage.code
                        )
                            .trim()
                            .toLowerCase(),

                    name:
                        String(
                            favoriteLanguage.name
                        ).trim()

                };

            } else if (favoriteLanguage === null) {

                req.user.favoriteLanguage = {

                    code: "",
                    name: ""

                };

            }


            /* ==================================
               SAVE USER
            ================================== */

            await req.user.save();


            /* ==================================
               RESPONSE
            ================================== */

            return res.json({

                success: true,

                message:
                    "Profile updated successfully.",

                user:
                    getSafeUser(req.user)

            });

        } catch (error) {

            console.error(
                "Profile update error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to update profile."

            });

        }

    }
);


/* ==========================================
   CHANGE PASSWORD
========================================== */

app.put(
    "/api/auth/password",
    requireAuth,
    async (req, res) => {

        try {

            const {
                currentPassword,
                newPassword,
                confirmPassword
            } = req.body || {};

            if (!currentPassword || !newPassword || !confirmPassword) {
                return res.status(400).json({
                    success: false,
                    message:
                        "Current password, new password and confirmation are required."
                });
            }

            const cleanCurrentPassword =
                String(currentPassword);

            const cleanNewPassword =
                String(newPassword);

            const cleanConfirmPassword =
                String(confirmPassword);

            if (cleanNewPassword.length < 8) {
                return res.status(400).json({
                    success: false,
                    message:
                        "New password must contain at least 8 characters."
                });
            }

            if (cleanNewPassword !== cleanConfirmPassword) {
                return res.status(400).json({
                    success: false,
                    message:
                        "New passwords do not match."
                });
            }

            const passwordMatches =
                await bcrypt.compare(
                    cleanCurrentPassword,
                    req.user.passwordHash
                );

            if (!passwordMatches) {
                return res.status(401).json({
                    success: false,
                    message:
                        "Current password is incorrect."
                });
            }

            const samePassword =
                await bcrypt.compare(
                    cleanNewPassword,
                    req.user.passwordHash
                );

            if (samePassword) {
                return res.status(400).json({
                    success: false,
                    message:
                        "New password must be different from your current password."
                });
            }

            const newPasswordHash =
                await bcrypt.hash(
                    cleanNewPassword,
                    12
                );

            req.user.passwordHash =
                newPasswordHash;

            await req.user.save();

            return res.json({
                success: true,
                message:
                    "Password changed successfully."
            });

        } catch (error) {
            console.error(
                "Change password error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Unable to change password."
            });
        }
    }
);

/* ==========================================
   MESSAGES
========================================== */


/* ==========================================
   SEND MESSAGE
========================================== */

app.post(
    "/api/messages",
    requireAuth,
    async (req, res) => {

        try {

            const {
                recipient,
                content
            } = req.body || {};


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

            const cleanContent =
                String(content || "").trim();


            if (!cleanContent) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Message content is required."

                });

            }


            if (cleanContent.length > 5000) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Message cannot exceed 5000 characters."

                });

            }


            /* ==================================
               PREVENT SELF MESSAGE
            ================================== */

            if (
                String(req.user._id) ===
                String(recipient)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "You cannot message yourself."

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
                        req.user._id,

                    recipient:
                        recipientUser._id,

                    content:
                        cleanContent,

                    read:
                        false

                });


            /* ==================================
               POPULATE MESSAGE USERS
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
);


/* ==========================================
   GET CONVERSATION
========================================== */

app.get(
    "/api/messages/conversation/:userId",
    requireAuth,
    async (req, res) => {

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
                ).select(
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
               GET CONVERSATION
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
               MARK RECEIVED MESSAGES READ
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
);


/* ==========================================
   GET UNREAD MESSAGE COUNT
========================================== */

app.get(
    "/api/messages/unread-count",
    requireAuth,
    async (req, res) => {

        try {

            const unreadCount =
                await Message.countDocuments({

                    recipient:
                        req.user._id,

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
                "Unread message count error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to get unread message count."

            });

        }

    }
);


/* ==========================================
   GET RECENT CONVERSATIONS
========================================== */

app.get(
    "/api/messages/conversations",
    requireAuth,
    async (req, res) => {

        try {

            const currentUserId =
                req.user._id;


            /* ==================================
               GET ALL MESSAGES INVOLVING USER
            ================================== */

            const messages =
                await Message.find({
                    $or: [
                        {
                            sender: currentUserId
                        },
                        {
                            recipient: currentUserId
                        }
                    ]
                })
                    .sort({
                        createdAt: -1
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
               BUILD UNIQUE CONVERSATIONS
            ================================== */

            const conversations = [];

            const seenUsers = new Set();


            for (const message of messages) {

                const isSender =
                    message.sender._id.toString() ===
                    currentUserId.toString();


                const otherUser =
                    isSender
                        ? message.recipient
                        : message.sender;


                if (!otherUser) {
                    continue;
                }


                const otherUserId =
                    otherUser._id.toString();


                /* ==============================
                   ONLY KEEP LATEST MESSAGE
                ============================== */

                if (seenUsers.has(otherUserId)) {
                    continue;
                }


                seenUsers.add(otherUserId);


                /* ==============================
                   COUNT UNREAD MESSAGES
                ============================== */

                const unreadCount =
                    await Message.countDocuments({
                        sender:
                            otherUser._id,

                        recipient:
                            currentUserId,

                        read:
                            false
                    });


                conversations.push({

                    user: {
                        id:
                            otherUser._id.toString(),

                        name:
                            otherUser.name,

                        username:
                            otherUser.username,

                        avatar:
                            otherUser.avatar || ""
                    },

                    lastMessage: {
                        id:
                            message._id.toString(),

                        content:
                            message.content,

                        createdAt:
                            message.createdAt,

                        sentByMe:
                            isSender
                    },

                    unreadCount:
                        unreadCount
                });

            }


            return res.json({

                success: true,

                conversations:
                    conversations

            });


        } catch (error) {

            console.error(
                "Recent conversations error:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Unable to load recent conversations."

            });

        }

    }
);

/* ==========================================
   NOTIFICATIONS API
========================================== */


/* ==========================================
   GET NOTIFICATIONS
========================================== */

app.get(
    "/api/notifications",
    requireAuth,
    async (req, res) => {

        try {

            const notifications =
                await Notification.find({
                    recipient: req.user._id
                })
                    .sort({
                        createdAt: -1
                    })
                    .limit(50)
                    .populate(
                        "actor",
                        "_id name username avatar"
                    );

            return res.json({

                success: true,

                notifications:
                    notifications

            });

        } catch (error) {

            console.error(
                "Get notifications error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to load notifications."

            });

        }

    }
);


/* ==========================================
   GET NOTIFICATION UNREAD COUNT
========================================== */

app.get(
    "/api/notifications/unread-count",
    requireAuth,
    async (req, res) => {

        try {

            const unreadCount =
                await Notification.countDocuments({

                    recipient:
                        req.user._id,

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
                "Notification unread count error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to load notification count."

            });

        }

    }
);


/* ==========================================
   MARK NOTIFICATION AS READ
========================================== */

app.patch(
    "/api/notifications/:notificationId/read",
    requireAuth,
    async (req, res) => {

        try {

            const notification =
                await Notification.findOne({
                    _id:
                        req.params.notificationId,

                    recipient:
                        req.user._id
                });

            if (!notification) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Notification not found."

                });

            }

            notification.read = true;

            await notification.save();

            return res.json({

                success: true,

                message:
                    "Notification marked as read."

            });

        } catch (error) {

            console.error(
                "Mark notification read error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to mark notification as read."

            });

        }

    }
);


/* ==========================================
   MARK ALL NOTIFICATIONS AS READ
========================================== */

app.patch(
    "/api/notifications/read-all",
    requireAuth,
    async (req, res) => {

        try {

            await Notification.updateMany(

                {
                    recipient:
                        req.user._id,

                    read:
                        false
                },

                {
                    $set: {
                        read: true
                    }
                }

            );

            return res.json({

                success: true,

                message:
                    "All notifications marked as read."

            });

        } catch (error) {

            console.error(
                "Mark all notifications read error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to mark all notifications as read."

            });

        }

    }
);


/* ==========================================
   LOGOUT
========================================== */

/* ==========================================
   CURRENT SESSION
========================================== */

app.get(
    "/api/auth/session",
    requireAuth,
    async (req, res) => {

        try {

            const now =
                new Date();

            const expiresAt =
                req.user.sessionTokenExpires;

            const isActive =
                Boolean(
                    expiresAt &&
                    expiresAt > now
                );

            return res.json({

                success: true,

                session: {

                    active:
                        isActive,

                    expiresAt:
                        expiresAt
                            ? expiresAt.toISOString()
                            : null,

                    username:
                        req.user.username,

                    name:
                        req.user.name

                }

            });

        } catch (error) {

            console.error(
                "Current session error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to load current session."

            });

        }

    }
);


app.post(
    "/api/auth/logout",
    requireAuth,
    async (req, res) => {

        try {

            req.user.sessionToken = null;

            req.user.sessionTokenExpires =
                null;

            await req.user.save();


            return res.json({

                success: true,

                message:
                    "Logged out successfully."

            });

        } catch (error) {

            console.error(
                "Logout error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to log out."

            });

        }

    }
);

/* ==========================================
   FRIENDS API
========================================== */


/* ==========================================
   SEARCH USERS
========================================== */

app.get(
    "/api/friends/search",
    requireAuth,
    async (req, res) => {

        try {

            const query =
                String(req.query.q || "")
                    .trim()
                    .toLowerCase();

            if (query.length < 2) {

                return res.json({
                    success: true,
                    users: []
                });

            }

            const users = await User.find({
                _id: {
                    $ne: req.user._id
                },
                $or: [
                    {
                        username: {
                            $regex: query,
                            $options: "i"
                        }
                    },
                    {
                        name: {
                            $regex: query,
                            $options: "i"
                        }
                    }
                ]
            })
                .select(
                    "_id name username avatar bio favoriteLanguage"
                )
                .limit(20)
                .lean();

            return res.json({
                success: true,
                users
            });

        } catch (error) {

            console.error(
                "Friend search error:",
                error
            );

            return res.status(500).json({
                success: false,
                message: "Failed to search users."
            });

        }

    }
);


/* ==========================================
   GET FRIENDS
========================================== */

app.get(
    "/api/friends",
    requireAuth,
    async (req, res) => {

        try {

            const user = await User.findById(
                req.user._id
            )
                .populate(
                    "friends",
                    "_id name username avatar bio favoriteLanguage"
                );

            return res.json({
                success: true,
                friends: user.friends || []
            });

        } catch (error) {

            console.error(
                "Get friends error:",
                error
            );

            return res.status(500).json({
                success: false,
                message: "Failed to load friends."
            });

        }

    }
);


/* ==========================================
   GET FRIEND REQUESTS
========================================== */

app.get(
    "/api/friends/requests",
    requireAuth,
    async (req, res) => {

        try {

            const user = await User.findById(
                req.user._id
            )
                .populate(
                    "friendRequestsReceived",
                    "_id name username avatar bio favoriteLanguage"
                )
                .populate(
                    "friendRequestsSent",
                    "_id name username avatar bio favoriteLanguage"
                );

            return res.json({
                success: true,

                received:
                    user.friendRequestsReceived || [],

                sent:
                    user.friendRequestsSent || []

            });

        } catch (error) {

            console.error(
                "Get friend requests error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Failed to load friend requests."
            });

        }

    }
);


/* ==========================================
   SEND FRIEND REQUEST
========================================== */

app.post(
    "/api/friends/request/:userId",
    requireAuth,
    async (req, res) => {

        try {

            const targetUserId =
                req.params.userId;

            /* ------------------------------
               PREVENT SELF REQUEST
            ------------------------------ */

            if (
                String(targetUserId) ===
                String(req.user._id)
            ) {

                return res.status(400).json({
                    success: false,
                    message:
                        "You cannot send a friend request to yourself."
                });

            }


            const targetUser =
                await User.findById(targetUserId);

            if (!targetUser) {

                return res.status(404).json({
                    success: false,
                    message:
                        "User not found."
                });

            }


            const currentUser =
                await User.findById(req.user._id);


            /* ------------------------------
               ALREADY FRIENDS
            ------------------------------ */

            const alreadyFriends =
                currentUser.friends.some(
                    friendId =>
                        String(friendId) ===
                        String(targetUser._id)
                );

            if (alreadyFriends) {

                return res.status(400).json({
                    success: false,
                    message:
                        "You are already friends with this user."
                });

            }


            /* ------------------------------
               REQUEST ALREADY SENT
            ------------------------------ */

            const requestAlreadySent =
                currentUser.friendRequestsSent.some(
                    userId =>
                        String(userId) ===
                        String(targetUser._id)
                );

            if (requestAlreadySent) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Friend request already sent."
                });

            }


            /* ------------------------------
               TARGET ALREADY SENT REQUEST
            ------------------------------ */

            const targetAlreadyRequested =
                currentUser.friendRequestsReceived.some(
                    userId =>
                        String(userId) ===
                        String(targetUser._id)
                );

            if (targetAlreadyRequested) {

                return res.status(400).json({
                    success: false,
                    message:
                        "This user has already sent you a friend request."
                });

            }


            /* ------------------------------
               ADD REQUEST
            ------------------------------ */

            currentUser.friendRequestsSent.push(
                targetUser._id
            );

            targetUser.friendRequestsReceived.push(
                currentUser._id
            );

            await currentUser.save();
            await targetUser.save();


            /* ------------------------------
               CREATE NOTIFICATION
            ------------------------------ */

            await Notification.create({

                recipient:
                    targetUser._id,

                actor:
                    currentUser._id,

                type:
                    "friend_request",

                message:
                    `${currentUser.name} sent you a friend request.`

            });


            return res.status(201).json({

                success: true,

                message:
                    "Friend request sent successfully."

            });

        } catch (error) {

            console.error(
                "Send friend request error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Failed to send friend request."
            });

        }

    }
);


/* ==========================================
   ACCEPT FRIEND REQUEST
========================================== */

app.post(
    "/api/friends/accept/:userId",
    requireAuth,
    async (req, res) => {

        try {

            const requesterId =
                req.params.userId;

            const currentUser =
                await User.findById(req.user._id);

            const requester =
                await User.findById(requesterId);


            if (!requester) {

                return res.status(404).json({
                    success: false,
                    message:
                        "User not found."
                });

            }


            const requestExists =
                currentUser.friendRequestsReceived.some(
                    userId =>
                        String(userId) ===
                        String(requester._id)
                );

            if (!requestExists) {

                return res.status(400).json({
                    success: false,
                    message:
                        "Friend request not found."
                });

            }


            /* ------------------------------
               REMOVE REQUEST
            ------------------------------ */

            currentUser.friendRequestsReceived =
                currentUser.friendRequestsReceived.filter(
                    userId =>
                        String(userId) !==
                        String(requester._id)
                );

            requester.friendRequestsSent =
                requester.friendRequestsSent.filter(
                    userId =>
                        String(userId) !==
                        String(currentUser._id)
                );


            /* ------------------------------
               ADD FRIENDSHIP
            ------------------------------ */

            if (
                !currentUser.friends.some(
                    friendId =>
                        String(friendId) ===
                        String(requester._id)
                )
            ) {

                currentUser.friends.push(
                    requester._id
                );

            }


            if (
                !requester.friends.some(
                    friendId =>
                        String(friendId) ===
                        String(currentUser._id)
                )
            ) {

                requester.friends.push(
                    currentUser._id
                );

            }


            await currentUser.save();
            await requester.save();


            return res.json({

                success: true,

                message:
                    "Friend request accepted."

            });

        } catch (error) {

            console.error(
                "Accept friend request error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Failed to accept friend request."
            });

        }

    }
);


/* ==========================================
   REJECT FRIEND REQUEST
========================================== */

app.post(
    "/api/friends/reject/:userId",
    requireAuth,
    async (req, res) => {

        try {

            const requesterId =
                req.params.userId;

            const currentUser =
                await User.findById(req.user._id);

            const requester =
                await User.findById(requesterId);


            if (!requester) {

                return res.status(404).json({
                    success: false,
                    message:
                        "User not found."
                });

            }


            currentUser.friendRequestsReceived =
                currentUser.friendRequestsReceived.filter(
                    userId =>
                        String(userId) !==
                        String(requester._id)
                );

            requester.friendRequestsSent =
                requester.friendRequestsSent.filter(
                    userId =>
                        String(userId) !==
                        String(currentUser._id)
                );


            await currentUser.save();
            await requester.save();


            return res.json({

                success: true,

                message:
                    "Friend request rejected."

            });

        } catch (error) {

            console.error(
                "Reject friend request error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Failed to reject friend request."
            });

        }

    }
);

/* ==========================================
   GROUPS
========================================== */


/* ==========================================
   CREATE GROUP
========================================== */

app.post(
    "/api/groups",
    requireAuth,
    async (req, res) => {

        try {

            const {
                name,
                description,
                privacy
            } = req.body || {};


            /* ------------------------------
               VALIDATION
            ------------------------------ */

            if (
                !name ||
                !String(name).trim()
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Group name is required."

                });

            }


            const cleanName =
                String(name).trim();

            const cleanDescription =
                description
                    ? String(description).trim()
                    : "";

            const cleanPrivacy =
                privacy === "private"
                    ? "private"
                    : "public";


            if (cleanName.length > 100) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Group name cannot exceed 100 characters."

                });

            }


            if (cleanDescription.length > 1000) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Group description cannot exceed 1000 characters."

                });

            }


            /* ------------------------------
               CREATE GROUP
            ------------------------------ */

            const group =
                await Group.create({

                    name:
                        cleanName,

                    description:
                        cleanDescription,

                    creator:
                        req.user._id,

                    admins: [
                        req.user._id
                    ],

                    members: [
                        req.user._id
                    ],

                    privacy:
                        cleanPrivacy

                });


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.status(201).json({

                success: true,

                message:
                    "Group created successfully.",

                group: {

                    id:
                        group._id.toString(),

                    name:
                        group.name,

                    description:
                        group.description,

                    creator:
                        group.creator.toString(),

                    admins:
                        group.admins.map(
                            adminId =>
                                adminId.toString()
                        ),

                    members:
                        group.members.map(
                            memberId =>
                                memberId.toString()
                        ),

                    privacy:
                        group.privacy,

                    createdAt:
                        group.createdAt,

                    updatedAt:
                        group.updatedAt

                }

            });

        } catch (error) {

            console.error(
                "Create group error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to create group."

            });

        }

    }
);


/* ==========================================
   LIST MY GROUPS
========================================== */

app.get(
    "/api/groups",
    requireAuth,
    async (req, res) => {

        try {

            const groups =
                await Group.find({

                    members:
                        req.user._id

                })
                    .populate(
                        "creator",
                        "name username avatar"
                    )
                    .populate(
                        "admins",
                        "name username avatar"
                    )
                    .sort({
                        createdAt: -1
                    });


            return res.json({

                success: true,

                count:
                    groups.length,

                groups:
                    groups

            });

        } catch (error) {

            console.error(
                "List groups error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to load groups."

            });

        }

    }
);


/* ==========================================
   VIEW ONE GROUP
========================================== */

app.get(
    "/api/groups/:groupId",
    requireAuth,
    async (req, res) => {

        try {

            const groupId =
                req.params.groupId;


            /* ------------------------------
               VALIDATE OBJECT ID
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                )
                    .populate(
                        "creator",
                        "name username avatar bio"
                    )
                    .populate(
                        "admins",
                        "name username avatar"
                    )
                    .populate(
                        "members",
                        "name username avatar bio"
                    );


            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK MEMBERSHIP
            ------------------------------ */

            const isMember =
                group.members.some(
                    member =>
                        String(member._id) ===
                        String(req.user._id)
                );


            if (!isMember) {

                return res.status(403).json({

                    success: false,

                    message:
                        "You are not a member of this group."

                });

            }


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.json({

                success: true,

                group:
                    group

            });

        } catch (error) {

            console.error(
                "View group error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to load group."

            });

        }

    }
);

/* ==========================================
/* ==========================================
   GROUP CHAT - LIST MESSAGES
========================================== */

app.get(
    "/api/groups/:groupId/messages",
    requireAuth,
    async (req, res) => {

        try {

            const groupId =
                req.params.groupId;


            /* ------------------------------
               VALIDATE GROUP ID
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK MEMBERSHIP
            ------------------------------ */

            const isMember =
                group.members.some(
                    memberId =>
                        String(memberId) ===
                        String(req.user._id)
                );

            if (!isMember) {

                return res.status(403).json({

                    success: false,

                    message:
                        "You are not a member of this group."

                });

            }


            /* ------------------------------
               LOAD MESSAGES
            ------------------------------ */

            const messages =
                await GroupMessage.find({
                    group: groupId
                })
                    .populate(
                        "sender",
                        "name username avatar"
                    )
                    .sort({
                        createdAt: 1
                    })
                    .limit(200);


            return res.json({

                success: true,

                groupId:

                    groupId,

                count:
                    messages.length,

                messages:
                    messages

            });

        } catch (error) {

            console.error(
                "Load group messages error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to load group messages."

            });

        }

    }
);


/* ==========================================
   GROUP CHAT - SEND MESSAGE
========================================== */

app.post(
    "/api/groups/:groupId/messages",
    requireAuth,
    async (req, res) => {

        try {

            const groupId =
                req.params.groupId;

            const {
                content
            } = req.body || {};


            /* ------------------------------
               VALIDATE GROUP ID
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               VALIDATE CONTENT
            ------------------------------ */

            if (
                content === undefined ||
                content === null
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Message content is required."

                });

            }


            const cleanContent =
                String(content).trim();


            if (!cleanContent) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Message cannot be empty."

                });

            }


            if (
                cleanContent.length > 5000
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Message cannot exceed 5000 characters."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK MEMBERSHIP
            ------------------------------ */

            const isMember =
                group.members.some(
                    memberId =>
                        String(memberId) ===
                        String(req.user._id)
                );

            if (!isMember) {

                return res.status(403).json({

                    success: false,

                    message:
                        "You are not a member of this group."

                });

            }


            /* ------------------------------
               CREATE MESSAGE
            ------------------------------ */

            const message =
                await GroupMessage.create({

                    group:
                        groupId,

                    sender:
                        req.user._id,

                    content:
                        cleanContent

                });


            /* ------------------------------
               LOAD SENDER DETAILS
            ------------------------------ */

            await message.populate(
                "sender",
                "name username avatar"
            );


            return res.status(201).json({

                success: true,

                message:
                    "Group message sent successfully.",

                data:
                    message

            });

        } catch (error) {

            console.error(
                "Send group message error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to send group message."

            });

        }

    }
);


/* ==========================================


   ADD MEMBER TO GROUP
========================================== */

app.post(
    "/api/groups/:groupId/members",
    requireAuth,
    async (req, res) => {

        try {

            const {
                username
            } = req.body || {};


            /* ------------------------------
               VALIDATE GROUP ID
            ------------------------------ */

            const groupId =
                req.params.groupId;

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               VALIDATE USERNAME
            ------------------------------ */

            if (
                !username ||
                !String(username).trim()
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Username is required."

                });

            }


            const cleanUsername =
                String(username).trim();


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK REQUESTER MEMBERSHIP
            ------------------------------ */

            const requesterIsMember =
                group.members.some(
                    memberId =>
                        String(memberId) ===
                        String(req.user._id)
                );

            if (!requesterIsMember) {

                return res.status(403).json({

                    success: false,

                    message:
                        "You are not a member of this group."

                });

            }


            /* ------------------------------
               CHECK ADMIN PERMISSION
            ------------------------------ */

            const requesterIsAdmin =
                group.admins.some(
                    adminId =>
                        String(adminId) ===
                        String(req.user._id)
                );

            if (!requesterIsAdmin) {

                return res.status(403).json({

                    success: false,

                    message:
                        "Only group admins can add members."

                });

            }


            /* ------------------------------
               FIND USER
            ------------------------------ */

            const user =
                await User.findOne({
                    username: cleanUsername
                });

            if (!user) {

                return res.status(404).json({

                    success: false,

                    message:
                        "User not found."

                });

            }


            /* ------------------------------
               CHECK EXISTING MEMBER
            ------------------------------ */

            const alreadyMember =
                group.members.some(
                    memberId =>
                        String(memberId) ===
                        String(user._id)
                );

            if (alreadyMember) {

                return res.status(400).json({

                    success: false,

                    message:
                        "User is already a member of this group."

                });

            }


            /* ------------------------------
               ADD MEMBER
            ------------------------------ */

            group.members.push(
                user._id
            );

            await group.save();


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.json({

                success: true,

                message:
                    "Member added successfully.",

                member: {

                    id:
                        user._id.toString(),

                    name:
                        user.name,

                    username:
                        user.username,

                    avatar:
                        user.avatar

                }

            });

        } catch (error) {

            console.error(
                "Add group member error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to add group member."

            });

        }

    }
);

/* ==========================================
   REMOVE MEMBER FROM GROUP
========================================== */

app.delete(
    "/api/groups/:groupId/members/:userId",
    requireAuth,
    async (req, res) => {

        try {

            const {
                groupId,
                userId
            } = req.params;


            /* ------------------------------
               VALIDATE IDS
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }

            if (
                !mongoose.Types.ObjectId.isValid(
                    userId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid user ID."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK ADMIN
            ------------------------------ */

            const requesterIsAdmin =
                group.admins.some(
                    adminId =>
                        String(adminId) ===
                        String(req.user._id)
                );

            if (!requesterIsAdmin) {

                return res.status(403).json({

                    success: false,

                    message:
                        "Only group admins can remove members."

                });

            }


            /* ------------------------------
               PREVENT REMOVING CREATOR
            ------------------------------ */

            if (
                String(group.creator) ===
                String(userId)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "The group creator cannot be removed."

                });

            }


            /* ------------------------------
               CHECK MEMBER
            ------------------------------ */

            const isMember =
                group.members.some(
                    memberId =>
                        String(memberId) ===
                        String(userId)
                );

            if (!isMember) {

                return res.status(404).json({

                    success: false,

                    message:
                        "User is not a member of this group."

                });

            }


            /* ------------------------------
               REMOVE MEMBER
            ------------------------------ */

            group.members =
                group.members.filter(
                    memberId =>
                        String(memberId) !==
                        String(userId)
                );


            /* ------------------------------
               REMOVE ADMIN STATUS TOO
            ------------------------------ */

            group.admins =
                group.admins.filter(
                    adminId =>
                        String(adminId) !==
                        String(userId)
                );


            await group.save();


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.json({

                success: true,

                message:
                    "Member removed successfully."

            });

        } catch (error) {

            console.error(
                "Remove group member error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to remove group member."

            });

        }

    }
);

/* ==========================================
   LEAVE GROUP
========================================== */

app.delete(
    "/api/groups/:groupId/leave",
    requireAuth,
    async (req, res) => {

        try {

            const groupId =
                req.params.groupId;


            /* ------------------------------
               VALIDATE GROUP ID
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               PREVENT CREATOR FROM LEAVING
            ------------------------------ */

            if (
                String(group.creator) ===
                String(req.user._id)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "The group creator cannot leave the group."

                });

            }


            /* ------------------------------
               CHECK MEMBERSHIP
            ------------------------------ */

            const isMember =
                group.members.some(
                    memberId =>
                        String(memberId) ===
                        String(req.user._id)
                );

            if (!isMember) {

                return res.status(400).json({

                    success: false,

                    message:
                        "You are not a member of this group."

                });

            }


            /* ------------------------------
               REMOVE FROM MEMBERS
            ------------------------------ */

            group.members =
                group.members.filter(
                    memberId =>
                        String(memberId) !==
                        String(req.user._id)
                );


            /* ------------------------------
               REMOVE ADMIN STATUS
            ------------------------------ */

            group.admins =
                group.admins.filter(
                    adminId =>
                        String(adminId) !==
                        String(req.user._id)
                );


            await group.save();


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.json({

                success: true,

                message:
                    "You left the group successfully."

            });

        } catch (error) {

            console.error(
                "Leave group error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to leave group."

            });

        }

    }
);

/* ==========================================
   UPDATE GROUP
========================================== */

app.put(
    "/api/groups/:groupId",
    requireAuth,
    async (req, res) => {

        try {

            const groupId =
                req.params.groupId;

            const {
                name,
                description,
                privacy
            } = req.body || {};


            /* ------------------------------
               VALIDATE GROUP ID
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK ADMIN
            ------------------------------ */

            const isAdmin =
                group.admins.some(
                    adminId =>
                        String(adminId) ===
                        String(req.user._id)
                );

            if (!isAdmin) {

                return res.status(403).json({

                    success: false,

                    message:
                        "Only group admins can update the group."

                });

            }


            /* ------------------------------
               UPDATE NAME
            ------------------------------ */

            if (name !== undefined) {

                const cleanName =
                    String(name).trim();

                if (!cleanName) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Group name cannot be empty."

                    });

                }

                if (
                    cleanName.length > 100
                ) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Group name cannot exceed 100 characters."

                    });

                }

                group.name =
                    cleanName;

            }


            /* ------------------------------
               UPDATE DESCRIPTION
            ------------------------------ */

            if (
                description !== undefined
            ) {

                const cleanDescription =
                    String(description).trim();

                if (
                    cleanDescription.length > 1000
                ) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Group description cannot exceed 1000 characters."

                    });

                }

                group.description =
                    cleanDescription;

            }


            /* ------------------------------
               UPDATE PRIVACY
            ------------------------------ */

            if (privacy !== undefined) {

                if (
                    privacy !== "public" &&
                    privacy !== "private"
                ) {

                    return res.status(400).json({

                        success: false,

                        message:
                            "Privacy must be public or private."

                    });

                }

                group.privacy =
                    privacy;

            }


            /* ------------------------------
               SAVE CHANGES
            ------------------------------ */

            await group.save();


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.json({

                success: true,

                message:
                    "Group updated successfully.",

                group: {

                    id:
                        group._id.toString(),

                    name:
                        group.name,

                    description:
                        group.description,

                    creator:
                        group.creator.toString(),

                    admins:
                        group.admins.map(
                            adminId =>
                                adminId.toString()
                        ),

                    members:
                        group.members.map(
                            memberId =>
                                memberId.toString()
                        ),

                    privacy:
                        group.privacy,

                    createdAt:
                        group.createdAt,

                    updatedAt:
                        group.updatedAt

                }

            });

        } catch (error) {

            console.error(
                "Update group error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to update group."

            });

        }

    }
);

/* ==========================================
   DELETE GROUP
========================================== */

app.delete(
    "/api/groups/:groupId",
    requireAuth,
    async (req, res) => {

        try {

            const groupId =
                req.params.groupId;


            /* ------------------------------
               VALIDATE GROUP ID
            ------------------------------ */

            if (
                !mongoose.Types.ObjectId.isValid(
                    groupId
                )
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid group ID."

                });

            }


            /* ------------------------------
               FIND GROUP
            ------------------------------ */

            const group =
                await Group.findById(
                    groupId
                );

            if (!group) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Group not found."

                });

            }


            /* ------------------------------
               CHECK CREATOR
            ------------------------------ */

            if (
                String(group.creator) !==
                String(req.user._id)
            ) {

                return res.status(403).json({

                    success: false,

                    message:
                        "Only the group creator can delete the group."

                });

            }


            /* ------------------------------
               DELETE GROUP
            ------------------------------ */

            await Group.deleteOne({
                _id: groupId
            });


            /* ------------------------------
               RESPONSE
            ------------------------------ */

            return res.json({

                success: true,

                message:
                    "Group deleted successfully."

            });

        } catch (error) {

            console.error(
                "Delete group error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Failed to delete group."

            });

        }

    }
);

/* ==========================================
   CREATE POST
========================================== */

app.post(
    "/api/posts",
    requireAuth,
    async (req, res) => {

        try {

            const {
                content,
                feeling,
                photo,
                video
            } = req.body || {};

            const cleanContent =
                typeof content === "string"
                    ? content.trim()
                    : "";

            const cleanPhoto =
                typeof photo === "string"
                    ? photo.trim()
                    : "";

            const cleanVideo =
                typeof video === "string"
                    ? video.trim()
                    : "";

            if (
                !cleanContent &&
                !cleanPhoto &&
                !cleanVideo
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Post must contain text, a photo, or a video."

                });

            }

            const post =
                await Post.create({

                    author:
                        req.user._id,

                    content:
                        cleanContent,

                    feeling:
                        feeling || null,

                    photo:
                        cleanPhoto || null,

                    video:
                        cleanVideo || null

                });

            await post.populate(
                "author",
                "name username avatar"
            );

            console.log(
                "TransL MongoDB post created:",
                post._id.toString()
            );

            return res.status(201).json({

                success: true,

                message:
                    "Post created successfully.",

                post:
                    post

            });

        } catch (error) {

            console.error(
                "Create post error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to create post."

            });

        }

    }
);

/* ==========================================
   GET POSTS
========================================== */

app.get(
    "/api/posts",
    requireAuth,
    async (req, res) => {

        try {

            const posts =
                await Post.find()
                    .sort({ createdAt: -1 })
                    .populate(
                        "author",
                        "name username avatar"
                    )
                    .populate(
                        "comments.author",
                        "name username avatar"
                    );

            return res.json({

                success: true,

                posts:
                    posts

            });

        } catch (error) {

            console.error(
                "Get posts error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to load posts."

            });

        }

    }
);


/* ==========================================
   GET POST LIKES
========================================== */

app.get(
    "/api/posts/:postId/likes",
    requireAuth,
    async (req, res) => {

        try {

            const post =
                await Post.findById(
                    req.params.postId
                )
                    .populate(
                        "likes",
                        "_id name username avatar"
                    );

            if (!post) {

                return res.status(404).json({
                    success: false,
                    message:
                        "Post not found."
                });

            }

            return res.json({
                success: true,
                likes: post.likes || [],
                likeCount:
                    post.likes
                        ? post.likes.length
                        : 0
            });

        } catch (error) {

            console.error(
                "Get post likes error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Unable to load post likes."
            });

        }

    }
);


/* ==========================================
   LIKE / UNLIKE POST
========================================== */

app.post(
    "/api/posts/:postId/like",
    requireAuth,
    async (req, res) => {

        try {

            const post =
                await Post.findById(
                    req.params.postId
                );

            if (!post) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Post not found."

                });

            }

            const userId =
                req.user._id.toString();

            const existingLike =
                post.likes.some(
                    (user) =>
                        user.toString() === userId
                );

            if (existingLike) {

                post.likes =
                    post.likes.filter(
                        (user) =>
                            user.toString() !== userId
                    );

            } else {

                post.likes.push(
                    req.user._id
                );

            }

            await post.save();

            return res.json({

                success: true,

                liked:
                    !existingLike,

                likeCount:
                    post.likes.length

            });

        } catch (error) {

            console.error(
                "Like post error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to update post like."

            });

        }

    }
);


/* ==========================================
   GET POST COMMENTS
========================================== */

app.get(
    "/api/posts/:postId/comments",
    requireAuth,
    async (req, res) => {

        try {

            const post =
                await Post.findById(
                    req.params.postId
                )
                    .populate(
                        "comments.author",
                        "_id name username avatar"
                    );

            if (!post) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Post not found."

                });

            }

            return res.json({

                success: true,

                comments:
                    post.comments || [],

                commentCount:
                    post.comments
                        ? post.comments.length
                        : 0

            });

        } catch (error) {

            console.error(
                "Get post comments error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to load post comments."

            });

        }

    }
);


/* ==========================================
   ADD COMMENT TO POST
========================================== */
app.post(
    "/api/posts/:postId/comment",
    requireAuth,
    async (req, res) => {

        try {

            const {
                text
            } = req.body || {};

            if (
                typeof text !== "string" ||
                !text.trim()
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Comment text is required."

                });

            }

            const post =
                await Post.findById(
                    req.params.postId
                );

            if (!post) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Post not found."

                });

            }

            post.comments.push({

                author:
                    req.user._id,

                text:
                    text.trim()

            });

            await post.save();

            const newComment =
                post.comments[
                post.comments.length - 1
                ];

            await post.populate(
                "comments.author",
                "name username avatar"
            );

            const populatedComment =
                post.comments.find(
                    (comment) =>
                        comment._id.toString() ===
                        newComment._id.toString()
                );

            return res.status(201).json({

                success: true,

                comment:
                    populatedComment,

                commentCount:
                    post.comments.length

            });

        } catch (error) {

            console.error(
                "Add comment error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to add comment."

            });

        }

    }
);


/* ==========================================
   SHARE POST
========================================== */

app.post(
    "/api/posts/:postId/share",
    requireAuth,
    async (req, res) => {

        try {

            const post =
                await Post.findById(
                    req.params.postId
                );

            if (!post) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Post not found."

                });

            }

            const userId =
                req.user._id.toString();

            const alreadyShared =
                post.shares.some(
                    (user) =>
                        user.toString() === userId
                );

            if (!alreadyShared) {

                post.shares.push(
                    req.user._id
                );

                await post.save();

            }

            return res.json({

                success: true,

                shared:
                    true,

                shareCount:
                    post.shares.length

            });

        } catch (error) {

            console.error(
                "Share post error:",
                error
            );

            return res.status(500).json({

                success: false,

                message:
                    "Unable to share post."

            });

        }

    }
);

/* ==========================================
   FAVORITE POST
========================================== */

app.post(
    "/api/posts/:postId/favorite",
    requireAuth,
    async (req, res) => {

        try {

            const post =
                await Post.findById(req.params.postId);

            if (!post) {

                return res.status(404).json({
                    success: false,
                    message: "Post not found."
                });

            }

            if (!Array.isArray(post.favorites)) {
                post.favorites = [];
            }

            const userId =
                req.user._id.toString();

            const existingIndex =
                post.favorites.findIndex(
                    id => id.toString() === userId
                );

            let favorited;

            if (existingIndex === -1) {

                post.favorites.push(
                    req.user._id
                );

                favorited = true;

            } else {

                post.favorites.splice(
                    existingIndex,
                    1
                );

                favorited = false;
            }

            await post.save();

            return res.json({
                success: true,
                favorited: favorited,
                favoriteCount:
                    post.favorites.length
            });

        } catch (error) {

            console.error(
                "Favorite post error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Unable to favorite post."
            });
        }
    }
);


/* ==========================================
   START SERVER
========================================== */

async function startServer() {

    try {

        await connectDatabase();

        app.listen(
            PORT,
            () => {

                console.log(
                    `TransL server running on port ${PORT}`
                );

            }
        );

    } catch (error) {

        console.error(
            "TransL server startup failed."
        );

        process.exit(1);

    }

}

startServer();























