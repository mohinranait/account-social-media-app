
'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaUserCheck } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

import ProfileMenus from '@/components/pages/profile/ProfileMenus';

import { ProfileContext } from '@/provider/ProfileProvider';

const ProfileLayout = ({ children }) => {
    const { profile } = useContext(ProfileContext);
    return (
        <div className='mt-4'>
            <div className='  res10:w-[950px] bg-white rounded-md mx-auto'>
                <div className='bg-gray-200 h-[300px] '>
                    asdf
                </div>
                <div className='-mt-7 flex flex-col res7:flex-row justify-between res7:items-end px-10'>
                    <div className='flex flex-col items-center res5:flex-row res5:items-end gap-3'>
                        <div >
                            <span className='w-[150px] h-[150px] rounded-full bg-white inline-block'>
                                <Image className='w-[150px] h-[150px] p-1' src={'/image/avater/profile1.png'} width={150} height={150} alt='avater' />
                            </span>
                        </div>
                        <div className='flex flex-col mb-2 gap-1'>
                            <h1 className='text-3xl text-center res5:text-left font-semibold text-gray-900'>{profile?.name?.fullName}</h1>
                            <div className='flex gap-1 items-center'>
                                <Link href={'/'} className='text-gray-500 text-sm inline-block'>120k  Followrs</Link>
                                <span className='w-1 h-1 rounded-full bg-gray-400 inline-block'></span>
                                <Link href={'/'} className='text-gray-500 text-sm inline-block'>120k  Following</Link>
                            </div>
                            <ul className='flex justify-center res5:justify-start '>
                                <li className='w-10 h-10 rounded-full bg-white'>
                                    <Link href={'/'}>
                                        <Image className='w-10 h-10 p-[2px] rounded-full' width={40} height={40} alt='avater' src={'/image/avater/profile1.png'} />
                                    </Link>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-white -ml-4'>
                                    <Link href={'/'}>
                                        <Image className='w-10 h-10 p-[2px] rounded-full' width={40} height={40} alt='avater' src={'/image/avater/profile1.png'} />
                                    </Link>
                                </li>
                                <li className='w-10 h-10 rounded-full bg-white -ml-4'>
                                    <Link href={'/'}>
                                        <Image className='w-10 h-10 p-[2px] rounded-full' width={40} height={40} alt='avater' src={'/image/avater/profile1.png'} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center res5:justify-start mb-2  gap-2'>
                        <PrimaryButton>
                            <span className='flex gap-1 items-center'>
                                <FaUserCheck size={18} />
                                Add friend
                            </span>
                        </PrimaryButton>
                        <PrimaryButton>
                            <span className='flex gap-1 items-center'>
                                <FaFacebookMessenger size={18} />
                                Message
                            </span>
                        </PrimaryButton>
                    </div>
                </div>
                <hr />
                <ProfileMenus />
            </div>

            {children}

        </div>
    )
}

export default ProfileLayout