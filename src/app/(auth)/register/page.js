import PrimaryButton from '@/components/buttons/PrimaryButton'
import LoginForm from '@/components/forms/LoginForm'
import RegisterForm from '@/components/forms/RegisterForm'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='' style={{ backgroundImage: `url('/image/background/auth-bg.webp')` }} >
      <div className='grid res10:grid-cols-2   min-h-screen   gap-3   backdrop-blur-md bg-black bg-opacity-20 '>
        <div className=' bg-white bg-opacity-15 flex flex-col gap-4 items-center justify-center'>

          <RegisterForm />
          <div>

            <p className='text-gray-100'>
              I have an a account <Link href={'/login'} className='text-center underline '>Login</Link>
            </p>

          </div>

        </div>
        <div className='hidden res8:block col-span-1'></div>
      </div>
    </div>
  )
}

export default RegisterPage