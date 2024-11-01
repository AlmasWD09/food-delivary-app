"use client";
import SocialSignin from "@/app/components/shared/SocialSignin";
import { imageUpload } from "@/lib/imageUpload";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const SignupPage = () => {
  const router = useRouter();
  const session = useSession();
  const handleSignUp = async (event) => {
    event.preventDefault();

    const imageFile = event.target.image.files[0];
    try {
      const image_url = await imageUpload(imageFile)
      const newUser = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.emailAddress.value,
        phoneNumber: event.target.phoneNumber.value,
        image: image_url,
        password: event.target.password.value,
        ConfirmPassword: event.target.ConfirmPassword.value,
        status: "active",
        role: "user",
        loginName: "normalUser",
        date: new Date(),
      }

      // user info save for database request
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_URL}/signup/api`,
        {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (resp.status === 200) {
        event.target.reset(); // Reset form after successful submission
        router.push("/signin");
        toast.success("user create successfully");
      } else {
        toast.error("Sign-up failed. Please try again");
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="mt-20 lg:mt-0">
      <div className=" max-w-6xl mx-auto  h-screen flex justify-center ">
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

          <div className="border-2 border-primary lg:w-2/5  px-10  relative ">
            <div className="h-full bg-white w-full absolute overflow-hidden top-0 left-0 bg-base-100 -z-10">
              <span className="w-36 h-36 bg-primary absolute -top-20 -right-20 rotate-[-40deg]"></span>
            </div>
            <span className="h-full w-full bg-primaryGray/20 absolute -z-20 top-4 left-4 lg:top-8 lg:left-8 "></span>

            <div className="pb-2">
              <h1 className="text-center text-3xl font-semibold">
                Create Account
              </h1>
              <h1 className="text-center text-sm ">
                sign up now and unlock exclusive access!
              </h1>
            </div>
            <form onSubmit={handleSignUp} className="flex flex-col gap-4 pb-4">
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
                placeholder="First Name"
              />
              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
                placeholder="Last Name"
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phoneNumber"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20"
                placeholder="Phone Number"
              />

              {/* Email **/}
              <input
                type="email"
                name="emailAddress"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
                placeholder="Email Address"
              />

              {/* Image */}
              <input
                type="file"
                name="image"
                id="image"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
                placeholder="password"
              />

              {/* Confirm Password */}
              <input
                type="password"
                className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
                placeholder="Confirm Password"
                name="ConfirmPassword"
              />

              <button
                type="submit"
                className="relative py-4 bg-primaryGray text-black hover:text-white group overflow-hidden flex items-center justify-center"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-primary rounded-full group-hover:w-96 group-hover:h-96 "></span>
                <span className="relative">Create Account</span>
              </button>
              <h1 className="text-center ">
              have an account ?{" "}
              <Link href="/signin">
                <span className="font-semibold text-primary">sign in</span>
              </Link>{" "}
            </h1>
            {/* socialLogin */}
            <SocialSignin />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
