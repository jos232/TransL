"use strict";

/* ==========================================
   TRANSL
   FRIENDS MODULE
========================================== */

let translFriendsState = {
    friends: [],
    received: [],
    sent: [],
    searchResults: []
};


/* ==========================================
   API HELPER
========================================== */

async function translFriendsRequest(
    url,
    options = {}
) {

    const token =
        localStorage.getItem(
            "translAuthToken"
        );

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };

    if (token) {
        headers.Authorization =
            `Bearer ${token}`;
    }

    const response =
        await fetch(
            url,
            {
                ...options,
                headers
            }
        );

    const data =
        await response.json();

    if (!response.ok) {

        throw new Error(
            data.message ||
            "Friends request failed."
        );

    }

    return data;
}


/* ==========================================
   LOAD FRIENDS PAGE
========================================== */

async function initializeTransLFriends() {

    const container =
        document.getElementById(
            "transl-page-container"
        );

    if (!container) {
        return;
    }

    container.innerHTML = `
        <section class="transl-friends-page">

            <div class="transl-friends-header">

                <div>
                    <h1>Friends</h1>

                    <p>
                        Find people, manage requests,
                        and connect with your friends.
                    </p>
                </div>

            </div>


            <div class="transl-friends-search">

                <input
                    type="search"
                    id="transl-friend-search"
                    placeholder="Search by name or username..."
                    autocomplete="off"
                >

                <button
                    type="button"
                    id="transl-friend-search-button"
                >
                    Search
                </button>

            </div>


            <div
                id="transl-friend-search-results"
                class="transl-friends-section"
            ></div>


            <div
                id="transl-friend-requests"
                class="transl-friends-section"
            ></div>


            <div
                id="transl-friends-list"
                class="transl-friends-section"
            ></div>

        </section>
    `;


    const searchInput =
        document.getElementById(
            "transl-friend-search"
        );

    const searchButton =
        document.getElementById(
            "transl-friend-search-button"
        );


    searchButton.addEventListener(
        "click",
        searchTransLUsers
    );


    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter"
            ) {

                searchTransLUsers();

            }

        }
    );


    await loadTransLFriendsData();

}


/* ==========================================
   LOAD FRIEND DATA
========================================== */

