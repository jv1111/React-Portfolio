import { Hero, SkillPreview, ProjectsPreview, CTA } from '../components'

function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <SkillPreview />
      <ProjectsPreview />
      <CTA/>
    </div>
  )
}

export default Home
