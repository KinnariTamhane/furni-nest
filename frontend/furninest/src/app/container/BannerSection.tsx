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
        <div className='md:absolute md:top-[2%] md:right-[2%] bg-yellow-800 px-3 py-7 md:w-[600px] pt-10 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl'>Discover Our Collection!</h1>
          <p className='md: text-xl mt-3'>Discover stylish and functional furniture to elevate your home.</p>
          <button className='bg-orange-200 px-8 py-3 text-center mt-8 text-black'>Buy Now</button>
        </div>
    </div>
  )
}

export default BannerSection