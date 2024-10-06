import { useState } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import alertsData from "@/data/alertsData";
import AlertWarning from "../Alerts/AlertWarning";
import AlertError from "../Alerts/AlertError";

const alerts = alertsData;

const DropdownAlert = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alerting, setAlerting] = useState(true);

  return (
    <ClickOutside
      onClick={() => setDropdownOpen(false)}
      className="relative hidden sm:block"
    >
      <li>
        <Link
          onClick={() => {
            setAlerting(false);
            setDropdownOpen(!dropdownOpen);
          }}
          href="#"
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-stroke bg-gray-2 text-dark hover:text-primary dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:hover:text-white"
        >
          <span className="relative">
            <svg
              className="fill-current duration-300 ease-in-out"
              width="20"
              height="20"
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
                  d="m606.56 347.1v-83.129c0-17.633-11.082-30.23-29.223-32.242-3.0234-0.50391-5.543-0.50391-8.5664-1.0078-11.586-1.5117-22.168-2.5195-32.242-5.0391-37.785-8.5664-74.059-25.191-114.36-53.402-6.043-5.0391-12.594-9.0703-21.66-9.0703-9.5742 0-15.617 4.5352-22.168 8.5664-53.91 37.281-102.27 55.922-152.66 58.945-14.609 0.50391-32.242 7.0547-32.242 34.258v49.879 100.76c0 13.098 1.5117 27.207 5.0391 42.32 7.5586 33.25 24.688 63.48 53.402 92.195 35.266 35.77 79.602 63.48 136.03 84.641 0.50391 0 0.50391 0 1.0078 0.50391 3.5273 1.0078 7.5586 2.0156 11.082 2.0156 5.0391 0 10.078-1.0078 14.609-3.0234 4.5352-2.0156 9.0703-4.0312 14.105-6.0469 11.586-5.0391 24.184-10.578 36.273-16.625 44.84-23.68 79.098-51.891 104.79-86.656 22.672-29.727 34.762-61.465 36.273-94.715 1.0078-22.168 1.0078-44.84 1.0078-67.008-0.5-5.5391-0.5-10.578-0.5-16.121zm-45.844 81.113c-1.0078 24.184-10.078 46.855-27.207 69.527-21.664 29.223-50.883 53.402-89.176 73.555-11.082 5.543-22.672 10.578-33.754 15.113-3.5273 1.5117-7.0547 3.0234-10.578 4.5352-47.863-18.641-85.648-42.32-115.37-72.043-22.672-23.176-35.77-45.848-41.816-70.535-3.0273-12.594-4.0312-23.176-4.0312-33.25-0.50391-33.25 0-67.512 0-100.26v-39.801c53.906-5.0391 105.8-25.695 161.72-63.48 43.832 30.23 84.137 48.367 126.46 57.938 11.586 2.5195 23.68 4.0312 34.762 5.543v72.043 16.625c0 21.16 0 42.824-1.0078 64.488zm-135.53 65.496c0.50391 13.602-11.586 25.191-25.191 25.191-14.105 0-25.695-11.586-25.695-25.695 0-14.105 11.586-25.695 25.695-25.695s26.199 11.59 25.191 26.199zm-1.5117-191.95c1.5117 4.0312 2.5195 8.0625 2.5195 12.594-0.50391 12.594-1.5117 25.695-2.5195 38.289-1.0078 19.648-2.5195 39.801-3.5273 59.449-0.50391 6.5508-0.50391 12.09-0.50391 18.641-0.50391 10.578-8.5664 18.641-19.145 18.641s-18.641-7.5586-19.145-18.137c-1.5117-30.73-3.5273-61.465-5.0391-92.195-0.50391-8.0625-1.0078-16.121-1.5117-24.688 0-13.602 7.5586-24.688 19.648-28.215 11.59-2.0117 24.188 4.0352 29.223 15.621z"
                  fill=""
                />
              </g>
            </svg>

            <span
              className={`absolute -top-0.5 right-0 z-1 h-2.5 w-2.5 rounded-full border-2 border-gray-2 bg-red dark:border-dark-3 ${
                !alerting ? "hidden" : "inline"
              }`}
            >
              <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75"></span>
            </span>
          </span>
        </Link>

        {dropdownOpen && (
          <div
            className={`absolute -right-27 mt-7.5 flex h-[550px] w-75 flex-col rounded-xl border-[0.5px] border-stroke bg-white px-5.5 pb-5.5 pt-5 shadow-default dark:border-dark-3 dark:bg-gray-dark sm:right-0 sm:w-[364px]`}
          >
            <div className="mb-5 flex items-center justify-between">
              <h5 className="text-lg font-medium text-dark dark:text-white">
                Alerts
              </h5>
              <span className="rounded-md bg-primary px-2 py-0.5 text-body-xs font-medium text-white">
                {alerts.length} New
              </span>
            </div>

            <ul className="no-scrollbar mb-5 flex h-auto flex-col gap-1 overflow-y-auto">
              {alerts.map((alert, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center gap-4 rounded-[10px] p-2.5 hover:bg-gray-2 dark:hover:bg-dark-3"
                    href="#"
                  >
                    {alert.type === "danger" ? (
                      <AlertError key={index} alert={alert} />
                    ) : (
                      <AlertWarning key={index} alert={alert} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              className="flex items-center justify-center rounded-[7px] border border-primary p-2.5 font-medium text-primary hover:bg-blue-light-5 dark:border-dark-4 dark:text-dark-6 dark:hover:border-primary dark:hover:bg-blue-light-3 dark:hover:text-primary"
              href="#"
            >
              See all alerts
            </Link>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdownAlert;
