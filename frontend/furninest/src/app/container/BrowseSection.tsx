import React from 'react'
import Image from 'next/image'

function BrowseSection() {
  return (
    <div>
      <h2 className='text-3xl mt-10 text-center'>Browse The Range</h2>
      <p className='mt-5 text-center'>Explore our curated collection of timeless designs for every space.</p>
      <div className='md:grid md:grid-cols-3 mx-10 mt-10 md:space-x-5 place-items-center'>
        <div className='border text-center px-3 h-auto w-[300px] p-5 m-auto mt-10 hover:underline hover:border-2 cursor-pointer'>
        <Image
            src="/livingroom.jpeg"
            className='object-cover mb-5'
            width={1000}
            height={100}
            alt="Living Room Bananer"
          />
          <p className='text-2xl'>Living Rooms</p>
        </div>
        <div className='border text-center px-3 h-auto w-[300px] p-5 m-auto mt-10 hover:underline hover:border-2 cursor-pointer'>
          <Image
            src="/bedroom.jpeg"
            className='object-cover mb-5'
            width={1000}
            height={100}
            alt="BedRoom Bananer"
          />
          <p className='text-2xl'>Bed Rooms</p>
        </div>
        <div className='border text-center px-3 h-auto w-[300px] p-5 m-auto mt-10 hover:underline hover:border-2 cursor-pointer'>
        <Image
            src="/dining.webp"
            className='object-cover mb-5'
            width={1000}
            height={100}
            alt="Dining Room Bananer"
          />
          <p className='text-2xl'>Dining Rooms</p>
        </div>
      </div>
    </div>
  )
}

export default BrowseSection