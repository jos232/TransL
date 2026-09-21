"use strict";

/* ==========================================
   TRANSL
   NOTIFICATIONS MODULE
========================================== */

const translNotificationsState = {

    notifications: [],

    unreadCount: 0

};


/* ==========================================
   LOAD NOTIFICATIONS
========================================== */

async function loadTransLNotifications() {

    const data =
        await translAuthRequest(
            "/api/notifications"
        );

    translNotificationsState.notifications =
        Array.isArray(data.notifications)
            ? data.notifications
            : [];

    return translNotificationsState.notifications;

}


/* ==========================================
   LOAD UNREAD COUNT
========================================== */

async function loadTransLNotificationUnreadCount() {

    const data =
        await translAuthRequest(
            "/api/notifications/unread-count"
        );

    translNotificationsState.unreadCount =
        Number(data.unreadCount || 0);

    updateTransLNotificationUnreadUI();

    return translNotificationsState.unreadCount;

}


/* ==========================================
   MARK ONE AS READ
========================================== */

async function markTransLNotificationRead(
    notificationId
) {

    if (!notificationId) {
        return;
    }

    await translAuthRequest(
        `/api/notifications/${notificationId}/read`,
        {
            method: "PATCH"
        }
    );

    const notification =
        translNotificationsState.notifications
            .find(
                item =>
                    String(item._id) ===
                    String(notificationId)
            );

    if (notification) {
        notification.read = true;
    }

    await loadTransLNotificationUnreadCount();

    renderTransLNotifications();

}


/* ==========================================
   MARK ALL AS READ
========================================== */

async function markAllTransLNotificationsRead() {

    await translAuthRequest(
        "/api/notifications/read-all",
        {
            method: "PATCH"
        }
    );

    translNotificationsState.notifications
        .forEach(
            notification => {
                notification.read = true;
            }
        );

    translNotificationsState.unreadCount = 0;

    updateTransLNotificationUnreadUI();

    renderTransLNotifications();

}


/* ==========================================
   NOTIFICATION TIME
========================================== */

function formatTransLNotificationTime(
    createdAt
) {

    if (!createdAt) {
        return "";
    }

    const date =
        new Date(createdAt);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    const now =
        new Date();

    const difference =
        Math.floor(
            (now.getTime() -
                date.getTime()) /
            1000
        );

    if (difference < 60) {
        return "Just now";
    }

    if (difference < 3600) {

        return (
            Math.floor(
                difference / 60
            ) +
            "m"
        );

    }

    if (difference < 86400) {

        return (
            Math.floor(
                difference / 3600
            ) +
            "h"
        );

    }

    if (difference < 604800) {

        return (
            Math.floor(
                difference / 86400
            ) +
            "d"
        );

    }

    return date.toLocaleDateString();

}


/* ==========================================
   NOTIFICATION ICON
========================================== */

function getTransLNotificationIcon(
    type
) {

    switch (type) {

        case "friend_request":
            return "FR";

        case "friend_accepted":
            return "FA";

        case "message":
            return "M";

        case "like":
            return "L";

        case "comment":
            return "C";

        case "share":
            return "S";

        default:
            return "N";

    }

}


/* ==========================================
   RENDER NOTIFICATIONS
========================================== */

