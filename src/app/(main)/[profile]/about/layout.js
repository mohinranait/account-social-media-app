'use client';
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const AboutPageLayout = ({ children }) => {
    const params = useParams();
    console.log(params?.profile);
    return (
        <div className='px-2  res5:w-[500px] res7:w-[600px] res9:w-[870px] res10:w-[950px]    mx-auto mt-4  res10:px-10' >
            <div className='bg-white grid res9:grid-cols-[350px,auto]'>
                <div className='border-r py-3'>
                    <p className='text-xl px-5 font-medium text-gray-900'>About</p>
                    <ul className='flex flex-col gap-1 px-2 mt-2'>
                        <li><Link href={`/${params?.profile}/about/overview`} className='py-1 px-3 w-full text-gray-800 text-base hover:bg-gray-100 rounded inline-block'>Overview</Link></li>
                        <li><Link href={`/${params?.profile}/about/work_education`} className='py-1 px-3 w-full text-gray-800 text-base hover:bg-gray-100 rounded inline-block'>Work Education</Link></li>
                        <li><Link href={`/${params?.profile}/about/basic_contact`} className='py-1 px-3 w-full text-gray-800 text-base hover:bg-gray-100 rounded inline-block'>Basic Contact</Link></li>
                    </ul>
                </div>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AboutPageLayout