import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Images from '../json-data/explore-foto.json'
import {IoIosPhotos} from "react-icons/io";
import {BiPlay} from "react-icons/bi";


export default function xploreFotos() {
    return (
        <ResponsiveMasonry className={''}
                           columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
        >
            <Masonry columnsCount={2} gutter="2px">
                {Images.UserData.map((item,id) => (
                    <div className={'relative'}>
                        <img
                            key={id}
                            src={item.user.img}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                        <button className={'absolute'}>
                            <span className={'absolute bottom-3 left-3 text-xl text-white font-semibold'}>NAME</span>
                        </button>
                        <button className={'absolute top-3 right-3 bg-primary-color w-9 h-6 items-center flex justify-center rounded-lg'}>
                            <div className={' flex items-center hidden'}>
                                <BiPlay size={'20px'}/>
                                <p className={'text-xs font-bold'}>4</p>
                            </div>
                            <div className={'flex items-center '}>
                                <IoIosPhotos size={'15px'}/>
                                <p className={'text-xs font-bold pl-1'}>4</p>
                            </div>
                        </button>
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}