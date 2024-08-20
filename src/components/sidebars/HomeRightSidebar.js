'use client';
// import useAxios from '@/hooks/useAxios'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import FrontendChatList from '../chat/create-chat/FrontendChatList';
import { instance } from '@/hooks/useAxios';

const HomeRightSidebar = () => {
  const [myFriends, setMyFriends] = useState([])
  const axios = instance;
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(`/user/all?actiontype=chatlists`);
        if (res.data?.success) {
          setMyFriends(res?.data?.payload?.users);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [axios])
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