import { Hero, SkillPreview, ProjectsPreview } from '../components'

function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <SkillPreview />
      <ProjectsPreview />
    </div>
  )
}

export default Home
