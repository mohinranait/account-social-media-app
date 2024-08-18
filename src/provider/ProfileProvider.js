
'use client';
import useAxios from '@/hooks/useAxios';
import { useParams } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export const ProfileContext = createContext(null);
const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loadingProfile, setLoadingProfile] = useState(false)


    const params = useParams();
    const axios = useAxios();


    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get(`/user/single`, {
                    params: {
                        profileUrl: params?.profile,
                    },
                });
                if (res?.data?.success) {
                    setProfile(res?.data?.payload?.user)
                } else {
                    toast.error("Somthing wrong");
                }

            } catch (error) {
                toast.error("Somthing wrong");
            }
        })();
    }, [params, axios]);


    const obj = {
        profile,
        setProfile,
        loadingProfile,
        setLoadingProfile
    }

    return (
        <ProfileContext.Provider value={obj}>{children}</ProfileContext.Provider>
    )
}

export default ProfileProvider