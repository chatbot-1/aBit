import React from 'react'
import cover from "../assets/cover.svg"

const Hero = () => {
  return (
    <div>
        <div className='mt-[70px] sm:mt-[60px] md:mt-[40px] lg:mt-[20px] xl:mt-[0px]'>
            <img src={cover} alt="" className='w-full h-full'/>
        </div>
        <div></div>
    </div>
  )
}

export default Hero