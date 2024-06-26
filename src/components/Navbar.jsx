import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-around items-center p-4 w-full fixed top-0 bg-amber-400 max-md:flex-col max-md:gap-2 max-md:p-2'>
        <h1 className='font-semibold text-4xl'>Frontend Devloper</h1>
      <ul className='flex gap-5'>
      <li className='hover:underline cursor-pointer'><a href="#about">About</a></li>
      <li className='hover:underline cursor-pointer'><a href="#skills">Skills</a></li>
      <li className='hover:underline cursor-pointer'><a href="#education">Education</a></li>
      <li className='hover:underline cursor-pointer'><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
export default navbar
