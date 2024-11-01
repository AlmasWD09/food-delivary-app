import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const PauseUserModal = ({ closeModal, id, refetch }) => {
  const [error, setError] = useState("");
  console.log(id._id);
  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id._id}`)
      .then((res) => {
        toast.success("updated successfully");
        setError("");
        closeModal();
        refetch();
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };
  return (
    <>
      {/* modal background  */}
      <div
        onClick={closeModal}
        className=" fixed px-5 lg:px-0 z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      ></div>
      {/* modal show  */}
      <div className=" flex justify-center items-center z-[999]  fixed top-0 left-0 right-0 bottom-0 w-fit  mx-auto">
        <div className="bg-white  overflow-y-auto px-10 py-6 rounded-xl   max-w-sm w-full max-h-[500px]  shadow-md   ">
          <h1 className="text-2xl text-center py-10">
            Are you sure you want to delete this user?
          </h1>
          <div className="flex items-center justify-center gap-6 w-full">
            <button
              onClick={handleDelete}
              className="px-4 py-2  rounded-2xl bg-red-500 text-white "
            >
              Confirm
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2   rounded-2xl border-black border-2 "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PauseUserModal;
