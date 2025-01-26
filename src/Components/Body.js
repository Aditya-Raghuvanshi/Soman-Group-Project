import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MainContainer from './MainContainer'
import Loader from './Loader';

const Body = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },4000)
  },0)
  return loading?<Loader/> : (
    <div>
      <Navbar/>
      <MainContainer/>
    </div>
  )
}

export default Body
