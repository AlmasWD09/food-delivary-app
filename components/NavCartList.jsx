"use client";
import useCartItems from "@/hooks/useCartItems";
import Image from "next/image";

const NavCartList = () => {
  const [data, refetch, isLoading] = useCartItems();
  refetch()

  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <>
      {data.length > 0 ? (
        data?.map((item, index) => (
          <li
            key={index}
            className="gap-2 hover:underline cursor-pointer flex  p-4 border-b-2 border-secondary w-full"
          >
            <Image
              width={40}
              height={30}
              src={item.image}
              className="w-[40px] h-[30px]"
              alt={item.title}
            />
            <span>{item.title}</span>
          </li>
        ))
      ) : (
        <>
          <h4 className="text-sm p-3">You have not added any item</h4>
        </>
      )}
    </>
  );
};

export default NavCartList;
