"use client";
import { useRouter } from "next/navigation";

export default function Image() {
  const router = useRouter();

  return (
    <div
      className="w-80 h-80 border flex justify-center items-center cursor-pointer"
      onClick={() => router.back()}
    >
      <h1 className="text-white">Upload image</h1>
    </div>
  );
}
