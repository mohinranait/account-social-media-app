'use client';
import React, { useState } from 'react'
import { IoCloseOutline, IoEarthSharp } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import PrimaryButton from '../buttons/PrimaryButton';
import { MdArrowBack } from "react-icons/md";
import { IoIosSearch } from 'react-icons/io';
import Image from 'next/image';
import { FaLock } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import AudianceStatus from '@/ui/list_forms/AudianceStatus';

const PostEditorComponent = ({ setIsOpen }) => {
    const [isSecondModal, setIsSecondModal] = useState(false)
    const [isFile, setIsFile] = useState(false)
    const [isTagModal, setIsTagModal] = useState(false)
    const [isAudienceModal, setIsAudienceModal] = useState(false)
    return (
        <div className='w-[500px] overflow-x-hidden '>
            <div className={`w-[1000px] grid grid-cols-2 items-center transition duration-75   ${isSecondModal ? '-translate-x-[500px]' : 'translate-x-[0px]'} `}>
                {/* First modal  */}
                <div className='w-[500px] bg-white'>
                    <div className=''>
                        <div className='relative  py-3 border-b'>
                            <p className='text-center text-xl font-medium'>Create post</p>
                            <span onClick={() => setIsOpen(false)} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 absolute right-3 top-[6px]'>
                                <IoCloseOutline size={20} />
                            </span>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5 p-4'>
                        <div className='flex gap-2'>
                            <img src="/image/avater/profile1.png" className='w-10 h-10 rounded-full' alt="avater" />
                            <div>
                                <p className='text-base text-gray-800 font-medium'>Mohin Rana</p>
                                <div className='flex'>
                                    <div onClick={() => {
                                        setIsSecondModal(true);
                                        setIsAudienceModal(true)
                                    }} className='flex items-center gap-1 bg-gray-100 rounded  px-2 cursor-pointer '>
                                        <IoEarthSharp size={13} />
                                        <span className='text-sm'>Public</span>
                                        <MdArrowDropDown size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea name="" id="" placeholder='Write your mind' className='w-full mb-3 min-h-8  focus-visible:outline-none' >

                            </textarea>
                            {
                                isFile && <div className='border p-2 rounded  '>
                                    <div className='py-7 relative bg-gray-100 hover:bg-gray-200 cursor-pointer'>
                                        <span onClick={() => setIsFile(false)} className='w-8 h-8  rounded-full bg-white hover:bg-gray-100 flex items-center justify-center absolute right-2 top-2'>
                                            <IoCloseOutline />
                                        </span>
                                        <div className='flex items-center justify-center'>
                                            <span className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center'>
                                                <MdAddToPhotos size={22} />
                                            </span>
                                        </div>
                                        <div className='text-gray-600 text-center text-lg font-medium'>
                                            Add Photos/Videos
                                        </div>
                                        <p className='text-xs text-center text-gray-400'>Or Drag & drop</p>
                                    </div>
                                </div>
                            }

                        </div>

                        <div className='border rounded-md flex items-center justify-between gap-2 py-2 px-4'>
                            <span className='text-gray-600 text-base cursor-pointer'>Add your post</span>
                            <ul className='flex gap-3 items-center justify-end'>
                                <li><span onClick={() => setIsFile(true)} className='w-10 h-10 cursor-pointer rounded-full bg-green-100 flex items-center justify-center'><MdAddToPhotos size={20} className='text-green-400' /></span></li>
                                <li><span onClick={() => {
                                    setIsSecondModal(true);
                                    setIsTagModal(true)
                                }} className='w-10 h-10 cursor-pointer rounded-full bg-blue-100 flex items-center justify-center'><FaUserTag size={20} className='text-blue-400' /></span></li>
                                <li><span className='w-10 h-10 cursor-pointer rounded-full bg-yellow-50 flex items-center justify-center'><BsEmojiFrown size={20} className='text-yellow-400' /></span></li>
                            </ul>
                        </div>
                        <div>
                            <PrimaryButton
                                type='button'
                                className={'w-full py-[10px]'}
                            >
                                Next
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                {/* Second modal */}
                <div className='w-[500px] bg-white rounded'>
                    {/* Tag firends modal */}
                    {
                        isTagModal &&
                        <div className=' '>
                            <div className='relative  py-3 border-b'>
                                <span onClick={() => {
                                    setIsSecondModal(false);
                                    setIsTagModal(false)
                                }} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 absolute left-3 top-[6px]'>
                                    <MdArrowBack size={20} />
                                </span>
                                <p className='text-center text-xl font-medium'>Tag people</p>
                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex w-full gap-1 items-center bg-gray-100 rounded-2xl py-2 px-2'>
                                        <IoIosSearch size={20} />
                                        <input type="text" className='w-full text-sm font-light text-gray-600  bg-transparent' placeholder='Search...' />
                                    </div>
                                    <span className='text-primary'>Done</span>
                                </div>
                                <div>
                                    <p className='text-gray-600 text-md mb-1'>Tagged</p>
                                    <ul className='flex items-center flex-wrap gap-2 border p-2 rounded-md max-h-24 overflow-y-auto '>
                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>

                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                                                <span className=' py-1'>Mohin Rana</span>
                                                <span className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                                                    <IoCloseOutline size={20} />
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className='text-gray-600 text-md mb-1'>Suggestions</p>
                                    <ul>
                                        <li>
                                            <a href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                                                <span className='relative w-10 h-10 rounded-full'>
                                                    <Image src={'/image/avater/profile1.png'} className='w-10 h-10' alt='Avater' width={40} height={40} />
                                                </span>
                                                <span className='text-gray-900'>Mohin Rana</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                                                <span className='relative w-10 h-10 rounded-full'>
                                                    <Image src={'/image/avater/profile1.png'} className='w-10 h-10' alt='Avater' width={40} height={40} />
                                                </span>
                                                <span className='text-gray-900'>Mohin Rana</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all'>
                                                <span className='relative w-10 h-10 rounded-full'>
                                                    <Image src={'/image/avater/profile1.png'} className='w-10 h-10' alt='Avater' width={40} height={40} />
                                                </span>
                                                <span className='text-gray-900'>Mohin Rana</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {/* Select post audience */}
                    {
                        isAudienceModal &&
                        <AudianceStatus setIsAudienceModal={setIsAudienceModal} setIsSecondModal={setIsSecondModal} />

                        // <div className=' '>
                        //     <div className='relative  py-3 border-b'>
                        //         <span onClick={() => {
                        //             setIsSecondModal(false);
                        //             setIsAudienceModal(false)
                        //         }} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 absolute left-3 top-[6px]'>
                        //             <MdArrowBack size={20} />
                        //         </span>
                        //         <p className='text-center text-xl font-medium'>Post Audience</p>
                        //     </div>
                        //     <div className='relative'>
                        //         <div className='h-[300px] overflow-y-auto p-4 pb-8'>
                        //             <div className='mb-3'>
                        //                 <p className='text-lg text-gray-700 font-medium'>Who can see your post?</p>
                        //                 <p className='text-gray-400 text-sm font-normal'>Your post will show up in Feed, on your profile and in search results.
                        //                     Your default audience is set to Public, but you can change the audience of this specific post.</p>
                        //             </div>

                        //             <div>
                        //                 <ul>
                        //                     <li>
                        //                         <label htmlFor='public' className='w-full  justify-between py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                        //                             <div className='flex gap-2 items-center'>
                        //                                 <span className='relative w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
                        //                                     <IoEarthSharp size={28} />
                        //                                 </span>
                        //                                 <div>
                        //                                     <p className='text-gray-900'>Public</p>
                        //                                     <p className='text-gray-400 text-sm'>Anyon on can see your post</p>
                        //                                 </div>
                        //                             </div>
                        //                             <input type="radio" id='public' name='canSeeAudience' value={'Public'} />
                        //                         </label>
                        //                     </li>
                        //                     <li>
                        //                         <label htmlFor='friends' className='w-full  justify-between py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                        //                             <div className='flex gap-2 items-center'>
                        //                                 <span className='relative w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
                        //                                     <FaUserLarge size={28} />
                        //                                 </span>
                        //                                 <div>
                        //                                     <p className='text-gray-900'>Friends</p>
                        //                                     <p className='text-gray-400 text-sm'>Only your firends can see the post</p>
                        //                                 </div>
                        //                             </div>
                        //                             <input type="radio" id='friends' name='canSeeAudience' value={'Friends'} />
                        //                         </label>
                        //                     </li>
                        //                     <li>
                        //                         <label htmlFor='onlyMe' className='w-full  justify-between py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                        //                             <div className='flex gap-2 items-center'>
                        //                                 <span className='relative w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
                        //                                     <FaLock size={28} />
                        //                                 </span>
                        //                                 <div>
                        //                                     <p className='text-gray-900'>Only me</p>
                        //                                     <p className='text-gray-400 text-sm'>This post is private, can see only you</p>
                        //                                 </div>
                        //                             </div>
                        //                             <input type="radio" id='onlyMe' name='canSeeAudience' value={'onlyMe'} />
                        //                         </label>
                        //                     </li>
                        //                 </ul>
                        //             </div>
                        //         </div>

                        //     </div>
                        //     <div className='h-14  bottom-0 bg-white w-full left-0 flex items-center justify-between border-t border-gray-100'>
                        //         <span></span>
                        //         <div className='flex justify-end items-center gap-3 px-4 pr-8'>
                        //             <PrimaryButton onClick={() => {
                        //                 setIsSecondModal(false);
                        //                 setIsAudienceModal(false)
                        //             }}
                        //                 type='button'
                        //                 color='text-primary'
                        //                 bg={'bg-primaryLight'}
                        //                 className={'px-8 '}>
                        //                 Cancel
                        //             </PrimaryButton>
                        //             <PrimaryButton type='button' className={'px-8'}>
                        //                 Done
                        //             </PrimaryButton>
                        //         </div>
                        //     </div>
                        // </div>
                    }
                </div>
            </div>



        </div>
    )
}

export default PostEditorComponent