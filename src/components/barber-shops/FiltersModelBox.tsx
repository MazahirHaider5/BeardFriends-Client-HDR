"use client";

import { useState } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";
import GoogleMapContainer from "./GoogleMapContainer";
import { FaStar } from "react-icons/fa6";

interface FiltersModelBoxProps {
  setDistance: (distance: number) => void;
  setRating: (rating: number) => void;
}

const FiltersModelBox: React.FC<FiltersModelBoxProps> = ({
  setDistance,
  setRating
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localDistance, setLocalDistance] = useState(500);
  const [localRating, setLocalRating] = useState(5);
  const [position, setPosition] = useState({ lat: 37.7749, lng: -122.4194 });

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (loc) => {
          setPosition({
            lat: loc.coords.latitude,
            lng: loc.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSaveFilters = () => {
    setDistance(localDistance);
    setRating(localRating);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        type="button"
        className="border border-primary text-white px-4 h-[3.1401rem] rounded-lg flex items-center gap-2 hover:bg-primary transition duration-300"
        onClick={() => setIsOpen(true)}
      >
        Filters
        <FaSlidersH className="text-lg" />
      </button>

      {/* Modal (conditionally rendered) */}
      {isOpen && (
        <div className="fixed w-full inset-0 flex items-center justify-center bg-black z-10 opacity-100">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg w-full mx-10 ">
            {/* Modal Header */}

            <button
              className=" flex justify-end  w-full"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-5 ">
              <div className="col-span-3">
                <p className="text-lg font-bold pb-3">Location</p>
                <div className="flex justify-between px-4">
                  <div className="relative w-96 max-w-full flex items-center">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg" />
                    <input
                      type="text"
                      className="w-full bg-gray-800 text-white p-2 pl-10 rounded"
                      placeholder="Find BarberShop"
                    />
                  </div>

                  <button
                    onClick={handleCurrentLocation}
                    className="mt-2 bg-purple-600 px-4 py-2 rounded"
                  >
                    Use Current Location
                  </button>
                </div>
                <div className="container mx-auto p-4 min-h-[30rem] ">
                  <GoogleMapContainer
                    searchLocation="New York"
                    position={position}
                    setPosition={setPosition}
                  />
                </div>
              </div>

              <div className="col-span-2 gap-10 flex flex-col justify-center">
                {/* Distance Slider */}
                <div className="mb-6">
                  <p className="text-lg font-bold mb-2">Distance</p>
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>{localDistance} Kms</span>
                    <span>500 Kms</span>
                  </div>
                  <Slider
                    min={0}
                    max={500}
                    value={[localDistance]}
                    onValueChange={(val) => setLocalDistance(val[0])}
                    className="w-full"
                  />
                </div>

                {/* Ratings Slider */}
                <div>
                  <p className="text-lg font-bold mb-2">Ratings</p>
                  <div className="flex items-center gap-3 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-yellow-400 ${i < Math.round(localRating) ? "" : "opacity-50"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-400">{localRating}</span>
                  </div>
                  <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={[localRating]}
                    onValueChange={(val) => setLocalRating(val[0])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-4 mt-4 border-t border-gray-700 pt-4">
              <button
                className="bg-gray-700 px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <button
                className="bg-purple-600 px-4 py-2 rounded"
                onClick={handleSaveFilters}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersModelBox;
