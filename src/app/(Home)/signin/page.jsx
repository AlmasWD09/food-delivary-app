"use client";
import SocialSignin from "@/components/shared/SocialSignin";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const handleSignin = async (event) => {
    event.preventDefault();
    const email = event.target.emailAddress.value;
    const password = event.target.password.value;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp.status === 200) {
      router.push("/");
    } else {
      // Handle error (optional)
      alert("Sign-in failed. Please check your credentials.");
    }
  };

  return (
    <div className=" max-w-6xl mx-auto  h-screen flex justify-center">
      <div className="  flex items-center justify-center lg:pr-10 ">
        {/* left side area  */}
        <div className="flex-1 hidden lg:flex">
          <Image
            className="bg-cover"
            src="/assets/signin.svg"
            alt="signup"
            height={1000}
            width={1000}
          />
        </div>

        {/* right side area  */}

        <div className="border-2 border-primary lg:w-2/5  p-8  relative  ">
          <div className="h-full w-full bg-white absolute overflow-hidden top-0 left-0 bg-base-100 -z-10">
            <span className="w-36 h-36 bg-primary absolute -top-20 -right-20 rotate-[-40deg]"></span>
          </div>
          <span className="h-full w-full bg-primaryGray/15 absolute -z-20 top-4 left-4 lg:top-8 lg:left-8 "></span>

          <div className="pb-6 space-y-4 ">
            <h1 className="text-center text-3xl font-semibold">Hello Again!</h1>
            <h1 className="text-center text-sm ">
              Make today tasty—let&apos;s get your order started!
            </h1>
          </div>
          <form
            onSubmit={handleSignin}
            action=""
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
              placeholder="Email Address"
              name="emailAddress"
            />
            <input
              type="password"
              className="p-4 outline-none bg-gray-100 w-full rounded-2xl focus:border-2 focus:border-primaryGray/20 "
              placeholder="password"
              name="password"
            />
            <h2 className="text-sm py-4">
              Forgot Your Password?{" "}
              <button className="font-semibold text-primary">click here</button>
            </h2>
            <button
              type="submit"
              className="relative py-4 bg-primaryGray text-black hover:text-white group overflow-hidden flex items-center justify-center"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-primary  text-white rounded-full group-hover:w-96 group-hover:h-96 "></span>
              <span className="relative">Sign In</span>
            </button>
          </form>

          <div className="pt-10">
            <div className="flex items-center gap-6">
              <span className="h-0.5 bg-gray-200 w-full"></span>
              <h2 className="text-nowrap text-sm">or continue with </h2>{" "}
              <span className="h-0.5 bg-gray-200 w-full"></span>
            </div>

            {/* social sign here */}
            {/* <SocialSignin /> */}
          </div>

          <h1 className="text-center py-4">
            Don&apos;t have an account ?{" "}
            <Link href="/signup">
              <span className="font-semibold text-primary">sign up</span>
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
