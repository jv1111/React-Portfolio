import React from 'react'
import aboutBanner from "../assets/about_banner.webp"

const AboutBanner = () => {
    return (
        <section className="relative bg-black px-16 md:px-15">
            <img src={aboutBanner} alt="about banner" className='absolute left-0 h-screen w-[50vw] object-cover z-1' />
            <div className="relative container z-10">
                <div className="wrapper h-screen grid md:grid-cols-2 gap-10 py-16 md:py-10">
                    <div>
                        <p className='text-secondary-light text-sm'>About -&gt; Skills -&gt; Tech Stack -&gt; Education</p>
                    </div>
                    <div className='flex  items-center justify-center gap-2 p-20'>
                        <div className='flex flex-col gap-2 items-center justify-center text-center md:items-start md:justify-start md:text-left'>
                            <h1 className='md:text-5xl text-primary text-shadow-white'>About Me</h1>
                            <div className='bg-white border-2 border-primary h-2.5 w-55 rounded-xs shadow-[2px_2px_5px_rgba(255,255,255,1)]'></div>
                            <p className='text-base text-secondary-light'>I am passionate about building applications that solve real-world problems. I build Android apps, full-stack web applications, and embedded systems using a variety of frameworks and tools. I enjoy exploring different technologies, tackling technical challenges, and continuously growing my skills as a software developer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutBanner