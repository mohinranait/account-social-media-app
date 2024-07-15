import React from 'react'
import { BiBox } from "react-icons/bi";
import { TbDots } from "react-icons/tb";
import { IoEarthSharp, IoHeartSharp, IoLocationSharp } from "react-icons/io5";
import Link from 'next/link';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import UpdateRelation from '@/ui/list_forms/UpdateRelation';
import UpdateHomeTown from '@/ui/list_forms/UpdateHomeTown';
import UpdateCurrentCity from '@/ui/list_forms/UpdateCurrentCity';

const Overview = () => {

    return (
        <ul className='flex flex-col p-4 gap-5'>
            <li>
                <div className='flex gap-4  items-center'>
                    <div>
                        <div className='w-10 h-10 rounded-full text-gray-800  flex items-center justify-center'>
                            <BiBox size={28} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='text-gray-800 text-sm font-normal'>Works at Facebook, <Link href={'/'} className='text-gray-900 font-medium hover:underline'>TS4U</Link> and Web Design & Web Development</p>
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

            <UpdateCurrentCity />
            <UpdateHomeTown />
            <UpdateRelation />
            <li>
                <div className='flex gap-4  items-center'>
                    <div>
                        <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                            <FaPhoneAlt size={28} className='text-gray-700' />
                        </div>
                    </div>
                    <div className='w-full'>

                        <p className='text-gray-500 flex gap-[3px]'>
                            01728068200
                            {/* <span className=' text-gray-900'>Barishal</span> */}
                        </p>

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
                <div></div>
            </li>
        </ul>
    )
}

export default Overview