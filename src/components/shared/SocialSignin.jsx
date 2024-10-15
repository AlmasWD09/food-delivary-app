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

        <div className=" flex items-center justify-center gap-10 py-6">
            <button onClick={() => handleSocialLogin('google')} >
                <Icon className="text-4xl" icon="flat-color-icons:google" />
            </button>

            <button onClick={() => handleSocialLogin('facebook')}>
                <Icon className="text-4xl" icon="logos:facebook" />
            </button>

            {/* <button onClick={() => handleSocialLogin('twitter')}>
                <Icon className="text-4xl" icon="devicon:twitter" />
            </button> */}
        </div>
    );
};

export default SocialSignin;