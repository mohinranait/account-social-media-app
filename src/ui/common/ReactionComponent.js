import React from 'react'

const ReactionComponent = ({ reaction, setReaction, handleSubmitReaction }) => {

    return (
        <span className='inline-flex gap-2 items-center bg-white shadow-sm py-2 px-2 rounded-3xl '>
            <span onClick={() => handleSubmitReaction('like')} className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center gap-2 items-centerer'>L</span>
            <span onClick={() => handleSubmitReaction('love')} className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center gap-2 items-centerer'>Lo</span>
            <span onClick={() => handleSubmitReaction('happy')} className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center'>H</span>
            <span onClick={() => handleSubmitReaction('sad')} className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center'>S</span>
        </span>
    )
}

export default ReactionComponent