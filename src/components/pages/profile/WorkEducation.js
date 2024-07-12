import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoEarthSharp } from 'react-icons/io5'
import { TbDots } from 'react-icons/tb'
import { FaRegFlag } from "react-icons/fa6";

const WorkEducation = () => {
    return (
        <div className='p-4 mb-5'>
            <p className='text-base  font-semibold text-gray-900'>Work</p>
            <ul className='flex flex-col mt-4 gap-5'>
                <li>
                    <div className='flex gap-4  items-center'>
                        <div>
                            <div className='w-10 h-10 rounded-full text-gray-800  flex items-center justify-center'>
                                <Image width={40} height={40} src={'/image/avater/profile1.png'} alt='avater' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <p className='text-gray-800 text-sm font-normal'>MERN stack web developer at <Link href={'/'} className='text-gray-900 font-medium hover:underline'>TS4U</Link> </p>
                            <p className='text-xs text-gray-600'>March 1, 2024 - Present·Baunia Bazar, Uttara, Dhaka</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                                <IoEarthSharp />
                            </span>
                            <span className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                                <TbDots />
                            </span>
                        </div>
                    </div>
                    <div> </div>
                </li>

                <li>
                    <div className='flex gap-4  items-center'>
                        <div>
                            <div className='w-10 h-10 rounded-full text-gray-800 bg-gray-100 flex items-center justify-center'>
                                <FaRegFlag />
                            </div>
                        </div>
                        <div className='w-full'>
                            <p className='text-gray-800 text-sm font-normal'>Works at Web Design & Web Development <Link href={'/'} className='text-gray-900 font-medium hover:underline'>TS4U</Link> </p>
                            <p className='text-xs text-gray-600'>March 1, 2024 - Present·Baunia Bazar, Uttara, Dhaka</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                                <IoEarthSharp />
                            </span>
                            <span className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                                <TbDots />
                            </span>
                        </div>
                    </div>
                    <div> </div>
                </li>

            </ul>
        </div>
    )
}

export default WorkEducation