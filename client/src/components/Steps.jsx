import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>steps to remove background <br /> image in seconds...</h1>

        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>
            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-10 bg-gradient-to-r from-[#09C6F9] to-[#045DE9] p-2 rounded text-white' src={assets.upload_btn_icon_2} alt="" />
                <div>
                    <p className='text-xl font-medium'>upload image</p>
                    <p className='text-sm text-neutral-500 mt-1'>select and upload your image file.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-10 bg-gradient-to-r from-[#09C6F9] to-[#045DE9] p-2 rounded text-white' src={assets.remove_btn_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>remove background</p>
                    <p className='text-sm text-neutral-500 mt-1'>eliminate background from image.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-10 bg-gradient-to-r from-[#09C6F9] to-[#045DE9] p-2 rounded text-white' src={assets.download_btn_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>download image</p>
                    <p className='text-sm text-neutral-500 mt-1'>save your image to your device.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Steps
