"use client";
import React from "react";
import { Alert } from "@/types/alert";
import alertsData from "@/data/alertsData";
import AlertWarning from "@/components/Alerts/AlertWarning";
import AlertError from "@/components/Alerts/AlertError";

const data: Alert[] = alertsData;

function Alerts() {
  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="relative col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
        <h4 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
          All Alerts
        </h4>
        <div className="p-5.5 flex flex-col gap-5.5">
          {data.map((alert, index) => {
            if (alert.type === "danger") {
              return <AlertError key={index} alert={alert} />;
            } else {
              return <AlertWarning key={index} alert={alert} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Alerts;
