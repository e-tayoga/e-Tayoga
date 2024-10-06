"use client";
import React from "react";
import { Stat } from "@/types/stat";
import statsData from "@/data/dashboardData";
import FarmChart from "../Charts/FarmChart";

// Helper function to group by category and title
const groupByCategoryAndTitle = (data: Stat[]) => {
  const grouped: { [key: string]: Stat[] } = {};

  data.forEach((stat) => {
    const key = `${stat.category}-${stat.title}`; // Unique key based on category and title

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(stat);
  });

  return grouped;
};

const DashboardBox: React.FC = () => {
  const groupedData = groupByCategoryAndTitle(statsData);
  const otherData = [
    {
      title: "Temperature (2m above ground)",
      category: "Climate Conditions",
      color: "#22AD5C",
      value: "292.57 K (19.42°C)",
    },
    {
      title: "Total Precipitation",
      category: "Climate Conditions",
      color: "#2CD673",
      value: "0.37 mm",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groupedData).map(([key, group]) => (
          <FarmChart key={key} data={group} />
        ))}
        {/* {otherData.map((stat, index) => (
          <div key={index} className="rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
            <div className="mb-9 justify-between gap-4 sm:flex">
              <div>
                <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
                  {stat.title}
                </h4>
              </div>
            </div>

            <div className="mb-8">
            <div className="mx-auto flex justify-center">
              <div className="text-body-2xlg font-bold text-dark dark:text-white">
                {stat.value}
              </div>
            </div>
          </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default DashboardBox;
