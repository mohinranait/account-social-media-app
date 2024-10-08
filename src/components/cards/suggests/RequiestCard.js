import useAxios from '@/hooks/useAxios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const RequiestCard = ({ data, cardType }) => {
    const [isLoading, setIsLoading] = useState(false)
    const axios = useAxios()

    const { _id, senderId, reciverId } = data || {}


    const { name, profileImage } = cardType == 'request' ? senderId : reciverId

    // handle remove firend request
    const removeRequest = async (invitationId) => {
        try {
            setIsLoading(true)
            let res = await axios.delete(`/invitation/delete/${invitationId}`)
            if (res?.data?.success) {
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
        }
    }


    // handle confirm request
    const handleConfirmRequest = async (invitationId) => {
        try {
            setIsLoading(true)
            let res = await axios.patch(`/invitation/accepted/${invitationId}`)
            console.log(res?.data);
            if (res?.data?.success) {

                setIsLoading(false)
            }

        } catch (error) {
            console.log(error.message);
            setIsLoading(false)

        }
    }

    return (
        <div className='px-1 py-1 shadow rounded bg-white'>
            <div className='h-[90px] bg-gray-100 rounded relative'>
                {/* <span className='absolute right-1 top-1 w-6 h-6 rounded-full bg-gray-500 bg-opacity-15 cursor-pointer flex items-center justify-center'><IoCloseOutline /></span> */}
            </div>


            <div className='-mt-4 px-1 relative'>
                <div className='flex gap-1  items-end'>
                    <Image src={profileImage?.fileUrl || "/image/avater/profile1.png"} height={45} width={45} className='w-[45px] h-[45px] rounded-full' alt="avater" />
                    <div>
                        <Link href={'/'} className='text-gray-800 text-sm'>{name?.fullName}</Link>

                    </div>
                </div>
                <div className='flex flex-col mb-3'>
                    <p className='text-gray-400 text-xs mb-2'>Content creator</p>
                    <div className='flex gap-1 items-center'>
                        <div className='flex'>
                            <span className='w-4 h-4 rounded-full bg-gray-500'>
                                <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                            <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px]'>
                                <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                            <span className='w-4 h-4 rounded-full bg-gray-500 -ml-[6px]'>
                                <Image src="/image/avater/profile1.png" height={40} width={40} className='w-4 h-4' alt="avater" />
                            </span>
                        </div>
                        <div className='text-gray-500 text-sm'>
                            3 Mutuals
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-1 border-t border-gray-100 text-center flex flex-col gap-2'>
                {
                    cardType == 'request' ? <>
                        <span onClick={() => handleConfirmRequest(_id)} className='flex gap-1 py-2 rounded  items-center justify-center cursor-pointer text-sm text-white bg-primary'>Confirm</span>
                        <span onClick={() => removeRequest(_id)} className='flex gap-1 py-2 rounded  items-center justify-center cursor-pointer text-sm text-primary bg-primaryLight'> Delete</span>
                    </> : <span onClick={() => removeRequest(_id)} className='flex gap-1 py-2 rounded  items-center justify-center cursor-pointer text-sm text-gray-800 bg-gray-200'> Cancel request</span>

                }
            </div>
        </div>
    )
}

export default RequiestCard