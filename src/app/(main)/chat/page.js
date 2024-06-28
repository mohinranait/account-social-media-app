
'use client';
import MessageMiddleSection from '@/components/chat/Message/MessageMiddleSection';
import LeftSidebar from '@/components/chat/leftSidebar/LeftSidebar';
import RightSidebar from '@/components/chat/rightSidebar/RightSidebar';
import React, { useState } from 'react'

const ChatPage = () => {
    const [isRightSidebar, setIsRightSidebar] = useState(false)
    console.log(isRightSidebar);
    return (
        <div className=' max-h-[calc(100vh-56px)] sm:px-4 3xl:container grid res8:grid-cols-3 res10:grid-cols-4'>
            <LeftSidebar />
            <MessageMiddleSection
                isRightSidebar={isRightSidebar}
                setIsRightSidebar={setIsRightSidebar}
            />
            <RightSidebar
                isRightSidebar={isRightSidebar}
                setIsRightSidebar={setIsRightSidebar}
            />
        </div>
    )
}

export default ChatPage