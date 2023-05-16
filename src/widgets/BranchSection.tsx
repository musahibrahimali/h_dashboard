import React from 'react'

const BranchSection = () => {
    return (
        <React.Fragment>
            <div className="flex flex-row justify-between items-center w-full space-x-2">
                <div className="w-4/12 bg-white shadow-lg py-4 px-2">
                    <div className="">
                        <div className="flex flex-row space-x-4 justify-between items-center px-4">
                            <div className="text-gray-700 font-bold text-lg">
                                Top Branch
                            </div>
                            <div className="flex justify-between items-center space-x-2 border border-gray-200 rounded-md">
                                <div className="px-1 py-1 flex flex-row justify-between items-center space-x-2">
                                    <p className="">Jan</p>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-gray-700"
                                    >
                                        <path
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                                        />
                                    </svg>
                                </div>
                                <div className="px-2 py-1 bg-gray-200">Month</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 bg-white shadow-lg py-4 px-2">
                    <div className="">
                        <div className="flex flex-row space-x-4 justify-between items-center px-4">
                            <div className="text-gray-700 font-bold text-lg">
                                Tasks
                            </div>
                            <div className="flex justify-between items-center space-x-2"></div>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 bg-white shadow-lg py-4 px-2">
                    <div className="">
                        <div className="flex flex-row space-x-4 justify-between items-center px-4">
                            <div className="flex flex-col">
                                <div className="text-gray-700 font-bold text-lg">
                                    Aquanut Support
                                </div>
                            </div>
                            <div className="flex justify-between items-center space-x-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BranchSection;