import React from 'react'
import Link from 'next/link'

function Header() {
  return (
        <>
                <div className='flex justify-between  mx-5 md:mx-10'>
            <div className='flex space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="100" viewBox="0 0 200 200" fill="none">
                {/* <!-- Nest Outline --> */}
                <circle cx="100" cy="100" r="90" stroke="#8B4513" strokeWidth="10" />
                
                {/* <!-- Chair Base --> */}
                <rect x="80" y="90" width="40" height="50" rx="5" fill="#DAA520" />
                
                {/* <!-- Chair Backrest --> */}
                <rect x="85" y="50" width="30" height="40" rx="5" fill="#DAA520" />
                
                {/* <!-- Chair Legs --> */}
                <line x1="85" y1="140" x2="85" y2="160" stroke="#8B4513" strokeWidth="5" />
                <line x1="115" y1="140" x2="115" y2="160" stroke="#8B4513" strokeWidth="5" />
                {/*   
                <!-- Chair Detail (Nest Feel) --> */}
                <path d="M90 100 Q100 120 110 100" stroke="#8B4513" strokeWidth="3" fill="none" />
                </svg>
                <p className='mt-8 pl-3 font-bold text-3xl'>FurniNest</p>
            </div>
            <div className='md:flex space-x-2 items-center hidden'>
                <div>
                    <Link className='mr-5 text-xl hover:text-2xl hover:font-bold' href="">Shop</Link>
                    <Link className='mr-5 text-xl hover:text-2xl hover:font-bold' href="">About</Link>
                    <Link className='mr-5 text-xl hover:text-2xl hover:font-bold' href="">Contact</Link>
                </div>
            </div>
            <div className='flex space-x-2 items-center'>
                <div className='cursor-pointer'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="24"
                        height="24"
                        >
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0 2zm10-2c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm0 2zm.79-7.27L21 5H7l-1-3H1v2h3.18l3.74 10.02-1.35 2.45C6.21 17.77 6.81 19 8 19h12v-2H8.42c-.14 0-.25-.11-.25-.25L8.55 16h9.58c.75 0 1.41-.41 1.75-1.03l2.73-4.93c.1-.18.17-.38.17-.59 0-.83-.67-1.5-1.5-1.5H8.16l-.32-1H19l-1.21 2.73z" />
                    </svg>
                </div>
            </div>
        </div>
         <div className='md:hidden space-x-2 items-center flex justify-center '>
                <div>
                    <Link className='mr-5 text-xl' href="">Shop</Link>
                    <Link className='mr-5 text-xl' href="">About</Link>
                    <Link className='mr-5 text-xl' href="">Contact</Link>
                </div>
            </div>
        </>

        


  )
}

export default Header