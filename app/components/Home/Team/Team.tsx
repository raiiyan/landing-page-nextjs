import React from 'react'
import BoxText from '../../Helper/BoxText'

const Team = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5
        gap-10 items-center'>
            {/* text */}
            <div className='lg:col-span-2'>
                <BoxText>
                    Our Team
                </BoxText>
                <h1 className='mt-4 text-xl md:text-2xl font-bold text-gray-800'>
                Our Team of Exceptional Talent, Innovation and Vision
                </h1>
                <p className='mt-4 text-gray-700'>
                As the pioneer in tech development, TechDev has consistently 
                been dedicated to creating a seamless, collaborative, and 
                inclusive ecosystem where everyone can thrive. We have a 
                diverse team of professionals, each with a unique background 
                and expertise, who are committed to supporting and guiding you 
                as you navigate your tech development journey.
            </p>
            </div>
            {/*  image content */}
            <div className='lg:col-span-3'>

            </div>
        </div>
    </div>
  )
}

export default Team