'use client';
import AddFriendCard from '@/components/cards/AddFirend/AddFriendCard'
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
            <div className='pb-2 px-3  flex flex-col bg-white mb-2 top-[55px] sticky z-50'>
                <div className='flex items-center gap-2 pt-1 mb-1 '>
                    <span className='h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100'>
                        <FaArrowLeft size={18} />
                    </span>
                    <div className='flex flex-col '>
                        <span className='text-lg text-gray-700 font-semibold '>Suggestions Friends </span>
                        <span className='text-sm text-gray-700'>500 Friend requist</span>
                    </div>
                </div>
                <div className='bg-gray-100 py-2 px-2 flex items-center gap-2 rounded-[50px] '>
                    <span className=''><IoIosSearch size={25} className='text-gray-500' /></span>
                    <input type="text" className='w-full bg-transparent' />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>

                {
                    friendsSuggestions?.map(user => <AddFriendCard key={user?._id} user={user} />)
                }


            </div>
        </div>
    )
}

export default SuggestionFriends