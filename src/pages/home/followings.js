import React from "react";
import Post from "../../component/post";
import DiscoverFollowing from "../../component/discover-following";

export default function Followings(){
    return(
        <>
            <div className={'flex items-center justify-between px-4 py-4 text-center'}>
                <DiscoverFollowing/>
                <DiscoverFollowing/>
                <DiscoverFollowing/>
                <DiscoverFollowing/>
                <DiscoverFollowing/>
                <DiscoverFollowing/>
            </div>
            <div className={'mt-5 h-auto'}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </>
    );
};