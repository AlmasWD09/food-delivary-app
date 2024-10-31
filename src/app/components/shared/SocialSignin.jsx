"use client"
import { Icon } from "@iconify/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


const SocialSignin = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const path = searchParams.get('redirect') || '/'
    const { data: session, status } = useSession();

    // Redirect the user after successful login
    useEffect(() => {
        if (status === 'authenticated') {
            router.push(path); // Redirect to the intended page or home
        }
    }, [session, status, path, router]);

    const handleSocialLogin = (provider) => {
        const resp = signIn(provider, {
            callbackUrl: path
        })
    }

    return (

        <div className=" flex items-center justify-center gap-10 ">
            <button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="w-full px-6 py-2  text-sm font-medium border dark:border-gray-600 transition-colors duration-300 transform hover:bg-secondery focus:bg-secondery focus:outline-none hover:border-secondery">
                <span className="flex items-center justify-center gap-4"><Icon className="text-4xl" icon="flat-color-icons:google" /> Sign in with Google</span>
            </button>
        </div>
    );
};

export default SocialSignin;