import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import StoryMessage from "./StoryMessage";
import StoryBar from "./StoryBar";
import { axiosGetStories } from "@/app/api/axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import StoryImage from "./StoryImage";
import { useQuery } from "@tanstack/react-query";

import { Oval } from "react-loader-spinner";
import Loader from "../Loader";

type UserStoryTypes = {
  slug: string;
};

interface User {
  username: string;
}

interface AdjacentUsers {
  previousUser: User | null;
  nextUser: User | null;
}

const Story: FC<UserStoryTypes> = ({ slug }) => {
  const [currentStory, setCurrentStory] = useState(0);
  const router = useRouter();

  const {
    isPending,
    error,
    data: stories,
  } = useQuery({
    queryKey: ["stories"],
    queryFn: () => axiosGetStories().then((res) => res.data),
  });

  if (error) return "An error has occurred: " + error.message;

  let currentUser = slug
    ? stories?.results.find((x) => x.username === slug[0])
    : stories?.results[0];
  const storyData = currentUser?.stories[currentStory];
  const numberOfStories = currentUser?.stories.length;

  function findAdjacentUsers(): AdjacentUsers {
    const currentUserIndex = stories?.results.findIndex(
      (x) => x.username === currentUser.username
    );

    if (currentUserIndex === -1) {
      return { previousUser: null, nextUser: null };
    }

    const previousUser =
      currentUserIndex > 0 ? stories?.results[currentUserIndex - 1] : null;
    const nextUser =
      currentUserIndex < stories?.results.length - 1
        ? stories?.results[currentUserIndex + 1]
        : null;

    return { previousUser, nextUser };
  }

  const { previousUser, nextUser } = findAdjacentUsers();

  const handleNextStory = () => {
    if (currentStory < numberOfStories - 1) {
      setCurrentStory(currentStory + 1);
    } else if (currentStory === numberOfStories - 1 && nextUser !== null) {
      router.push(`/home/${nextUser?.username}`);
    }
  };

  const handlePreviousStory = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    } else if (currentStory === 0 && previousUser !== null) {
      router.push(`/home/${previousUser?.username}`);
    }
  };

  if (isPending) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      transition={{  duration: 0.5 }}
      animate={{ x: [50, 0] }}
      className="flex flex-col relative w-screen md:w-96 md:min-h-screen md:m-auto"
    >
      {currentUser?.username && (
        <StoryBar
          username={currentUser.username}
          storyInfo={storyData}
          avatar={currentUser.avatar}
          currentStory={currentStory}
          numberOfStories={numberOfStories}
          handleNextStory={handleNextStory}
        />
      )}

      <div className="absolute z-auto top-0 h-full w-96">
        {currentUser?.stories && (
          <StoryImage
            stories={currentUser?.stories}
            currentStory={currentStory}
          />
        )}
      </div>

      <motion.div className="flex justify-between items-center z-50 w-full h-screen">
        <motion.button
          className="absolute -left-5 cursor-pointer w-2/4 md:w-auto h-full md:h-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePreviousStory}
        >
          <Image
            className="hidden md:flex"
            src={"/images/arrow_left.svg"}
            height={44}
            width={44}
            alt="arrow-left"
          />
        </motion.button>

        <motion.button
          className="absolute -right-5 cursor-pointer w-2/4 md:w-auto h-full md:h-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextStory}
        >
          <Image
            className="hidden md:flex"
            src={"/images/arrow_right.svg"}
            height={44}
            width={44}
            alt="arrow-left"
          />
        </motion.button>
      </motion.div>

      {currentUser?.username && (
        <StoryMessage username={currentUser.username} />
      )}
    </motion.div>
  );
};

export default Story;
