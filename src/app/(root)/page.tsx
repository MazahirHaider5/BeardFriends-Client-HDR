"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BarberShopCard from "../../components/barber-shops/BarberShopCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useRef } from "react";
import barbers from "@/components/barber-shops/barbers.json";

export default function Home() {
  // Explicitly define the type for sliderRef
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="pt-[3rem] flex justify-center">
        <div className="w-full max-w-[99%] sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%]">
          <h1 className="text-white text-center font-nunito font-extrabold text-[3.5rem] pb-5">
            Barbershops
          </h1>
          <Slider ref={sliderRef} {...settings} className="custom-slider">
            {barbers?.barbers?.map((item) => (
              <div key={item.shop._id} style={{ margin: "10px 80px" }}>
                <BarberShopCard item={item} />
              </div>
            ))}
          </Slider>
          <div className="flex justify-between items-center">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="text-white text-[2rem]"
            >
              <IoIosArrowDropleft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="text-white text-[2rem]"
            >
              <IoIosArrowDropright className="text-white text-[2rem] " />
            </button>
          </div>
        </div>
      </section>

      <Hero title="Beard Friends" img1="/images/LP1.png" />

      {/* About our community section */}
      <section className="flex justify-center bg-black min-h-[100vh]">
        <div className="grid grid-cols-9 gap-[1.5rem] items-center w-full max-w-[99%] sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%]">
          <div className="flex justify-start h-[33rem] w-[32rem] col-span-4">
            <Image
              width={500}
              height={500}
              src="/images/aboutcomunity.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-5 font-nunito text-white space-y-5 flex justify-center flex-col">
            <span className="text-[2.4rem] font-extrabold">
              About Our Community
            </span>
            <p className="text-justify text-[1.1rem] leading-[2.2rem]">
              Barber shops have been an integral part of communities for
              centuries. They are more than just places to get a haircut; they
              are social hubs where people gather to catch up on the latest
              news, share stories, and build relationships. Barber shops are
              where fathers take their sons for their first haircuts, where
              friends meet for a quick trim before a night out, and where older
              men come for the familiar comfort of a routine shave. Barber shops
              foster a sense of community by providing a space where people can
              come together and connect, creating a sense of belonging that
              extends far beyond a simple grooming appointment.
            </p>
            <div className="pt-10">
              <Link href="/about" className=" learnmore">
                Learn More &nbsp; &nbsp;<span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
