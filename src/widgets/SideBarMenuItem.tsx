import Link from 'next/link';
import React from 'react'

const SideBarMenuItem = (props:any) => {
    const {
        url,
        label,
        icon,
    } = props;
    return (
        <React.Fragment>
            <li className="w-full space-y-1">
                <Link href={url}>
                    <div className="flex h-6 justify-start items-center hover:bg-gray-100 hover:border-r-[8px] hover:border-gray-900 bg-white py-4 transition-all duration-300 delay-150">
                        {icon}
                        <h1 className="px-2 uppercase text-gray-700">
                            {label}
                        </h1>
                    </div>
                </Link>
            </li>
        </React.Fragment>
    );
}

export default SideBarMenuItem;