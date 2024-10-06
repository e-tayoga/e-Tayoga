import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import SettingBoxes from "@/components/SettingBoxes";

export const metadata: Metadata = {
  title: "Settings | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Settings page of e-Tayoga",
};

const Settings = () => {
  return (
    <FarmerLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Settings" />

        <SettingBoxes />
      </div>
    </FarmerLayout>
  );
};

export default Settings;
