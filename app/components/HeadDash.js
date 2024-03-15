import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'


const HeadDash = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <>

<header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/dashboard">
         
            <Image src="/images/Marketminds_Logo(1).png" width={150} height={150} />
          
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-6 hover:text-gray-900" href="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/journals">
            Journals
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/trading">
            Trading
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/assessment">
            Assessment
          </Link>
          <Link className="mr-6 hover:text-gray-900" href="/learning">
            Learning
          </Link>
         
        </nav>
        <div className="profile" onClick={toggleDropdown}>
        {/* Your profile image */}
        <Image src="/images/img_ellipse11045.png" alt="Profile" width={75} height={75}/>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          {/* Dropdown menu content */}
          <ul>
            <li >Your Profile</li>
            <li >Logout</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}


       
      </div>
    </header>

    </>
  )
}

export default HeadDash
