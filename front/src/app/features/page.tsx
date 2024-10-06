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

// features_data = [
//   "Real-Time Dashboard": {
//       "description": "Stay in the loop with our easy-to-use dashboard! e-Tayoga brings NASA’s Earth observation data right to your fingertips, giving you instant insights into land temperature, water availability, and soil moisture.",
//       "benefit": "Real-time information allows you to monitor crops and make timely irrigation decisions."
//   },
//   "Your Personal Assistant - BOUCHTA": {
//       "description": "Meet BOUCHTA, your friendly virtual companion on this farming journey!",
//       "features": [
//           "Identify the best crops for your unique conditions.",
//           "Predict how your crops will grow and what water they’ll need.",
//           "Optimize irrigation plans to save water and resources."
//       ],
//       "additional_info": "BOUCHTA offers voice and text support in multiple languages, ensuring accessibility."
//   },
//   "Vibrant Community Forum": {
//       "description": "Join our lively community of farmers in the e-Tayoga forum!",
//       "features": [
//           "Share tips, ask questions, and swap stories with fellow users.",
//           "Fun gamified system with rewards for contributions."
//       ],
//       "benefit": "Collaboration becomes both helpful and enjoyable."
//   },
//   "Smart Alert System": {
//       "description": "Never miss a beat with our proactive alert system!",
//       "features": [
//           "Receive notifications on potential risks such as water shortages, crop diseases, or extreme weather."
//       ],
//       "benefit": "Alerts, powered by real-time NASA data, keep you informed to protect your crops."
//   }
// ];

const Features = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Features" />
        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          {/* features */}
          <div className="px-7.5 pb-9 pt-7.5 text-center">
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-9 mt-7 sm:grid-cols-1 lg:grid-cols-1">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-body-2xl font-bold text-dark dark:text-white">
                  Real-Time Dashboard
                </h4>
                <p className="text-body-lg mt-7 text-dark dark:text-white">
                  Stay in the loop with our easy-to-use dashboard! e-Tayoga brings NASA’s Earth observation data right to your fingertips, giving you instant insights into land temperature, water availability, and soil moisture.
                </p>
                <p className="text-body-lg mt-7 text-dark dark:text-white">
                  Real-time information allows you to monitor crops and make timely irrigation decisions.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-body-2xl font-bold text-dark dark:text-white">
                  Your Personal Assistant - BOUCHTA
                </h4>
                <p className="text-body-lg mt-7 text-dark dark:text-white">
                  Meet BOUCHTA, your friendly virtual companion on this farming journey!
                </p>
                <ul className="text-body-lg mt-7 text-dark dark:text-white">
                  <li>Identify the best crops for your unique conditions.</li>
                  <li>Predict how your crops will grow and what water they’ll need.</li>
                  <li>Optimize irrigation plans to save water and resources.</li>
                </ul>
                <p className="text-body-lg mt-7 text-dark dark:text-white">
                  BOUCHTA offers voice and text support in multiple languages, ensuring accessibility.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-body-2xl font-bold text-dark dark:text-white">
                  Vibrant Community Forum
                </h4>
                <p className="text-body-lg mt-7 text-dark dark:text-white">
                  Join our lively community of farmers in the e-Tayoga forum!
                </p>
                <ul className="text-body-lg mt-7 text-dark dark:text-white">
                  <li>Share tips, ask questions, and swap stories with fellow users.</li>
                  <li>Fun gamified system with rewards for contributions.</li>
                </ul>
                <p className="text-body-lg mt-7 text-dark dark:text-white">
                  Collaboration becomes both helpful and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Features;