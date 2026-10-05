"use strict";

/* ==========================================
   TRANSL
   PROFILE MODULE
========================================== */


/* ==========================================
   PROFILE STATE
========================================== */

let translProfileUser = null;
let translProfileEditing = false;


/* ==========================================
   GET CURRENT USER
========================================== */

function getTransLProfileUser() {

    if (
        typeof translAuthState !== "undefined" &&
        translAuthState &&
        translAuthState.user
    ) {
        return translAuthState.user;
    }

    try {

        const storedUser =
            localStorage.getItem("translCurrentUser");

        if (storedUser) {
            return JSON.parse(storedUser);
        }

    } catch (error) {

        console.error(
            "Unable to read TransL profile user:",
            error
        );

    }

    return null;
}


/* ==========================================
   INITIALIZE PROFILE
========================================== */

function initializeTransLProfile() {

    translProfileUser = getTransLProfileUser();

    if (!translProfileUser) {

        console.warn(
            "No authenticated TransL user available for profile."
        );

        return;
    }

    updateTransLSidebarProfile();

    renderTransLProfile();
}


/* ==========================================
   GLOBAL AVATAR RENDERER
========================================== */

function renderTransLAvatarHTML(
    avatar,
    fallbackInitial = "T",
    altText = ""
) {

    const safeAvatar =
        typeof avatar === "string"
            ? avatar.trim()
            : "";

    const safeInitial =
        String(fallbackInitial || "T")
            .charAt(0)
            .toUpperCase();

    const safeAlt =
        typeof escapeTransLProfileHTML === "function"
            ? escapeTransLProfileHTML(
                altText || "Profile picture"
            )
            : "";

    if (
        safeAvatar &&
        (
            /^https?:\/\//i.test(safeAvatar) ||
            /^data:image\//i.test(safeAvatar) ||
            /^\/[^/]/.test(safeAvatar)
        )
    ) {

        const imageUrl =
            /^\/[^/]/.test(safeAvatar)
                ? translApiUrl(safeAvatar)
                : safeAvatar;

        const safeUrl =
            typeof escapeTransLProfileHTML === "function"
                ? escapeTransLProfileHTML(imageUrl)
                : imageUrl;

        return `
            <img
                src="${safeUrl}"
                alt="${safeAlt}"
                class="transl-global-avatar-image"
                loading="lazy"
                decoding="async"
            >
        `;
    }

    return `
        <span class="transl-global-avatar-fallback">
            ${typeof escapeTransLProfileHTML === "function"
            ? escapeTransLProfileHTML(
                safeAvatar || safeInitial
            )
            : safeAvatar || safeInitial
        }
        </span>
    `;
}

/* ==========================================
   UPDATE SIDEBAR PROFILE
========================================== */

function updateTransLSidebarProfile() {

    if (!translProfileUser) {
        return;
    }

    const name =
        translProfileUser.name ||
        translProfileUser.username ||
        "TransL User";

    const avatar =
        translProfileUser.avatar ||
        name.charAt(0).toUpperCase();

    document
        .querySelectorAll(".sidebar-profile .user-avatar")
        .forEach(element => {

            element.innerHTML =
                renderTransLAvatarHTML(
                    avatar,
                    name.charAt(0),
                    name
                );

        });

    document
        .querySelectorAll(".sidebar-profile-info strong")
        .forEach(element => {

            element.textContent = name;

        });
}


/* ==========================================
   CREATE PROFILE PAGE
========================================== */

