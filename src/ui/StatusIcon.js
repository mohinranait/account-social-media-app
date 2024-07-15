import React from 'react'
import { FaLock } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { IoEarthSharp } from 'react-icons/io5'

const StatusIcon = ({ status, size = 22, css = '' }) => {
    return (
        status == 'Public' ? <IoEarthSharp size={size} className={css} /> :
            status == 'Friends' ? <HiUsers size={size} className={css} /> :
                <FaLock size={size} className={css} />
    )
}

export default StatusIcon