import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardBox from "@/components/DashboardBox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | e-ⵟⴰⵢoⴳⴰ",
  description: "Dashboard page for e-Tayoga",
};

export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <div className="mx-auto w-full max-w-[970px]">
          <Breadcrumb pageName="Dashboard" />

          <DashboardBox />
        </div>
      </DefaultLayout>
    </>
  );
}
