
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiTimer } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiShareFatThin } from "react-icons/pi";
import { GoComment } from "react-icons/go";
import StatusIcon from '@/ui/StatusIcon';
import PostCommentComponent from './PostCommentComponent';
import PostReactionComponent from './PostReactionComponent';
import moment from 'moment';

const dateFormat = (date) => {
    let now = moment();
    let time = moment(date)

    if (now.diff(time, 'hours') < 24) {
        return time.fromNow()
    } else {
        return time.format("DD MMM, YYYY")

    }
}

const PostCard = ({ post }) => {
    const { _id, text, status, owner, withFriends, media, createdAt } = post || {}

    return (
        <div className=' rounded  bg-white'>
            <div className='flex justify-between  pt-3 pb-2 px-3'>
                <div className='flex justify-between gap-3'>
                    <Image src={'/image/avater/profile1.png'} width={50} height={50} alt='avater' />
                    <div>
                        <>
                            <Link href={`${owner?.profileUrl}`} className='text-sm'>
                                {owner?.name?.fullName}
                            </Link>
                            {withFriends?.length > 0 && <> with {withFriends?.map((item, idx) => <span key={idx} className='text-gray-700 text-sm underline mr-1 cursor-pointer'>{item?.name?.fullName}</span>)} </>}
                        </>
                        <div className='flex gap-1 '>
                            <CiTimer size={12} />
                            <span className='text-xs font-normal text-gray-500'>{dateFormat(createdAt)}</span>

                            <StatusIcon status={status} size={13} css='text-gray-500' />
                        </div>
                    </div>
                </div>
                <div>
                    <>
                        <span className='w-7 h-7 flex justify-center items-center rounded-full hover:bg-gray-50 cursor-pointer '>
                            <HiOutlineDotsVertical size={16} />
                        </span>
                    </>
                </div>
            </div>

            <div className='px-4 pb-2 pt-1'>
                <p className='text-gray-700 text-sm'>{text}</p>
            </div>
            {
                media?.fileUrl && <div>
                    <Image width={1000} height={1000} src={media?.fileUrl} alt="img" />
                </div>
            }


            <div className='py-3 px-3'>
                <ul className='flex gap-5 items-center justify-center'>

                    <PostReactionComponent post={post} />

                    <PostCommentComponent post={post}>
                        <button className='flex w-full justify-center py-[5px] px-4 hover:bg-gray-100 rounded-sm items-center gap-1'>
                            <GoComment className='text-gray-500' />
                            <span className='text-sm text-gray-500'>Comment</span>
                        </button>
                    </PostCommentComponent>

                    <li className='w-full'>
                        <a href="#" className='flex justify-center py-[5px] px-4 hover:bg-gray-100 rounded-sm items-center gap-1'>
                            <PiShareFatThin className='text-gray-500' />
                            <span className='text-sm text-gray-500'>Share</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default PostCard