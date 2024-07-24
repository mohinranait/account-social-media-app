'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SelectElement from '@/components/elements/SelectElement';
import Modal from '@/components/modals/Modal';
import React, { useContext, useEffect, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaLock } from 'react-icons/fa'
import { IoEarthSharp, IoLinkOutline } from 'react-icons/io5'
import { TbDots } from 'react-icons/tb'
import AudianceStatus from './AudianceStatus';
import { HiUsers } from 'react-icons/hi';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { ProfileContext } from '@/provider/ProfileProvider';
import { addUser } from '@/redux/auth/authSlice';
import useAxios from '@/hooks/useAxios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import StatusIcon from '../StatusIcon';

const WebsiteListForm = () => {

    const { user } = useSelector(state => state.auth);
    const { setProfile, profile } = useContext(ProfileContext)
    const dispatch = useDispatch();
    const axios = useAxios();


    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [status, setStatus] = useState('')
    const [inputs, setInputs] = useState([''])


    // handle change input value
    const handleChange = (index, event) => {
        const values = [...inputs]
        values[index] = event.target.value
        setInputs(values)
    }


    // handle cancel 
    const handleCancelUpdate = () => {
        setIsEdit(false);
        setInputs([''])
    }

    // handle active form
    const handleActiveForm = () => {
        if (user?.website?.length > 0) {
            setInputs(user?.website)
        }
        setIsEdit(true);
    }




    // handle submit
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            let website = {
                website: inputs?.filter(x => x != '')
            }

            const res = await axios.patch(`/user/update?userId=${user?._id}`, website)

            if (res?.data?.success) {
                setIsEdit(false)
                dispatch(addUser(res?.data));
                setProfile(res?.data?.payload?.user)
                toast.success("Social media updated")
            }
        } catch (error) {

        }
    }



    return (
        <>
            {
                !isEdit ? profile?.website?.length > 0 ?
                    profile?.website?.map((website, i) => <li key={i}> <div className='flex gap-4  items-center'>
                        <div>
                            <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                <IoLinkOutline size={24} className='text-gray-700' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <a href={website} target='_blank' className='text-gray-700 hover:underline flex gap-[3px]'>
                                {website}
                            </a>
                            <p className=' text-gray-600 text-xs '>Website</p>
                        </div>
                        {
                            i == 0 && profile?._id === user?._id && <div className='flex items-center gap-2'>
                                <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                                    <IoEarthSharp />
                                </span>
                                <span onClick={() => handleActiveForm()} className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                                    <TbDots />
                                </span>
                            </div>
                        }
                    </div></li>)

                    : profile?._id === user?._id && <li className='flex gap-4  items-center'>
                        <div>
                            <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                                <IoLinkOutline size={24} className='text-gray-700' />
                            </div>
                        </div>
                        <span onClick={() => handleActiveForm()} className='text-primary flex items-center gap-1 cursor-pointer'> <AiOutlinePlusCircle /> Add website</span>
                    </li> :



                    <li>
                        <form action="" className='flex flex-col gap-5'>
                            {
                                inputs?.map((item, index) => <div key={index} className='flex  gap-4'>
                                    <div className="relative w-full">
                                        <input
                                            className="peer h-[50px] w-full rounded border focus-visible:border-[#1B8EF8]  px-2 pt-4 text-[#1B8EF8] focus:outline-none "
                                            type="text"
                                            id={`option_${index}`}
                                            placeholder=""
                                            defaultValue={item}
                                            onChange={(event) => handleChange(index, event)}
                                        />
                                        <label className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor={`option_${index}`}>
                                            Website
                                        </label>
                                    </div>
                                </div>)
                            }

                            {
                                inputs?.filter(x => x == '')?.length == 0 && <div>
                                    <button
                                        type='button'
                                        onClick={() => setInputs(prev => ([
                                            ...prev,
                                            ''
                                        ]))} className='py-1 inline-flex gap-1 items-center px-4 rounded bg-transparent text-primary'> <AiOutlinePlusCircle /> Add new media</button>
                                </div>
                            }

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

                                        className={`px-5  text-white py-2 rounded text-[12px] font-medium text-center bg-primary `}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                        <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} >
                            <div className='w-[500px] bg-white'>
                                <AudianceStatus setStatus={(e) => {
                                    setStatus(e)
                                }} status={status} setIsAudienceModal={setIsOpenModal} />
                            </div>
                        </Modal>
                    </li>

            }

        </>

    )
}

export default WebsiteListForm