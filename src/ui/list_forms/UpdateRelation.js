'use client';

import PrimaryButton from '@/components/buttons/PrimaryButton';
import React, { useEffect, useState } from 'react'
import { IoEarthSharp, IoHeartSharp } from 'react-icons/io5'
import { MdModeEditOutline } from 'react-icons/md'
import Select from 'react-select'



const UpdateRelation = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedValue, setSelectedValue] = useState("Choose One")
    const options = ['Single', 'Married', 'Relation'];
    const [isEdit, setIsEdit] = useState(false)

    const [formData, setFormData] = useState({
        relationType: 'Single',
        withRelation: null,
        year: '',
        status: '',
    })

    const optionsYears = [
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' }
    ]

    console.log(formData);


    const handleSubmit = e => {
        e.preventDefault();
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
                            Single
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='w-8 h-8 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                            <IoEarthSharp />
                        </span>
                        <span onClick={() => setIsEdit(true)} className='w-10 h-10 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center'>
                            <MdModeEditOutline />
                        </span>
                    </div>
                </div> : <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='relative'>

                        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex items-center justify-between rounded bg-gray-300 px-3 py-2 border relative">
                            <p className="font-medium text-gray-600 capitalize">{formData?.relationType}</p>
                            <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>

                        </div>

                        <div className={`${isOpen ? 'visible top-0 opacity-100' : 'invisible -top-4 opacity-0'}  mx-auto my-4 w-full bg-white rounded-xl py-4 border duration-300 absolute top-full z-50 left-0 `}>
                            {options?.map((option, idx) => (
                                <div key={idx} onClick={(e) => {
                                    setFormData({ ...formData, relationType: e.target.textContent });
                                    setIsOpen(false);
                                }} className="px-6 py-2 text-gray-500 hover:bg-gray-100 capitalize">
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                    {
                        !formData?.relationType == 'Single' && <div>
                            <div className="relative w-full">

                                <input
                                    className="peer h-[50px] w-full rounded border focus-visible:border-[#1B8EF8]  px-2 pt-4 text-[#1B8EF8] focus:outline-none "
                                    type="text"
                                    id="social_meida_input_55"
                                    placeholder="" />

                                <label className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="social_meida_input_55">
                                    Partner
                                </label>

                            </div>
                        </div>
                    }

                    <div className='flex items-center gap-5'>
                        <span>Since</span>
                        <div>
                            <Select
                                defaultValue={optionsYears[1]}
                                options={optionsYears}
                            // formatGroupLabel={formatGroupLabel}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <PrimaryButton className=' rounded bg-gray-700 flex items-center gap-1'> <IoEarthSharp size={20} /> Only Me</PrimaryButton>
                        <div className='flex items-center gap-3'>
                            <button
                                onClick={() => setIsEdit(false)}
                                type='button'
                                className={'px-3 bg-gray-200 py-2 rounded text-[12px] font-medium text-center'}
                            >
                                Cancel
                            </button>
                            <button
                                type='button'
                                className={'px-5 bg-gray-200 py-2 rounded text-[12px] font-medium text-center'}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            }


        </li>
    )
}

export default UpdateRelation