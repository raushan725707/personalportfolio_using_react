import React, { useEffect,useRef } from 'react';
import Typed from "typed.js";

import bannerbg from '../assests/bgimage.jpg';
// import bannerimage from "../assests/raushan.jpg"
import bannerimage from "../assests/programming-background-with-person-working-with-codes-computer_23-2150010125.avif"

function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "React Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='main-container flex items-center'>





      <div style={{
        backgroundImage:`url(${bannerbg})`,
        backgroundSize:"cover"
      }} className=' w-full flex  justify-center'>

        


<div className='w-2/3 text-white'><h3 className='text-3xl font-semibold'>Hi,I am</h3>
<h1 className='mt-4 text-5xl font-bold'>Raushan kumar</h1>
<h2 className='mt-4 text-3xl'>And I am a <span className='font-bold underline' ref={el}></span></h2>
<p className='mt-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eum doloribus perferendis ipsa! Facilis excepturi consectetur, repudiandae similique veritatis labore, est voluptatibus consequuntur ut necessitatibus delectus dolore ullam? Cupiditate, doloribus!</p>
    
    
    <div className="icons-container flex space-x-5">

<a className='border hover:bg-sky-600  cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-800' href='https://www.facebook.com/' target='_blank'                                                             > <i class="fa-brands text-4xl text-white fa-square-facebook"></i></a>  

<a className='border hover:bg-sky-600 cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-800' href='https://www.instagram.com/'>    <i class="fa-brands text-4xl text-white fa-square-instagram"></i>
</a>
<a className='border hover:bg-sky-600 cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-800' href='https://www.youtube.com/'>    <i class="fa-brands text-4xl text-white fa-youtube"></i>
</a>

<a className='border hover:bg-sky-600 cursor-pointer w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>    <i class="fa-brands text-4xl text-white fa-linkedin"></i>
</a>

    </div>
    
     <br />
       <a className=' text-1xl  px-3 py-2 bg-orange-500 rounded-full shadow-lg' href='/contact' >Contact Me</a></div>

      </div>


      <div className=' w-full flex justify-center'>


        <img className='rounded-full shadow-lg h-50 w-50 mt-2' src={bannerimage} alt="" />
      </div>
    </div>
  )
}

export default Banner
