'use client';
import useAxios from '@/hooks/useAxios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import FrontendChatList from '../chat/create-chat/FrontendChatList';

const HomeRightSidebar = () => {
  const [myFriends, setMyFriends] = useState([])
  const axios = useAxios();
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(`/user/all`);
        if (res.data?.success) {
          setMyFriends(res?.data?.payload?.users);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  return (
    <div className='top-[75px] sticky'>
      <div className=' rounded'>
        <div className='flex justify-between items-center px-3 pt-3'>
          <span className='text-gray-500'>Contacts</span>
          <ul>
            <li>
              <span className='w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer '>
                <IoIosSearch />
              </span>
            </li>
          </ul>
        </div>
        <ul className='py-3 px-3 '>
          {
            myFriends?.map(user => <FrontendChatList key={user?._id} user={user} />)
          }



        </ul>
      </div>
    </div>
  )
}

export default HomeRightSidebar