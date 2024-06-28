import PrimaryButton from '@/components/buttons/PrimaryButton'
import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const RightSidebar = ({ isRightSidebar, setIsRightSidebar }) => {
    return (
        <>
            <div className={` ${isRightSidebar ? 'hidden col-span-2 res8:block' : 'hidden'}  res10:block col-span-1 bg-white border-l border-gray-200`}>
                <div>
                    <div className='h-[60px] border-b border-gray-200 flex items-center justify-between px-4 bg-gray-50'>
                        <div className='flex gap-2'>

                            <div>
                                <p className='tex-lg font-medium text-gray-700'>Profile details</p>

                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <span onClick={() => setIsRightSidebar(false)} className='w-8 h-8 rounded-full bg-gray-100 cursor-pointer flex items-center justify-center'>
                                <IoCloseOutline className='text-primary' />
                            </span>

                        </div>
                    </div>
                    <div className='pt-4 flex gap-4 flex-col'>
                        <div className='flex flex-col gap-1'>
                            <img src="/image/avater/profile1.png" className='w-[100px] h-[100px] rounded-full mx-auto' alt="avater" />
                            <p className='text-xl font-semibold text-center text-gray-800 leading-[20px]'>Mohin Rana</p>
                            <p className='text-xs font-normal text-center text-gray-500'>Content creator</p>
                            <div className='text-center mt-1'>
                                <PrimaryButton>
                                    View Profile
                                </PrimaryButton>
                            </div>
                        </div>
                        <div>
                            <ul className='flex items-center gap-1 justify-center'>
                                <li>
                                    <a href="" className='px-2 py-1 text-sm text-gray-600 rounded-sm hover:bg-gray-100'>
                                        Photos
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='px-2 py-1 text-sm text-gray-600 rounded-sm hover:bg-gray-100'>
                                        Videos
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='px-2 py-1 text-sm text-gray-600 rounded-sm hover:bg-gray-100'>
                                        Links
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSidebar