import Image from "next/image";
import React, { FC } from "react";

type story = {
  id: number;
  avatar: string;
  username: string;
  stories: string[];
};

type UserStoryTypes = {
  story: story;
};

const UserStory: FC<UserStoryTypes> = ({
  story: { id, avatar, username, stories },
}) => {

  avatar = avatar ?? "/images/user-circle.png";

  return (
    <li
      key={id}
      className="flex items-center cursor-pointer px-7 py-4 w-80 bg-[#242424] hover:bg-[#343434] gap-x-4"
    >
      <div className="relative w-12 h-12">
        {avatar && (
          <Image
            className="rounded-full border border-[#FD7A6B]"
            src={avatar}
            alt={`profile ${username}`}
            fill
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white text-sm	font-bold	">{username}</h3>
        <div className="flex gap-x-1">
          <p className="text-sm text-[#FFB7AF]">{stories.length} nuevas</p>
          <span className="text-sm">·</span>
          <p className="text-sm text-white">31 m</p>
        </div>
      </div>
    </li>
  );
};

export default UserStory;
