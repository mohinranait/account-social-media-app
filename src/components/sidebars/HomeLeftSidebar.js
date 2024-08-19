'use client';
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { IoGameController } from "react-icons/io5";
import { PiVideo } from 'react-icons/pi';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { FaUserFriends } from "react-icons/fa";


const HomeLeftSidebar = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className='top-[75px] sticky'>

            <div className='bg-white rounded'>
                <ul className='py-3 px-3 '>
                    <li>
                        <Link href={`/${user?.profileUrl}`} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all' transition-all>
                            <span className='w-7 h-7 rounded-full '>
                                <Image src={'/image/avater/profile1.png'} className='w-7 h-7 rounded-full' height={80} width={80} alt='avater' />
                            </span>
                            <span>Mohin Rana</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <span className='w-7 h-7 rounded-full flex items-center justify-center'>
                                <RiPagesFill />
                            </span>
                            <span>Pages</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <span className='w-7 h-7 rounded-full flex items-center justify-center'>

                                <LiaLayerGroupSolid size={18} />
                            </span>
                            <span>Groups</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <span className='w-7 h-7 rounded-full flex items-center justify-center'>
                                <PiVideo size={18} />
                            </span>
                            <span>Videos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/friends'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <span className='w-7 h-7 rounded-full flex items-center justify-center'>
                                <FaUserFriends size={18} />
                            </span>
                            <span>Friends</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <span className='w-7 h-7 rounded-full flex items-center justify-center'>
                                <IoGameController size={18} />
                            </span>
                            <span>Games</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeLeftSidebar