import { NavLink } from 'react-router-dom'
import profileImage from '../assets/profile.webp'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-surface shadow p-2'>
      <div className="container">
        <div className='flex justify-between items-center'>
          <div className='flex gap-3 items-center justify-center'>
            <div className="flex items-center justify-center rounded-full w-12 h-12">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <h6 className='text-primary'>Jeremy Viterbo</h6>
          </div>

          <nav className={`items-center justify-center absolute left-0 top-18 z-10 w-screen bg-surface shadow overflow-hidden transition-all duration-500 md:static md:w-auto md:overflow-visible md:shadow-none ${isOpen ? 'max-h-96' : 'max-h-0'} md:max-h-none`} aria-label="Primary">
            <ul className="mt-5 pb-5 flex flex-col items-center justify-center gap-5 md:mt-0 md:flex-row md:pb-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `transition-colors duration-500 hover:text-primary ${isActive ? 'text-primary' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* generate burger menu */}
          <button className="flex flex-col space-y-1 p-2 md:hidden cursor-pointer transition-colors duration-500 hover:text-primary" onClick={() => setIsOpen(!isOpen)}>
            <span className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
