import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import farmerData from "@/data/farmerData";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const farmer = farmerData;
const farmLocation = farmer.farmLocation;

const MapFarmLocation: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Function to set the map type to satellite when the map loads
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    map.setCenter(farmLocation);
    map.setZoom(18);
  }, []);

  // Function to remove the map when the component unmounts
  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={farmLocation}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <InfoWindow
          position={farmLocation}
          options={{
            headerDisabled: true,
          }}
        >
          <div>
            <h1 className="font-medium text-primary">{farmer.farmName} Farm</h1>
          </div>
        </InfoWindow>
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MapFarmLocation;
