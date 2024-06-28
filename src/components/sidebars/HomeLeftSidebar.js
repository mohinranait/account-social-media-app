import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { IoGameController } from "react-icons/io5";
import { PiVideo } from 'react-icons/pi';

const HomeLeftSidebar = () => {
    return (
        <div className='top-[75px] sticky'>

            <div className='bg-white rounded'>
                <ul className='py-3 px-3 '>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all' transition-all>
                            <FaRegUserCircle />
                            <span>Mohin Rana</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <RiPagesFill />
                            <span>Pages</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <LiaLayerGroupSolid size={18} />
                            <span>Groups</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <PiVideo size={18} />
                            <span>Videos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} className='w-full py-2 px-3 rounded flex items-center gap-3 hover:bg-gray-50 transition-all'>
                            <IoGameController size={18} />
                            <span>Games</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeLeftSidebar