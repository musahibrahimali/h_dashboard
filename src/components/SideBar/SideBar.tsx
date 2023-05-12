import Link from 'next/link';
import React from 'react';

const SideBar = (props:any) => {
    const {toggleSidebar} = props;
    return (
        <React.Fragment>
            <aside className={`fixed top-0 left-0 ${toggleSidebar ? 'w-0 hidden': 'w-72 block'}  h-full bg-white z-40  transition-all duration-500 ease-in-out`}>
                <div className="flex flex-col justify-center items-center h-24 bg-gray-200 border-b border-gray-200">
                    <h1 className="uppercase font-bold tracking-wider md:text-xl lg:text-3xl text-gray-700">
                        Dashboard
                    </h1>
                </div>
                <div className="mt-4 w-full">
                    <ul className="flex flex-col w-full justify-start items-start h-full space-y-2">
                        <li className="bg-gray-200 w-full h-6 py-4">
                            <Link href={'/'}>
                                <div className="px-2 uppercase text-gray-700 border-r-[8px] border-gray-900 h-full">
                                    admin
                                </div>
                            </Link>
                        </li>
                        <li className="bg-gray-200 w-full h-6 py-4">
                            <Link href={'/'}>
                                <div className="px-2 uppercase text-gray-700">
                                    users
                                </div>
                            </Link>
                        </li>
                        <li className="bg-gray-200 w-full h-6 py-4">
                            <Link href={'/'}>
                                <div className="px-2 uppercase text-gray-700">
                                    content
                                </div>
                            </Link>
                        </li>
                        <li className="bg-gray-200 w-full h-6 py-4">
                            <Link href='/auth/login'>
                                <div className="px-2 uppercase text-gray-700">
                                    login
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </React.Fragment>
    );
}

export default SideBar;