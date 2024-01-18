import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { Project } from './types/Project';

export default async function Home() {

  const projects = await getProjects();

  return (
    <main>

      {projects.map((project: Project) => (
        <div key={project._id}>
          <h2>{project.name}</h2>
        </div>
      ))}

    </main>
  )
}
