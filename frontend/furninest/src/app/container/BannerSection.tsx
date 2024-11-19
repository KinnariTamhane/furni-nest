import React from 'react'
import Image from 'next/image'

function BannerSection() {
  return (
    <div className='mt-5'>
        <Image
          src="/furnitureBg.webp"
          className='object-cover'
          width={1000}
          height={100}
          alt="Furniture Bananer"
        />
    </div>
  )
}

export default BannerSection