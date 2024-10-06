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
 
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;