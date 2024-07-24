import React from 'react'
import { FaLock } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { IoEarthSharp } from 'react-icons/io5'

const StatusIconWithText = ({ status, size, textStyle, iconStyle }) => {
    return (
        <div className={`inline-flex gap-1 items-center ${textStyle}`}>
            {
                status == 'Public' ? <> <IoEarthSharp size={size} className={`${iconStyle}`} /> Public</> :
                    status == 'Friends' ? <> <HiUsers size={size} className={`${iconStyle}`} /> Friends</> :
                        <> <FaLock size={size} /> Only Me</>
            }
        </div>
    )
}

export default StatusIconWithText