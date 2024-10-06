import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import BreadcrumbFarmer from "@/components/Breadcrumbs/BreadcrumbFarmer";
import CalendarBox from "@/components/CalenderBox";

export const metadata: Metadata = {
  title: "Next.js Calender Page | e-ⵟⴰⵢoⴳⴰ",
  description:
    "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
  // other metadata
};

const CalendarPage = () => {
  return (
    <FarmerLayout>
      <div className="mx-auto max-w-7xl">
        <BreadcrumbFarmer pageName="Calendar" />

        <CalendarBox />
      </div>
    </FarmerLayout>
  );
};

export default CalendarPage;
