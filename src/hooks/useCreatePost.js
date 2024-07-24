'use client';
import { CreatePostContext } from '@/provider/CreatePostProvider'
import React, { useContext } from 'react'

const useCreatePost = () => {
    const post = useContext(CreatePostContext)
    return post
}

export default useCreatePost