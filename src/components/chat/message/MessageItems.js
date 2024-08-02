'use client';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const MessageItems = ({ message }) => {
    const { user } = useSelector(state => state.auth);

    return (
        <>
            {

                message?.senderId == user?._id ? <div className='flex justify-end'>
                    <div className='w-[80%] flex justify-end gap-2'>

                        <div className='bg-primary text-white px-2 py-1 rounded-md'>
                            {message?.message}

                        </div>
                        <span>
                            <div className='w-5 h-5 rounded-full'>
                                <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                            </div>
                        </span>
                    </div>
                </div> :
                    <div>
                        <div className='w-[80%] flex gap-2'>
                            <span>
                                <div className='w-5 h-5 rounded-full'>
                                    <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                </div>
                            </span>
                            <div className='bg-purple-500 text-sm text-white  backdrop-filter px-2 py-1 rounded-md'>
                                {message?.message}
                            </div>
                        </div>
                    </div>

            }



        </>
    )
}

export default MessageItems