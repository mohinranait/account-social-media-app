'use client';
import AddFriendCard from '@/components/cards/AddFirend/AddFriendCard'
import FriendsHeaderSection from '@/components/friends/FriendsHeaderSection';
import useAxios from '@/hooks/useAxios'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'

const SuggestionFriends = () => {

    const axios = useAxios();
    const [friendsSuggestions, setFriendSuggestions] = useState([])



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
        <div>
            <FriendsHeaderSection data={friendsSuggestions} title="Suggestions Friends" subTitle={'You may know '} />
            <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
                {
                    friendsSuggestions?.map(user => <AddFriendCard key={user?._id} user={user} />)
                }
            </div>
        </div>
    )
}

export default SuggestionFriends