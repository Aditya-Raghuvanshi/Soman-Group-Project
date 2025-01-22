import React from 'react'
import horizontalLine from '../assets/horizontal-line.svg'
import image1 from '../assets/images/MidContainerImage1.svg'
import image2 from '../assets/images/MidContainerImage2.svg'

const MidContainer = () => {
  return (
    <div className='px-28 pt-32 pb-24'>
      <div className='flex justify-between h-[560px]'>
        <div className='flex flex-col my-auto'>
            <div className='flex'>
                <img className='w-16' src={horizontalLine} alt="" />
                <p className='text-sm text-[#996830] ml-4'>ABOUT US</p>
            </div>
            <p className='text-7xl my-6 font-[zodiac]'>Since 1968</p>
            <p className='text-[#444444] text-base w-[80%]'>Founded by the a founder late Mr. Motilal Somani and his late son Mr. Champalal Motilal Somani, the Somani Group is one of the most respected and renowned business houses of Baramati & Maharashtra</p>
        </div>
        <img className='mb-20' src={image1} alt="" />
        <img className='mt-20 ml-4' src={image2} alt="" />
      </div>
    </div>
  )
}

export default MidContainer
