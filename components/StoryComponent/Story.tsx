import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import StoryMessage from "./StoryMessage";
import StoryBar from "./StoryBar";
import { axiosGetStories } from "@/app/api/axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import StoryImage from "./StoryImage";
import { useQuery } from "@tanstack/react-query";

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

  const { isPending, error, data : stories, isFetching } = useQuery({
    queryKey: ['stories'],
    queryFn: () =>
    axiosGetStories().then((res) => res.data),
  })

  const currentUser = stories.results.find((x) => x.username === slug[0]);
  const storyData = currentUser?.stories[currentStory];
  const numberOfStories = currentUser?.stories.length;

   if (isPending) return 'Loading...'
   if (isFetching) return 'Fetching...'
   if (error) return 'An error has occurred: ' + error.message

  function findAdjacentUsers(): AdjacentUsers {
    const currentUserIndex = stories.results.findIndex(
      (x) => x.username === slug[0]
    );

    if (currentUserIndex === -1) {
      return { previousUser: null, nextUser: null };
    }

    const previousUser =
      currentUserIndex > 0 ? stories.results[currentUserIndex - 1] : null;
    const nextUser =
      currentUserIndex < stories.results.length - 1
        ? stories.results[currentUserIndex + 1]
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

  return (
    <motion.div className="flex flex-col relative w-96 min-h-screen m-auto">
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

      <motion.div
        className="absolute z-auto top-0 h-full w-96"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        animate={{ x: [120, 0], opacity: 1 }}
      >
        {storyData?.file && <StoryImage image={storyData?.file} />}
      </motion.div>

      <motion.div className="flex justify-between items-center z-50 w-full h-screen">
        <motion.button
          className="absolute -left-5 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            onClick={handlePreviousStory}
            src={"/images/arrow_left.svg"}
            height={44}
            width={44}
            alt="arrow-left"
          />
        </motion.button>

        <motion.button
          className="absolute -right-5 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            onClick={handleNextStory}
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
