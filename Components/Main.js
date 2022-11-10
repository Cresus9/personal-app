import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill }from 'react-icons/bs'


export default function () {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651E5]'>Thierry</span></h1>
                <h1 className='py-4 text-gray-700'>A full-stack web Developer</h1>
                <p>I'm a junior full stack web developer specialized in building digital experiences in Ruby, JavaScript...Currently, I'm in a job search, while, continuously learning new technologies.</p>
                <div className='flex items-center justify-between max-w-[330px]m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href="https://www.linkedin.com/in/thierry-yabre/">
                        <FaLinkedinIn />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <a href="https://github.com/Cresus9" >
                         <FaGithub />
                    </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <a href='hermanyabre5@gmail.com'>
                        <AiOutlineMail />
                     </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <a href='https://medium.com/@hermanyabre5'>
                         <BsPersonLinesFill />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
