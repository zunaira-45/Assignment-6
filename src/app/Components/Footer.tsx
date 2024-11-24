import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='bg-[#F7F7F7] p-5 text-2xl font-bold py-8'>
      
      <h1>
      Trusted by 2000+ 
      <br></br>companies worldwide.

      <div className='flex space-x-8 items-center justify-end cursor-pointer hover:text-white'>
      <img src={"images/footer.png"} alt="image" 
      height={"600px"}
      width={"600px"}
      className='ml-13'>
      </img>
      </div>
      </h1>
    </div>
    </div>
  )
}

export default Footer
