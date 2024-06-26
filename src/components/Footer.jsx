import React from 'react'

const footer = () => {
  return (
    <div>
      <div className='flex items-center justify-around bg-slate-900 mt-32 p-3'>
        <h1 className='text-3xl max-md:text-xl text-white'>Check it out</h1>
        <div className='flex items-center'>
            <a href="https://www.linkedin.com/in/anubhav-mishra-b06653258/"><img className='w-11 max-md:w-5' src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"/></a>
            <div className='text-white text-2xl font-medium max-md:text-sm'><a href="https://www.linkedin.com/in/anubhav-mishra-b06653258/">LinkedIn</a></div>
        </div>
        <div className='flex items-center'>
            <a href="https://github.com/ianubhavmishra"><img className='size-10 max-md:size-5' src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"/></a>
            <div className='text-white text-2xl font-medium max-md:text-sm'><a href="https://github.com/ianubhavmishra">GitHub</a></div>
            
        </div>
      </div>
    </div>
  )
}

export default footer
