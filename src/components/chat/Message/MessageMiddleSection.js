'use client';
import React, { useEffect, useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const MessageMiddleSection = ({ isRightSidebar, setIsRightSidebar }) => {
    const [chatBodyHeight, setChatBodyHeight] = useState(0)

    useEffect(() => {
        const calculateChatBodyHeight = () => {
            const windowHeight = window.innerHeight;
            const chatBodyHeight = windowHeight - 156; // Adjust as needed based on your layout
            setChatBodyHeight(chatBodyHeight);
            console.log(chatBodyHeight);
        };

        // Call the function initially
        calculateChatBodyHeight();

        // Attach event listener to recalculate height if window is resized
        window.addEventListener('resize', calculateChatBodyHeight);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateChatBodyHeight);
        };
    }, [])
    return (

        <div className={` ${isRightSidebar ? 'hidden' : 'hidden res8:block'}   col-span-2 bg-white  `}>
            <div className='max-h-[calc(100vh-56px)] flex flex-col'>
                <div>
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
                            <span onClick={() => setIsRightSidebar(true)}>
                                <HiOutlineDotsHorizontal size={20} className='text-primary' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={` bg-cover bg-center bg-no-repeat bg-opacity-50`} style={{ backgroundImage: `url('/image/theme/theme.png')`, height: `${chatBodyHeight}px` }}>
                    <div className='bg-black bg-opacity-50 h-full'>
                        <div className='h-full overflow-y-scroll'>
                            <div className='px-4 flex flex-col gap-4 py-5 '>
                                <div>
                                    <div className='w-[80%] flex gap-2'>
                                        <span>
                                            <div className='w-5 h-5 rounded-full'>
                                                <img src="/image/avater/profile1.png" className='w-5 h-5 rounded-full' alt="" />
                                            </div>
                                        </span>
                                        <div className='bg-white px-2 py-1 rounded-md'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='w-[80%] flex gap-2'>

                                        <div className='bg-white px-2 py-1 rounded-md'>
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
                                        <div className='bg-white px-2 py-1 rounded-md'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='w-[80%] flex gap-2'>

                                        <div className='bg-white px-2 py-1 rounded-md'>
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
                                        <div className='bg-white px-2 py-1 rounded-md'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='w-[80%] flex gap-2'>

                                        <div className='bg-white px-2 py-1 rounded-md'>
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
                                        <div className='bg-white px-2 py-1 rounded-md'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='w-[80%] flex gap-2'>

                                        <div className='bg-white px-2 py-1 rounded-md'>
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
                                        <div className='bg-white px-2 py-1 rounded-md'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ea.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='w-[80%] flex gap-2'>

                                        <div className='bg-white px-2 py-1 rounded-md'>
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
                </div>
                <div className='h-[50px] bg-slate-300'>

                </div>
            </div>
        </div>

    )
}

export default MessageMiddleSection