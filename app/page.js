"use client";
import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const page = () => {
  const [Images, setImages]  =useState([]);
  const ImagesHandler = async ()=>{
    try {
       const response = await axios.get("https://picsum.photos/v2/list");
       const data = response.data;
       setImages(data);
       console.log(Images)
    } catch (error) {
      console.error("Error fetching Images")
    }
  }

  return (
    <div>
      <button onClick={ImagesHandler}
          className='  m-8 px-9 py-9 bg-white text-black font-bold'
      >get Images</button>
      <hr className='bg-white' />
      <div className='p-10'>
        {Images.map((elem,i)=>{
          return <img 
                  key={i}
                  src={elem.download_url}
                  width={300}
                  height={300}
                  className='m-10 rounded inline-block'
         />
        })}
      </div>
    </div>
  )
}

export default page