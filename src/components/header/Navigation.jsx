import React from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

const Navigation = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {links.map(link => (
        <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
      ))}
    </nav>
  );
};

export default Navigation;