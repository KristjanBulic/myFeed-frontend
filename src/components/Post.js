import ImgMediaCard from "./ImgMediaCard"
import axios from "axios";
import React, { useEffect, useState } from 'react';

export default function Post(props){

    const [data, setData] = useState([]);


  useEffect(async () => {
      const interval = setInterval(() => {
        axios.get('http://localhost:4000/')
        .then(res => {
          console.log(res)
          setData(res.data)
        })
        .catch(er => {
          console.log(er)
        });
        
      }, 5000)
      return () => clearInterval(interval)
    
  }, []);

    return(
        <div>
            {data.map(item => (<ImgMediaCard title={item.Title} link={item.Link}/>))}
        </div>
    )
}