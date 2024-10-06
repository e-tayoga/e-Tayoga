import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Home | e-ⵟⴰⵢoⴳⴰ",
  description: "Home page for e-Tayoga",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <section id="home" className="home">
          <div className="mx-auto mt-22 rounded bg-white p-12 lg:w-1/2">
            <div className="w-full">
              <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white">
                Welcome to e-Tayoga
              </h1>
              <p className="text-center text-gray-600 dark:text-gray-400">
                The best place to manage your farm
              </p>
              <Link
                href="/auth/signin"
                className="mt-6 block w-full rounded-md bg-green-light px-4 py-2 text-center font-medium text-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}
