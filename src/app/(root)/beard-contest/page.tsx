"use client";
import ContactUs from "@/components/ContactUs";
import ContestentCard from "@/components/ContestantCard";
import ContestCounter from "@/components/ContestCounter";
import DownloadOurMobApp from "@/components/DownloadOurMobApp";
import Hero from "@/components/Hero";
import React, { useState } from "react";

// Dummy contestants data
const dummyContestants = [
  {
    _id: "1",
    picture: "/images/contestant.png",
    votes: 15,
    voters: ["user1", "user2"]
  },
  {
    _id: "2",
    picture: "/images/contestant.png",
    votes: 30,
    voters: ["user3", "user4"]
  },
  {
    _id: "3",
    picture: "/images/contestant.png",
    votes: 8,
    voters: []
  },
  {
    _id: "4",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "5",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "6",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "7",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "8",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "9",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "10",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "11",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "12",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "13",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  },
  {
    _id: "14",
    picture: "/images/contestant.png",
    votes: 20,
    voters: ["user5"]
  }
];

const BeardContest = () => {
  const [visibleContestants, setVisibleContestants] = useState(12); // Initially show 10 contestants
  const contestantsPerPage = 12;

  const handleViewMore = () => {
    setVisibleContestants((prevVisible) => prevVisible + contestantsPerPage);
  };

  const hasMoreContestants = visibleContestants < dummyContestants.length;
  return (
    <>
      <main className="bg-[#1C1C1E]">
        <Hero
          title="Beard Contest"
          img1="/images/LP3.png"
          paragraph="Hello to all the beard enthusiasts out there! We're thrilled to inform you about our current monthly online beard competition. Whether you're nurturing a full beard, an elegant mustache, or a unique facial hair creation – this online competition is just the thing for you! We warmly invite everyone who has invested time and dedication into growing and grooming their beards to showcase their impressive and stylish creations to like-minded individuals. At the end of each competition, a small surprise awaits the winner!"
        />

        {/* Top Contestants */}
        <section className="bg-[#1C1C1E] text-white flex justify-center">
          <div className=" w-full px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <h2 className="text-[3rem] tracking-wider font-semibold font-nunito">
                  Top Contestant
                </h2>
                <p className="text-lg font-nunito text-justify text-gray-300 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Odio vitae lectus arcu
                  aliquam nibh pretium. Diam eu proin viverra dignissim. Ut
                  purus elit iaculis quis congue faucibus sit vulputate. Donec
                  aliquet augue ut lectus. Diam nulla dignissim nunc risus vitae
                  enim ac sit nunc.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {dummyContestants.slice(0, 2).map((item) => (
                  <ContestentCard key={item._id} item={item} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {dummyContestants.slice(2, 6).map((item) => (
                <ContestentCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <div className="py-[5rem]">
          <p className=" w-full max-w-[99%] sm:max-w-[98%] md:max-w-[96%] lg:max-w-[94%] mx-auto border border-[#B6B6B7]"></p>
        </div>
        <section className="w-full px-8">
          <ContestCounter />
          {/* All Contestants */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-[2rem] pb-8
          "
          >
            {dummyContestants.slice(0, visibleContestants).map((item) => (
              <ContestentCard key={item._id} item={item} />
            ))}
          </div>
          {hasMoreContestants && (
            <div className="text-center pt-8 ">
              <button
                className="bg-primary text-white py-2 px-6 rounded-md hover:opacity-90 transition duration-300"
                onClick={handleViewMore}
              >
                View More
              </button>
            </div>
          )}
        </section>
      </main>
      <DownloadOurMobApp bg="bg-[#0E0E0F]" />
      <ContactUs bg="bg-[#1C1C1E]" />
    </>
  );
};

export default BeardContest;
