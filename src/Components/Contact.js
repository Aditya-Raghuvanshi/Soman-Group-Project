import React from 'react'
import instagramIcon from '../assets/instagram.svg' 
import facebookIcon from '../assets/facebook.svg' 
import youtubeIcon from '../assets/youtube.svg' 
import twitterIcon from '../assets/twitter.svg' 

const Contact = () => {
  return (
    <div>
        <div className='flex justify-between mx-28 py-20 border-t border-dashed border-[#D6C3AC]'>
            <p className='text-5xl w-[50%]'>Reach out to us!</p>
            <div className='w-[50%]'>
                <p className='text-[#D6C3AC] text-xl'>Full name</p>
                <input className='border-b border-[#D6C3AC] w-full my-2' type="text" />
                <p className='text-[#D6C3AC] text-xl'>Email</p>
                <input className='border-b border-[#D6C3AC] w-full my-2' type="text" />
                <button className='text-white text-xs bg-[#0B6476] font-semibold mt-8 w-[120px] h-10'>
                    SUBMIT
                </button>
            </div>
        </div>
        <div className='flex justify-between mx-28 py-20 border-t border-dashed border-[#D6C3AC]'>
            <div>
                <p className='text-sm text-[#2C2C2C]'>Follow us on</p>
                <div className='flex gap-4 mt-2'>
                    <img src={instagramIcon} alt="" />
                    <img src={facebookIcon} alt="" />
                    <img src={youtubeIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                </div>
            </div>
            <div>
                <p className='text-sm text-[#2C2C2C]'>Email us at</p>
                <p className='text-xl text-[#996830] font-semibold'>contact@somanigroup.com</p>
            </div>
            <div>
                <p className='text-sm text-[#2C2C2C]'>Give us a call at</p>
                <p className='text-xl text-[#996830] font-semibold'>+91 75077 71803</p>
            </div>
            <div>
                <p className='text-2xl text-[#2C2C2C] font-semibold'>Baramati, Pune</p>
                <p className='text-sm text-[#2C2C2C]'>Somani Heights, Near Urja Bhavan, Bhigwan Road, Baramati, Pune 413102</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
