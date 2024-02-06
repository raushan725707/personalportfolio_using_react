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
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, accusantium. Voluptate sint ex ipsa blanditiis laboriosam eligendi a ratione mollitia.</p>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo alias ullam corrupti voluptates ex quod sit culpa, repellat impedit voluptatem! Eligendi reiciendis aperiam quas ea, voluptatum delectus modi reprehenderit dolor.</p>
<button className=' text-1xl  px-3 py-2 bg-orange-500 rounded-full shadow-lg'>Read more.....</button></div>
</div>

</div>

    </div>
  )
}

export default About
