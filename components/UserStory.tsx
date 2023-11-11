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
  story: { id, avatar, username, stories },
}) => {
  avatar = avatar ?? "/images/user-circle.png";

  return (
    <li>
      <Link
        href={`/home/${username}`}
        className="flex items-center cursor-pointer px-7 py-4 w-80 bg-[#242424] hover:bg-[#343434] gap-x-4"
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
        <div className="flex flex-col">
          <h3 className="text-white text-sm	font-bold	">{username}</h3>
          <div className="flex gap-x-1">
            <p className="text-sm text-[#FFB7AF]">{stories.length} nuevas</p>
            <span className="text-sm">·</span>
            <p className="text-sm text-white">31 m</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserStory;
