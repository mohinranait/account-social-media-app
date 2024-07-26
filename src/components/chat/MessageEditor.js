'use client';
import EmojiPicker from 'emoji-picker-react'
import React, { useState } from 'react'
import { FaCamera, FaImage } from 'react-icons/fa'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import PrimaryButton from '../buttons/PrimaryButton'
import dynamic from 'next/dynamic';
import useAxios from '@/hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '@/redux/chat/chatSlice';

// import MdxEditorComponent from '';
const Editor = dynamic(() => import('../editor/MdxEditorComponent'), {
    // Make sure we turn SSR off
    ssr: false
})

// ../editor/MdxEditorComponent

const MessageEditor = () => {
    const { convercation } = useSelector(state => state.chat);
    const dispatch = useDispatch();
    const axios = useAxios();
    const [isEmoji, setIsEmoji] = useState(false)
    const [value, setValue] = useState('')

    // handle emoji 
    const handleEmoji = (e) => {
        setIsEmoji(false)
    }

    // get value
    const handleGetValue = async () => {

        try {
            const res = await axios.post(`/chat/send/${convercation?._id}`, { message: value })
            console.log(res?.data?.message);
            if (res?.data?.success) {

                dispatch(addMessage(res?.data?.message))
                setValue('')
            }
        } catch (error) {

        }

    }



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
                        <EmojiPicker open={isEmoji} onEmojiClick={handleEmoji} />
                    </div>
                </div>
            </div>
            {/* <textarea name="" id="" className='flex-1 bg-gray-200 rounded-3xl py-2 px-3'></textarea> */}
            {/* <input type="text" className='flex-1 bg-gray-200 rounded-3xl py-2 px-3' placeholder='Message' /> */}
            <div className='flex-1'>
                <Editor value={value} setValue={setValue} placeholder="Message" />
            </div>
            <PrimaryButton onClick={handleGetValue} type='button'>
                Send
            </PrimaryButton>
        </>
    )
}

export default MessageEditor