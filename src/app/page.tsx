import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Achievment from './Components/Achievment';
import Courses from './Components/Courses';

const page = () => {
  return (
    <div>
    <div className='bg-gray-200 p-3 text-2xl border-b-2 border-black'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mr-9'>
      <p className='text-center lg:text-left'>
      Phone Number: 956 742 455 678
      </p>
      
      <div className='flex flex-wrap justify-center lg:justify-end mt-4 lg:mt-0'>
      | Email:info@ddsgnr.com
      
       </div>
       
    

      <div className='flex space-x-4 items-end justify-end mb-4 lg:text-center'>
      <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaLinkedin/>
      <br></br>
      </div>
      </div>
    </div>
   
   <br></br>
    <Navbar />
    <Hero />
    <Footer />
    <Card/>
    <Achievment />
    <Achievment/>
    <Courses />
    </div>
    
    
    
    
    
  )
}

export default page
