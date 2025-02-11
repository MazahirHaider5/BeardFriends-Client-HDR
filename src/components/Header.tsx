"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { GB as Uk, DE as Ger } from "country-flag-icons/react/3x2";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [language, setLanguage] = useState("uk");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isActive = (path: string) => pathname === path;
  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-[#1c1c1e]">
      <div className="flex justify-between items-center p-3 lg:p-6 mx-auto">
        {/* Logo */}
        <div className="w-3/5">
          <Link href="/">
            <Image
              src="/images/whitelogo.png"
              alt="logo"
              width={60}
              height={40}
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-full justify-center gap-8 text-xl font-extrabold">
          {[
            "About",
            "Beard Contest",
            "Barber Shops",
            "Online Shop",
            "Contact"
          ].map((text) => {
            const path = `/${text.toLowerCase().replace(" ", "-")}`;
            return (
              <Link
                key={text}
                href={path}
                className={`${isActive(path) ? " text-purple-500 underline underline-offset-4" : "hover:text-purple-400"}`}
              >
                {text}
              </Link>
            );
          })}
        </div>
        {/* Right Section (Language & Download Button) */}
        <div className="hidden w-3/5 lg:flex justify-end items-center space-x-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {language === "uk" ? (
                <Uk className="size-6" />
              ) : (
                <Ger className="size-6" />
              )}

              <span className="">
                {language === "uk" ? "Eng (UK)" : "Ger (DE)"} ▼
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#2c2c2e] rounded-md shadow-lg">
                <button
                  onClick={() => toggleLanguage("uk")}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-[#3c3c3e] w-full text-left"
                >
                  <Uk className="w-5 h-5" />
                  <span>Eng (UK)</span>
                </button>
                <button
                  onClick={() => toggleLanguage("de")}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-[#3c3c3e] w-full text-left"
                >
                  <Ger className="w-5 h-5" />
                  <span>Ger (DE)</span>
                </button>
              </div>
            )}
          </div>
          {/* Download Button */}
          <button className="bg-[#b455fc] hover:bg-[#9d42e6] text-lg font-bold px-3 py-2 rounded-md transition">
            Download App
          </button>
          <button className="hover:bg-gray-500 text-lg font-bold px-3 py-2 rounded-md w-fit">
            Sign-In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none text-3xl"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 w-64text-white p-6 space-y-6 transform transition-transform duration-300 lg:hidden`}
      >
        {[
          "About",
          "Beard Contest",
          "Barber Shops",
          "Online Shop",
          "Contact"
        ].map((text) => {
          const path = `/${text.toLowerCase().replace(" ", "-")}`;
          return (
            <Link
              key={text}
              href={path}
              className={`${isActive(path) ? "text-primary underline underline-offset-4" : "hover:text-primary"} block`}
            >
              {text}
            </Link>
          );
        })}

        {/* Language Selector */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {language === "uk" ? (
              <Uk className="w-5 h-5" />
            ) : (
              <Ger className="w-5 h-5" />
            )}

            <span className="text-white text-sm">
              {language === "uk" ? "Eng (UK)" : "Ger (DE)"} ▼
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-[#2c2c2e] rounded-md shadow-lg">
              <button
                onClick={() => toggleLanguage("uk")}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-[#3c3c3e] w-full text-left"
              >
                <Uk className="w-5 h-5" />
                <span>Eng (UK)</span>
              </button>

              <button
                onClick={() => toggleLanguage("de")}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-[#3c3c3e] w-full text-left"
              >
                <Ger className="w-5 h-5" />
                <span>Ger (DE)</span>
              </button>
            </div>
          )}
        </div>

        {/* Download Button */}
        <div>
          <button className="w-full bg-[#b455fc] hover:bg-[#9d42e6] text-white text-lg font-bold px-5 py-2 rounded-md transition">
            Download App
          </button>
          <button className="w-full bg-[#b455fc] hover:bg-[#9d42e6] text-white text-lg font-bold px-5 py-2 rounded-md transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
