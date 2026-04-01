import profileImage from '../assets/profile.webp'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='container flex justify-between items-center bg-surface shadow p-2'>
      <div className='flex gap-3 items-center justify-center'>
        <div className="flex items-center justify-center rounded-full w-12 h-12">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>
          <h6 className='text-primary'>Jeremy Viterbo</h6>
      </div>

      <nav className={`items-center justify-center absolute left-0 top-18 z-10 w-screen bg-surface shadow overflow-hidden transition-all duration-500 md:static md:w-auto md:overflow-visible md:shadow-none ${isOpen ? 'max-h-96' : 'max-h-0'} md:max-h-none`} aria-label="Primary">
        <ul className="mt-5 flex flex-col items-center justify-center gap-5 pb-5 md:mt-0 md:flex-row md:pb-0">
          <li>
            <a href="#home" className="transition-colors duration-500 hover:text-primary">Home</a>
          </li>
          <li>
            <a href="#about" className="transition-colors duration-500 hover:text-primary">About</a>
          </li>
          <li>
            <a href="#projects" className="transition-colors duration-500 hover:text-primary">Projects</a>
          </li>
          <li>
            <a href="#contact" className="transition-colors duration-500 hover:text-primary">Contact</a>
          </li>
        </ul>
      </nav>

      {/* generate burger menu */}
      <button className="cursor-pointer transition-colors duration-500 hover:text-primary md:hidden flex flex-col space-y-1 p-2" onClick={() => setIsOpen(!isOpen)}>
        <span className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
      </button>

    </header>
  )
}

export default Header
