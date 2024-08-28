import { isValidObjectId } from '@/utils/helpers';
import { useSearchParams } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

export const ChatDesignContext = createContext(null)

const ChatDesignProvider = () => {
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
        <ChatDesignContext.Provider value={obj}>{children}</ChatDesignContext.Provider>
    )
}

export default ChatDesignProvider