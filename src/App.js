import React from "react";
import {Outlet} from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import './app.css'
import Navigation from "./component/navigation";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={'container max-w-[1232px] mx-auto grid grid-cols-11'}>
                <div className={'col-span-2'}>
                    <Navigation/>
                </div>
                <div className={'col-span-8 pl-7'}>
                    <Outlet/>
                </div>
            </div>
        </QueryClientProvider>
    );
}


