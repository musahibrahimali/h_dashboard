import React from 'react';
import DoughnutChart from '@/components/charts/DoughnutChart';
import LineChart from '@/components/charts/LineChart';


const MainDashboard = () => {
    return (
        <React.Fragment>   
            <div className="flex flex-row justify-between items-center">

                {/* card banner */}
                <div className="flex-shrink max-w-full px-2 w-full sm:w-1/2 lg:w-1/3 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                        <div className="flex flex-col justify-start items-start space-y-4">
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-blue-500">
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" 
                                        />
                                    </svg>
                                </div>
                                <h5 className="text-sm md:text-lg font-semibold capitalize">
                                    Daily top-ups
                                </h5>
                            </div>
                            <div className="flex flex-row items-center">
                                <h5 className="text-sm md:text-lg lg:text-xl font-bold capitalize">
                                    GH¢ 28,452
                                </h5>
                                <div className="ml-2 text-green-500">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5" 
                                            />
                                    </svg>

                                </div>

                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <div className="bg-green-100 text-green-500 rounded-md px-2 py-1">
                                    +0.28%
                                </div>
                                <h5 className="font-normal">
                                    from previous period
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card banner */}
                <div className="flex-shrink max-w-full px-2 w-full sm:w-1/2 lg:w-1/3 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                        <div className="flex flex-col justify-start items-start space-y-4">
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5}
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-blue-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>

                                </div>
                                <h5 className="text-sm md:text-lg font-semibold capitalize">
                                    Yesterday&apos;s revenue
                                </h5>
                            </div>
                            <div className="flex flex-row items-center">
                                <h5 className="text-sm md:text-lg lg:text-xl font-bold capitalize">
                                    GH¢ 16.2
                                </h5>
                                <div className="ml-2 text-green-500">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5" 
                                            />
                                    </svg>

                                </div>

                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <div className="bg-green-100 text-green-500 rounded-md px-2 py-1">
                                    +0.28%
                                </div>
                                <h5 className="font-normal">
                                    from previous period
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* card banner */}
                <div className="flex-shrink max-w-full px-2 w-full sm:w-1/2 lg:w-1/3 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                        <div className="flex flex-col justify-start items-start space-y-4">
                            <div className="flex flex-row justify-start items-center space-x-2">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                    </svg>
                                </div>
                                <h5 className="text-sm md:text-lg font-semibold capitalize">
                                    Yesterday&apos;s Consumption
                                </h5>
                            </div>
                            <div className="flex flex-row items-center">
                                <h5 className="text-sm md:text-lg lg:text-xl font-bold capitalize">
                                    1,452 Litres
                                </h5>
                                <div className="ml-2 text-green-500">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth={1.5} 
                                        stroke="currentColor" 
                                        className="w-6 h-6">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                d="M4.5 15.75l7.5-7.5 7.5 7.5" 
                                            />
                                    </svg>

                                </div>

                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <div className="bg-yellow-100 text-yellow-500 rounded-md px-2 py-1">
                                    0%
                                </div>
                                <h5 className="font-normal">
                                    from previous period
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* doughnut and trend chart */}
            <div className="grid grid-cols-12 gap-2 px-2 my-2">
                <div className="col-span-9 grid grid-cols-8 bg-white px-2 py-4 h-full shadow-lg gap-2">
                    <div className="col-span-2 py-4 px-1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ipsam blanditiis, mollitia modi neque architecto cum fugit sapiente quibusdam. Quis doloremque culpa unde dolore ipsa suscipit aspernatur, animi ipsum neque optio excepturi omnis quia iste vero, amet iusto quisquam laborum! Maiores non consectetur reiciendis eveniet sapiente rem tempore, quaerat cumque!
                    </div>
                    <div className="col-span-6">
                        <LineChart />
                    </div>
                </div>
                <div className="col-span-3 flex flex-col justify-between items-center bg-white px-2 py-4 h-full shadow-lg my-auto">
                    <DoughnutChart />
                </div>
            </div>

            {/* Map Component */}
            {/* <div className="bg-white h-[600px] rounded-md my-2">
                <MapComponent />
            </div> */}
        </React.Fragment>
    );
}

export default MainDashboard;