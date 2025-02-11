import Image from "next/image";
import React from "react";

const AboutOurCommunity = () => {
  return (
    <section className="bg-[#343434] flex justify-center">
      <div className="grid grid-cols-12 gap-7 w-full max-w-[95%] py-10">
        {/* Image Section */}
        <div className="col-span-5 w-full h-[30rem] rounded-md overflow-hidden">
          <Image
            src="/images/aboutcomunity.png"
            width={500}
            height={500}
            alt="aboutcomunity"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="col-span-7 text-white">
          <h1 className="text-[2rem] font-nunito  font-extrabold animate__animated animate__fadeInUp">
            About Our Community
          </h1>
          <p className="text-justify pt-5 text-[1.1rem] leading-[2rem] tracking-wider animate__animated animate__backInLeft">
            Barber shops have been an integral part of communities for
            centuries. They are more than just places to get a haircut; they are
            social hubs where people gather to catch up on the latest news,
            share stories, and build relationships. Barber shops are where
            fathers take their sons for their first haircuts, where friends meet
            for a quick trim before a night out, and where older men come for
            the familiar comfort of a routine shave. Barber shops foster a sense
            of community by providing a space where people can come together and
            connect, creating a sense of belonging that extends far beyond a
            simple grooming appointment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutOurCommunity;
