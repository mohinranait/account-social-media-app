import useAxios from '@/hooks/useAxios';
import useCreatePost from '@/hooks/useCreatePost';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { MdArrowBack } from 'react-icons/md';

const SearchTagUserByName = ({ setIsSecondModal, setIsTagModal }) => {
  const { withFriends, setWithFriends } = useCreatePost();
  const [searchText, setSearchText] = useState('');
  const [fetchAllUsers, setFetchAllUsers] = useState([])
  const [fetchUsers, setFetchUsers] = useState([])
  const axios = useAxios();

  // handle Select users
  const handleSelectUser = (user) => {
    if (user) {
      setWithFriends(prev => ([
        ...prev,
        user,
      ]))
      setFetchUsers(prev => prev.filter(x => x._id !== user?._id))
    }
  }

  // handle cancel user from selected
  const handleCancelSelected = (user) => {
    if (user) {
      let usersCopy = [...fetchAllUsers];
      const filterSelectedUsers = withFriends?.filter(x => x?._id !== user?._id)
      setWithFriends(filterSelectedUsers)
      let filters = usersCopy.filter(x => filterSelectedUsers.find(y => y?._id != x?._id))
      if (filters?.length > 0) {
        setFetchUsers(filters)
      } else {
        setFetchUsers(usersCopy)
      }
    }
  }


  // handle Fetch users by search
  const handleSearchChange = async (value) => {
    const text = value;
    setSearchText(text)
    try {
      const res = await axios.get(`/user/all?querytype=friends`, {
        params: {
          search: text,
        }
      });
      if (res.data.success) {
        setFetchUsers(res?.data?.payload?.users)
        setFetchAllUsers(res?.data?.payload?.users)
      } else {
        toast.error('Somthing wrong')
      }
    } catch (error) {
      console.log(error.message);
    }
  }


  // handle Submit selected users data 
  const handleSubmitSelectedUsers = () => {
    setIsSecondModal(false);
    setIsTagModal(false)
  }


  useEffect(() => {
    handleSearchChange()
  }, [handleSearchChange])

  return (
    <div className=''>
      <div className='relative py-3 border-b'>
        <span onClick={() => {
          setIsSecondModal(false);
          setIsTagModal(false)
        }} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 absolute left-3 top-[6px]'>
          <MdArrowBack size={20} />
        </span>
        <p className='text-center text-xl font-medium'>Tag people</p>
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <div className='flex items-center gap-3'>
          <div className='flex w-full gap-1 items-center bg-gray-100 rounded-2xl py-2 px-2'>
            <IoIosSearch size={20} />
            <input type="text" value={searchText} onChange={(e) => handleSearchChange(e?.target?.value)} className='w-full text-sm font-light text-gray-600  bg-transparent' placeholder='Search...' />
          </div>
          <span onClick={handleSubmitSelectedUsers} className='text-primary cursor-pointer'>Done</span>
        </div>
        {
          withFriends?.length > 0 && <div>
            <p className='text-gray-600 text-md mb-1'>Tagged</p>
            <ul className='flex items-center flex-wrap gap-2 border p-2 rounded-md max-h-24 overflow-y-auto '>
              {
                withFriends?.map((user, i) => {
                  return <li key={i}>
                    <button className='w-full pl-2 pr-1 rounded flex items-center gap-2 bg-blue-50 text-primary transition-all' >
                      <span className=' py-1'>{user?.name?.fullName}</span>
                      <span onClick={() => handleCancelSelected(user)} className='w-[25px] h-[25px]  rounded-full flex items-center justify-center hover:bg-gray-200'>
                        <IoCloseOutline size={20} />
                      </span>
                    </button>
                  </li>
                })
              }
            </ul>
          </div>
        }

        <div>
          <p className='text-gray-600 text-md mb-1'>Suggestions</p>
          <ul>
            {
              fetchUsers?.length > 0 ? fetchUsers?.map((user, i) => {
                return <>
                  <li onClick={() => handleSelectUser(user)} key={i} className='w-full cursor-pointer py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-100 transition-all' >
                    <span className='relative w-10 h-10 rounded-full'>
                      <Image src={'/image/avater/profile1.png'} className='w-10 h-10' alt='Avater' width={40} height={40} />
                    </span>
                    <span className='text-gray-900'>{user?.name?.fullName}</span>
                  </li>
                </>
              }) : <div className='py-3 px-3 rounded  text-gray-500 bg-gray-50 text-sm text-center'>Search users</div>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchTagUserByName