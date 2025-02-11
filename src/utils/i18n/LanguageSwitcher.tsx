"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLanguage } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "fi fi-gb" },
  { code: "gr", name: "German", flag: "fi fi-gr" }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="inline-flex w-full items-center justify-center gap-2 border-b border-gray-600 px-4 py-2 font-medium shadow-sm"
      >
        <FaLanguage size={44} aria-hidden="true" />
        {isOpen ? (
          <IoIosArrowUp size={24} aria-hidden="true" />
        ) : (
          <IoIosArrowDown size={24} aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          className="h-full w-40 border-r border-gray-600"
          role="menu"
          aria-label="Language menu"
        >
          {languages.map(({ code, name, flag }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="flex w-full gap-3 items-center justify-center border-b border-gray-600 p-4 hover:bg-teal-500 hover:bg-opacity-10"
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && changeLanguage(code)}
            >
              {name}
              <span className={`${flag} size-6`} aria-hidden="true"></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
