import { BiLogoAdobe } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { SlHome } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiVideo } from "react-icons/pi";
import { LiaLayerGroupSolid } from "react-icons/lia";
const MainHeader = () => {
    return (
        <header className="bg-primary top-0 sticky z-[99] py-3">
            <div>
                <div className='px-4 3xl:container'>
                    <div className='flex res7:grid justify-between items-center grid-cols-4 gap-5'>

                        <div className='col-span-1 flex items-center gap-5 '>
                            <span>
                                <BiLogoAdobe />
                            </span>
                            <div className="bg-white rounded">
                                <div className="flex items-center gap-1 py-1 px-2  ">
                                    <span className=""><IoIosSearch /></span>
                                    <input type="search" placeholder="Search..." className="w-full focus-visible:outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className='hidden res7:block col-span-2'>
                            <div>
                                <ul className="flex justify-around items-center gap-5">
                                    <li>
                                        <Link href={'/'}>
                                            <SlHome size={25} className="text-white" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <PiVideo size={28} className="text-white" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <PiVideo size={28} className="text-white" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/'}>
                                            <LiaLayerGroupSolid size={30} className="text-white" />
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div>
                                <ul className="flex justify-end items-center gap-5">

                                    <li>
                                        <div className="flex items-center gap-1 cursor-pointer relative">
                                            <span className="w-[15px] h-[15px] rounded-full bg-white text-primary flex items-center justify-center text-xs  absolute -top-1 -right-1">4</span>
                                            <FaFacebookMessenger size={25} className="text-white" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-1 cursor-pointer relative">
                                            <span className="w-[15px] h-[15px] rounded-full bg-white text-primary flex items-center justify-center text-xs  absolute -top-1 -right-1">4</span>
                                            <IoIosNotificationsOutline size={25} className="text-white" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <FaRegUserCircle size={25} className="text-white" />
                                            <span className="text-md text-white">Jhon</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader