'use client';
import useAxios from '@/hooks/useAxios'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import ConversationItem from './create-chat/ConversationItem';
import { fetchAllConversation } from '@/redux/chat/convercationSlice';

const ChatList = () => {
    const { user } = useSelector(state => state.auth)
    const { conversations } = useSelector(state => state.convercation)



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllConversation({ user }))
    }, [])
    return (
        <div className='lists bg-white h-full flex flex-col'>
            <div className='h-[60px] border-b border-gray-200 flex justify-between px-4 items-center bg-gray-50'>
                <div>
                    <span className='w-9 h-9 inline-block relative rounded-full '>
                        <span className='w-1 h-1 rounded-full absolute bg-green-500 right-0 top-[10px]'></span>
                        <img src="/image/avater/profile1.png" className='w-9 h-9 rounded-full' alt="avater" />
                    </span>
                </div>
                <div>
                    <FaPlus />
                </div>
            </div>


            <div className=' px-4 my-3'>
                <div>
                    <div className='flex gap-1 items-center bg-gray-100 rounded py-2 px-2'>
                        <IoIosSearch size={20} />
                        <input type="text" className='w-full text-sm font-light text-gray-600  bg-transparent' placeholder='Search...' />
                    </div>
                </div>
            </div>
            <ul className='chat_lists flex-1 flex flex-col overflow-y-auto'>
                {
                    conversations?.map(conver => <ConversationItem key={conver?._id} convercation={conver} conversations={conversations} />)
                }
            </ul>


        </div>
    )
}

export default ChatList