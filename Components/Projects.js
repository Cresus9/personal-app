import React from 'react'
import ProjectItem from './ProjectItem'
import Image from 'next/image'
// import { project1 } from '../public/assets/project1.jpg'



export default function Projects() {
  return (
    <div  id='project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-15'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                title="Real Estate App"
                // background={project1}
                />
                 {/* <ProjectItem 
                title="Wellness Center"
                background={projetct2}
                />
                 <ProjectItem 
                title="New  York Private Jet Charter"
                background={projetct3}
                /> */}
                
            </div>

        </div>
          
    </div>
  )
}
