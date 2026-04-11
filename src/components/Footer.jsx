import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com",
      label: "GitHub",
      icon: faGithub,
      external: true,
    },
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: faFacebook,
      external: true,
    },
    {
      href: "mailto:you@gmail.com",
      label: "Gmail",
      icon: faEnvelope,
      external: false,
    },
  ];

  return (
    <footer className="px-16 md:px-15 py-5 bg-black text-secondary-light">
      <div className="container">
        <div className="wrapper flex flex-col lg:flex-row gap-5 items-center justify-between text-sm">
          {/* Left — Social Icons */}
          <div className="flex flex-row gap-2">
            {socialLinks.map(({ href, label, icon, external }) => (
              <a
                className="duration-400 hover:text-primary hover:scale-115"
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} size="xl" />
              </a>
            ))}
          </div>

          {/* Center — Address */}
          <p>Nagcarlan, Laguna, Philippines</p>

          {/* Right — Name */}
          <p>Jeremy Viterbo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
