"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";

const OrderCartCard = ({ item, refetch, totalPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const axiosPub = useAxiosPublic();
  const [quantity, setQuantity] = useState(item?.quantity);

  //  Cart item delete mutation
  const { mutateAsync } = useMutation({
    mutationKey: ["cart"],
    mutationFn: async (id) => {
      const { data } = await axiosPub.delete(`/cart-menu-delete/${id}`);
      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully removed this item");
      setIsModalOpen(false);
      refetch();
    },
  });

  // Handle quantity changes
  const handleQuantity = (qua) => {
    if (qua === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (qua === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  
  const { mutateAsync: updateQuantity } = useMutation({
    mutationKey: ["quantity"],
    mutationFn: async (upData) => {
      const { data } = await axiosPub.patch("/cart-menu/quantity", upData);
      return data;
    },
    onSuccess: () => {
      // toast.success("You have successfully updated the quantity.");
      refetch();
    },
  });

 
  useEffect(() => {
    if (quantity !== item?.quantity) { 
      const upData = {
        title: item?.title,
        quantity: quantity,
      };
      updateQuantity(upData);
    }
  }, [quantity, item?.title]);

  // Handle delete modal
  const handleDelete = (id) => {
    setId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    mutateAsync(id);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="border relative flex lg:flex-row flex-col items-center gap-5 p-4"
      key={item.id}
    >
      <div>
        <Image
          width={128}
          height={96}
          src={item.image}
          alt="image"
          className="md:w-32 bg-center rounded-lg object-cover w-36 h-28 md:h-24"
        />
      </div>
      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-base">{item.description.slice(0, 65)}</p>

        {/* Display the current quantity from state */}
        <p>
          Quantity: <span className="font-semibold">{quantity}</span>
        </p>
        <div className="flex items-center  gap-3">
          <button
            onClick={() => handleQuantity("minus")}
            className={`font-semibold ${quantity === 1 && "disabled:"} rounded-full text-white px-2 py-1 bg-primaryLight`}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => handleQuantity("plus")}
            className="font-semibold rounded-full text-white px-2 py-1 bg-primaryLight"
          >
            +
          </button>
        </div>

        <p className="my-2">
          Price: <span className="font-semibold text-xl">${item?.price}</span>
        </p>
        <button
          onClick={() => handleDelete(item._id)}
          className="absolute text-xl font-semibold top-2 right-2"
        >
          <TiDeleteOutline />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed px-5 lg:px-0 z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <h2 className="text-lg font-semibold">Confirm Deletion</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white rounded px-4 py-2"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 rounded px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCartCard;
