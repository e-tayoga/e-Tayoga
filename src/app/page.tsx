import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Home | e-ⵟⴰⵢoⴳⴰ",
  description: "Home page for e-Tayoga",
};
//cover photo: cover-01.jpg
export default function Home() {
  return (
    <>
      <DefaultLayout>
        <img
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
          src="/images/cover/cover-01.jpg"
          alt="Cover photo"
        />
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
          <div className="flex flex-col items-center gap-4 mt-5.5 p-4 max-w-[700px]">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
              Welcome to e-Tayoga
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Your one-stop solution for all your farming needs.
              Join us today and start your journey to success.
            </p>
            <Link
              href="/auth/signin"
              className="mt-3 rounded-lg bg-green-500 px-4 py-2 text-xl font-medium text-white hover:bg-green dark:bg-green-600 dark:hover:bg-green-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
