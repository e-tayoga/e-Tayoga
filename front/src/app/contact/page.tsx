import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Contact | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Contact Page for e-Tayoga",
};

const Contact = () => {
  const teamMembers = [
    {
      name: "Noura ED DAHBY",
      title: "Team Leader",
      linkedin: "https://www.linkedin.com/in/noura-ed-dahby-47998b222/",
      image: "/images/team/team-1.jpeg",
    },
    {
      name: "Nouhaila ATABET",
      title: "Data Analyst",
      linkedin: "https://www.linkedin.com/in/nouhaila-atabet/",
      image: "/images/team/team-2.png",
    },
    {
      name: "H. Ba-Mohammed",
      title: "AI Engineer",
      linkedin: "https://www.linkedin.com/in/hambam/",
      image: "/images/team/team-3.jpeg",
    },
    {
      name: "Ahmed Idrissi ",
      title: "Software Engineer",
      linkedin: "https://www.linkedin.com/ahmedidrissi",
      image: "/images/team/team-4.png",
    },
    {
      name: "Maroua Chattat",
      title: "Topographer",
      linkedin: "https://www.linkedin.com/in/maroua-chattat-566039316/",
      image: "/images/team/team-5.jpg",
    }
  ];
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb pageName="Contact" />
        <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          {/* team members (image, full name, title, linkedin) */}
          <div className="px-7.5 pt-7.5 pb-9 text-center">
            <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
              Our Team
            </h4>
            <div className="grid grid-cols-1 gap-9 mt-7 sm:grid-cols-2 lg:grid-cols-5">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h5 className="text-body-2xl font-bold text-dark dark:text-white">
                    {member.name}
                  </h5>
                  <p className="text-body-2 text-dark dark:text-white">
                    {member.title}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-primary-light"
                  >
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;