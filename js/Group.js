"use strict";

/* ==========================================
   TRANSL
   GROUPS FRONTEND
========================================== */


/* ==========================================
   GROUP STATE
========================================== */

const translGroupState = {
    groups: [],
    selectedGroup: null,
    selectedTab: "chat",
    messages: [],
    loadingMessages: false
};


/* ==========================================
   INITIALIZE GROUPS PAGE
========================================== */

function initializeTransLGroups() {

    const pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    if (!pageContainer) {
        console.error(
            "TransL Groups: page container not found."
        );

        return;
    }

    translGroupState.selectedGroup = null;
    translGroupState.selectedTab = "chat";
    translGroupState.messages = [];

    renderTransLGroupsPage();

    loadTransLGroups();

    console.log(
        "TransL Groups frontend initialized."
    );
}


/* ==========================================
   RENDER GROUPS PAGE
========================================== */

function renderTransLGroupsPage() {

    const pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    if (!pageContainer) {
        return;
    }

    pageContainer.innerHTML = `
        <section
            class="transl-page-card transl-groups-page"
            aria-label="TransL groups"
        >

            <div class="transl-page-icon">
                G
            </div>

            <h1>
                Groups
            </h1>

            <p>
                Create and manage your TransL groups and communities.
            </p>

            <div class="transl-groups-actions">

                <button
                    type="button"
                    id="transl-create-group-button"
                    class="transl-primary-button"
                >
                    Create Group
                </button>

            </div>

            <div
                id="transl-create-group-form-container"
                hidden
            >
                <form
                    id="transl-create-group-form"
                >

                    <div>
                        <label for="transl-group-name">
                            Group name
                        </label>

                        <input
                            type="text"
                            id="transl-group-name"
                            name="name"
                            maxlength="100"
                            required
                            autocomplete="off"
                            placeholder="Enter group name"
                        >
                    </div>

                    <div>
                        <label for="transl-group-description">
                            Description
                        </label>

                        <textarea
                            id="transl-group-description"
                            name="description"
                            maxlength="1000"
                            rows="4"
                            placeholder="Describe your group"
                        ></textarea>
                    </div>

                    <div>
                        <label for="transl-group-privacy">
                            Privacy
                        </label>

                        <select
                            id="transl-group-privacy"
                            name="privacy"
                        >
                            <option value="public">
                                Public
                            </option>

                            <option value="private">
                                Private
                            </option>
                        </select>
                    </div>

                    <div>

                        <button
                            type="submit"
                            id="transl-submit-group-button"
                            class="transl-primary-button"
                        >
                            Create Group
                        </button>

                        <button
                            type="button"
                            id="transl-cancel-group-button"
                        >
                            Cancel
                        </button>

                    </div>

                </form>
            </div>

            <div
                id="transl-groups-list"
                class="transl-groups-list"
            >
                <div class="transl-groups-empty">
                    Your groups and communities will appear here.
                </div>
            </div>

        </section>
    `;

    initializeTransLGroupCreation();

    const groupsList =
        document.getElementById(
            "transl-groups-list"
        );

    if (groupsList) {

        groupsList.addEventListener(
            "click",
            (event) => {

                const groupItem =
                    event.target.closest(
                        ".transl-group-item"
                    );

                if (!groupItem) {
                    return;
                }

                const groupId =
                    groupItem.dataset.groupId;

                if (groupId) {
                    openTransLGroup(
                        groupId
                    );
                }
            }
        );
    }
}


/* ==========================================
   GROUP CREATION
========================================== */

function initializeTransLGroupCreation() {

    const createButton =
        document.getElementById(
            "transl-create-group-button"
        );

    const formContainer =
        document.getElementById(
            "transl-create-group-form-container"
        );

    const cancelButton =
        document.getElementById(
            "transl-cancel-group-button"
        );

    const createForm =
        document.getElementById(
            "transl-create-group-form"
        );

    if (
        !createButton ||
        !formContainer ||
        !cancelButton ||
        !createForm
    ) {
        return;
    }

    createButton.addEventListener(
        "click",
        () => {

            formContainer.hidden =
                false;

            const nameInput =
                document.getElementById(
                    "transl-group-name"
                );

            if (nameInput) {
                nameInput.focus();
            }
        }
    );

    cancelButton.addEventListener(
        "click",
        () => {

            formContainer.hidden =
                true;

            createForm.reset();
        }
    );

    createForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const name =
                document
                    .getElementById(
                        "transl-group-name"
                    )
                    .value
                    .trim();

            const description =
                document
                    .getElementById(
                        "transl-group-description"
                    )
                    .value
                    .trim();

            const privacy =
                document
                    .getElementById(
                        "transl-group-privacy"
                    )
                    .value;

            const submitButton =
                document.getElementById(
                    "transl-submit-group-button"
                );

            if (!name) {

                alert(
                    "Please enter a group name."
                );

                return;
            }

            submitButton.disabled =
                true;

            submitButton.textContent =
                "Creating...";

            try {

                const result =
                    await translAuthRequest(
                        "/api/groups",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({
                                    name,
                                    description,
                                    privacy
                                })
                        }
                    );

                console.log(
                    "TransL group created:",
                    result
                );

                const group =
                    result.group ||
                    result.data ||
                    result;

                formContainer.hidden =
                    true;

                createForm.reset();

                if (group && group._id) {

                    await openTransLGroup(
                        group._id
                    );

                } else {

                    await loadTransLGroups();

                    alert(
                        "Group created successfully."
                    );
                }

            } catch (error) {

                console.error(
                    "TransL group creation error:",
                    error
                );

                alert(
                    error.message ||
                    "Unable to create group."
                );

            } finally {

                submitButton.disabled =
                    false;

                submitButton.textContent =
                    "Create Group";
            }
        }
    );
}


/* ==========================================
   LOAD USER GROUPS
========================================== */

async function loadTransLGroups() {

    const groupsList =
        document.getElementById(
            "transl-groups-list"
        );

    if (!groupsList) {
        return;
    }

    groupsList.innerHTML = `
        <div class="transl-groups-loading">
            Loading groups...
        </div>
    `;

    try {

        const result =
            await translAuthRequest(
                "/api/groups",
                {
                    method: "GET"
                }
            );

        const groups =
            Array.isArray(result)
                ? result
                : (
                    result.groups ||
                    result.data ||
                    []
                );

        translGroupState.groups =
            groups;

        if (!groups.length) {

            groupsList.innerHTML = `
                <div class="transl-groups-empty">
                    Your groups and communities will appear here.
                </div>
            `;

            return;
        }

        groupsList.innerHTML =
            groups
                .map(
                    (group) => {

                        const memberCount =
                            Array.isArray(
                                group.members
                            )
                                ? group.members.length
                                : 0;

                        return `
                            <article
                                class="transl-group-item"
                                data-group-id="${escapeTransLGroupText(
                                    group._id || ""
                                )}"
                                tabindex="0"
                                role="button"
                                aria-label="Open ${escapeTransLGroupText(
                                    group.name ||
                                    "group"
                                )}"
                            >

                                <div class="transl-group-item-icon">
                                    ${escapeTransLGroupText(
                                        getTransLGroupInitial(
                                            group.name
                                        )
                                    )}
                                </div>

                                <div class="transl-group-item-content">

                                    <h2>
                                        ${escapeTransLGroupText(
                                            group.name ||
                                            "Unnamed Group"
                                        )}
                                    </h2>

                                    <p>
                                        ${escapeTransLGroupText(
                                            group.description ||
                                            "No description."
                                        )}
                                    </p>

                                    <div class="transl-group-item-meta">

                                        <span>
                                            ${memberCount}
                                            ${memberCount === 1 ? "member" : "members"}
                                        </span>

                                        <span>
                                            ${escapeTransLGroupText(
                                                group.privacy ||
                                                "public"
                                            )}
                                        </span>

                                    </div>

                                </div>

                                <div class="transl-group-item-arrow">
                                    ›
                                </div>

                            </article>
                        `;
                    }
                )
                .join("");

        console.log(
            "TransL groups loaded:",
            groups
        );

    } catch (error) {

        console.error(
            "TransL group loading error:",
            error
        );

        groupsList.innerHTML = `
            <div class="transl-groups-empty">
                Unable to load your groups.
            </div>
        `;
    }
}


/* ==========================================
   OPEN GROUP
========================================== */

async function openTransLGroup(
    groupId
) {

    if (!groupId) {
        return;
    }

    const pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    if (!pageContainer) {
        return;
    }

    pageContainer.innerHTML = `
        <section
            class="transl-page-card transl-group-detail-page"
        >
            <div class="transl-groups-loading">
                Loading group...
            </div>
        </section>
    `;

    try {

        const result =
            await translAuthRequest(
                `/api/groups/${encodeURIComponent(
                    groupId
                )}`,
                {
                    method: "GET"
                }
            );

        const group =
            result.group ||
            result.data ||
            result;

        if (
            !group ||
            !group._id
        ) {
            throw new Error(
                "Group information could not be loaded."
            );
        }

        translGroupState.selectedGroup =
            group;

        translGroupState.selectedTab =
            "chat";

        translGroupState.messages =
            [];

        renderTransLGroupDetail();

        await loadTransLGroupMessages();

    } catch (error) {

        console.error(
            "TransL group open error:",
            error
        );

        pageContainer.innerHTML = `
            <section
                class="transl-page-card transl-group-detail-page"
            >

                <button
                    type="button"
                    class="transl-group-back-button"
                    id="transl-group-back-button"
                >
                    ← Back to Groups
                </button>

                <div class="transl-groups-empty">
                    Unable to open this group.
                </div>

            </section>
        `;

        const backButton =
            document.getElementById(
                "transl-group-back-button"
            );

        if (backButton) {

            backButton.addEventListener(
                "click",
                () => {
                    initializeTransLGroups();
                }
            );
        }
    }
}


/* ==========================================
   RENDER GROUP DETAIL
========================================== */

function renderTransLGroupDetail() {

    const pageContainer =
        document.getElementById(
            "transl-page-container"
        );

    const group =
        translGroupState.selectedGroup;

    if (
        !pageContainer ||
        !group
    ) {
        return;
    }

    const members =
        Array.isArray(group.members)
            ? group.members
            : [];

    const memberCount =
        members.length;

    const creatorName =
        group.creator &&
        typeof group.creator === "object"
            ? (
                group.creator.name ||
                group.creator.username ||
                "TransL User"
            )
            : "TransL User";

    pageContainer.innerHTML = `
        <section
            class="transl-page-card transl-group-detail-page"
            aria-label="${escapeTransLGroupText(
                group.name || "Group"
            )}"
        >

            <div class="transl-group-detail-top">

                <button
                    type="button"
                    class="transl-group-back-button"
                    id="transl-group-back-button"
                >
                    ← Back to Groups
                </button>

            </div>

            <header class="transl-group-header">

                <div class="transl-group-header-avatar">
                    ${escapeTransLGroupText(
                        getTransLGroupInitial(
                            group.name
                        )
                    )}
                </div>

                <div class="transl-group-header-info">

                    <h1>
                        ${escapeTransLGroupText(
                            group.name ||
                            "Unnamed Group"
                        )}
                    </h1>

                    <p>
                        ${escapeTransLGroupText(
                            group.description ||
                            "No description."
                        )}
                    </p>

                    <div class="transl-group-header-meta">

                        <span>
                            ${memberCount}
                            ${memberCount === 1 ? "member" : "members"}
                        </span>

                        <span>
                            ${escapeTransLGroupText(
                                group.privacy ||
                                "public"
                            )}
                        </span>

                        <span>
                            Created by
                            ${escapeTransLGroupText(
                                creatorName
                            )}
                        </span>

                    </div>

                </div>

            </header>

            <nav
                class="transl-group-tabs"
                aria-label="Group sections"
            >

                <button
                    type="button"
                    class="transl-group-tab ${translGroupState.selectedTab === "chat" ? "active" : ""}"
                    data-group-tab="chat"
                >
                    Chat
                </button>

                <button
                    type="button"
                    class="transl-group-tab ${translGroupState.selectedTab === "members" ? "active" : ""}"
                    data-group-tab="members"
                >
                    Members
                </button>

                <button
                    type="button"
                    class="transl-group-tab ${translGroupState.selectedTab === "events" ? "active" : ""}"
                    data-group-tab="events"
                >
                    Events
                </button>

                <button
                    type="button"
                    class="transl-group-tab ${translGroupState.selectedTab === "about" ? "active" : ""}"
                    data-group-tab="about"
                >
                    About
                </button>

            </nav>

            <div
                id="transl-group-content"
                class="transl-group-content"
            ></div>

        </section>
    `;

    initializeTransLGroupDetailEvents();

    renderTransLGroupTab();
}


/* ==========================================
   GROUP DETAIL EVENTS
========================================== */

function initializeTransLGroupDetailEvents() {

    const backButton =
        document.getElementById(
            "transl-group-back-button"
        );

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {
                initializeTransLGroups();
            }
        );
    }

    document
        .querySelectorAll(
            "[data-group-tab]"
        )
        .forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const tab =
                            button.dataset.groupTab;

                        translGroupState.selectedTab =
                            tab;

                        document
                            .querySelectorAll(
                                "[data-group-tab]"
                            )
                            .forEach(
                                (tabButton) => {
                                    tabButton.classList.toggle(
                                        "active",
                                        tabButton.dataset.groupTab ===
                                        tab
                                    );
                                }
                            );

                        renderTransLGroupTab();
                    }
                );
            }
        );
}


/* ==========================================
   RENDER GROUP TAB
========================================== */

function renderTransLGroupTab() {

    switch (
        translGroupState.selectedTab
    ) {

        case "members":
            renderTransLGroupMembers();
            break;

        case "events":
            renderTransLGroupEvents();
            break;

        case "about":
            renderTransLGroupAbout();
            break;

        case "chat":
        default:
            renderTransLGroupChat();
            break;
    }
}


/* ==========================================
   GROUP CHAT
========================================== */

