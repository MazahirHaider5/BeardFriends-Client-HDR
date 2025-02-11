"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GoogleMapContainerProps {
  searchLocation: string;
  position: { lat: number; lng: number };
  setPosition: (position: { lat: number; lng: number }) => void;
}

const GoogleMapContainer: React.FC<GoogleMapContainerProps> = ({
  searchLocation,
  position,
  setPosition
}) => {
  const [isGoogleApiLoaded, setIsGoogleApiLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.google && !isGoogleApiLoaded) {
      setIsGoogleApiLoaded(true);
    }
  }, [isGoogleApiLoaded]);

  useEffect(() => {
    if (
      searchLocation &&
      typeof window !== "undefined" &&
      window.google &&
      !isGoogleApiLoaded
    ) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: searchLocation }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          setPosition({ lat: lat(), lng: lng() });
        } else {
          console.error("Geocoding error:", status);
        }
      });
    }
  }, [searchLocation, setPosition, isGoogleApiLoaded]);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };

  const redMarkerIcon =
    typeof window !== "undefined" && window.google
      ? {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "red",
          fillOpacity: 1,
          strokeColor: "white",
          strokeWeight: 2,
          scale: 10
        }
      : undefined;

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      onLoad={() => setIsGoogleApiLoaded(true)}
    >
      <GoogleMap
        mapContainerClassName="w-full h-[450px]"
        center={position}
        zoom={10}
        onClick={handleMapClick}
      >
        {redMarkerIcon && <Marker position={position} icon={redMarkerIcon} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapContainer;
