import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill }from 'react-icons/bs'

export default function Navbar() {
    const [nav, setNav]=useState(false)
    const [shadow, setShadow]=useState(false)


    const navHandler=()=>{
        setNav(nav=>!nav)
    }

    useEffect(()=>{
        const shadowHandler=()=>{
            if (window.scrollY >= 90){
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', shadowHandler)

    }, [])



  return (
    <div className={shadow?'fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16' >
        <Image src='/../public/assets/logo1.png' alt='/' width='125' height='50' />
        <div>
            <ul className='hidden md:flex'>
                <Link href='/' >
                    <li  className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about' >
                    <li  className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skill' >
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#project' >
                    <li  className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact' >
                    <li onClick={()=>setNav(!false)} className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={navHandler} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>
        <div className={nav?' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':""}>
            <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            :'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }>
            <div>
                <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assets/logo1.png' alt='/' width='80' height='35' />
                        <div onClick={navHandler} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose  />
                        </div>
                        </div>
                   
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's build something legentary together</p>
                </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                        <li onClick={()=>setNav(false)} className='py text-sm'>Home</li>
                        </Link>
                        <Link href='/#about'>
                        <li onClick={()=>setNav(false)} className='py text-sm'>About</li>
                        </Link>
                        <Link href='/#skill'>
                        <li onClick={()=>setNav(false)} className='py text-sm'>Skills</li>
                        </Link>
                        <Link href='/#project'>
                        <li onClick={()=>setNav(false)} className='py text-sm'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                        <li onClick={()=>setNav(false)} className='py text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40 '>
                        <p className='uppercase tracking-widest text-[#5651e5]'> Let's Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                <a href="https://www.linkedin.com/in/thierry-yabre/">
                                <FaLinkedinIn />
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                <a href="https://github.com/Cresus9" >
                                <FaGithub />
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                <a href='hermanyabre5@gmail.com'>
                                <AiOutlineMail />
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                <a href='https://medium.com/@hermanyabre5'>
                                <BsPersonLinesFill />
                                </a>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
