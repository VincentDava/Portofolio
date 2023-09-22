import React from 'react'
import gambar1 from '../assets/ASPCRUD.png'
import gambar2 from '../assets/nodeexpress.png'
import gambar3 from '../assets/tictactoemulti.png'
import gambar4 from '../assets/vocman.png'
import gambar5 from '../assets/webporto.png'

export const Portofolio = () => {

    const portofolios = [
        {
            id:1,
            src:gambar2,
            judul:"Contact Management (Node.js)",
            href:"https://github.com/VincentDava/Contact-Management-NodeJs"
            
        },
        {
            id:2,
            src:gambar4,
            judul:"Vocman Game (C Programming)",
            href:"https://github.com/VincentDava/Vocman-Game"
        },
        {
            id:3,
            src:gambar3,
            judul:"Tic-Tac-Toe (C Programming)",
            href:"https://github.com/VincentDava/TicTacToe-Multiplayer-Game"
        },
        {
            id:4,
            src:gambar5,
            judul:"Portofolio Website (React.js)",
            href:"https://github.com/VincentDava/Portofolio-Website-React.js"
            
        },
        {
            id:5,
            src:gambar1,
            judul:"Artist Management System (ASP.NET, C#)",
            href:"https://github.com/VincentDava/Artist-Management-System"
        },
        {
            id:6,
            src:gambar1,
            judul:"Marketplace website (ASP.NET, C#)",
            href:"https://github.com/VincentDava/Marketplace-Website"
        }
    ]
  return (
    <div name="portofolio" className='bg-gradient-to-b py-10  from-black to-gray-800 w-full text-white md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portofolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portofolios.map(({id,src,href,judul})=>(
            
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center mt-2 '>
                    <p>{judul}</p>
                </div>
            <div className='flex items-center justify-center text-gray-300'>
                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
            </div>
        </div>
        
        ))
        }
        </div>

        
    </div>
    </div>
  )
}
