'use client';
import axios from 'axios';
import React, { useState } from 'react'

const UploadImage = () => {

    const [text, setText] = useState('')
    const [file, setFile] = useState(null)

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    };

    const handleTextChange = e => {
        setText(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("file", file)
        formData.append('text', text);

        try {
            const res = await axios.post(`http://localhost:5000/api/auth/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true,
            })

            console.log(res?.data);
        } catch (error) {

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={text} onChange={handleTextChange} />
            </div>
            <div>
                <input type="file" name='file' onChange={handleFileChange} />
            </div>
            <div>
                <button className='px-3 py-1 bg-gray-500 inline-block' type='submit'>Upload</button>
            </div>
        </form>
    )
}

export default UploadImage