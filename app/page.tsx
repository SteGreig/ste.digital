import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { Project } from './types/Project';
import { PortableText } from '@portabletext/react';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>

      {projects.map((project: Project) => (
        <div className='' key={project._id}>
          <h2 className='font-primary'>{project.name}</h2>
          <div>
            <PortableText value={project.content} />
          </div>
        </div>
      ))}

    </div>
  )
}
