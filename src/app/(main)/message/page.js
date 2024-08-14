'use client';
import Chat from '@/components/chat/Chat'
import ChatDetails from '@/components/chat/ChatDetails'
import ChatList from '@/components/chat/ChatList'
import { socketUrl } from '@/envAccess';
import useSocket from '@/hooks/useSocket';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const MessagePage = () => {

    const [openChat, setOpenChat] = useState(false)

    const [isDetails, setIsDetails] = useState(false);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })



    const handleOpenMobileChat = (value) => {
        if (isTabletOrMobile) {
            setOpenChat(value)
        }
    }



    // useEffect(() => {
    //     if(isTabletOrMobile){
    //         set
    //     }
    // },[openChat, isTabletOrMobile])

    return (
        <div className='chat_wrap h-[calc(100vh-56px)] sm:px-4 3xl:container'>
            <div className='chat_container h-full flex'>




                <ChatList />
                <Chat
                    isDetails={isDetails}
                    setIsDetails={setIsDetails}

                />



                <ChatDetails
                    isDetails={isDetails}
                    setIsDetails={setIsDetails}
                />
            </div>
        </div>
    )
}

export default MessagePage