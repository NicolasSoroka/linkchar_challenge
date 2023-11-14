import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type stories = {
  id: number;
  file: string;
  uploaded_ago: string;
};

type story = {
  id: number;
  avatar: string;
  username: string;
  stories: stories[];
};

type UserStoryTypes = {
  story: story;
};

const UserStory: FC<UserStoryTypes> = ({
  story: { id, avatar, username, stories  },
}) => {
  avatar = avatar ?? "/images/user-circle.png";

  return (
    <li>
      <Link
        href={`/home/${username}`}
        className="flex items-center cursor-pointer px-2 md:px-7 py-4 md:w-80 bg-[#242424] dark:bg-[#f2f2f2] hover:dark: hover:bg-[#343434] md:gap-x-4"
      >
        <div className="relative w-12 h-12">
          {avatar && (
            <Image
              className="rounded-full border border-[#FD7A6B]"
              src={avatar}
              alt={`profile ${username}`}
              width={48}
              height={48}
              placeholder="blur"
              blurDataURL='/images/user-circle.png'
            />
          )}
        </div>
        <div className="hidden md:flex flex-col">
          <h3 className="text-white dark:text-black text-sm	font-bold	">{username}</h3>
          <div className="flex gap-x-1">
            <p className="text-sm text-[#FFB7AF]">{stories.length} nuevas</p>
            <span className="text-sm">·</span>
            <p className="text-sm dark:text-black text-white">{stories[stories.length-1].uploaded_ago}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserStory;
