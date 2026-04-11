import { NavLink } from "react-router-dom";
import profileImage from "../assets/profile.webp";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:px-15 py-1 bg-surface shadow sticky top-0 z-30">
      <div className="container">
        <div className="wrapper max-w-350 m-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center rounded-full w-12 h-12">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-primary text-sm font-medium">Jeremy Viterbo</p>
            </div>

            <nav
              className={`items-center justify-center absolute left-0 top-16 z-50 w-screen bg-surface shadow overflow-hidden transition-all duration-500 md:static md:w-auto md:overflow-visible md:shadow-none ${isOpen ? "max-h-96" : "max-h-0"} md:max-h-none`}
              aria-label="Primary"
            >
              <ul className="mt-5 pb-5 flex flex-col items-center justify-center gap-5 md:mt-0 md:flex-row md:pb-0">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => {
                        const activeClass = isActive ? "text-primary" : "";
                        return `group relative transition-colors text-sm font-medium duration-500 hover:text-primary ${activeClass}`;
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${isActive ? "w-full" : "w-0"}`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* generate burger menu */}
            <button
              className="flex flex-col space-y-1 p-2 md:hidden cursor-pointer transition-colors duration-500 hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-black/30 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 top-16" : "opacity-0 top-full"}`}
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
}

export default Header;
