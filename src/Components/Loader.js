import React, { useEffect, useState } from "react";
import "./loader.css";
import gsap from "gsap";
import LoaderIcon from '../assets/LoaderIcon.svg'

const Loader = () => {
    const [count,setCount]=useState(1);
    useEffect(()=>{
      const intervalTime = 3000 / 100; 
      const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 100) {
          clearInterval(interval); // Stop the interval once it reaches 100
          return prevCount;
        }
        return prevCount + 1;
      });
      gsap.to('.loader',2,{
        top:"-100%",
        ease: "power4.out",
        delay: 4,
      })
    }, intervalTime);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
    },[])
  return (
    <div className="loader bg-[#101828]">
      <div className="svg-wrapper">
      <div className="mx-auto text-white"><img src={LoaderIcon} alt="" /></div>
        <p className="text-white mx-auto font-zodiac font-semibold">{count} %</p>
      </div>
    </div>
  );
};

export default Loader;