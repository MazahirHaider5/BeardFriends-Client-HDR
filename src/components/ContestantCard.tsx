"use client";

import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa6";
interface ContestCardProps {
  item: {
    _id: string;
    picture?: string;
    votes: number;
    voters: string[];
  };
}

const ContestCard: React.FC<ContestCardProps> = ({ item }) => {
  return (
    <div className="bg-[#2C2C2E] shadow-lg rounded-xl p-1 text-white relative overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        <Image
          src={item?.picture || "/images/default.png"}
          alt="contest card"
          fill
          className="object-cover"
        />
      </div>

      {/* Votes and Heart Display */}
      <div className="mt-4 flex items-center justify-center ">
        <p className="text-lg font-semibold font-nunito">{item.votes} Votes</p>
      </div>
      <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#2C2C2E] right-5 bottom-7 flex items-center justify-center absolute ">
        <FaRegThumbsUp className="text-xl" />
      </div>
    </div>
  );
};

export default ContestCard;
