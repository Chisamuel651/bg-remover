import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* image container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/* left side */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>original</p>
            <img src={assets.image_w_bg} className='rounded-md border' alt="" />
          </div>

          {/* right side */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>background removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={assets.image_wo_bg} alt="" />

              {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-[#045DE9] rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
          <button className='px-8 py-2.5 text-[#045de9] text-sm border border-[#045de9] rounded-full hover:scale-105 transition-all duration-700'>try another image</button>
          <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-[#09C6F9] to-[#045DE9] rounded-full hover:scale-105 transition-all duration-700' href="">download image</a>
        </div>
      </div>
    </div>
  )
}

export default Result