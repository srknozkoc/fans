import {HiDotsHorizontal} from "react-icons/hi";
import {RiSendPlaneFill} from "react-icons/ri";
import {MdVerified} from "react-icons/md";
import {Link} from "react-router-dom";

import Post from "../../component/post";
import Store from "../../component/store";
import {useQuery} from "../../hooks/useQuery";
import React, {useMemo} from "react";
import PaymentPackage from "../../component/payment-package";

export default function Userpage() {
    const query = useQuery();
    const queryTab = query.get('tab');

    const dynamicPageComponent = useMemo(() => {
        switch (queryTab) {
            case 'paymentPackage':
                return <PaymentPackage/>;
            case 'store':
                return <Store/>;
            default:
                return <Post/>;
        }
    }, [queryTab]);

    return (
        <div className={'grid grid-cols-10 gap-6'}>
            <div className={'col-span-7'}>
                <div className={'border'}>
                    <div className={'relative'}>
                        <div className={'max-h-[255px] w-full'}>
                            <img className={'object-cover h-[255px] w-full'}
                                 src="https://fastly.picsum.photos/id/859/200/300.jpg?hmac=Ty9c6r04FYgwfkw5JMqSLG_eMq0RxeaMTAArotTX6Qk"
                                 alt=""
                            />
                        </div>
                        <button className={'absolute top-4 right-6 bg-fon-bg rounded-full p-1.5'}>
                            <HiDotsHorizontal size={'20px'} color={'white'}/>
                        </button>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'mx-4'}>
                            <img className={'h-20 absolute rounded-full inset-y-56 border-2'}
                                 src="https://picsum.photos/id/177/600/600" alt=""/>
                        </div>
                        <div className={'mr-4 mt-4'}>
                            <button className={'flex items-center justify-center border rounded-full gap-2 p-2 px-3'}>
                                <RiSendPlaneFill size={'17px'}/>
                                <p className={'text-black text-xs font-bold'}>MESSAGE</p>
                            </button>
                        </div>
                    </div>
                    <div className={'flex flex-col items-start justify-center px-4'}>
                        <span className={'mt-4 flex items-center justify-center gap-1'}>
                    <h1 className={'font-bold text-xl'}>지유</h1>
                    <MdVerified className={'text-[#45b5f8]'}/>
                        </span>
                        <span
                            className={'flex items-center justify-center gap-5 text-sm font-medium text-primary-color'}>
                            <p>@jiyu05</p>
                            <p>149.6k follower</p>
                            <p>111 Posts</p>
                        </span>
                        <span className={'mt-2 text-md tracking-tighter leading-tight'}>
                            <p>model from manila 🥰
                            Enjoy thousands of photos and videos on my subscription 🤫
                            </p>
                        </span>
                    </div>
                    <div className={'flex items-center justify-center py-6 px-4 w-full'}>
                        <Link
                            className={'flex items-center justify-center gap-2 bg-button text-white font-bold text-base w-full rounded-full py-2 tracking-tigh leading-tigh'}
                            to={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-bag-heart-fill text-heart" viewBox="0 0 16 16">
                                <path
                                    d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                            </svg>
                            SUBSCRIBE
                        </Link>
                    </div>
                    <div className={'text-lg font-bold flex item-center justify-center mt-3'}>
                        <Link className={'border-b-[3px] border-black w-2/6 text-center'} to={''}>Posts</Link>
                        <Link className={'border-b w-2/6 text-center'} to={'?tab=paymentPackage'}>Membership</Link>
                        <Link className={'border-b w-2/6 text-center'} to={'?tab=store'}>Store</Link>
                    </div>
                    {dynamicPageComponent}
                </div>
            </div>
            <div className={'col-span-3'}></div>
        </div>
    )
}


