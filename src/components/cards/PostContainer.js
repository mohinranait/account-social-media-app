'use client';
import React, { useEffect } from 'react'
import PostCard from './PostCard';
import { isValidObjectId } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/redux/data/dataSlice';

const PostContainer = ({ query }) => {

    const { posts } = useSelector(state => state.data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isValidObjectId(query) && query !== 'all') return;
        dispatch(fetchPosts(query))
    }, [query])


    return (
        <>
            {
                posts?.map(item => <PostCard key={item?._id} post={item} />)
            }
        </>
    )
}

export default PostContainer