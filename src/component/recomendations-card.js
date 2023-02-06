import {MdVerified} from "react-icons/md";
import React from "react";

export default function RecomendationsCard(){
    return(
        <>
            <div className={'flex items-start'}>
                <div>
                    <img className={'w-16 rounded-full'} src="https://picsum.photos/id/177/200/200" alt=""/>
                </div>
                <div className={'flex items-start justify-between w-full'}>
                    <div className={'pl-3'}>
                            <span className={'flex items-center gap-1'}>
                            Name
                            <MdVerified className={'text-[#45b5f8]'}/>
                            </span>
                        <span className={'flex items-center'}>
                            Userlink
                            </span>
                    </div>
                    <div>
                        <button className={'text-lg font-medium border px-4 py-1 rounded-full'}>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
            <span className={'flex items-start justify-center pb-12'}>
                    164 /E 컵 섹시한 컨셉은 라이키에서 구독하고 챙겨보세요! 😘🔞 SNS 없는 고 수위 섹시사진&영상은 멤버십 구독하시면 보실수있습니다💋
            </span>
        </>
    )
}