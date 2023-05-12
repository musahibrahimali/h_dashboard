
import AreaChart from '@/components/charts/AreaChart';
import React from 'react';
import BarChart from '@/components/charts/BarChart';
import DoughnutChart from '@/components/charts/DoughnutChart';
import LineChart from '@/components/charts/LineChart';
import PieChart from '@/components/charts/PieChart';
import MapComponent from '@/components/map/MapComponent';
import GaugeChart from '@/components/charts/GuageChart';
import Speedometer from '@/components/charts/Speedometer';


const MainDashboard = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-2 py-2 px-2">
                <div className="col-span-8 w-full">
                    <div className="grid grid-cols-10 gap-4 px-2 py-2">
                        <div className="col-span-5 rounded-md bg-white shadow-md px-4 py-4">
                            <GaugeChart />
                        </div>
                        <div className="col-span-5 rounded-md bg-white shadow-md px-12 py-4 flex flex-row justify-center items-center mx-auto">
                            <Speedometer />
                        </div>
                    </div>

                    <div className="grid grid-cols-10 gap-4 px-2 py-2">
                        <div className="col-span-10 rounded-md bg-white shadow-md px-4 py-4">
                            <AreaChart />
                        </div>
                        <div className="col-span-10 rounded-md bg-white shadow-md px-4 py-4">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-1 gap-4 w-full h-full">
                    <div className="col-span-1 flex flex-col justify-center items-center rounded-md bg-white shadow-md px-4 py-4">
                        <DoughnutChart />
                    </div>
                    <div className="col-span-1 flex flex-col justify-center items-center rounded-md bg-white shadow-md px-4 py-4">
                        <LineChart /> 
                    </div> 
                    <div className="col-span-1 flex flex-col justify-center items-center rounded-md bg-white shadow-md px-4 py-4">
                        <PieChart />
                    </div>
                </div>
            </div>
            <div className="bg-white h-[600px] rounded-md my-2">
                <MapComponent />
            </div>
        </React.Fragment>
    );
}

export default MainDashboard;