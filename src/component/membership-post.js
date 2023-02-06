export default function MembershipOnly() {
    return (
        <>
            <div className={'membership-only h-[250px] bg-[#f3f3f9]'}>
                    <span className={'flex items-center pt-2 pl-2'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bag-heart-fill text-heart" viewBox="0 0 16 16">
                            <path
                                d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                        </svg>
                        <p className={'font-semibold text-sm pl-1'}>Membership Only</p>
                    </span>
                    <span className={'flex flex-col items-center justify-center pt-16 gap-1'}>
                        <div className={'flex items-center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-bag-heart-fill text-heart" viewBox="0 0 16 16">
                                <path
                                    d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                            </svg>
                            <h2 className={'text-sm font-semibold'}>Membership Only Post</h2>
                        </div>
                        <span
                            className={'bg-button flex items-center justify-center text-white font-semibold text-sm rounded-3xl py-3 px-6'}>
                            Subscribe for US$32/mo.
                        </span>
                    </span>
            </div>
            <div>
                <div className={'public hidden'}>
                    <img className={'w-full h-auto object-'} src="https://picsum.photos/id/490/200/200" alt=""/>
                </div>
            </div>
        </>
    )
}