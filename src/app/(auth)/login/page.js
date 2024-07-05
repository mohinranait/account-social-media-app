import PrimaryButton from '@/components/buttons/PrimaryButton'
import LoginForm from '@/components/forms/LoginForm'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
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
    </div>
  )
}

export default LoginPage