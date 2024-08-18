'use client';
import useAxios from '@/hooks/useAxios';
import ReactionComponent from '@/ui/common/ReactionComponent'
import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const PostReactionComponent = ({ post }) => {

    const axios = useAxios();
    const { user } = useSelector(state => state.auth);
    const [reaction, setReaction] = useState(null)
    // handle submit reaction
    const handleSubmitReaction = async (value) => {
        let reactionObject = {
            type: value,
            data: value,
            postId: post?._id,
            userId: user?._id,
        }

        try {
            const res = await axios.patch(`/post/update/${post?._id}`, { postReaction: reactionObject })

            if (res.data?.success) {
                // setReaction(res.data.payload.post.postReaction)

                setReaction(res.data.payload?.post?.postReaction?.find(item => item?.userId == user?._id && item?.postId == post?._id)?.type)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        console.log(post?.postReaction?.find(item => item?.userId == user?._id && item?.postId == post?._id)?.type);
        if (post) {
            setReaction(post?.postReaction?.find(item => item?.userId == user?._id && item?.postId == post?._id)?.type)
        }
    }, [post, user?._id])



    return (
        <li className='w-full relative peer group  '>
            <button onClick={() => handleSubmitReaction('like')} className='flex w-full justify-center py-[5px] px-4 hover:bg-gray-100 rounded-sm items-center gap-1'>
                {reaction == null && <AiOutlineLike className='text-gray-500' />}
                {reaction == 'like' && <AiOutlineLike className='text-blue-500' />}
                {reaction == 'love' && 'love'}
                {reaction == 'sad' && 'sad'}
                {/* <AiOutlineLike className='text-gray-500' /> */}
                <span className='text-sm text-gray-500'>Like</span>
            </button>
            <div className='absolute left-0 -top-[47px] opacity-0 group-hover:opacity-100 group-hover:delay-500 '>
                <ReactionComponent reaction={reaction} setReaction={setReaction} handleSubmitReaction={handleSubmitReaction} />
            </div>
        </li>
    )
}

export default PostReactionComponent