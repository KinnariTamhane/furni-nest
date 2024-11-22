import React from 'react'
import Image from 'next/image'

function BannerSection() {
  return (
    <div className='mt-5 relative'>
        <Image
          src="/furnitureBg.webp"
          className='object-cover mb-5'
          width={1000}
          height={100}
          alt="Furniture Bananer"
        />
        <div className='md:absolute md:top-[2%] md:right-[2%] bg-[#6C3901] px-3 py-7 md:w-[600px] pt-5 text-center md:text-left md:rounded-2xl'>
          <h1 className='text-3xl'>Discover Our Collection!</h1>
          <p className='text-xl mt-3'>Discover stylish and functional furniture to elevate your home.</p>
          <button className='bg-orange-200 px-8 py-3 text-center mt-5 text-black'>Buy Now</button>
        </div>
    </div>
  )
}

export default BannerSection