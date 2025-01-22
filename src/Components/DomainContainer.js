import React from 'react'
import horizontalLine from '../assets/horizontal-line.svg'
import realEstate from '../assets/real-estate.svg'
import automobile from '../assets/auto-mobile.svg'
import distribution from '../assets/distribution.svg'
import textile from '../assets/textile.svg'
import farming from '../assets/farming.svg'

const DomainContainer = () => {
  return (
    <div className='p-28'>
      <div>
        <div className="flex mb-6">
            <img className='w-16' src={horizontalLine} alt="" />
            <p className='text-[#996830] text-sm ml-4'>OUR DOMAINS</p>
        </div>
        <p className='text-6xl font-semibold w-[50%] mb-20 font-[zodiac]'>We lead & drive benchmark industries</p>
      </div>
      <div>
        <div className="flex justify-between gap-14">
            <div className='p-10 border border-[#E6D8CC]'>
                <img className='mb-14' src={realEstate} alt="" />
                <p className='text-4xl font-semibold font-[zodiac]'>Real Estate</p>
                <p className='text-lg mt-4'>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
            </div>
            <div className='p-10 border border-[#E6D8CC]'>
                <img className='mb-14' src={automobile} alt="" />
                <p className='text-4xl font-semibold font-[zodiac]'>Automobile</p>
                <p className='text-lg mt-4'>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
            </div>
        </div>
        <div className="flex justify-between gap-8 mt-8">
            <div className='p-10 border border-[#E6D8CC]'>
                <img className='mb-14' src={distribution} alt="" />
                <p className='text-4xl font-semibold font-[zodiac]'>Distribution</p>
                <p className='text-lg mt-4'>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
            </div>
            <div className='p-10 border border-[#E6D8CC]'>
                <img className='mb-14' src={textile} alt="" />
                <p className='text-4xl font-semibold font-[zodiac]'>Textile</p>
                <p className='text-lg mt-4'>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
            </div>
            <div className='p-10 border border-[#E6D8CC]'>
                <img className='mb-14' src={farming} alt="" />
                <p className='text-4xl font-semibold font-[zodiac]'>Farming</p>
                <p className='text-lg mt-4'>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DomainContainer
