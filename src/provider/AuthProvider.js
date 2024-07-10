"use client";

import useAxios from "@/hooks/useAxios";
import { addUser, authLoading } from "@/redux/auth/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }) => {
    const axios = useAxios();
    const dispatch = useDispatch();
    useEffect(() => {
        (async function () {
            try {
                dispatch(authLoading(true));
                const response = await axios.get("/auth/auth");
                dispatch(addUser(response?.data));
                dispatch(authLoading(false));
            } catch (error) {
                dispatch(authLoading(false));
                console.log(error.message);
            } finally {
                dispatch(authLoading(false));
            }
        })();
    }, []);
    return <>{children}</>;
};

export default AuthProvider;
