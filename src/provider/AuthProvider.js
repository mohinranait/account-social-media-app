"use client";

import useAxios from "@/hooks/useAxios";
import { addUser, authLoading } from "@/redux/auth/authSlice";
import { fetchProfileStatics } from "@/redux/data/dataSlice";
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
                dispatch(fetchProfileStatics())
                dispatch(authLoading(false));
            } catch (error) {
                dispatch(authLoading(false));
            } finally {
                dispatch(authLoading(false));
            }
        })();
    }, [axios, dispatch]);
    return <>{children}</>;
};

export default AuthProvider;
