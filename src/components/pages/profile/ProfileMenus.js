'use client';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const ProfileMenus = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className='flex items-center justify-center res5:justify-between px-10'>
            <ul className='flex items-center py-1 gap-3'>
                <li><Link href={`/${user?.profileUrl}`} className='inline-block text-base text-gray-500 px-2 res5:px-4  py-2'>Posts</Link></li>
                <li><Link href={`/${user?.profileUrl}/about`} className='inline-block text-base text-gray-500 px-2 res5:px-4  py-2'>About</Link></li>
                <li><Link href={`/${user?.profileUrl}/friends`} className='inline-block text-base text-gray-500 px-2 res5:px-4  py-2'>Friends</Link></li>
                <li><Link href={`/${user?.profileUrl}/photos`} className='inline-block text-base text-gray-500 px-2 res5:px-4  py-2'>Photos</Link></li>
            </ul>
            <div>
                more
            </div>
        </div>
    )
}

export default ProfileMenus