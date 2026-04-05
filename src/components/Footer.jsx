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
    <footer className="p-2 bg-black text-secondary-light">
      <div className="container flex flex-col lg:flex-row gap-5 items-center justify-between">
        {/* Left — Social Icons */}
        <div className="flex flex-row gap-2">
          {socialLinks.map(({ href, label, icon, external }) => (
            <a
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
        <p>123 Main Street, Calabarzon, Philippines</p>

        {/* Right — Name */}
        <p>Juan dela Cruz</p>
      </div>
    </footer>
  );
};

export default Footer;
