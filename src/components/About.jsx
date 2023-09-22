import React from 'react'

export const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
            </div>
            
        

        <p className='text-xl mt-8'>
        Hello, I'm Vincent Dava Sutomo, a passionate student pursuing my education at Binus University in Indonesia. My academic journey is centered around my major in Computer Science, a field that constantly ignites my curiosity and fuels my desire to create, innovate, and solve complex problems.        </p>

        <br/>
        <p className='text-xl'>
        I thrive in the world of technology, with a strong focus on software development, web development, and a wide array of other digital realms. Whether I'm crafting elegant code for a sophisticated software application or designing dynamic web solutions that captivate users, I relish the creative process and the transformative power of technology.        </p>
        </div>
    </div>
  )
}
