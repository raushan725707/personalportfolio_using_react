import React from 'react'

const Services = () => {
  return (
    <div className='main-container py-16'>
        <h1 className='text-5xl underline text-center font-bold'>My Services</h1>

        <div className="services-container space-x-4 px-5 flex mt-12">

<div className='cursor-pointer hover:bg-gray-400 bg-slate-200  p-5 text-center service1 space-y-4 shadow-lg rounded-xl'>
    <h1 className='text-4xl'>Web Development</h1>
    <i class=" text-5xl fa-brands fa-react"></i>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rem consequuntur at perspiciatis excepturi ullam voluptatibus laudantium obcaecati voluptate nostrum.</p>
<button className='px-3 py-2 bg-orange-300 rounded-full shadow-lg text-2xl'>Check</button>
</div>

<div className='cursor-pointer hover:bg-gray-400 bg-slate-200  p-5 text-center service2 space-y-4 shadow-lg rounded-xl'> <h1 className='text-4xl'>Backend Development</h1>
<i class=" text-5xl  fa-brands fa-java"></i>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rem consequuntur at perspiciatis excepturi ullam voluptatibus laudantium obcaecati voluptate nostrum.</p>
<button className='px-3 py-2 bg-orange-300 rounded-full shadow-lg text-2xl'>Check</button></div>


<div className='cursor-pointer hover:bg-gray-400  bg-slate-200  p-5 text-center service3 space-y-4 shadow-lg rounded-xl'> <h1 className='text-4xl'>AWS </h1>
<i class=" text-5xl  fa-brands fa-aws"></i>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rem consequuntur at perspiciatis excepturi ullam voluptatibus laudantium obcaecati voluptate nostrum.</p>
<button className='px-3 py-2 bg-orange-300 rounded-full shadow-lg text-2xl'>Check</button></div>

        </div>
    </div>
  )
}

export default Services
