'use client';
import React, { useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import { useFormik } from 'formik'
import * as Yup from "yup";
import useAxios from '@/hooks/useAxios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/auth/authSlice';
import { fetchProfileStatics } from '@/redux/data/dataSlice';

const LoginForm = () => {
    const axios = useAxios();
    const router = useRouter();
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const loginSchema = new Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6).required("Password is required"),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                setIsLoading(true)
                const res = await axios.post('/auth/login', values);
                if (res.data?.success) {
                    dispatch(addUser(res.data))
                    dispatch(fetchProfileStatics())
                    router.push('/')
                    toast.success("Login success")
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
        <form onSubmit={formik.handleSubmit} className='flex gap-8  flex-col res55:w-[500px]'>
            <div>
                <label htmlFor="email" className='text-gray-100 mb-1 inline-flex'>Email</label>
                <input
                    name='email'
                    value={formik.email}
                    onChange={formik.handleChange}
                    type="text"
                    className='w-full py-2 px-3 rounded border bg-transparent text-white placeholder:text-gray-300 border-gray-100 focus-visible:border-gray-300 '
                    placeholder='Email' />
                {formik.errors.email && formik.touched.email && <p className='text-xs text-red-600 font-normal mt-1'>{formik.errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password" className='text-gray-100 mb-1 inline-flex'>Password</label>
                <input
                    name='password'
                    value={formik.password}
                    onChange={formik.handleChange}
                    type="password"
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
                    Login
                </PrimaryButton>


            </div>
        </form>
    )
}

export default LoginForm