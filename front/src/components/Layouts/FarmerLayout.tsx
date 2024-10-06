"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import HeaderFarmer from "@/components/HeaderFarmer";
import ChatCard from "../Bouchta/ChatCard";

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== HeaderFarmer Star ===== --> */}
          <HeaderFarmer sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== HeaderFarmer End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* <!-- ===== Chat Box Start ===== --> */}
          <div className="fixed bottom-8 right-8">
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              {chatOpen ? "X" : "Bouchta"}
            </button>
          </div>
          {chatOpen && (
            <div className="fixed bottom-24 right-8 bg-white shadow-lg rounded-lg w-90">
              <ChatCard />
            </div>
          )}
          {/* <!-- ===== Chat Box End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