function renderTransLProfile() {

    const container =
        document.getElementById("transl-profile-content");

    if (!container) {
        return;
    }

    translProfileUser = getTransLProfileUser();

    if (!translProfileUser) {

        container.innerHTML = `
            <div class="transl-page-card profile-empty">

                <div class="transl-page-icon">
                    P
                </div>

                <h1>Profile</h1>

                <p>
                    Please log in to view your profile.
                </p>

            </div>
        `;

        return;
    }

    const name =
        translProfileUser.name ||
        translProfileUser.username ||
        "TransL User";

    const username =
        translProfileUser.username ||
        "";

    const email =
        translProfileUser.email ||
        "";

    const bio =
        translProfileUser.bio ||
        "No bio added yet.";

    const avatar =
        translProfileUser.avatar ||
        name.charAt(0).toUpperCase();

    const favoriteLanguage =
        translProfileUser.favoriteLanguage &&
            translProfileUser.favoriteLanguage.name
            ? translProfileUser.favoriteLanguage.name
            : "Not selected";

    container.innerHTML = `

        <div class="transl-profile-page">

            <!-- PROFILE HEADER -->

            <div class="transl-profile-header">

                <div class="transl-profile-avatar">
                    ${renderTransLAvatarHTML(avatar, name.charAt(0), name)}
                </div>

                <div class="transl-profile-heading">

                    <h1>
                        ${escapeTransLProfileHTML(name)}
                    </h1>

                    <p class="transl-profile-username">
                        ${username
            ? "@" + escapeTransLProfileHTML(username)
            : ""}
                    </p>

                    <p class="transl-profile-bio">
                        ${escapeTransLProfileHTML(bio)}
                    </p>

                </div>

                <button
                    type="button"
                    class="transl-profile-edit-button"
                    id="transl-edit-profile-button"
                >
                    Edit Profile
                </button>

            </div>


            <!-- PROFILE INFORMATION -->

            <div class="transl-profile-details">

                <div class="transl-profile-detail">

                    <span class="transl-profile-label">
                        Name
                    </span>

                    <strong>
                        ${escapeTransLProfileHTML(name)}
                    </strong>

                </div>


                <div class="transl-profile-detail">

                    <span class="transl-profile-label">
                        Username
                    </span>

                    <strong>
                        ${username
            ? "@" + escapeTransLProfileHTML(username)
            : "Not set"}
                    </strong>

                </div>


                <div class="transl-profile-detail">

                    <span class="transl-profile-label">
                        Email
                    </span>

                    <strong>
                        ${escapeTransLProfileHTML(email || "Not set")}
                    </strong>

                </div>


                <div class="transl-profile-detail">

                    <span class="transl-profile-label">
                        Favorite language
                    </span>

                    <strong>
                        ${escapeTransLProfileHTML(favoriteLanguage)}
                    </strong>

                </div>


                <div class="transl-profile-detail transl-profile-detail-full">

                    <span class="transl-profile-label">
                        Bio
                    </span>

                    <strong>
                        ${escapeTransLProfileHTML(bio)}
                    </strong>

                </div>

            </div>

        </div>
    `;

    const editButton =
        document.getElementById("transl-edit-profile-button");

    if (editButton) {

        editButton.onclick =
            openTransLEditProfile;

    }
}


/* ==========================================
   EDIT PROFILE
========================================== */

