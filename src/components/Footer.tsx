"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="bg-[#242424] text-white pt-12  flex flex-col justify-center items-center">
        <div className="grid grid-cols-11 gap-[4rem] w-full max-w-[99%] sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%]">
          <div className="col-span-3 space-y-4">
            <Image
              src="/images/whitelogo.png"
              alt="logo"
              width={66}
              height={66}
              className="ms-12"
            />
            <h5 className="text-[1.6rem] font-bold tracking-wider  ">
              Beard Friends
            </h5>
            <p className="text-sm pe-[3rem] ">
              The barber online community offered by Beard Friends is a great
              way for individuals to connect and share their passion for proper
              beard maintenance. The community allows users to find nearby
              barber shops.
            </p>
          </div>

          <div className="col-span-4 grid grid-cols-2 ">
            <div className="space-y-4">
              <h5 className="text-xl font-bold">Pages</h5>
              <ul className="space-y-2">
                {[
                  "about",
                  "beardcontest",
                  "barbershop",
                  "onlineshop",
                  "contact"
                ].map((page) => (
                  <li key={page}>
                    <Link
                      href={`/${page}`}
                      className="text-purple-400 hover:text-white"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-xl font-bold">Legal</h5>
              <ul className="space-y-2">
                {["TermsAndConditions", "PrivacyPolicy", "Imprint"].map(
                  (page) => (
                    <li key={page}>
                      <span
                        className="text-purple-400 cursor-pointer hover:text-white"
                        onClick={() => handleNavigation(`/${page}`)}
                      >
                        {page.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className=" col-span-4 space-y-4">
            <h5 className="text-xl font-bold">Subscribe to our Newsletter</h5>
            <form className="space-y-3">
              <input
                type="text"
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
                placeholder="Email"
              />
              <p className="text-sm">
                By subscribing, you accept our{" "}
                <span
                  className="text-purple-400 cursor-pointer hover:text-white"
                  onClick={() => handleNavigation("/PrivacyPolicy")}
                >
                  Privacy Policy
                </span>
                .
              </p>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between font-nunito text-sm  pt-5 w-full max-w-[99%] sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%]">
          <p>
            By subscribing to our newsletter, your data will be processed
            according to our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>All rights reserved 2023 © Bartfreunde</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
