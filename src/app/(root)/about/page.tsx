import AboutOurCommunity from "@/components/AboutOurCommunity";
import ContactUs from "@/components/ContactUs";
import DownloadOurMobApp from "@/components/DownloadOurMobApp";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

const About = () => {
  const benefits = [
    {
      img: "/images/benifits1.png",
      text: "Users can find nearby barber shops and connect with other like-minded individuals who are passionate about proper beard maintenance."
    },
    {
      img: "/images/benifits2.png",
      text: "The community provides a wealth of resources, including tips, advice, and tutorials from experienced professionals and fellow enthusiasts."
    },
    {
      img: "/images/benifits3.png",
      text: "Stay up-to-date with the latest trends and techniques, and take your beard grooming to the next level with expert guidance."
    }
  ];

  return (
    <>
      <Hero
        title="About"
        img1="/images/LP2.png"
        paragraph="The barber online community offered by Beard Friends is a great way for individuals to connect and share their passion for proper beard maintenance. The community allows users to find nearby barber shops, participate in beard contests, and shop for grooming items, all while connecting with other like-minded individuals. Whether you're a seasoned beard enthusiast or just starting out, the community provides a platform to learn, share, and grow together. With a supportive and knowledgeable community at your fingertips, maintaining a healthy and stylish beard has never been easier."
      />

      {/* about our community  */}
      <AboutOurCommunity />

      {/* Benefits */}
      <section className="flex justify-center items-center bg-black h-full">
        <div className="h-full w-full max-w-[95%] py-8">
          <div className="flex flex-col items-center text-center mb-6">
            <h1 className="text-white text-[2rem] font-extrabold font-nunito">
              Benefits
            </h1>
            <p className="font-nunito text-white pt-3">
              There are several benefits to joining the barber online community
              offered by Beard Friends.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1C1C1E] h-[20rem] p-4 rounded-md flex flex-col items-center"
              >
                <div className="h-[13rem] w-full mb-4">
                  <Image
                    src={benefit.img}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                    alt={`benefit-${index}`}
                  />
                </div>
                <p className="font-nunito font-bold text-white text-justify">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white font-nunito text-center leading-[1.5rem] mt-8 px-[2rem]">
            Additionally, the community provides a wealth of resources and
            knowledge, including tips, advice, and tutorials from experienced
            professionals and fellow enthusiasts. Joining this community can
            help individuals stay up-to-date with the latest trends and
            techniques, connect with others who share their interests, and take
            their beard grooming to the next level.
          </p>
        </div>
      </section>

      {/* Download Our Mob App */}
      <DownloadOurMobApp bg="bg-[#343434]" />

      {/* Contact Us */}

      <ContactUs bg="#0E0E0F" />
    </>
  );
};

export default About;
