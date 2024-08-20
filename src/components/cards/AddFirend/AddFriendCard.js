'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import Image from 'next/image';
import useAxios from '@/hooks/useAxios';

const AddFriendCard = ({ user }) => {
    const axios = useAxios();
    const [isLoading, setIsLoading] = useState(false)
    const { _id, name, profileImage } = user || {}
    const [sendRequest, setSendRequest] = useState(null)
    console.log(sendRequest);

    // handle friend request
    const handleAddRequest = async (userId) => {
        console.log('adf');

        try {

            setIsLoading(true)
            let res = await axios.post(`/invitation/send?reciverId=${userId}`, {})
            console.log(res?.data);
            if (res?.data?.success) {
                setSendRequest(res?.data?.payload?.invitation)
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
        }
    }

    // handle remove firend request
    const removeRequest = async () => {
        try {
            setIsLoading(true)
            let res = await axios.delete(`/invitation/delete/${sendRequest?._id}`)
            if (res?.data?.success) {
                setSendRequest(null)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
        }
    }


    return (
        <div className='px-1 py-1 shadow rounded bg-white'>
            <div className='h-[50px] bg-gray-100 rounded relative'>
                <span className='absolute right-1 top-1 w-6 h-6 rounded-full bg-gray-500 bg-opacity-15 cursor-pointer flex items-center justify-center'><IoCloseOutline /></span>
            </div>


            <div className='-mt-4 px-1 relative'>
                <div className='flex gap-1  items-end'>
                    <Image src={profileImage?.fileUrl || "/image/avater/profile1.png"} height={45} width={45} className='w-[45px] h-[45px] rounded-full' alt="avater" />
                    <div>
                        <Link href={'/'} className='text-gray-800 text-sm'>{name?.fullName}</Link>

                    </div>
                </div>
                <div className='flex flex-col mb-3'>
                    <p className='text-gray-400 text-xs mb-2'>Content creator</p>
                    <div className='flex gap-1 items-center'>
                        <div className='flex'>
                            <span className='w-4 h-4 rounded-full bg-gray-500'>
                                <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                            <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px]'>
                                <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                            <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px]'>
                                <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                        </div>
                        <div className='text-gray-500 text-sm'>
                            3 Mutuals
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-1 border-t border-gray-100 text-center'>
                {
                    sendRequest?.requestStatus == 'pending' ? <button onClick={() => removeRequest()} disabled={isLoading} className='flex w-full gap-1 py-2 rounded  items-center justify-center cursor-pointer text-sm text-gray-800 bg-gray-200'>Cancel request</button>
                        : <button onClick={() => handleAddRequest(_id)} disabled={isLoading} className='flex w-full gap-1 py-2 rounded  items-center justify-center cursor-pointer text-sm text-primary bg-primaryLight'> <FaUserPlus /> Add Firend</button>

                }

            </div>
        </div>
    )
}

export default AddFriendCard