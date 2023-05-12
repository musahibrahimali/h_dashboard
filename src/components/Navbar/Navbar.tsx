import React from 'react';


const Navbar = (props:any)  => {
    const {
        toggleSidebar,
        handleToggleSidebar,
        lightTheme,
        toggleTheme,
    } = props;

    return (
        <>
            <header className={`fixed top-0 ${toggleSidebar ? 'left-0': 'left-72'} right-0 h-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg z-50 flex flex-row justify-between items-center px-4 transition-all duration-500 ease-in-out`}>
                <div className="flex flex-row justify-between items-center">
                    <button type="button" className="inline-flex items-center justify-center text-gray-900 focus:outline-none focus:ring-0" aria-controls="sidebar-menu" onClick={handleToggleSidebar} aria-expanded="false">
                        <span className="sr-only">Mobile menu</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className={`${toggleSidebar ? 'block': 'hidden'} h-8 w-8`}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className={`${toggleSidebar ? 'hidden': 'block'} h-8 w-8`}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" 
                            />
                        </svg>
                    </button>

                    <form className="hidden sm:inline-block md:hidden lg:inline-block mx-5 rounded-md">
                        <div className="flex flex-wrap items-stretch w-full relative">
                            <input
                                type="text"
                                className="flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 text-gray-800 bg-gray-200 overflow-x-auto focus:outline-none border border-gray-100 focus:border-gray-200 focus:ring-0 rounded-l-xl"
                                placeholder="Search…"
                                aria-label="Search"
                            />
                            <div className="flex -mr-px rounded-l-xl">
                                <button
                                    className="flex items-center py-2 px-4 ltr:-ml-1 rtl:-mr-1 leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0 rounded-r-xl"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="flex flex-row justify-between items-center space-x-4">
                    <div className="flex flex-row justify-center items-center rounded-full w-8 h-8 text-white bg-gray-400 p-1">
                        AB
                    </div>
                    <button onClick={toggleTheme} className="flex flex-row justify-between items-center">
                        {
                            lightTheme ? <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" 
                            />
                        </svg> :

                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-6 h-6"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" 
                            />
                        </svg>
                    }

                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;