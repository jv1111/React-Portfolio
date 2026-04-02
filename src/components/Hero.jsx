import profileImage from '../assets/profile.webp'
import { Icon } from '@iconify/react'

function Hero() {
    const contactIcons = [
        { icon: "mdi:phone", text: "+1 (123) 456-7890" },
        { icon: "mdi:web", text: "www.jeremy.dev" },
        { icon: "mdi:email", text: "jeremy@example.com" }
    ];

    return (
        <section id="home" className="flex flex-col items-center justify-center h-screen md:h-fit md:py-16">
            <div className="container gap-10 grid items-center text-center md:text-left md:grid-cols-2">
                <div className='flex flex-col items-center justify-center md:h-auto md:items-start md:justify-start md:order-1 order-2'>
                    <h1>
                        <span className="text-shadow text-text">Hi I'm </span>
                        <span className="text-primary text-shadow">Jeremy</span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center gap-2 mt-1 justify-center md:justify-start">
                        <div className="bg-text border-2 border-primary h-2 rounded-xs shadow-[2px_2px_5px_rgba(0,0,0,1)] w-40" />
                        <h4 class="text-shadow">
                            Software Developer
                        </h4>
                    </div>

                    <h6 className="max-w-105 mt-1 text-secondary">
                        Building Android apps, full-stack web applications, and embedded systems
                    </h6>

                    <div className="flex gap-4 mt-10">
                        <button className='btn btn--primary'>Resume</button>
                        <button className='btn btn--secondary'>Github</button>
                    </div>

                    {/* icons */}
                    <div className='flex flex-col gap-3 mt-10'>
                        {contactIcons.map((item, index) => (
                            <div key={index} className='flex gap-3 items-center'>
                                <Icon icon={item.icon} className="text-3xl text-primary" />
                                <span className="text-secondary">{item.text}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex justify-center md:justify-end md:order-2 order-1">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="h-50 w-50 md:h-100 md:w-100 object-cover rounded-md shadow-2xl "
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
