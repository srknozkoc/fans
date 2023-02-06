import React from "react";
import {Link} from "react-router-dom";
import FollowCard from "../../component/follow-card";

export default function HomeSidebar(){
    return(
        <div className={'absolute mt-16 pt-2 pl-11'}>
            <h2 className={"text-xl font-bold mb-3"}>Trending Creators</h2>
            <div className={'grid gap-10 mb-5 mt-7'}>
                <FollowCard/>
                <FollowCard/>
                <FollowCard/>
                <FollowCard/>
                <FollowCard/>
            </div>
            <Link className={"text-xs font-bold"} to={"/recommend"}>View More</Link>
        </div>
    );
};