import React from 'react'

const about = () => {
  return (
    <div>
      <div className="flex justify-around
     max-w-screen-lg mt-40 m-auto max-md:flex-col max-md:items-center max-md:gap-14">
        <div className='max-w-lg max-md:px-2'>
          <div className='font-medium text-xl'>Hello, my name is</div>
          <h1 className='font-bold text-3xl'>Anubhav Mishra</h1>
          <div className='text-lg'>I'm a frontend Developer with a strong background in creating user-friendly
            Websites. Skilled in HTML, CSS, JavaScript, and React js, Tailwind CSS like frameworks.
            Seeking a challenging role to further enhance my skills and contribute to
            Innovative web development projects.</div>
        </div>
        <div>
          <img className='size-60 rounded-full border-black border-4 border-solid ' src="https://media.licdn.com/dms/image/v2/D5603AQHPC8XpP8vFXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719906476802?e=1741824000&v=beta&t=K399UJnwlz-cWrfrS9Vq8L6qF7BipqsoIqh0yYainEw" alt="" />
        </div>
      </div>
        <button className='flex gap-1 items-center max-md:m-auto max-md:mt-14 ml-80 bg-slate-900 text-white p-2 rounded-lg font-medium hover:bg-slate-700'><a href="https://drive.google.com/uc?export=download&id=159N40rdrVWba1YrZrAEs07MWR2XEykK7">Resume</a>
        <img className='size-6' src="https://img.icons8.com/?size=100&id=82829&format=png&color=FFFFFF"/>
        </button>
    </div>
  )
}

export default about
