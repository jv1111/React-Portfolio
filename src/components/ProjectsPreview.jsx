import React from 'react'

const ProjectsPreview = () => {
    return (
        <section>
            <div className='container'>
                {/* title */}
                <div>
                    <h3 className='text-primary'>Projects Preview</h3>
                    <small>Explore my recent work, featuring applications and systems I’ve designed and developed.</small>
                </div>

                {/* cards container */}
                <div>
                    {/* card */}
                    <div>
                        {/* upper */}
                        <div>
                            <img src="" alt="" />
                            <h6>Math Commanders</h6>
                        </div>
                        {/* lower */}
                        <div>
                            <p>Educational 3D math game built in Unity C# for Grade 5 students. Designed to make learning interactive.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectsPreview