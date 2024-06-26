import React from 'react'

const about = () => {
  return (
    <div>
      <div className="flex justify-around
     max-w-screen-lg mt-40 m-auto max-md:flex-col max-md:items-center max-md:gap-14">
        <div className='max-w-lg'>
          <div className='font-medium text-xl'>Hello, my name is</div>
          <h1 className='font-bold text-3xl'>Anubhav Mishra</h1>
          <div className='text-lg'>I'm a frontend Developer with a strong background in creating user-friendly
            Websites. Skilled in HTML, CSS, JavaScript, and React js, Tailwind CSS like frameworks.
            Seeking a challenging role to further enhance my skills and contribute to
            Innovative web development projects.</div>
        </div>
        <div>
          <img className='size-60 rounded-full ' src="https://avatars.githubusercontent.com/u/132945554?s=400&u=dd59955476920baf8890a95aee44eb33334fa04b&v=4" alt="" />
        </div>
      </div>
    </div>
  )
}

export default about
