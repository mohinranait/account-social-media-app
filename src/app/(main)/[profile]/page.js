import PostCard from '@/components/cards/PostCard';
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiCircleInfo } from "react-icons/ci";
import { IoHeartSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';



const ProfilePage = () => {
    return (

        <div className='px-2 res5:w-[500px] res7:w-[600px] res9:w-[870px] res10:w-[950px]  grid res9:grid-cols-[350px,auto] gap-4 mx-auto mt-4  res10:px-10' >
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
                            <li className='flex items-center gap-2'>
                                <Link href={'/'} className='py-1 w-full rounded-md inline-block px-3 text-center bg-gray-100 hover:bg-gray-200'>Edit Details</Link>
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
    )
}

export default ProfilePage