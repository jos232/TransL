"use strict";

/* ==========================================
   TRANSL
   AUTHENTICATION FRONTEND
========================================== */


/* ==========================================
   AUTH STORAGE
========================================== */

const TRANSL_AUTH_TOKEN_KEY =
    "translAuthToken";

const TRANSL_CURRENT_USER_KEY =
    "translCurrentUser";


/* ==========================================
   AUTH STATE
========================================== */

let translAuthState = {
    token: null,
    user: null
};


/* ==========================================
   LOAD SAVED AUTHENTICATION
========================================== */

function loadTransLAuth() {

    try {

        const token =
            localStorage.getItem(
                TRANSL_AUTH_TOKEN_KEY
            );

        const storedUser =
            localStorage.getItem(
                TRANSL_CURRENT_USER_KEY
            );


        if (token) {

            translAuthState.token =
                token;

        }


        if (storedUser) {

            translAuthState.user =
                JSON.parse(storedUser);

        }

    } catch (error) {

        console.error(
            "TransL: Unable to load authentication.",
            error
        );

    }

}


/* ==========================================
   SAVE AUTHENTICATION
========================================== */

function saveTransLAuth(token, user) {

    translAuthState.token =
        token;

    translAuthState.user =
        user;


    localStorage.setItem(
        TRANSL_AUTH_TOKEN_KEY,
        token
    );


    localStorage.setItem(
        TRANSL_CURRENT_USER_KEY,
        JSON.stringify(user)
    );

}


/* ==========================================
   CLEAR AUTHENTICATION
========================================== */

function clearTransLAuth() {

    translAuthState.token =
        null;

    translAuthState.user =
        null;


    localStorage.removeItem(
        TRANSL_AUTH_TOKEN_KEY
    );

    localStorage.removeItem(
        TRANSL_CURRENT_USER_KEY
    );

}


/* ==========================================
   API REQUEST
========================================== */

async function translAuthRequest(
    url,
    options = {}
) {

    const headers = {
        "Content-Type":
            "application/json",
        ...(options.headers || {})
    };


    if (translAuthState.token) {

        headers.Authorization =
            `Bearer ${translAuthState.token}`;

    }


    const response =
        await fetch(
            url,
            {
                ...options,
                headers
            }
        );


    let data = {};

    try {

        data =
            await response.json();

    } catch (error) {

        data = {};

    }


    if (!response.ok) {

        throw new Error(
            data.message ||
            "TransL request failed."
        );

    }


    return data;

}


/* ==========================================
   REGISTER
========================================== */

async function registerTransLUser(
    name,
    username,
    email,
    password
) {

    return await translAuthRequest(
        "/api/auth/register",
        {
            method: "POST",

            body: JSON.stringify({

                name,
                username,
                email,
                password

            })

        }
    );

}


/* ==========================================
   LOGIN
========================================== */

async function loginTransLUser(
    identifier,
    password
) {

    return await translAuthRequest(
        "/api/auth/login",
        {
            method: "POST",

            body: JSON.stringify({

                identifier,
                password

            })

        }
    );

}


/* ==========================================
   SAVE FAVORITE LANGUAGE
========================================== */

async function saveTransLFavoriteLanguage(
    code,
    name,
    languageData = {}
) {

    const data =
        await translAuthRequest(
            "/api/auth/favorite-language",
            {
                method: "PUT",

                body: JSON.stringify({

                    code,
                    name,

                    displayName:
                        languageData.displayName || "",

                    searchNames:
                        Array.isArray(languageData.searchNames)
                            ? languageData.searchNames
                            : [],

                    searchKey:
                        languageData.searchKey || "",

                    alternateNames:
                        Array.isArray(languageData.alternateNames)
                            ? languageData.alternateNames
                            : [],

                    countries:
                        Array.isArray(languageData.countries)
                            ? languageData.countries
                            : [],

                    script:
                        languageData.script || ""

                })

            }
        );


    if (
        translAuthState.user &&
        data.favoriteLanguage
    ) {

        translAuthState.user.favoriteLanguage =
            data.favoriteLanguage;


        localStorage.setItem(
            TRANSL_CURRENT_USER_KEY,
            JSON.stringify(
                translAuthState.user
            )
        );

    }


    return data;

}


/* ==========================================
   GET CURRENT USER
========================================== */

async function getTransLCurrentUser() {

    return await translAuthRequest(
        "/api/auth/me"
    );

}


/* ==========================================
   LOGOUT
========================================== */

async function logoutTransLUser() {

    try {

        if (translAuthState.token) {

            await translAuthRequest(
                "/api/auth/logout",
                {
                    method: "POST"
                }
            );

        }

    } catch (error) {

        console.warn(
            "TransL logout request failed:",
            error.message
        );

    }


    clearTransLAuth();

    window.location.reload();

}


/* ==========================================
   AUTH UI
========================================== */

function createTransLAuthUI() {

    if (
        document.getElementById(
            "transl-auth-screen"
        )
    ) {
        return;
    }


    const authScreen =
        document.createElement("div");

    authScreen.id =
        "transl-auth-screen";


    authScreen.innerHTML = `

        <div class="transl-auth-card">

            <div class="transl-auth-brand">
                TransL
            </div>

            <p class="transl-auth-subtitle">
                Connect through language.
            </p>


            <!-- LOGIN -->

            <section
                id="transl-login-form"
                class="transl-auth-form"
            >

                <h2>Welcome back</h2>

                <p>
                    Log in to your TransL account.
                </p>


                <label>
                    Username or email

                    <input
                        type="text"
                        id="transl-login-identifier"
                        autocomplete="username"
                    >
                </label>


                <label>
                    Password

                    <input
                        type="password"
                        id="transl-login-password"
                        autocomplete="current-password"
                    >
                </label>


                <button
                    type="button"
                    id="transl-login-button"
                >
                    Log in
                </button>


                <p
                    id="transl-login-message"
                    class="transl-auth-message"
                ></p>


                <button
                    type="button"
                    id="transl-show-register"
                    class="transl-auth-link"
                >
                    Create an account
                </button>

            </section>


            <!-- REGISTER -->

            <section
                id="transl-register-form"
                class="transl-auth-form"
                hidden
            >

                <h2>Create your account</h2>

                <p>
                    Join TransL.
                </p>


                <label>
                    Name

                    <input
                        type="text"
                        id="transl-register-name"
                        autocomplete="name"
                    >
                </label>


                <label>
                    Username

                    <input
                        type="text"
                        id="transl-register-username"
                        autocomplete="username"
                    >
                </label>


                <label>
                    Email

                    <input
                        type="email"
                        id="transl-register-email"
                        autocomplete="email"
                    >
                </label>


                <label>
                    Password

                    <input
                        type="password"
                        id="transl-register-password"
                        autocomplete="new-password"
                    >
                </label>


                <button
                    type="button"
                    id="transl-register-button"
                >
                    Create account
                </button>


                <p
                    id="transl-register-message"
                    class="transl-auth-message"
                ></p>


                <button
                    type="button"
                    id="transl-show-login"
                    class="transl-auth-link"
                >
                    Back to login
                </button>

            </section>


            <!-- FAVORITE LANGUAGE -->

            <section
                id="transl-language-form"
                class="transl-auth-form"
                hidden
            >

                <h2>Choose your favorite language</h2>

                <p>
                    This will be your default language on TransL.
                </p>


                <label>
                    Favorite language

                    <div class="transl-language-search-row">

                        <input
                            type="search"
                            id="transl-language-search"
                            placeholder="Search languages..."
                            autocomplete="off"
                            aria-label="Search languages"
                        >

                        <button
                            type="button"
                            id="transl-language-search-button"
                            class="transl-language-search-button"
                        >
                            Search
                        </button>

                    </div>

                    <div
                        id="transl-language-results"
                        class="transl-language-results"
                        role="listbox"
                        aria-label="Language results"
                    ></div>

                    <select
                        id="transl-favorite-language"
                        hidden
                    >
                        <option value=""
                        >
                            Select a language
                        </option>
                    </select>

                    <div
                        id="transl-selected-language"
                        class="transl-selected-language"
                    >
                        No language selected
                    </div>

                </label>


                <button
                    type="button"
                    id="transl-save-language-button"
                >
                    Continue to TransL
                </button>


                <p
                    id="transl-language-message"
                    class="transl-auth-message"
                ></p>

            </section>

        </div>
    `;


    document.body.prepend(
        authScreen
    );


    populateFavoriteLanguages();

    setupTransLAuthEvents();

}


/* ==========================================
   POPULATE LANGUAGE SELECTOR
========================================== */

function populateFavoriteLanguages() {

    const select =
        document.getElementById(
            "transl-favorite-language"
        );

    const search =
        document.getElementById(
            "transl-language-search"
        );

    const results =
        document.getElementById(
            "transl-language-results"
        );

    const selectedDisplay =
        document.getElementById(
            "transl-selected-language"
        );


    if (
        !select ||
        !search ||
        !results
    ) {
        return;
    }


    if (
        typeof TRANSL_LANGUAGES ===
        "undefined"
    ) {
        return;
    }


    select.innerHTML = "";


    const placeholder =
        document.createElement(
            "option"
        );

    placeholder.value = "";

    placeholder.textContent =
        "Select a language";

    select.appendChild(
        placeholder
    );


    TRANSL_LANGUAGES.forEach(
        language => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                language.code;

            option.textContent =
                language.name;

            select.appendChild(
                option
            );

        }
    );


    function normalizeLanguageSearch(
        value
    ) {

        return String(
            value || ""
        )
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .toLowerCase()
            .trim();

    }


    function renderLanguageResults(
        query
    ) {

        const normalizedQuery =
            normalizeLanguageSearch(
                query
            );


        results.innerHTML = "";


        const matches =
            TRANSL_LANGUAGES
                .filter(
                    language => {

                        if (
                            !normalizedQuery
                        ) {
                            return true;
                        }


                        const name =
                            normalizeLanguageSearch(
                                language.name
                            );

                        const code =
                            normalizeLanguageSearch(
                                language.code
                            );


                        return (
                            name.includes(
                                normalizedQuery
                            ) ||
                            code.includes(
                                normalizedQuery
                            )
                        );

                    }
                )
                .slice(
                    0,
                    100
                );


        if (!matches.length) {

            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "transl-language-no-results";

            empty.textContent =
                "No languages found.";

            results.appendChild(
                empty
            );

            return;

        }


        matches.forEach(
            language => {

                const item =
                    document.createElement(
                        "button"
                    );

                item.type =
                    "button";

                item.className =
                    "transl-language-option";

                item.dataset.code =
                    language.code;

                item.setAttribute(
                    "role",
                    "option"
                );


                const name =
                    document.createElement(
                        "span"
                    );

                name.className =
                    "transl-language-name";

                name.textContent =
                    language.name;


                const code =
                    document.createElement(
                        "span"
                    );

                code.className =
                    "transl-language-code";

                code.textContent =
                    language.code;


                item.appendChild(
                    name
                );

                item.appendChild(
                    code
                );


                if (
                    select.value ===
                    language.code
                ) {

                    item.classList.add(
                        "selected"
                    );

                    item.setAttribute(
                        "aria-selected",
                        "true"
                    );

                } else {

                    item.setAttribute(
                        "aria-selected",
                        "false"
                    );

                }


                item.addEventListener(
                    "click",
                    () => {

                        select.value =
                            language.code;


                        if (
                            selectedDisplay
                        ) {

                            selectedDisplay.textContent =
                                "Selected: " +
                                language.name;

                        }


                        results
                            .querySelectorAll(
                                ".transl-language-option"
                            )
                            .forEach(
                                option => {

                                    option.classList
                                        .remove(
                                            "selected"
                                        );

                                    option.setAttribute(
                                        "aria-selected",
                                        "false"
                                    );

                                }
                            );


                        item.classList.add(
                            "selected"
                        );

                        item.setAttribute(
                            "aria-selected",
                            "true"
                        );


                        search.value =
                            language.name;

                    }
                );


                results.appendChild(
                    item
                );

            }
        );


        const count =
            document.createElement(
                "div"
            );

        count.className =
            "transl-language-result-count";

        count.textContent =
            normalizedQuery
                ? (
                    matches.length >= 100
                        ? "Showing first 100 results"
                        : `${matches.length} language${matches.length === 1 ? "" : "s"} found`
                )
                : "Start typing to search languages.";

        results.appendChild(
            count
        );

    }


    search.addEventListener(
        "input",
        () => {

            renderLanguageResults(
                search.value
            );

        }
    );


    search.addEventListener(
        "focus",
        () => {

            renderLanguageResults(
                search.value
            );

        }
    );


    const searchButton = document.getElementById("transl-language-search-button");

    if (searchButton) {
        searchButton.addEventListener("click", () => {
            renderLanguageResults(search.value);
            search.focus();
        });
    }

    renderLanguageResults(
        ""
    );

}

