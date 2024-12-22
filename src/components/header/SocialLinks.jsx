import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialIcon from './SocialIcon';

const SocialLinks = () => {
  const socialLinks = [
    { href: "https://github.com", icon: <FaGithub /> },
    { href: "https://linkedin.com", icon: <FaLinkedin /> },
    { href: "https://twitter.com", icon: <FaTwitter /> }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <SocialIcon key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
};

export default SocialLinks;