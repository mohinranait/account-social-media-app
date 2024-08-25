'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Modal from '@/components/modals/Modal';
import PostEditorComponent from '@/components/post-editor/PostEditorComponent';
import { avaterImg } from '@/envAccess';
import CreatePostProvider from '@/provider/CreatePostProvider';
import Image from 'next/image';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const PostCreator = () => {
    const { user } = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <CreatePostProvider>
            <div className='bg-white border-t-4 border-primary p-3 flex justify-between items-center rounded '>
                <div>
                    <Image src={user?.profileImage?.fileUrl || avaterImg} width={50} height={50} alt={user?.name?.fullName} className='w-12 h-12 rounded-full' />
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