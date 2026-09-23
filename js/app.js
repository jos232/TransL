"use strict";

/* ==========================================
   TRANSL THEME INITIALIZATION
========================================== */

(function initializeTransLTheme() {

    const savedTheme =
        localStorage.getItem("translTheme") || "system";

    if (savedTheme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

    } else if (savedTheme === "light") {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );

    } else {

        document.documentElement.removeAttribute(
            "data-theme"
        );
    }

})();

/* ==========================================
   TRANSL
   APPLICATION JAVASCRIPT
========================================== */
/* ==========================================
   SECTION 1 - CURRENT TRANSL USER
========================================== */
const translCurrentUser = {
    id: "",
    name: "TransL User",
    username: "",
    email: "",
    avatar: "T",
    bio: "",
    favoriteLanguage: {
        code: "",
        name: ""
    }
};


/* ==========================================
   SECTION 1A - LOAD CURRENT USER
========================================== */

function loadCurrentTransLUser() {

    try {

        /*
         * The authenticated TransL user is stored by auth.js
         * in translAuthState.user.
         *
         * This becomes the primary source of user information.
         */

        let authenticatedUser = null;

        if (
            typeof translAuthState !== "undefined" &&
            translAuthState &&
            translAuthState.user
        ) {

            authenticatedUser =
                translAuthState.user;

        }


        /*
         * Fallback to the authenticated user's
         * localStorage copy if necessary.
         */

        if (!authenticatedUser) {

            const storedData =
                localStorage.getItem(
                    "translCurrentUser"
                );

            if (storedData) {

                try {

                    authenticatedUser =
                        JSON.parse(storedData);

                } catch (error) {

                    console.warn(
                        "TransL: Unable to parse authenticated user."
                    );

                }

            }

        }


        /* ======================================
           NO AUTHENTICATED USER
        ======================================= */

        if (!authenticatedUser) {

            console.warn(
                "TransL: No authenticated user found."
            );

            return;

        }


        /* ======================================
           BASIC USER INFORMATION
        ======================================= */
        translCurrentUser.id =
            authenticatedUser.id ||
            authenticatedUser._id ||
            "";



        translCurrentUser.name =
            String(
                authenticatedUser.name ||
                authenticatedUser.username ||
                "TransL User"
            ).trim() || "TransL User";


        translCurrentUser.username =
            String(
                authenticatedUser.username ||
                ""
            ).trim();


        translCurrentUser.email =
            String(
                authenticatedUser.email ||
                ""
            ).trim();


        translCurrentUser.bio =
            String(
                authenticatedUser.bio ||
                ""
            );


        /* ======================================
           USER AVATAR
        ======================================= */

        if (authenticatedUser.avatar) {

            translCurrentUser.avatar =
                String(
                    authenticatedUser.avatar
                );

        } else {

            translCurrentUser.avatar =
                translCurrentUser.name
                    .charAt(0)
                    .toUpperCase();

        }


        /* ======================================
           FAVORITE LANGUAGE
        ======================================= */

        if (
            authenticatedUser.favoriteLanguage &&
            typeof authenticatedUser.favoriteLanguage === "object"
        ) {

            translCurrentUser.favoriteLanguage =
                authenticatedUser.favoriteLanguage;

        }


        console.log(
            "TransL authenticated user loaded:",
            translCurrentUser.name
        );

    } catch (error) {

        console.error(
            "TransL: Error loading current user.",
            error
        );

    }

}


/* ==========================================
   SECTION 1B - UPDATE USER INTERFACE
========================================== */

function initializeCurrentUser() {

    loadCurrentTransLUser();


    /* ======================================
       UPDATE ALL USER AVATARS
    ======================================= */

    const avatarElements =
        document.querySelectorAll(".user-avatar");

    avatarElements.forEach((avatar) => {

        avatar.textContent =
            translCurrentUser.avatar;

    });


    /* ======================================
       UPDATE SIDEBAR USER NAME
    ======================================= */

    const sidebarName =
        document.querySelector(
            ".sidebar-profile-info strong"
        );

    if (sidebarName) {

        sidebarName.textContent =
            translCurrentUser.name;

    }


    /* ======================================
       UPDATE COMPOSER USER NAME
    ======================================= */

    const composerName =
        document.getElementById(
            "composer-user-name"
        );

    if (composerName) {

        composerName.textContent =
            translCurrentUser.name;

    }


    /* ======================================
       UPDATE COMPOSER USER AVATAR
    ======================================= */

    const composerAvatar =
        document.getElementById(
            "composer-user-avatar"
        );

    if (composerAvatar) {

        composerAvatar.textContent =
            translCurrentUser.avatar;

    }





    console.log(
        "TransL current user interface initialized:",
        translCurrentUser.name
    );

}


/* ==========================================
   SECTION 2 - APPLICATION STARTUP
========================================== */
function initializeTransLAuthControls() {


    const headerContainer =
        document.querySelector(".header-container");

    if (!headerContainer) {
        return;
    }

    const existingAuthControl =
        document.getElementById("transl-header-auth");

    if (existingAuthControl) {
        existingAuthControl.remove();
    }

    const authControl =
        document.createElement("div");

    authControl.id =
        "transl-header-auth";

    const authToken =
        localStorage.getItem("translAuthToken");

    if (authToken) {

        const userName =
            document.createElement("span");

        userName.className =
            "transl-header-user-name";

        userName.textContent =
            translCurrentUser.name ||
            "TransL User";

        const logoutButton =
            document.createElement("button");

        logoutButton.type =
            "button";

        logoutButton.className =
            "transl-header-auth-button";

        logoutButton.textContent =
            "Log Out";

        logoutButton.addEventListener(
            "click",
            () => {

                const confirmed =
                    window.confirm(
                        "Are you sure you want to log out?"
                    );

                if (!confirmed) {
                    return;
                }

                if (
                    typeof clearTransLAuth ===
                    "function"
                ) {

                    clearTransLAuth();

                } else {

                    localStorage.removeItem(
                        "translAuthToken"
                    );

                    localStorage.removeItem(
                        "translCurrentUser"
                    );

                }

                window.location.reload();

            }
        );

        authControl.appendChild(
            userName
        );

        authControl.appendChild(
            logoutButton
        );

    } else {

        const loginButton =
            document.createElement("button");

        loginButton.type =
            "button";

        loginButton.className =
            "transl-header-auth-button";

        loginButton.textContent =
            "Log In";

        loginButton.addEventListener(
            "click",
            () => {

                const authScreen =
                    document.getElementById(
                        "transl-auth-screen"
                    );

                if (authScreen) {

                    authScreen.hidden =
                        false;

                    if (
                        typeof showTransLLogin ===
                        "function"
                    ) {

                        showTransLLogin();

                    }

                    return;
                }

                if (
                    typeof createTransLAuthUI ===
                    "function"
                ) {

                    createTransLAuthUI();

                    if (
                        typeof showTransLLogin ===
                        "function"
                    ) {

                        showTransLLogin();

                    }

                }

            }
        );

        authControl.appendChild(
            loginButton
        );

    }

    headerContainer.appendChild(
        authControl
    );

}


/* ==========================================
   SECTION 3 - TRANSL NAVIGATION
========================================== */

function initializeTransLNavigation() {

    const navigationItems =
        document.querySelectorAll(
            "[data-page]"
        );

    /* ======================================
       MAIN PAGE ELEMENTS
    ======================================= */

    const socialDashboard =
        document.getElementById(
            "social-dashboard"
        );

    const friendsPage =
        document.getElementById(
            "transl-friends-page"
        );


    /* ======================================
       CREATE SHARED PAGE CONTAINER
    ======================================= */

    let pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    if (!pageContainer) {

        pageContainer =
            document.createElement("div");

        pageContainer.id =
            "transl-page-container";

        pageContainer.className =
            "transl-page-container";

        if (socialDashboard) {

            socialDashboard.parentNode.insertBefore(
                pageContainer,
                socialDashboard.nextSibling
            );

        } else if (friendsPage) {

            friendsPage.parentNode.insertBefore(
                pageContainer,
                friendsPage
            );

        }

    }


    /* ======================================
       NAVIGATION CLICK HANDLERS
    ======================================= */

    navigationItems.forEach((navigationItem) => {

        navigationItem.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const pageName =
                    navigationItem.dataset.page;

                if (!pageName) {
                    return;
                }


                /* ==============================
                   ACTIVE NAVIGATION
                ============================== */

                navigationItems.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });

                navigationItem.classList.add(
                    "active"
                );


                /* ==============================
                   HIDE / SHOW MAIN AREAS
                ============================== */

                if (socialDashboard) {

                    socialDashboard.hidden =
                        pageName !== "home";

                }

                if (friendsPage) {

                    friendsPage.hidden = true;

                }

                if (pageContainer) {

                    pageContainer.hidden =
                        pageName === "home";

                }


                /* ==============================
                   HOME
                ============================== */

                if (pageName === "home") {

                    const mainContent =
                        document.getElementById(
                            "main-content"
                        );

                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }

                    if (
                        typeof loadTransLPosts ===
                        "function"
                    ) {
                        loadTransLPosts();
                    }

                    return;
                }


                /* ==============================
                   FRIENDS
                ============================== */

                if (pageName === "friends") {

                    if (
                        typeof initializeTransLFriends ===
                        "function"
                    ) {

                        initializeTransLFriends();

                    }

                    return;

                }


                /* ==============================
                   MESSAGES
                ============================== */

                if (pageName === "messages") {

                    if (pageContainer) {

                        pageContainer.hidden = false;

                    }

                    if (
                        typeof initializeTransLMessages ===
                        "function"
                    ) {

                        initializeTransLMessages();

                    }

                    return;

                }


                /* ==============================
                   NOTIFICATIONS
                ============================== */

                if (pageName === "notifications") {

                    if (pageContainer) {

                        pageContainer.hidden = false;

                    }

                    if (
                        typeof initializeTransLNotifications ===
                        "function"
                    ) {

                        initializeTransLNotifications();

                    }

                    return;

                }


                /* ==============================
                   PROFILE
                ============================== */

                if (pageName === "profile") {

                    if (pageContainer) {

                        pageContainer.hidden = false;

                    }

                    if (
                        typeof initializeTransLProfile ===
                        "function"
                    ) {

                        initializeTransLProfile();

                    }

                    return;

                }


                /* ==============================
                   GROUPS
                ============================== */

                if (pageName === "groups") {

                    if (pageContainer) {

                        pageContainer.hidden = false;

                    }

                    if (
                        typeof initializeTransLGroups ===
                        "function"
                    ) {

                        initializeTransLGroups();

                    }

                    return;

                }


                /* ==============================
                   SAVED
                ============================== */

                if (pageName === "saved") {

                    if (pageContainer) {

                        pageContainer.hidden = false;

                    }

                    if (
                        typeof initializeTransLSaved ===
                        "function"
                    ) {

                        initializeTransLSaved();

                    } else if (pageContainer) {

                        pageContainer.innerHTML = `
                            <section
                                class="transl-page-card"
                                aria-label="TransL saved posts"
                            >
                                <h2>Saved</h2>

                                <p>
                                    Your saved posts will appear here.
                                </p>
                            </section>
                        `;

                    }

                    return;

                }


                /* ==============================
                   SETTINGS
                ============================== */

                if (pageName === "settings") {

                    if (pageContainer) {

                        pageContainer.hidden = false;

                        pageContainer.innerHTML = `
                            <section
                                class="transl-settings-page"
                                aria-label="TransL settings"
                            >

                                <div class="transl-settings-header">

                                    <h1>
                                        Settings
                                    </h1>

                                    <p>
                                        Manage your TransL account,
                                        language, privacy and preferences.
                                    </p>

                                </div>


                                <div class="transl-settings-list">


                                    <!-- ACCOUNT -->

                                    <button
                                        type="button"
                                        class="transl-settings-item"
                                        data-settings-section="account"
                                    >

                                        <span
                                            class="transl-settings-icon"
                                            aria-hidden="true"
                                        >
                                            👤
                                        </span>

                                        <span class="transl-settings-content">

                                            <strong>
                                                Account
                                            </strong>

                                            <small>
                                                Manage your name,
                                                username and email.
                                            </small>

                                        </span>

                                        <span
                                            class="transl-settings-arrow"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>

                                    </button>


                                    <!-- LANGUAGE -->

                                    <button
                                        type="button"
                                        class="transl-settings-item"
                                        data-settings-section="language"
                                    >

                                        <span
                                            class="transl-settings-icon"
                                            aria-hidden="true"
                                        >
                                            A
                                        </span>

                                        <span class="transl-settings-content">

                                            <strong>
                                                Language &amp; Translation
                                            </strong>

                                            <small>
                                                Choose your preferred
                                                language and translation
                                                preferences.
                                            </small>

                                        </span>

                                        <span
                                            class="transl-settings-arrow"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>

                                    </button>


                                    <!-- NOTIFICATIONS -->

                                    <button
                                        type="button"
                                        class="transl-settings-item"
                                        data-settings-section="notifications"
                                    >

                                        <span
                                            class="transl-settings-icon"
                                            aria-hidden="true"
                                        >
                                            !
                                        </span>

                                        <span class="transl-settings-content">

                                            <strong>
                                                Notifications
                                            </strong>

                                            <small>
                                                Control how TransL
                                                notifies you.
                                            </small>

                                        </span>

                                        <span
                                            class="transl-settings-arrow"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>

                                    </button>


                                    <!-- PRIVACY -->

                                    <button
                                        type="button"
                                        class="transl-settings-item"
                                        data-settings-section="privacy"
                                    >

                                        <span
                                            class="transl-settings-icon"
                                            aria-hidden="true"
                                        >
                                            #
                                        </span>

                                        <span class="transl-settings-content">

                                            <strong>
                                                Privacy &amp; Security
                                            </strong>

                                            <small>
                                                Manage privacy and
                                                account security.
                                            </small>

                                        </span>

                                        <span
                                            class="transl-settings-arrow"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>

                                    </button>


                                    <!-- APPEARANCE -->

                                    <button
                                        type="button"
                                        class="transl-settings-item"
                                        data-settings-section="appearance"
                                    >

                                        <span
                                            class="transl-settings-icon"
                                            aria-hidden="true"
                                        >
                                            ◐</span>

                                        <span class="transl-settings-content">

                                            <strong>
                                                Appearance
                                            </strong>

                                            <small>
                                                Customize how TransL
                                                looks.
                                            </small>

                                        </span>

                                        <span
                                            class="transl-settings-arrow"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>

                                    </button>


                                    <!-- LOGOUT -->

                                    <button
                                        type="button"
                                        class="transl-settings-item transl-settings-danger"
                                        data-settings-section="logout"
                                    >

                                        <span
                                            class="transl-settings-icon"
                                            aria-hidden="true"
                                        >
                                            ↪</span>

                                        <span class="transl-settings-content">

                                            <strong>
                                                Log Out
                                            </strong>

                                            <small>
                                                Sign out of your
                                                TransL account.
                                            </small>

                                        </span>

                                        <span
                                            class="transl-settings-arrow"
                                            aria-hidden="true"
                                        >
                                            ›
                                        </span>

                                    </button>


                                </div>

                            </section>
                        `;

                    }

                    return;

                }

            }
        );

    });


    /* ======================================
       HOME AS DEFAULT
    ======================================= */

    if (socialDashboard) {

        socialDashboard.hidden = false;

    }

    if (friendsPage) {

        friendsPage.hidden = true;

    }

    if (pageContainer) {

        pageContainer.hidden = true;

    }

}

