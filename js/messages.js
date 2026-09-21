"use strict";

/* ==========================================
   TRANSL
   MESSAGING
========================================== */


/* ==========================================
   MESSAGING STATE
========================================== */

const translMessagesState = {
    selectedUser: null,
    messages: [],
    users: [],
    conversations: [],
    unreadCount: 0
};


/* ==========================================
   API - SEND MESSAGE
========================================== */

async function sendTransLMessage(recipientId, content) {

    const cleanContent =
        String(content || "").trim();

    if (!recipientId) {
        throw new Error("A recipient is required.");
    }

    if (!cleanContent) {
        throw new Error("Message cannot be empty.");
    }

    if (cleanContent.length > 5000) {
        throw new Error(
            "Message cannot exceed 5000 characters."
        );
    }

    return await translAuthRequest(
        "/api/messages",
        {
            method: "POST",

            body: JSON.stringify({
                recipient: recipientId,
                content: cleanContent
            })
        }
    );
}


/* ==========================================
   API - LOAD CONVERSATION
========================================== */

async function loadTransLConversation(userId) {

    if (!userId) {
        throw new Error("A conversation user is required.");
    }

    const data =
        await translAuthRequest(
            `/api/messages/conversation/${encodeURIComponent(userId)}`
        );

    translMessagesState.selectedUser =
        data.user || null;

    translMessagesState.messages =
        Array.isArray(data.messages)
            ? data.messages
            : [];

    return data;
}


/* ==========================================
   API - UNREAD COUNT
========================================== */

async function loadTransLUnreadCount() {

    const data =
        await translAuthRequest(
            "/api/messages/unread-count"
        );

    translMessagesState.unreadCount =
        Number(data.unreadCount || 0);

    return translMessagesState.unreadCount;
}

/* ==========================================
   API - RECENT CONVERSATIONS
========================================== */

async function loadTransLConversations() {

    const data =
        await translAuthRequest(
            "/api/messages/conversations"
        );

    translMessagesState.conversations =
        Array.isArray(data.conversations)
            ? data.conversations
            : [];

    return translMessagesState.conversations;
}


/* ==========================================
   RENDER MESSAGE PAGE
========================================== */

async function initializeTransLMessages() {

    const pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    if (!pageContainer) {
        console.error(
            "TransL: Messages page container not found."
        );
        return;
    }

    pageContainer.innerHTML = `

        <section
            class="transl-page-card transl-messages-page"
            aria-label="TransL messages"
        >

            <div class="transl-messages-header">

                <div>
                    <div class="transl-page-icon">
                        M
                    </div>

                    <h1>
                        Messages
                    </h1>

                    <p>
                        Send and receive messages with TransL users.
                    </p>
                </div>

                <span
                    id="transl-unread-count"
                    class="transl-message-unread"
                    hidden
                >
                    0
                </span>

            </div>


            <div
                id="transl-message-status"
                class="transl-message-status"
                aria-live="polite"
            ></div>


            <div
                id="transl-message-layout"
                class="transl-message-layout"
            >

                <aside
                    id="transl-message-users"
                    class="transl-message-users"
                    aria-label="TransL users"
                >
                    <p>
                        Loading users...
                    </p>
                </aside>


                <section
                    class="transl-conversation"
                    aria-label="Conversation"
                >

                    <div
                        id="transl-conversation-header"
                        class="transl-conversation-header"
                    >
                        <strong>
                            Select a user
                        </strong>
                    </div>


                    <div
                        id="transl-conversation-messages"
                        class="transl-conversation-messages"
                        aria-live="polite"
                    >
                        <p>
                            Select a TransL user to view your conversation.
                        </p>
                    </div>


                    <form
                        id="transl-message-form"
                        class="transl-message-form"
                    >

                        <textarea
                            id="transl-message-input"
                            rows="2"
                            maxlength="5000"
                            placeholder="Select a user first..."
                            disabled
                            required
                        ></textarea>

                        <button
                            type="submit"
                            id="transl-send-message"
                            disabled
                        >
                            Send
                        </button>

                    </form>

                </section>

            </div>

        </section>

    `;

    bindTransLMessageEvents();

    await refreshTransLMessages();
}

