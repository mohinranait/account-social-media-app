'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Modal from '@/components/modals/Modal';
import PostEditorComponent from '@/components/post-editor/PostEditorComponent';
import CreatePostProvider from '@/provider/CreatePostProvider';
import Image from 'next/image';
import React, { useState } from 'react'

const PostCreator = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <CreatePostProvider>
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
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <PostEditorComponent setIsOpen={setIsOpen} />
            </Modal>
        </CreatePostProvider>
    )
}

export default PostCreator