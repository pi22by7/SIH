'use client'
// import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import React, {useState} from "react";
import axios, {isCancel, AxiosError} from 'axios';
const Page = () => {
    const [image, setImage] = useState('')
    const handleImage = (e: any) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }
    const handleUpload = () => {
        const formData = new FormData()
        formData.append('image', image)
        axios.post('url', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            if (!isCancel(err)) {
                console.log(err)
            }
        })
    }

    return (
        <div>
            <input type="file" name={'file'} onChange={handleImage}/>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}
export default Page