async function loadTransLFriendsData() {

    try {

        const [
            friendsData,
            requestsData
        ] = await Promise.all([

            translFriendsRequest(
                "/api/friends"
            ),

            translFriendsRequest(
                "/api/friends/requests"
            )

        ]);


        translFriendsState.friends =
            friendsData.friends || [];

        translFriendsState.received =
            requestsData.received || [];

        translFriendsState.sent =
            requestsData.sent || [];


        renderTransLFriends();

        renderTransLFriendRequests();

    } catch (error) {

        console.error(
            "TransL friends loading failed:",
            error
        );

        const container =
            document.getElementById(
                "transl-page-container"
            );

        if (container) {

            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="transl-friends-message error">
                    ${escapeTransLFriendsHTML(
                    error.message
                )}
                </div>
                `
            );

        }

    }

}


/* ==========================================
   SEARCH USERS
========================================== */

async function searchTransLUsers() {

    const input =
        document.getElementById(
            "transl-friend-search"
        );

    const results =
        document.getElementById(
            "transl-friend-search-results"
        );

    if (!input || !results) {
        return;
    }


    const query =
        input.value.trim();


    if (query.length < 2) {

        results.innerHTML = `
            <div class="transl-friends-empty">
                Enter at least 2 characters to search.
            </div>
        `;

        return;

    }


    results.innerHTML = `
        <div class="transl-friends-loading">
            Searching...
        </div>
    `;


    try {

        const data =
            await translFriendsRequest(
                `/api/friends/search?q=${encodeURIComponent(query)}`
            );


        translFriendsState.searchResults =
            data.users || [];


        renderTransLSearchResults();

    } catch (error) {

        console.error(
            "TransL friend search failed:",
            error
        );

        results.innerHTML = `
            <div class="transl-friends-message error">
                ${escapeTransLFriendsHTML(
            error.message
        )}
            </div>
        `;

    }

}


/* ==========================================
   RENDER SEARCH RESULTS
========================================== */

function renderTransLSearchResults() {

    const container =
        document.getElementById(
            "transl-friend-search-results"
        );

    if (!container) {
        return;
    }


    const users =
        translFriendsState.searchResults;


    if (!users.length) {

        container.innerHTML = `
            <div class="transl-friends-empty">
                No users found.
            </div>
        `;

        return;

    }


    container.innerHTML = `
        <h2>Search Results</h2>

        <div class="transl-friends-grid">

            ${users
            .map(
                renderTransLSearchUser
            )
            .join("")}

        </div>
    `;

}


/* ==========================================
   RENDER SEARCH USER
========================================== */

function renderTransLSearchUser(user) {

    const status =
        getTransLFriendStatus(
            user._id
        );


    let action = "";


    if (status === "friend") {

        action = `
            <span class="transl-friend-status">
                Friends
            </span>
        `;

    } else if (status === "sent") {

        action = `
            <span class="transl-friend-status">
                Request Sent
            </span>
        `;

    } else if (status === "received") {

        action = `
            <button
                type="button"
                class="transl-friend-button"
                onclick="acceptTransLFriend('${user._id}')"
            >
                Accept Request
            </button>
        `;

    } else {

        action = `
            <button
                type="button"
                class="transl-friend-button"
                onclick="sendTransLFriendRequest('${user._id}')"
            >
                Add Friend
            </button>
        `;

    }


    return `
        <article class="transl-friend-card">

            <div class="transl-friend-avatar">
                ${escapeTransLFriendsHTML(
        user.avatar ||
        getTransLInitial(
            user.name
        )
    )}
            </div>

            <div class="transl-friend-info">

                <strong>
                    ${escapeTransLFriendsHTML(
        user.name
    )}
                </strong>

                <span>
                    @${escapeTransLFriendsHTML(
        user.username
    )}
                </span>

            </div>

            <div class="transl-friend-action">
                ${action}
            </div>

        </article>
    `;

}


/* ==========================================
   FRIEND STATUS
========================================== */

function getTransLFriendStatus(
    userId
) {

    const id =
        String(userId);


    if (
        translFriendsState.friends.some(
            user =>
                String(user._id) === id
        )
    ) {

        return "friend";

    }


    if (
        translFriendsState.sent.some(
            user =>
                String(user._id) === id
        )
    ) {

        return "sent";

    }


    if (
        translFriendsState.received.some(
            user =>
                String(user._id) === id
        )
    ) {

        return "received";

    }


    return "none";

}


/* ==========================================
   SEND FRIEND REQUEST
========================================== */

async function sendTransLFriendRequest(
    userId
) {

    try {

        await translFriendsRequest(
            `/api/friends/request/${userId}`,
            {
                method: "POST"
            }
        );


        await loadTransLFriendsData();

        await searchTransLUsers();

        alert(
            "Friend request sent."
        );

    } catch (error) {

        alert(
            error.message
        );

    }

}


/* ==========================================
   ACCEPT FRIEND
========================================== */

async function acceptTransLFriend(
    userId
) {

    try {

        await translFriendsRequest(
            `/api/friends/accept/${userId}`,
            {
                method: "POST"
            }
        );


        await loadTransLFriendsData();

        await searchTransLUsers();

        alert(
            "Friend request accepted."
        );

    } catch (error) {

        alert(
            error.message
        );

    }

}


/* ==========================================
   REJECT FRIEND
========================================== */

async function rejectTransLFriend(
    userId
) {

    try {

        await translFriendsRequest(
            `/api/friends/reject/${userId}`,
            {
                method: "POST"
            }
        );


        await loadTransLFriendsData();

    } catch (error) {

        alert(
            error.message
        );

    }

}


/* ==========================================
   RENDER REQUESTS
========================================== */

function renderTransLFriendRequests() {

    const container =
        document.getElementById(
            "transl-friend-requests"
        );

    if (!container) {
        return;
    }


    const requests =
        translFriendsState.received;


    if (!requests.length) {

        container.innerHTML = `
            <h2>Friend Requests</h2>

            <div class="transl-friends-empty">
                You have no pending friend requests.
            </div>
        `;

        return;

    }


    container.innerHTML = `
        <h2>Friend Requests</h2>

        <div class="transl-friends-grid">

            ${requests
            .map(
                (user) => `
                        <article class="transl-friend-card">

                            <div class="transl-friend-avatar">
                                ${escapeTransLFriendsHTML(
                    user.avatar ||
                    getTransLInitial(
                        user.name
                    )
                )}
                            </div>

                            <div class="transl-friend-info">

                                <strong>
                                    ${escapeTransLFriendsHTML(
                    user.name
                )}
                                </strong>

                                <span>
                                    @${escapeTransLFriendsHTML(
                    user.username
                )}
                                </span>

                            </div>

                            <div class="transl-friend-actions">

                                <button
                                    type="button"
                                    class="transl-friend-button"
                                    onclick="acceptTransLFriend('${user._id}')"
                                >
                                    Accept
                                </button>

                                <button
                                    type="button"
                                    class="transl-friend-button secondary"
                                    onclick="rejectTransLFriend('${user._id}')"
                                >
                                    Reject
                                </button>

                            </div>

                        </article>
                    `
            )
            .join("")}

        </div>
    `;

}


/* ==========================================
   RENDER FRIENDS
========================================== */

function renderTransLFriends() {

    const container =
        document.getElementById(
            "transl-friends-list"
        );

    if (!container) {
        return;
    }


    const friends =
        Array.isArray(
            translFriendsState.friends
        )
            ? translFriendsState.friends
            : [];


    if (!friends.length) {

        container.innerHTML = `
            <h2>Your Friends</h2>

            <div class="transl-friends-empty">
                You have no friends yet.
                Search for people above to connect.
            </div>
        `;

        return;

    }


    container.innerHTML = `
        <h2>Your Friends</h2>

        <div class="transl-friends-grid">

            ${friends
            .map((user) => {

                const userId =
                    user._id ||
                    user.id ||
                    "";

                const displayName =
                    user.name ||
                    user.username ||
                    "TransL User";

                const username =
                    user.username
                        ? `@${user.username}`
                        : "";

                const avatar =
                    user.avatar
                        ? `
                                <img
                                    src="${escapeTransLFriendsHTML(
                            user.avatar
                        )}"
                                    alt="${escapeTransLFriendsHTML(
                            displayName
                        )}"
                                    class="transl-friend-avatar-image"
                                >
                            `
                        : `
                                <span class="transl-friend-avatar-fallback">
                                    ${escapeTransLFriendsHTML(
                            getTransLInitial(
                                displayName
                            )
                        )}
                                </span>
                            `;

                return `
                        <article
                            class="transl-friend-card transl-friend-card-clickable"
                            data-user-id="${escapeTransLFriendsHTML(
                    userId
                )}"
                            tabindex="0"
                            role="button"
                            aria-label="View ${escapeTransLFriendsHTML(
                    displayName
                )}'s profile"
                        >

                            <div class="transl-friend-avatar">
                                ${avatar}
                            </div>

                            <div class="transl-friend-info">

                                <strong>
                                    ${escapeTransLFriendsHTML(
                    displayName
                )}
                                </strong>

                                ${username
                        ? `
                                        <span>
                                            ${escapeTransLFriendsHTML(
                            username
                        )}
                                        </span>
                                    `
                        : ""
                    }

                            </div>

                            <div class="transl-friend-profile-arrow"
                                 aria-hidden="true">
                                ›
                            </div>

                        </article>
                    `;

            })
            .join("")}

        </div>
    `;


    /* ==========================================
       FRIEND PROFILE CLICK EVENTS
    ========================================== */

    container
        .querySelectorAll(
            ".transl-friend-card-clickable"
        )
        .forEach((card) => {

            const openProfile = () => {

                const userId =
                    card.dataset.userId;

                if (!userId) {
                    return;
                }

                const user =
                    translFriendsState.friends.find(
                        (friend) =>
                            String(
                                friend._id ||
                                friend.id ||
                                ""
                            ) ===
                            String(userId)
                    );

                if (!user) {
                    return;
                }

                renderTransLFriendProfile(
                    user
                );

            };


            card.addEventListener(
                "click",
                openProfile
            );


            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openProfile();

                    }

                }
            );

        });

}

/* ==========================================
   FRIEND PROFILE
========================================== */

function renderTransLFriendProfile(user) {

    const container =
        document.getElementById(
            "transl-page-container"
        );

    if (!container || !user) {
        return;
    }


    const userId =
        user._id ||
        user.id ||
        "";


    const displayName =
        user.name ||
        user.username ||
        "TransL User";


    const username =
        user.username
            ? `@${user.username}`
            : "";


    const bio =
        String(
            user.bio ||
            "No bio added yet."
        );


    const favoriteLanguage =
        user.favoriteLanguage ||
        "Not specified";

    const avatarValue =
        String(user.avatar || "").trim();

    const hasAvatarImage =
        /^https?:\/\//i.test(avatarValue) ||
        /^data:image\//i.test(avatarValue) ||
        /^\/[^/]/.test(avatarValue);

    const avatar =
        hasAvatarImage
            ? `
            <img
                src="${escapeTransLFriendsHTML(
                avatarValue
            )}"
                alt="${escapeTransLFriendsHTML(
                displayName
            )}"
                class="transl-friend-profile-avatar-image"
            >
        `
            : `
            <span
                class="transl-friend-profile-avatar-fallback"
            >
                ${escapeTransLFriendsHTML(
                getTransLInitial(
                    displayName
                )
            )}
            </span>
        `;


    container.hidden = false;


    container.innerHTML = `

        <section
            class="transl-friend-profile"
            aria-label="${escapeTransLFriendsHTML(
        displayName
    )}'s profile"
        >

            <div class="transl-friend-profile-top">

                <button
                    type="button"
                    class="transl-friend-profile-back"
                    id="transl-friend-profile-back"
                >
                    ← Back to Friends
                </button>

            </div>


            <div class="transl-friend-profile-card">

                <div class="transl-friend-profile-cover"></div>


                <div class="transl-friend-profile-main">

                    <div class="transl-friend-profile-avatar">

                        ${avatar}

                    </div>


                    <div class="transl-friend-profile-identity">

                        <h1>
                            ${escapeTransLFriendsHTML(
        displayName
    )}
                        </h1>

                        ${username
            ? `
                                <p class="transl-friend-profile-username">
                                    ${escapeTransLFriendsHTML(
                username
            )}
                                </p>
                            `
            : ""
        }

                    </div>


                    <div class="transl-friend-profile-actions">

                        <button
                            type="button"
                            class="transl-friend-profile-message"
                            id="transl-friend-profile-message"
                            data-user-id="${escapeTransLFriendsHTML(
            userId
        )}"
                        >
                            Message
                        </button>

                    </div>

                </div>


                <div class="transl-friend-profile-details">

                    <div class="transl-friend-profile-section">

                        <h2>About</h2>

                        <p>
                            ${escapeTransLFriendsHTML(
            bio
        )}
                        </p>

                    </div>


                    <div class="transl-friend-profile-section">

                        <h2>Favorite language</h2>

                        <p>
                            ${escapeTransLFriendsHTML(
            favoriteLanguage
        )}
                        </p>

                    </div>

                </div>

            </div>

        </section>

    `;


    /* ==========================================
       BACK TO FRIENDS
    ========================================== */

    const backButton =
        document.getElementById(
            "transl-friend-profile-back"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                initializeTransLFriends();

            }
        );

    }


    /* ==========================================
       MESSAGE FRIEND
    ========================================== */

    const messageButton =
        document.getElementById(
            "transl-friend-profile-message"
        );


    if (messageButton) {

        messageButton.addEventListener(
            "click",
            async () => {

                if (!userId) {
                    return;
                }


                const pageContainer =
                    document.getElementById(
                        "transl-page-container"
                    );


                if (!pageContainer) {
                    return;
                }


                /* ==============================
                   OPEN MESSAGES PAGE
                ============================== */

                const messagesNavItem =
                    document.querySelector(
                        '[data-page="messages"]'
                    );


                if (messagesNavItem) {

                    messagesNavItem.click();

                } else {

                    pageContainer.hidden = false;

                    if (
                        typeof initializeTransLMessages ===
                        "function"
                    ) {

                        initializeTransLMessages();

                    }

                }


                /* ==============================
                   WAIT FOR MESSAGE UI
                ============================== */

                let attempts = 0;

                const openConversation =
                    async () => {

                        attempts += 1;


                        const messageInput =
                            document.getElementById(
                                "transl-message-input"
                            );


                        if (
                            !messageInput &&
                            attempts < 20
                        ) {

                            setTimeout(
                                openConversation,
                                50
                            );

                            return;

                        }


                        if (
                            typeof selectTransLMessageUser !==
                            "function"
                        ) {

                            console.warn(
                                "TransL: Message selection function is unavailable."
                            );

                            return;

                        }


                        await selectTransLMessageUser(
                            {
                                id: String(
                                    userId
                                ),

                                name:
                                    user.name ||
                                    user.username ||
                                    "TransL User",

                                username:
                                    user.username ||
                                    "",

                                avatar:
                                    user.avatar ||
                                    ""
                            }
                        );

                    };


                openConversation();

            }
        );

    }

}


/* ==========================================
   HELPERS
========================================== */


function getTransLInitial(name) {
    return String(name || "T")
        .charAt(0)
        .toUpperCase();
}

function escapeTransLFriendsHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ==========================================
   GLOBAL FUNCTIONS
========================================== */

window.initializeTransLFriends =
    initializeTransLFriends;

window.sendTransLFriendRequest =
    sendTransLFriendRequest;

window.acceptTransLFriend =
    acceptTransLFriend;

window.rejectTransLFriend =
    rejectTransLFriend;


