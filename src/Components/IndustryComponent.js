import React, { useEffect } from 'react'
import Navbar from './Navbar'
//Header images imports -->
import textileHeader from '../assets/images/TextileHeader.svg'
import AutoMobileHeader from '../assets/images/AutoMobileHeader.svg'
import DistributionHeader from '../assets/images/DistributionHeader.svg'
import AgricultureHeader from '../assets/images/AgricultureHeader.svg'

import homeImage from '../assets/images/homeImage.svg'
import location from '../assets/location.svg'
import people from '../assets/people.svg'
import area from '../assets/area.svg'
import horizontalLine from '../assets/horizontal-line.svg'
import somanGroupLogo from '../assets/soman-group-logo.svg'
import Contact from './Contact'
import { useLocation } from 'react-router-dom'

const IndustryComponent = () => {
    const headerPhoto = [AutoMobileHeader,DistributionHeader,textileHeader,AgricultureHeader];
    const {state}=useLocation();
    const data = state?.data;
    console.log(data);
    useEffect(()=>{
        window?.scrollTo({top:0,behavior:'smooth'});
    },[])
    
  return (
    <div>
      <Navbar/>
      <img className='w-full' src={headerPhoto[data?.img]} alt="" />
      <div className='flex justify-start w-full px-28 py-24'>
      <p className='w-1/2'>With a legacy of excellence spanning over three decades, Somani Group has established itself as a trusted leader in the distributorship domain. Founded with a vision to bridge gaps between manufacturers and consumers, the group has consistently delivered unmatched reliability, efficiency, and market reach. <br/>
      Our expertise lies in building enduring relationships with global brands, backed by a robust logistics network and a deep understanding of diverse market needs. By combining innovative strategies, a customer-centric approach, and an unwavering commitment to quality, Somani Group has become synonymous with seamless distribution solutions. Our dedication to fostering trust and transparency has enabled us to remain a preferred partner for businesses across industries, ensuring growth and success for all stakeholders.</p>
      </div>
      <div className='px-28'>
        <div className='flex justify-between'>
            <div className='my-auto'>
            <p className='text-2xl'>Current Project in</p>
            <p className='text-6xl font-semibold font-[zodiak]'><i>{data?.title}</i></p>
            </div>
            <img className='h-36 w-44' src={somanGroupLogo} alt="Company logo" />
        </div>
        {
            data?.projects?.map((item)=>{
                return <div className='my-16 flex justify-between'>
                    <div className='my-auto'>
                        <div className="flex mb-6">
                            <img className='w-16' src={horizontalLine} alt="" />
                            <p className='text-[#996830] text-sm ml-4'># {item?.id}</p>
                        </div>
                        <p className='text-3xl font-semibold'>{item?.title}</p>
                        <p className='text-lg text-[#444444] w-[80%] mt-6'>{item?.description}</p>

                        <div className='flex flex-wrap pr-2 my-6'>
                            {
                                item?.locations?.map((loc)=>{
                                    return <p className='flex gap-1 p-1'>
                                    <img src={location} alt="" />
                                    <p>{loc}</p>
                                </p>
                                })
                            }
                        </div>
                        <div className='flex my-6 gap-3'>
                            <div className='flex gap-1'>
                                <img src={people} alt="" />
                                <p>{item?.people} people</p>
                            </div>
                            <div className='flex gap-1'>
                                <img src={area} alt="" />
                                <p>{item?.area}</p>
                            </div>
                        </div>
                    </div>
                    <img src={homeImage} alt="" />
                </div>
            })
        }
        
      </div>
      <Contact/>
    </div>
  )
}

export default IndustryComponent
