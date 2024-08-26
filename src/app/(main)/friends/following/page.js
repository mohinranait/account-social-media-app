'use client';
import RequiestCard from '@/components/cards/suggests/RequiestCard'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from 'react-icons/io'
import useAxios from '@/hooks/useAxios';
import FriendsHeaderSection from '@/components/friends/FriendsHeaderSection';

const FollowingLists = () => {
    const axios = useAxios();
    const [friendsFollowings, setFriendFollowings] = useState([])



    useEffect(() => {

        (async function () {

            try {
                const res = await axios.get(`/user/following`);

                setFriendFollowings(res?.data?.payload?.followings);

            } catch (error) {
                console.log(error);

            }
        })()
    }, [axios])



    return (

        <div>
            <FriendsHeaderSection data={friendsFollowings} title="Followings Pending" subTitle={'Followings'} />

            <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
                {
                    friendsFollowings?.map(following => <RequiestCard key={following?._id} data={following} />)
                }
            </div>
        </div>

    )
}

export default FollowingLists