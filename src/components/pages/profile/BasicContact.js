import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'
import { TbDots } from 'react-icons/tb'
import { MdOutlineEmail } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import SocialListForm from '@/ui/list_forms/SocialListForm';
import WebsiteListForm from '@/ui/list_forms/WebsiteListForm';

const BasicContact = () => {
    return (
        <div className='mb-5'>
            <div className='p-4'>
                <p className='text-gray-950 text-base font-medium'>Contact Info</p>
                <ul className='flex flex-col gap-5 mt-4'>
                    <li>
                        <div className='flex gap-4  items-center'>
                            <div>
                                <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                    <FaPhoneAlt size={24} className='text-gray-700' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-700 flex gap-[3px]'>
                                    01728068200

                                </p>
                                <p className=' text-gray-600 text-xs '>Phone</p>
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
                    <li>
                        <div className='flex gap-4  items-center'>
                            <div>
                                <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                    <MdOutlineEmail size={24} className='text-gray-700' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-700 flex gap-[3px]'>
                                    ebrahim@gmail.com
                                </p>
                                <p className=' text-gray-600 text-xs '>Email</p>
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
            </div>
            <div className='p-4'>
                <p className='text-gray-950 text-base font-medium'>Websites and social links</p>
                <ul className='flex flex-col gap-5 mt-3'>
                    <WebsiteListForm />
                    <SocialListForm />
                </ul>
            </div>

            <div className='p-4'>
                <p className='text-gray-950 text-base font-medium'>Basic</p>
                <ul className='flex flex-col  gap-5 mt-3'>

                    <li>
                        <div className='flex gap-4  items-center'>
                            <div>
                                <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                    <FaUser size={24} className='text-gray-700' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-700 flex gap-[3px]'>
                                    Male
                                </p>
                                <p className=' text-gray-600 text-xs '>Gender</p>
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
                    <li>
                        <div className='flex gap-4  items-center'>
                            <div>
                                <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                    <FaBirthdayCake size={24} className='text-gray-700' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-700 flex gap-[3px]'>
                                    22 October,
                                </p>
                                <p className=' text-gray-600 text-xs '>Birth Date</p>
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
                    <li>
                        <div className='flex gap-4  items-center'>
                            <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-700 flex gap-[3px]'>
                                    2024
                                </p>
                                <p className=' text-gray-600 text-xs '>Birth Year</p>
                            </div>
                        </div>
                        <div></div>
                    </li>
                </ul>
            </div>

            <div className='p-4'>
                <p className='text-gray-950 text-base font-medium'>Category</p>
                <ul className='flex flex-col  gap-5 mt-3'>

                    <li>
                        <div className='flex gap-4  items-center'>
                            <div>
                                <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                    <TbCategoryFilled size={24} className='text-gray-700' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-700 flex gap-[3px]'>
                                    Web Design
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
            </div>
        </div >
    )
}

export default BasicContact