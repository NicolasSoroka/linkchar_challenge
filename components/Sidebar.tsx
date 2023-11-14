"use client";

import { axiosGetStories } from "@/app/api/axios";

import React from "react";
import UserStory from "./UserStory";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";
import UploadImage from "./UploadImage";

const Sidebar = () => {
  const {
    isPending,
    error,
    data: stories,
  } = useQuery({
    queryKey: ["stories"],
    queryFn: () => axiosGetStories().then((res) => res.data),
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col bg-[#242424] dark:bg-[#f2f2f2] md:h-screen w-screen md:w-80">
      <div className="flex md:flex-col px-7 mt-5 md:mt-7 md:my-7 md:gap-7 gap-3 ">
        <Image
          src={"/linkchar_logo.svg"}
          width={170}
          height={45}
          priority
          alt="LinkChar logo"
        />
        <p className="hidden md:flex text-lg	text-white dark:text-black font-bold">Todas las historias</p>

        <UploadImage/>
      </div>

      <ul className="flex md:flex-col h-full w-screen md:w-auto text-white dark:text-black scroll-smooth overflow-scroll no-scrollbar">
        {isPending && <Loader />}
        {!isPending &&
          stories.results.map((story) => {
            return <UserStory story={story} key={story.id} />;
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
