import { AppDispatch, RootState } from "@/app/redux/features/store";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoryMessage from "./StoryMessage";
import StoryBar from "./StoryBar";

type stories = {
  id: number;
  file: string;
  uploaded_ago: string;
};

type UserStoryTypes = {
  stories: stories[];
};

const Story: FC<UserStoryTypes> = ({ stories }) => {
  // const todoList = useSelector((state: RootState) => state.stories.list);
  // const dispatch = useDispatch<AppDispatch>();

  const handleNextStory = () => {}

  const handlePreviousStory = () => {}


  return (
    <div className="flex flex-col relative w-96 min-h-screen m-auto">
      <StoryBar />{" "}
      {/* va a necesitar todo el stories, incluyendo results.username */}
      <div className="absolute z-auto top-0 h-full w-96">
        <Image
          src={"/images/story.jpg"} // stories.file
          fill
          objectFit="cover"
          alt="Story"
        />
      </div>
      <div className="flex justify-between items-center z-50 w-full h-screen">
        <Image
          className="absolute -left-5 cursor-pointer"
          onClick={handleNextStory}
          src={"/images/arrow_left.svg"}
          height={44}
          width={44}
          alt="arrow-left"
        />
        <Image
          className="absolute -right-5 cursor-pointer"
          onClick={handlePreviousStory}
          src={"/images/arrow_right.svg"}
          height={44}
          width={44}
          alt="arrow-left"
        />
      </div>

      <StoryMessage /> {/* results.username */}
    </div>
  );
};

export default Story;
