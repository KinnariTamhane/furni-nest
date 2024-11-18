import React from 'react'

function Header() {
  return (
    <div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
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
        </div>
    </div>
  )
}

export default Header