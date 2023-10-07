import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
export const SocialLinks = () => {

    
  return (
    <div className='flex flex-col top-[35%] right-0 fixed'>
        <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md hover:bg-gray-800'>
                <a href="https://id.linkedin.com/in/vincent-dava-sutomo-46499498" className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer">
                <>
                <FaLinkedin size={30}/> LinkedIn 
                </>
                </a>
                </li>

                <li className='flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:bg-gray-800'>
                <a href="https://github.com/VincentDava" className='flex justify-between items-center w-full text-white'  target='_blank' rel="noreferrer">
                <>
                <FaGithub size={30}/> GitHub 
                </>
                </a>
                </li>

                <li className='flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:bg-gray-800'>
                <a href="mailto:vincentdavas@gmail.com" className='flex justify-between items-center w-full text-white'  target='_blank' rel="noreferrer">
                <>
                <HiOutlineMail size={30}/> Mail 
                </>
                </a>
                </li>

                <li className='flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md hover:bg-gray-800'>
                <a href="./CV.pdf" className='flex justify-between items-center w-full text-white' download={true} target='_blank' rel="noreferrer">
                <>
                 <BsFillPersonLinesFill size={30}/>Resume 
                </>
                </a>
                </li>
            
        </ul>
    </div>
  )
}
