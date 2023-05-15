import SideBarMenuItem from '@/widgets/SideBarMenuItem';
import React from 'react';

const SideBar = (props:any) => {
    const {toggleSidebar} = props;
    return (
        <React.Fragment>
            <aside className={`fixed top-0 left-0 ${toggleSidebar ? 'w-0 hidden': 'w-64 block'}  h-screen bg-white dark:bg-gray-800 shadow-sm z-40  transition-all duration-500 ease-in-out`}>
                <div className="overflow-y-auto scrollbars">
                    <div className="flex flex-col justify-center items-center h-24 bg-white border-b border-gray-200">
                        <h1 className="uppercase font-bold tracking-wider md:text-xl lg:text-3xl text-gray-700">
                            Dashboard
                        </h1>
                    </div>
                    <div className="mt-4 w-full">
                        <ul className="flex flex-col w-full justify-start items-start h-full space-y-2">
                            <SideBarMenuItem
                                url='/'
                                label="Admin"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-gray-700">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" 
                                            />
                                    </svg>
                                }
                            />
                            <SideBarMenuItem
                                url='/auth/login'
                                label="login"
                                icon={
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-gray-700">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" 
                                            />
                                    </svg>
                                }
                            />
                        </ul>
                    </div>
                </div>
                
            </aside>
        </React.Fragment>
    );
}

export default SideBar;