import React from "react";
import Recommendations from "../../component/recommendations";
import Post from "../../component/post";

export default function Subscriptions() {
    return (
        <div>
            <div className={'px-4'}>
                <div>
                <span className={'flex items-center justify-center text-center py-4'}>
                    You haven't subscribed to Creators' pages yet. <br/>
                    When you subscribe to pages, you'll see more posts here.
                </span>
                </div>
                <div className={'py-4'}>
                    <div>
                        <h1 className={'text-dark text-xl font-bold'}>Recommendation</h1>
                    </div>
                </div>
                <div>
                    <Recommendations/>
                    <Post/>
                </div>
            </div>
        </div>
    );
};