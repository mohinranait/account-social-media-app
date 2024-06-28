'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton'
import PostCard from '@/components/cards/PostCard'
import SuggestsCurd from '@/components/cards/suggests/SuggestsCurd'
import Modal from '@/components/modals/Modal';
import PostEditorComponent from '@/components/post-editor/PostEditorComponent';
import HomeLeftSidebar from '@/components/sidebars/HomeLeftSidebar'
import HomeRightSidebar from '@/components/sidebars/HomeRightSidebar'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      <div className='sm:px-4 3xl:container mt-4'>
        <div className='grid res9:grid-cols-3 res11:grid-cols-4 gap-5'>
          <div className='hidden res11:block col-span-1 '>
            <HomeLeftSidebar />
          </div>
          <div className='col-span-2 flex flex-col gap-5 '>
            <div className='bg-white border-t-4 border-primary p-3 flex justify-between items-center rounded '>
              <div>
                <Image src={'/image/avater/profile1.png'} width={50} height={50} alt='avater' />
              </div>
              <div className='flex gap-3'>
                <PrimaryButton
                  type={'button'}
                  onClick={() => setIsOpen(true)}
                  className={'bg-gray-200 text-gray-600'}>
                  Create a post
                </PrimaryButton>
                <PrimaryButton type='submit' className={''}>
                  Go to live
                </PrimaryButton>
              </div>
            </div>
            <div className=' bg-gray-100 md:mx-[50px] lg:mx-0 res12:px-[50px] flex flex-col gap-5 '>
              <SuggestsCurd />
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
          <div className='hidden res9:block col-span-1'>
            <HomeRightSidebar />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
        <PostEditorComponent setIsOpen={setIsOpen} />
      </Modal>
    </>
  )
}

export default HomePage