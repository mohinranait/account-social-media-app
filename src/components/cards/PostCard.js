import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiTimer } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoEarthSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { GoComment } from "react-icons/go";

const PostCard = () => {
    return (
        <div className=' rounded  bg-white'>
            <div className='flex justify-between  pt-3 pb-2 px-3'>
                <div className='flex justify-between gap-3'>
                    <Image src={'/image/avater/profile1.png'} width={50} height={50} alt='avater' />
                    <div>
                        <Link href={'/'} className='text-sm'>
                            Mohin Rana
                        </Link>
                        <div className='flex gap-1 items-center'>
                            <CiTimer size={12} />
                            <span className='text-xs font-normal text-gray-500'>11 Jun, 2024</span>
                            <IoEarthSharp className='text-gray-500' size={13} />
                        </div>
                    </div>
                </div>
                <div>
                    <>
                        <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-50 cursor-pointer '>
                            <HiOutlineDotsVertical size={16} />
                        </span>
                    </>
                </div>
            </div>
            <div>
                <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/448766134_2549886571873431_5216018630776348321_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFLaS54VeB0b9N2qpw_vXlRWtO0qkBP0j5a07SqQE_SPvxktQRGSBKapyuiAANjZk4mViiLfSkgBlajd40e1icb&_nc_ohc=JZij8_bMu6EQ7kNvgHwe1Ro&_nc_ht=scontent.fdac7-1.fna&oh=00_AYD5ByTPHo6pTGGcyWoWZfyZRPaa47gzY75y0O9bXY__DQ&oe=6680C191" alt="" />
            </div>

            <div className='py-3 px-3'>
                <ul className='flex gap-5 items-center justify-center'>
                    <li className='w-full'>
                        <a href="#" className='flex justify-center py-[5px] px-4 hover:bg-gray-300 rounded-sm items-center gap-1'>
                            <AiOutlineLike className='text-gray-500' />
                            <span className='text-sm text-gray-500'>Like</span>
                        </a>
                    </li>
                    <li className='w-full'>
                        <a href="#" className='flex justify-center py-[5px] px-4 hover:bg-gray-50 rounded-sm items-center gap-1'>
                            <GoComment className='text-gray-500' />
                            <span className='text-sm text-gray-500'>Comment</span>
                        </a>
                    </li>
                    <li className='w-full'>
                        <a href="#" className='flex justify-center py-[5px] px-4 hover:bg-gray-300 rounded-sm items-center gap-1'>
                            <PiShareFatThin className='text-gray-500' />
                            <span className='text-sm text-gray-500'>Share</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default PostCard