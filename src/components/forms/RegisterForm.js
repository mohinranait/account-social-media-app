import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'

const RegisterForm = () => {
    return (
        <form action="" className='flex gap-5 px-3 res55:px-0   flex-col res55:w-[500px]'>
            <div className='  grid res55:grid-cols-2 gap-3'>
                <div>
                    <label htmlFor="firstname" className='text-gray-100 mb-1 inline-flex'>First Name</label>
                    <input type="text" id='firstname' className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 ' placeholder='First name' />
                </div>
                <div>
                    <label htmlFor="lastName" className='text-gray-100 mb-1 inline-flex'>Last Name</label>
                    <input type="text" id='lastName' className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 ' placeholder='Last name' />
                </div>
            </div>
            <div>
                <label htmlFor="dateofbirth" className='text-gray-100 mb-1 inline-flex'>Date of birth</label>
                <div className=' grid res55:grid-cols-3 gap-3'>
                    <div>
                        <select name="" id="" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '>
                            <option value="" className='text-black'>1</option>
                            <option value="" className='text-black'>2</option>
                            <option value="" className='text-black'>3</option>
                            <option value="" className='text-black'>4</option>
                        </select>

                    </div>
                    <div>

                        <select name="" id="" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '>
                            <option value="" className='text-black'>jan</option>
                            <option value="" className='text-black'>Feb</option>
                            <option value="" className='text-black'>Mar</option>
                            <option value="" className='text-black'>Apr</option>
                            <option value="" className='text-black'>May</option>
                            <option value="" className='text-black'>Jun</option>
                            <option value="" className='text-black'>Jul</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '>
                            <option value="" className='text-black'>2000</option>
                            <option value="" className='text-black'>2001</option>
                            <option value="" className='text-black'>2002</option>
                            <option value="" className='text-black'>2003</option>
                            <option value="" className='text-black'>2004</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="dateofbirth" className='text-gray-100 mb-1 inline-flex'>Gender</label>
                <div className=' grid res55:grid-cols-3 gap-3'>
                    <label htmlFor='male' className='flex justify-between items-center w-full py-2 px-3 rounded border bg-transparent text-white  border-gray-100 focus-visible:border-gray-300 '>
                        <span>Male</span>
                        <input type="radio" name='gender' id='male' value={'Male'} />
                    </label>
                    <label htmlFor='female' className='flex justify-between items-center w-full py-2 px-3 rounded border bg-transparent text-white  border-gray-100 focus-visible:border-gray-300 '>
                        <span>Male</span>
                        <input type="radio" name='gender' id='female' value={'Female'} />
                    </label>
                    <label htmlFor='others' className='flex justify-between items-center w-full py-2 px-3 rounded border bg-transparent text-white  border-gray-100 focus-visible:border-gray-300 '>
                        <span>Others</span>
                        <input type="radio" name='gender' id='others' value={'Others'} />
                    </label>

                </div>
            </div>

            <div>
                <label htmlFor="email" className='text-gray-100 mb-1 inline-flex'>Email</label>
                <input type="email" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 ' placeholder='Email' />
            </div>
            <div>
                <label htmlFor="password" className='text-gray-100 mb-1 inline-flex'>Password</label>
                <input type="password" className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 ' placeholder='Password' />
            </div>
            <div>
                <PrimaryButton
                    className={'w-full py-3'}
                >
                    Register
                </PrimaryButton>
            </div>
        </form>
    )
}

export default RegisterForm