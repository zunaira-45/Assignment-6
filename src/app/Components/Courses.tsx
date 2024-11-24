import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Courses = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-4xl mt-6'>
        Courses
      </h1>
      <p className='text-center mt-2'>
        Your Ultimate Guide to learning
      </p>

      <div className='flex flex-col items-center justify-center space-x-8 mt-8 md:flex-row md:space-x-8 md:space-y-0'>
       <button>
        Popular
       </button>
       <button>
        Recommend
       </button>
       <button>
        Best Price
       </button>
       </div>

       <div className='flex flex-col md:flex-row items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-12'>
        <img src={"images/comp.png"} alt="image"
        height={"300px"}
        width={"416px"}
        className='w-full md:w-1/3'
        />

        <img src={"images/code.png"} alt="image"
        height={"300px"}
        width={"416px"}
        className='w-full md:w-1/3'
        />

         <img src={"images/task.png"} alt="image"
        height={"400px"}
        width={"400px"}
        className='w-full md:w-1/3'
        />
        </div>

        <div className=' flex items-center justify-center space-x-9 mt-4'>
          <img src={"images/ui.png"} alt="image"
          height={"122px"}
          width={"382px"}
          className='w-full md:w-1/3'
          />

   <img src={"images/py.png"} alt="image"
            height={"122px"}
            width={"382px"}
            className='w-full md:w-1/3'/>

<img src={"images/data.png"} alt="image"
          height={"122px"}
          width={"382px"}
          className='w-full md:w-1/3'
          />
          </div>

          <div className=' flex items-center justify-start space-x-40'>
            <button className='border-2 border-gray-400 mt-4 p-2 rounded-md'>
              Enroll Now
            </button>
            <p className='mt-3'>
           $400
           </p>

           <button className='border-2 border-gray-400 mt-4 p-2 rounded-md'>
              Enroll Now
            </button>
            <p className='mt-3'>
           $400
           </p>
           <button className='border-2 border-gray-400 mt-4 p-2 rounded-md'>
              Enroll Now
            </button>
            <p className='mt-3'>
           $400
           </p>
           </div>
   

         <div>
           <div className='flex items-center justify-start mt-8 space-x-12'>
        <img src={"images/paint.png"} alt="image"
        height={"300px"}
        width={"416px"}
        />

        <img src={"images/art.png"} alt="image"
        height={"300px"}
        width={"416px"}
        />

         <img src={"images/web.png"} alt="image"
        height={"300px"}
        width={"416px"}
        />
        </div>

        <div className='flex items-center justify-center space-x-12'>
          <img src={"images/special.png"} alt="image"
          height={"122px"}
          width={"382px"}
          className='mr-6'/>

       <img src={"images/law.png"} alt="image"
          height={"122px"}
          width={"382px"}/>

        <img src={"images/webflow.png"} alt="image"
          height={"122px"}
          width={"382px"}/>
     </div>

   
<div className=' flex items-center justify-start space-x-40 '>
            <button className='border-2 border-gray-400 mt-4 p-2 rounded-md'>
              Enroll Now
            </button>
            <p className='mt-3'>
           $400
           </p>

           <button className='border-2 border-gray-400 mt-4 p-2 rounded-md'>
              Enroll Now
            </button>
            <p className='mt-3'>
           $400
           </p>
           <button className='border-2 border-gray-400 mt-4 p-2 rounded-md'>
              Enroll Now
            </button>
            <p className='mt-3'>
           $400
           </p>
           </div>

           <div className='flex items-center justify-center mt-14'>
            <button className='border-2 border-gray-500 p-3 m-3 gap-x-6'>
              View All Course
            </button>
            </div>
    
         <div className='mt-20'>
             <h3 className='text-center text-4xl font-bold'>
              Our Team
            </h3>
            <p className='text-center mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
         </div>

         <div className='mt-6'>
          <img src={"images/pic.png"} alt="image"
          height={"482px"}
          width={"1280px"}/>
          </div> 

          <div className='ml-8 space-x-2'>
            <h3 className="text-3xl font-bold mt-40 text-left">
              Customer Testimonials
            </h3>

            <div className='mt-4'>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className='mt-20'>
            <img src={"images/div.png"} alt="image"
            width={"1152px"}
            height={"417px"}/>
            </div>

            <div className='mt-8 gap-y-6 flex items-center justify-between'>
            <h1 className='font-bold text-2xl'>
            Subscribe to our newsletter
            </h1>
            
            
            <div className='flex items-center justify-end'>
             <label className='block text-black ' htmlFor='email'></label>
          <input
            type='email'
            className='border-gray-700 p-2 w-half outline-gray-800 outline rounded-md gap-x-5'
            placeholder='Enter your email'
            required
          />
         
          <button className='border-2 border-gray-800 p-2 m-4 rounded-md gap-x-5'>
          Subscribe
          </button>
           

            </div></div>

            <div className='mt-20 space-x-40 flex items-center justify-between top-6'>
              <img src={"images/extra.png"}
              alt="image"
              height={"240px"}
              width={"250px"}
              />
              <li>
              <h1 className='font-bold text-1xl'>
                Course
              </h1>
              <br></br>
              <p>
                Business
                </p>
                <p>
                Development</p>
               <p> Technology</p>
                <p>Design</p>
                <p>Programming
              </p>
              </li>
              <li>

              <h2 className=' font-bold text-1xl'>
                Resources
              </h2>
              <br></br>
              <p>
              Career   
              </p>
              <p>
                Resume
              </p>
              <p>
                Learning
              </p>
              <p>
                Interview Preparation
              </p>
              <p>
                Jobs
              </p>
              </li>
              <li>

              <h3 className='text-1xl font-bold'>
                About Us
              </h3>
              <br></br>
              <p>
                Contact
              </p>
              <p>
                Help/Support
              </p>
              <p>
                FAQ
              </p>
              <p>
                Terms and Condition
              </p>
              <p>
                Partners
              </p>
              </li>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
             <div className='space-x-6'>
              <img src={"images/line.png"}
              alt="image"
              width={"1200px"}
              height={"1200px"} />
             </div>

             <div className='flex items-center justify-start space-x-4'>
             <p>
             2023 Ddsgnr. All right reserved.
             </p>
             <p>
              Privacy Policy
             </p>
             <p>
              Terms of Service
             </p>
             <p>
              Cookies Setting
             </p>

             <div className='flex items-center justify-end space-x-7'>
              
             <FaFacebookF /> 
             
             <FaInstagram />        
            
             <FaTwitter />
             
              <FaLinkedin/>
      </div>
      </div>
    </div>
             </div>
            
          
            
              

            </div>
      



          
        



           

           
          

          
           
           
           

        

           


 

  )
}
  export default Courses