/* ==========================================
   SHOW LOGIN
========================================== */

function showTransLLogin() {

    const login =
        document.getElementById(
            "transl-login-form"
        );

    const register =
        document.getElementById(
            "transl-register-form"
        );

    const language =
        document.getElementById(
            "transl-language-form"
        );


    if (login) {
        login.hidden = false;
    }

    if (register) {
        register.hidden = true;
    }

    if (language) {
        language.hidden = true;
    }

}


/* ==========================================
   SHOW REGISTER
========================================== */

function showTransLRegister() {

    const login =
        document.getElementById(
            "transl-login-form"
        );

    const register =
        document.getElementById(
            "transl-register-form"
        );

    const language =
        document.getElementById(
            "transl-language-form"
        );


    if (login) {
        login.hidden = true;
    }

    if (register) {
        register.hidden = false;
    }

    if (language) {
        language.hidden = true;
    }

}


/* ==========================================
   SHOW FAVORITE LANGUAGE
========================================== */

function showTransLFavoriteLanguage() {

    const login =
        document.getElementById(
            "transl-login-form"
        );

    const register =
        document.getElementById(
            "transl-register-form"
        );

    const language =
        document.getElementById(
            "transl-language-form"
        );


    if (login) {
        login.hidden = true;
    }

    if (register) {
        register.hidden = true;
    }

    if (language) {
        language.hidden = false;
    }

}


/* ==========================================
   ENTER TRANSL
========================================== */

function enterTransL() {

    const authScreen =
        document.getElementById(
            "transl-auth-screen"
        );

    if (authScreen) {

        authScreen.remove();

    }

}


/* ==========================================
   AUTH EVENTS
========================================== */

