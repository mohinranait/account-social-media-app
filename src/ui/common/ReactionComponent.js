import React from 'react'

const ReactionComponent = () => {
    return (
        <span className='inline-flex gap-2 items-center bg-white shadow-sm py-2 px-2 rounded-3xl '>
            <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center gap-2 items-centerer'>L</span>
            <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center gap-2 items-centerer'>H</span>
            <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center'>A</span>
            <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-center'>S</span>
        </span>
    )
}

export default ReactionComponent