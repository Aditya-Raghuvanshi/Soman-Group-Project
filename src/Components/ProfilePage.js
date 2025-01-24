import React from 'react'
import Navbar from './Navbar'
import GroupImage from '../assets/images/GroupImage.svg'
import horizontalLine from '../assets/horizontal-line.svg'
import starLogo from '../assets/star-logo.svg'
import Leader1 from '../assets/images/Leader1.svg'
import Leader2 from '../assets/images/Leader2.svg'
import Leader3 from '../assets/images/Leader3.svg'
import Leader4 from '../assets/images/Leader4.svg'
import Leader5 from '../assets/images/Leader5.svg'
import Leader6 from '../assets/images/Leader6.svg'
import Contact from './Contact'
import RealEstateStar from '../assets/images/ReaslEstateStar.svg'
import AwardImage from '../assets/images/AwardImage.svg'

const ProfilePage = () => {
  return (
    <div>
        <Navbar/>
        <img className='absolute -z-50 top-0 w-full' src={GroupImage} alt="Group img" />
        <div className='flex justify-between bg-[#0B6476] mx-28 mt-[534px] p-14'>
            <p className='text-5xl text-white font-[zodiac]'>Our Profile</p>
            <div>
                <div className="flex mb-6">
                    <img className='w-16' src={horizontalLine} alt="hprozontal line" />
                    <p className='text-[#996830] text-sm ml-4'>Our Vision</p>
                </div>
                <p className='text-white'>To drive transparent and open busi- ness practices in order to translate our honest and authentic beliefs about business and responsibility into anything we venture into.</p>
                <div className="flex mb-6">
                    <img className='w-16' src={horizontalLine} alt="hprozontal line" />
                    <p className='text-[#996830] text-sm ml-4'>Our Mission</p>
                </div>
                <p className='text-white'>To drive transparent and open busi- ness practices in order to translate our honest and authentic beliefs about business and responsibility into anything we venture into.</p>
            </div>
        </div>
        <div className='p-20'>
            <div>
                <p className='text-3xl font-bold mb-12'>The leaders behind our success...</p>
                <div className='flex gap-8 justify-between'>
                    <div className='border border-[#E6D8CC] p-6 w-96'>
                        <img className='w-full' src={Leader1} alt="" />
                        <p>Sushil Somani</p>
                        <div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1'>B.COM, LLB, DTL, DLL & LW</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />  
                                <p className='text-sm mx-1'>Mr. Sushil, born in 1963 is mainly responsible for the investment part of the group along with handling two wheeler dealerships of Bajaj</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-sm mx-1'>His calculative nature makes him an extraordinary personnel in the accounting and taxation part of the group</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#E6D8CC] p-6 w-96'>
                        <img className='w-full' src={Leader2} alt="" />
                        <p>Subhash Somani</p>
                        <div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1'>B.COM, Ex-Mayor (Baramati)</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />  
                                <p className='text-sm mx-1'>Mr.Subhash, born in 1963, has a philosophy- ‘Change is Inevitable’</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-sm mx-1'>Constantly working towards diversification has made him the pillar of HR activities of the group along with the management of the distributorships of Somani group</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#E6D8CC] p-6 w-96'>
                        <img className='w-full' src={Leader3} alt="" />
                        <p>Mahesh Somani</p>
                        <div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1'>DIE, DCE</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />  
                                <p className='text-sm mx-1'>Mr.Subhash, born in 1963, the visionary behind automation and technology now looks after the retail section of the Somani group of companies</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-12 justify-between'>
                    <div className='border border-[#E6D8CC] p-6 w-96'>
                        <img className='w-full' src={Leader4} alt="" />
                        <p>Ketan Somani</p>
                        <div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1'>BBA, PGT-FMB</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />  
                                <p className='text-sm mx-1'>Youngest of all, Mr.Ketan provides the different perspective towards the working of the group.</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-sm mx-1'>He provides valuable support towards banking decisions carrying along with the responsibility of Hyundai dealership.</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#E6D8CC] p-6 w-96'>
                        <img className='w-full' src={Leader5} alt="" />
                        <p>Omkar Somani</p>
                        <div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1'>BBA IB  MFAB - Indian school of business</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />  
                                <p className='text-sm mx-1'>being the youngest of family takes care of distribution network of TATA and Hyundai MOBIS</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#E6D8CC] p-6 w-96'>
                        <img className='w-full' src={Leader6} alt="" />
                        <p>Pranav Somani</p>
                        <div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1'>BBA IB FMB - SP JAIN</p>
                            </div>
                            <div className='flex'>
                                <img className='h-5' src={starLogo} alt="" />  
                                <p className='text-sm mx-1'>started REAL estate by himself in last 3 years handles realestate by himself in Baramati and</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className='w-full' src={RealEstateStar} alt="" />
        <img src={AwardImage} alt="Award Img" />
        <Contact/>
    </div>
  )
}

export default ProfilePage
