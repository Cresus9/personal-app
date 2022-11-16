import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am </h2>
                <p className='py-2 text-gray-600'>//</p>
                <p className='py-2 text-gray-600'>I am junior full stack web developer looking for a full-time position. I have a background in business administration and  accounting,I bring strong problem-solving skills to the table. I am proactive and takes initiative to learn new things. In my free time, i enjoy watching soccer games and spending time with friends and family.</p>
                <p className='py-2 text-gray-600'>When the covid-19 lockdown began, I seized the opportunity to learn coding. 
                I quickly realized that this was my passion, so I decided to enroll at Flatiron School to become a full stack web developer.
                Now that I am a confident developer, I am eager to learn and grow with a team. My goal is to be the best developer that I can be and contribute value wherever possible.Please don't hesitate to contact me if you would like to discuss any opportunities.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='/' />
            </div>
        </div>
    </div>
  )
}
