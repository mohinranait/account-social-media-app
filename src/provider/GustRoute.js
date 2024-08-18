"use client";
import PageLoader from "@/ui/spinners/PageLoader";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const GustRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const router = useRouter();


    useEffect(() => {
        if (isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (!isAuthenticated) {
        return children;
    }



    return (
        <>
            <PageLoader />
        </>
    );
};

export default GustRoute;
