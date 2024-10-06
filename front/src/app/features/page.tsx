import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Features | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Features Page for e-Tayoga",
};

// Reusable FeatureBlock component
const FeatureBlock = ({
  title,
  description,
  additionalContent,
}: {
  title: string;
  description: string;
  additionalContent?: React.ReactNode;
}) => (
  <div className="flex flex-col items-center justify-center px-7.5 pt-7.5 pb-9 bg-green-light-7 shadow-1 dark:bg-dark dark:shadow-card rounded-[10px]">
    <h4 className="text-body-2xl font-bold text-dark dark:text-white">{title}</h4>
    <p className="text-body-lg mt-7 text-dark dark:text-white">{description}</p>
    {additionalContent && <div className="mt-7">{additionalContent}</div>}
  </div>
);

const Features = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Features" />
        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="px-7.5 pb-9 pt-7.5 text-center">
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white">Key Features</h4>
            <div className="grid grid-cols-1 gap-9 mt-7">
              {/* Real-Time Dashboard */}
              <FeatureBlock
                title="Real-Time Dashboard"
                description="Stay in the loop with our easy-to-use dashboard! e-Tayoga brings NASA’s Earth observation data right to your fingertips, giving you instant insights into land temperature, water availability, and soil moisture."
                additionalContent={
                  <p className="text-body-lg text-dark dark:text-white">
                    Real-time information allows you to monitor crops and make timely irrigation decisions.
                  </p>
                }
              />

              {/* Personal Assistant - BOUCHTA */}
              <FeatureBlock
                title="Your Personal Assistant - BOUCHTA"
                description="Meet BOUCHTA, your friendly virtual companion on this farming journey!"
                additionalContent={
                  <ul className="text-body-lg text-dark dark:text-white">
                    <li>Identify the best crops for your unique conditions.</li>
                    <li>Predict how your crops will grow and what water they’ll need.</li>
                    <li>Optimize irrigation plans to save water and resources.</li>
                    <li>BOUCHTA offers voice and text support in multiple languages, ensuring accessibility.</li>
                  </ul>
                }
              />

              {/* Vibrant Community Forum */}
              <FeatureBlock
                title="Vibrant Community Forum"
                description="Join our lively community of farmers in the e-Tayoga forum!"
                additionalContent={
                  <ul className="text-body-lg text-dark dark:text-white">
                    <li>Share tips, ask questions, and swap stories with fellow users.</li>
                    <li>Fun gamified system with rewards for contributions.</li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Features;