'use client';
import React, { useState } from 'react'
import Modal from '../modals/Modal'
import { FaCross } from 'react-icons/fa';
import PrimaryButton from '../buttons/PrimaryButton';
import { IoCloseOutline } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { CiTimer } from 'react-icons/ci';
import StatusIcon from '@/ui/StatusIcon';

const PostCommentComponent = ({ children, post }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <li onClick={() => setIsOpenModal(true)} className='w-full'>
            {children}
            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
                <div className='bg-white rounded w-full res8:w-[600px]  shadow'>
                    <div className='py-2 px-3 flex items-center justify-between border-b border-gray-100'>
                        <p className='text-lg font-medium text-gray-700'>All Comment</p>
                        <span onClick={() => setIsOpenModal(false)} className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200'>
                            <IoCloseOutline />
                        </span>
                    </div>
                    <div className='py-2 px-3 h-[400px] overflow-y-auto'>
                        <div className='flex justify-between  pt-3 pb-2 px-3'>
                            <div className='flex justify-between gap-3'>
                                <Image src={'/image/avater/profile1.png'} width={50} height={50} alt='avater' />
                                <div>
                                    <Link href={`${post?.owner?.profileUrl}`} className='text-sm'>
                                        {post?.owner?.name?.fullName}
                                    </Link>
                                    <div className='flex gap-1 '>
                                        <CiTimer size={12} />
                                        <span className='text-xs font-normal text-gray-500'>11 Jun, 2024</span>

                                        <StatusIcon status={post?.status} size={13} css='text-gray-500' />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='s pb-2 pt-1'>
                            <p className='text-gray-700 text-sm'>{post?.text}</p>
                        </div>
                        <div>
                            <Image width={1000} height={1000} src="/image/background/auth-bg.webp" alt="img" />
                        </div>

                        <ul className='flex flex-col gap-5 mt-3'>
                            <li className='flex gap-4 relative before:w-[1px] before:h-[calc(100%-63px)] before:bg-gray-800 before:absolute before:top-0 before:left-[24px]'>
                                <div>
                                    <div className='w-12 h-12 rounded-full relative z-10'>
                                        <Image width={36} height={36} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                    </div>
                                </div>
                                <ul className='flex flex-col gap-3'>
                                    {/* Primary comment */}
                                    <li>
                                        <div className='w-full'>
                                            <p className='p-1 rounded inline-block bg-gray-50 text-sm text-gray-800'>Primary comment Lorem  accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>

                                    {/* Reply */}
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded inline-block bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet  accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                            <li className='flex gap-4 relative before:w-[1px] before:h-[calc(100%-63px)] before:bg-gray-800 before:absolute before:top-0 before:left-[24px]'>
                                <div>
                                    <div className='w-12 h-12 rounded-full relative z-10'>
                                        <Image width={36} height={36} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                    </div>
                                </div>
                                <ul className='flex flex-col gap-3'>
                                    <li>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                            <li className='flex gap-4 relative before:w-[1px] before:h-[calc(100%-63px)] before:bg-gray-800 before:absolute before:top-0 before:left-[24px]'>
                                <div>
                                    <div className='w-12 h-12 rounded-full relative z-10'>
                                        <Image width={36} height={36} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                    </div>
                                </div>
                                <ul className='flex flex-col gap-3'>
                                    <li>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex gap-2 before:w-[37px] before:h-[10px]  before:border-b before:border-l before:border-gray-800 before:rounded-[0_0_0_30px] relative before:absolute before:-left-[40px] before:top-0'>
                                        <div>
                                            <div className='w-5 h-5 rounded-full'>
                                                <Image width={20} height={20} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <p className='p-1 rounded bg-gray-50 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus?</p>
                                            <div className='flex gap-3'>
                                                <span className='text-gray-600 text-xs'>like</span>
                                                <span className='text-gray-600 text-xs'>Reply</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>

                    {/* Comment area */}
                    <div className='px-3 py-2 flex gap-4 items-start'>
                        <div>
                            <div className='w-12 h-12 rounded-full'>
                                <Image width={36} height={36} className='w-full h-full object-cover' src="/image/avater/profile1.png" alt="avater" />
                            </div>
                        </div>
                        <div className='w-full'>
                            <textarea name="" className='w-full bg-gray-200 p-2 rounded' placeholder='Comment...' rows={2} id=""></textarea>
                            <div className=''>
                                <PrimaryButton
                                    type='submit'
                                >
                                    Send
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </li>
    )
}

export default PostCommentComponent