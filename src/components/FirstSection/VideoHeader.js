import React from 'react'
import { useGLTFLoader } from '@react-three/drei'
import { useEffect, useRef } from 'react';

export default function VideoHeader() {
  const videoRef = useRef();
    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },1000)
    }, []);
  return (
    <video
    ref={videoRef}
    
    width="250"
    loop
    muted
    style= {{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
       
        minWidth: '100%',
        zIndex: '-1',
        objectPosition: 'center',
        objectFit: 'cover'}}
    >
       <source src={"https://res.cloudinary.com/tecdigital/video/upload/v1663254634/header-video_hdx3gr.mp4"}/>
</video>
    )  
}
