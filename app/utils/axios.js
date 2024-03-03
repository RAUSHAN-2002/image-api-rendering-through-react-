import React from 'react'
import axios from 'axios';


const axios = () => {
    const getposts= async () =>{
        try{
            const {data} = await axios.get("/posts?_limit=10");
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    }
    
  return (
    <div>axios example</div>
  )
}

export default axios