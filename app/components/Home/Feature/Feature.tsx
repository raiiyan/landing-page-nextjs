import Image from 'next/image'
import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTouchApp } from 'react-icons/md'

const Feature = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div>
            <h1 className='text-center text-2xl text-blue-950 
            font-bold'>
                Key Features Of The Product
            </h1>
            <p className='mt-3 text-center font-medium text-gray-700
            w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
                Our product stands out with its high performance, delivering blazing-fast speeds and seamless multitasking
            </p>

            {/* main grid */}
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 items-center
            gap-10'>
                {/* inner grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                    {/* 1st box */}
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icons */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center
                            flex-col bg-pink-500 bg-opacity-20'>
                                <MdOutlineTouchApp className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                App Integration
                            </h1>
                        </div>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                        Enhance your business operations with effortless app integration. 
                        Connect tools, automate processes, and optimize efficiency like never 
                        before.
                        </p>
                    </div>
                    {/* 2nd box */}
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icons */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center
                            flex-col bg-pink-500 bg-opacity-20'>
                                <GoWorkflow className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                            Workflow Builder
                            </h1>
                        </div>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                        Create customized workflows that adapt to your business needs. 
                        Automate repetitive tasks and keep your team aligned with seamless processes.
                        </p>
                    </div>
                    {/* 3rd box */}
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icons */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center
                            flex-col bg-pink-500 bg-opacity-20'>
                                <LuPen className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                Problem Solution
                            </h1>
                        </div>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                        Identify challenges, implement strategic solutions, and drive 
                        results with ease. Our approach helps you tackle complex problems efficiently.
                        </p>
                    </div>
                    {/* 4th box */}
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center space-x-3'>
                            {/* icons */}
                            <div className='w-12 h-12 rounded-3xl flex items-center justify-center
                            flex-col bg-pink-500 bg-opacity-20'>
                                <MdAccessAlarm className='w-6 h-6 text-orange-400' />
                            </div>
                            {/* Heading */}
                            <h1 className='text-lg font-bold text-gray-700'>
                                Lifetime Access
                            </h1>
                        </div>
                        {/* Description */}
                        <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                        Gain permanent access to all tools and resources, ensuring continuous growth and innovation.
                        <br />
                        <br />
                        </p>
                    </div>
                </div>
                {/* Image content */}
                <div>
                    <Image src="/images/f1.png" alt='feature' width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature