import React from 'react'
import CompanyLogo from '../assets/company.svg'
import northEastArrow from '../assets/north-east-arrow.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='sticky top-0 px-20 py-3 border-2 border-d border-gray-300 bg-white z-10'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <img src={CompanyLogo} alt="" />
            </div>
            <div className='flex'>
                <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>Legacy</button>
                <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]' onClick={()=>navigate('/profile')}>Profile</button>
                <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>Products</button>
                <button className='flex text-sm text-white bg-[#0B6476] cursor-pointer py-4 px-5'><p>CONTACT US </p><img src={northEastArrow} alt="" className='pl-1' /></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
