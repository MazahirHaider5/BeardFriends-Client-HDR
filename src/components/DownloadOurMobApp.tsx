import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DownloadOurMobAppProps {
  bg: string;
}

const DownloadOurMobApp: React.FC<DownloadOurMobAppProps> = ({ bg }) => {
  return (
    <section className={`${bg} flex justify-center`}>
      <div className="grid grid-cols-6 gap-14 w-full px-8">
        <div className="col-span-4 flex flex-col gap-7 justify-center">
          <h1 className="text-white animate__animated animate__fadeInUp text-4xl font-extrabold font-nunito pt-5">
            Download Our Mobile Application
          </h1>
          <p className="text-justify text-2xl tracking-wide font-medium animate__animated animate__backInRight">
            Your voice matters! Register on our app to vote for your favorite
            candidate and join a community that values your opinion. Don&apos;t
            miss this chance to make an impact—download the app and register
            now!
          </p>
          <div className="flex gap-5">
            <Link
              target="__blank"
              href="https://play.google.com/store/apps/details?id=com.example"
              passHref
            >
              <Image
                src="/images/googlestore.png"
                width={300}
                height={300}
                alt="Google Play Store"
              />
            </Link>
            <Link
              target="__blank"
              href="https://apps.apple.com/app/id123456789"
              passHref
            >
              <Image
                src="/images/appstore.png"
                width={300}
                height={300}
                alt="Apple App Store"
              />
            </Link>
          </div>
        </div>
        <div className="relative col-span-2 w-full h-[40rem]">
          <Image
            src="/images/mobiles.png"
            fill={true}
            alt="Mobile App Preview"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadOurMobApp;
