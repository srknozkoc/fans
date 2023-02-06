import React from 'react';
import {createBrowserRouter} from "react-router-dom";

import App from './App';

import Home from "./pages/home";
import Message from "./pages/message";
import Explore from "./pages/explore";
import Recommend from "./pages/home/recommed";
import Userpage from "./pages/home/user-page";
import HomeInner from "./pages/home/home-inner";
import Notification from "./pages/notification";
import Followings from "./pages/home/followings";
import Subscriptions from "./pages/home/subscriptions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: "",
        children: [
            {
                path: "",
                element: <Home/>,
                children: [
                    {
                        path: "",
                        element: <HomeInner/>,
                        children: [

                            {
                                path: "",
                                element: <Followings/>,
                            },
                            {
                                path: "subscriptions",
                                element: <Subscriptions/>,
                            },
                        ]
                    },
                    {
                        path: "recommend",
                        element: <Recommend/>,
                    },
                    {
                        path: "explore",
                        element: <Explore/>,
                    },
                    {
                        path: "notifications",
                        element: <Notification/>,
                    },
                ]
            },
            {
                path: ":username",
                element: <Userpage/>,
            },
            {
                path: "messages",
                element: <Message/>,
            }
        ]
    }
])