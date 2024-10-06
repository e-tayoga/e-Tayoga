import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Bouchta from "@/components/Bouchta";

export const metadata: Metadata = {
  title: "Bouchta | e-ⵟⴰⵢoⴳⴰ",
  description: "This is The Virtual Assistant page of e-Tayoga",
};

const bot = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Bouchta" />

        <Bouchta />
      </div>
    </DefaultLayout>
  );
};

export default bot;
