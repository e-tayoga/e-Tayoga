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
  farmLatitude: number;
  farmLongitude: number;
  farmPolygon: Array<{
    lat: number;
    lng: number;
  }>;
  xp: number;
};
