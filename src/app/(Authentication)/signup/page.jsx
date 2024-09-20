import React from "react";

const page = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col items-center gap-2">
          <input
            name="fullname"
            type="text"
            placeholder="Full Name"
            className="px-4 py-2 rounded-xl border-2 outline-none focus:border-blue-300"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-xl border-2 outline-none focus:border-blue-300"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
