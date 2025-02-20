import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import GroupImage from '../assets/images/GroupImage.jpg'
import horizontalLine from '../assets/HorizontalLineProfile.svg'
import starLogo from '../assets/star-logo.svg'
import Leader1 from '../assets/images/Leader1.svg'
import Leader2 from '../assets/images/Leader2.svg'
import Leader3 from '../assets/images/Leader3.svg'
import Leader4 from '../assets/images/Leader4.jpg'
import Leader5 from '../assets/images/Leader5.svg'
import Leader6 from '../assets/images/Leader6.jpg'
import Contact from './Contact'
import RealEstateStar from '../assets/images/ReaslEstateStar.svg'
import AwardImage from '../assets/images/AwardImage.svg'
import gsap from 'gsap'
import Loader from './Loader'

const ProfilePage = () => {
    const containerRef = useRef(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const container = containerRef.current;
        setTimeout(()=>{
            setLoading(false);
          },4200)
        gsap.fromTo('.profileMainDiv',
            {opacity:0,y:50},
            {
                opacity:1,
                y:0,
                delay:0.2,
                duration:1.5,
                ease:"power2.out",
            }
        )
        const handleIntersection = (entries, observer) =>{
            entries.forEach(entry=>{
                if (entry.isIntersecting){
                    gsap.fromTo(
                        '.leaderHead',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:0.1,
                            duration:1.5,
                            ease:"ease.out",
                        }
                    )
                    gsap.fromTo(
                        '.profile1',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:0.2,
                            duration:1.5,
                            ease:"power2.out",
                        }
                    )
                    gsap.fromTo(
                        '.profile2',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:0.4,
                            duration:1.5,
                            ease:"power2.out",
                        }
                    )
                    gsap.fromTo(
                        '.profile3',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:0.6,
                            duration:1.5,
                            ease:"power2.out",
                        }
                    )
                    gsap.fromTo(
                        '.profile4',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:0.8,
                            duration:1.5,
                            ease:"power2.out",
                        }
                    )
                    gsap.fromTo(
                        '.profile5',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:1,
                            duration:1.5,
                            ease:"power2.out",
                        }
                    )
                    gsap.fromTo(
                        '.profile6',
                        {opacity:0,y:50},
                        {
                            opacity:1,
                            y:0,
                            delay:1.2,
                            duration:1.5,
                            ease:"power2.out",
                        }
                    )
                    observer.unobserve(entry.target);
                }
            })
        }
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Trigger when 30% of the element is in the viewport
        });
    
        if (container) {
            observer.observe(container);
        }
    
        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    },[])
  return loading?<Loader/>: (
    <div>
        <Navbar/>
        <img className='absolute h-[40vh] md:h-[100vh] overflow-clip -z-50 top-6 w-full object-cover' src={GroupImage} alt="Group img" />
        <div className='profileMainDiv flex flex-col md:flex-row justify-between bg-[#0B6476] mx-4 md:mx-28 mt-[200px] md:mt-[478px] p-14'>
            <p className='text-2xl md:text-5xl text-white font-zodiac mr-16'>Our Profile</p>
            <div>
                <div className="flex mt-4 md:mt-auto">
                    <img className='w-16' src={horizontalLine} alt="hprozontal line" />
                    <p className='text-[#FFC889] text-sm ml-4 font-outfit'>Our Vision</p>
                </div>
                <p className='text-white font-outfit mt-4 text-sm md:text-xl'>To drive transparent and open busi- ness practices in order to translate our honest and authentic beliefs about business and responsibility into anything we venture into.</p>
                <div className="flex mt-10">
                    <img className='w-16' src={horizontalLine} alt="hprozontal line" />
                    <p className='text-[#FFC889] text-sm ml-4 font-outfit'>Our Mission</p>
                </div>
                <p className='text-white font-outfit mt-4 text-sm md:text-xl'>To drive transparent and open busi- ness practices in order to translate our honest and authentic beliefs about business and responsibility into anything we venture into.</p>
            </div>
        </div>
        <div className='px-4 pt-6 md:px-20 md:pt-20 md:pb-20'>
            <div ref={containerRef}>
                <p className='leaderHead text-3xl font-bold mb-12 font-zodiac'>The leaders behind our success...</p>
                <div className='flex flex-col md:flex-row gap-8 justify-between'>
                    <div className='profile1 border border-[#E6D8CC] p-6 w-full md:w-96'>
                        <img className='w-full' src={Leader1} alt="" />
                        <p className='font-zodiac text-2xl font-semibold mt-6'>Sushil Somani</p>
                        <div className='mt-4'>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1 font-outfit'>B.COM, LLB, DTL, DLL & LW</p>
                            </div>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />  
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>Mr. Sushil, born in 1963 is mainly responsible for the investment part of the group along with handling two wheeler dealerships of Bajaj</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>His calculative nature makes him an extraordinary personnel in the accounting and taxation part of the group</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile2 border border-[#E6D8CC] p-6 w-full md:w-96'>
                        <img className='w-full' src={Leader2} alt="" />
                        <p className='font-zodiac text-2xl font-semibold mt-6'>Subhash Somani</p>
                        <div className='mt-4'>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1 font-outfit'>B.COM, Ex-Mayor (Baramati)</p>
                            </div>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />  
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>Mr.Subhash, born in 1963, has a philosophy- ‘Change is Inevitable’</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>Constantly working towards diversification has made him the pillar of HR activities of the group along with the management of the distributorships of Somani group</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile3 border border-[#E6D8CC] p-6 w-full md:w-96'>
                        <img className='w-full' src={Leader3} alt="" />
                        <p className='font-zodiac text-2xl font-semibold mt-6'>Mahesh Somani</p>
                        <div className='mt-4'>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1 font-outfit'>DIE, DCE</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />  
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>Mr.Subhash, born in 1963, the visionary behind automation and technology now looks after the retail section of the Somani group of companies</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 mt-12 justify-between'>
                    <div className='profile4 border border-[#E6D8CC] p-6 w-full md:w-96'>
                        <img className='w-full h-auto lg:h-56' src={Leader4} alt="" />
                        <p className='font-zodiac text-2xl font-semibold mt-6'>Ketan Somani</p>
                        <div className='mt-4'>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1 font-outfit'>BBA, PGT-FMB</p>
                            </div>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />  
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>Youngest of all, Mr.Ketan provides the different perspective towards the working of the group.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>He provides valuable support towards banking decisions carrying along with the responsibility of Hyundai dealership.</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile5 border border-[#E6D8CC] p-6 w-full md:w-96'>
                        <img className='w-full h-auto lg:h-56' src={Leader5} alt="" />
                        <p className='font-zodiac text-2xl font-semibold mt-6'>Omkar Somani</p>
                        <div className='mt-4'>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1 font-outfit'>BBA IB  MFAB - Indian school of business</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />  
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>being the youngest of family takes care of distribution network of TATA and Hyundai MOBIS</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile6 border border-[#E6D8CC] p-6 w-full md:w-96'>
                    <img className='w-full h-auto lg:h-65' src={Leader6} alt="" />
                        <p className='font-zodiac text-2xl font-semibold mt-6'>Pranav Somani</p>
                        <div className='mt-4'>
                            <div className='flex mb-2 gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-[#996830] text-sm mx-1 font-outfit'>BBA IB FMB - SP JAIN</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />  
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>started REAL estate by himself in last 3 years handles realestate by himself in Baramati and</p>
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
