import React from 'react'
import tempImage from '../assets/profile.webp'

const ProjectsPreview = () => {
    const projects = [
        {
            title: "Math Commanders",
            description: "Educational 3D math game built in Unity C# for Grade 5 students. Designed to make learning interactive.",
            image: tempImage
        },
        {
            title: "Math Commanders",
            description: "Educational 3D math game built in Unity C# for Grade 5 students. Designed to make learning interactive.",
            image: tempImage
        },
        {
            title: "Math Commanders",
            description: "Educational 3D math game built in Unity C# for Grade 5 students. Designed to make learning interactive.",
            image: tempImage
        }
    ]

    return (
        <section className='p-16 md:p-15'>
            <div className='container flex flex-col gap-10 md:gap-9'>
                {/* title */}
                <div className='max-w-90'>
                    <h2 className='text-primary'>Projects Preview</h2>
                    <small className='mt-2 text-secondary'>Explore my recent work, featuring applications and systems I’ve designed and developed.</small>
                </div>

                {/* cards container */}
                <div className='flex flex-wrap flex-col md:flex-row gap-10 items-center justify-center pb-6 '>
                    {projects.map((project, index) => (
                        <div className='flex flex-col max-w-64 text-center rounded-md overflow-hidden border border-white bg-black/50 shadow-md' key={index}>
                            {/* upper */}
                            <div>
                                <img className='h-40 w-screen object-cover border-b border-white' src={project.image} alt="" />
                            </div>
                            {/* lower */}
                            <div className='px-2 py-5 text-secondary-light'>
                                <h6>{project.title}</h6>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ProjectsPreview