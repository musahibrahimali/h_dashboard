import React from 'react';
import RevenueSection from '@/widgets/RevenueSection';
import BannerSection from '@/widgets/BannerSection';
import ConsumptionSection from '@/widgets/ConsumptionSection';
import MapComponent from '@/components/map/MapComponent';
import BranchSection from '@/widgets/BranchSection';


const MainDashboard = () => {
    return (
        <React.Fragment>   
            <div className="flex flex-col items-start justify-start h-full px-2">
                <BannerSection />

                {/* doughnut and trend chart */}
                <RevenueSection />

                {/* water consumption */}
                <div className="my-2"></div>
                <ConsumptionSection />
                <div className="my-2"></div>
                {/* Branch, Task and Support */}
                {/* Map Component */}
                <div className="bg-white shadow-lg h-[600px] w-full">
                    <MapComponent />
                </div>
                <div className="my-2"></div>

                <BranchSection />
                <div className="my-2"></div>
            </div>
        </React.Fragment>
    );
}

export default MainDashboard;