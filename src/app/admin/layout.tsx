"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/SideBar/SideBar";
import React, { useState } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [lightTheme, setLightTheme] = useState(true);

    const handleToggleSidebar = () => {
        setToggleSidebar(!toggleSidebar);
    };
    
    const toggleTheme = () => {
        setLightTheme(!lightTheme);
    }

    return (
        <React.Fragment>
            <div className="flex min-h-screen">
                <SideBar toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Navbar 
                        handleToggleSidebar={handleToggleSidebar} 
                        toggleSidebar={toggleSidebar}
                        lightTheme={lightTheme}
                        toggleTheme={toggleTheme}
                    />
                
                    <main className={`relative bg-body-bg flex-grow ${toggleSidebar ? 'ml-0': 'ml-64'} overflow-y-auto transition-all duration-500 ease-in-out`}>
                        <div className="min-h-screen pt-20 static left-0 right-0">
                            {children}
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
}
