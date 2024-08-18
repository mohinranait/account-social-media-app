import PrimaryButton from '@/components/buttons/PrimaryButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendsHistory = () => {
    return (
        <div className='sm:px-4 3xl:container mt-4'>
            <div className='w-[400px] bg-white'>
                <div className='mb-5'>
                    <div className='py-2 px-3 border-b border-gray-200 flex justify-between items-center'>
                        <span className='text-lg text-gray-700 '>Friends</span>
                        <Link href={'/friends-history?page=friends'} className='text-primary text-sm font-medium'>See All</Link>
                    </div>
                    <ul className='px-3 py-2'>
                        <li className='hover:bg-gray-100 rounded p-2 flex gap-3 cursor-pointer'>
                            <div>
                                <span className='w-10 h-10 inline-block rounded-full'>
                                    <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                </span>
                            </div>
                            <div>
                                <Link href="/" className='text-gray-800 text-base hover:underline'>Mohin Rana</Link>
                            </div>
                        </li>
                        <li className='hover:bg-gray-100 rounded p-2 flex gap-3 cursor-pointer'>
                            <div>
                                <span className='w-10 h-10 inline-block rounded-full'>
                                    <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                </span>
                            </div>
                            <div>
                                <Link href="/" className='text-gray-800 text-base hover:underline'>Mahir Rana</Link>
                            </div>
                        </li>
                        <li className='hover:bg-gray-100 rounded p-2 flex gap-3 cursor-pointer'>
                            <div>
                                <span className='w-10 h-10 inline-block rounded-full'>
                                    <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                </span>
                            </div>
                            <div>
                                <Link href="/" className='text-gray-800 text-base hover:underline'>Suvo Rana</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <div className='py-2 px-3 border-b border-gray-200 flex justify-between items-center'>
                        <span className='text-lg text-gray-700 '>Friends requists</span>
                        <Link href={'/friends-history?page=requists'} className='text-primary text-sm font-medium'>See All (102) </Link>
                    </div>
                    <ul className='px-3 py-2'>
                        <li className='hover:bg-gray-100 rounded p-2 flex justify-between gap-3 cursor-pointer'>
                            <div className='flex gap-2'>
                                <div>
                                    <span className='w-10 h-10 inline-block rounded-full'>
                                        <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                    </span>
                                </div>
                                <div>
                                    <Link href="/" className='text-gray-800 text-base hover:underline'>Mohin Rana</Link>
                                    <div className='flex'>
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover ' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-end gap-2 '>
                                <PrimaryButton
                                    type='button'
                                >
                                    Accept
                                </PrimaryButton>
                                <PrimaryButton
                                    type='button'
                                    bg={'bg-gray-300'}
                                    color={'text-gray-800'}
                                    className={'hover:bg-gray-400'}
                                >
                                    Reject
                                </PrimaryButton>
                            </div>
                        </li>

                        <li className='hover:bg-gray-100 rounded p-2 flex justify-between gap-3 cursor-pointer'>
                            <div className='flex gap-2'>
                                <div>
                                    <span className='w-10 h-10 inline-block rounded-full'>
                                        <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                    </span>
                                </div>
                                <div>
                                    <Link href="/" className='text-gray-800 text-base hover:underline'>Sofiya</Link>
                                    <div className='flex'>
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover ' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-end gap-2 '>
                                <PrimaryButton
                                    type='button'
                                >
                                    Accept
                                </PrimaryButton>
                                <PrimaryButton
                                    type='button'
                                    bg={'bg-gray-300'}
                                    color={'text-gray-800'}
                                    className={'hover:bg-gray-400'}
                                >
                                    Reject
                                </PrimaryButton>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className='mb-5'>
                    <div className='py-2 px-3 border-b border-gray-200 flex justify-between items-center'>
                        <span className='text-lg text-gray-700 '>Suggests friends</span>
                        <Link href={'/friends-history?page=suggests'} className='text-primary text-sm font-medium'>See All  </Link>
                    </div>
                    <ul className='px-3 py-2'>
                        <li className='hover:bg-gray-100 rounded p-2 flex justify-between gap-3 cursor-pointer'>
                            <div className='flex gap-2'>
                                <div>
                                    <span className='w-10 h-10 inline-block rounded-full'>
                                        <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                    </span>
                                </div>
                                <div>
                                    <Link href="/" className='text-gray-800 text-base hover:underline'>Sofia Rahman</Link>
                                    <div className='flex'>
                                        <Image width={40} height={40} className='w-4 h-4 rounded-full object-cover ' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={40} height={40} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={40} height={40} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={40} height={40} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <span className='text-sm text-gray-500 inline-flex ml-1'> 3 Mutuals</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-end gap-2 '>
                                <PrimaryButton
                                    type='button'
                                >
                                    Add Friend
                                </PrimaryButton>

                            </div>
                        </li>

                        <li className='hover:bg-gray-100 rounded p-2 flex justify-between gap-3 cursor-pointer'>
                            <div className='flex gap-2'>
                                <div>
                                    <span className='w-10 h-10 inline-block rounded-full'>
                                        <Image width={40} height={40} src="/image/avater/profile1.png" className='w-full h-full object-cover' alt="avater" />
                                    </span>
                                </div>
                                <div>
                                    <Link href="/" className='text-gray-800 text-base hover:underline'>Kadar </Link>
                                    <div className='flex'>
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover ' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <Image width={16} height={16} className='w-4 h-4 rounded-full object-cover -ml-1 ring-1 ring-white' src="/image/avater/profile1.png" alt="image" />
                                        <span className='text-sm text-gray-500 inline-flex ml-1'> 5 Mutuals</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-end gap-2 '>
                                <PrimaryButton
                                    type='button'
                                >
                                    Add Friend
                                </PrimaryButton>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default FriendsHistory