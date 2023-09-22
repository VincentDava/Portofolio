import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full bg-gradient-to-b pt-20 from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2 '>Contact</p>
                <p className='py-6'>Submit the form below to contact me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/30fb3caa-f1fe-4ebf-9892-2a199d1e7f66' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>

                    <input type='text' name='email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>

                    <textarea name='message' rows={10} placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}
