'use client';
import useAxios from '@/hooks/useAxios';
import { addConvercation } from '@/redux/chat/chatSlice';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ConversationItem = ({ convercation, conversations }) => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const conversationId = searchParams?.get('con');





    // conversation information formate method
    const conversationInfo = (convercation) => {

        if (convercation?.creatorId?._id === user?._id) {
            return convercation?.otherId
        } else {
            return convercation?.creatorId
        }
    }


    // Selected convercation 
    const handleOpenConvercation = (convId) => {
        dispatch(addConvercation(conversationInfo(convercation)))
        router.push(`/message?con=${convId}`)

    }


    // Selected confercation will fixed after reload 
    useEffect(() => {
        let convercation = conversations?.find(x => x?._id == conversationId)
        dispatch(addConvercation(conversationInfo(convercation)))
    }, [conversationId])



    return (
        <li onClick={() => handleOpenConvercation(convercation?._id)} className='py-3 cursor-pointer hover:bg-gray-100 px-4'>
            <div className='flex justify-between gap-1'>
                <div className='flex gap-2'>
                    <span className='w-10 h-10 rounded-full relative'>
                        <span className='h-2 w-2 rounded-full bg-green-500 top-2 ring-2 ring-white -right-[2px] absolute'></span>
                        <img src="/image/avater/profile1.png" className='w-10 h-10 rounded-full ' alt="avater" />
                    </span>
                    <div>
                        <p className='text-base font-medium text-gray-800'>{conversationInfo(convercation).name?.firstName}</p>
                        <p className='text-gray-500 text-xs'>Agamai kalk brisho</p>
                    </div>
                </div>
                <div>
                    <p className='text-xs font-normal text-right text-gray-500'>4h ago</p>
                    <p className=' text-right'>
                        <span className=' text-[10px] px-1 py-[2px] inline-block rounded-full bg-primary text-white leading-3'>
                            5
                        </span>
                    </p>
                </div>
            </div>
        </li>
    )
}

export default ConversationItem