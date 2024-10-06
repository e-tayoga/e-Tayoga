import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import farmerData from "@/data/farmerData";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const MapFarmLocationToEdit: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [farmer, setFarmer] = useState<any>(farmerData);
  const [farmLocation, setFarmLocation] = useState(farmer.farmLocation);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [marker, setMarker] = useState<google.maps.LatLngLiteral>();

  // Function to set the current position
  const success = (position: GeolocationPosition) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);

  // Function to handle click event on the map
  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    const location = event.latLng!;
    setMarker({ lat: location.lat(), lng: location.lng() });
  }, []);

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

  const saveNewLocation = () => {
    if (marker) {
      setFarmLocation(marker);
    }
    setFarmer({
      ...farmer,
      farmLocation: marker
    });
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={farmLocation}
        zoom={6}
        onClick={onMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {farmLocation.lat && (
          <InfoWindow
            position={farmLocation}
            options={{
              headerDisabled: true,
            }}
          >
            <div>
              <h1 className="font-medium text-primary">
                {farmer.farmName} Farm
              </h1>
            </div>
          </InfoWindow>
        )}
        {marker && <Marker position={marker} />}
      </GoogleMap>
      <div className="mt-5.5 flex justify-end gap-3">
        <button
          className="flex justify-center rounded-[7px] border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
          type="button"
          onClick={() => setMarker(undefined)}
        >
          Cancel
        </button>
        <button
          className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
          type="button"
          onClick={saveNewLocation}
        >
          Save
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MapFarmLocationToEdit;
