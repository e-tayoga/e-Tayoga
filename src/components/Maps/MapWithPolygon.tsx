import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
  InfoWindow,
} from "@react-google-maps/api";
import farmerData from "@/data/farmerData";
import { Farmer } from "@/types/farmer";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 34.27568,
  lng: -6.603398, // Morocco
};

const MapWithPolygon: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  const [farmer, setFarmer] = useState<Farmer>(farmerData);
  const [farmLocation, setFarmLocation] = useState({
    lat: farmer.farmLatitude,
    lng: farmer.farmLongitude,
  });
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);
  const [polygonCoords, setPolygonCoords] = useState<
    google.maps.LatLngLiteral[]
  >([]);

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

    // Add new marker coordinates
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      { lat: location.lat(), lng: location.lng() },
    ]);

    // Add coordinates for the polygon and reset if more than 4 clicks
    setPolygonCoords((prevCoords) => {
      let newCoords = [
        ...prevCoords,
        { lat: location.lat(), lng: location.lng() },
      ];
      if (newCoords.length === 4) {
        return newCoords; // Stop when 4 points are reached
      } else if (newCoords.length > 4) {
        resetMap();
        return [];
      }
      return newCoords;
    });
  }, []);

  // Function to reset the map
  const resetMap = () => {
    setMarkers([]);
    setPolygonCoords([]);
    if (map) {
      map.setCenter(currentPosition);
    }
  };

  // Function to get current location and zoom the map
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
        map.setZoom(18);
        new google.maps.Marker({
          position: pos,
          map,
          title: "Your Location",
        });
      });
    }
  }, []);

  // Function to remove the map when the component unmounts
  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const saveNewPolygon = () => {
    // TODO: save the new coordinnates of the farm polygon
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
        {/* Display current position */}
        {currentPosition.lat && (
          <InfoWindow
            position={currentPosition}
            options={{
              headerDisabled: true,
            }}
          >
            <div>
              <h1 className="font-medium text-primary">You are here</h1>
            </div>
          </InfoWindow>
        )}

        {/* Display farm location */}
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

        {/* Display markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}

        {/* Draw polygon if we have 4 points */}
        {polygonCoords.length === 4 && (
          <Polygon
            paths={polygonCoords}
            options={{
              fillColor: "red",
              fillOpacity: 0.4,
              strokeColor: "red",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
        )}
      </GoogleMap>
      <div className="mt-5.5 flex justify-end gap-3">
        <button
          className="flex justify-center rounded-[7px] border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
          type="button"
          onClick={resetMap}
        >
          Cancel
        </button>
        <button
          className="flex justify-center rounded-[7px] bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
          type="button"
          onClick={saveNewPolygon}
        >
          Save
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MapWithPolygon;
