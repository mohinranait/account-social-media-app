import RequiestCard from '@/components/cards/suggests/RequiestCard'
import Link from 'next/link'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa6'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSearch } from 'react-icons/io'
import Image from 'next/image'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const FriendRequests = () => {
  return (
    <div className='sm:px-4 3xl:container flex gap-5'>
      <div className='w-[400px] py-2 h-screen top-[58px] sticky bg-white'>
        <div className=''>
          <div className='pb-2 px-3  flex flex-col'>
            <div className='flex items-center gap-2 mb-1 '>
              <span className='h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100'>
                <FaArrowLeft size={18} />
              </span>
              <div className='flex flex-col '>
                <span className='text-lg text-gray-700 font-semibold '>Friends Request</span>
                <span className='text-sm text-gray-700'>500 Friend requist</span>
              </div>
            </div>
            <div className='bg-gray-100 py-2 px-2 flex items-center gap-2 rounded-[50px] '>
              <span className=''><IoIosSearch size={25} className='text-gray-500' /></span>
              <input type="text" className='w-full bg-transparent' />
            </div>
          </div>
          <div className='grow h-full bg-green-500'>s</div>
          <div className='grid-flow-col bg-red-400'>s</div>
          {/* <ul className='px-3 py-2 grow overflow-y-auto h-full'>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>
            <li className='flex gap-2 hover:bg-gray-100 rounded p-2'>
              <div>
                <Image width={60} height={60} src={'/image/avater/profile1.png'} alt='avater' className='w-12 h-12 rounded-full' />
              </div>
              <div className='grow'>
                <div className='flex justify-between gap-1'>
                  <span className=' text-gray-800 font-medium w-full text-nowrap'>Mohin Rana</span>
                  <span className='text-gray-600 font-normal'>5d</span>
                </div>

                <div className='flex gap-1'>
                  <div className='flex'>
                    <span className='w-4 h-4 rounded-full bg-gray-500'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                    <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px] ring-1 ring-white'>
                      <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                    </span>
                  </div>
                  <div className='text-gray-500 text-sm'>
                    3 Mutuals
                  </div>
                </div>

                <div className='flex gap-2 items-center justify-center mt-2'>
                  <PrimaryButton
                    type='button'
                    className={'w-full'}
                  >
                    Confirm
                  </PrimaryButton>

                  <PrimaryButton
                    type='button'
                    bg={'bg-gray-200'}
                    className={'w-full bg-gray-200'}
                    color='text-gray-800'
                  >
                    Delete
                  </PrimaryButton>
                </div>

              </div>
            </li>


          </ul> */}
        </div>
      </div>
      <div className='grow'>
        <div>
          <div className=' py-2 flex items-center justify-between'>
            <span className='text-2xl font-medium text-gray-900'>Friends</span>
            <span className='text-xl text-primary font-medium'>See All</span>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />

            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />

            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />

            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />

            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />

            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />

            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
            <RequiestCard />
          </div>
        </div>


      </div>
    </div>
  )
}

export default FriendRequests