'use client';
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard';

const PostContainer = () => {
    const axios = useAxios();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get(`/post/all`);
                if (res?.data?.success) {
                    setPosts(res?.data?.payload?.posts);
                }
            } catch (error) {
                console.log(error.message);
            }
        })()
    }, [])
    return (
        <>
            {
                posts?.map(item => <PostCard key={item?._id} post={item} />)
            }
        </>
    )
}

export default PostContainer