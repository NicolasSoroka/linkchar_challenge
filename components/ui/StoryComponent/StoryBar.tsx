import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const StoryBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100;
    const totalTime = 5000;
    const steps = totalTime / interval;

    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep += 1;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      if (currentStep === steps) {
        clearInterval(progressTimer);
      }
    }, interval);

    return () => {
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="flex flex-col z-50 h-24 w-96 p-4 gap-y-4 absolute bg-gradient-to-t from-transparent  to-black">
      <div className="flex items-start gap-3.5 w-auto">
        {/* debe renderizar uno por stories */}
        <Progress value={progress} className="h-[3px]" />
        <Progress value={progress} className="h-[3px]" />
        <Progress value={progress} className="h-[3px]" />
        <Progress value={progress} className="h-[3px]" />
      </div>

      <div className="flex justify-between items-center w-100">
        <div className="flex items-center w-100 gap-x-4">
          <div className="relative w-12 h-12">
            <Image
              className="rounded-full border border-[#FD7A6B]"
              src="/images/profile.jpg"
              alt={`usuario12312`}
              fill
              objectFit="cover"
            />
          </div>

          <h3 className="text-white text-sm	font-bold">lexx_galorerock</h3>
          <p className="text-sm font-normal text-white">31 m</p>
        </div>

        <button className="relative w-4 h-4">
          <Image
            className=""
            src="/images/charm_menu-kebab.svg"
            alt={`usuario12312`}
            fill
            objectFit="cover"
          />
        </button>
      </div>
    </div>
  );
};

export default StoryBar;
