import React from 'react'
import horizontalLine from '../assets/horizontal-line.svg'

const MapComponent = () => {
  return (
    <div className='p-28'>
        <div>
            <div className="flex mb-6">
                <img className='w-16' src={horizontalLine} alt="" />
                <p className='text-[#996830] text-sm ml-4'>OUR PRESENCE</p>
            </div>
            <p className='text-6xl'>Building future in <br/> <b> <i>Pune</i></b></p>
        </div>
        <div className='mt-20'>
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.494560926017!2d73.79136397496373!3d18.551729182547916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd911eb8f85%3A0xdcbde4fcbad4810f!2sIndiQube%20The%20Kode!5e0!3m2!1sen!2sin!4v1737654133141!5m2!1sen!2sin" height="450" style={{border:"0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map'></iframe>
        </div>
    </div>
  )
}

export default MapComponent
