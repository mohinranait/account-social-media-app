import Link from 'next/link'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { RiArrowRightSLine } from 'react-icons/ri'

const FriendLayout = ({ children }) => {
    return (
        <div className='sm:px-4 3xl:container flex gap-5'>
            <div className='w-[400px] py-2 h-[calc(100vh-58px)] top-[58px] sticky bg-white'>
                <div className=''>
                    <div className='py-2 px-3  flex justify-between items-center'>
                        <span className='text-lg text-gray-700 '>Friends</span>
                    </div>
                    <ul className='px-3 py-2'>
                        <li className=''>
                            <Link href={'/friends'} className='py-3 px-3  cursor-pointer text-gray-700 rounded bg-gray-100 flex items-center justify-between gap-1'>
                                <span className='flex gap-2 items-center '>
                                    <span className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                        <LiaUserFriendsSolid size={20} />
                                    </span>
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className=''>
                            <Link href={'/friends/lists'} className='py-3 px-3 text-gray-700 rounded hover:bg-gray-100 flex items-center justify-between gap-1'>

                                <span className='flex gap-2 items-center '>
                                    <span className='w-8 h-8 rounded-full  text-gray-700 bg-gray-200 flex items-center justify-center'>
                                        <FaUserPlus size={18} />
                                    </span>
                                    Friend requist
                                </span>
                                <RiArrowRightSLine />
                            </Link>
                        </li>
                        <li className=''>
                            <Link href={'/friends/suggestions'} className='py-3 px-3 text-gray-700 rounded hover:bg-gray-100 flex items-center justify-between gap-1'>

                                <span className='flex gap-2 items-center '>
                                    <span className='w-8 h-8 rounded-full  text-gray-700 bg-gray-200 flex items-center justify-center'>
                                        <FaUserPlus size={18} />
                                    </span>
                                    Suggestions
                                </span>
                                <RiArrowRightSLine />
                            </Link>
                        </li>
                        <li className=''>
                            <Link href={'/friends/following'} className='py-3 px-3 text-gray-700 rounded hover:bg-gray-100 flex items-center justify-between gap-1'>

                                <span className='flex gap-2 items-center '>
                                    <span className='w-8 h-8 rounded-full  text-gray-700 bg-gray-200 flex items-center justify-center'>
                                        <FaUserPlus size={18} />
                                    </span>
                                    Following
                                </span>
                                <RiArrowRightSLine />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='grow'>
                {children}
            </div>
        </div>
    )
}

export default FriendLayout