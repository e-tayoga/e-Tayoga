import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "About | e-ⵟⴰⵢoⴳⴰ",
  description: "This is About Page for e-Tayoga",
};

const About = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="About" />
        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          {/* about the project */}
          <div className="px-7.5 pb-9 pt-7.5 text-center">
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
              About the Project
            </h4>
            <p className="text-body-lg mt-7 text-dark dark:text-white">
              Welcome to the future of farming with e-Tayoga! Imagine real-time
              NASA satellite data right in your hands. <br />
              Meet <span className="font-bold">Bouchta</span>, your virtual assistant, guiding you in crop choices
              and irrigation—no literacy needed! Join a thriving community that
              shares insights and stays ahead of water shortages with our alert
              system. Plus, earn XP points for rewards as you progress. Powered
              by GPS and NASA’s free data, e-Tayoga makes farming smarter, more
              affordable, and more connected. Let’s grow together!{" "}
            </p>
            {/* logo image logo.svg*/}
            <div className="mt-9 flex justify-center">
              <Image alt="Logo" src="/images/logo/logo.svg" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
