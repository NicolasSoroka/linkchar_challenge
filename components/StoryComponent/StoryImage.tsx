import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";

type storyType = {
  uploaded_ago: string;
  id: string;
  file: string;
};

type StoryImageTypes = {
  stories: storyType[];
  currentStory: number;
};

const StoryImage: FC<StoryImageTypes> = ({ stories, currentStory }) => {
  return (
    <motion.div
      key={currentStory}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      animate={{ opacity: 1 }}
      className="absolute z-auto top-0 h-full w-96"
    >
      {stories[currentStory]?.file && (
        <Image
          src={stories[currentStory].file}
          fill
          objectFit="cover"
          alt="Story"
        />
      )}
    </motion.div>
  );
};

export default StoryImage;
