'use client';
import React, { useContext, useEffect, useRef } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import MessageEditor from './MessageEditor';
import { fetchAllMessageByConversation } from '@/redux/chat/chatSlice';
import MessageItems from './message/MessageItems';
import { useRouter, useSearchParams } from 'next/navigation';
import { IoArrowBack } from "react-icons/io5";
import Image from 'next/image';
import { ChatDesignContext } from '@/provider/ChatDesignProvider';

// import { useRouter } from 'next/router';



const Chat = ({ setIsDetails, isDetails, openChat }) => {
    const router = useRouter();
    const { convercation, messages } = useSelector(state => state.chat);
    const searchParams = useSearchParams()
    const { isTabletOrMobile, convercationId, setConvercatinId } = useContext(ChatDesignContext);


    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const endMessageRef = useRef();

    useEffect(() => {
        if (convercation?._id) {
            dispatch(fetchAllMessageByConversation({ reciver: convercation }))
        }

    }, [convercation, dispatch])

    useEffect(() => {
        if (endMessageRef.current) {
            endMessageRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])





    return (
        <div className={`chat  h-full  flex-col border-l border-r border-gray-200 ${isTabletOrMobile && convercationId ? 'flex' : `  ${isDetails ? 'hidden' : 'hidden res8:flex'} `}  `} >
            <div className='top'>
                <div className='h-[60px] border-b border-gray-200 flex items-center justify-between px-4 bg-white'>
                    <div className='flex gap-2 items-center'>
                        <span
                            onClick={() => {
                                router.back();
                                setConvercatinId('')
                            }}
                            className='text-gray text-gray-600 res8:hidden'
                        >
                            <IoArrowBack className='' size={20} />
                        </span>
                        <span className='w-9 h-9 inline-block relative rounded-full '>
                            <span className='w-[6px] h-[6px] rounded-full absolute bg-green-500 right-0 top-[8px]'></span>
                            <Image width={36} height={36} src="/image/avater/profile1.png" className='w-9 h-9 rounded-full' alt="avater" />
                        </span>
                        <div>
                            <p className='tex-base font-medium text-gray-700'>{convercation?.name?.fullName || ''}</p>
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
            <div className="center overflow-y-scroll bottom-0 bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/image/theme/theme.png')`, }}>
                <div className='h-full sticky bottom-0'>
                    <div className='px-4 flex flex-col gap-4 py-5 '>

                        {
                            messages?.map(message => <MessageItems key={message?._id} message={message} />)
                        }


                        <div ref={endMessageRef}></div>
                    </div>
                </div>
            </div>
            <div className="mt-auto flex gap-2 items-end p-3 relative">

                <MessageEditor />

            </div>

        </div>
    )
}

export default Chat