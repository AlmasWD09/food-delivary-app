import React from "react";
import navLinks from "./DashboardLinks";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
const DashboardNav = () => {
  const currentUser = "admin";

  const navRule = navLinks[currentUser];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="pb-10">
          <Image src={logo} alt="delish logo" height={100} width={200} />
        </div>

        <ul className="space-y-4">
          {navRule.map((item) => (
            <div
              key={item.path}
              className=" hover:bg-secondaryGray hover:text-primary rounded-md  flex items-center gap-3 px-2 py-2  "
            >
              <span className="text-2xl">{item.icons}</span>
              <li>{item.title}</li>
            </div>
          ))}
        </ul>
      </div>

      <div className="capitalize text-sm w-full whitespace-nowrap  space-y-2 ">
        <p className="flex items-center">Delish {currentUser} dashboard</p>
        <p className="flex items-center gap-1">
          2024 <Icon icon="ic:baseline-copyright" /> all rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default DashboardNav;
