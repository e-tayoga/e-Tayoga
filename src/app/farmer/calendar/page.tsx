import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
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
        <Breadcrumb pageName="Calendar" />

        <CalendarBox />
      </div>
    </FarmerLayout>
  );
};

export default CalendarPage;
