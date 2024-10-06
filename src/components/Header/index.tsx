import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import Image from "next/image";
import { useEffect, useState } from "react";

const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = (props: {
  menuOpen: string | boolean | undefined;
  setMenuOpen: (arg0: boolean) => void;
}) => {
  const [currentPage, setCurrentPage] = useState("");
  const getCurrentPage = () => {
    const path = window.location.pathname;
    const page = path.split("/")[1];
    setCurrentPage(page);
  }
  useEffect(() => {
    getCurrentPage();
  }, []);
  return (
    <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
      <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden xl:block">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
            />
          </Link>
        </div>

        <nav className="hidden gap-4 lg:flex">
          <ul className="flex items-center gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className={`font-medium text-dark dark:text-white ${currentPage.toLowerCase() === item.name ? "text-primary" : ""}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggle --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggle --> */}
          </ul>
        </div>
        {/* <!-- Hamburger Toggle BTN --> */}
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            props.setMenuOpen(!props.menuOpen);
          }}
          className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-dark-3 dark:bg-dark-2 lg:hidden"
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="du-block absolute right-0 h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-[0] duration-200 ease-in-out dark:bg-white ${
                  !props.menuOpen && "!w-full delay-300"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-150 duration-200 ease-in-out dark:bg-white ${
                  !props.menuOpen && "delay-400 !w-full"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-200 duration-200 ease-in-out dark:bg-white ${
                  !props.menuOpen && "!w-full delay-500"
                }`}
              ></span>
            </span>
            <span className="absolute right-0 h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-dark delay-300 duration-200 ease-in-out dark:bg-white ${
                  !props.menuOpen && "!h-0 !delay-[0]"
                }`}
              ></span>
              <span
                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-dark duration-200 ease-in-out dark:bg-white ${
                  !props.menuOpen && "!h-0 !delay-200"
                }`}
              ></span>
            </span>
          </span>
        </button>
        {/* <!-- Hamburger Toggle BTN --> */}
      </div>
    </header>
  );
};

export default Header;
