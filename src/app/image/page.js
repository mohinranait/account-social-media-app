'use client';
import React, { useState } from 'react'

const UploadImage = () => {
    const [upload, setUpload] = useState('')
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        setUpload(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))

    }
    console.log(preview);

    const handleUploadImage = async e => {
        e.preventDefault();

        setLoading(true)
        try {
            let imageUrl;
            if (upload && (
                upload.type == 'image/png' ||
                upload.type == 'image/jpg'
            )) {
                const image = new FormData()
                image.append('file', upload)
                image.append('cloud_name', 'dm9s5d3xk')
                image.append('upload_preset', 'dm9s5d3xk')

                const res = await fetch(`https://api.cloudinary.com/v1_1/dm9s5d3xk/image/upload`, {
                    method: "POST",
                    body: image
                })

                const data = await res.json();
                imageUrl = data.url.toString()
                console.log(data, imageUrl);
                setPreview(null)
            }
        } catch (error) {

        }
    }
    return (
        <div>
            <form onSubmit={handleUploadImage}>
                <input type="file" onChange={(e) => handleImageChange(e)} accept='image/jpg, image/png' name='file' />
                <button type='submit'>Upload</button>
            </form>
            <div>
                {
                    preview && <img src={preview} alt="avae" />
                }

            </div>
        </div>
    )
}

export default UploadImage