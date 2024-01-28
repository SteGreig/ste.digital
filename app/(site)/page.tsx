import { getProjects } from '@/sanity/sanity-utils'
import { Project as ProjectType } from '../types/Project';
import Hero from './components/Hero';
import Project from './components/Project';

export default async function Home() {

  const projects = await getProjects();

  return (
    <>

      <Hero />

      <div className='mt-20 xl:mt-28 flex max-w-screen-lg'>
        <h1 className='font-primary text-xs uppercase tracking-[0.2em] opacity-30 pr-4'>Selected Works</h1>
        <span className='flex-1 h-px bg-white opacity-10 mt-2'></span>
      </div>

      <div className='flex flex-col gap-20 mt-10 md:mt-14 lg:mt-16'>
        {projects.map((project: ProjectType) => (
          <Project
            key={project._id}
            name={project.name}
            excerpt={project.excerpt}
            image={project.image}
            content={project.content}
            tags={project.tags}
          />
        ))}
      </div>

    </>
  )
}
