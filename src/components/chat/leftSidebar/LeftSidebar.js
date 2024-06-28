import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'

const LeftSidebar = () => {
    return (
        <>
            <div className='col-span-1 bg-white border-r border-gray-200'>
                <div>
                    <div className='h-[60px] border-b border-gray-200 flex justify-between px-4 items-center bg-gray-50'>
                        <div>
                            <span className='w-9 h-9 inline-block relative rounded-full '>
                                <span className='w-1 h-1 rounded-full absolute bg-green-500 right-0 top-[10px]'></span>
                                <img src="/image/avater/profile1.png" className='w-9 h-9 rounded-full' alt="avater" />
                            </span>
                        </div>
                        <div>
                            <FaPlus />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div className='px-4 my-3'>
                                    <div>
                                        <div className='flex gap-1 items-center bg-gray-100 rounded py-2 px-2'>
                                            <IoIosSearch size={20} />
                                            <input type="text" className='w-full text-sm font-light text-gray-600  bg-transparent' placeholder='Search...' />
                                        </div>
                                    </div>
                                </div>
                                <ul className=' flex flex-col'>
                                    <li className='py-3 hover:bg-gray-100 px-4'>
                                        <a href="#" className='flex justify-between gap-1'>
                                            <div className='flex gap-2'>
                                                <span className='w-10 h-10 rounded-full relative'>
                                                    <span className='h-2 w-2 rounded-full bg-green-500 top-2 ring-2 ring-white -right-[2px] absolute'></span>
                                                    <img src="/image/avater/profile1.png" className='w-10 h-10 rounded-full ' alt="avater" />
                                                </span>
                                                <div>
                                                    <p className='text-base font-medium text-gray-800'>Mohin Rana</p>
                                                    <p className='text-gray-500 text-xs'>Agamai kalk brisho</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-xs font-normal text-right text-gray-500'>4h ago</p>
                                                <p className=' text-right'>
                                                    <span className=' text-[10px] px-1 py-[2px] inline-block rounded-full bg-primary text-white leading-3'>
                                                        5
                                                    </span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                    <li className='py-3 hover:bg-gray-100 px-4'>
                                        <a href="#" className='flex justify-between gap-1'>
                                            <div className='flex gap-2'>
                                                <img src="/image/avater/profile1.png" className='w-10 h-10 rounded-full ' alt="avater" />
                                                <div>
                                                    <p className='text-base font-medium text-gray-800'>Mohin Rana</p>
                                                    <p className='text-gray-500 text-xs'>Agamai kalk brisho</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-xs font-normal text-right text-gray-500'>4h ago</p>
                                                <p className=' text-right'>
                                                    <span className=' text-[10px] px-1 py-[2px] inline-block rounded-full bg-primary text-white leading-3'>
                                                        5
                                                    </span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                    <li className='py-3 hover:bg-gray-100 px-4'>
                                        <a href="#" className='flex justify-between gap-1'>
                                            <div className='flex gap-2'>
                                                <img src="/image/avater/profile1.png" className='w-10 h-10 rounded-full ' alt="avater" />
                                                <div>
                                                    <p className='text-base font-medium text-gray-800'>Mohin Rana</p>
                                                    <p className='text-gray-500 text-xs'>Agamai kalk brisho</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-xs font-normal text-right text-gray-500'>4h ago</p>
                                                <p className=' text-right'>
                                                    <span className=' text-[10px] px-1 py-[2px] inline-block rounded-full bg-primary text-white leading-3'>
                                                        5
                                                    </span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSidebar