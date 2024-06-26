import React from 'react'

const footer = () => {
  return (
    <div>
      <div className='flex items-center justify-around bg-slate-900 mt-32 p-3'>
        <h1 className='text-3xl max-md:text-xl text-white'>Check it out</h1>
        <div>
            <a href="https://www.linkedin.com/in/anubhav-mishra-b06653258/"><img className='w-24 max-md:w-14' src="src/assets/LinkedIn-Blue-21@2x.png"/></a>
        </div>
        <div className='flex'>
            <a href="https://github.com/ianubhavmishra"><img className='size-7 max-md:size-4' src="src/assets/github-mark-white.png"/></a>
            <a href="https://github.com/ianubhavmishra"><img className='w-20 max-md:w-12' src="src/assets/GitHub_Logo_White.png"/></a>
        </div>
      </div>
    </div>
  )
}

export default footer
