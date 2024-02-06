import React from 'react';
import bannerimage from '../assests/bannerimg1.jpg'

function About() {
  return (
    <div className='main-container bg-gray-100 py-16'>
      <h1 className='text-5xl font-bold pb-16 underline text-center'>About Me</h1>
<div className='flex '>
{/* imagecontainer */}
<div className='w-full flex justify-center'> <img className='w-fit' src={bannerimage} alt="Raushan Kumar" /></div>
{/* textcontainer */}
<div className='w-full flex justify-center'>
<div className='space-y-5 w-2/3'>
    <h1 className='text-5xl font-semibold p'>Java developer and React Js Developer</h1>

<p>With a passion for crafting efficient and scalable solutions, I thrive in dynamic environments.
   My expertise extends from backend Java development to frontend React JS, 
   ensuring seamless integration and user-centric experiences. Dedicated to continuous learning, 
   </p><p>I embrace challenges eagerly, leveraging my expertise to deliver innovative solutions. 
   Committed to excellence, I excel in problem-solving and collaboration, 
   driven by a relentless pursuit of excellence. With a strong foundation in software development,
   I navigate complexities with ease, striving for excellence in every project I undertake.</p>

<button className=' text-1xl  px-3 py-2 bg-orange-500 rounded-full shadow-lg'>Read more.....</button></div>
</div>

</div>

    </div>
  )
}

export default About
