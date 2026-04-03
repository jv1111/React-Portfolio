import React from 'react'
import { Icon } from '@iconify/react'

const skillCards = [
    {
        icon: "material-symbols:android",
        title: "Android Development",
        description: "I build Android applications using Android Studio with Kotlin and Java, creating responsive and user-friendly mobile apps with API and database integration."
    },
    {
        icon: "mdi:web",
        title: "Web Development",
        description: "I build full-stack web applications using modern frameworks and tools, creating responsive and user-friendly digital experiences with API and database integration."
    },
    {
        icon: "mdi:chip",
        title: "Embedded Systems",
        description: "I build embedded systems projects using microcontrollers and low-level programming, creating efficient and reliable solutions with hardware and software integration."
    }
]

const SkillPreview = () => {
    return (
        <section className='bg-secondary-surface'>
            <div className="container flex flex-col gap-7 py-10 md:py-15">
                <h3 className='text-primary text-center md:text-start'>Skills Preview</h3>
                {/* cards container */}
                <div className='flex flex-wrap flex-col md:flex-row gap-5 items-center justify-center'>
                    {skillCards.map((card) => (
                        <div key={card.title} className='flex flex-col max-w-70 gap-2 text-center rounded-md border px-2 py-5 border-white bg-black/20'>
                            {/* upper */}
                            <div className='flex flex-col items-center justify-center border-b pb-2 border-white text-white'>
                                <Icon className='mb-5' icon={card.icon} width="50" height="50" />
                                <h6>{card.title}</h6>
                            </div>
                            {/* lower */}
                            <div className='text-secondary-light'>
                                <p>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillPreview
