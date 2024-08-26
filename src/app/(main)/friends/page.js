
'use client';
import AddFriendCard from '@/components/cards/AddFirend/AddFriendCard';
import FriendCard from '@/components/cards/friendCard/FriendCard';
import RequiestCard from '@/components/cards/suggests/RequiestCard';
import useAxios from '@/hooks/useAxios';
import Link from 'next/link';


import React, { useEffect, useState } from 'react'





const FriendsHistory = () => {
    const axios = useAxios();
    const [friends, setFriends] = useState([])
    const [friendsSuggestions, setFriendSuggestions] = useState([])
    const [friendsRequists, setFriendRequists] = useState([])


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






    useEffect(() => {

        (async function () {
            try {
                const res = await axios.get(`/user/new-friend-request`);
                setFriendRequists(res?.data?.payload?.followers);
            } catch (error) {
                console.log(error);

            }
        })()
    }, [axios])




    useEffect(() => {

        (async function () {
            try {
                const res = await axios.get(`/user/all?querytype=suggestions`);
                setFriendSuggestions(res?.data?.payload?.users);

            } catch (error) {
                console.log(error);

            }
        })()
    }, [axios])

    return (

        <div className='flex flex-col gap-5'>


            <div className=''>
                <div className=' py-2 flex items-center justify-between'>
                    <span className='text-2xl font-medium text-gray-900'>Getting Requests</span>
                    <Link href={`/friends/lists`} className='text-xl text-primary font-medium'>See All</Link>
                </div>
                <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
                    {
                        friendsRequists?.map(follower => <RequiestCard cardType='request' key={follower?._id} data={follower} />)
                    }
                </div>
            </div>
            <div className=''>
                <div className=' py-2 flex items-center justify-between'>
                    <span className='text-2xl font-medium text-gray-900'>Suggestions</span>
                    <Link href={'/friends/suggestions'} className='text-xl text-primary font-medium'>See All</Link>
                </div>
                <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
                    {
                        friendsSuggestions?.map(user => <AddFriendCard key={user?._id} user={user} />)
                    }
                </div>
            </div>
            <div className=''>
                <div className=' py-2 flex items-center justify-between'>
                    <span className='text-2xl font-medium text-gray-900'>Friends</span>
                    <Link href={'/friends/my-friends'} className='text-xl text-primary font-medium'>See All</Link>
                </div>
                <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
                    {
                        friends?.map(user => <FriendCard cardType={'friend'} key={user?._id} user={user} />)
                    }
                </div>
            </div>
        </div>


    )
}

export default FriendsHistory