"use client";

import Story from "@/components/StoryComponent/Story";
import React from "react";

const StoryPage = ({ params }: { params: { slug: string } }) => {
  return <Story slug={params.slug} />;
};

export default StoryPage;
