import React from 'react'
import fotodiri from '../assets/gambarporto-removebg-preview.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

export const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center pt-20 h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-3xl sm:text-6xl pt-8 font-bold text-white'>
                     Hi!, I'm Vincent Dava
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                {/* I'm a Full Stack Developer */}
                I'm a passionate student pursuing my education at Binus University in Indonesia. My academic journey is centered around my major in Computer Science. 
                </p>
                
                    <Link to='portofolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                          Portofolio
                        <span className='group-hover:rotate-90 duration-300'>
                           <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
             </div>
                    <div>
                         <img src={fotodiri} alt='my profile' className=' mt-0 rounded-2xl  w-1/2 mx-auto md:w-2/3'/>
                    </div>
            </div>
        </div>
    
  )
}
