import React from "react";
import StorePhotos from "./store-photos";

export default function Store(){
    return(
        <div className={'w-full p-3'}>
            <div className={'grid grid-cols-2 gap-x-4 gap-y-6'}>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
                <StorePhotos/>
            </div>
        </div>
    )
}