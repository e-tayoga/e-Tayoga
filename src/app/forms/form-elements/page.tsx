import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

const FormElementsPage = () => {
  return (
    <FarmerLayout>
      <FormElements />
    </FarmerLayout>
  );
};

export default FormElementsPage;