function openTransLEditProfile() {

    if (!translProfileUser) {
        return;
    }

    translProfileEditing = true;

    const container =
        document.getElementById("transl-profile-content");

    if (!container) {
        return;
    }

    const name =
        translProfileUser.name || "";

    const username =
        translProfileUser.username || "";

    const email =
        translProfileUser.email || "";

    const bio =
        translProfileUser.bio || "";


    const avatar =
        translProfileUser.avatar || "T";

    const favoriteCode =
        translProfileUser.favoriteLanguage &&
            translProfileUser.favoriteLanguage.code
            ? translProfileUser.favoriteLanguage.code
            : "";

    let languageOptions = "";

    if (typeof TRANSL_LANGUAGES !== "undefined") {

        languageOptions =
            TRANSL_LANGUAGES
                .map(language => {

                    const selected =
                        language.code === favoriteCode
                            ? "selected"
                            : "";

                    return `
                        <option
                            value="${escapeTransLProfileHTML(language.code)}"
                            ${selected}
                        >
                            ${escapeTransLProfileHTML(language.name)}
                        </option>
                    `;

                })
                .join("");

    }

    container.innerHTML = `

        <div class="transl-profile-page transl-profile-edit-page">

            <div class="transl-profile-edit-header">

                <div>

                    <h1>
                        Edit Profile
                    </h1>

                    <p>
                        Update your TransL profile information.
                    </p>

                </div>

            </div>


            <form
                id="transl-profile-form"
                class="transl-profile-form"
            >


                <div class="transl-profile-avatar-upload">

                    <div
                        class="transl-profile-avatar-preview"
                        id="transl-profile-avatar-preview"
                    >
                        ${renderTransLAvatarHTML(avatar, name.charAt(0), name)}
                    </div>

                    <div class="transl-profile-avatar-controls">

                        <label
                            for="transl-profile-avatar"
                            class="transl-profile-avatar-button"
                        >
                            Choose Profile Picture
                        </label>

                        <input
                            type="file"
                            id="transl-profile-avatar"
                            accept="image/jpeg,image/png,image/webp,image/gif"
                            hidden
                        >

                        <p class="transl-profile-avatar-help">
                            JPG, PNG, WEBP or GIF. Maximum 10 MB.
                        </p>

                    </div>

                </div>

                <label>

                    <span>Name</span>

                    <input
                        type="text"
                        id="transl-profile-name"
                        value="${escapeTransLProfileHTML(name)}"
                        maxlength="100"
                        required
                    >

                </label>


                <label>

                    <span>Username</span>

                    <input
                        type="text"
                        id="transl-profile-username"
                        value="${escapeTransLProfileHTML(username)}"
                        maxlength="50"
                        required
                    >

                </label>


                <label>

                    <span>Email</span>

                    <input
                        type="email"
                        id="transl-profile-email"
                        value="${escapeTransLProfileHTML(email)}"
                        required
                    >

                </label>


                <label>

                    <span>Favorite language</span>

                    <select
                        id="transl-profile-language"
                    >

                        <option value="">
                            Select a language
                        </option>

                        ${languageOptions}

                    </select>

                </label>


                <label>

                    <span>Bio</span>

                    <textarea
                        id="transl-profile-bio"
                        maxlength="500"
                        rows="5"
                    >${escapeTransLProfileHTML(bio)}</textarea>

                </label>


                <div class="transl-profile-form-actions">

                    <button
                        type="button"
                        class="transl-profile-cancel-button"
                        id="transl-profile-cancel"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        class="transl-profile-save-button"
                    >
                        Save Changes
                    </button>

                </div>

                <p
                    id="transl-profile-message"
                    class="transl-profile-message"
                    aria-live="polite"
                ></p>

            </form>

        </div>
    `;


    const form =
        document.getElementById("transl-profile-form");

    const cancelButton =
        document.getElementById("transl-profile-cancel");

    const avatarInput =
        document.getElementById("transl-profile-avatar");

    const avatarPreview =
        document.getElementById("transl-profile-avatar-preview");

    if (avatarInput && avatarPreview) {

        avatarInput.addEventListener(
            "change",
            () => {

                const file =
                    avatarInput.files &&
                    avatarInput.files[0];

                if (!file) {
                    return;
                }

                if (
                    !file.type ||
                    !file.type.startsWith("image/")
                ) {

                    avatarInput.value = "";

                    alert(
                        "Please choose an image file."
                    );

                    return;
                }

                if (file.size > 10 * 1024 * 1024) {

                    avatarInput.value = "";

                    alert(
                        "Profile pictures must be 10 MB or smaller."
                    );

                    return;
                }

                const reader =
                    new FileReader();

                reader.onload = () => {

                    avatarPreview.innerHTML =
                        `<img
                            src="${reader.result}"
                            alt="Profile picture preview"
                        >`;

                };

                reader.readAsDataURL(file);

            }
        );

    }

    if (form) {

        form.addEventListener(
            "submit",
            saveTransLProfile
        );

    }

    if (cancelButton) {

        cancelButton.addEventListener(
            "click",
            () => {

                translProfileEditing = false;

                renderTransLProfile();

            }
        );

    }
}