/* ==========================================
   LOAD USERS + RECENT CONVERSATIONS
========================================== */

async function loadTransLMessageUsers() {

    const usersContainer =
        document.getElementById(
            "transl-message-users"
        );

    if (!usersContainer) {
        return;
    }


    const conversations =
        Array.isArray(
            translMessagesState.conversations
        )
            ? translMessagesState.conversations
            : [];


    /* ==================================
       SIDEBAR HTML
    ================================== */

    usersContainer.innerHTML = `

        <div class="transl-message-recent">

            <div class="transl-message-section-title">
                Recent Conversations
            </div>


            <div
                id="transl-message-recent-list"
                class="transl-message-recent-list"
            >

                ${conversations.length
            ? conversations.map(
                conversation =>
                    renderTransLRecentConversation(
                        conversation
                    )
            ).join("")
            : `
                            <div class="transl-message-empty">
                                No conversations yet.
                            </div>
                        `
        }

            </div>

        </div>


        <div class="transl-message-search-section">

            <div class="transl-message-section-title">
                Find a user
            </div>


            <div class="transl-message-user-search">

                <input
                    type="search"
                    id="transl-message-user-search"
                    placeholder="Search users..."
                    autocomplete="off"
                >

                <button
                    type="button"
                    id="transl-message-user-search-button"
                >
                    Search
                </button>

            </div>


            <div
                id="transl-message-user-results"
                class="transl-message-user-results"
            ></div>

        </div>

    `;


    /* ==================================
       SEARCH EVENTS
    ================================== */

    const searchInput =
        document.getElementById(
            "transl-message-user-search"
        );


    const searchButton =
        document.getElementById(
            "transl-message-user-search-button"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchTransLMessageUsers
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    searchTransLMessageUsers();

                }

            }
        );

    }

    /* ==================================
       RECENT CONVERSATION EVENTS
    ================================== */

    document
        .querySelectorAll(
            ".transl-message-recent-user"
        )
        .forEach(element => {

            element.addEventListener(
                "click",
                async () => {

                    const userId =
                        element.dataset.userId;

                    if (!userId) {
                        return;
                    }

                    const conversation =
                        translMessagesState.conversations.find(
                            item => {

                                const conversationUser =
                                    item.user || {};

                                const conversationUserId =
                                    conversationUser._id ||
                                    conversationUser.id ||
                                    "";

                                return String(
                                    conversationUserId
                                ) === String(userId);

                            }
                        );

                    if (
                        conversation &&
                        conversation.user
                    ) {

                        await selectTransLMessageUser(
                            {
                                id:
                                    String(
                                        conversation.user._id ||
                                        conversation.user.id ||
                                        ""
                                    ),

                                name:
                                    conversation.user.name ||
                                    conversation.user.username ||
                                    "TransL User",

                                username:
                                    conversation.user.username ||
                                    "",

                                avatar:
                                    conversation.user.avatar ||
                                    ""
                            }
                        );

                        return;
                    }

                    /*
                     * Fallback:
                     * If the conversation user is not
                     * available in state, load the
                     * conversation first.
                     */
                    try {

                        const data =
                            await loadTransLConversation(
                                userId
                            );

                        const user =
                            data.user || null;

                        if (user) {

                            await selectTransLMessageUser(
                                {
                                    id:
                                        String(
                                            user._id ||
                                            user.id ||
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

                        }

                    } catch (error) {

                        console.error(
                            "TransL: Unable to select recent conversation.",
                            error
                        );

                        showTransLMessageStatus(
                            error.message ||
                            "Unable to open conversation.",
                            true
                        );

                    }

                }
            );

        });
}
/* ==========================================
   RENDER RECENT CONVERSATION
========================================== */

function renderTransLRecentConversation(
    conversation
) {

    const user =
        conversation.user || {};

    const lastMessage =
        conversation.lastMessage || {};

    const unreadCount =
        Number(
            conversation.unreadCount || 0
        );


    const name =
        user.name ||
        user.username ||
        "TransL User";


    const username =
        user.username
            ? `@${user.username}`
            : "";


    const preview =
        String(
            lastMessage.content || ""
        );


    const shortenedPreview =
        preview.length > 45
            ? `${preview.substring(0, 45)}...`
            : preview;


    const avatar =
        user.avatar
            ? `
                <img
                    src="${escapeTransLMessageHTML(
                user.avatar
            )}"
                    alt=""
                    class="transl-message-avatar-image"
                >
            `
            : `
                <span
                    class="transl-message-avatar-fallback"
                >
                    ${escapeTransLMessageHTML(
                name.charAt(0).toUpperCase()
            )}
                </span>
            `;


    return `

        <div
            class="transl-message-recent-user ${unreadCount > 0
            ? "has-unread"
            : ""
        }"
            data-user-id="${escapeTransLMessageHTML(
            user.id || ""
        )}"
            role="button"
            tabindex="0"
        >

            <div class="transl-message-recent-avatar">

                ${avatar}

            </div>


            <div class="transl-message-recent-info">

                <div class="transl-message-recent-top">

                    <strong>
                        ${escapeTransLMessageHTML(
            name
        )}
                    </strong>

                    ${unreadCount > 0
            ? `
                                <span
                                    class="transl-message-unread-badge"
                                >
                                    ${unreadCount}
                                </span>
                            `
            : ""
        }

                </div>


                ${username
            ? `
                            <small>
                                ${escapeTransLMessageHTML(
                username
            )}
                            </small>
                        `
            : ""
        }


                <div
                    class="transl-message-recent-preview"
                >

                    ${lastMessage.sentByMe
            ? "You: "
            : ""
        }

                    ${escapeTransLMessageHTML(
            shortenedPreview ||
            "No message preview"
        )}

                </div>

            </div>

        </div>

    `;
}

async function searchTransLMessageUsers() {

    const input =
        document.getElementById(
            "transl-message-user-search"
        );

    const results =
        document.getElementById(
            "transl-message-user-results"
        );

    if (!input || !results) {
        return;
    }

    const query =
        input.value.trim();

    if (query.length < 2) {

        results.innerHTML = `

            <div class="transl-message-empty">
                Enter at least 2 characters.
            </div>

        `;

        return;
    }

    results.innerHTML = `
        <div class="transl-message-loading">
            Searching...
        </div>
    `;

    try {

        const data =
            await translAuthRequest(
                `/api/friends/search?q=${encodeURIComponent(query)}`
            );

        const users =
            Array.isArray(data.users)
                ? data.users
                : [];

        const currentUserId =
            translAuthState &&
                translAuthState.user
                ? String(
                    translAuthState.user.id || ""
                )
                : "";

        const filteredUsers =
            users.filter(
                (user) =>
                    String(
                        user._id ||
                        user.id ||
                        ""
                    ) !== currentUserId
            );

        if (!filteredUsers.length) {

            results.innerHTML = `

                <div class="transl-message-empty">
                    No other TransL users found.
                </div>

            `;

            return;
        }

        results.innerHTML =
            filteredUsers
                .map(
                    (user) => {

                        const userId =
                            user._id ||
                            user.id;

                        const displayName =
                            user.name ||
                            user.username ||
                            "TransL User";

                        const avatar =
                            user.avatar ||
                            displayName
                                .charAt(0)
                                .toUpperCase();

                        return `

                            <button
                                type="button"
                                class="transl-message-user"
                                data-user-id="${escapeTransLMessageHTML(
                            userId
                        )}"
                            >

                                <span
                                    class="transl-message-user-avatar"
                                >
                                    ${escapeTransLMessageHTML(
                            avatar
                        )}
                                </span>

                                <span
                                    class="transl-message-user-info"
                                >

                                    <strong>
                                        ${escapeTransLMessageHTML(
                            displayName
                        )}
                                    </strong>

                                    ${user.username
                                ? `
                                                <small>
                                                    @${escapeTransLMessageHTML(
                                    user.username
                                )}
                                                </small>
                                            `
                                : ""
                            }

                                </span>

                            </button>

                        `;

                    }
                )
                .join("");

        results
            .querySelectorAll(
                ".transl-message-user"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        async () => {

                            const userId =
                                button.dataset.userId;

                            const user =
                                filteredUsers.find(
                                    (item) =>
                                        String(
                                            item._id ||
                                            item.id
                                        ) ===
                                        String(userId)
                                );

                            if (user) {

                                await selectTransLMessageUser(
                                    {
                                        id:
                                            String(
                                                user._id ||
                                                user.id
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

                            }

                        }
                    );

                }
            );

    } catch (error) {

        console.error(
            "TransL: Message user search failed.",
            error
        );

        results.innerHTML = `

            <div class="transl-message-error">
                ${escapeTransLMessageHTML(
            error.message ||
            "Unable to search users."
        )}
            </div>

        `;

    }

}


/* ==========================================
   SELECT USER
========================================== */

async function selectTransLMessageUser(user) {

    if (!user || !user.id) {
        return;
    }

    translMessagesState.selectedUser =
        user;

    const header =
        document.getElementById(
            "transl-conversation-header"
        );

    if (header) {

        header.innerHTML = `

            <strong>
                ${escapeTransLMessageHTML(
            user.name ||
            user.username ||
            "TransL User"
        )}
            </strong>

            ${user.username
                ? `
                        <small>
                            @${escapeTransLMessageHTML(
                    user.username
                )}
                        </small>
                    `
                : ""
            }

        `;
    }

    const input =
        document.getElementById(
            "transl-message-input"
        );

    const sendButton =
        document.getElementById(
            "transl-send-message"
        );

    if (input) {
        input.disabled = false;
        input.placeholder = "Write a message...";
    }

    if (sendButton) {
        sendButton.disabled = false;
    }

    await renderTransLConversation(user.id);
}


/* ==========================================
   RENDER CONVERSATION
========================================== */

async function renderTransLConversation(userId) {

    const messagesContainer =
        document.getElementById(
            "transl-conversation-messages"
        );

    if (!messagesContainer) {
        return;
    }

    messagesContainer.innerHTML = `
        <p>Loading conversation...</p>
    `;

    try {

        const data =
            await loadTransLConversation(
                userId
            );

        const messages =
            Array.isArray(data.messages)
                ? data.messages
                : [];

        if (!messages.length) {

            messagesContainer.innerHTML = `
                <div class="transl-message-empty">
                    <strong>No messages yet.</strong>
                    <p>Start the conversation.</p>
                </div>
            `;

            return;
        }


        const currentUserId =
            translAuthState &&
                translAuthState.user
                ? String(
                    translAuthState.user.id || ""
                )
                : "";


        messagesContainer.innerHTML =
            messages.map((message) => {

                const senderId =
                    message.sender &&
                        (
                            message.sender._id ||
                            message.sender.id
                        )
                        ? String(
                            message.sender._id ||
                            message.sender.id
                        )
                        : "";

                const ownMessage =
                    senderId === currentUserId;

                const senderName =
                    message.sender &&
                        (
                            message.sender.name ||
                            message.sender.username
                        )
                        ? (
                            message.sender.name ||
                            message.sender.username
                        )
                        : "TransL User";

                const createdAt =
                    message.createdAt
                        ? new Date(
                            message.createdAt
                        ).toLocaleString()
                        : "";

                return `

                    <article
                        class="
                            transl-message-bubble
                            ${ownMessage
                        ? "own"
                        : "received"}
                        "
                    >

                        <div
                            class="transl-message-sender"
                        >
                            ${escapeTransLMessageHTML(
                            ownMessage
                                ? "You"
                                : senderName
                        )}
                        </div>

                        <div
                            class="transl-message-content"
                        >
                            ${escapeTransLMessageHTML(
                            message.content
                        )}
                        </div>

                        <time
                            class="transl-message-time"
                            datetime="${escapeTransLMessageHTML(
                            message.createdAt || ""
                        )
                    }"
                        >
                            ${escapeTransLMessageHTML(
                        createdAt
                    )}
                        </time>

                    </article>

                `;

            }).join("");


        messagesContainer.scrollTop =
            messagesContainer.scrollHeight;

    } catch (error) {

        messagesContainer.innerHTML = `

            <p class="transl-message-error">
                Unable to load this conversation.
            </p>

        `;

        console.error(
            "TransL: Conversation loading failed.",
            error
        );

    }

}


/* ==========================================
   SEND MESSAGE FORM
========================================== */

function bindTransLMessageEvents() {

    const form =
        document.getElementById(
            "transl-message-form"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const selectedUser =
                translMessagesState.selectedUser;

            if (!selectedUser || !selectedUser.id) {

                showTransLMessageStatus(
                    "Select a user first.",
                    true
                );

                return;
            }


            const input =
                document.getElementById(
                    "transl-message-input"
                );

            const button =
                document.getElementById(
                    "transl-send-message"
                );


            const content =
                input
                    ? input.value.trim()
                    : "";


            if (!content) {
                return;
            }


            try {

                if (input) {
                    input.disabled = true;
                }

                if (button) {
                    button.disabled = true;
                    button.textContent = "Sending...";
                }


                await sendTransLMessage(
                    selectedUser.id,
                    content
                );


                if (input) {
                    input.value = "";
                }


                await renderTransLConversation(
                    selectedUser.id
                );


                await loadTransLUnreadCount();


                showTransLMessageStatus(
                    "Message sent.",
                    false
                );

            } catch (error) {

                console.error(
                    "TransL: Message sending failed.",
                    error
                );

                showTransLMessageStatus(
                    error.message ||
                    "Unable to send message.",
                    true
                );

            } finally {

                if (input) {
                    input.disabled = false;
                    input.focus();
                }

                if (button) {
                    button.disabled = false;
                    button.textContent = "Send";
                }

            }

        }
    );

}


/* ==========================================
   REFRESH MESSAGING
========================================== */

async function refreshTransLMessages() {

    try {

        await loadTransLUnreadCount();

        updateTransLUnreadUI();

        await loadTransLConversations();

        await loadTransLMessageUsers();

    } catch (error) {

        console.error(
            "TransL: Messaging refresh failed.",
            error
        );

        showTransLMessageStatus(
            error.message ||
            "Unable to load messages.",
            true
        );

    }

}


/* ==========================================
   UNREAD UI
========================================== */

function updateTransLUnreadUI() {

    const unreadElement =
        document.getElementById(
            "transl-unread-count"
        );

    if (!unreadElement) {
        return;
    }

    const count =
        Number(
            translMessagesState.unreadCount || 0
        );

    if (count > 0) {

        unreadElement.hidden = false;

        unreadElement.textContent =
            String(count);

    } else {

        unreadElement.hidden = true;

        unreadElement.textContent =
            "0";

    }

}


/* ==========================================
   STATUS
========================================== */

function showTransLMessageStatus(
    message,
    isError = false
) {

    const status =
        document.getElementById(
            "transl-message-status"
        );

    if (!status) {
        return;
    }

    status.textContent =
        String(message || "");

    status.classList.toggle(
        "error",
        Boolean(isError)
    );

}


/* ==========================================
   HTML ESCAPING
========================================== */

function escapeTransLMessageHTML(value) {

    return String(value || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