/* ==========================================
   SECTION 4 - APPLICATION STARTUP
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "TransL JavaScript loaded."
    );

    initializeCurrentUser();

    initializeTransLAuthControls();

    initializeTransLNavigation();

    initializeTransLSettingsInteractions();

});

/* ==========================================
   SECTION 4A - SETTINGS INTERACTIONS
========================================== */

function initializeTransLSettingsInteractions() {

    if (
        document.body.dataset.translSettingsReady ===
        "true"
    ) {
        return;
    }

    document.body.dataset.translSettingsReady =
        "true";


    document.addEventListener(
        "click",
        (event) => {

            const settingsButton =
                event.target.closest(
                    "[data-settings-section]"
                );

            if (!settingsButton) {
                return;
            }

            const section =
                settingsButton.dataset.settingsSection;

            if (!section) {
                return;
            }


            /* ==============================
               ACCOUNT
            ============================== */

            if (section === "account") {

                showTransLSettingsPanel(
                    "Account",
                    `
                        <div class="transl-settings-detail">

                            <div class="transl-settings-profile">

                                <div class="transl-settings-avatar">
                                    ${translCurrentUser.avatar ||
                    translCurrentUser.name
                        .charAt(0)
                        .toUpperCase()
                    }
                                </div>

                                <div>
                                    <h2>
                                        ${translCurrentUser.name ||
                    "TransL User"
                    }
                                    </h2>

                                    <p>
                                        ${translCurrentUser.username
                        ? "@" +
                        translCurrentUser.username
                        : ""
                    }
                                    </p>
                                </div>

                            </div>


                            <div class="transl-settings-field">

                                <span>
                                    Name
                                </span>

                                <strong>
                                    ${translCurrentUser.name ||
                    "Not set"
                    }
                                </strong>

                            </div>


                            <div class="transl-settings-field">

                                <span>
                                    Username
                                </span>

                                <strong>
                                    ${translCurrentUser.username
                        ? "@" +
                        translCurrentUser.username
                        : "Not set"
                    }
                                </strong>

                            </div>


                            <div class="transl-settings-field">

                                <span>
                                    Email
                                </span>

                                <strong>
                                    ${translCurrentUser.email ||
                    "Not set"
                    }
                                </strong>

                            </div>


                            <div class="transl-settings-field">

                                <span>
                                    Bio
                                </span>

                                <strong>
                                    ${translCurrentUser.bio ||
                    "No bio added"
                    }
                                </strong>

                            </div>

                        </div>
                    `
                );

                return;
            }


            /* ==============================
               LANGUAGE
            ============================== */

            if (section === "language") {

                const language =
                    translCurrentUser.favoriteLanguage &&
                        translCurrentUser.favoriteLanguage.name
                        ? translCurrentUser.favoriteLanguage.name
                        : "Not selected";

                showTransLSettingsPanel(
                    "Language & Translation",
                    `
                        <div class="transl-settings-detail">

                            <div class="transl-settings-field">

                                <span>
                                    Favorite language
                                </span>

                                <strong>
                                    ${language}
                                </strong>

                            </div>


                            <button
                                type="button"
                                class="transl-settings-action"
                                data-settings-action="choose-language"
                            >
                                Choose language
                            </button>


                            <div class="transl-settings-info">

                                Your preferred language will be
                                used by TransL for language and
                                translation features.

                            </div>

                        </div>
                    `
                );

                return;
            }


            /* ==============================
               NOTIFICATIONS
            ============================== */

            if (section === "notifications") {

                const pushNotifications =
                    localStorage.getItem(
                        "translNotificationsPush"
                    ) !== "false";

                const messageNotifications =
                    localStorage.getItem(
                        "translNotificationsMessages"
                    ) !== "false";

                const interactionNotifications =
                    localStorage.getItem(
                        "translNotificationsInteractions"
                    ) !== "false";


                showTransLSettingsPanel(
                    "Notifications",
                    `
                        <div class="transl-settings-detail">

                            <label class="transl-settings-toggle">

                                <span>
                                    <strong>
                                        Push notifications
                                    </strong>

                                    <small>
                                        Receive notifications from TransL.
                                    </small>
                                </span>

                                <input
                                    type="checkbox"
                                    ${pushNotifications
                        ? "checked"
                        : ""
                    }
                                    data-settings-toggle="push"
                                >

                            </label>


                            <label class="transl-settings-toggle">

                                <span>
                                    <strong>
                                        Messages
                                    </strong>

                                    <small>
                                        Notify me about new messages.
                                    </small>
                                </span>

                                <input
                                    type="checkbox"
                                    ${messageNotifications
                        ? "checked"
                        : ""
                    }
                                    data-settings-toggle="messages"
                                >

                            </label>


                            <label class="transl-settings-toggle">

                                <span>
                                    <strong>
                                        Comments and likes
                                    </strong>

                                    <small>
                                        Notify me when people interact
                                        with my posts.
                                    </small>
                                </span>

                                <input
                                    type="checkbox"
                                    ${interactionNotifications
                        ? "checked"
                        : ""
                    }
                                    data-settings-toggle="interactions"
                                >

                            </label>

                        </div>
                    `
                );

                return;
            }


            /* ==============================
               PRIVACY
            ============================== */

            if (section === "privacy") {

                const profileVisibility =
                    localStorage.getItem(
                        "translPrivacyProfileVisibility"
                    ) || "public";

                const onlineStatus =
                    localStorage.getItem(
                        "translPrivacyOnlineStatus"
                    ) !== "false";

                const messageRequests =
                    localStorage.getItem(
                        "translPrivacyMessageRequests"
                    ) || "everyone";

                showTransLSettingsPanel(
                    "Privacy & Security",
                    `
                        <div class="transl-settings-detail">

                            <div class="transl-settings-field">
                                <span>
                                    Profile visibility
                                </span>

                                <strong>
                                    ${profileVisibility === "friends"
                        ? "Friends only"
                        : "Public"
                    }
                                </strong>
                            </div>

                            <div class="transl-privacy-choice">

                                <button
                                    type="button"
                                    class="transl-privacy-option${profileVisibility === "public"
                        ? " active"
                        : ""
                    }"
                                    data-privacy-setting="profile"
                                    data-privacy-value="public"
                                >
                                    Public
                                </button>

                                <button
                                    type="button"
                                    class="transl-privacy-option${profileVisibility === "friends"
                        ? " active"
                        : ""
                    }"
                                    data-privacy-setting="profile"
                                    data-privacy-value="friends"
                                >
                                    Friends only
                                </button>

                            </div>


                            <label class="transl-settings-toggle">

                                <span>
                                    <strong>
                                        Online status
                                    </strong>

                                    <small>
                                        Allow other users to see
                                        when you are online.
                                    </small>
                                </span>

                                <input
                                    type="checkbox"
                                    ${onlineStatus
                        ? "checked"
                        : ""
                    }
                                    data-privacy-toggle="online"
                                >

                            </label>


                            <div class="transl-settings-field">
                                <span>
                                    Message requests
                                </span>

                                <strong>
                                    ${messageRequests === "friends"
                        ? "Friends only"
                        : "Everyone"
                    }
                                </strong>
                            </div>

                            <div class="transl-privacy-choice">

                                <button
                                    type="button"
                                    class="transl-privacy-option${messageRequests === "everyone"
                        ? " active"
                        : ""
                    }"
                                    data-privacy-setting="messages"
                                    data-privacy-value="everyone"
                                >
                                    Everyone
                                </button>

                                <button
                                    type="button"
                                    class="transl-privacy-option${messageRequests === "friends"
                        ? " active"
                        : ""
                    }"
                                    data-privacy-setting="messages"
                                    data-privacy-value="friends"
                                >
                                    Friends only
                                </button>

                            </div>


                            <button
                                type="button"
                                class="transl-settings-action"
                                data-settings-action="blocked-users"
                            >
                                Blocked users
                            </button>


                            <div class="transl-settings-field">

                                <span>
                                    Account security
                                </span>

                                <strong>
                                    Session protected
                                </strong>

                            </div>


                            <button
                                type="button"
                                class="transl-settings-action"
                                data-settings-action="password"
                            >
                                Change password
                            </button>


                            <button
                                type="button"
                                class="transl-settings-action"
                                data-settings-action="sessions"
                            >
                                Manage active sessions
                            </button>


                            <div class="transl-settings-info">

                                Control who can see your profile,
                                contact you, and see your online
                                status. Security controls protect
                                access to your TransL account.

                            </div>

                        </div>
                    `
                );

                return;
            }


            /* ==============================
               APPEARANCE
            ============================== */

            if (section === "appearance") {

                const savedTheme =
                    localStorage.getItem(
                        "translTheme"
                    ) || "system";

                showTransLSettingsPanel(
                    "Appearance",
                    `
                        <div class="transl-settings-detail">

                            <div class="transl-settings-theme">

                                <button
                                    type="button"
                                    class="transl-theme-option"
                                    data-theme="light"
                                >
                                    Light
                                </button>

                                <button
                                    type="button"
                                    class="transl-theme-option"
                                    data-theme="dark"
                                >
                                    Dark
                                </button>

                                <button
                                    type="button"
                                    class="transl-theme-option"
                                    data-theme="system"
                                >
                                    System
                                </button>

                            </div>

                            <div class="transl-settings-info">

                                Current theme:
                                <strong>
                                    ${savedTheme}
                                </strong>

                            </div>

                        </div>
                    `
                );

                return;
            }


            /* ==============================
               LOG OUT
            ============================== */

            if (section === "logout") {

                const confirmed =
                    window.confirm(
                        "Are you sure you want to log out?"
                    );

                if (!confirmed) {
                    return;
                }

                if (
                    typeof clearTransLAuth ===
                    "function"
                ) {

                    clearTransLAuth();

                } else {

                    localStorage.removeItem(
                        "translAuthToken"
                    );

                    localStorage.removeItem(
                        "translCurrentUser"
                    );

                }

                window.location.reload();

            }

        }
    );


    /* ======================================
       LANGUAGE ACTION
    ======================================= */

    document.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    '[data-settings-action="choose-language"]'
                );

            if (!button) {
                return;
            }

            const languages =
                Array.isArray(TRANSL_LANGUAGES)
                    ? TRANSL_LANGUAGES
                    : [];

            if (!languages.length) {
                alert(
                    "No TransL languages are currently available."
                );
                return;
            }

            const currentLanguage =
                translCurrentUser.favoriteLanguage &&
                    translCurrentUser.favoriteLanguage.code
                    ? translCurrentUser.favoriteLanguage.code
                    : "";

            let languageOptions =
                languages
                    .map(
                        (language) => {

                            const selected =
                                language.code ===
                                currentLanguage;

                            return `
                                <button
                                    type="button"
                                    class="transl-language-option${selected ? " active" : ""}"
                                    data-language-code="${language.code}"
                                    data-language-name="${language.name}"
                                >

                                    <span
                                        class="transl-language-option-main"
                                    >
                                        <strong>
                                            ${language.name}
                                        </strong>

                                        <small>
                                            ${language.group} &rsaquo; ${language.script}
                                        </small>
                                    </span>

                                    <span
                                        class="transl-language-option-check"
                                        aria-hidden="true"
                                    >
                                        ${selected ? "&#10003;" : ""}
                                    </span>

                                </button>
                            `;

                        }
                    )
                    .join("");

            const languageSearchHTML = `
                <div class="transl-language-search-row">

                    <input
                        type="search"
                        id="transl-settings-language-search"
                        placeholder="Search languages..."
                        autocomplete="off"
                        aria-label="Search languages"
                    >

                    <button
                        type="button"
                        id="transl-settings-language-search-button"
                        class="transl-language-search-button"
                    >
                        Search
                    </button>

                </div>

                <div
                    id="transl-settings-language-results"
                    class="transl-language-results"
                    role="listbox"
                    aria-label="Language results"
                ></div>
            `;

            showTransLSettingsPanel(
                "Choose Language",
                `
                    <div
                        class="transl-settings-detail"
                    >

                        <div
                            class="transl-settings-info"
                        >
                            Select your favorite language
                            for TransL language and
                            translation features.
                        </div>

                        ${languageSearchHTML}

                        <div
                            class="transl-language-list"
                        >


                            ${languageOptions}
                        </div>

                    </div>
                `
            );

            initializeTransLSettingsLanguageSearch();


        }
    );


    /* ======================================
       NOTIFICATION SETTINGS ACTION
    ======================================= */

    document.addEventListener(
        "change",
        (event) => {

            const toggle =
                event.target.closest(
                    "[data-settings-toggle]"
                );

            if (!toggle) {
                return;
            }

            const setting =
                toggle.dataset.settingsToggle;

            if (!setting) {
                return;
            }


            let storageKey = "";


            if (setting === "push") {

                storageKey =
                    "translNotificationsPush";

            } else if (setting === "messages") {

                storageKey =
                    "translNotificationsMessages";

            } else if (
                setting === "interactions"
            ) {

                storageKey =
                    "translNotificationsInteractions";

            }


            if (!storageKey) {
                return;
            }


            localStorage.setItem(
                storageKey,
                toggle.checked
                    ? "true"
                    : "false"
            );


            console.log(
                "TransL notification setting saved:",
                setting,
                toggle.checked
            );

        }
    );

    /* ======================================
       SETTINGS LANGUAGE SEARCH
    ====================================== */

    function initializeTransLSettingsLanguageSearch() {

        const searchInput =
            document.getElementById(
                "transl-settings-language-search"
            );

        const searchButton =
            document.getElementById(
                "transl-settings-language-search-button"
            );

        const languageList =
            document.querySelector(
                ".transl-language-list"
            );

        if (
            !searchInput ||
            !searchButton ||
            !languageList
        ) {
            return;
        }

        const renderResults =
            (query = "") => {

                const normalizedQuery =
                    String(query || "")
                        .trim()
                        .toLowerCase();

                const filteredLanguages =
                    TRANSL_LANGUAGES.filter(
                        (language) => {

                            if (!normalizedQuery) {
                                return true;
                            }

                            const metadata =
                                getTransLLanguageMetadata(
                                    language.code
                                ) || {};

                            const searchableValues = [
                                language.name,
                                language.code,
                                language.group,
                                language.script,
                                metadata.displayName,
                                metadata.script,
                                ...(metadata.alternateNames || []),
                                ...(metadata.countries || []),
                                ...(language.searchNames || []),
                                language.searchKey
                            ];

                            return searchableValues
                                .filter(Boolean)
                                .some(
                                    (value) =>
                                        String(value)
                                            .toLowerCase()
                                            .includes(
                                                normalizedQuery
                                            )
                                );
                        }
                    );

                languageList.innerHTML =
                    filteredLanguages
                        .map(
                            (language) => {

                                const selected =
                                    language.code ===
                                    (
                                        translCurrentUser.favoriteLanguage &&
                                        translCurrentUser.favoriteLanguage.code
                                    );

                                return `
                                    <button
                                        type="button"
                                        class="transl-language-option${selected ? " active" : ""}"
                                        data-language-code="${language.code}"
                                        data-language-name="${language.name}"
                                    >

                                        <span
                                            class="transl-language-option-main"
                                        >
                                            <strong>
                                                ${language.name}
                                            </strong>

                                            <small>
                                                ${language.group} &rsaquo; ${language.script}
                                            </small>
                                        </span>

                                        <span
                                            class="transl-language-option-check"
                                            aria-hidden="true"
                                        >
                                            ${selected ? "&#10003;" : ""}
                                        </span>

                                    </button>
                                `;
                            }
                        )
                        .join("");

                if (
                    filteredLanguages.length ===
                    0
                ) {
                    languageList.innerHTML = `
                        <div class="transl-language-empty">
                            No languages found.
                        </div>
                    `;
                }
            };

        searchInput.addEventListener(
            "input",
            () => {
                renderResults(
                    searchInput.value
                );
            }
        );

        searchButton.addEventListener(
            "click",
            () => {

                renderResults(
                    searchInput.value
                );

                searchInput.focus();
            }
        );

        renderResults("");
    }

    /* ======================================
       LANGUAGE SELECTION ACTION
    ======================================= */

    document.addEventListener(
        "click",
        async (event) => {

            const languageButton =
                event.target.closest(
                    ".transl-language-option"
                );

            if (!languageButton) {
                return;
            }

            const code =
                languageButton.dataset.languageCode;

            const name =
                languageButton.dataset.languageName;

            if (!code || !name) {
                return;
            }

            if (
                typeof saveTransLFavoriteLanguage !==
                "function"
            ) {

                alert(
                    "The TransL language service is not available."
                );

                return;
            }


            /* Prevent repeated clicks while saving */

            if (
                languageButton.dataset.saving ===
                "true"
            ) {
                return;
            }

            languageButton.dataset.saving =
                "true";

            languageButton.disabled =
                true;


            try {

                const selectedLanguage =
                    TRANSL_LANGUAGES.find(
                        (language) =>
                            language.code ===
                            String(code).toLowerCase()
                    ) || {
                        code,
                        name
                    };


                const data =
                    await saveTransLFavoriteLanguage(
                        code,
                        name,
                        selectedLanguage
                    );


                if (
                    data &&
                    data.favoriteLanguage
                ) {

                    translCurrentUser.favoriteLanguage =
                        data.favoriteLanguage;


                    localStorage.setItem(
                        "translCurrentUser",
                        JSON.stringify(
                            translCurrentUser
                        )
                    );

                } else {

                    translCurrentUser.favoriteLanguage =
                        selectedLanguage;


                    localStorage.setItem(
                        "translCurrentUser",
                        JSON.stringify(
                            translCurrentUser
                        )
                    );

                }


                /* Return to Language & Translation */

                const savedLanguage =
                    translCurrentUser.favoriteLanguage &&
                        translCurrentUser.favoriteLanguage.name
                        ? translCurrentUser.favoriteLanguage.name
                        : name;


                showTransLSettingsPanel(
                    "Language & Translation",
                    `
                        <div
                            class="transl-settings-detail"
                        >

                            <div
                                class="transl-settings-field"
                            >

                                <span>
                                    Favorite language
                                </span>

                                <strong>
                                    ${savedLanguage}
                                </strong>

                            </div>


                            <button
                                type="button"
                                class="transl-settings-action"
                                data-settings-action="choose-language"
                            >
                                Choose language
                            </button>


                            <div
                                class="transl-settings-info"
                            >
                                Your preferred language will be
                                used by TransL for language and
                                translation features.
                            </div>

                        </div>
                    `
                );


            } catch (error) {

                console.error(
                    "TransL language save error:",
                    error
                );

                alert(
                    error.message ||
                    "Unable to save your favorite language."
                );

            } finally {

                languageButton.dataset.saving =
                    "false";

                languageButton.disabled =
                    false;

            }

        }
    );

    /* ======================================
       PRIVACY SETTINGS ACTIONS
    ======================================= */

    document.addEventListener(
        "click",
        (event) => {

            const privacyButton =
                event.target.closest(
                    "[data-privacy-setting]"
                );

            if (!privacyButton) {
                return;
            }

            const setting =
                privacyButton.dataset.privacySetting;

            const value =
                privacyButton.dataset.privacyValue;

            if (!setting || !value) {
                return;
            }

            let storageKey = "";

            if (setting === "profile") {

                storageKey =
                    "translPrivacyProfileVisibility";

            } else if (setting === "messages") {

                storageKey =
                    "translPrivacyMessageRequests";

            }

            if (!storageKey) {
                return;
            }

            localStorage.setItem(
                storageKey,
                value
            );

            const currentProfileVisibility =
                localStorage.getItem(
                    "translPrivacyProfileVisibility"
                ) || "public";

            const currentOnlineStatus =
                localStorage.getItem(
                    "translPrivacyOnlineStatus"
                ) !== "false";

            const currentMessageRequests =
                localStorage.getItem(
                    "translPrivacyMessageRequests"
                ) || "everyone";

            showTransLSettingsPanel(
                "Privacy & Security",
                `
                    <div class="transl-settings-detail">

                        <div class="transl-settings-field">

                            <span>
                                Profile visibility
                            </span>

                            <strong>
                                ${currentProfileVisibility ===
                    "friends"
                    ? "Friends only"
                    : "Public"
                }
                            </strong>

                        </div>


                        <div class="transl-privacy-choice">

                            <button
                                type="button"
                                class="transl-privacy-option${currentProfileVisibility ===
                    "public"
                    ? " active"
                    : ""
                }"
                                data-privacy-setting="profile"
                                data-privacy-value="public"
                            >
                                Public
                            </button>

                            <button
                                type="button"
                                class="transl-privacy-option${currentProfileVisibility ===
                    "friends"
                    ? " active"
                    : ""
                }"
                                data-privacy-setting="profile"
                                data-privacy-value="friends"
                            >
                                Friends only
                            </button>

                        </div>


                        <label class="transl-settings-toggle">

                            <span>
                                <strong>
                                    Online status
                                </strong>

                                <small>
                                    Allow other users to see
                                    when you are online.
                                </small>
                            </span>

                            <input
                                type="checkbox"
                                ${currentOnlineStatus
                    ? "checked"
                    : ""
                }
                                data-privacy-toggle="online"
                            >

                        </label>


                        <div class="transl-settings-field">

                            <span>
                                Message requests
                            </span>

                            <strong>
                                ${currentMessageRequests ===
                    "friends"
                    ? "Friends only"
                    : "Everyone"
                }
                            </strong>

                        </div>


                        <div class="transl-privacy-choice">

                            <button
                                type="button"
                                class="transl-privacy-option${currentMessageRequests ===
                    "everyone"
                    ? " active"
                    : ""
                }"
                                data-privacy-setting="messages"
                                data-privacy-value="everyone"
                            >
                                Everyone
                            </button>

                            <button
                                type="button"
                                class="transl-privacy-option${currentMessageRequests ===
                    "friends"
                    ? " active"
                    : ""
                }"
                                data-privacy-setting="messages"
                                data-privacy-value="friends"
                            >
                                Friends only
                            </button>

                        </div>


                        <button
                            type="button"
                            class="transl-settings-action"
                            data-settings-action="blocked-users"
                        >
                            Blocked users
                        </button>


                        <div class="transl-settings-field">

                            <span>
                                Account security
                            </span>

                            <strong>
                                Session protected
                            </strong>

                        </div>


                        <button
                            type="button"
                            class="transl-settings-action"
                            data-settings-action="password"
                        >
                            Change password
                        </button>


                        <button
                            type="button"
                            class="transl-settings-action"
                            data-settings-action="sessions"
                        >
                            Manage active sessions
                        </button>


                        <div class="transl-settings-info">

                            Control who can see your profile,
                            contact you, and see your online
                            status. Security controls protect
                            access to your TransL account.

                        </div>

                    </div>
                `
            );
        }
    );


    document.addEventListener(
        "change",
        (event) => {

            const toggle =
                event.target.closest(
                    "[data-privacy-toggle]"
                );

            if (!toggle) {
                return;
            }

            const setting =
                toggle.dataset.privacyToggle;

            if (setting !== "online") {
                return;
            }

            localStorage.setItem(
                "translPrivacyOnlineStatus",
                toggle.checked
                    ? "true"
                    : "false"
            );

            console.log(
                "TransL privacy setting saved:",
                setting,
                toggle.checked
            );
        }
    );


    /* ======================================
    /* ======================================
       TRANSL CURRENT SESSION HANDLER
    ======================================= */

    document.addEventListener(
        "click",
        async (event) => {

            const sessionsButton =
                event.target.closest(
                    '[data-settings-action="sessions"]'
                );

            if (!sessionsButton) {
                return;
            }

            event.preventDefault();

            showTransLSettingsPanel(
                "Current session",
                `
                    <div class="transl-settings-detail">

                        <div class="transl-settings-header">

                            <button
                                type="button"
                                class="transl-settings-back"
                                data-settings-back="privacy">
                                &#8592;
                            </button>

                            <h2>Current session</h2>

                            <p>
                                This is the session currently being used to access your TransL account.
                            </p>

                        </div>

                        <div
                            id="transl-session-status"
                            class="transl-settings-field">

                            <span>
                                Session status
                            </span>

                            <strong>
                                Checking...
                            </strong>

                        </div>

                        <div
                            id="transl-session-account"
                            class="transl-settings-field">

                            <span>
                                Account
                            </span>

                            <strong>
                                Loading...
                            </strong>

                        </div>

                        <div
                            id="transl-session-expiry"
                            class="transl-settings-field">

                            <span>
                                Session expires
                            </span>

                            <strong>
                                Loading...
                            </strong>

                        </div>

                        <div
                            id="transl-session-message"
                            class="transl-settings-info"
                            hidden>
                        </div>

                        <button
                            type="button"
                            class="transl-settings-action"
                            id="transl-session-logout">
                            Log out of this session
                        </button>

                    </div>
                `
            );

            const statusElement =
                document.getElementById(
                    "transl-session-status"
                );

            const accountElement =
                document.getElementById(
                    "transl-session-account"
                );

            const expiryElement =
                document.getElementById(
                    "transl-session-expiry"
                );

            const messageElement =
                document.getElementById(
                    "transl-session-message"
                );

            try {

                const token =
                    localStorage.getItem(
                        "translAuthToken"
                    );

                if (!token) {
                    throw new Error(
                        "Your TransL session could not be found."
                    );
                }

                const response =
                    await fetch(
                        "/api/auth/session",
                        {
                            method: "GET",

                            headers: {
                                Authorization:
                                    "Bearer " +
                                    token
                            }
                        }
                    );

                const data =
                    await response.json();

                if (!response.ok ||
                    !data.success ||
                    !data.session) {

                    throw new Error(
                        data.message ||
                        "Unable to load your current session."
                    );
                }

                const session =
                    data.session;

                if (statusElement) {

                    const statusStrong =
                        statusElement.querySelector("strong");

                    if (statusStrong) {
                        statusStrong.textContent =
                            session.active
                                ? "Active"
                                : "Expired";
                    }
                }

                if (accountElement) {

                    const accountStrong =
                        accountElement.querySelector("strong");

                    if (accountStrong) {

                        const displayName =
                            session.name ||
                            session.username ||
                            "TransL account";

                        const username =
                            session.username
                                ? "@" + session.username
                                : "";

                        accountStrong.textContent =
                            username
                                ? displayName +
                                " (" +
                                username +
                                ")"
                                : displayName;
                    }
                }

                if (expiryElement) {

                    const expiryStrong =
                        expiryElement.querySelector("strong");

                    if (expiryStrong) {

                        if (session.expiresAt) {

                            const expiryDate =
                                new Date(
                                    session.expiresAt
                                );

                            expiryStrong.textContent =
                                expiryDate.toLocaleString();

                        } else {

                            expiryStrong.textContent =
                                "Not available";
                        }
                    }
                }

            } catch (error) {

                console.error(
                    "TransL current session error:",
                    error
                );

                if (messageElement) {
                    messageElement.hidden = false;
                    messageElement.textContent =
                        error.message ||
                        "Unable to load your current session.";
                }

                if (statusElement) {

                    const statusStrong =
                        statusElement.querySelector("strong");

                    if (statusStrong) {
                        statusStrong.textContent =
                            "Unavailable";
                    }
                }
            }
        }
    );


    /* ======================================
       TRANSL CURRENT SESSION LOGOUT
    ======================================= */

    document.addEventListener(
        "click",
        async (event) => {

            const logoutButton =
                event.target.closest(
                    "#transl-session-logout"
                );

            if (!logoutButton) {
                return;
            }

            event.preventDefault();

            const confirmed =
                window.confirm(
                    "Log out of your current TransL session?"
                );

            if (!confirmed) {
                return;
            }

            logoutButton.disabled = true;
            logoutButton.textContent =
                "Logging out...";

            try {

                const token =
                    localStorage.getItem(
                        "translAuthToken"
                    );

                if (!token) {
                    throw new Error(
                        "Your session could not be found."
                    );
                }

                const response =
                    await fetch(
                        "/api/auth/logout",
                        {
                            method: "POST",
                            headers: {
                                Authorization:
                                    "Bearer " + token
                            }
                        }
                    );

                const data =
                    await response.json();

                if (!response.ok || !data.success) {
                    throw new Error(
                        data.message ||
                        "Unable to log out."
                    );
                }

                localStorage.removeItem("translAuthToken");
                localStorage.removeItem("translCurrentUser");

                window.location.reload();

            } catch (error) {

                console.error(
                    "TransL current session logout error:",
                    error
                );

                logoutButton.disabled = false;
                logoutButton.textContent =
                    "Log out of this session";

                const messageElement =
                    document.getElementById(
                        "transl-session-message"
                    );

                if (messageElement) {
                    messageElement.hidden = false;
                    messageElement.textContent =
                        error.message ||
                        "Unable to log out of this session.";
                }
            }
        }
    );


    /* ======================================
       TRANSL CHANGE PASSWORD HANDLERS
    ======================================= */

    document.addEventListener(
        "click",
        (event) => {

            const passwordButton =
                event.target.closest(
                    '[data-settings-action="password"]'
                );

            if (!passwordButton) {
                return;
            }

            showTransLSettingsPanel(
                "Change password",
                `
                    <div class="transl-settings-detail">

                        <div class="transl-settings-header">

                            <button
                                type="button"
                                class="transl-settings-back"
                                data-settings-back="privacy">
                                &larr;
                            </button>

                            <h2>Change password</h2>

                            <p>
                                Enter your current password and choose a new password.
                            </p>

                        </div>

                        <form
                            id="transl-change-password-form"
                            autocomplete="off">

                            <div class="transl-settings-field">

                                <label for="transl-current-password">
                                    Current password
                                </label>

                                <input
                                    id="transl-current-password"
                                    name="currentPassword"
                                    type="password"
                                    autocomplete="current-password"
                                    required>

                            </div>

                            <div class="transl-settings-field">

                                <label for="transl-new-password">
                                    New password
                                </label>

                                <input
                                    id="transl-new-password"
                                    name="newPassword"
                                    type="password"
                                    autocomplete="new-password"
                                    minlength="8"
                                    required>

                            </div>

                            <div class="transl-settings-field">

                                <label for="transl-confirm-password">
                                    Confirm new password
                                </label>

                                <input
                                    id="transl-confirm-password"
                                    name="confirmPassword"
                                    type="password"
                                    autocomplete="new-password"
                                    minlength="8"
                                    required>

                            </div>

                            <div
                                id="transl-password-message"
                                class="transl-settings-info"
                                hidden>
                            </div>

                            <button
                                type="submit"
                                class="transl-settings-action"
                                id="transl-password-submit">
                                Change password
                            </button>

                        </form>

                    </div>
                `
            );
        }
    );

    /* ======================================
       TRANSL CHANGE PASSWORD SUBMIT HANDLER
    ======================================= */

    document.addEventListener(
        "submit",
        async (event) => {

            const form =
                event.target.closest(
                    "#transl-change-password-form"
                );

            if (!form) {
                return;
            }

            event.preventDefault();

            const currentPassword =
                form.elements.currentPassword.value;

            const newPassword =
                form.elements.newPassword.value;

            const confirmPassword =
                form.elements.confirmPassword.value;

            const message =
                document.getElementById(
                    "transl-password-message"
                );

            const submitButton =
                document.getElementById(
                    "transl-password-submit"
                );

            if (!currentPassword ||
                !newPassword ||
                !confirmPassword) {

                message.hidden = false;
                message.textContent =
                    "Please complete all password fields.";

                return;
            }

            if (newPassword.length < 8) {

                message.hidden = false;
                message.textContent =
                    "New password must contain at least 8 characters.";

                return;
            }

            if (newPassword !== confirmPassword) {

                message.hidden = false;
                message.textContent =
                    "New passwords do not match.";

                return;
            }

            const token =
                localStorage.getItem("translAuthToken");

            if (!token) {

                message.hidden = false;
                message.textContent =
                    "Your session has expired. Please log in again.";

                return;
            }

            submitButton.disabled = true;
            submitButton.textContent =
                "Changing password...";

            message.hidden = true;
            message.textContent = "";

            try {

                const response =
                    await fetch(
                        "/api/auth/password",
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization":
                                    `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                currentPassword,
                                newPassword,
                                confirmPassword
                            })
                        }
                    );

                const data =
                    await response.json();

                if (!response.ok || !data.success) {

                    throw new Error(
                        data.message ||
                        "Unable to change password."
                    );
                }

                message.hidden = false;
                message.textContent =
                    data.message ||
                    "Password changed successfully.";

                form.reset();

            } catch (error) {

                console.error(
                    "TransL change password error:",
                    error
                );

                message.hidden = false;
                message.textContent =
                    error.message ||
                    "Unable to change password.";

            } finally {

                submitButton.disabled = false;
                submitButton.textContent =
                    "Change password";

            }
        }
    );

    /* ======================================
       APPEARANCE ACTION
    ======================================= */

    document.addEventListener(
        "click",
        (event) => {

            const themeButton =
                event.target.closest(
                    ".transl-theme-option"
                );

            if (!themeButton) {
                return;
            }

            const theme =
                themeButton.dataset.theme;

            if (!theme) {
                return;
            }

            localStorage.setItem(
                "translTheme",
                theme
            );

            if (theme === "dark") {

                document.documentElement
                    .setAttribute(
                        "data-theme",
                        "dark"
                    );

            } else if (theme === "light") {

                document.documentElement
                    .setAttribute(
                        "data-theme",
                        "light"
                    );

            } else {

                document.documentElement
                    .removeAttribute(
                        "data-theme"
                    );

            }

            document.querySelectorAll(
                ".transl-theme-option"
            ).forEach(
                (option) => {

                    option.classList.toggle(
                        "active",
                        option.dataset.theme ===
                        theme
                    );

                }
            );

        }
    );

}


/* ==========================================
   SETTINGS DETAIL PANEL
========================================== */

function showTransLSettingsPanel(
    title,
    content
) {

    const pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    if (!pageContainer) {
        return;
    }

    pageContainer.hidden = false;

    pageContainer.innerHTML = `
        <section
            class="transl-settings-page"
            aria-label="TransL ${title}"
        >

            <div class="transl-settings-header">

                ${title === "Change password" ? "" : `<button type="button" class="transl-settings-back" id="transl-settings-back">\u2190</button>`}

                <h1>
                    ${title}
                </h1>

            </div>

            ${content}

        </section>
    `;


    const backButton =
        document.getElementById(
            "transl-settings-back"
        );

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                const settingsNavigationItem =
                    document.querySelector(
                        '[data-page="settings"]'
                    );

                if (settingsNavigationItem) {

                    settingsNavigationItem.click();

                }

            }
        );

    }

}


/* ==========================================
   SECTION 5 - POST COMPOSER
========================================== */

function initializePostComposer() {

    const composer =
        document.getElementById(
            "post-composer"
        );

    const openButton =
        document.getElementById(
            "create-post-button"
        );

    const closeButton =
        document.getElementById(
            "close-composer"
        );

    const textarea =
        document.getElementById(
            "post-content"
        );

    const submitButton =
        document.getElementById(
            "publish-post"
        );

    if (
        !composer ||
        !openButton ||
        !closeButton ||
        !textarea ||
        !submitButton
    ) {

        console.warn(
            "TransL: Post composer controls not found."
        );

        return;
    }

    if (
        composer.dataset.translInitialized ===
        "true"
    ) {

        return;
    }

    composer.dataset.translInitialized =
        "true";
    /* ======================================
       PHOTO PICKER
    ======================================= */

    const photoButton =
        document.querySelector(
            '[data-action="photo"]'
        );

    const photoInput =
        document.getElementById(
            "photo-input"
        );

    const photoPreview =
        document.getElementById(
            "photo-preview"
        );

    const photoPreviewImage =
        document.getElementById(
            "photo-preview-image"
        );

    const removePhotoButton =
        document.getElementById(
            "remove-photo"
        );

    let selectedPhoto =
        null;

    if (
        photoButton &&
        photoInput &&
        photoPreview &&
        photoPreviewImage &&
        removePhotoButton
    ) {

        photoButton.addEventListener(
            "click",
            () => {

                photoInput.click();

            }
        );

        photoInput.addEventListener(
            "change",
            () => {

                const file =
                    photoInput.files &&
                    photoInput.files[0];

                if (!file) {

                    selectedPhoto =
                        null;

                    photoPreview.hidden =
                        true;

                    photoPreviewImage.src =
                        "";

                    return;
                }

                if (
                    !file.type ||
                    !file.type.startsWith("image/")
                ) {

                    alert(
                        "Please select an image file."
                    );

                    photoInput.value =
                        "";

                    selectedPhoto =
                        null;

                    photoPreview.hidden =
                        true;

                    photoPreviewImage.src =
                        "";

                    return;
                }

                if (
                    file.size >
                    1024 * 1024 * 1024
                ) {

                    alert(
                        "Photo must be 1 GB or smaller."
                    );

                    photoInput.value =
                        "";

                    selectedPhoto =
                        null;

                    photoPreview.hidden =
                        true;

                    photoPreviewImage.src =
                        "";

                    return;
                }

                selectedPhoto =
                    file;

                composer.hidden =
                    false;

                submitButton.disabled =
                    false;

                const previewUrl =
                    URL.createObjectURL(
                        file
                    );

                photoPreviewImage.src =
                    previewUrl;

                photoPreview.hidden =
                    false;

            }
        );
        removePhotoButton.addEventListener(
            "click",
            () => {
                photoInput.value =
                    "";

                selectedPhoto =
                    null;

                photoPreviewImage.src =
                    "";

                photoPreview.hidden =
                    true;

                submitButton.disabled =
                    textarea.value.trim().length === 0;
            }
        );

    }


    /* ======================================
       VIDEO PICKER
    ======================================= */

    const videoButton =
        document.querySelector(
            '[data-action="video"]'
        );

    const videoInput =
        document.getElementById(
            "video-input"
        );

    const videoPreview =
        document.getElementById(
            "video-preview"
        );

    const videoPreviewPlayer =
        document.getElementById(
            "video-preview-player"
        );

    const removeVideoButton =
        document.getElementById(
            "remove-video"
        );

    let selectedVideo = null;

    if (videoButton && videoInput && videoPreview && videoPreviewPlayer && removeVideoButton) {

        videoButton.addEventListener(
            "click",
            () => {
                videoInput.click();
            }
        );

        videoInput.addEventListener(
            "change",
            () => {

                const file =
                    videoInput.files &&
                    videoInput.files[0];

                if (!file) {
                    selectedVideo = null;
                    videoPreview.hidden = true;
                    videoPreviewPlayer.removeAttribute("src");
                    videoPreviewPlayer.load();
                    return;
                }

                if (!file.type || !file.type.startsWith("video/")) {
                    alert("Please select a video file.");
                    videoInput.value = "";
                    selectedVideo = null;
                    videoPreview.hidden = true;
                    videoPreviewPlayer.removeAttribute("src");
                    videoPreviewPlayer.load();
                    return;
                }

                if (file.size > 1024 * 1024 * 1024) {
                    alert("Video must be 1 GB or smaller.");
                    videoInput.value = "";
                    selectedVideo = null;
                    videoPreview.hidden = true;
                    videoPreviewPlayer.removeAttribute("src");
                    videoPreviewPlayer.load();
                    return;
                }

                selectedVideo = file;
                composer.hidden = false;
                submitButton.disabled = false;

                const previewUrl = URL.createObjectURL(file);
                videoPreviewPlayer.src = previewUrl;
                videoPreviewPlayer.load();
                videoPreview.hidden = false;
            }
        );

        removeVideoButton.addEventListener(
            "click",
            () => {
                videoInput.value = "";
                selectedVideo = null;
                videoPreviewPlayer.removeAttribute("src");
                videoPreviewPlayer.load();
                videoPreview.hidden = true;
                submitButton.disabled = textarea.value.trim().length === 0 && !selectedPhoto;
            }
        );

    }


    /* ======================================
       FEELING SELECTOR
    ======================================= */

    const feelingButton =
        document.querySelector(
            '[data-action="feeling"]'
        );

    const feelingSelector =
        document.getElementById(
            "feeling-selector"
        );

    const closeFeelingSelector =
        document.getElementById(
            "close-feeling-selector"
        );

    const selectedFeeling =
        document.getElementById(
            "selected-feeling"
        );

    const selectedFeelingText =
        document.getElementById(
            "selected-feeling-text"
        );

    const removeFeelingButton =
        document.getElementById(
            "remove-feeling"
        );

    let selectedFeelingValue = "";

    if (feelingButton && feelingSelector) {

        feelingButton.addEventListener(
            "click",
            () => {

                feelingSelector.hidden =
                    false;

            }
        );

    }

    if (closeFeelingSelector && feelingSelector) {

        closeFeelingSelector.addEventListener(
            "click",
            () => {

                feelingSelector.hidden =
                    true;

            }
        );

    }

    const feelingOptions =
        document.querySelectorAll(
            ".feeling-option"
        );

    feelingOptions.forEach(
        (option) => {

            option.addEventListener(
                "click",
                () => {

                    selectedFeelingValue =
                        option.dataset.feeling || "";

                    if (selectedFeelingText) {

                        selectedFeelingText.textContent =
                            selectedFeelingValue;

                    }

                    if (selectedFeeling) {

                        selectedFeeling.hidden =
                            !selectedFeelingValue;

                    }

                    if (feelingSelector) {

                        feelingSelector.hidden =
                            true;

                    }

                    submitButton.disabled =
                        textarea.value.trim().length === 0 &&
                        !selectedPhoto &&
                        !selectedVideo &&
                        !selectedFeelingValue;

                }
            );

        }
    );

    if (removeFeelingButton) {

        removeFeelingButton.addEventListener(
            "click",
            () => {

                selectedFeelingValue =
                    "";

                if (selectedFeeling) {

                    selectedFeeling.hidden =
                        true;

                }

                if (selectedFeelingText) {

                    selectedFeelingText.textContent =
                        "";

                }

                submitButton.disabled =
                    textarea.value.trim().length === 0 &&
                    !selectedPhoto &&
                    !selectedVideo;

            }
        );

    }

    /* ======================================
       OPEN COMPOSER
    ======================================= */

    openButton.addEventListener(
        "click",
        () => {

            composer.hidden =
                false;

            textarea.focus();

        }
    );


    /* ======================================
       CLOSE COMPOSER
    ======================================= */

    closeButton.addEventListener(
        "click",
        () => {

            composer.hidden =
                true;

            textarea.value =
                "";

            submitButton.disabled =
                true;

        }
    );


    /* ======================================
       TEXTAREA
    ======================================= */
    textarea.addEventListener(
        "input",
        () => {
            const text =
                textarea.value.trim();

            submitButton.disabled =
                text.length === 0 &&
                !selectedPhoto &&
                !selectedVideo &&
                !selectedFeelingValue;
        }
    );


    /* ======================================
       PUBLISH POST
    ======================================= */

    submitButton.addEventListener(
        "click",
        async () => {

            const text =
                textarea.value.trim();

            if (
                !text &&
                !selectedPhoto &&
                !selectedVideo &&
                !selectedFeelingValue
            ) {
                return;
            }

            const authToken =
                localStorage.getItem(
                    "translAuthToken"
                );

            if (!authToken) {

                alert(
                    "Please log in before creating a post."
                );

                return;
            }

            submitButton.disabled =
                true;

            const originalText =
                submitButton.textContent;

            submitButton.textContent =
                "Posting...";

            try {

                let uploadedPhoto =
                    null;

                if (selectedPhoto) {

                    const photoFormData =
                        new FormData();

                    photoFormData.append(
                        "photo",
                        selectedPhoto
                    );

                    const photoResponse =
                        await fetch(
                            "/api/uploads/photo",
                            {
                                method: "POST",

                                headers: {
                                    "Authorization":
                                        `Bearer ${authToken}`
                                },

                                body:
                                    photoFormData
                            }
                        );

                    const photoResult =
                        await photoResponse.json();

                    if (!photoResponse.ok) {

                        throw new Error(
                            photoResult.message ||
                            photoResult.error ||
                            "Unable to upload photo."
                        );

                    }

                    uploadedPhoto =
                        photoResult.photo || null;

                }
                let uploadedVideo =
                    null;

                if (selectedVideo) {

                    const videoFormData =
                        new FormData();

                    videoFormData.append(
                        "video",
                        selectedVideo
                    );

                    const videoResponse =
                        await fetch(
                            "/api/uploads/video",
                            {
                                method: "POST",

                                headers: {
                                    "Authorization":
                                        `Bearer ${authToken}`
                                },

                                body:
                                    videoFormData
                            }
                        );

                    const videoResult =
                        await videoResponse.json();

                    if (!videoResponse.ok) {

                        throw new Error(
                            videoResult.message ||
                            videoResult.error ||
                            "Unable to upload video."
                        );

                    }

                    uploadedVideo =
                        videoResult.video || null;

                }

                const response =
                    await fetch(
                        "/api/posts",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json",

                                "Authorization":
                                    `Bearer ${authToken}`
                            },

                            body:
                                JSON.stringify({
                                    content: text,
                                    feeling: selectedFeelingValue || null,
                                    photo: uploadedPhoto,
                                    video: uploadedVideo
                                })
                        }
                    );

                const result =
                    await response.json();

                if (!response.ok) {

                    throw new Error(
                        result.message ||
                        result.error ||
                        "Unable to create post."
                    );

                }

                textarea.value =
                    "";


                photoInput.value =
                    "";

                selectedPhoto =
                    null;
                selectedFeelingValue =
                    "";

                if (selectedFeeling) {
                    selectedFeeling.hidden =
                        true;
                }

                if (selectedFeelingText) {
                    selectedFeelingText.textContent =
                        "";
                }

                photoPreviewImage.src =
                    "";

                photoPreview.hidden =
                    true;

                composer.hidden =
                    true;

                console.log(
                    "TransL post created:",
                    result
                );

                if (
                    typeof loadTransLPosts ===
                    "function"
                ) {

                    await loadTransLPosts();

                }

            } catch (error) {

                console.error(
                    "TransL: Error creating post.",
                    error
                );

                alert(
                    error.message ||
                    "Unable to create post."
                );

            } finally {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    originalText;

            }

        }
    );

}


/* ==========================================
   SECTION 6 - POST API HELPERS
========================================== */

async function translPostRequest(
    url,
    options = {}
) {

    const authToken =
        localStorage.getItem(
            "translAuthToken"
        );

    if (!authToken) {

        throw new Error(
            "You must be logged in."
        );

    }

    const requestOptions = {
        ...options,

        headers: {
            "Content-Type":
                "application/json",

            "Authorization":
                `Bearer ${authToken}`,

            ...(options.headers || {})
        }
    };

    const response =
        await fetch(
            url,
            requestOptions
        );

    let result = null;

    try {

        result =
            await response.json();

    } catch (error) {

        result = {};

    }

    if (!response.ok) {

        throw new Error(
            result.message ||
            result.error ||
            "TransL request failed."
        );

    }

    return result;

}


/* ==========================================
   SECTION 7 - LOAD POSTS
========================================== */

async function loadTransLPosts() {

    const postsContainer =
        document.getElementById("feed-container");

    if (!postsContainer) {

        console.warn(
            "TransL: Feed posts container not found."
        );

        return;

    }

    try {

        const result =
            await translPostRequest(
                "/api/posts",
                {
                    method: "GET"
                }
            );

        const posts =
            Array.isArray(result)
                ? result
                : Array.isArray(result.posts)
                    ? result.posts
                    : [];

        postsContainer.innerHTML =
            "";

        posts.forEach((post) => {

            const postElement =
                createTransLPostElement(
                    post
                );

            if (postElement) {

                postsContainer.appendChild(
                    postElement
                );

            }

        });

        console.log(
            "TransL posts loaded:",
            posts.length
        );

    } catch (error) {

        console.error(
            "TransL: Unable to load posts.",
            error
        );

    }

}

/* ==========================================
   SECTION 8 - CREATE POST ELEMENT
========================================== */

function createTransLPostElement(post) {

    if (!post) {
        return null;
    }

    const article =
        document.createElement("article");

    article.className =
        "feed-post";

    if (post._id) {
        article.dataset.postId =
            post._id;
    }

    const author =
        post.author ||
        post.user ||
        {};

    const authorName =
        author.name ||
        author.username ||
        post.authorName ||
        "TransL User";

    const authorAvatar =
        author.avatar ||
        authorName.charAt(0).toUpperCase();

    const postText =
        String(
            post.text ||
            post.content ||
            ""
        );

    /* ======================================
       POST HEADER
    ======================================= */

    const header =
        document.createElement("div");

    header.className =
        "feed-post-header";

    const avatar =
        document.createElement("div");

    avatar.className =
        "feed-post-avatar";

    avatar.textContent =
        authorAvatar;

    const authorInfo =
        document.createElement("div");

    authorInfo.className =
        "feed-post-author";

    const name =
        document.createElement("strong");

    name.textContent =
        authorName;

    authorInfo.appendChild(name);

    header.appendChild(avatar);
    header.appendChild(authorInfo);


    /* ======================================
       POST CONTENT
    ======================================= */

    const content =
        document.createElement("div");

    content.className =
        "feed-post-content";

    content.textContent =
        postText;


    /* ======================================
       POST FEELING
    ======================================= */

    if (
        post.feeling &&
        typeof post.feeling === "string"
    ) {

        const feelingElement =
            document.createElement("div");

        feelingElement.className =
            "feed-post-feeling";

        feelingElement.textContent =
            `Feeling: ${post.feeling}`;

        content.appendChild(
            feelingElement
        );

    }


    /* ======================================
       POST PHOTO
    ======================================= */

    let photoElement = null;

    if (
        post.photo &&
        typeof post.photo === "string"
    ) {

        photoElement =
            document.createElement("img");

        photoElement.className =
            "feed-post-photo";

        photoElement.src =
            post.photo;

        photoElement.alt =
            "Post photo";

        photoElement.loading =
            "lazy";

        photoElement.decoding =
            "async";

        photoElement.addEventListener(
            "error",
            () => {
                photoElement.remove();
            }
        );

    }


    /* ======================================
       POST VIDEO
    ======================================= */

    let videoElement = null;

    if (
        post.video &&
        typeof post.video === "string"
    ) {

        videoElement =
            document.createElement("video");

        videoElement.className =
            "feed-post-video";

        videoElement.src =
            post.video;

        videoElement.controls =
            true;

        videoElement.preload =
            "metadata";

        videoElement.playsInline =
            true;

        videoElement.addEventListener(
            "error",
            () => {
                videoElement.remove();
            }
        );

    }
    /* ======================================
       POST COUNTS
    ======================================= */

    const stats =
        document.createElement("div");

    stats.className =
        "feed-post-stats";

    const likeStat =
        document.createElement("span");

    likeStat.className =
        "feed-post-stat";

    const likeCount =
        Array.isArray(post.likes)
            ? post.likes.length
            : Number(
                post.likeCount ||
                post.likesCount ||
                0
            );

    likeStat.innerHTML =
        `Likes <button type="button" class="post-like-count" aria-label="View likes">${likeCount}</button>`;

    const commentStat =
        document.createElement("span");

    commentStat.className =
        "feed-post-stat";

    const commentCount =
        Array.isArray(post.comments)
            ? post.comments.length
            : Number(
                post.commentCount ||
                post.commentsCount ||
                0
            );

    commentStat.innerHTML =
        `Comments <button type="button" class="post-comment-count" aria-label="View comments">${commentCount}</button>`;

    stats.appendChild(likeStat);
    stats.appendChild(commentStat);
    const likeCountButton =
        likeStat.querySelector(".post-like-count");

    if (likeCountButton) {
        likeCountButton.addEventListener("click", async (event) => {
            event.preventDefault();
            event.stopPropagation();

            const postId = article.dataset.postId;

            if (!postId) {
                return;
            }

            await showTransLPostLikes(article, postId);
        });
    }



    /* ======================================
       POST ACTIONS
    ======================================= */

    const actions =
        document.createElement("div");

    actions.className =
        "feed-post-actions";


    /* ======================================
       LIKE
    ======================================= */

    const likeButton =
        document.createElement("button");

    likeButton.type =
        "button";

    likeButton.className =
        "feed-post-action like-post";

    likeButton.textContent = "\u2665";


    /* ======================================
       COMMENT
    ======================================= */

    const commentButton =
        document.createElement("button");

    commentButton.type =
        "button";

    commentButton.className =
        "feed-post-action comment-post";

    commentButton.textContent = "\u25CF";


    /* ======================================
       SHARE
    ======================================= */

    const shareButton =
        document.createElement("button");

    shareButton.type =
        "button";

    shareButton.className =
        "feed-post-action share-post";

    shareButton.textContent = "\u2197";


    /* ======================================
       FAVORITE
    ======================================= */

    const favoriteButton =
        document.createElement("button");

    favoriteButton.type =
        "button";

    favoriteButton.className =
        "feed-post-action favorite-post";

    favoriteButton.textContent = "\u2605";


    /* ======================================
       DOWNLOAD
    ======================================= */

    const downloadButton =
        document.createElement("button");

    downloadButton.type =
        "button";

    downloadButton.className =
        "feed-post-action download-post";

    downloadButton.textContent = "\u2193";


    /* ======================================
       ADD ACTIONS
    ======================================= */

    actions.appendChild(likeButton);
    actions.appendChild(commentButton);
    actions.appendChild(shareButton);
    actions.appendChild(favoriteButton);
    actions.appendChild(downloadButton);


    /* ======================================
       BUILD POST
    ======================================= */

    article.appendChild(header);
    article.appendChild(content);

    if (photoElement) {
        article.appendChild(photoElement);
    }

    if (videoElement) {
        article.appendChild(videoElement);
    }
    article.appendChild(stats);
    article.appendChild(actions);

    return article;
}


/* ==========================================
   SECTION 9 - POST STARTUP
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializePostComposer();

        loadTransLPosts();

    }
);



/* ==========================================
   SECTION 10 - POST INTERACTIONS
========================================== */

function initializeTransLPostInteractions() {

    const feedContainer =
        document.getElementById("feed-container");

    if (!feedContainer) {
        return;
    }

    if (
        feedContainer.dataset.interactionsInitialized ===
        "true"
    ) {
        return;
    }

    feedContainer.dataset.interactionsInitialized =
        "true";

    feedContainer.addEventListener(
        "click",
        async (event) => {

            const countButton = event.target.closest(".post-like-count, .post-comment-count");

            if (countButton) {
                const article = countButton.closest(".feed-post");
                if (!article) { return; }
                const postId = article.dataset.postId;
                if (!postId) { return; }
                if (countButton.classList.contains("post-comment-count")) {
                    toggleTransLCommentPanel(article);
                    return;
                }
                if (countButton.classList.contains("post-like-count")) {
                    await showTransLPostLikes(article, postId);
                    return;
                }
            }

            const button =
                event.target.closest(
                    ".feed-post-action"
                );

            if (!button) {
                return;
            }

            const article =
                button.closest(
                    ".feed-post"
                );

            if (!article) {
                return;
            }

            const postId =
                article.dataset.postId;

            if (!postId) {
                return;
            }

            if (
                button.classList.contains(
                    "like-post"
                )
            ) {

                await handleTransLPostLike(
                    article,
                    postId,
                    button
                );

            }

            if (
                button.classList.contains(
                    "comment-post"
                )
            ) {

                toggleTransLCommentPanel(
                    article
                );

            }

            if (
                button.classList.contains(
                    "share-post"
                )
            ) {

                await handleTransLPostShare(
                    postId,
                    button
                );

            }

            if (
                button.classList.contains(
                    "favorite-post"
                )
            ) {

                await handleTransLPostFavorite(
                    postId,
                    button
                );

            }

            if (
                button.classList.contains(
                    "download-post"
                )
            ) {

                handleTransLPostDownload(
                    article,
                    postId,
                    button
                );

            }

        }
    );

}


/* ==========================================
   LIKE POST
========================================== */

async function handleTransLPostLike(
    article,
    postId,
    button
) {

    try {

        button.disabled =
            true;

        const result =
            await translPostRequest(
                `/api/posts/${postId}/like`,
                {
                    method: "POST"
                }
            );

        button.classList.toggle(
            "liked",
            Boolean(result.liked)
        );

        const likeCount =
            article.querySelector(
                ".post-like-count"
            );

        if (likeCount) {

            likeCount.textContent =
                String(
                    result.likeCount || 0
                );

        }

    } catch (error) {

        console.error(
            "TransL: Unable to update like.",
            error
        );

    } finally {

        button.disabled =
            false;

    }

}


/* ==========================================
   SHARE POST
========================================== */

async function handleTransLPostShare(
    postId,
    button
) {

    const article =
        button.closest(".feed-post");

    if (!article || !postId) {
        return;
    }

    toggleTransLSharePanel(
        article,
        postId
    );

}


/* ==========================================
   FAVORITE POST
========================================== */

async function handleTransLPostFavorite(
    postId,
    button
) {

    try {

        button.disabled =
            true;

        const result =
            await translPostRequest(
                `/api/posts/${postId}/favorite`,
                {
                    method: "POST"
                }
            );

        const favorited =
            Boolean(
                result.favorited ??
                result.favorite ??
                result.isFavorite
            );

        button.classList.toggle(
            "favorited",
            favorited
        );

        console.log(
            "TransL post favorite updated:",
            result
        );

    } catch (error) {

        console.error(
            "TransL: Unable to update favorite.",
            error
        );

    } finally {

        button.disabled =
            false;

    }

}

/* ==========================================
   DOWNLOAD POST
========================================== */

function handleTransLPostDownload(
    article,
    postId,
    button
) {

    try {

        const contentElement =
            article.querySelector(
                ".feed-post-content"
            );

        const text =
            contentElement
                ? contentElement.textContent.trim()
                : "";

        const photoElement =
            article.querySelector(
                ".feed-post-photo"
            );

        if (
            photoElement &&
            photoElement.src
        ) {

            const link =
                document.createElement("a");

            link.href =
                photoElement.src;

            link.download =
                `transl-post-${postId}.jpg`;

            document.body.appendChild(
                link
            );

            link.click();

            link.remove();

            return;

        }

        const videoElement =
            article.querySelector(
                ".feed-post-video"
            );

        if (
            videoElement &&
            videoElement.src
        ) {

            const link =
                document.createElement("a");

            link.href =
                videoElement.src;

            link.download =
                "transl-post-" + postId + ".mp4";

            document.body.appendChild(
                link
            );

            link.click();

            link.remove();

            return;

        }


        if (!text) {

            console.warn(
                "TransL: This post has no downloadable text."
            );

            return;

        }

        const downloadContent =
            `TransL Post\n\n${text}\n`;

        const blob =
            new Blob(
                [downloadContent],
                {
                    type: "text/plain;charset=utf-8"
                }
            );

        const downloadUrl =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href =
            downloadUrl;

        link.download =
            `transl-post-${postId}.txt`;

        document.body.appendChild(link);

        link.click();

        link.remove();

        URL.revokeObjectURL(
            downloadUrl
        );

    } catch (error) {

        console.error(
            "TransL: Unable to download post.",
            error
        );

    }

}


/* ==========================================
   COMMENT PANEL
========================================== */

async function toggleTransLCommentPanel(
    article
) {

    let commentPanel =
        article.querySelector(
            ".post-comment-panel"
        );

    if (commentPanel) {

        commentPanel.hidden =
            !commentPanel.hidden;

        if (!commentPanel.hidden) {

            await loadTransLPostComments(
                article,
                commentPanel
            );

            const input =
                commentPanel.querySelector(
                    ".post-comment-input"
                );

            if (input) {
                input.focus();
            }

        }

        return;

    }

    commentPanel =
        createTransLCommentPanel(
            article
        );

    article.appendChild(
        commentPanel
    );

    await loadTransLPostComments(
        article,
        commentPanel
    );

    const input =
        commentPanel.querySelector(
            ".post-comment-input"
        );

    if (input) {
        input.focus();
    }

}


/* ==========================================
   LOAD POST COMMENTS
========================================== */

async function loadTransLPostComments(
    article,
    commentPanel
) {

    const postId =
        article.dataset.postId;

    if (!postId || !commentPanel) {
        return;
    }

    const commentsList =
        commentPanel.querySelector(
            ".post-comments-list"
        );

    if (!commentsList) {
        return;
    }

    commentsList.innerHTML =
        "<div class=\"post-comments-loading\">Loading comments...</div>";

    try {

        const result =
            await translPostRequest(
                `/api/posts/${postId}/comments`,
                {
                    method: "GET"
                }
            );

        commentsList.innerHTML = "";

        const comments =
            Array.isArray(result.comments)
                ? result.comments
                : [];

        updateTransLCommentCount(
            article,
            result.commentCount
        );

        if (!comments.length) {

            commentsList.innerHTML =
                "<div class=\"post-comments-empty\">No comments yet.</div>";

            return;
        }

        comments.forEach(
            (comment) => {

                appendTransLComment(
                    commentsList,
                    comment
                );

            }
        );

    } catch (error) {

        console.error(
            "TransL: Unable to load post comments.",
            error
        );

        commentsList.innerHTML =
            "<div class=\"post-comments-error\">Unable to load comments.</div>";

    }

}


/* ==========================================
   CREATE COMMENT PANEL
========================================== */

function createTransLCommentPanel(
    article
) {

    const postId =
        article.dataset.postId;

    const commentPanel =
        document.createElement("div");

    commentPanel.className =
        "post-comment-panel";

    commentPanel.hidden =
        false;


    /* ======================================
       INPUT ROW
    ======================================= */

    const commentInputRow =
        document.createElement("div");

    commentInputRow.className =
        "post-comment-input-row";


    /* ======================================
       TEXT INPUT
    ======================================= */

    const commentInput =
        document.createElement("textarea");

    commentInput.className =
        "post-comment-input";

    commentInput.placeholder =
        "Write a comment...";

    commentInput.rows =
        2;

    /* ======================================
       EMOJI BUTTON
    ====================================== */

    const commentEmoji =
        document.createElement("button");

    commentEmoji.type =
        "button";

    commentEmoji.className =
        "post-comment-emoji";

    commentEmoji.textContent =
        "\uD83D\uDE0A";

    commentEmoji.title =
        "Add emoji";


    /* ======================================
       EMOJI PICKER
    ====================================== */

    const commentEmojiPicker =
        document.createElement("div");

    commentEmojiPicker.className =
        "post-comment-emoji-picker";

    commentEmojiPicker.hidden =
        true;

    const commentEmojis = [

        "\uD83D\uDE00",
        "\uD83D\uDE02",
        "\uD83D\uDE0D",
        "\uD83D\uDE0A",
        "\uD83D\uDE0E",
        "\uD83E\uDD70",
        "\uD83D\uDC4D",
        "\u2764\uFE0F",
        "\uD83D\uDD25",
        "\uD83D\uDC4F",
        "\uD83C\uDF89",
        "\uD83D\uDE4F",
        "\uD83D\uDE22",
        "\uD83D\uDE2E",
        "\uD83D\uDE21",
        "\uD83E\uDD23",
        "\uD83D\uDCAF",
        "\u2728",
        "\uD83C\uDDEA\uD83C\uDDF0"

    ];


    commentEmojis.forEach(
        (emoji) => {

            const emojiButton =
                document.createElement(
                    "button"
                );

            emojiButton.type =
                "button";

            emojiButton.className =
                "post-comment-emoji-option";

            emojiButton.textContent =
                emoji;

            emojiButton.title =
                `Add ${emoji}`;

            emojiButton.addEventListener(
                "click",
                () => {

                    commentInput.focus();

                    const start =
                        commentInput.selectionStart;

                    const end =
                        commentInput.selectionEnd;

                    const currentValue =
                        commentInput.value;

                    commentInput.value =
                        currentValue.slice(
                            0,
                            start
                        ) +
                        emoji +
                        currentValue.slice(
                            end
                        );

                    const newPosition =
                        start +
                        emoji.length;

                    commentInput.setSelectionRange(
                        newPosition,
                        newPosition
                    );

                    commentInput.focus();

                }
            );

            commentEmojiPicker.appendChild(
                emojiButton
            );

        }
    );


    commentEmoji.addEventListener(
        "click",
        () => {

            commentEmojiPicker.hidden =
                !commentEmojiPicker.hidden;

        }
    );


    /* ======================================
       COMMENT SUBMIT
    ======================================= */

    const commentSubmit =
        document.createElement(
            "button"
        );

    commentSubmit.type =
        "button";

    commentSubmit.className =
        "post-comment-submit";

    commentSubmit.textContent =
        "Comment";


    /* ======================================
       COMMENTS LIST
    ======================================= */

    const commentsList =
        document.createElement(
            "div"
        );

    commentsList.className =
        "post-comments-list";


    /* ======================================
       SUBMIT COMMENT
    ======================================= */

    commentSubmit.addEventListener(
        "click",
        async () => {

            const text =
                commentInput.value.trim();

            if (!text) {
                return;
            }

            commentSubmit.disabled =
                true;

            commentSubmit.textContent =
                "Posting...";

            try {

                const result =
                    await translPostRequest(
                        `/api/posts/${postId}/comment`,
                        {
                            method: "POST",

                            body:
                                JSON.stringify({
                                    text: text
                                })
                        }
                    );

                if (result.comment) {

                    appendTransLComment(
                        commentsList,
                        result.comment
                    );

                }

                commentInput.value =
                    "";

                updateTransLCommentCount(
                    article,
                    result.commentCount
                );

                commentEmojiPicker.hidden =
                    true;

                const commentPanel = article.querySelector(".post-comment-panel");

                if (commentPanel) {
                    commentPanel.hidden = true;
                }

            } catch (error) {

                console.error(
                    "TransL: Unable to add comment.",
                    error
                );

            } finally {

                commentSubmit.disabled =
                    false;

                commentSubmit.textContent =
                    "Comment";

            }

        }
    );


    commentInputRow.appendChild(
        commentInput
    );

    commentInputRow.appendChild(
        commentEmoji
    );

    commentInputRow.appendChild(
        commentSubmit
    );

    commentPanel.appendChild(
        commentInputRow
    );

    commentPanel.appendChild(
        commentEmojiPicker
    );

    commentPanel.appendChild(
        commentsList
    );

    return commentPanel;

}


/* ==========================================
   DISPLAY COMMENT
========================================== */

function appendTransLComment(
    commentsList,
    comment
) {

    const commentElement =
        document.createElement(
            "div"
        );

    commentElement.className =
        "post-comment";


    const author =
        comment.author ||
        {};

    const authorName =
        author.name ||
        author.username ||
        "TransL User";

    const avatar =
        document.createElement(
            "div"
        );

    avatar.className =
        "post-comment-avatar";

    avatar.textContent =
        author.avatar ||
        authorName
            .charAt(0)
            .toUpperCase();


    const body =
        document.createElement(
            "div"
        );

    body.className =
        "post-comment-body";


    const authorElement =
        document.createElement(
            "strong"
        );

    authorElement.textContent =
        authorName;


    const textElement =
        document.createElement(
            "div"
        );

    textElement.className =
        "post-comment-text";

    textElement.textContent =
        comment.text ||
        "";


    body.appendChild(
        authorElement
    );

    body.appendChild(
        textElement
    );

    commentElement.appendChild(
        avatar
    );

    commentElement.appendChild(
        body
    );

    commentsList.appendChild(
        commentElement
    );

}


/* ==========================================
   COMMENT COUNT
========================================== */

function updateTransLCommentCount(
    article,
    count
) {

    const commentCount =
        article.querySelector(
            ".post-comment-count"
        );

    if (commentCount) {

        commentCount.textContent =
            String(
                Number(count) || 0
            );

    }

}


/* ==========================================
   INITIALIZE POST INTERACTIONS
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeTransLPostInteractions();

    }
);




/* ==========================================
   TRANSL
   HOME POST ACTION VISUAL STATES
========================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".feed-post-action"
            );

        if (!button) {
            return;
        }

        /*
         * Comment:
         * Turn blue when the comment panel
         * is opened.
         */
        if (
            button.classList.contains(
                "comment-post"
            )
        ) {
            setTimeout(() => {

                button.classList.toggle(
                    "active",
                    !button.classList.contains(
                        "active"
                    )
                );

            }, 0);

            return;
        }

        /*
         * Share:
         * Turn pink after clicking.
         */
        if (
            button.classList.contains(
                "share-post"
            )
        ) {
            button.classList.add(
                "active"
            );

            return;
        }

        /*
         * Download:
         * Turn maroon after clicking.
         */
        if (
            button.classList.contains(
                "download-post"
            )
        ) {
            button.classList.add(
                "active"
            );

            return;
        }

    }
);

/* ======================================
   TRANSL CHANGE PASSWORD BACK HANDLER
======================================= */

document.addEventListener(
    "click",
    (event) => {

        const backButton =
            event.target.closest(
                '[data-settings-back="privacy"]'
            );

        if (!backButton) {
            return;
        }

        event.preventDefault();

        const settingsNavigationItem =
            document.querySelector(
                '[data-page="settings"]'
            );

        if (settingsNavigationItem) {

            settingsNavigationItem.click();

            setTimeout(
                () => {

                    const privacyOption =
                        document.querySelector(
                            '[data-settings-option="privacy"]'
                        );

                    if (privacyOption) {
                        privacyOption.click();
                    }

                },
                50
            );

        }

    }
);


/* ==========================================
   POST LIKES PANEL
========================================== */

async function showTransLPostLikes(article, postId) {

    let likesPanel = article.querySelector(".post-likes-panel");

    if (likesPanel) {
        likesPanel.hidden = !likesPanel.hidden;
        return;
    }

    likesPanel = document.createElement("div");
    likesPanel.className = "post-likes-panel";

    likesPanel.innerHTML = `
        <div class="post-likes-header">
            <strong>Liked by</strong>
            <button type="button" class="close-post-likes">Close</button>
        </div>
        <div class="post-likes-list">Loading likes...</div>
    `;

    article.appendChild(likesPanel);

    const closeButton =
        likesPanel.querySelector(".close-post-likes");

    closeButton.addEventListener("click", () => {
        likesPanel.hidden = true;
    });

    const likesList =
        likesPanel.querySelector(".post-likes-list");

    try {

        const result =
            await translPostRequest(
                `/api/posts/${postId}/likes`,
                {
                    method: "GET"
                }
            );

        const likes =
            Array.isArray(result.likes)
                ? result.likes
                : [];

        likesList.innerHTML = "";

        if (!likes.length) {

            const empty =
                document.createElement("div");

            empty.className =
                "post-likes-empty";

            empty.textContent =
                "No likes yet.";

            likesList.appendChild(empty);

            return;
        }

        likes.forEach((user) => {

            const row =
                document.createElement("div");

            row.className =
                "post-like-user";

            const avatar =
                document.createElement("div");

            avatar.className =
                "post-like-user-avatar";

            if (user.avatar) {

                const image =
                    document.createElement("img");

                image.src = user.avatar;

                image.alt =
                    user.name || "User";

                avatar.appendChild(image);

            } else {

                avatar.textContent =
                    (user.name || "U")
                        .charAt(0)
                        .toUpperCase();

            }

            const details =
                document.createElement("div");

            details.className =
                "post-like-user-details";

            const name =
                document.createElement("strong");

            name.textContent =
                user.name || "User";

            details.appendChild(name);

            if (user.username) {


                const username =
                    document.createElement("span");

                username.textContent =
                    `@${user.username}`;

                details.appendChild(username);
            }

            row.appendChild(avatar);
            row.appendChild(details);

            likesList.appendChild(row);

        });

    } catch (error) {

        console.error(
            "TransL: Unable to load post likes.",
            error
        );

        likesList.textContent =
            "Unable to load likes.";

    }

}

/* ==========================================
   POST SHARE PANEL
========================================== */

async function toggleTransLSharePanel(article, postId) {

    let sharePanel =
        article.querySelector(".post-share-panel");

    if (sharePanel) {
        sharePanel.hidden =
            !sharePanel.hidden;
        return;
    }

    sharePanel =
        document.createElement("div");

    sharePanel.className =
        "post-share-panel";

    sharePanel.innerHTML = `
        <div class="post-share-header">
            <strong>Share post</strong>
            <button
                type="button"
                class="close-post-share"
            >Close</button>
        </div>

        <div class="post-share-search">
            <input
                type="search"
                class="post-share-search-input"
                placeholder="Search users..."
                autocomplete="off"
            >
        </div>

        <div class="post-share-selected"></div>

        <div class="post-share-users">
            Search for a user to share this post with.
        </div>

        <div class="post-share-footer">
            <button
                type="button"
                class="post-share-send"
                disabled
            >Share</button>
        </div>
    `;

    article.appendChild(sharePanel);

    const closeButton =
        sharePanel.querySelector(
            ".close-post-share"
        );

    closeButton.addEventListener(
        "click",
        () => {
            sharePanel.hidden = true;
        }
    );

    const searchInput =
        sharePanel.querySelector(
            ".post-share-search-input"
        );

    const usersList =
        sharePanel.querySelector(
            ".post-share-users"
        );

    const selectedList =
        sharePanel.querySelector(
            ".post-share-selected"
        );

    const sendButton =
        sharePanel.querySelector(
            ".post-share-send"
        );

    const selectedUsers =
        new Map();

    function renderSelectedUsers() {

        selectedList.innerHTML = "";

        selectedUsers.forEach(
            (user) => {

                const chip =
                    document.createElement(
                        "button"
                    );

                chip.type = "button";

                chip.className =
                    "post-share-selected-user";

                chip.textContent =
                    user.name ||
                    user.username ||
                    "User";

                chip.title =
                    "Remove " +
                    (user.name || "User");

                chip.addEventListener(
                    "click",
                    () => {

                        selectedUsers.delete(
                            String(user._id)
                        );

                        renderSelectedUsers();
                        renderUsers(lastUsers);

                    }
                );

                selectedList.appendChild(
                    chip
                );

            }
        );

        sendButton.disabled =
            selectedUsers.size === 0;

    }

    function renderUsers(users = []) {

        usersList.innerHTML = "";

        if (!users.length) {

            usersList.textContent =
                searchInput.value.trim().length >= 2
                    ? "No users found."
                    : "Search for a user to share this post with.";

            return;
        }

        users.forEach(
            (user) => {

                const row =
                    document.createElement(
                        "button"
                    );

                row.type = "button";

                row.className =
                    "post-share-user";

                const avatar =
                    document.createElement(
                        "span"
                    );

                avatar.className =
                    "post-share-user-avatar";

                if (user.avatar) {

                    const image =
                        document.createElement(
                            "img"
                        );

                    image.src =
                        user.avatar;

                    image.alt =
                        user.name || "User";

                    avatar.appendChild(
                        image
                    );

                } else {

                    avatar.textContent =
                        (user.name || "U")
                            .charAt(0)
                            .toUpperCase();

                }

                const details =
                    document.createElement(
                        "span"
                    );

                details.className =
                    "post-share-user-details";

                const name =
                    document.createElement(
                        "strong"
                    );

                name.textContent =
                    user.name || "User";

                details.appendChild(
                    name
                );

                if (user.username) {

                    const username =
                        document.createElement(
                            "small"
                        );

                    username.textContent =
                        "@" + user.username;

                    details.appendChild(
                        username
                    );

                }

                const check =
                    document.createElement(
                        "span"
                    );

                check.className =
                    "post-share-user-check";

                check.textContent =
                    selectedUsers.has(
                        String(user._id)
                    )
                        ? "\u2713"
                        : "";

                row.appendChild(avatar);
                row.appendChild(details);
                row.appendChild(check);

                row.addEventListener(
                    "click",
                    () => {

                        const id =
                            String(user._id);

                        if (
                            selectedUsers.has(id)
                        ) {

                            selectedUsers.delete(
                                id
                            );

                        } else {

                            selectedUsers.set(
                                id,
                                user
                            );

                        }

                        renderSelectedUsers();
                        renderUsers(lastUsers);

                    }
                );

                usersList.appendChild(
                    row
                );

            }
        );

    }

    let lastUsers = [];
    let searchTimer = null;

    searchInput.addEventListener(
        "input",
        () => {

            clearTimeout(
                searchTimer
            );

            const query =
                searchInput.value.trim();

            if (query.length < 2) {

                lastUsers = [];

                renderUsers();

                return;
            }

            usersList.textContent =
                "Searching users...";

            searchTimer =
                setTimeout(
                    async () => {

                        try {

                            const result =
                                await translPostRequest(
                                    "/api/friends/search?q=" +
                                    encodeURIComponent(
                                        query
                                    ),
                                    {
                                        method: "GET"
                                    }
                                );

                            lastUsers =
                                Array.isArray(
                                    result.users
                                )
                                    ? result.users
                                    : [];

                            renderUsers(
                                lastUsers
                            );

                        } catch (error) {

                            console.error(
                                "TransL: Unable to search share recipients.",
                                error
                            );

                            usersList.textContent =
                                "Unable to search users.";

                        }

                    },
                    250
                );

        }
    );

    sendButton.addEventListener(
        "click",
        async () => {

            console.log(
                "TransL share recipients selected:",
                Array.from(
                    selectedUsers.values()
                ),
                "postId:",
                postId
            );

        }
    );

    searchInput.focus();

}




