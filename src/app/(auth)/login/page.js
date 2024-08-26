'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton'
import LoginForm from '@/components/forms/LoginForm'
import RegisterForm from '@/components/forms/RegisterForm';
import Modal from '@/components/modals/Modal';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCross } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";



const LoginPage = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className='' style={{ backgroundImage: `url('/image/background/auth-bg.webp')` }} >
      <div className='grid res10:grid-cols-2   min-h-screen   gap-3   backdrop-blur-md bg-black bg-opacity-20 '>
        <div className=' bg-white bg-opacity-15 flex flex-col gap-6 items-center justify-center'>

          <LoginForm />
          <div>

            <Link href={'/'} className='text-center'>Forgot password</Link>
          </div>
          <div>
            <PrimaryButton
              type='button'
              onClick={() => setIsModal(true)}
              bg='bg-black'
              color='text-white'
              className={'py-2 w-full  '}
            >
              Create new Account
            </PrimaryButton>
          </div>
        </div>
        <div className='hidden res8:block col-span-1'></div>
      </div>

      <Modal
        isOpen={isModal}
        setIsOpen={setIsModal}
      >
        <div className='bg-gray-900 p-10 bg-opacity-90 backdrop-blur-sm'>
          <div className='flex items-center justify-between mb-5'>
            <p className='text-xl text-white font-semibold'>Reigster now</p>
            <span onClick={() => setIsModal(false)} className='w-10 h-10 cursor-pointer rounded-full bg-gray-500 text-black flex items-center justify-center'><IoCloseOutline /> </span>
          </div>
          <RegisterForm />
        </div>
      </Modal>
    </div>
  )
}

export default LoginPage