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
            <div className="flex flex-col min-h-screen">
                <main>
                    {children}
                </main>
            </div>
        </React.Fragment>
    );
}
