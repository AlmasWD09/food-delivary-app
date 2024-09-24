"use client";
import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../../../public/assets/loading.json";
const Loading = () => {
  return (
    <div className="h-screen z-50 flex justify-center items-center">
      <Lottie className="w-1/4" animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Loading;
