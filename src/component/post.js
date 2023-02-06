import {HiDotsHorizontal} from "react-icons/hi";
import {MdVerified} from "react-icons/md";
import {BsHeart} from "react-icons/bs";
import {FiMessageCircle} from "react-icons/fi";
import MembershipOnly from "./membership-post";
import {Link} from "react-router-dom";

export default function Post() {
    return (
        <div className={'border-solid border-b mb-4'}>
            <div className={'flex justify-between items-center px-4'}>
                <div className={'flex gap-3 items-center'}>
                    <Link to={'/userpage'}>
                        <img className={'h-14 rounded-full'} src="https://picsum.photos/id/177/600/600" alt=""/>
                    </Link>
                    <span>
                        <span className={'flex items-center gap-1'}>
                            <Link className={'text-black font-bold text-md'} to={'/userpage'}>지유</Link>
                        <MdVerified className={'text-[#45b5f8]'}/>
                        </span>
                        <span className={'flex gap-2'}>
                            <Link className={'text-sm text-gray-400 font-medium'} to={'/userpage'}>@jiyu05</Link>
                            <a href={"/"} className={'text-sm text-gray-400 font-medium'}>2 hours ago</a>
                        </span>
                    </span>
                </div>
                <button>
                    <HiDotsHorizontal className={'text-primary-color hover:text-dark'} size={'24px'}/>
                </button>
            </div>
            <div className={'px-3 pt-7 pb-3'}>
                <p className={'text-black font-medium'}>
                    Unlock post to view texts.
                </p>
            </div>
            <span className={'text-md font-bold text-primary-color px-3'}>Translate</span>
            <div className={'w-full cursor-pointer'}>
                <div className={''}>
                    <MembershipOnly/>
                </div>
                <div className={'flex items-center gap-6 pt-2 pb-8 px-4'}>
                <span className={'flex items-center gap-2'}>
                    <BsHeart size={'20px'}/>
                    <h2>1812</h2>
                </span>
                    <span className={'flex items-center gap-2'}>
                    <FiMessageCircle size={'25px'}/>
                    <h2>4123</h2>
                </span>
                </div>
            </div>

        </div>
    )
}