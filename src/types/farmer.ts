export type Farmer = {
  firstName: string;
  lastName: string;
  email: string;
  personalPhoto: string;
  farmName: string;
  farmCountry: string;
  farmCity: string;
  farmAddress: string;
  farmPostalCode: string;
  farmLocation: {
    lat: number;
    lng: number;
  };
  farmPolygon: Array<{
    lat: number;
    lng: number;
  }>;
  xp: number;
};
