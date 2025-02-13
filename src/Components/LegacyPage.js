import React, { useEffect, useRef } from 'react'
// import sugarFarming from '../assets/images/SugaranceFarming.svg'
import Navbar from './Navbar'
import Contact from './Contact'
import arrow from '../assets/north-east-arrow.svg'
// import RealEstate from '../assets/images/LeagacyRealEstate.svg'
import arrowBlue from '../assets/north-east-arrow-blue.svg'
import './Legacy.css'
import gsap from 'gsap'

const LegacyPage = () => {
    const containerRef=useRef();
    useEffect(()=>{
        gsap.fromTo('.legacy-text',
            {opacity:0,y:50},
            {
                opacity: 1,
                y:0,
                duration: 2,
                delay:0.2,
                ease: "ease.out"
            }
        )
        gsap.fromTo('.legacy-description-text',
            {opacity:0,y:50},
            {
                opacity: 1,
                y:0,
                duration: 2,
                delay:0.4,
                ease: "ease.out"
            }
        )
        const container = containerRef.current;
        const handleIntersection = (entries, observer) =>{
            entries.forEach(entry=>{
              if (entry.isIntersecting){
                // const letters = document.querySelectorAll('.domain-text span');
      
                // GSAP staggered animation for the letters
                gsap.fromTo(
                  '.legacyDiv1', 
                  { opacity: 0 ,y:50}, // Start smaller and invisible
                  { opacity: 1,y:0, duration: 2,delay:0.4, ease: "power2.out" } // Scale to normal size
                );
                gsap.fromTo(
                    '.legacyDiv2', 
                    { opacity: 0 ,y:50}, // Start smaller and invisible
                    { opacity: 1,y:0, duration: 2,delay:0.6, ease: "power2.out" } // Scale to normal size
                  );
                gsap.fromTo(
                    '.legacyDiv3', 
                    { opacity: 0 ,y:50}, // Start smaller and invisible
                    { opacity: 1,y:0, duration: 2,delay:0.8, ease: "power2.out" } // Scale to normal size
                  );
                gsap.fromTo(
                    '.legacyDiv4', 
                    { opacity: 0 ,y:50}, // Start smaller and invisible
                    { opacity: 1,y:0, duration: 2,delay:1, ease: "power2.out" } // Scale to normal size
                );
                gsap.fromTo(
                    '.legacyDiv5', 
                    { opacity: 0 ,y:50}, // Start smaller and invisible
                    { opacity: 1,y:0, duration: 2,delay:1.2, ease: "power2.out" } // Scale to normal size
                  );
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
      
          // Clean up the observer when the component is unmounted
          return () => {
            if (container) {
              observer.unobserve(container);
            }
          };
    },[])
  return (
    <>
        <Navbar/>
        <div className='flex justify-center py-16 bg-white px-8'>
            <div>
            {/* Apply the class hero-text and use the splitText function */}
            <p className='legacy-text text-6xl font-semibold font-zodiac'>
                Our legacy
            </p>
            <p className='legacy-description-text w-1/2 text-[#444444] mt-4 font-outfit'>
                We at <b>Somani Group</b> drive transparent and open business practices to translate our honest and authentic beliefs about responsibility into anything we venture into.
            </p>
            </div>
        </div>
        <div ref={containerRef}>
        <div className='legacyDiv1 flex w-full'>
            <div className='w-[50%] relative'>
                <div className='h-full w-full absolute gradient opacity-80'></div>
                <div className='fourth text-white text-right font-zodiac text-5xl py-24 pr-8 font-extrabold'></div>
                <div className='z-50 text-5xl absolute top-24 font-bold font-zodiac right-6 text-white'>1967</div>
            </div>
            {/* <img className='w-1/2' src={sugarFarming} alt="" />*/}
            <div className='w-1/2 bg-[#0B6476] flex justify-start p-8 py-24'>
                <div className='my-auto'>
                    <p className='text-3xl text-white font-bold font-zodiac'>Textile Business</p>
                    <p className='text-white w-3/4 my-6 font-outfit opacity-65 text-sm'>Textiles were the first business the Somani Group ventured into, started by the late grandfather Champalal Somani in 1967 with an 800 sqft store. Today, the group operates 32+ locations with over 5 lakh sqft dedicated to delivering fabrics. Their new brand, 'The Wardrobe,' focuses on menswear for Tier 2 and Tier 3 cities. Generating over 350 crore turnover, they are transitioning into a franchise model to scale further.</p>
                    <p className='flex cursor-pointer'><p className='text-white font-outfit text-sm'>Learn More</p><img src={arrow} alt="" /> </p>
                </div>
            </div> 
        </div>
        <div className='legacyDiv2 flex w-full text-right'>
            <div className='w-1/2 bg-white flex pr-8 py-24'>
                <div className='my-auto items-end'>
                    <p className='text-3xl text-[#0B6476] font-bold font-zodiac'>Automobile Sector</p>
                    <p className='text-[#0B6476] my-6 font-outfit opacity-65 text-sm ml-[24%]'>After textiles, in 2008, the group was presented with an opportunity to establish a Bajaj two-wheeler dealership in Baramati. Building on this experience, they expanded with a Hyundai dealership in 2011, a Chetak dealership in 2021, and a TATA-authorized service station. Today, the Somani Group operates over 15 locations under their automobile dealership portfolio, showcasing their commitment to quality service and customer satisfaction.</p>
                    <p className='flex w-full justify-end cursor-pointer'><p className='text-[#0B6476] font-outfit text-sm'>Learn More</p><img src={arrowBlue} alt="" /> </p>
                </div>
            </div> 
            {/* <img className='w-1/2' src={RealEstate} alt="" /> */}
            <div className='w-[50%] relative'>
                <div className='h-full w-full absolute gradient1 opacity-80'></div>
                <div className='third text-[#0B6476] text-left font-zodiac text-5xl py-24 pl-8 font-bold'></div>
                <div className='z-50 text-5xl absolute top-24 font-bold font-zodiac left-6 text-[#0B6476]'>2008</div>
            </div>
        </div>
        <div className='legacyDiv3 flex w-full'>
            <div className='w-[50%] relative'>
                <div className='h-full w-full absolute gradient opacity-80'></div>
                <div className='fifth text-white text-right font-zodiac text-5xl py-24 pr-8 font-bold'></div>
                <div className='z-50 text-5xl absolute top-24 font-bold font-zodiac right-6 text-white'>2013</div>
            </div>
            {/* <img className='w-1/2' src={sugarFarming} alt="" /> */}
            <div className='w-1/2 bg-[#0B6476] flex justify-start p-8 py-24'>
                <div className='my-auto'>
                    <p className='text-3xl text-white font-bold font-zodiac'>Distribution Network</p>
                    <p className='text-white w-3/4 my-6 font-outfit opacity-65 text-sm'>The Somani Group began its distribution business in 2013 with TATA commercial vehicle spare parts, covering the entire Maharashtra region. In 2020, they expanded with Hyundai Mobis distribution, further solidifying their presence in the sector. Currently, the group operates six warehouses across Maharashtra, ensuring efficient supply chain management and seamless delivery of products.</p>
                    <p className='flex cursor-pointer'><p className='text-white font-outfit text-sm'>Learn More</p><img src={arrow} alt="" /> </p>
                </div>
            </div> 
        </div>
        <div className='legacyDiv4 flex w-full text-right'>
            <div className='w-1/2 bg-white flex pr-8 py-24'>
                <div className='my-auto items-end'>
                    <p className='text-3xl text-[#0B6476] font-bold font-zodiac'>Sugarcane Farming</p>
                    <p className='text-[#0B6476] my-6 font-outfit opacity-65 text-sm ml-[24%]'>The Somani Group began farming under the guidance of the late grandfather Champalal Somani, starting with a small plot of land. Today, they manage 800 acres of farming, including sugarcane cultivation and cattle fields, showcasing their strong roots in agriculture. Their commitment to sustainable farming practices ensures long-term profitability and environmental stewardship.</p>
                    <p className='flex w-full justify-end cursor-pointer'><p className='text-[#0B6476] font-outfit text-sm'>Learn More</p><img src={arrowBlue} alt="" /> </p>
                </div>
            </div> 
            {/* <img className='w-1/2' src={RealEstate} alt="" /> */}
            <div className='w-[50%] relative'>
                <div className='h-full w-full absolute gradient1 opacity-80'></div>
                <div className='first text-[#0B6476] text-left font-zodiac text-5xl py-24 pl-8 font-bold'></div>
                <div className='z-50 text-5xl absolute top-24 font-bold font-zodiac left-6 text-[#0B6476]'>2015</div>
            </div>
        </div>
        <div className='legacyDiv5 flex w-full'>
            <div className='w-[50%] relative'>
                <div className='h-full w-full absolute gradient opacity-80'></div>
                <div className='second text-white text-right font-zodiac text-5xl py-24 pr-8 font-bold'></div>
                <div className='z-50 text-5xl absolute top-24 font-bold font-zodiac right-6 text-white'>2022</div>
            </div>
            <div className='w-1/2 bg-[#0B6476] flex justify-start p-8 py-24'>
                <div className='my-auto'>
                    <p className='text-3xl text-white font-bold font-zodiac'>Real Estate</p>
                    <p className='text-white w-3/4 my-6 font-outfit opacity-65 text-sm'>The group ventured into real estate three years ago, establishing projects in Pune and Baramati. With a focus on quality and timely delivery, they aim to be a trusted name in real estate.</p>
                    <p className='flex cursor-pointer'><p className='text-white font-outfit text-sm'>Learn More</p><img src={arrow} alt="" /> </p>
                </div>
            </div> 
        </div>
        </div>
        <Contact/>
    </>
  )
}

export default LegacyPage
