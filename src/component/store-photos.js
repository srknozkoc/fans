export default function StorePhotos() {
    return (
        <div className={'flex flex-col'}>
            <div className={''}>
                <img className={'bg-red-500 rounded-xl object-cover h-96 w-full'}
                     src="/store-cover_20230112_084832_fe282e_thumb.jpg" alt=""/>
            </div>
            <h1 className={'font-bold text-lg'}>코스튬 SET☁️</h1>
            <p className={'text-md font-medium'}>US$ 100</p>
            <div className="flex mt-3">
                <div
                    className={'inline-flex items-center gap-1 text-xs font-semibold bg-gray-100 border border-gray-200 px-3 py-1 rounded'}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="icon icon-tabler icon-tabler-activity-heartbeat w-3.5 h-3.5 bg-blue-700 rounded-full"
                         width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"></path>
                    </svg>
                    Membership Only
                </div>
            </div>
        </div>
    )
}