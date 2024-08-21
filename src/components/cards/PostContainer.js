'use client';
import useAxios from '@/hooks/useAxios';
import React, { useContext, useEffect, useState } from 'react'
import PostCard from './PostCard';
import { ProfileContext } from '@/provider/ProfileProvider';
import { isValidObjectId } from '@/utils/helpers';

const PostContainer = ({ query }) => {




    const axios = useAxios();
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if (!isValidObjectId(query) && query !== 'all') return;

        (async function () {
            try {
                const res = await axios.get(`/post/all?query=${query}`);
                if (res?.data?.success) {
                    setPosts(res?.data?.payload?.posts);
                }
            } catch (error) {
                console.log(error.message);
            }
        })()
    }, [axios, query])


    return (
        <>
            {
                posts?.map(item => <PostCard key={item?._id} post={item} />)
            }
        </>
    )
}

export default PostContainer