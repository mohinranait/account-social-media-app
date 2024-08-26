'use client';
import RequiestCard from '@/components/cards/suggests/RequiestCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa6'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from 'react-icons/io'
import Image from 'next/image'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import { useRouter } from 'next/navigation'
import useAxios from '@/hooks/useAxios';
import FriendsHeaderSection from '@/components/friends/FriendsHeaderSection';

const FriendRequests = () => {
  const axios = useAxios();
  const [friendsRequists, setFriendRequists] = useState([])



  useEffect(() => {

    (async function () {
      try {
        const res = await axios.get(`/user/new-friend-request`);
        setFriendRequists(res?.data?.payload?.followers);
      } catch (error) {
        console.log(error);

      }
    })()
  }, [axios])


  return (
    <div>
      <FriendsHeaderSection data={friendsRequists} title="Friends Request" subTitle={'Requests'} />

      <div className='grid grid-cols-1 res4:grid-cols-2  res65:grid-cols-3 res95:grid-cols-2  res11:grid-cols-3 res13:grid-cols-4 gap-4'>
        {
          friendsRequists?.map(follower => <RequiestCard cardType='request' key={follower?._id} data={follower} />)
        }
      </div>
    </div>
  )
}

export default FriendRequests