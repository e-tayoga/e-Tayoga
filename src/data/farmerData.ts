import { Farmer } from "@/types/farmer";

const farmerData: Farmer = {
  firstName: "Ahmed",
  lastName: "Idrissi",
  email: "iahmed@etayoga.ma",
  personalPhoto: "/images/user/user-03.png",
  farmName: "Tayoga",
  farmCountry: "Morocco",
  farmCity: "Rabat",
  farmAddress: "Avenue Mohamed Ben Abdellah, Av. Regragui",
  farmPostalCode: "10000",
  farmLocation: {
    lat: 33.98501297634983, 
    lng: -6.867684753415513
  },
  farmPolygon: [
    {
      lat: 33.98544225502887,
      lng: -6.867514881937988,
    },
    {
      lat: 33.984861281077556,
      lng: -6.868053513472243,
    },
    {
      lat: 33.98462889024932,
      lng: -6.867672530229849,
    },
    {
      lat: 33.985180817191335,
      lng: -6.867129519765096,
    },
  ],
  xp: 500,
};

export default farmerData;
