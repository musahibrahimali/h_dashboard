"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const [lightTheme, setLightTheme] = useState(true);

    
    const toggleTheme = () => {
        setLightTheme(!lightTheme);
    }

    return (
        <React.Fragment>
            <div className="flex min-h-full min-w-full">
                <div className="flex flex-col flex-grow">
                    <Navbar 
                        lightTheme={lightTheme}
                        toggleTheme={toggleTheme}
                    />
                
                    <main className="bg-body-bg flex-grow overflow-y-auto transition-all duration-500 h-full w-full ease-in-out">
                        <div className="pt-10 min-h-screen min-w-full">
                            {children}
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
}
