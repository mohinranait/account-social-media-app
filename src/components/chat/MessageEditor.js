'use client';
import EmojiPicker from 'emoji-picker-react'
import React, { useEffect, useState } from 'react'
import { FaCamera, FaImage } from 'react-icons/fa'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import PrimaryButton from '../buttons/PrimaryButton'
import dynamic from 'next/dynamic';
import useAxios from '@/hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
// import { addMessage } from '@/redux/chat/chatSlice';
// import { io } from 'socket.io-client';
// import { socketUrl } from '@/envAccess';


// import MdxEditorComponent from '';
const Editor = dynamic(() => import('../editor/MdxEditorComponent'), {
    // Make sure we turn SSR off
    ssr: false
})

// ../editor/MdxEditorComponent
const MessageEditor = () => {

    const { user } = useSelector(state => state.auth)
    const { convercation } = useSelector(state => state.chat);
    const dispatch = useDispatch();
    const axios = useAxios();
    const [isEmoji, setIsEmoji] = useState(false)
    const [value, setValue] = useState('')
    // const [socket, setSocket] = useState(null);

    // handle emoji 
    // const handleEmoji = (e) => {
    //     setIsEmoji(false)
    // }

    // useEffect(() => {
    //     const socketInstance = io(socketUrl);

    //     socketInstance.on('connect', () => {
    //         if (user?._id) {
    //             socketInstance.emit('addNewUser', { userId: user?._id });
    //         }
    //     });

    //     socketInstance.on('messageReceive', (message) => {
    //         dispatch(addMessage(message));
    //     });

    //     setSocket(socketInstance);

    //     return () => {
    //         socketInstance.disconnect();
    //     };
    // }, [user, dispatch]);




    // get value
    // const handleGetValue = async () => {

    //     try {
    //         const res = await axios.post(`/chat/send/${convercation?._id}`, { message: value })
    //         if (res?.data?.success) {

    //             dispatch(addMessage(res?.data?.message))
    //             setValue('')
    //             if (socket) {
    //                 socket.emit('addMessage', { reciverId: res?.data?.message?.reciverId, message: res?.data?.message });
    //             }
    //         }
    //     } catch (error) {

    //     }

    // }



    return (
        <>
            <div className='flex gap-2 mb-1'>
                <span className='w-7 h-7 cursor-pointer rounded-full flex items-center justify-center'>
                    <FaImage />
                </span>
                <span className='w-7 h-7 cursor-pointer rounded-full flex items-center justify-center'>
                    <FaCamera />
                </span>
                <div className='emoji w-7 h-7 cursor-pointer rounded-full flex items-center justify-center relative'>
                    <span onClick={() => setIsEmoji(prev => !prev)}>
                        <MdOutlineEmojiEmotions size={18} />
                    </span>
                    <div className='picker'>
                        <EmojiPicker open={isEmoji}
                        // onEmojiClick={handleEmoji}
                        />
                    </div>
                </div>
            </div>
            {/* <textarea name="" id="" className='flex-1 bg-gray-200 rounded-3xl py-2 px-3'></textarea> */}
            {/* <input type="text" className='flex-1 bg-gray-200 rounded-3xl py-2 px-3' placeholder='Message' /> */}
            <div className='flex-1'>
                <Editor value={value} setValue={setValue} placeholder="Message" />
            </div>
            <PrimaryButton
                onClick={() => {
                    // handleGetValue()
                }}
                type='button'>
                Send
            </PrimaryButton>
        </>
    )
}

export default MessageEditor