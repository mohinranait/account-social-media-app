'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUserCheck } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import PostCard from '@/components/cards/PostCard';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiCircleInfo } from "react-icons/ci";
import { IoHeartSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { useRouter } from 'next/navigation';



const UserProfile = () => {
    const router = useRouter()



    return (
        <>
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
                                <h1 className='text-3xl text-center res5:text-left font-semibold text-gray-900'>Mohin Rana</h1>
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
                    <div className='flex items-center justify-center res5:justify-between px-10'>
                        <ul className='flex items-center py-1 gap-3'>
                            <li><Link href={'/'} className='text-base text-gray-500 px-2 res5:px-4  py-2'>Posts</Link></li>
                            <li><Link href={'/'} className='text-base text-gray-500 px-2 res5:px-4  py-2'>About</Link></li>
                            <li><button className='text-base text-gray-500 px-2 res5:px-4  py-2'>Photos</button></li>
                            <li><button className='text-base text-gray-500 px-2 res5:px-4  py-2'>Firends</button></li>
                        </ul>
                        <div>
                            more
                        </div>
                    </div>
                </div>

                <div className='px-2 res5:w-[500px] res7:w-[600px] res9:w-[870px] res10:w-[950px]  grid res9:grid-cols-[350px,auto] gap-4 mx-auto mt-4  res10:px-10'>
                    <div className=''>
                        <div className='flex flex-col gap-4 top-[70px] sticky'>
                            <div className='p-3 py-3 bg-white rounded '>
                                <div>
                                    <p className='text-gray-500 text-xl font-semibold'>Into</p>
                                </div>
                                <ul className='flex flex-col gap-3 mt-4'>
                                    <li className='flex items-center gap-2'>
                                        <CiCircleInfo size={20} className='text-gray-600' />
                                        <div>
                                            <p className='text-gray-500 flex gap-[3px]'>
                                                <span className=' text-gray-900'>Profile</span>
                                                <Link href={'/'} className='hover:underline'>Digital creator</Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <LiaBirthdayCakeSolid size={20} className='text-gray-600' />
                                        <div>
                                            <p className='text-gray-500 flex gap-[3px]'>
                                                Birthday
                                                <span className=' text-gray-900'>20 Jun, 2024</span>

                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <IoHome size={20} className='text-gray-600' />
                                        <div>
                                            <p className='text-gray-500 flex gap-[3px]'>
                                                Live in
                                                <span className=' text-gray-900'>Bangladesh </span>

                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <IoLocationSharp size={20} className='text-gray-600' />
                                        <div>
                                            <p className='text-gray-500 flex gap-[3px]'>
                                                From
                                                <span className=' text-gray-900'>Barishal</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <IoHeartSharp size={20} className='text-gray-600' />
                                        <div>
                                            <p className='text-gray-500 flex gap-[3px]'>
                                                Single
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='p-3 py-3 bg-white rounded '>
                                <div className='flex justify-between'>
                                    <p className='text-gray-500 text-xl font-semibold'>Photos</p>
                                    <span className='cursor-pointer text-primary hover:underline font-medium'>See all photos</span>
                                </div>
                                <ul className='grid grid-cols-3 gap-[4px] mt-4'>
                                    <li className='flex flex-col items-center mb-2 gap-2'>
                                        <Link href={'/'}>
                                            <div className='relative'>
                                                <span className='w-full h-full hover:bg-black transition-all opacity-5 inline-block absolute top-0 left-0'></span>
                                                <Image src={'/image/user/img1.jpg'} className=' rounded' width={1000} height={1000} alt='avater' />
                                            </div>
                                            <p className='text-[11px] text-gray7400 hover:underline font-normal'>Aksf sakfj</p>
                                        </Link>
                                    </li>
                                    <li className='flex flex-col items-center mb-2 gap-2'>
                                        <Link href={'/'}>
                                            <div className='relative'>
                                                <span className='w-full h-full hover:bg-black transition-all opacity-5 inline-block absolute top-0 left-0'></span>
                                                <Image src={'/image/user/img1.jpg'} className=' rounded' width={1000} height={1000} alt='avater' />
                                            </div>
                                            <p className='text-[11px] text-gray7400 hover:underline font-normal'>Aksf sakfj</p>
                                        </Link>
                                    </li>
                                    <li className='flex flex-col items-center mb-2 gap-2'>
                                        <Link href={'/'}>
                                            <div className='relative'>
                                                <span className='w-full h-full hover:bg-black transition-all opacity-5 inline-block absolute top-0 left-0'></span>
                                                <Image src={'/image/user/img1.jpg'} className=' rounded' width={1000} height={1000} alt='avater' />
                                            </div>
                                            <p className='text-[11px] text-gray7400 hover:underline font-normal'>Aksf sakfj</p>
                                        </Link>
                                    </li>
                                    <li className='flex flex-col items-center mb-2 gap-2'>
                                        <Link href={'/'}>
                                            <div className='relative'>
                                                <span className='w-full h-full hover:bg-black transition-all opacity-5 inline-block absolute top-0 left-0'></span>
                                                <Image src={'/image/user/img1.jpg'} className=' rounded' width={1000} height={1000} alt='avater' />
                                            </div>
                                            <p className='text-[11px] text-gray7400 hover:underline font-normal'>Aksf sakfj</p>
                                        </Link>
                                    </li>
                                    <li className='flex flex-col items-center mb-2 gap-2'>
                                        <Link href={'/'}>
                                            <div className='relative'>
                                                <span className='w-full h-full hover:bg-black transition-all opacity-5 inline-block absolute top-0 left-0'></span>
                                                <Image src={'/image/user/img1.jpg'} className=' rounded' width={1000} height={1000} alt='avater' />
                                            </div>
                                            <p className='text-[11px] text-gray7400 hover:underline font-normal'>Aksf sakfj</p>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-4'>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile