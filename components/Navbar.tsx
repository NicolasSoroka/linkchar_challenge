"use client";

import { axiosGetMyStories } from "@/app/api/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [myStories, setMyStories] = useState([]);

  const {
    isPending,
    error,
    data: stories,
  } = useQuery({
    queryKey: ["selfStories"],
    queryFn: () => axiosGetMyStories(),
  });

  return (
    <div className="h-9 w-screen md:w-72 md:mt-9 md:mr-5 flex items-center justify-center z-50 md:m-4 relative my-4 ">
      <ul className="flex gap-x-4 h-9 w-[265px]">
        <li className="flex items-center justify-center h-9 w-9 bg-[#343434] rounded-lg	cursor-pointer">
          <Image
            src="/images/explore-outline.svg"
            alt={`explore-outline`}
            width={24}
            height={24}
          />
        </li>

        <li className="flex items-center justify-center h-9 w-14 bg-[#343434] rounded-lg gap-x-[2px] cursor-pointer">
          <Image
            src="/images/wallet-fill.svg"
            alt={`wallet-fill`}
            width={24}
            height={24}
          />
          <span className="text-white text-[7px] font-bold">$100</span>
        </li>
        <li className="relative flex items-center justify-center h-9 w-9 bg-[#343434] rounded-lg pr-[1px] cursor-pointer">
          <Image
            src="/images/envelope.svg"
            alt={`envelope`}
            width={24}
            height={24}
          />
          <span className="absolute top-1 right-0 mr-[2px] text-white bg-[#FD7A6B] w-3 h-3 flex items-center justify-center rounded-full text-bold text-[7px]">
            5
          </span>
        </li>
        <li className="relative flex items-center justify-center h-9 w-9 bg-[#343434] rounded-lg	cursor-pointer pr-[1px]">
          <Image
            src="/images/noti-outline.svg"
            alt={`noti-outline`}
            width={24}
            height={24}
          />
          <span className="absolute top-1 right-0 mr-[2px] text-white bg-[#FD7A6B] w-3 h-3 flex items-center justify-center rounded-full text-bold text-[7px]">
            3
          </span>
        </li>
        <li className="relative w-[38px] h-[38px] border-[3px] border-black outline outline-1 outline-[#FAB2AA] cursor-pointer rounded-full overflow-hidden p-x-1">
          {myStories && (
            <Link href={`/home/`}>
              <Image src="/images/avatar.jpg" alt={`avatar img`} fill />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
