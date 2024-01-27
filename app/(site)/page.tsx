import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '../types/Project';
import { PortableText } from '@portabletext/react';
import Hero from './components/Hero';

export default async function Home() {

  const projects = await getProjects();

  return (
    <>

      <Hero />

      <div className='mt-28 flex max-w-screen-lg'>
        <h1 className='font-primary text-xs uppercase tracking-[0.2em] opacity-30 pr-4'>Selected Works</h1>
        <span className='flex-1 h-px bg-white opacity-10 mt-2'></span>
      </div>

      {projects.map((project: Project) => (
        <div className='mt-16' key={project._id}>
          <h2 className='font-primary font-bold text-5xl'>{project.name}</h2>
          <div>
            <PortableText value={project.content} />
          </div>
        </div>
      ))}

    </>
  )
}
