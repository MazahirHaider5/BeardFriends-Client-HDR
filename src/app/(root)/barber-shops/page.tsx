"use client";
import Hero from "@/components/Hero";
import React, { useState } from "react";
import barbers from "@/components/barber-shops/barbers.json";
import BarberShopCard from "../../../components/barber-shops/BarberShopCard";
import { FaSearch } from "react-icons/fa";
import FiltersModelBox from "../../../components/barber-shops/FiltersModelBox";

const BarberShop = () => {
  const [visibleContestants, setVisibleContestants] = useState(12);
  const contestantsPerPage = 12;
  const [searchQuery, setSearchQuery] = useState("");

  const [distance, setDistance] = useState(500);
  const [rating, setRating] = useState(5);

  const handleViewMore = () => {
    setVisibleContestants((prevVisible) => prevVisible + contestantsPerPage);
  };
  const filteredBarbers = barbers.barbers.filter(
    (barber) =>
      barber.shop.shopName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      barber.rating <= rating &&
      barber.distance <= distance
  );

  console.log(filteredBarbers);
  const hasMoreContestants = visibleContestants < barbers.barbers.length;
  return (
    <>
      <Hero
        title="Barber Shops"
        img1="/images/LP4.png"
        paragraph="Traditional barbershops with experienced barbers offering straight razor shaves, beard trims, and classic haircuts are among the most popular destinations for men's grooming. These establishments often exude a vintage or retro atmosphere and provide excellent service, meticulous attention to detail, and a personalized experience. Many have expanded into modern grooming options. Find your trusted barber."
      />

      <div className="bg-[#1c1c1e]">
        <div className="w-full pt-6 px-8">
          {/* Most Visited Barber Shop Start */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="text-4xl tracking-wider font-bold font-nunito">
                Most Visited
              </h2>
              <p className="text-2xl font-nunito tracking-wider text-justify  pt-8">
                Traditional barber shops with skilled barbers offering straight
                razor shaves, beard trimming, and classic haircuts are among the
                most popular destinations for men&apos;s grooming. These shops
                often have a vintage or retro ambiance and provide excellent
                service, attention to detail, and a personalized experience.
                Many have expanded to include modern grooming options.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {barbers?.barbers?.slice(0, 2).map((item) => (
                <div key={item.shop._id}>
                  <BarberShopCard item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {barbers?.barbers?.slice(2, 6).map((item) => (
              <div key={item.shop._id}>
                <BarberShopCard item={item} />
              </div>
            ))}
          </div>
          {/* Most Visited Barber Shop End */}

          {/* All Barber Shop Start */}
          <div className="pt-20">
            <h1 className="font-nunito text-4xl font-extrabold text-center">
              Discover Popular Barbershops
            </h1>
            {/* -----filters----- */}
            <div className="flex items-end justify-end w-full gap-3 pt-10">
              <div className="flex items-center gap-4 w-[494px] max-w-full h-[3.1401rem] pl-8border border-[#ba5eef] rounded-md ">
                <span>
                  <FaSearch className="text-white text-lg" />
                </span>
                <input
                  type="text"
                  className="w-[300px] max-w-[70%] outline-none border-nonetext-white/40"
                  placeholder="Find Barbershop"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <FiltersModelBox
                setDistance={setDistance}
                setRating={setRating}
              />
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4 pb-8
          "
            >
              {filteredBarbers
                ?.slice(0, visibleContestants)
                .map((item) => (
                  <BarberShopCard key={item.shop._id} item={item} />
                ))}
            </div>
            {hasMoreContestants && (
              <div className="text-center pt-8 pb-3">
                <button
                  className="bg-primary text-white py-2 px-6 rounded-md hover:opacity-90 transition duration-300"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarberShop;
