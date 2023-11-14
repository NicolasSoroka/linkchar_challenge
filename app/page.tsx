"use client";

import Image from "next/image";
import React from "react";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import { useRouter } from "next/navigation";
import useUser from "@/lib/useUser";

const LoginPage = () => {
  const router = useRouter();
  const user = useUser();

  if(user) router.push(`/home`);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-y-24">
      <Image
        src={"/linkchar_logo.svg"}
        width={170}
        height={45}
        priority
        alt="LinkChar logo"
      />
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
