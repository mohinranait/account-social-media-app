'use client';
import useAxios from '@/hooks/useAxios';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const FrontendChatList = ({ user }) => {
    const axios = useAxios();
    const router = useRouter();
    const handleSendMessage = async (reciverId) => {
        try {
            const res = await axios.post(`/chat/send/${reciverId}`, {})
            router.push(`/message?con=${res?.data?.convercation?._id}`)


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <li key={user?._id}>
            <div onClick={() => handleSendMessage(user?._id)} className='w-full py-2 px-3  cursor-pointer rounded flex items-center gap-2 hover:bg-gray-50 transition-all' transition-all>
                <span className='relative w-7 h-7 rounded-full'>
                    <span className='w-[6px] h-[6px] bg-green-600 inline-block rounded-full absolute -right-[2px] top-1'></span>
                    <Image src={'/image/avater/profile1.png'} className='w-7 h-7' alt='Avater' width={40} height={40} />
                </span>
                <span className='text-gray-600'>{user?.name?.fullName}</span>
            </div>
        </li>
    )
}

export default FrontendChatList