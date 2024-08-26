import { friendsLinks } from '@/services/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const FriendsHeaderSection = ({ data, title, subTitle }) => {
  const pathName = usePathname();
  return (
    <div className='pb-2 px-3  flex flex-col bg-white mb-2 top-[55px] res9:sticky z-50'>
      <div className='flex items-center gap-2 pt-1 mb-1 '>
        <div className='flex flex-col '>
          <span className='text-lg text-gray-700 font-semibold '>{title} </span>
          <span className='text-sm text-gray-700'>{data?.length} {subTitle}</span>
        </div>
      </div>
      <div className='bg-gray-100 py-2 px-2 flex items-center gap-2 rounded-[50px] '>
        <span className=''><IoIosSearch size={25} className='text-gray-500' /></span>
        <input type="text" className='w-full bg-transparent' />
      </div>
      <ul className=' flex md:gap-1 items-center res95:hidden mt-2 '>
        {
          friendsLinks?.map((nav, idx) => <li key={idx}> <Link href={nav?.link} className={`py-2 px-1 md:px-2 text-sm md:text-base rounded ${nav.link == '/friends' && 'hidden'}  ${pathName == nav.link ? 'text-primary' : 'text-gray-500'} `}>{nav?.label}</Link> </li>)
        }

      </ul>
    </div>
  )
}

export default FriendsHeaderSection