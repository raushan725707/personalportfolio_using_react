import React from 'react';
import expertiseimg from '../assests/pexels-abdullah-ghatasheh-1631677.jpg'

function Expertise() {
  return (
    <>
    <div className='my-8'>
              <h1 className='text-5xl font-semibold text-center underline'>My Expertise</h1>

              <div  className='box-container item-center flex my-16'>

                <div style={{
        backgroundImage:`url(${expertiseimg})`,
        backgroundSize:"cover",
        
      }} className='flex justify-center'>
<div className='w-2/3 text-center space-y-4'><h1 className='text-4xl font-semibold'>I love these Technology</h1>       
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo aut culpa ducimus. Nam, enim sunt recusandae quidem quisquam sequi sapiente harum, ab voluptas nemo saepe nobis possimus consectetur. Accusamus.</p>
       
       <button className='px-4 py-2 bg-orange-500 rounded-full shadow-lg text-2xl'>Hire Me</button></div>
           </div>


                <div className='flex justify-center'> 
<div className='flex justify-center h-fit space-x-3 flex-wrap  w-2/3'>
<p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>COREJAVA</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>J2EE</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>SPRING BOOT</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>HIBERNATE/JPA</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>HTML</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>CSS</p>
<p className='bg-gray-300 w-fit px-3 py-2   mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>JAVASCRIPT</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>REACT</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>DIGITAL OCEAN</p>
<p className='bg-gray-300 w-fit px-3 py-2  mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>POSTMAN API</p></div>

                </div>


              </div>

    </div>
    </>
  )
}

export default Expertise
