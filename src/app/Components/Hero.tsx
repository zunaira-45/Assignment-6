import React from 'react'

const Hero = () => {
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
        <br></br>
       


    <h1 className='flex items-center justify-center w-1/2 text-5xl font-bold text-left ml-2 '>
    

        Learn new skills<br></br> online with ease
        </h1>
        <br></br>

       <p className=' flex items-center justify-center w-1/2 text-2xl text-left ml-5'>
       Discover a wide range of courses covering a variety of subjects,
        taught by expert instructors.
        </p> 
        <br></br>

        <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-4 items-center justify-center w-1/2'>
        <button className='bg-black text-white border-2 w-full sm:w-auto p-2 space-x-3'>
            Start Learning Now
        </button>
        
        <button className='bg-white text-black border-2 p-2 w-full sm:w-auto mt-2 sm:mt-0 space-x-3 gap-6'>
            Explore Career
        </button>
        </div>

        <div className='flex justify-end p-5'>
          
      <img src={"images/girl.png"} 
      alt="Image"
      width={'600px'}
      height={'200px'}
      className='absolute top-12 right-0 mt-32 w-full max-w-sm h-auto'></img>
      </div>
       
        
        
    
    

    
     </div>
    
    


  )
}

export default Hero
