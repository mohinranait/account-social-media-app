'use client';
import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import AddFriendCard from '../AddFirend/AddFriendCard'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Link from 'next/link'
import useAxios from '@/hooks/useAxios'

const SuggestsCurd = () => {

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
        <div className='bg-white rounded'>
            <div className='flex justify-between pt-3 pb-2 px-3  '>
                <span className='text-base text-gray-600 '>More peoples</span>
                <span> <HiOutlineDotsVertical size={16} className='text-gray-600' /></span>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-1 px-3 pt-2'>
                    {
                        friendsSuggestions?.slice(0, 3)?.map(user => <AddFriendCard key={user?._id} user={user} />)
                    }
                </div>
            </div>
            <div className='px-3 pb-3 pt-2'>
                <Link href={`/friends/suggestions`}>
                    <PrimaryButton
                        type='link'
                        className={'w-full bg-transparent hover:bg-gray-50 !text-primary hover '}
                    >
                        See all
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    )
}

export default SuggestsCurd