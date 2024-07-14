'use client';

import PrimaryButton from '@/components/buttons/PrimaryButton';
import SelectElement from '@/components/elements/SelectElement';
import Modal from '@/components/modals/Modal';
import useAxios from '@/hooks/useAxios';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { IoEarthSharp, IoHeartSharp } from 'react-icons/io5'
import { MdModeEditOutline } from 'react-icons/md'
import AudianceStatus from './AudianceStatus';
import { HiUsers } from "react-icons/hi2";
import { FaLock } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/redux/auth/authSlice';
import toast from 'react-hot-toast';
import { ProfileContext } from '@/provider/ProfileProvider';




const optionsYears = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' }
]

const optionsMonths = [
    { value: 'Jan', label: 'Jan' },
    { value: 'Feb', label: 'Feb' },
    { value: 'Mar', label: 'Mar' },
    { value: 'Apr', label: 'Apr' },
]

const optionsDays = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
]

const optionsRelation = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Ralation', label: 'Ralation' },
]


const UpdateRelation = () => {
    const { user } = useSelector(state => state.auth);
    const { profile } = useContext(ProfileContext)
    const { isRelation } = user
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const axios = useAxios();
    const [isEdit, setIsEdit] = useState(false)
    const [selectUser, setSelectUser] = useState(null)
    const [fetchedUsers, setFetchedUsers] = useState([])
    const [isText, setIsText] = useState('')
    const [formData, setFormData] = useState({
        relationType: isRelation?.relationType || '',
        withRelation: null,
        year: '',
        day: '',
        month: '',
        status: isRelation?.status || '',
    })




    useEffect(() => {
        if (isText) {
            (async function () {
                try {
                    const res = await axios.get(`/user/all?search=${isText}`);
                    setFetchedUsers(res?.data?.payload?.users);
                } catch (error) {

                }
            })()
        }
    }, [isText])


    const handleCancelUpdate = () => {
        setIsEdit(false);
        setSelectUser(null)
        setFetchedUsers([])
        setIsText(null);
        setFormData(prev => ({
            ...prev,
            relationType: '',
            withRelation: '',
            year: '',
            day: '',
            month: '',
            status: '',
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {

            const res = await axios.patch(`/user/update?userId=${user?._id}`, { isRelation: formData })
            console.log(res?.data);
            if (res?.data?.success) {
                setIsEdit(false)
                dispatch(addUser(res?.data));
                toast.success("Relation updated")
            }
        } catch (error) {

        }
    }
    return (

        <li>
            {
                !isEdit ? <div className='flex gap-4  items-center'>
                    <div>
                        <div className='w-10 h-10 rounded-full   flex items-center justify-center'>
                            <IoHeartSharp size={28} className='text-gray-700' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='text-gray-500 flex gap-[3px]'>
                            {profile?.isRelation?.relationType}
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                            {
                                profile?.isRelation?.status == 'Public' ? <IoEarthSharp size={18} /> :
                                    profile?.isRelation?.status == 'Friends' ? <HiUsers size={18} /> :
                                        <FaLock size={18} />
                            }
                        </span>
                        <span onClick={() => setIsEdit(true)} className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                            <MdModeEditOutline />
                        </span>
                    </div>
                </div> : <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='relative'>

                        <SelectElement
                            options={optionsRelation}
                            value={formData?.relationType}
                            placeholder="Select Relation"
                            setValue={(e) => setFormData(prev => ({
                                ...prev,
                                relationType: e
                            }))}
                        />
                    </div>
                    {
                        formData?.relationType != 'Single' && <div className='relative'>
                            <div className="relative w-full">

                                <input
                                    className="peer h-[50px] w-full rounded border focus-visible:border-[#1B8EF8]  px-2 pt-4 text-[#1B8EF8] focus:outline-none "
                                    type="text"
                                    id="social_meida_input_55"
                                    placeholder=""
                                    onChange={(e) => {
                                        setIsText(e.target.value);
                                        setSelectUser(null)
                                    }}
                                    value={isText || selectUser?.name?.fullName}
                                />

                                <label className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="social_meida_input_55">
                                    Partner
                                </label>

                            </div>
                            {
                                fetchedUsers?.length > 0 && <ul className='flex flex-col gap-1 max-h-[200px] bg-white z-[99] overflow-y-auto absolute w-full p-2 shadow border-gray-200 rounded'>

                                    {
                                        fetchedUsers?.map((user, i) => <li onClick={() => {
                                            setSelectUser(user)
                                            setFormData(prev => ({
                                                ...prev,
                                                withRelation: user?._id,
                                            }))
                                            setFetchedUsers([])
                                            setIsText('')
                                        }} key={i} className="px-3 py-2 cursor-pointer flex items-center gap-3 rounded hover:bg-gray-200">
                                            <Image src="/image/avater/profile1.png" width={40} height={40} alt="avater" className='w-10 h-10 rounded-full ' />
                                            <p>{user?.name?.fullName}</p>
                                        </li>)
                                    }

                                </ul>
                            }

                        </div>
                    }

                    <div className='flex items-center gap-5'>
                        <span>Since</span>

                        <SelectElement
                            options={optionsYears}
                            value={formData?.year}
                            placeholder="Year"
                            setValue={(e) => setFormData(prev => ({
                                ...prev,
                                year: e
                            }))}
                        />
                        {
                            formData?.year && <SelectElement
                                options={optionsMonths}
                                value={formData?.month}
                                placeholder="Month"
                                setValue={(e) => setFormData(prev => ({
                                    ...prev,
                                    month: e
                                }))}
                            />
                        }

                        {
                            formData?.year && formData?.month && <SelectElement
                                options={optionsDays}
                                value={formData?.day}
                                placeholder="Day"
                                setValue={(e) => setFormData(prev => ({
                                    ...prev,
                                    day: e
                                }))}
                            />
                        }



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
                                formData?.status == 'Public' ? <> <IoEarthSharp size={18} /> Public</> :
                                    formData?.status == 'Friends' ? <> <HiUsers size={18} /> Friends</> :
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
                                className={'px-5 bg-primary text-white py-2 rounded text-[12px] font-medium text-center'}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            }

            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} >
                <div className='w-[500px] bg-white'>
                    <AudianceStatus setStatus={(e) => {
                        setFormData(prev => ({
                            ...prev,
                            status: e
                        }))
                    }} status={formData?.status} setIsAudienceModal={setIsOpenModal} />
                </div>
            </Modal>

        </li>
    )
}

export default UpdateRelation