"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { LoginForm } from "@/components/LoginForm/LoginForm";


const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen mt-20 gap-y-24">
      <Image
        src={"/linkchar_logo.svg"}
        width={170}
        height={45}
        alt="LinkChar logo"
      />

      <LoginForm/>
    </div>
  );
};

export default Login;
