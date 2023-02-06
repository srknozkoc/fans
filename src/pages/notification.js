import React from "react";
import NotificationsPost from "../component/notifications-post";

export default function Notification() {
    return (
        <div className={'border'}>
            <div className={'border-b px-4 mb-4 py-3'}>
                <h1 className={'font-bold text-xl'}>Notifications</h1>
            </div>
            <h1 className={'font-bold text-xl pb-1 px-3'}>Today</h1>
            <div className={'grid gap-4 px-3 mb-3'}>
                <NotificationsPost/>
                <NotificationsPost/>
                <NotificationsPost/>
                <NotificationsPost/>
            </div>
        </div>
    )
}