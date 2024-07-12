'use client';
import { BiLogoAdobe } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { SlHome } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiVideo } from "react-icons/pi";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useDispatch, useSelector } from "react-redux";
import useAxios from "@/hooks/useAxios";
import { logoutUser } from "@/redux/auth/authSlice";
import { useRouter } from "next/navigation";
const MainHeader = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const axios = useAxios();
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const res = await axios.post('/auth/logout', {});
            if (res?.data?.success) {
                dispatch(logoutUser())
            }
        } catch (error) {
            console.log('logout faield');
        }
    }
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
                                        <Link href={`/chat`} className="flex items-center gap-1 cursor-pointer relative">
                                            <span className="w-[15px] h-[15px] rounded-full bg-white text-primary flex items-center justify-center text-xs  absolute -top-1 -right-1">4</span>
                                            <FaFacebookMessenger size={25} className="text-white" />
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="flex items-center gap-1 cursor-pointer relative">
                                            <span className="w-[15px] h-[15px] rounded-full bg-white text-primary flex items-center justify-center text-xs  absolute -top-1 -right-1">4</span>
                                            <IoIosNotificationsOutline size={25} className="text-white" />
                                        </div>
                                    </li>


                                    <li className="relative">
                                        <Menu>
                                            <MenuButton>
                                                <div className="flex items-center gap-1 cursor-pointer ">
                                                    <FaRegUserCircle size={25} className="text-white" />
                                                    <span className="text-md text-white">{user?.name?.firstName}</span>
                                                </div>
                                            </MenuButton>
                                            <MenuItems >
                                                <MenuItem>
                                                    <div className="w-[300px]  bg-white p-2 rounded-md absolute right-0 top-full">
                                                        <div className="flex flex-col mb-1  shadow transition p-1 rounded cursor-pointer">


                                                            <Link href={`/${user?.profileUrl}`} className="flex gap-2 py-2 px-2 hover:bg-gray-100 rounded items-center">
                                                                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300">
                                                                    <Image src={'/image/avater/profile1.png'} className="w-10 h-10 rounded-full" width={100} height={100} alt="avater" />
                                                                </span>
                                                                <span className="font-medium">{user?.name?.firstName}</span>
                                                            </Link>
                                                            <hr className=" border-gray-200 my-1  " />

                                                            <div className="flex gap-2 py-2 px-2 hover:bg-gray-100 rounded items-center">
                                                                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300">
                                                                    <Image src={'/image/avater/profile1.png'} className="w-10 h-10 rounded-full" width={100} height={100} alt="avater" />
                                                                </span>
                                                                <span className="font-medium">Rajon gammer</span>
                                                            </div>

                                                        </div>
                                                        <div className="flex items-center justify-between gap-1 hover:bg-gray-100 transition p-2 px-1 rounded cursor-pointer">
                                                            <div className="flex gap-2 items-center">
                                                                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                                                                    <CiSettings />
                                                                </span>
                                                                <span>Setting</span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div className="flex items-center justify-between gap-1 hover:bg-gray-100 transition p-1 rounded cursor-pointer">
                                                            <div className="flex gap-2 items-center">
                                                                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                                                                    <IoIosHelpCircleOutline />
                                                                </span>
                                                                <span>Help & support</span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div onClick={handleLogout} className="flex items-center justify-between gap-1 hover:bg-gray-100 transition p-1 rounded cursor-pointer">
                                                            <div className="flex gap-2 items-center">
                                                                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                                                                    <RiLogoutCircleRLine />
                                                                </span>
                                                                <span>Logout</span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </MenuItem>


                                            </MenuItems>
                                        </Menu>


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