function renderTransLNotifications() {

    const container =
        document.getElementById(
            "transl-page-container"
        );

    if (!container) {
        return;
    }

    const notifications =
        translNotificationsState.notifications;

    const notificationHTML =
        notifications.length === 0

            ? `
                <div class="transl-notification-empty">
                    <div class="transl-notification-empty-icon">
                        N
                    </div>

                    <h3>
                        No notifications yet
                    </h3>

                    <p>
                        Your notifications will appear here.
                    </p>
                </div>
            `

            : notifications
                .map(
                    notification => {

                        const actor =
                            notification.actor;

                        const actorName =
                            actor?.name ||
                            "TransL User";

                        const actorAvatar =
                            actor?.avatar ||
                            "";

                        const icon =
                            getTransLNotificationIcon(
                                notification.type
                            );

                        const time =
                            formatTransLNotificationTime(
                                notification.createdAt
                            );

                        const unreadClass =
                            notification.read
                                ? ""
                                : "is-unread";

                        const avatarHTML =
                            actorAvatar

                                ? `
                                    <img
                                        src="${actorAvatar}"
                                        alt=""
                                        class="transl-notification-avatar-image"
                                    >
                                  `

                                : `
                                    <span>
                                        ${actorName
                                    .charAt(0)
                                    .toUpperCase()
                                }
                                    </span>
                                  `;

                        return `
                            <article
                                class="
                                    transl-notification-item
                                    ${unreadClass}
                                "
                                data-notification-id="
                                    ${notification._id}
                                "
                            >

                                <div
                                    class="
                                        transl-notification-avatar
                                    "
                                >
                                    ${avatarHTML}
                                </div>

                                <div
                                    class="
                                        transl-notification-content
                                    "
                                >

                                    <div
                                        class="
                                            transl-notification-text
                                        "
                                    >
                                        ${notification.message}
                                    </div>

                                    <div
                                        class="
                                            transl-notification-time
                                        "
                                    >
                                        ${time}
                                    </div>

                                </div>

                                <div
                                    class="
                                        transl-notification-type
                                    "
                                    aria-hidden="true"
                                >
                                    ${icon}
                                </div>

                            </article>
                        `;

                    }
                )
                .join("");


    container.innerHTML = `

        <section class="transl-notifications-page">

            <div class="transl-notifications-header">

                <div>

                    <h1>
                        Notifications
                    </h1>

                    <p>
                        Stay updated with activity on TransL.
                    </p>

                </div>

                ${translNotificationsState.unreadCount > 0

            ? `
                            <button
                                type="button"
                                id="translMarkAllNotificationsRead"
                                class="transl-notification-read-all"
                            >
                                Mark all as read
                            </button>
                          `

            : ""
        }

            </div>


            <div
                id="translNotificationsList"
                class="transl-notifications-list"
            >
                ${notificationHTML}
            </div>

        </section>

    `;


    const readAllButton =
        document.getElementById(
            "translMarkAllNotificationsRead"
        );

    if (readAllButton) {

        readAllButton.addEventListener(
            "click",
            markAllTransLNotificationsRead
        );

    }


    container
        .querySelectorAll(
            ".transl-notification-item"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    async () => {

                        const notificationId =
                            item.dataset.notificationId;

                        await markTransLNotificationRead(
                            notificationId
                        );

                    }
                );

            }
        );

}


/* ==========================================
   UPDATE NAVIGATION UNREAD BADGE
========================================== */

function updateTransLNotificationUnreadUI() {

    const unreadCount =
        translNotificationsState.unreadCount;

    const notificationLinks =
        document.querySelectorAll(
            '[data-page="notifications"]'
        );

    notificationLinks.forEach(
        link => {

            let badge =
                link.querySelector(
                    ".transl-notification-nav-badge"
                );

            if (unreadCount <= 0) {

                if (badge) {
                    badge.remove();
                }

                return;

            }

            if (!badge) {

                badge =
                    document.createElement(
                        "span"
                    );

                badge.className =
                    "transl-notification-nav-badge";

                link.appendChild(
                    badge
                );

            }

            badge.textContent =
                unreadCount > 99
                    ? "99+"
                    : String(unreadCount);

        }
    );

}


/* ==========================================
   INITIALIZE NOTIFICATIONS
========================================== */

async function initializeTransLNotifications() {

    try {

        await loadTransLNotifications();

        await loadTransLNotificationUnreadCount();

        renderTransLNotifications();

    } catch (error) {

        console.error(
            "Notifications initialization error:",
            error
        );

        const container =
            document.getElementById(
                "transl-page-container"
            );

        if (container) {

            container.innerHTML = `

                <section class="transl-page-card">

                    <div class="transl-page-icon">
                        N
                    </div>

                    <h1>
                        Notifications
                    </h1>

                    <p>
                        Unable to load notifications.
                        Please try again.
                    </p>

                </section>

            `;

        }

    }

}