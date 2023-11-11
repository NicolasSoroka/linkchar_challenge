import Image from "next/image";
import React, { FC } from "react";

type StoryImageTypes = {
  image: string;
};

const StoryImage: FC<StoryImageTypes> = ({ image }) => {
  return (
    <div className="absolute z-auto top-0 h-full w-96">
      <Image src={image} fill objectFit="cover" alt="Story" />;
    </div>
  );
};

export default StoryImage;