function renderTransLGroupChat() {

    const content =
        document.getElementById(
            "transl-group-content"
        );

    if (!content) {
        return;
    }

    content.innerHTML = `
        <div class="transl-group-chat">

            <div
                id="transl-group-messages"
                class="transl-group-messages"
            >
                <div class="transl-group-chat-loading">
                    Loading conversation...
                </div>
            </div>

            <form
                id="transl-group-message-form"
                class="transl-group-message-form"
            >

                <div
                    id="transl-group-emoji-picker"
                    class="transl-group-emoji-picker"
                    hidden
                >
                    ${getTransLGroupEmojis()
                        .map(
                            (emoji) => `
                                <button
                                    type="button"
                                    class="transl-group-emoji"
                                    data-group-emoji="${emoji}"
                                >
                                    ${emoji}
                                </button>
                            `
                        )
                        .join("")}
                </div>

                <button
                    type="button"
                    id="transl-group-emoji-button"
                    class="transl-group-emoji-button"
                    aria-label="Add emoji"
                    title="Add emoji"
                >
                    😊
                </button>

                <textarea
                    id="transl-group-message-input"
                    class="transl-group-message-input"
                    rows="2"
                    maxlength="5000"
                    placeholder="Write something to the group..."
                ></textarea>

                <button
                    type="submit"
                    id="transl-group-send-button"
                    class="transl-primary-button transl-group-send-button"
                >
                    Post
                </button>

            </form>

        </div>
    `;

    initializeTransLGroupChatEvents();

    renderTransLGroupMessages();
}


/* ==========================================
   GROUP CHAT EVENTS
========================================== */

function initializeTransLGroupChatEvents() {

    const form =
        document.getElementById(
            "transl-group-message-form"
        );

    const input =
        document.getElementById(
            "transl-group-message-input"
        );

    const emojiButton =
        document.getElementById(
            "transl-group-emoji-button"
        );

    const emojiPicker =
        document.getElementById(
            "transl-group-emoji-picker"
        );

    if (!form || !input) {
        return;
    }

    if (emojiButton && emojiPicker) {

        emojiButton.addEventListener(
            "click",
            () => {

                emojiPicker.hidden =
                    !emojiPicker.hidden;
            }
        );

        emojiPicker
            .querySelectorAll(
                "[data-group-emoji]"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        () => {

                            const emoji =
                                button.dataset.groupEmoji;

                            insertTransLGroupEmoji(
                                input,
                                emoji
                            );

                            emojiPicker.hidden =
                                true;

                            input.focus();
                        }
                    );
                }
            );
    }

    input.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                form.requestSubmit();
            }
        }
    );

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();

            const content =
                input.value.trim();

            if (!content) {
                input.focus();
                return;
            }

            const group =
                translGroupState.selectedGroup;

            if (!group || !group._id) {
                return;
            }

            const sendButton =
                document.getElementById(
                    "transl-group-send-button"
                );

            sendButton.disabled =
                true;

            sendButton.textContent =
                "Sending...";

            try {

                const result =
                    await translAuthRequest(
                        `/api/groups/${encodeURIComponent(
                            group._id
                        )}/messages`,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({
                                    content
                                })
                        }
                    );

                console.log(
                    "TransL group message sent:",
                    result
                );

                input.value =
                    "";

                await loadTransLGroupMessages();

                input.focus();

            } catch (error) {

                console.error(
                    "TransL group message error:",
                    error
                );

                alert(
                    error.message ||
                    "Unable to send group message."
                );

            } finally {

                sendButton.disabled =
                    false;

                sendButton.textContent =
                    "Post";
            }
        }
    );
}


/* ==========================================
   LOAD GROUP MESSAGES
========================================== */

async function loadTransLGroupMessages() {

    const group =
        translGroupState.selectedGroup;

    if (
        !group ||
        !group._id
    ) {
        return;
    }

    translGroupState.loadingMessages =
        true;

    try {

        const result =
            await translAuthRequest(
                `/api/groups/${encodeURIComponent(
                    group._id
                )}/messages`,
                {
                    method: "GET"
                }
            );

        translGroupState.messages =
            Array.isArray(result.messages)
                ? result.messages
                : [];

        if (
            translGroupState.selectedTab ===
            "chat"
        ) {
            renderTransLGroupMessages();
        }

    } catch (error) {

        console.error(
            "TransL group messages loading error:",
            error
        );

        const messagesContainer =
            document.getElementById(
                "transl-group-messages"
            );

        if (messagesContainer) {

            messagesContainer.innerHTML = `
                <div class="transl-groups-empty">
                    Unable to load group conversation.
                </div>
            `;
        }

    } finally {

        translGroupState.loadingMessages =
            false;
    }
}


/* ==========================================
   RENDER GROUP MESSAGES
========================================== */

