import React from 'react'
import Swal from 'sweetalert2'

const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "7e5fb86d-ac04-4e8c-9e94-1ce3026b0790");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "Success!",
      text: "Mail sent successfully!",
      icon: "success"
    });
  }
};

const Contact = () => {
  return (
    <div>
      <form className='flex flex-col gap-4 items-center mt-28' onSubmit={onSubmit}>
        <h1 className='text-center font-semibold text-3xl'>Contact Form</h1>
        <div className='flex flex-col gap-2 w-4/6'>
          <label>Name</label>
          <input className='h-10 border-solid border border-gray-400 rounded' type="text" name="name" placeholder='Enter your name' required/>
        </div>
        <div className='flex flex-col gap-2 w-4/6'>
          <label>Email</label>
          <input className='h-10 border-solid border border-gray-400 rounded' type="email" name="email" placeholder='Enter your email' required/>
        </div>
        <div className='flex flex-col gap-2 w-4/6'>
          <label>Message</label>
          <textarea className='h-20 border-solid border border-gray-400 rounded' name="message" placeholder='Enter your message' required></textarea>
        </div>
        <button className='py-1 px-32 max-md:px-20 bg-amber-400 border-solid border border-black rounded hover:font-medium '>Send Mail</button>
      </form>
    </div>
  )
}

export default Contact
