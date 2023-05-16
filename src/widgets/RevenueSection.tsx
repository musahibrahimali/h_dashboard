import DoughnutChart from '@/components/charts/DoughnutChart';
import LineChart from '@/components/charts/LineChart';
import React from 'react'

const RevenueSection = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col items-start justify-between h-full w-full">
                <div className="flex w-full space-x-4">
                    <div className="w-8/12 bg-white shadow-lg">
                        {/* revenue header */}
                        <div className="flex flex-row space-x-4 pt-4 justify-between items-center px-4">
                            <div className="text-gray-700 font-bold text-lg">
                                Revenue
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
                        {/* revenue body and chart */}
                        <div className="flex flex-row pt-6 w-full">
                            {/* right column */}
                            <div className="px-4 w-[800px]">
                                <p className="text-gray-500 font-semibold text-lg">This Month</p>
                                <h2 className="text-xl font-bold pt-4 text-gray-600">GH¢ 245,758.35</h2>
                                <div className="flex justify-start items-center space-x-2 pt-2">
                                    <div className="bg-green-100 text-sm text-green-400 px-1 py-1 rounded-lg">
                                        +0.28%
                                    </div>
                                    <p className="text-gray-700 text-sm capitalize">from previous period</p>
                                </div>
                                <button 
                                    className="bg-blue-500 flex flex-row justify-between items-center space-x-2 px-2 py-2 rounded-sm text-white text-sm capitalize mt-6">
                                        <span>view details</span>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth={1.5} 
                                            stroke="currentColor" 
                                            className="w-4 h-4"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5" 
                                            />
                                        </svg>
                                </button>
                                <p className="text-gray-500 mt-10 font-semibold text-lg">Last Month</p>
                                <h2 className="text-xl font-bold text-gray-500">GH¢ 200,981.04</h2>
                            </div>
                            {/* line cahrt */}
                            <div className="flex flex-grow px-2">
                                <LineChart />
                            </div>
                        </div>
                    </div>


                    {/* doughnut chart */}
                    <div className="w-4/12 h-full px-2 py-4 bg-white shadow-lg">
                        <DoughnutChart />
                        <div className="mx-auto">
                            <div className="flex justify-between items-center px-4 py-4">
                                <div className="flex flex-col justify-center items-center space-y-1">
                                    <div className="flex justify-center items-center space-x-2 py-2">
                                        <div className="bg-blue-700 rounded-full w-2 h-2"></div>
                                        <p className="text-gray-400 text-xs">ATM 218B</p>
                                    </div>
                                    <h1 className="text-gray-500 font-semibold">GH¢2,132</h1>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-1">
                                    <div className="flex justify-center items-center space-x-2 py-2">
                                        <div className="bg-green-700 rounded-full w-2 h-2"></div>
                                        <p className="text-gray-400 text-xs">ATM 218B</p>
                                    </div>
                                    <h1 className="text-gray-500 font-semibold">GH¢1, 763</h1>
                                </div>
                                <div className="flex flex-col justify-center items-center space-y-1">
                                    <div className="flex justify-center items-center space-x-2 py-2">
                                        <div className="bg-yellow-400 rounded-full w-2 h-2"></div>
                                        <p className="text-gray-400 text-xs">ATM 218B</p>
                                    </div>
                                    <h1 className="text-gray-500 font-semibold">GH¢ 973</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RevenueSection;