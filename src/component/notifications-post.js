import React from "react";

export default function NotificationsPost(){
    return(
        <>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-5'}>
                    <img className={'w-12 rounded-full'} src="https://picsum.photos/id/177/200/200" alt=""/>
                    <div className={'flex items-center gap-3'}>
                        <h1>Name</h1>
                        <p>Title</p>
                        <p>Post shared Time</p>
                    </div>
                </div>
                <div>
                    <img className={'w-12'} src="https://picsum.photos/id/177/200/200" alt=""/>
                </div>
            </div>
        </>
    )
}