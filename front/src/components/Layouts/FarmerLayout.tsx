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
          <HeaderFarmer
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* <!-- ===== HeaderFarmer End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* <!-- ===== Chat Box Start ===== --> */}
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="rounded-full bg-green-500 p-3 font-bold text-white hover:bg-green-700 shadow-lg"
            >
              {chatOpen ? (
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="144 144 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                  <g
                    id="IconSvg_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="IconSvg_iconCarrier">
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="m400.91 433.76 145.93 145.93c9.0703 9.0703 23.801 9.0391 32.848 0 9.0625-9.0703 9.0703-23.781-0.003907-32.848l-145.92-145.93 145.93-145.93c9.0625-9.0703 9.0625-23.785 0-32.848-9.0703-9.0703-23.781-9.0703-32.848 0l-145.93 145.92-145.93-145.93c-9.0703-9.0703-23.781-9.0703-32.844 0-4.5352 4.5352-6.7734 10.457-6.7695 16.414-0.015626 5.9688 2.2344 11.902 6.7695 16.434l145.93 145.93-145.91 145.91c-4.5352 4.5391-6.8086 10.484-6.8008 16.43 0.011719 5.9492 2.2656 11.891 6.7969 16.426 9.0625 9.0625 23.781 9.0703 32.848 0z"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="144 144 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                  <g
                    id="IconSvg_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="IconSvg_iconCarrier">
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path d="m400.63 490.18c-20.512 0-39.066-8.8867-55.141-26.414-1.5977-1.7422-1.4844-4.4531 0.26172-6.0508 1.7422-1.5938 4.4531-1.4805 6.0469 0.26172 14.391 15.688 30.824 23.641 48.836 23.641 20.625 0 37.73-13.559 48.453-24.934 1.6172-1.7188 4.332-1.7969 6.0508-0.17969 1.7227 1.6211 1.7969 4.332 0.17578 6.0547-17.031 18.07-35.938 27.621-54.684 27.621z" />
                      <path d="m480.73 561.71h-157.79c-2.3672 0-4.2812-1.918-4.2812-4.2812v-77.082c0-2.3633 1.9141-4.2812 4.2812-4.2812 2.3672 0 4.2812 1.918 4.2812 4.2812v72.801h149.23v-74.613c0-2.3633 1.9141-4.2812 4.2812-4.2812 2.3672 0 4.2812 1.918 4.2812 4.2812v78.898c-0.003906 2.3555-1.918 4.2773-4.2852 4.2773z" />
                      <path d="m259.46 612.49c-2.3672 0-4.2812-1.918-4.2812-4.2812v-50.785c0-2.3633 1.9141-4.2812 4.2812-4.2812h21.109v-56.477c0-2.3633 1.9141-4.2812 4.2812-4.2812 2.3672 0 4.2812 1.918 4.2812 4.2812v60.758c0 2.3633-1.9141 4.2812-4.2812 4.2812h-21.109v46.496c0 2.3672-1.9141 4.2891-4.2812 4.2891z" />
                      <path d="m542.41 612.49c-2.3672 0-4.2812-1.918-4.2812-4.2812v-46.496h-19.301c-2.3672 0-4.2812-1.918-4.2812-4.2812v-62.574c0-2.3633 1.9141-4.2812 4.2812-4.2812 2.3672 0 4.2812 1.918 4.2812 4.2812v58.289h19.301c2.3672 0 4.2812 1.918 4.2812 4.2812v50.785c-0.003906 2.3555-1.918 4.2773-4.2812 4.2773z" />
                      <path d="m418.98 514.55h-38.023c-27.02 0-47.395-19.164-47.395-44.582 0-2.3633 1.9141-4.2812 4.2812-4.2812 2.3672 0 4.2812 1.918 4.2812 4.2812 0 20.535 16.691 36.016 38.832 36.016h38.023c21.895 0 39.711-17.266 39.711-38.484 0-2.3633 1.9141-4.2812 4.2812-4.2812s4.2812 1.918 4.2812 4.2812c-0.003906 25.941-21.656 47.051-48.273 47.051z" />
                      <path d="m404.48 323.34c-3.7734 0-7.5586-0.023438-11.332-0.082032-50.758-0.74609-100.9-4.3945-101.41-4.4297-2.3594-0.17188-4.125-2.2266-3.9531-4.5859 0.17578-2.3633 2.2109-4.125 4.5859-3.9531 0.5 0.035157 50.402 3.668 100.9 4.4102 53.027 0.82031 108.26-4.3477 108.82-4.3984 2.3828-0.21484 4.4453 1.5078 4.6719 3.8633 0.22266 2.3516-1.5117 4.4453-3.8633 4.6641-0.51953 0.035156-48.637 4.5117-98.422 4.5117z" />
                      <path d="m401.84 354.35c-26.41 0-57.703-1.0547-93-3.1328-2.3633-0.14062-4.1602-2.168-4.0273-4.5234 0.13672-2.3594 2.2461-4.1602 4.5234-4.0273 35.137 2.0703 66.25 3.1172 92.496 3.1172 26.152 0 57.141-1.1172 92.102-3.3242 2.418-0.13672 4.3984 1.6406 4.543 4 0.14453 2.3594-1.6406 4.3984-4.0039 4.543-35.133 2.2266-66.297 3.3477-92.633 3.3477z" />
                      <path d="m615.62 619.39h-431.25c-2.2578 0-4.3984-1.0078-5.8359-2.75-1.4297-1.7422-2.0117-4.0352-1.582-6.2539 4.7305-24.227 16.746-81.559 26.086-90.656 0.66016-0.64062 1.4297-1.1602 2.2773-1.5234l131.02-56.625c-16.605-21.594-24.645-46.367-27.676-57.641-9.7305-6.5391-13.523-23.801-13.73-37.934-0.066407-4.1406 0.16797-7.7734 0.69141-10.906l-105.87-10.203c-3.7031-0.35938-6.5938-3.3555-6.8203-7.0625-0.22656-3.707 2.2812-7.0312 5.9141-7.8398l105.62-23.301c0.10547-17.492 3.2852-66.105 33.469-98.012 18.02-19.051 42.406-28.711 72.469-28.711 30.039 0 54.68 9.6445 73.223 28.66 31.246 32.031 35.766 80.953 36.359 98.141l95.816 23.25c3.582 0.86719 6.0156 4.1953 5.7578 7.8711-0.25781 3.6797-3.1289 6.6289-6.7969 6.9922l-97.516 9.6172c0.43359 2.4141 0.69922 5.1289 0.78906 8.1484 0.35938 11.672-2.1797 33.559-13.492 41.145-4.3281 16.012-14.66 37.887-29.84 56.598l133.61 57.5c0.73047 0.31641 1.4062 0.74219 2 1.2656 10.047 8.832 18.594 61.199 22.797 91.633 0.29687 2.168-0.35156 4.3516-1.7891 5.9961-1.4414 1.6562-3.5234 2.6016-5.7031 2.6016zm-422.03-15.113h413.31c-4.75-31.84-11.73-65.988-16.234-73.203l-141.46-60.879c-2.2656-0.97266-3.9102-2.9922-4.4141-5.4102-0.50391-2.4141 0.20703-4.9219 1.8984-6.7148 18.211-19.332 30.383-45.242 33.988-61.137 0.60938-2.6914 2.6367-4.8359 5.2969-5.5977 0.48047-0.17188 2.2578-1.793 3.9961-6.7812 3.8047-10.914 3.4961-25.68 1.7695-29.98-2.3789-1.4102-3.8594-4.0625-3.6836-6.9492 0.21484-3.707 3.1016-6.7109 6.8008-7.0742l64.129-6.3242-58.262-14.137c-3.457-0.83594-5.8555-3.9766-5.7734-7.5273 0.015625-0.58984 0.98438-59.477-32.184-93.422-15.598-15.961-36.578-24.051-62.355-24.051-25.715 0-46.391 8.0508-61.434 23.93-32.086 33.859-29.316 92.723-29.285 93.312 0.19531 3.6914-2.3086 6.9961-5.918 7.793l-64.93 14.324 68.746 6.625c3.5664 0.34375 6.4023 3.1445 6.793 6.6992 0.30859 2.8047-0.96875 5.4766-3.1875 7.0234-1.7539 4.4531-1.8281 20.523 2.3477 31.031 1.6836 4.2266 3.3008 5.543 3.7344 5.668 2.6016 0.76172 4.5898 2.8516 5.2188 5.4883 2.1328 8.8516 10.711 39.516 31.73 62.41 1.6523 1.7969 2.332 4.293 1.8203 6.6875-0.51563 2.3945-2.1445 4.3867-4.3945 5.3594l-138.61 59.891c-4.3477 7.1484-12.922 41.09-19.461 72.945z" />
                      <path d="m305.71 597.07c-8.0312 0-14.559-6.5312-14.559-14.559 0-8.0312 6.5312-14.559 14.559-14.559 8.0312 0 14.559 6.5312 14.559 14.559s-6.5273 14.559-14.559 14.559zm0-20.555c-3.3047 0-5.9961 2.6914-5.9961 5.9961s2.6914 5.9961 5.9961 5.9961c3.3047 0 5.9961-2.6914 5.9961-5.9961 0-3.3086-2.6914-5.9961-5.9961-5.9961z" />
                      <path d="m499.78 597.07c-8.0273 0-14.555-6.5312-14.555-14.559 0-8.0312 6.5312-14.559 14.555-14.559 8.0312 0 14.559 6.5312 14.559 14.559 0.003906 8.0273-6.5312 14.559-14.559 14.559zm0-20.555c-3.3008 0-5.9922 2.6914-5.9922 5.9961s2.6914 5.9961 5.9922 5.9961c3.3047 0 5.9961-2.6914 5.9961-5.9961 0-3.3086-2.6914-5.9961-5.9961-5.9961z" />
                    </g>
                  </g>
                </svg>
              )}
            </button>
          </div>
          {chatOpen && (
            <div className="fixed bottom-24 right-8 w-90 rounded-lg bg-white shadow-lg z-50">
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
