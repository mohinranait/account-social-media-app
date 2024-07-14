import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go";

const SelectElement = ({ options, value, setValue, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='relative'>
            <div onClick={() => setIsOpen(!isOpen)} className='flex  gap-2 justify-between items-center py-2 px-3 rounded bg-gray-200 text-gray-900 cursor-pointer'>
                <span>{value || placeholder || "Select dropdown"}</span>
                <span className='flex items-center'><GoTriangleDown /></span>
            </div>
            {
                isOpen && <ul className='px-2 py-2 bg-white rounded shadow border border-gray-100 flex flex-col gap-2 absolute w-full  z-[99] '>
                    {
                        options?.map((item, i) => <li key={i} onClick={() => {
                            setIsOpen(false);
                            setValue(item?.value)
                        }} className='py-1 px-3 hover:bg-gray-100 rounded cursor-pointer'>{item?.label}</li>)
                    }
                </ul>
            }

        </div>
    )
}

export default SelectElement