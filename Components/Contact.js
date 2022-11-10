import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill }from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'


export default function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>

<div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full'>
        <div >
            <img className='rounded-xl hover:scale-105  ease-in duration-300'  src='https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'/>
        </div>
        <div>
            <h2 className='py-2'>Thierry Yabre</h2>
            <p>Full stack developer</p>
            <p className='py-4'>I'm available any full-time position.Contact me.</p>
        </div>
        <div> 
        <p className='uppercase pt-8'>connect with Me</p>
        <div className='flex items-center justify-between py-4 '>
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
<div>
</div>


<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4'>
        <form>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
            <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>email</label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input  className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
            </div>
            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
        </form>
    </div>
</div>
                
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
