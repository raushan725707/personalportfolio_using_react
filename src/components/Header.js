import React, { useState } from 'react'

function Header() {

   const [brand,setBrand] =useState("Raushan kumar");

  const [menuLinks,setMenuLinks]       =useState([
    {
        title:"Home",
         link:"/home",
         id:1

    },
    {
        title:"About",
         link:"/about",
         id:2

    },  {
        title:"Skills",
         link:"/skills",
         id:3

    },  {
        title:"Portfolio",
         link:"/portfolio",
         id:4

    },
    {
        title:"Contact",
         link:"/contact",
         id:5

    }
])


  return (
    <>
      

<div className='h-20 border main flex justify-between items-center px-16 bg-gray-200'>


<div><h1 className='text-2xl font-bold'>Raushan kumar</h1></div>
<div className='space-x-6'>
{
    menuLinks.map((itmes)=>(
        <a key={itmes.id} href={itmes.link} className='hover:text-orange-600'>{itmes.title} </a>
 
    ))
}

    {/* <a href=""className='hover:text-orange-600'>home</a>
    <a href=""className='hover:text-orange-600'>About </a>

    <a href=""className='hover:text-orange-600'>Skills</a>
    <a href=""className='hover:text-orange-600'>Portfolio</a>
    <a href=""className='hover:text-orange-600'>Contact</a> */}


</div>
<div>

    <button className='px-3 py-2 bg-orange-600 rounded-full shadow text-1xl'>Hire Me</button>
</div>


</div>


    </>
  )
}

export default Header
