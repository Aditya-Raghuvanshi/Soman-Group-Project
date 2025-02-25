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
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>A financial strategist and investment expert, Mr. Sushil Somani plays a pivotal role in managing the group's financial portfolio and investment ventures. With a keen eye for numbers, he oversees the accounting and taxation aspects, ensuring the group’s fiscal health.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>His leadership extends to the automobile sector, where he has been instrumental in managing two-wheeler dealerships of Bajaj.</p>
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
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>A visionary leader, Mr. Subhash Somani believes in the philosophy that "Change is Inevitable." His relentless efforts towards diversification have made him a pillar of the group’s HR activities and operational expansions.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>He plays a key role in the management of the distributorship vertical, ensuring seamless operations and sustainable growth.</p>
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
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>A technology-driven strategist, Mr. Mahesh Somani spearheads the automation and retail operations of the Somani Group. With a forward-thinking approach, he has played a crucial role in integrating modern technological advancements to enhance efficiency and customer experience across the retail division.</p>
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
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>The youngest of the senior leadership team, Mr. Ketan Somani brings fresh perspectives and dynamic decision-making to the group's operations.</p>
                            </div>
                            <div className='flex gap-2'>
                                <img className='h-5 w-4' src={starLogo} alt="" />
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>He plays an essential role in financial planning and banking strategies, while also managing the Hyundai dealership, ensuring seamless business execution and customer satisfaction.</p>
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
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>As a new-generation leader, Mr. Omkar Somani manages the distribution networks of TATA and Hyundai MOBIS, bringing innovative and efficient strategies to the business. His expertise in supply chain management and operations ensures the seamless functioning of these verticals, contributing to the group’s expansion in the automotive sector.</p>
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
                                <p className='text-sm mx-1 font-outfit text-[#444444]'>A real estate entrepreneur with a sharp business acumen, Mr. Pranav Somani has independently built the group's real estate vertical over the last three years. Managing large-scale projects in Baramati and Pune, he is focused on creating innovative and sustainable developments that align with the evolving needs of the market.</p>
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
