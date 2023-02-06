import {Link} from "react-router-dom";
import React from "react";

import {HiHome} from 'react-icons/hi'
import {RiSearch2Line , RiSendPlaneFill} from 'react-icons/ri'
import {IoNotifications} from 'react-icons/io5'

export default function Navigation(){
    return(
        <div>
            <button className={'ml-3 py-4'}>
                <img src="https://picsum.photos/id/237/200/200" className={"w-8 h-8 rounded-full"} alt=""/>
            </button>
            <ul>
                <Link className={"text-primary-color hover:bg-hover-color hover:text-black block p-3 mb-1 font-bold flex items-center gap-4 text-l rounded-3xl"} to={"/"}>
                    <HiHome size={'26px'}/> Home
                </Link>
                <Link className={"text-primary-color hover:bg-hover-color hover:text-black block p-3 mb-1 font-bold flex items-center gap-4 text-l rounded-3xl"} to={"/explore"}>
                    <RiSearch2Line size={'26px'}/> Explore
                </Link>
                <Link className={"text-primary-color hover:bg-hover-color hover:text-black block p-3 mb-1 font-bold flex items-center gap-4 text-l rounded-3xl"} to={"/notifications"}>
                    <IoNotifications size={'26px'}/> Notifications
                </Link>
                <Link className={"text-primary-color hover:bg-hover-color hover:text-black block p-3 mb-1 font-bold flex items-center gap-4 text-l rounded-3xl"} to={"/messages"}>
                    <RiSendPlaneFill size={'26px'}/> Message
                </Link>
            </ul>
        </div>
    )
}