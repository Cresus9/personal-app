import React from 'react'
import Image from 'next/image'
import { project1 } from '../public/assets/project1.jpg'
import { project2 } from '../public/assets/project3.jpg'
import { project3 } from '../public/assets/project2 .jpg'

export default function ProjectItem({title, background}) {
  return (
    <div id='project' >
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#5651e5]'>
             <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/project1.jpg' width='1100' height='50' alt='/' />
                 <div className='hiddene group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Real Estate app</h3>
                     <p className='pb-4 pt-2 text-white text-center'>React Js & Ruby</p>
                </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#5651e5]'>
             <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/project2 .jpg' width='1100' height='50' alt='/' />
                 <div className='hiddene group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>Wellness Center</h3>
                     <p className='pb-4 pt-2 text-white text-center'>React Js & Ruby</p>
                </div>
         </div>
         <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#5651e5]'>
             <Image className='rounded-xl group-hover:opacity-10' src='/../public/assets/project3.jpg' width='1100' height='50' alt='/' />
                 <div className='hiddene group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>New York Private Jet Charter</h3>
                     <p className='pb-4 pt-2 text-white text-center'>React Js & Ruby</p>
                </div>
         </div>
    </div>
  )
}
