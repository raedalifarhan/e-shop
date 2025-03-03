import Image from 'next/image'
import React from 'react'

const BannerHome = () => {
  return (
    <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8'>
        <div className='mx-auto px-8 py-12 flex flex-col md:flex-row gap-2 items-center justify-evenly'>
            <div>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Summer Sale</h1>
                <p className='text-lg md:text-xl text-white mb-2'>Enjoy discount on selected items</p>
                <h2 className='text-2xl md:text-5xl uppercase font-bold text-yellow-400'>Get 50% off</h2>
            </div>
            <div className='w-1/3 relative aspect-video'>
                <Image
                    src={`/banner-image.png`}
                    fill
                    alt='Banner Image'
                    className='object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default BannerHome