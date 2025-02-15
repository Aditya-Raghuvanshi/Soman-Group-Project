import React, { useState } from 'react'
import instagramIcon from '../assets/instagram.svg' 
import facebookIcon from '../assets/facebook.svg' 
import youtubeIcon from '../assets/youtube.svg' 
import twitterIcon from '../assets/twitter.svg' 

const Contact = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const handleSubmit = ()=>{
        if(!name)
        {
            alert('Please Enter Name');
        }
        if(!email)
        {
            alert('Please Enter Email');
        }
        
    }
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-28 py-20 border-t border-dashed border-[#D6C3AC]'>
            <p className='text-3xl md:text-5xl w-full md:w-[50%] font-zodiac'>Reach out to us!</p>
            <div className='w-full md:w-[50%] mt-4 md:mt-auto'>
                <p className='text-[#D6C3AC] text-lg md:text-xl'>Full name</p>
                <input className='border-t-0 border-x-0 border-[#D6C3AC] w-full mb-6 py-2 focus:outline-none focus:ring-0 focus:border-b focus:border-[#D6C3AC]' onChange={(e)=>{setName(e.target.value)}} type="text" />
                <p className='text-[#D6C3AC] text-lg md:text-xl'>Email</p>
                <input className='border-t-0 border-x-0 border-[#D6C3AC] w-full py-2 focus:outline-none focus:ring-0 focus:border-b focus:border-[#D6C3AC]' onChange={(e)=>{setEmail(e.target.value)}} type="text" />
                <button className='text-white text-xs bg-[#0B6476] font-semibold mt-8 w-[120px] h-10' onClick={handleSubmit}>
                    SUBMIT
                </button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-4 mx-4 md:mx-28 py-20 border-t border-dashed border-[#D6C3AC]'>
            <div>
                <p className='text-sm text-[#2C2C2C]'>Follow us on</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    <img className='md:w-6 md:h-6 lg:w-10 lg:h-10' src={instagramIcon} alt="" />
                    <img className='md:w-6 md:h-6 lg:w-10 lg:h-10' src={facebookIcon} alt="" />
                    <img className='md:w-6 md:h-6 lg:w-10 lg:h-10' src={youtubeIcon} alt="" />
                    <img className='md:w-6 md:h-6 lg:w-10 lg:h-10' src={twitterIcon} alt="" />
                </div>
            </div>
            <div>
                <p className='text-sm text-[#2C2C2C]'>Email us at</p>
                <p className='text-xs md:text-base lg:text-xl text-[#996830] font-semibold font-zodiac'>contact@somanigroup.com</p>
            </div>
            <div>
                <p className='text-sm text-[#2C2C2C]'>Give us a call at</p>
                <p className='text-xs md:text-base lg:text-xl text-[#996830] font-semibold font-zodiac'>+91 75077 71803</p>
            </div>
            <div>
                <p className='text-base md:text-lg lg:text-2xl text-[#2C2C2C] font-semibold font-zodiac'>Baramati, Pune</p>
                <p className='text-xs md:text-xs lg:text-sm text-[#2C2C2C] font-outfit'>Somani Heights, Near Urja Bhavan, Bhigwan Road, Baramati, Pune 413102</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
