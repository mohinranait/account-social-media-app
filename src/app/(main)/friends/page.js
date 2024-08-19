
import RequiestCard from '@/components/cards/suggests/RequiestCard';
import Link from 'next/link'
import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaUserPlus } from "react-icons/fa6";




const FriendsHistory = () => {
    return (
        <div className='sm:px-4 3xl:container flex gap-5'>
            <div className='w-[400px] py-2 h-screen top-[58px] sticky bg-white'>
                <div className=''>
                    <div className='py-2 px-3  flex justify-between items-center'>
                        <span className='text-lg text-gray-700 '>Friends</span>
                    </div>
                    <ul className='px-3 py-2'>
                        <li className=''>
                            <span className='py-3 px-3  cursor-pointer text-gray-700 rounded bg-gray-100 flex items-center justify-between gap-1'>
                                <span className='flex gap-2 items-center '>
                                    <span className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center'>
                                        <LiaUserFriendsSolid size={20} />
                                    </span>
                                    Home
                                </span>
                            </span>
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
                    </ul>
                </div>
            </div>
            <div className='grow'>
                <div>
                    <div className=' py-2 flex items-center justify-between'>
                        <span className='text-2xl font-medium text-gray-900'>Friends</span>
                        <span className='text-xl text-primary font-medium'>See All</span>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />

                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />

                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />

                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />

                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />

                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />

                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                        <RequiestCard />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FriendsHistory