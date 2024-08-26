import { isValidObjectId } from '@/utils/helpers';
import { useSearchParams } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

export const ChatUIContext = createContext(null);
const ChatUIProvider = ({ children }) => {

    const params = useSearchParams();
    const paramsId = params.get('con');
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    const [convercationId, setConvercatinId] = useState('');
    // const [smallScreen, setSmallScreen] = useState(false)

    useEffect(() => {
        if (isValidObjectId(paramsId)) {
            setConvercatinId(paramsId)
        } else {
            setConvercatinId('')
        }
    }, [paramsId])

    const obj = {
        convercationId, setConvercatinId,
        // smallScreen, setSmallScreen,
        isTabletOrMobile,
    }
    return (
        <ChatUIContext.Provider value={obj}>{children}</ChatUIContext.Provider>
    )
}

export default ChatUIProvider