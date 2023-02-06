import React from "react";
import {Outlet} from "react-router-dom";
import HomeSidebar from "./home/home-sidebar";

export default function Home() {
    return (
        <>
            <div className={'grid grid-cols-10 gap-6'}>
                <div className={'col-span-7'}>
                   <Outlet />
                </div>
                <div className={'col-span-3'}>
                    <HomeSidebar />
                </div>
            </div>
        </>
    )
}