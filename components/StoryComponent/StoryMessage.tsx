import React, { FC } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

type UserStoryTypes = {
  username: string;
};

const StoryMessage:FC<UserStoryTypes> = ( {username} ) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-black to-transparent z-50 h-24 w-full	absolute bottom-0" >
      <div className="flex justify-between items-center  h-11   w-11/12  border rounded-3xl">
        <p className="text-white pl-4">Responde a {username}</p>
        {/* max width al texto */}
        <div className="flex items-center gap-2.5">
          <Heart className="text-white cursor-pointer" />
          <span className="bg-white h-12 w-11 rounded-full flex items-center justify-center cursor-pointer">
            <Image
              src="/images/paper-airplane.svg"
              height={30}
              width={30}
              alt="paper airplane"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryMessage;
