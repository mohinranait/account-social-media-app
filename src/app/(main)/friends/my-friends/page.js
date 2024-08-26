
'use client';
import FriendCard from '@/components/cards/friendCard/FriendCard';
import FriendsHeaderSection from '@/components/friends/FriendsHeaderSection';
import useAxios from '@/hooks/useAxios';
import { friendsLinks } from '@/services/Links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io';





const MyFriends = () => {
    const axios = useAxios();
    const [friends, setFriends] = useState([])
    const pathName = usePathname();


    useEffect(() => {

        (async function () {
            try {
                const res = await axios.get(`/user/all?querytype=friends`);
                setFriends(res?.data?.payload?.users);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [axios])
    return (

        <div>
            <FriendsHeaderSection data={friends} title="My Friends" subTitle={'Friends'} />

            <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
                {
                    friends?.map(user => <FriendCard cardType={'friend'} key={user?._id} user={user} />)
                }
            </div>
        </div>

    )
}

export default MyFriends