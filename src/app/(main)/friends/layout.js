'use client';
import { friendsLinks } from '@/services/Links';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { RiArrowRightSLine } from 'react-icons/ri'


const FriendLayout = ({ children }) => {

    const pathName = usePathname();

    return (
        <div className='sm:px-4 3xl:container flex gap-5'>
            <div className='hidden res95:block w-[400px] py-2 h-[calc(100vh-58px)] top-[58px] sticky bg-white'>
                <div className=''>
                    <div className='py-2 px-3  flex justify-between items-center'>
                        <span className='text-lg text-gray-700 '>Friends</span>
                    </div>
                    <ul className='px-3 flex flex-col gap-2 py-2'>
                        {
                            friendsLinks?.map((nav, idx) => {

                                return (
                                    <li key={idx} className=''>
                                        <Link href={nav?.link} className={`py-3 px-3  flex items-center justify-between gap-1 ${pathName == nav?.link ? 'bg-gray-100 text-gray-700' : 'text-gray-500 rounded hover:bg-gray-100'} `}>
                                            <span className='flex gap-2 items-center '>
                                                <span className={`w-8 h-8 rounded-full   flex items-center justify-center ${pathName == nav?.link ? 'bg-primary text-white' : 'text-gray-700 bg-gray-200'} `}>
                                                    {nav?.icon}
                                                </span>
                                                {nav?.label}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }

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