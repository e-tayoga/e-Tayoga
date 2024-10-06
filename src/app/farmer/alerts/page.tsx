import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Alerts from "@/components/Alerts";

export const metadata: Metadata = {
  title: "Alerts | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Alerts page of e-Tayoga",
};

const alerts = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Alerts" />

        <Alerts />
      </div>
    </DefaultLayout>
  );
};

export default alerts;
