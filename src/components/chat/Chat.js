'use client';
import React, { useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { FaCamera, FaImage, FaVoicemail } from "react-icons/fa";
import PrimaryButton from '../buttons/PrimaryButton';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";

const Chat = ({ setIsDetails, isDetails }) => {
    const [isEmoji, setIsEmoji] = useState(false)

    // handle emoji 
    const handleEmoji = (e) => {
        console.log(e?.emoji);
        setIsEmoji(false)
    }
    return (
        <div className={`chat  h-full  flex-col border-l border-r border-gray-200 ${isDetails ? 'hidden' : 'hidden res8:flex'} `} >
            <div className='top'>
                <div className='h-[60px] border-b border-gray-200 flex items-center justify-between px-4 bg-white'>
                    <div className='flex gap-2'>
                        <span className='w-9 h-9 inline-block relative rounded-full '>
                            <span className='w-[6px] h-[6px] rounded-full absolute bg-green-500 right-0 top-[8px]'></span>
                            <img src="/image/avater/profile1.png" className='w-9 h-9 rounded-full' alt="avater" />
                        </span>
                        <div>
                            <p className='tex-base font-medium text-gray-700'>Mohin Rana</p>
                            <p className='text-xs text-gray-400'>5h ago</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <span>
                            <FiPhoneCall className='text-primary' />
                        </span>
                        <span onClick={() => setIsDetails(true)} >
                            <HiOutlineDotsHorizontal size={20} className='text-primary' />
                        </span>
                    </div>
                </div>
            </div>
            <div className="center overflow-y-scroll bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/image/theme/theme.png')`, }}>
                <div className='h-full '>
                    <div className='px-4 flex flex-col gap-4 py-5 '>
                        <div>
                            <div className='w-[80%] flex gap-2'>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                                <div className='bg-purple-500 text-sm text-white  backdrop-filter px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-[80%] flex gap-2'>

                                <div className='bg-primary text-white px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className='w-[80%] flex gap-2'>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                                <div className='bg-purple-500 text-sm text-white  backdrop-filter px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-[80%] flex gap-2'>

                                <div className='bg-primary text-white px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className='w-[80%] flex gap-2'>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                                <div className='bg-purple-500 text-sm text-white  backdrop-filter px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-[80%] flex gap-2'>

                                <div className='bg-primary text-white px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className='w-[80%] flex gap-2'>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                                <div className='bg-purple-500 text-sm text-white  backdrop-filter px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-[80%] flex gap-2'>

                                <div className='bg-primary text-white px-2 py-1 rounded-md'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                </div>
                                <span>
                                    <div className='w-5 h-5 rounded-full'>
                                        <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                    </div>
                                </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="mt-auto flex gap-2 items-center p-3 relative">

                <div className='flex gap-2'>
                    <span className='w-7 h-7 cursor-pointer rounded-full flex items-center justify-center'>
                        <FaImage />
                    </span>
                    <span className='w-7 h-7 cursor-pointer rounded-full flex items-center justify-center'>
                        <FaCamera />
                    </span>
                    <div className='emoji w-7 h-7 cursor-pointer rounded-full flex items-center justify-center relative'>
                        <span onClick={() => setIsEmoji(prev => !prev)}>
                            <MdOutlineEmojiEmotions size={18} />
                        </span>
                        <div className='picker'>
                            <EmojiPicker open={isEmoji} onEmojiClick={handleEmoji} />
                        </div>
                    </div>
                </div>
                {/* <textarea name="" id="" className='flex-1 bg-gray-200 rounded-3xl py-2 px-3'></textarea> */}
                <input type="text" className='flex-1 bg-gray-200 rounded-3xl py-2 px-3' placeholder='Message' />
                <PrimaryButton type='button'>
                    Send
                </PrimaryButton>

            </div>

        </div>
    )
}

export default Chat