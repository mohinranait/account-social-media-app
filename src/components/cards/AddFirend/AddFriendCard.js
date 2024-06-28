import Link from 'next/link'
import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";

const AddFriendCard = () => {
    return (
        <div className='px-1 py-1 shadow rounded'>
            <div className='h-[50px] bg-gray-100 rounded relative'>
                <span className='absolute right-1 top-1 w-6 h-6 rounded-full bg-gray-500 bg-opacity-15 cursor-pointer flex items-center justify-center'><IoCloseOutline /></span>
            </div>
            <div className='-mt-4 px-1 relative'>
                <div className='flex gap-1  items-end'>
                    <img src="/image/avater/profile1.png" height={45} width={45} className='' alt="avater" />
                    <div>
                        <Link href={'/'} className='text-gray-800 text-sm'>Mohin Rana</Link>

                    </div>
                </div>
                <div className='flex flex-col mb-3'>
                    <p className='text-gray-400 text-xs mb-2'>Content creator</p>
                    <div className='flex gap-1 items-center'>
                        <div className='flex'>
                            <span className='w-4 h-4 rounded-full bg-gray-500'>
                                <img src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                            <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px]'>
                                <img src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                            <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px]'>
                                <img src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                        </div>
                        <div className='text-gray-500 text-sm'>
                            3 Mutuals
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-1 border-t border-gray-100 text-center'>
                <span className='flex gap-1 py-2 rounded  items-center justify-center cursor-pointer text-sm text-primary bg-primaryLight'> <FaUserPlus /> Add Firend</span>
            </div>
        </div>
    )
}

export default AddFriendCard