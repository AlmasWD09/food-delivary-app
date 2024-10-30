"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const WithAuth = ({ component: Component, roles }) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  React.useEffect(() => {
    if (loading) return; // Don't do anything if loading

    if (!session) {
      router.replace("/signin");
    } else if (roles && !roles.includes(session.user.role)) {
      router.replace("/not-authorized");
    }
  }, [loading, session, roles, router]);

  if (loading) return <div>Loading...</div>;
  if (!session || (roles && !roles.includes(session.user.role))) return null;

  return <Component />;
};

export default WithAuth;
