'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Modal from '@/components/modals/Modal';
import { ProfileContext } from '@/provider/ProfileProvider'
import React, { useContext, useEffect, useState } from 'react'
import { FaLock } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { IoEarthSharp, IoLocationSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import AudianceStatus from './AudianceStatus';
import useAxios from '@/hooks/useAxios';
import { addUser } from '@/redux/auth/authSlice';
import { AiOutlinePlusCircle } from "react-icons/ai";
import StatusIcon from '../StatusIcon';
import { MdModeEditOutline } from 'react-icons/md';
import toast from 'react-hot-toast';


const UpdateHomeTown = () => {
    const { user } = useSelector(state => state.auth)
    const { profile, setProfile } = useContext(ProfileContext)
    const [isEdit, setIsEdit] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [homeTown, setHomeTown] = useState('')
    const [status, setStatus] = useState('')
    const axios = useAxios();
    const dispatch = useDispatch()

    // handle cancel 
    const handleCancelUpdate = () => {
        setIsEdit(false);
        setStatus('');
        setHomeTown('');

    }

    // handle submit
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            let homeTownObj = {
                homeTown: {
                    value: homeTown,
                    status,
                }
            }

            const res = await axios.patch(`/user/update?userId=${user?._id}`, homeTownObj)

            if (res?.data?.success) {
                setIsEdit(false)
                dispatch(addUser(res?.data));
                setProfile(res?.data?.payload?.user)
                toast.success("Hometown updated")
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        if (user) {
            setHomeTown(user?.homeTown?.value)
            setStatus(user?.homeTown?.status)
        }
    }, [user])


    return (
        <li>
            {!isEdit ? user?.homeTown?.value ? <div className='flex gap-4  items-center'>
                <div>
                    <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                        <IoLocationSharp size={28} className='text-gray-700' />
                    </div>
                </div>
                <div className='w-full'>

                    <p className='text-gray-500 flex gap-[3px]'>
                        From
                        <span className=' text-gray-900'>{profile?.homeTown?.value}</span>
                    </p>

                </div>
                {
                    profile?._id === user?._id && <div className='flex items-center gap-2'>
                        <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                            <StatusIcon status={user?.homeTown?.status} size={16} />
                        </span>
                        <span onClick={() => setIsEdit(true)} className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                            <MdModeEditOutline />
                        </span>
                    </div>
                }

            </div> : <div className='flex gap-4  items-center'>
                <div>
                    <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                        <IoLocationSharp size={28} className='text-gray-700' />
                    </div>
                </div>
                <span onClick={() => setIsEdit(true)} className='text-primary flex items-center gap-1 cursor-pointer'> <AiOutlinePlusCircle /> Add Hometown</span>
            </div> : <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

                <div className='relative'>
                    <div className="relative w-full">

                        <input
                            className="peer h-[50px] w-full rounded border focus-visible:border-[#1B8EF8]  px-2 pt-4 text-[#1B8EF8] focus:outline-none "
                            type="text"
                            id="social_meida_input_55"
                            placeholder=""
                            onChange={(e) => setHomeTown(e.target.value)}
                            value={homeTown}
                        />
                        <label className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="social_meida_input_55">
                            Hometown
                        </label>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <PrimaryButton
                        onClick={() => {
                            setIsOpenModal(true)
                        }}
                        type='button'
                        bg={'bg-gray-200'}
                        color="text-gray-800"
                        className=' rounded  flex items-center gap-1'
                    > {
                            status == 'Public' ? <> <IoEarthSharp size={18} /> Public</> :
                                status == 'Friends' ? <> <HiUsers size={18} /> Friends</> :
                                    <> <FaLock size={18} /> Only Me</>
                        }

                    </PrimaryButton>
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={handleCancelUpdate}
                            type='button'
                            className={'px-3 bg-gray-200 py-2 rounded text-[12px] font-medium text-center'}
                        >
                            Cancel
                        </button>
                        <button
                            type='button'
                            onClick={handleSubmit}
                            disabled={!homeTown || homeTown == user?.homeTown?.value}
                            className={`px-5  text-white py-2 rounded text-[12px] font-medium text-center ${!homeTown || homeTown == user?.homeTown?.value ? 'bg-gray-300' : 'bg-primary'} `}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>}

            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} >
                <div className='w-[500px] bg-white'>
                    <AudianceStatus setStatus={(e) => {
                        setStatus(e)
                    }} status={status} setIsAudienceModal={setIsOpenModal} />
                </div>
            </Modal>
        </li>
    )
}

export default UpdateHomeTown