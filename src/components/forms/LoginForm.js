import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

const LoginForm = () => {
    return (
        <form action="" className='flex gap-8  flex-col w-[500px]'>
            <div>
                <label htmlFor="email" className='text-gray-100 mb-1 inline-flex'>Email</label>
                <input type="text" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 ' placeholder='Email' />
            </div>
            <div>
                <label htmlFor="password" className='text-gray-100 mb-1 inline-flex'>Password</label>
                <input type="text" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 ' placeholder='Email' />
            </div>
            <div>
                <PrimaryButton
                    className={'w-full py-3'}
                >
                    Login
                </PrimaryButton>
            </div>
        </form>
    )
}

export default LoginForm