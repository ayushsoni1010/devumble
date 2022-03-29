import React, { useEffect, useState } from "react";
import Logo from '../assets/logo.svg';

export default function Header({type}) {
    const [headerTypeRef, setHeaderType] = useState(false);
    useEffect(() => {
        (type) ? setHeaderType(true) : setHeaderType(false);
    }, [type]);

    if (headerTypeRef) {
        return (
            <div className="header-after-login flex flex-row items-center justify-between">
                <img src={Logo} alt="devumble" className="w-auto h-auto" />
                <button className="flex flex-row items-center gap-2 px-3 py-1.5 rounded-md bg-white hover:bg-gray-400">
                    <span className="logout-icon-wrapper w-fit h-fit">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-0">
                            <path d="M12 18.25C11.5858 18.25 11.25 18.5858 11.25 19C11.25 19.4142 11.5858 19.75 12 19.75H18C18.9665 19.75 19.75 18.9665 19.75 18V6C19.75 5.0335 18.9665 4.25 18 4.25H12C11.5858 4.25 11.25 4.58579 11.25 5C11.25 5.41421 11.5858 5.75 12 5.75L18 5.75C18.1381 5.75 18.25 5.86193 18.25 6L18.25 18C18.25 18.1381 18.1381 18.25 18 18.25H12Z" fill="#666666"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5031 14.3652C15.1934 14.3652 15.7531 13.8056 15.7531 13.1152V10.8747C15.7531 10.1843 15.1934 9.6247 14.5031 9.6247L9.89048 9.6247C9.88396 9.55128 9.87713 9.47787 9.87 9.40448L9.81597 8.8486C9.73354 8.00049 8.83294 7.49258 8.06451 7.86084C6.43029 8.64403 4.95085 9.71578 3.69736 11.0245L3.59816 11.1281C3.13395 11.6128 3.13395 12.3771 3.59815 12.8618L3.69736 12.9654C4.95085 14.2741 6.43029 15.3459 8.06451 16.1291C8.83293 16.4973 9.73354 15.9894 9.81597 15.1413L9.87 14.5854C9.87713 14.512 9.88396 14.4386 9.89048 14.3652H14.5031ZM9.19511 12.8652C8.92874 12.8652 8.69326 13.0045 8.56008 13.216C8.49523 13.319 8.45464 13.4391 8.44656 13.5685C8.42842 13.8594 8.40524 14.15 8.37703 14.4403L8.36135 14.6017C7.3253 14.0677 6.36316 13.4028 5.49838 12.6239C5.27402 12.4218 5.05622 12.2121 4.84538 11.995C5.86892 10.9409 7.05651 10.0607 8.36135 9.38824L8.37703 9.54959C8.40524 9.83987 8.42842 10.1305 8.44656 10.4214C8.47122 10.8167 8.79902 11.1247 9.19511 11.1247H14.2531V12.8652H9.19511Z" fill="#666666"/>
                        </svg>
                    </span>
                    <span className="logout-text font-semibold text-slate-400 text-sm">logout</span>
                </button>
            </div>
        )
    } else {
        return (
            <div className="header-default">
                <img src={Logo} alt="devumble" className="w-auto h-auto" />
            </div>
        ) 
    }
} 