"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

const SocialSignin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get('redirect') || '/'; // Default to home page
  const { data: session, status } = useSession(); // Get session and status

  // Redirect to home page when session is authenticated
  useEffect(() => {
    if (status === 'authenticated') {
      router.push(path); // Redirect to the intended path or home
    }
  }, [status, router, path]);

  const handleSocialLogin = (provider) => {
    signIn(provider, {
      redirect: false, // Handle redirection manually
    });
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <div className="flex items-center justify-center gap-10 py-6">
        <button onClick={() => handleSocialLogin('google')}>
          <Icon className="text-4xl" icon="flat-color-icons:google" />
        </button>

        <button onClick={() => handleSocialLogin('github')}>
          <Icon className="text-4xl" icon="logos:github-icon" />
        </button>

        <button onClick={() => handleSocialLogin('twitter')}>
          <Icon className="text-4xl" icon="devicon:twitter" />
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
