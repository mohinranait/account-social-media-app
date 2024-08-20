
'use client';
import AddFriendCard from '@/components/cards/AddFirend/AddFriendCard';
import FriendCard from '@/components/cards/friendCard/FriendCard';
import RequiestCard from '@/components/cards/suggests/RequiestCard';
import useAxios from '@/hooks/useAxios';


import React, { useEffect, useState } from 'react'





const FriendsHistory = () => {
    const axios = useAxios();
    const [friends, setFriends] = useState([])
    const [friendsSuggestion, setFriendSuggestion] = useState([])



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

        <div className='flex flex-col gap-5'>
            <div className=''>
                <div className=' py-2 flex items-center justify-between'>
                    <span className='text-2xl font-medium text-gray-900'>Friends</span>
                    <span className='text-xl text-primary font-medium'>See All</span>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        friends?.map(user => <FriendCard cardType={'friend'} key={user?._id} user={user} />)
                    }
                </div>
            </div>

            {/* <div className=''>
                <div className=' py-2 flex items-center justify-between'>
                    <span className='text-2xl font-medium text-gray-900'>Suggestions</span>
                    <span className='text-xl text-primary font-medium'>See All</span>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        friendsRequists?.map(user => <AddFriendCard key={user?._id} user={user} />)
                    }
                </div>
            </div> */}
        </div>


    )
}

export default FriendsHistory