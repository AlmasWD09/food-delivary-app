import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const EditUserModal = ({ closeModal, id, refetch }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target;
    const finalData = {
      id: id._id,
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      phoneNumber: data.phone.value,
      role: data.role.value,
      email: data.email.value,
    };
    // console.log(finalData);
    axios
      .patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id._id}`, finalData)
      .then((res) => {
        setError("");
        closeModal();
        refetch();
      })
      .catch((error) => {
        // console.log(error.response.data);
        setError(error.response.data);
      });
  };
  return (
    <>
      {/* modal background  */}
      <div
        onClick={closeModal}
        className=" bg-slate-100 backdrop-blur-sm inset-0 bg-opacity-10 fixed "
      ></div>
      {/* modal show  */}
      <div className=" fixed  top-1/2 left-[60%] transform  -translate-x-1/2 -translate-y-1/2  ">
        <div className="bg-white  overflow-y-auto px-10 py-6 rounded-xl   max-w-6xl w-full max-h-[500px] border-4 border-primary shadow-md  ">
          <form onSubmit={handleSubmit} action="">
            <h2 className="text-center text-xl font-semibold">
              Update User Profile
            </h2>
            <div className="grid grid-cols-2 gap-5 py-4 ">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  defaultValue={id.firstName}
                  placeholder="John Doe"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  defaultValue={id.lastName}
                  placeholder="John Doe"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="emailName"
                  defaultValue={id.email}
                  placeholder="John Doe"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  disabled
                  defaultValue={id.password}
                  placeholder="John Doe"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Phone No.
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={id.phoneNumber}
                  placeholder="+91 1234567890"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Role
                </label>
                <select
                  defaultValue={id.role}
                  name="role"
                  id="role"
                  className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                >
                  <option value="admin">admin</option>
                  <option value="rider">rider</option>
                  <option value="restaurant">restaurant</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="py-2.5 w-full bg-primary hover:bg-green-600 text-white rounded-lg"
            >
              Update
            </button>
            {error && (
              <h2 className="text-red-600 text-sm text-center pt-4">{error}</h2>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default EditUserModal;
