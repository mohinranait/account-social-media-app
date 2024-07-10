"use client";

import PageLoader from "@/ui/spinners/PageLoader";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const router = useRouter();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    router.push("/login");
  }

  if (isAuthenticated) {
    return children;
  }

  return (
    <>
      <PageLoader />
    </>
  );
};

export default ProtectRoute;