function renderTransLGroupMessages() {

    const messagesContainer =
        document.getElementById(
            "transl-group-messages"
        );

    if (!messagesContainer) {
        return;
    }

    const messages =
        translGroupState.messages || [];

    if (!messages.length) {

        messagesContainer.innerHTML = `
            <div class="transl-group-chat-empty">

                <div class="transl-group-chat-empty-icon">
                    💬
                </div>

                <h3>
                    Start the conversation
                </h3>

                <p>
                    Send the first message to your group.
                </p>

            </div>
        `;

        return;
    }

    messagesContainer.innerHTML =
        messages
            .map(
                (message) => {

                    const sender =
                        message.sender || {};

                    const senderName =
                        sender.name ||
                        sender.username ||
                        "TransL User";

                    const username =
                        sender.username
                            ? `@${sender.username}`
                            : "";

                    const currentUser =
                        window.translCurrentUser ||
                        {};

                    const currentUserId =
                        currentUser.id ||
                        currentUser._id ||
                        "";

                    const senderId =
                        sender._id ||
                        sender.id ||
                        message.sender ||
                        "";

                    const isOwn =
                        String(senderId) ===
                        String(currentUserId);

                    const avatarValue =
                        String(
                            sender.avatar ||
                            ""
                        ).trim();

                    const hasAvatarImage =
                        /^https?:\/\//i.test(
                            avatarValue
                        ) ||
                        /^data:image\//i.test(
                            avatarValue
                        ) ||
                        /^\/[^/]/.test(
                            avatarValue
                        );

                    const avatar =
                        hasAvatarImage
                            ? `
                                <img
                                    src="${escapeTransLGroupText(
                                        avatarValue
                                    )}"
                                    alt="${escapeTransLGroupText(
                                        senderName
                                    )}"
                                    class="transl-group-message-avatar-image"
                                >
                            `
                            : `
                                <span
                                    class="transl-group-message-avatar-fallback"
                                >
                                    ${escapeTransLGroupText(
                                        getTransLGroupInitial(
                                            senderName
                                        )
                                    )}
                                </span>
                            `;

                    const createdAt =
                        formatTransLGroupTime(
                            message.createdAt
                        );

                    return `
                        <article
                            class="transl-group-message ${isOwn ? "own" : "received"}"
                        >

                            <div class="transl-group-message-avatar">
                                ${avatar}
                            </div>

                            <div class="transl-group-message-body">

                                <div class="transl-group-message-meta">

                                    <strong>
                                        ${escapeTransLGroupText(
                                            senderName
                                        )}
                                    </strong>

                                    ${
                                        username
                                            ? `
                                                <span>
                                                    ${escapeTransLGroupText(
                                                        username
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }

                                    <time>
                                        ${escapeTransLGroupText(
                                            createdAt
                                        )}
                                    </time>

                                </div>

                                <div class="transl-group-message-bubble">
                                    ${escapeTransLGroupText(
                                        message.content
                                    ).replace(
                                        /\n/g,
                                        "<br>"
                                    )}
                                </div>

                            </div>

                        </article>
                    `;
                }
            )
            .join("");

    requestAnimationFrame(
        () => {

            messagesContainer.scrollTop =
                messagesContainer.scrollHeight;
        }
    );
}


/* ==========================================
   GROUP MEMBERS
========================================== */

function renderTransLGroupMembers() {

    const content =
        document.getElementById(
            "transl-group-content"
        );

    const group =
        translGroupState.selectedGroup;

    if (
        !content ||
        !group
    ) {
        return;
    }

    const members =
        Array.isArray(group.members)
            ? group.members
            : [];

    const admins =
        Array.isArray(group.admins)
            ? group.admins
            : [];

    const currentUser =
        typeof translCurrentUser !== "undefined"
            ? translCurrentUser
            : {};

    const currentUserId =
        currentUser.id ||
        currentUser._id ||
        "";

    const creatorId =
        group.creator &&
        typeof group.creator === "object"
            ? (
                group.creator._id ||
                group.creator.id ||
                ""
            )
            : String(group.creator || "");

    const isAdmin =
        admins.some(
            (admin) => {

                const adminId =
                    admin &&
                    typeof admin === "object"
                        ? (
                            admin._id ||
                            admin.id ||
                            ""
                        )
                        : admin;

                return (
                    String(adminId) ===
                    String(currentUserId)
                );
            }
        );

    const refreshGroupDetails =
        async function () {

            const result =
                await translAuthRequest(
                    `/api/groups/${encodeURIComponent(
                        group._id
                    )}`,
                    {
                        method: "GET"
                    }
                );

            const refreshedGroup =
                result.group ||
                result.data ||
                result;

            if (
                !refreshedGroup ||
                !refreshedGroup._id
            ) {
                throw new Error(
                    "Unable to refresh group information."
                );
            }

            translGroupState.selectedGroup =
                refreshedGroup;

            renderTransLGroupMembers();
        };

    content.innerHTML = `
        <div class="transl-group-members-section">

            <div
                class="transl-group-section-heading"
                style="
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:16px;
                    flex-wrap:wrap;
                "
            >

                <div>
                    <h2>
                        Members
                    </h2>

                    <p>
                        ${members.length}
                        ${members.length === 1 ? "member" : "members"}
                    </p>
                </div>

                ${
                    isAdmin
                        ? `
                            <button
                                type="button"
                                id="transl-group-add-member-button"
                                style="
                                    border:0;
                                    border-radius:8px;
                                    padding:9px 14px;
                                    background:#1877f2;
                                    color:#fff;
                                    font-weight:600;
                                    cursor:pointer;
                                "
                            >
                                + Add Members
                            </button>
                        `
                        : ""
                }

            </div>

            ${
                isAdmin
                    ? `
                        <div
                            id="transl-group-add-member-panel"
                            hidden
                            style="
                                margin:14px 0 18px;
                                padding:14px;
                                border-radius:10px;
                                background:#f0f2f5;
                            "
                        >

                            <form
                                id="transl-group-add-member-form"
                                style="
                                    display:flex;
                                    gap:8px;
                                    align-items:center;
                                    flex-wrap:wrap;
                                "
                            >

                                <input
                                    type="text"
                                    id="transl-group-member-username"
                                    placeholder="Enter username"
                                    autocomplete="off"
                                    maxlength="100"
                                    style="
                                        flex:1;
                                        min-width:200px;
                                        padding:10px 12px;
                                        border:1px solid #ccd0d5;
                                        border-radius:8px;
                                        background:#fff;
                                    "
                                />

                                <button
                                    type="submit"
                                    style="
                                        border:0;
                                        border-radius:8px;
                                        padding:10px 15px;
                                        background:#00a884;
                                        color:#fff;
                                        font-weight:600;
                                        cursor:pointer;
                                    "
                                >
                                    Add
                                </button>

                                <button
                                    type="button"
                                    id="transl-group-cancel-add-member"
                                    style="
                                        border:0;
                                        border-radius:8px;
                                        padding:10px 15px;
                                        background:#e4e6eb;
                                        color:#1c1e21;
                                        font-weight:600;
                                        cursor:pointer;
                                    "
                                >
                                    Cancel
                                </button>

                            </form>

                        </div>
                    `
                    : ""
            }

            ${
                members.length
                    ? `
                        <div class="transl-group-members-list">

                            ${members
                                .map(
                                    (member) => {

                                        const memberObject =
                                            member &&
                                            typeof member === "object"
                                                ? member
                                                : {};

                                        const memberId =
                                            memberObject._id ||
                                            memberObject.id ||
                                            String(member || "");

                                        const name =
                                            memberObject.name ||
                                            memberObject.username ||
                                            "Group member";

                                        const username =
                                            memberObject.username
                                                ? `@${memberObject.username}`
                                                : "";

                                        const isCreator =
                                            String(memberId) ===
                                            String(creatorId);

                                        const isCurrentUser =
                                            String(memberId) ===
                                            String(currentUserId);

                                        return `
                                            <div
                                                class="transl-group-member-item"
                                                style="
                                                    display:flex;
                                                    align-items:center;
                                                    gap:12px;
                                                    justify-content:space-between;
                                                "
                                            >

                                                <div
                                                    style="
                                                        display:flex;
                                                        align-items:center;
                                                        gap:12px;
                                                        min-width:0;
                                                    "
                                                >

                                                    <div
                                                        class="transl-group-member-avatar"
                                                    >
                                                        ${escapeTransLGroupText(
                                                            getTransLGroupInitial(
                                                                name
                                                            )
                                                        )}
                                                    </div>

                                                    <div
                                                        class="transl-group-member-info"
                                                    >

                                                        <strong>
                                                            ${escapeTransLGroupText(
                                                                name
                                                            )}
                                                        </strong>

                                                        ${
                                                            username
                                                                ? `
                                                                    <span>
                                                                        ${escapeTransLGroupText(
                                                                            username
                                                                        )}
                                                                    </span>
                                                                `
                                                                : ""
                                                        }

                                                        ${
                                                            isCreator
                                                                ? `
                                                                    <small
                                                                        style="
                                                                            display:block;
                                                                            color:#1877f2;
                                                                            margin-top:3px;
                                                                        "
                                                                    >
                                                                        Group creator
                                                                    </small>
                                                                `
                                                                : ""
                                                        }

                                                    </div>

                                                </div>

                                                ${
                                                    isAdmin &&
                                                    !isCreator &&
                                                    !isCurrentUser
                                                        ? `
                                                            <button
                                                                type="button"
                                                                class="transl-group-remove-member-button"
                                                                data-member-id="${escapeTransLGroupText(
                                                                    String(memberId)
                                                                )}"
                                                                data-member-name="${escapeTransLGroupText(
                                                                    name
                                                                )}"
                                                                style="
                                                                    border:0;
                                                                    border-radius:7px;
                                                                    padding:7px 11px;
                                                                    background:#e4e6eb;
                                                                    color:#d32f2f;
                                                                    font-weight:600;
                                                                    cursor:pointer;
                                                                    flex-shrink:0;
                                                                "
                                                            >
                                                                Remove
                                                            </button>
                                                        `
                                                        : ""
                                                }

                                            </div>
                                        `;
                                    }
                                )
                                .join("")}

                        </div>
                    `
                    : `
                        <div class="transl-group-section-empty">

                            <div class="transl-group-chat-empty-icon">
                                👥
                            </div>

                            <h3>
                                Group members
                            </h3>

                            <p>
                                No member details are available yet.
                            </p>

                        </div>
                    `
            }

        </div>
    `;

    if (isAdmin) {

        const addButton =
            document.getElementById(
                "transl-group-add-member-button"
            );

        const addPanel =
            document.getElementById(
                "transl-group-add-member-panel"
            );

        const addForm =
            document.getElementById(
                "transl-group-add-member-form"
            );

        const usernameInput =
            document.getElementById(
                "transl-group-member-username"
            );

        const cancelButton =
            document.getElementById(
                "transl-group-cancel-add-member"
            );

        if (
            addButton &&
            addPanel
        ) {
            addButton.addEventListener(
                "click",
                () => {

                    addPanel.hidden =
                        !addPanel.hidden;

                    if (
                        !addPanel.hidden &&
                        usernameInput
                    ) {
                        usernameInput.focus();
                    }
                }
            );
        }

        if (
            cancelButton &&
            addPanel
        ) {
            cancelButton.addEventListener(
                "click",
                () => {

                    addPanel.hidden =
                        true;

                    if (usernameInput) {
                        usernameInput.value =
                            "";
                    }
                }
            );
        }

        if (
            addForm &&
            usernameInput
        ) {
            addForm.addEventListener(
                "submit",
                async (event) => {

                    event.preventDefault();

                    const username =
                        usernameInput.value
                            .trim()
                            .replace(/^@/, "");

                    if (!username) {
                        alert(
                            "Enter a username."
                        );

                        usernameInput.focus();

                        return;
                    }

                    const submitButton =
                        addForm.querySelector(
                            'button[type="submit"]'
                        );

                    if (submitButton) {
                        submitButton.disabled =
                            true;

                        submitButton.textContent =
                            "Adding...";
                    }

                    try {

                        const result =
                            await translAuthRequest(
                                `/api/groups/${encodeURIComponent(
                                    group._id
                                )}/members`,
                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type":
                                            "application/json"
                                    },
                                    body:
                                        JSON.stringify({
                                            username
                                        })
                                }
                            );

                        if (
                            result &&
                            result.success === false
                        ) {
                            throw new Error(
                                result.message ||
                                "Unable to add member."
                            );
                        }

                        alert(
                            result.message ||
                            "Member added successfully."
                        );

                        await refreshGroupDetails();

                    } catch (error) {

                        console.error(
                            "TransL add group member error:",
                            error
                        );

                        alert(
                            error.message ||
                            "Unable to add member."
                        );

                    } finally {

                        if (submitButton) {
                            submitButton.disabled =
                                false;

                            submitButton.textContent =
                                "Add";
                        }
                    }
                }
            );
        }

        const removeButtons =
            document.querySelectorAll(
                ".transl-group-remove-member-button"
            );

        removeButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    async () => {

                        const memberId =
                            button.dataset.memberId;

                        const memberName =
                            button.dataset.memberName ||
                            "this member";

                        if (!memberId) {
                            return;
                        }

                        const confirmed =
                            window.confirm(
                                `Remove ${memberName} from this group?`
                            );

                        if (!confirmed) {
                            return;
                        }

                        button.disabled =
                            true;

                        button.textContent =
                            "Removing...";

                        try {

                            const result =
                                await translAuthRequest(
                                    `/api/groups/${encodeURIComponent(
                                        group._id
                                    )}/members/${encodeURIComponent(
                                        memberId
                                    )}`,
                                    {
                                        method: "DELETE"
                                    }
                                );

                            if (
                                result &&
                                result.success === false
                            ) {
                                throw new Error(
                                    result.message ||
                                    "Unable to remove member."
                                );
                            }

                            alert(
                                result.message ||
                                "Member removed successfully."
                            );

                            await refreshGroupDetails();

                        } catch (error) {

                            console.error(
                                "TransL remove group member error:",
                                error
                            );

                            alert(
                                error.message ||
                                "Unable to remove member."
                            );

                            button.disabled =
                                false;

                            button.textContent =
                                "Remove";
                        }
                    }
                );
            }
        );
    }
}


/* ==========================================
   GROUP EVENTS
========================================== */

function renderTransLGroupEvents() {

    const content =
        document.getElementById(
            "transl-group-content"
        );

    if (!content) {
        return;
    }

    content.innerHTML = `
        <div class="transl-group-events-section">

            <div class="transl-group-section-heading">

                <div>

                    <h2>
                        Group Events
                    </h2>

                    <p>
                        Events and activities for this community.
                    </p>

                </div>

                <button
                    type="button"
                    class="transl-primary-button"
                    id="transl-create-group-event-button"
                >
                    Create Event
                </button>

            </div>

            <div class="transl-group-events-empty">

                <div class="transl-group-chat-empty-icon">
                    📅
                </div>

                <h3>
                    No events yet
                </h3>

                <p>
                    Group events will appear here.
                </p>

            </div>

        </div>
    `;

    const eventButton =
        document.getElementById(
            "transl-create-group-event-button"
        );

    if (eventButton) {

        eventButton.addEventListener(
            "click",
            () => {

                alert(
                    "Group events are the next backend feature. The Events section is ready for the event system."
                );
            }
        );
    }
}


/* ==========================================
   GROUP ABOUT
========================================== */

function renderTransLGroupAbout() {

    const content =
        document.getElementById(
            "transl-group-content"
        );

    const group =
        translGroupState.selectedGroup;

    if (
        !content ||
        !group
    ) {
        return;
    }

    const creator =
        group.creator &&
        typeof group.creator === "object"
            ? group.creator
            : {};

    content.innerHTML = `
        <div class="transl-group-about-section">

            <div class="transl-group-about-card">

                <h2>
                    About this group
                </h2>

                <p>
                    ${escapeTransLGroupText(
                        group.description ||
                        "No description has been added."
                    )}
                </p>

            </div>

            <div class="transl-group-about-card">

                <h3>
                    Group information
                </h3>

                <div class="transl-group-about-row">

                    <span>
                        Privacy
                    </span>

                    <strong>
                        ${escapeTransLGroupText(
                            group.privacy ||
                            "public"
                        )}
                    </strong>

                </div>

                <div class="transl-group-about-row">

                    <span>
                        Members
                    </span>

                    <strong>
                        ${
                            Array.isArray(group.members)
                                ? group.members.length
                                : 0
                        }
                    </strong>

                </div>

                <div class="transl-group-about-row">

                    <span>
                        Created by
                    </span>

                    <strong>
                        ${escapeTransLGroupText(
                            creator.name ||
                            creator.username ||
                            "TransL User"
                        )}
                    </strong>

                </div>

                <div class="transl-group-about-row">

                    <span>
                        Created
                    </span>

                    <strong>
                        ${escapeTransLGroupText(
                            formatTransLGroupDate(
                                group.createdAt
                            )
                        )}
                    </strong>

                </div>

            </div>

        </div>
    `;
}


/* ==========================================
   EMOJI SUPPORT
========================================== */

function getTransLGroupEmojis() {

    return [
        "😀",
        "😂",
        "😍",
        "😊",
        "🥰",
        "😎",
        "🤔",
        "😮",
        "😢",
        "😡",
        "👍",
        "👏",
        "🙏",
        "❤️",
        "🔥",
        "🎉",
        "💯",
        "🚀",
        "🇰🇪",
        "💬"
    ];
}


function insertTransLGroupEmoji(
    input,
    emoji
) {

    if (!input) {
        return;
    }

    const start =
        input.selectionStart;

    const end =
        input.selectionEnd;

    const currentValue =
        input.value;

    input.value =
        currentValue.slice(
            0,
            start
        ) +
        emoji +
        currentValue.slice(
            end
        );

    const cursorPosition =
        start +
        emoji.length;

    input.selectionStart =
        cursorPosition;

    input.selectionEnd =
        cursorPosition;
}


/* ==========================================
   HELPERS
========================================== */

function getTransLGroupInitial(
    name
) {

    return String(
        name || "G"
    )
        .trim()
        .charAt(0)
        .toUpperCase() ||
        "G";
}


function escapeTransLGroupText(
    value
) {

    return String(
        value ?? ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


function formatTransLGroupTime(
    value
) {

    if (!value) {
        return "";
    }

    const date =
        new Date(value);

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
        return "";
    }

    return date.toLocaleTimeString(
        [],
        {
            hour: "numeric",
            minute: "2-digit"
        }
    );
}


function formatTransLGroupDate(
    value
) {

    if (!value) {
        return "Unknown";
    }

    const date =
        new Date(value);

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {
        return "Unknown";
    }

    return date.toLocaleDateString(
        [],
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );
}


/* ==========================================
   GLOBAL ACCESS
========================================== */

window.initializeTransLGroups =
    initializeTransLGroups;

window.openTransLGroup =
    openTransLGroup;


