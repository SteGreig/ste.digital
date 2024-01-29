import { getProjects } from '@/sanity/sanity-utils'
import { Project as ProjectType } from '../types/Project';
import Hero from './components/Hero';
import Project from './components/Project';
import TitleDivider from './components/TitleDivider';

export default async function Home() {

  const projects = await getProjects();

  return (
    <>

      <Hero />

      <TitleDivider title='Selected Works' classes='mt-20 xl:mt-28' />

      <div className='flex flex-col gap-20 mt-10 md:mt-14 lg:mt-16'>
        {projects.map((project: ProjectType) => (
          <Project
            key={project._id}
            _id={project._id}
            _createdAt={project._createdAt}
            name={project.name}
            slug={project.slug}
            excerpt={project.excerpt}
            image={project.image}
            content={project.content}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </div>

    </>
  )
}
