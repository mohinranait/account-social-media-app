import React from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import AddFriendCard from '../AddFirend/AddFriendCard'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const SuggestsCurd = () => {
    return (
        <div className='bg-white rounded'>
            <div className='flex justify-between pt-3 pb-2 px-3  '>
                <span className='text-base text-gray-600 '>More peoples</span>
                <span> <HiOutlineDotsVertical size={16} className='text-gray-600' /></span>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-1 px-3 pt-2'>
                    <AddFriendCard />
                    <AddFriendCard />
                    <AddFriendCard />
                </div>
            </div>
            <div className='px-3 pb-3 pt-2'>
                <PrimaryButton
                    className={'w-full bg-transparent hover:bg-gray-50 !text-primary hover '}
                >
                    See all
                </PrimaryButton>
            </div>
        </div>
    )
}

export default SuggestsCurd