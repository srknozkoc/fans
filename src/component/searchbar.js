import {RiSearch2Line} from "react-icons/ri";
import {IoIosArrowBack} from "react-icons/io";

export default function Searchbar(){
    return(
        <div className={'flex items-center px-6'}>
            <div>
                <button>
                    <IoIosArrowBack size={'30px'}/>
                </button>
            </div>
            <div className={'flex items-center gap-2 bg-search w-full border rounded-full pl-3 h-12'}>
                <RiSearch2Line size={'20px'}/>
                <input className={'bg-search w-full h-full text-xl rounded-full'} type="text" placeholder={'Search'}/>
            </div>
        </div>
    )
}