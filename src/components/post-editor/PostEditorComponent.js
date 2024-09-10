'use client';
import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { BsEmojiFrown } from "react-icons/bs";
import PrimaryButton from '../buttons/PrimaryButton';
import { MdArrowDropDown } from "react-icons/md";
import AudianceStatus from '@/ui/list_forms/AudianceStatus';
import StatusIconWithText from '@/ui/StatusIconWithText';
import SearchTagUserByName from '@/ui/common/SearchTagUserByName';
import useCreatePost from '@/hooks/useCreatePost';
import { useDispatch, useSelector } from 'react-redux';
import useAxios from '@/hooks/useAxios';
import Image from 'next/image';
import { setAddPost } from '@/redux/data/dataSlice';

const PostEditorComponent = ({ setIsOpen, selectedPost }) => {
    const { post, setPost, withFriends, setWithFriends } = useCreatePost({});
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const axios = useAxios();
    const [isSecondModal, setIsSecondModal] = useState(false)
    const [isFile, setIsFile] = useState(false)
    const [isTagModal, setIsTagModal] = useState(false)
    const [isAudienceModal, setIsAudienceModal] = useState(false)
    const [images, setImages] = useState('')
    const [uploadFile, setUploadFile] = useState(null)



    useEffect(() => {
        if (selectedPost?._id) {
            setPost(selectedPost)
        }
    }, [selectedPost?._id])




    // handle Submit post
    const handleSubmitPost = async () => {

        let uploadedImageId = '';
        if (uploadFile != null) {
            let formData = new FormData();
            formData.append('file', uploadFile);
            formData.append('fileType', 'post');

            try {
                const res = await axios.post(`/file/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                uploadedImageId = res?.data?.payload?.file?._id;

            } catch (error) {
                console.log(error);

            }
        }



        let postObject = {
            ...post,
            owner: user?._id,
            withFriends,
        }

        if (uploadedImageId.trim() != '') {
            postObject.media = uploadedImageId;
        }



        try {
            const res = await axios.post(`/post/create`, postObject)
            if (res?.data.success) {
                dispatch(setAddPost(res?.data))
                setIsOpen(false)
                setPost({})
                setWithFriends([])
            }
        } catch (error) {

        }
    }


    // handle upload image
    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        setUploadFile(file)

        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setImages(e.target.result);
            };
            reader.readAsDataURL(file);
        }

    }



    return (

        <div key={user?._id} className='w-screen res6:w-[500px]  overflow-x-hidden '>
            <div className={`w-[200vw]  res6:w-[1000px] grid grid-cols-2 items-center transition duration-75   ${isSecondModal ? ' -translate-x-[100vw] res6:-translate-x-[500px]' : 'translate-x-[0px]'} `}>
                {/* First modal  */}
                <div className='w-screen  res6:w-[500px] min-h-[calc(100vh-100px)] res6:min-h-[300px] bg-white'>
                    <div className=''>
                        <div className='relative  py-3 border-b'>
                            <p className='text-center text-xl font-medium'>Create post</p>
                            <span onClick={() => setIsOpen(false)} className='w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-100 absolute right-3 top-[6px]'>
                                <IoCloseOutline size={20} />
                            </span>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5 p-4'>
                        <div className='flex gap-2'>
                            <Image width={40} height={40} src="/image/avater/profile1.png" className='w-10 h-10 rounded-full' alt="avater" />
                            <div>
                                <p className='text-base text-gray-800 font-medium'>{user?.name?.fullName} {withFriends?.length > 0 && <> with {withFriends?.map((item, idx) => <span key={idx} className='text-blue-600 underline mr-1 cursor-pointer'>{item?.name?.fullName}</span>)} </>} </p>
                                <div className='flex'>
                                    <div onClick={() => {
                                        setIsSecondModal(true);
                                        setIsAudienceModal(true)
                                    }} className='flex items-center gap-1  bg-gray-100 rounded  px-2 py-1 cursor-pointer '>
                                        {/* <IoEarthSharp size={13} />
                                        <span className='text-sm'>Public</span> */}
                                        <StatusIconWithText status={post?.status} iconStyle={'text-gray-800'} textStyle="text-gray-800 !text-xs" size={16} />
                                        <MdArrowDropDown size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea value={post?.text} onChange={(e) => setPost(prev => ({ ...prev, text: e.target.value }))} name="" id="" placeholder='Write your mind' className='w-full mb-3 min-h-8  focus-visible:outline-none' >

                            </textarea>


                            {
                                isFile && <div className='border p-2 rounded  '>

                                    <label htmlFor='uploadImages' >

                                        <input type="file" name='file' onChange={handleUploadImage} id='uploadImages' hidden />
                                        <div className='w-full h-full relative bg-gray-100 hover:bg-gray-200 cursor-pointer'>
                                            <span onClick={() => setIsFile(false)} className='w-8 h-8  rounded-full bg-white hover:bg-gray-100 flex items-center justify-center absolute right-2 top-2'>
                                                <IoCloseOutline />
                                            </span>
                                            {
                                                images ? <div className='max-h-[250px] overflow-y-auto'>
                                                    <Image src={images} width={400} height={400} className='w-full h-auto' alt="avater" />
                                                </div> : <div className='py-7 '>
                                                    <div className='flex items-center justify-center'>
                                                        <span className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center'>
                                                            <MdAddToPhotos size={22} />
                                                        </span>
                                                    </div>
                                                    <div className='text-gray-600 text-center text-lg font-medium'>
                                                        Add Photos/Videos
                                                    </div>
                                                    <p className='text-xs text-center text-gray-400'>Or Drag & drop</p>
                                                </div>
                                            }


                                        </div>
                                    </label>
                                </div>
                            }

                        </div>

                        <div className='border rounded-md flex items-center justify-between gap-2 py-2 px-4'>
                            <span className='text-gray-600 text-base cursor-pointer'>Add your post</span>
                            <ul className='flex gap-3 items-center justify-end'>
                                <li><span onClick={() => setIsFile(true)} className='w-10 h-10 cursor-pointer rounded-full bg-green-100 flex items-center justify-center'><MdAddToPhotos size={20} className='text-green-400' /></span></li>
                                <li><span onClick={() => {
                                    setIsSecondModal(true);
                                    setIsTagModal(true)
                                }} className='w-10 h-10 cursor-pointer rounded-full bg-blue-100 flex items-center justify-center'><FaUserTag size={20} className='text-blue-400' /></span></li>
                                <li><span className='w-10 h-10 cursor-pointer rounded-full bg-yellow-50 flex items-center justify-center'><BsEmojiFrown size={20} className='text-yellow-400' /></span></li>
                            </ul>
                        </div>
                        <div>
                            <PrimaryButton
                                type='button'
                                className={'w-full py-[10px]'}
                                onClick={() => handleSubmitPost()}
                            >
                                Next
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                {/* Second modal */}
                <div className='w-screen  res6:w-[500px]  res6:h-auto bg-white rounded'>
                    {/* Tag firends modal */}
                    {
                        isTagModal &&
                        <SearchTagUserByName setIsSecondModal={setIsSecondModal} setIsTagModal={setIsTagModal} />
                    }


                    {/* Select post audience */}
                    {
                        isAudienceModal &&
                        <AudianceStatus
                            setStatus={(e) => {
                                setPost(prev => ({ ...prev, status: e }))
                            }}
                            status={post?.status}
                            setIsAudienceModal={setIsAudienceModal}
                            setIsSecondModal={setIsSecondModal}
                        />
                    }
                </div>
            </div>



        </div>

    )
}

export default PostEditorComponent