"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface BarberShopCardProps {
  item: {
    shop: {
      _id: string;
      profilePicture: string;
      shopName: string;
      shopAddress: string;
    };
    rating: number;
    distance: number;
  };
}

const BarberShopCard: React.FC<BarberShopCardProps> = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-[#2c2c2e] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
      <Link href={`/barberdetail/${item.shop._id}`} className="no-underline">
        <div className="relative h-72 overflow-hidden">
          <Image
            fill={true}
            src={item.shop.profilePicture}
            alt={`${item.shop.shopName} profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 bg-[#2c2c2e] text-center">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-white">
              {item.shop.shopName}
            </span>
            <div className="flex items-center text-white">
              <span className="text-white pt-[2px]">{item.rating || 0}</span>
              <span className="text-yellow-500 pl-2">
                <FaStar />
              </span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-white">
            <span className="truncate">{item.shop.shopAddress}</span>
            <span>{item.distance}km</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BarberShopCard;
