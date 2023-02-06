import {MdVerified} from "react-icons/md";
import React from "react";

export default function FollowCard() {
    return (
        <>
            <div className={'flex items-center'}>
                <div>
                    <img className={'w-14 rounded-full'} src="https://picsum.photos/id/177/200/200" alt=""/>
                </div>
                <div className={'flex items-center justify-between w-full'}>
                    <div className={'pl-3'}>
                            <span className={'flex items-center gap-1'}>
                            Name
                            <MdVerified className={'text-[#45b5f8]'}/>
                            </span>
                        <span className={'flex items-center'}>
                            Userlink
                            </span>
                    </div>
                    <div className={'ml-20 pl-2'}>
                        <button className={'text-xs font-bold border px-3.5 py-2 rounded-full bg-black text-white'}>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}