function setupTransLAuthEvents() {

    const showRegister =
        document.getElementById(
            "transl-show-register"
        );

    const showLogin =
        document.getElementById(
            "transl-show-login"
        );


    if (showRegister) {

        showRegister.addEventListener(
            "click",
            showTransLRegister
        );

    }


    if (showLogin) {

        showLogin.addEventListener(
            "click",
            showTransLLogin
        );

    }


    /* ======================================
       LOGIN
    ====================================== */

    const loginButton =
        document.getElementById(
            "transl-login-button"
        );


    if (loginButton) {

        loginButton.addEventListener(
            "click",
            async () => {

                const identifier =
                    document.getElementById(
                        "transl-login-identifier"
                    ).value.trim();

                const password =
                    document.getElementById(
                        "transl-login-password"
                    ).value;


                const message =
                    document.getElementById(
                        "transl-login-message"
                    );


                message.textContent = "";


                try {

                    loginButton.disabled =
                        true;

                    const data =
                        await loginTransLUser(
                            identifier,
                            password
                        );


                    saveTransLAuth(
                        data.token,
                        data.user
                    );


                    if (
                        data.requiresFavoriteLanguage
                    ) {

                        showTransLFavoriteLanguage();

                    } else {

                        enterTransL();

                    }

                } catch (error) {

                    message.textContent =
                        error.message;

                } finally {

                    loginButton.disabled =
                        false;

                }

            }
        );

    }


    /* ======================================
       REGISTER
    ====================================== */

    const registerButton =
        document.getElementById(
            "transl-register-button"
        );


    if (registerButton) {

        registerButton.addEventListener(
            "click",
            async () => {

                const name =
                    document.getElementById(
                        "transl-register-name"
                    ).value.trim();

                const username =
                    document.getElementById(
                        "transl-register-username"
                    ).value.trim();

                const email =
                    document.getElementById(
                        "transl-register-email"
                    ).value.trim();

                const password =
                    document.getElementById(
                        "transl-register-password"
                    ).value;


                const message =
                    document.getElementById(
                        "transl-register-message"
                    );


                message.textContent = "";


                try {

                    registerButton.disabled =
                        true;


                    const data =
                        await registerTransLUser(
                            name,
                            username,
                            email,
                            password
                        );


                    saveTransLAuth(
                        data.token,
                        data.user
                    );


                    showTransLFavoriteLanguage();

                } catch (error) {

                    message.textContent =
                        error.message;

                } finally {

                    registerButton.disabled =
                        false;

                }

            }
        );

    }


    /* ======================================
       FAVORITE LANGUAGE
    ====================================== */

    const languageButton =
        document.getElementById(
            "transl-save-language-button"
        );


    if (languageButton) {

        languageButton.addEventListener(
            "click",
            async () => {

                const select =
                    document.getElementById(
                        "transl-favorite-language"
                    );

                const message =
                    document.getElementById(
                        "transl-language-message"
                    );


                const code =
                    select.value;


                if (!code) {

                    message.textContent =
                        "Please select your favorite language.";

                    return;

                }


                const language =
                    getTransLLanguage(
                        code
                    );


                if (!language) {

                    message.textContent =
                        "Invalid language selection.";

                    return;

                }


                try {

                    languageButton.disabled =
                        true;


                    await saveTransLFavoriteLanguage(
                        language.code,
                        language.name
                    );


                    enterTransL();

                } catch (error) {

                    message.textContent =
                        error.message;

                } finally {

                    languageButton.disabled =
                        false;

                }

            }
        );

    }

}


/* ==========================================
   AUTH INITIALIZATION
========================================== */

async function initializeTransLAuthentication() {

    loadTransLAuth();


    /*
     * No saved token means the user needs
     * to authenticate.
     */

    if (!translAuthState.token) {

        createTransLAuthUI();

        return;

    }


    /*
     * Verify the saved session with the server.
     */

    try {

        const data =
            await getTransLCurrentUser();


        if (data.success && data.user) {

            translAuthState.user =
                data.user;


            localStorage.setItem(
                TRANSL_CURRENT_USER_KEY,
                JSON.stringify(
                    data.user
                )
            );


            /*
             * Existing account without a
             * favorite language.
             */

            if (
                !data.user.favoriteLanguage ||
                !data.user.favoriteLanguage.code
            ) {

                createTransLAuthUI();

                showTransLFavoriteLanguage();

                return;

            }


            /*
             * Valid authenticated user.
             */

            return;

        }

    } catch (error) {

        console.warn(
            "TransL session is invalid:",
            error.message
        );

    }


    /*
     * Invalid session.
     */

    clearTransLAuth();

    createTransLAuthUI();

}


/* ==========================================
   START AUTH SYSTEM
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeTransLAuthentication();

    }
);
