import BreadcrumbFarmer from "@/components/Breadcrumbs/BreadcrumbFarmer";
import { Metadata } from "next";
import FarmerLayout from "@/components/Layouts/FarmerLayout";
import ProfileBox from "@/components/ProfileBox";

export const metadata: Metadata = {
  title: "Profile | e-ⵟⴰⵢoⴳⴰ",
  description: "This is Profile page of e-Tayoga",
};

const Profile = () => {
  return (
    <FarmerLayout>
      <div className="mx-auto w-full max-w-[970px]">
        <BreadcrumbFarmer pageName="Profile" />

        <ProfileBox />
      </div>
    </FarmerLayout>
  );
};

export default Profile;
