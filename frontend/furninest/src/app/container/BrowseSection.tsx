'use client'

import Image from 'next/image'

interface BrowseSectionProps {
  callback: (category: string) => void; // callback should be a function that takes a string and returns void
}

function BrowseSection( {callback}: BrowseSectionProps) {

  return (
    <div>
      <h2 className='text-3xl mt-10 text-center'>Browse The Range</h2>

      <p className='mt-5 text-center px-3'>Explore our curated collection of timeless designs for every space</p>
      
      <div className='lg:grid lg:grid-cols-3 block mx-10 pt-10 lg:space-x-5 place-items-center'>

      <div className='border text-center px-3 h-auto w-[300px] p-5 m-auto mt-10 hover:underline hover:border-2 cursor-pointer' onClick={() => callback('living')}>
          <Image
            src="/livingroom.jpeg"
            className='object-cover mb-5'
            width={1000}
            height={100}
            alt="Living Room Bananer"
          />
          <p className='text-2xl'>Living Rooms</p>
        </div>

        <div className='border text-center px-3 h-auto w-[300px] p-5 m-auto mt-10 hover:underline hover:border-2 cursor-pointer' onClick={() => callback('bedroom')}>
          <Image
            src="/bedroom.jpeg"
            className='object-cover mb-5'
            width={1000}
            height={100}
            alt="BedRoom Bananer"
          />
          <p className='text-2xl'>Bed Rooms</p>
        </div>

        <div className='border text-center px-3 h-auto w-[300px] p-5 m-auto mt-10 hover:underline hover:border-2 cursor-pointer' onClick={() => callback('dining')}>
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