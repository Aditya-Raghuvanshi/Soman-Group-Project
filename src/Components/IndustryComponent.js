import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
//Header images imports -->
import textileHeader from '../assets/images/TextileHeader.svg'
import AutoMobileHeader from '../assets/images/AutoMobileHeader.svg'
import DistributionHeader from '../assets/images/DistributionHeader.svg'
import AgricultureHeader from '../assets/images/AgricultureHeader.svg'
import RealEstateHeader from '../assets/images/RealEstateHeader.svg'

// import homeImage from '../assets/images/homeImage.svg'
import location from '../assets/location.svg'
// import people from '../assets/people.svg'
// import area from '../assets/area.svg'
import horizontalLine from '../assets/horizontal-line.svg'
import somanGroupLogo from '../assets/soman-group-logo.svg'
import Contact from './Contact'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Carousal from './Carousal'

const IndustryComponent = () => {
    const headerPhoto = [RealEstateHeader,AutoMobileHeader,DistributionHeader,textileHeader,AgricultureHeader];
    const {state}=useLocation();
    const containerRef = useRef();
    const data = state?.data;

    useEffect(()=>{
        window?.scrollTo({top:0,behavior:'smooth'});
        const container = containerRef.current;
        const handleIntersection = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
    
              // GSAP staggered animation for the letters
              gsap.fromTo(
                '.domainHead1', 
                { opacity: 0, y: 70 },  // Start with letters off-screen and transparent
                { 
                  opacity: 1, 
                  y: 0, 
                  duration: 1,
                  delay:0.1, 
                  ease: "ease.out"  // Smooth easing effect
                }
              );
              gsap.fromTo(
                '.domainHead2', 
                { opacity: 0, y: 70 },  // Start with letters off-screen and transparent
                { 
                  opacity: 1, 
                  y: 0, 
                  duration: 1.5,
                  delay:0.4, 
                  ease: "ease.out"  // Smooth easing effect
                }
              );
    
              gsap.fromTo(
                '.imageHome', 
                { opacity: 0, y:100 }, // Start smaller and invisible
                { opacity: 1, y:0, duration: 2,delay:0.5 , ease: "power2.out" } // Scale to normal size
              );

              data?.projects?.map((item,index)=>{
                gsap.fromTo(
                    `.imageHome${index}`, 
                    { opacity: 0, y:100 }, // Start smaller and invisible
                    { opacity: 1, y:0, duration: 4,delay:0.5 , ease: "power2.out" } // Scale to normal size
                  );
                  return<></>
              })
    
              // Stop observing once the animations have been triggered
              observer.unobserve(entry.target);
            }
          });
        };
        
    
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
    },[data])
    
  return (
    <div>
      <Navbar/>
      <img className='w-full' src={headerPhoto[data?.img]} alt="" />
      <div className='flex justify-start w-full px-28 py-8'>
      </div>
      <div ref={containerRef} className='px-28'>
        <div className='flex justify-between'>
            <div className='my-auto'>
            <p className='text-2xl font-zodiac domainHead1'>Current Project in</p>
            <p className='text-6xl font-semibold font-zodiac domainHead2'><i>{data?.title}</i></p>
            </div>
            <img className='h-36 w-44 imageHome' src={somanGroupLogo} alt="Company logo" />
        </div>
        {
            data?.projects?.map((item,index)=>{
                return <div className={`my-16 flex justify-between imageHome${index}`}>
                    <div className='my-auto w-[80%]'>
                        <div className="flex mb-6">
                            <img className='w-16' src={horizontalLine} alt="" />
                            <p className='text-[#996830] text-sm ml-4'># {item?.id}</p>
                        </div>
                        <p className='text-3xl font-semibold font-zodiac'>{item?.title}</p>
                        <p className='text-lg text-[#444444] w-[80%] mt-6 font-outfit'>{item?.description}</p>

                        <div className='flex flex-wrap gap-2 w-[80%] my-6'>
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
                            {/* <div className='flex gap-1'>
                                <img src={people} alt="" />
                                <p>{item?.people} people</p>
                            </div> */}
                            {/* <div className='flex gap-1'>
                                <img src={area} alt="" />
                                <p>{item?.area}</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='w-[65%] h-full my-auto'>
                    <Carousal title={data?.title} subTitle={item?.title}/>
                    </div>
                </div>
            })
        }
        
      </div>
      <Contact/>
    </div>
  )
}

export default IndustryComponent
