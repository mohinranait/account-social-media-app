'use client';
import React, { useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAxios from '@/hooks/useAxios';
import toast from 'react-hot-toast';

const RegisterForm = ({ setIsModal }) => {
    const axios = useAxios();
    const [isLoading, setIsLoading] = useState(false)

    const SignupSchema = new Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, "Minimum 6 charecters").max(20, "Maximum 20 charecters").required("Pasword is required"),
        day: Yup.string().required('Days is required'),
        month: Yup.string().required('Month is required'),
        year: Yup.string().required('Year is required'),
        gender: Yup.string().required("Gender is required"),
    });






    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: "Male",
            day: '',
            month: '',
            year: ''

        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            try {
                setIsLoading(true)
                const res = await axios.post('/auth/create', values);

                if (res.data?.success) {
                    toast.success("Register success")
                    setIsModal && setIsModal(false)
                } else {
                    toast.error("Somthing wrong, Try again")
                }
            } catch (error) {
                toast.error("Server error")
            } finally {
                setIsLoading(false)
            }
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className='flex gap-5 px-3 res55:px-0   flex-col res55:w-[500px]'>
            <div className='  grid res55:grid-cols-2 gap-3'>
                <div>
                    <label htmlFor="firstname" className='text-gray-100 mb-1 inline-flex'>First Name</label>
                    <input
                        type="text"
                        name='firstName'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        id='firstname'
                        className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '
                        placeholder='First name' />
                    {formik.errors.firstName && formik.touched.firstName && <p className='text-xs text-red-600 font-normal mt-1'>{formik.errors.firstName}</p>}
                </div>
                <div>
                    <label htmlFor="lastName" className='text-gray-100 mb-1 inline-flex'>Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        id='lastName'
                        className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '
                        placeholder='Last name' />
                    {formik.errors.lastName && formik.touched.lastName && <p className='text-xs text-red-600 font-normal mt-1'>{formik.errors.lastName}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="dateofbirth" className='text-gray-100 mb-1 inline-flex'>Date of birth</label>
                <div className=' grid res55:grid-cols-3 gap-3'>
                    <div>
                        <select
                            name="day"
                            id=""
                            value={formik.values.day}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className={`w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300  focus-visible:border-gray-300 ${formik.errors.day && formik.touched.day ? 'border-red-600' : 'border-gray-100'} `}>
                            <option value="" className='text-black'>Day</option>
                            <option value="1" className='text-black'>1</option>
                            <option value="2" className='text-black'>2</option>
                            <option value="3" className='text-black'>3</option>
                            <option value="4" className='text-black'>4</option>
                        </select>

                    </div>
                    <div>
                        <select
                            name="month"
                            id=""
                            value={formik.values.month}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className={`w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300  focus-visible:border-gray-300 ${formik.errors.month && formik.touched.month ? 'border-red-600' : 'border-gray-100'} `}>
                            <option value="" className='text-black'>Month</option>
                            <option value="0" className='text-black'>Jan</option>
                            <option value="1" className='text-black'>Feb</option>
                            <option value="2" className='text-black'>Mar</option>
                            <option value="3" className='text-black'>Apr</option>
                            <option value="4" className='text-black'>May</option>
                            <option value="5" className='text-black'>Jun</option>
                            <option value="6" className='text-black'>Jul</option>
                            <option value="7" className='text-black'>Aug</option>
                            <option value="8" className='text-black'>Sep</option>
                            <option value="9" className='text-black'>Oct</option>
                            <option value="10" className='text-black'>Nov</option>
                            <option value="11" className='text-black'>Dec</option>
                        </select>
                    </div>
                    <div>
                        <select
                            name="year"
                            id=""
                            value={formik.values.year}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className={`w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300  focus-visible:border-gray-300 ${formik.errors.year && formik.touched.year ? 'border-red-600' : 'border-gray-100'} `}>
                            <option value="" className='text-black'>Years</option>
                            <option value="2000" className='text-black'>2000</option>
                            <option value="2001" className='text-black'>2001</option>
                            <option value="2002" className='text-black'>2002</option>
                            <option value="2003" className='text-black'>2003</option>
                            <option value="2004" className='text-black'>2004</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label htmlFor="dateofbirth" className='text-gray-100 mb-1 inline-flex'>Gender</label>
                <div className=' grid res55:grid-cols-3 gap-3'>
                    <label htmlFor='male' className='flex justify-between items-center w-full py-2 px-3 rounded border bg-transparent text-white  border-gray-100 focus-visible:border-gray-300 '>
                        <span>Male</span>
                        <input type="radio" onChange={formik.handleChange} checked={formik.values.gender == 'Male'} name='gender' id='male' value={'Male'} />
                    </label>
                    <label htmlFor='female' className='flex justify-between items-center w-full py-2 px-3 rounded border bg-transparent text-white  border-gray-100 focus-visible:border-gray-300 '>
                        <span>Male</span>
                        <input type="radio" onChange={formik.handleChange} checked={formik.values.gender == 'Female'} name='gender' id='female' value={'Female'} />
                    </label>
                    <label htmlFor='others' className='flex justify-between items-center w-full py-2 px-3 rounded border bg-transparent text-white  border-gray-100 focus-visible:border-gray-300 '>
                        <span>Others</span>
                        <input type="radio" onChange={formik.handleChange} checked={formik.values.gender == 'Others'} name='gender' id='others' value={'Others'} />
                    </label>
                </div>
            </div>

            <div>
                <label htmlFor="email" className='text-gray-100 mb-1 inline-flex'>Email</label>
                <input
                    type="email"
                    id='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '
                    placeholder='Email' />
                {formik.errors.email && formik.touched.email && <p className='text-xs text-red-600 font-normal mt-1'>{formik.errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password" className='text-gray-100 mb-1 inline-flex'>Password</label>
                <input
                    type="password"
                    id='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '
                    placeholder='Password' />
                {formik.errors.password && formik.touched.password && <p className='text-xs text-red-600 font-normal mt-1'>{formik.errors.password}</p>}
            </div>
            <div>
                <PrimaryButton
                    disable={isLoading ? true : false}
                    type='submit'
                    className={'w-full py-3 flex gap-1 items-center justify-center'}
                >
                    {
                        isLoading &&
                        <div className="w-5 h-5 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-white"></div>
                    }
                    Register
                </PrimaryButton>
            </div>
        </form>
    )
}

export default RegisterForm