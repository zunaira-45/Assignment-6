import React from 'react'
import Image from 'next/image'
import { PiX } from 'react-icons/pi'

const Card = () => {
  return (
    <div>
    <div>
      <h1 className='text-center font-bold text-4xl mt-16 md:text-4xl'>
        Explore Courses by Category
        </h1>
        <p className='text-center mt-2'>
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors
        </p>
        </div>

  <div className=' flex items-center space-x-4 justify-center'>
          <img src="images/design.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
          <img src="images/market.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
          <img src="images/dev.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
        </div>
    
       <br></br>
        <div className='flex space-x-8 items-center justify-center'>
          <img src="images/com.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
          <img src="images/dig.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
          <img src="images/self.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
        </div>
        <br></br>

        <div className='flex space-x-8 items-center justify-center'>
          <img src="images/busi.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
          <img src="images/fin.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
          <img src="images/cons.png"
          alt="image"
          height={'250px'}
          width={'250px'}
          />
        </div>
        <br></br>
        <br></br>
        <div className='flex items-center justify-center'>
          <button className='border-2 border-gray-400 p-2 gap-x-4 mr-3 md:rounded-lg'>
            View All Course
          </button>
        </div>

        


       
       
         
        
         
        
          
          
          </div>

       
            

           
       
        
  )
}

export default Card
