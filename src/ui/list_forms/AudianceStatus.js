import PrimaryButton from '@/components/buttons/PrimaryButton';
import React, { useEffect, useState } from 'react'
import { FaLock } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { IoEarthSharp } from 'react-icons/io5';
import { MdArrowBack } from 'react-icons/md';

const AudianceStatus = ({ setStatus, status, setIsAudienceModal, setIsSecondModal = null }) => {
    const [isStatus, setIsStatus] = useState('Public')

    const handleStatus = () => {
        if (isStatus) {
            setStatus(isStatus)
        }
        setIsAudienceModal(false)
        if (setIsSecondModal) {
            setIsSecondModal(false)
        }
    }


    useEffect(() => {
        if (status) {
            setIsStatus(status)
        }
    }, [status])
    return (
        <div className=' '>
            <div className='relative  py-3 border-b'>
                {
                    setIsSecondModal && <span onClick={() => {
                        setIsSecondModal(false);
                        setIsAudienceModal(false)
                    }} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 absolute left-3 top-[6px]'>
                        <MdArrowBack size={20} />
                    </span>
                }

                <p className='text-center text-xl font-medium'>Post Audience</p>
            </div>
            <div className='relative'>
                <div className='h-[300px] overflow-y-auto p-4 pb-8'>
                    <div className='mb-3'>
                        <p className='text-lg text-gray-700 font-medium'>Who can see your post?</p>
                        <p className='text-gray-400 text-sm font-normal'>Your post will show up in Feed, on your profile and in search results.
                            Your default audience is set to Public, but you can change the audience of this specific post.</p>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <label onClick={(e) => setIsStatus('Public')} className='w-full cursor-pointer  justify-between py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                                    <div className='flex gap-2 items-center'>
                                        <span className='relative w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
                                            <IoEarthSharp size={28} />
                                        </span>
                                        <div>
                                            <p className='text-gray-900'>Public</p>
                                            <p className='text-gray-400 text-sm'>Anyon on can see your post</p>
                                        </div>
                                    </div>
                                    <span className={`w-4 h-4 p-[2px] rounded-full border   flex items-center justify-center ${isStatus == "Public" ? 'border-primary' : 'border-gray-500'} `}>
                                        {isStatus == "Public" && <span className='bg-primary w-full h-full rounded-full'></span>}
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onClick={(e) => setIsStatus('Friends')} className='w-full cursor-pointer  justify-between py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                                    <div className='flex gap-2 items-center'>
                                        <span className='relative w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
                                            <FaUserLarge size={28} />
                                        </span>
                                        <div>
                                            <p className='text-gray-900'>Friends</p>
                                            <p className='text-gray-400 text-sm'>Only your firends can see the post</p>
                                        </div>
                                    </div>

                                    <span className={`w-4 h-4 p-[2px] rounded-full border   flex items-center justify-center ${isStatus == "Friends" ? 'border-primary' : 'border-gray-500'} `}>
                                        {isStatus == "Friends" && <span className='bg-primary w-full h-full rounded-full'></span>}
                                    </span>
                                </label>
                            </li>
                            <li>
                                <label onClick={(e) => setIsStatus('Onlyme')} className='w-full  cursor-pointer justify-between py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                                    <div className='flex gap-2 items-center'>
                                        <span className='relative w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center'>
                                            <FaLock size={28} />
                                        </span>
                                        <div>
                                            <p className='text-gray-900'>Only me</p>
                                            <p className='text-gray-400 text-sm'>This post is private, can see only you</p>
                                        </div>
                                    </div>
                                    <span className={`w-4 h-4 p-[2px] rounded-full border   flex items-center justify-center ${isStatus == "Onlyme" ? 'border-primary' : 'border-gray-500'} `}>
                                        {isStatus == "Onlyme" && <span className='bg-primary w-full h-full rounded-full'></span>}
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='h-14  bottom-0 bg-white w-full left-0 flex items-center justify-between border-t border-gray-100'>
                <span></span>
                <div className='flex justify-end items-center gap-3 px-4 pr-8'>
                    <PrimaryButton onClick={() => {
                        if (setIsSecondModal) {
                            setIsSecondModal(false);
                        }
                        setIsAudienceModal(false)
                    }}
                        type='button'
                        color='text-primary'
                        bg={'bg-primaryLight'}
                        className={'px-8 '}>
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton
                        onClick={handleStatus}
                        type='button'
                        className={'px-8'}>
                        Done
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default AudianceStatus