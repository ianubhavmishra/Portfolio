import React from 'react'

const skills = () => {
  return (
    <div>
      <div className='text-center font-semibold text-3xl mt-28 max-md:mt-16'>Skills</div>
    <div className='grid grid-cols-3 justify-items-center items-center h-96 rounded-lg max-w-screen-lg m-auto mt-4 bg-white max-md:grid-cols-1 max-md:h-[700px]'> 
    <div className='flex gap-8 items-center font-bold text-xl rounded border-solid border-black border h-12 w-48'>
      <img className='size-11' src="src/assets/html.svg"/>HTML
    </div>
    <div className='flex gap-10 items-center font-bold rounded text-xl border-solid border-black border h-12 w-48'><img className='size-11' src="src/assets/css.svg"/>CSS</div>
    <div className='flex gap-4 items-center font-bold text-xl border-solid rounded border-black border h-12 w-48'><img className='size-11' src="src/assets/js.svg"/>JavaScript</div>
    <div className='flex gap-7 items-center font-bold text-xl border-solid rounded border-black border h-12 w-48'><img className='size-11' src="src/assets/react.svg"/>React</div>
    <div className='flex gap-6 items-center font-bold text-xl border-solid rounded border-black border h-12 w-48'><img className='size-11' src="src/assets/node.svg"/>Node.js</div>
    <div className='flex gap-2 items-center font-bold text-xl border-solid rounded border-black border h-12 w-48'><img className='size-11' src="src/assets/tailwind.svg"/>Tailwind CSS</div>
    <div className='flex gap-4 items-center font-bold text-xl border-solid rounded border-black border h-12 w-48'><img className='size-11' src="src/assets/bootstrap.svg"/>Bootstrap</div>
    <div className='flex gap-7 items-center font-bold text-xl border-solid rounded border-black border h-12 w-48'><img className='size-11' src="src/assets/figma.svg"/>Figma</div>
    </div>
    </div>
  )
}

export default skills
