import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'

const HomeRightSidebar = () => {
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
          <li>
            <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-50 transition-all' transition-all>
              <span className='relative w-7 h-7 rounded-full'>
                <span className='w-[6px] h-[6px] bg-green-600 inline-block rounded-full absolute -right-[2px] top-1'></span>
                <Image src={'/image/avater/profile1.png'} className='w-7 h-7' alt='Avater' width={40} height={40} />
              </span>
              <span className='text-gray-600'>Mohin Rana</span>
            </Link>
          </li>
          <li>
            <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-50 transition-all' transition-all>
              <span className='relative w-7 h-7 rounded-full'>
                <span className='w-[6px] h-[6px] bg-green-600 inline-block rounded-full absolute -right-[2px] top-1'></span>
                <Image src={'/image/avater/profile1.png'} className='w-7 h-7' alt='Avater' width={40} height={40} />
              </span>
              <span className='text-gray-600'>Mohin Rana</span>
            </Link>
          </li>
          <li>
            <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-2 hover:bg-gray-50 transition-all' transition-all>
              <span className='relative w-7 h-7 rounded-full'>
                <span className='w-[6px] h-[6px] bg-green-600 inline-block rounded-full absolute -right-[2px] top-1'></span>
                <Image src={'/image/avater/profile1.png'} className='w-7 h-7' alt='Avater' width={40} height={40} />
              </span>
              <span className='text-gray-600'>Mohin Rana</span>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default HomeRightSidebar