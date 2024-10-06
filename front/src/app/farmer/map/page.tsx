import BreadcrumbFarmer from "@/components/Breadcrumbs/BreadcrumbFarmer";
import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import MapWithPolygon from "@/components/Maps/MapWithPolygon";

export const metadata: Metadata = {
  title: "Map | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Map page of e-Tayoga",
};

const map = () => {
  return (
    <FarmerLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <BreadcrumbFarmer pageName="Map" />

        <MapWithPolygon />
      </div>
    </FarmerLayout>
  );
};

export default map;
