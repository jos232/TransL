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

            element.textContent = avatar;

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
        document.getElementById("transl-page-container");

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
                    ${escapeTransLProfileHTML(avatar)}
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

        editButton.addEventListener(
            "click",
            openTransLEditProfile
        );

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
        document.getElementById("transl-page-container");

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

        const response =
            await fetch(
                "/api/auth/profile",
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
                            languageCode || null

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

