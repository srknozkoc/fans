import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function HomeInner() {
    return (
        <div className={'border-x'}>
            <div className={'pt-3'}>
                <h2 className={"text-xl font-bold px-4"}>Home</h2>
                <div className={'flex items-center justify-around border-b'}>
                    <Link className={"inline-block pt-5 pb-1 px-6 text-center w-2/4 font-bold"} to={"/"}>Followings</Link>
                    <Link className={"inline-block pt-5 pb-1 px-6 text-center w-2/4 font-bold"} to={"/subscriptions"}>Subscriptions</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}