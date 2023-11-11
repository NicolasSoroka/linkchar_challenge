"use client";

import { useEffect, useState } from 'react';
import { axiosGetStories } from "@/app/api/axios";

import React from "react";
import UserStory from "./UserStory";
import Image from "next/image";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useQuery } from '@tanstack/react-query';

const Sidebar = () => {
  const { isPending, error, data : stories, isFetching } = useQuery({
    queryKey: ['stories'],
    queryFn: () =>
    axiosGetStories().then((res) => res.data),
  })

   if (isPending) return 'Loading...'
   if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="flex flex-col bg-[#242424] h-screen w-80">
      <div className="flex flex-col px-7 my-7 gap-7">
        <Image
          src={"/linkchar_logo.svg"}
          width={170}
          height={45}
          priority
          alt="LinkChar logo"
        />
        <p className="text-lg	text-white font-bold">Todas las historias</p>

        <Button
          type="submit"
          variant="linkchar"
          className="w-64 text-sm text-white font-normal"
          onClick={() => {console.log("Subir historia")}}
        >
          <Plus className="mr-2 h-4 w-4" /> Subir historia
        </Button>
      </div>

      <ul className="flex flex-col text-white scroll-smooth overflow-scroll no-scrollbar">
        {
          stories.results.map((story) => {
            return (
              <UserStory story={story} key={story.id}/>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Sidebar;
