import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='text-left space-x-4 bg-slate-100 p-4 py-5 '>
        <div className='flex items-center justify-between'>
    <h1 className='font-bold text-2xl'>
          
          <img src={"images/logo.png"} alt='image'
           width={"100px"} height={"100px"}
           className='w-20 h-20'/>
         
            </h1>
            <div className='block md:hidden'>
              <button id="menu-toggle" className='text-2xl'>
              ☰
              </button>
            </div>

      <nav>
        id="menu"
        className="hidden md:flex flex-col md:flex-row gap-5 bg-white py-1 md:py-0 md:static absolute top-20 left-0 w-full md:w-auto md:text-right shadow-lg md:shadow-none"
        
        <ul className='flex flex-col md:flex-row md:gap-5 bg-white py-1'>
          <li>
            <Link className='hover:text-blue-100 text-2xl md:text-2xl border-x-white  ' href="/">Home</Link>
          </li>
          <li>
            <Link className='hover:text-blue-100 text-lg md:text-2xl 'href="/courses">Courses</Link>
          </li>
          <li>
            <Link className='hover:text-blue-100  text-lg md:text-2xl' href="/services">Services</Link>
          </li>
         
          <li>
            <Link className='hover:text-blue-100  text-lg md:text-2xl' href="/achievments">Achievments</Link>
          </li>
          <li>
            <Link className='hover:text-blue-100  text-lg md:text-2xl' href="/about us">About Us</Link>
          </li>
          <li>
            <Link className='hover:text-blue-100 text-lg md:text-2xl' href="/testimonials">Testimonials</Link>
          </li>
          
          <li>
            <Link className='hover:text-blue-100 text-lg md:text-2xl' href="/login"> <button className='border-2 md:rounded-lg p-1 mr-3  border-gray-600 -mt-1'>Login</button></Link>
          </li>
          <li>
            <Link className='hover:text-blue-100 text-lg md:text-2xl' href="/signup"><button className='bg-black text-white border-2 border-black md:rounded-lg p-1 -mt-1'>Signup</button></Link>
          </li>
        </ul>
      </nav>
    
      </div>


    </div>
  )
}

export default Navbar
