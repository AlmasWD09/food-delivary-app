import React from "react";
import ComingSoon from "../../../../../../public/comingsoon.svg";
import Image from "next/image";


const Users = () => {
  
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Image
        src={ComingSoon}
        width={500}
        height={500}
        alt="coming soon image"
      />
    </div>
  );
};

export default Users;
