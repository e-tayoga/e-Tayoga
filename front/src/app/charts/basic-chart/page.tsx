import BasicChart from "@/components/Charts/BasicChart";
import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Next.js Basic Chart Page | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Next.js Basic Chart page for NextAdmin Dashboard Kit",
  // other metadata
};

const BasicChartPage: React.FC = () => {
  return (
    <FarmerLayout>
      <Breadcrumb pageName="Basic Chart" />

      <BasicChart />
    </FarmerLayout>
  );
};

export default BasicChartPage;
