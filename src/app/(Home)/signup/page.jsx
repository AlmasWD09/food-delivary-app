"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const SignupPage = () => {
const router = useRouter();
  const handleSignUp = async (event) => {
    event.preventDefault();

  
    const imageFile = event.target.image.files[0]; // Get the image file properly
    const formData = new FormData(); // Create FormData for file upload
    formData.append("image", imageFile); // Append image to FormData

    try {
      // Upload the image to imgbb
      const res = await axios.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const imageUrl = res?.data?.data?.url; // Extract the uploaded image URL
      console.log("Image uploaded successfully:", imageUrl);

      // Create newUser object with the image URL
      const newUser = {
        name: event.target.fullname.value,
        email: event.target.emailAddress.value,
        password: event.target.password.value,
        image: imageUrl, // Add the image URL
        role:'admin',
      };

      // Send newUser data to your server (uncomment if needed)
      const resp = await fetch("http://localhost:3000/signup/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(resp);
      if (resp.status === 200) {
        event.target.reset(); // Reset form after successful submission
        router.push('/')
        toast.success('user create successfully')
      }
      else{
        toast.error('Sign-up failed. Please try again')
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className=" max-w-6xl mx-auto  h-screen flex justify-center">
      <div className=" flex flex-col lg:flex-row items-center justify-center lg:pr-10 lg:gap-10">
        {/* left side area  */}
        <div className="w-1/2 hidden lg:flex">
          <Image
            className="bg-cover "
            src="/assets/signup.svg"
            alt="signup"
            height={1000}
            width={1000}
          />
        </div>

        {/* right side area  */}

        <div className="border-2 border-green-600 lg:w-2/5  p-10  relative  ">
          <div className="h-full w-full absolute overflow-hidden top-0 left-0 bg-base-100 -z-10">
            <span className="w-36 h-36 bg-green-600 absolute -top-20 -right-20 rotate-[-40deg]"></span>
          </div>
          <span className="h-full w-full bg-green-100 absolute -z-20 top-4 left-4 lg:top-8 lg:left-8 "></span>

          <div className="pb-6 ">
            <h1 className="text-center text-3xl font-semibold">
              Create Account
            </h1>
            <h1 className="text-center text-sm ">
              sign up now and unlock exclusive access!
            </h1>
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullname"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="Full Name"
            />


            {/* Email **/}
            <input
              type="email"
              name="emailAddress"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="Email Address"
            />

            {/* Image */}
            <input
              type="file"
              name="image"
              id="image"
              className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-green-200 "
              placeholder="password"
            />

            <button type="submit" className="relative py-4 bg-green-600 text-white group overflow-hidden flex items-center justify-center">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-500 rounded-full group-hover:w-96 group-hover:h-96 "></span>
              <span className="relative">Create Account</span>
            </button>
          </form>
          <h1 className="text-center py-4">
            have an account ?{" "}
            <Link href="/signin">
              <span className="font-semibold hover:text-red-500">sign in</span>
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
