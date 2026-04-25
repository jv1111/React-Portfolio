import React from 'react'
import BarDivider from '../components/BarDivider'
import { Icon } from '@iconify/react'
import HorizontalCard from '../components/HorizontalCard'
import projects from '../data/skillCards.json'

const Project = () => {
    // todo create the project cards and search bar
    return (
        <section className='p-16 md:p-15'>
            <div className="container">
                <div className="wrapper flex gap-20 items-center w-full">
                    {/* left */}
                    <div className='max-w-100'>
                        <h2 className='text-3xl md:text-5xl text-primary text-shadow'>Projects</h2>
                        <p className='flex flex-col gap-5 text-secondary mt-10'>
                            <span>A collection of projects across web, Android, Arduino, and game development. These works range from frontend-focused builds to backend and full-stack systems, depending on each project's goals.</span>
                            <span>Built using tools like Android Studio, Node.js, React, Express.js, SQL, Unity, and Arduino, these projects reflect practical experience in creating user interfaces, backend services, mobile apps, and hardware-integrated solutions.</span>
                        </p>
                    </div>
                    {/* mid */}
                    <BarDivider variant='dark' width='w-2' height='h-80' />
                    {/* right */}
                    <div className='flex flex-col flex-1 min-h-50'>
                        {/* search bar */}
                        <div className='flex item-center justify-center w-60 border border-secondary rounded-md overflow-hidden'>
                            <input className='flex-1 py-1 px-2 outline-none text-sm font-light text-secondary' type="text" placeholder='Search' />
                            <div className='flex items-center justify-center w-15 bg-primary rounded-md'>
                                <Icon className='text-2xl text-white' icon='oui:ws-search' />
                            </div>
                        </div>
                        {/* projects view */}
                        <div className='flex flex-col gap-2 mt-5'>
                            {projects.map((project, index) => (
                                <HorizontalCard
                                    icon={project.icon}
                                    title={project.title}
                                    description={project.description}
                                    size={1}
                                    key={project.index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project