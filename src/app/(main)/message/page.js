'use client';
import Chat from '@/components/chat/Chat'
import ChatDetails from '@/components/chat/ChatDetails'
import ChatList from '@/components/chat/ChatList'
import { socketUrl } from '@/envAccess';
import useSocket from '@/hooks/useSocket';
import React, { useEffect, useState } from 'react'


const MessagePage = () => {



    const [isDetails, setIsDetails] = useState(false);



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