"use client";
import React from "react";

import loadingAnimation from "../../../public/assets/loading.json";
import Lottie from "lottie-react";

const loading = () => {
  return (
    <div className="h-screen  flex justify-center items-center">
      <Lottie className="w-1/4" animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default loading;