/* ==========================================
   SAVE PROFILE
========================================== */

async function saveTransLProfile(event) {

    event.preventDefault();

    const message =
        document.getElementById("transl-profile-message");

    const name =
        document
            .getElementById("transl-profile-name")
            .value
            .trim();

    const username =
        document
            .getElementById("transl-profile-username")
            .value
            .trim();

    const email =
        document
            .getElementById("transl-profile-email")
            .value
            .trim();

    const bio =
        document
            .getElementById("transl-profile-bio")
            .value
            .trim();

    const languageCode =
        document
            .getElementById("transl-profile-language")
            .value;


    if (!name || !username || !email) {

        if (message) {

            message.textContent =
                "Name, username and email are required.";

        }

        return;
    }


    if (message) {

        message.textContent =
            "Saving profile...";

    }


    try {

        const token =
            localStorage.getItem(
                "translAuthToken"
            );


        let avatarPath =
            translProfileUser &&
                translProfileUser.avatar
                ? translProfileUser.avatar
                : "";


        const avatarInput =
            document.getElementById(
                "transl-profile-avatar"
            );


        const avatarFile =
            avatarInput &&
            avatarInput.files &&
            avatarInput.files[0];


        if (avatarFile) {

            if (
                !avatarFile.type ||
                !avatarFile.type.startsWith("image/")
            ) {

                throw new Error(
                    "Please choose a valid image file."
                );

            }


            if (
                avatarFile.size >
                10 * 1024 * 1024
            ) {

                throw new Error(
                    "Profile pictures must be 10 MB or smaller."
                );

            }


            if (message) {

                message.textContent =
                    "Uploading profile picture...";

            }


            const avatarFormData =
                new FormData();

            avatarFormData.append(
                "avatar",
                avatarFile
            );


            const avatarResponse =
                await fetch(
                    translApiUrl(
                        "/api/uploads/avatar"
                    ),
                    {
                        method: "POST",

                        headers: {
                            "Authorization":
                                `Bearer ${token}`
                        },

                        body:
                            avatarFormData
                    }
                );


            const avatarData =
                await avatarResponse.json();


            if (!avatarResponse.ok) {

                throw new Error(
                    avatarData.message ||
                    "Unable to upload profile picture."
                );

            }


            avatarPath =
                avatarData.avatar ||
                avatarPath;


            if (!avatarPath) {

                throw new Error(
                    "Profile picture upload did not return an avatar path."
                );

            }

        }


        if (message) {

            message.textContent =
                "Saving profile...";

        }


        const response =
            await fetch(
                translApiUrl("/api/auth/profile"),
                {
                    method: "PUT",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`

                    },

                    body: JSON.stringify({

                        name,
                        username,
                        email,
                        bio,
                        favoriteLanguage:
                            languageCode || null,
                        avatar:
                            avatarPath || null


                    })

                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.message ||
                "Unable to update profile."
            );

        }


        translProfileUser =
            data.user ||
            translProfileUser;


        if (
            typeof translAuthState !== "undefined"
        ) {

            translAuthState.user =
                translProfileUser;

        }


        localStorage.setItem(
            "translCurrentUser",
            JSON.stringify(translProfileUser)
        );


        translProfileEditing = false;

        updateTransLSidebarProfile();

        renderTransLProfile();


    } catch (error) {

        console.error(
            "TransL profile update failed:",
            error
        );

        if (message) {

            message.textContent =
                error.message ||
                "Unable to save profile.";

        }

    }
}


/* ==========================================
   HTML ESCAPE
========================================== */

function escapeTransLProfileHTML(value) {

    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ==========================================
   GLOBAL EXPORTS
========================================== */

window.initializeTransLProfile =
    initializeTransLProfile;

window.renderTransLProfile =
    renderTransLProfile;
