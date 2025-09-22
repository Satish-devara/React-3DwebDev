import { FaInstagram, FaLinkedin, FaGithub,FaYoutube } from "react-icons/fa"; 
import React from 'react'

const Footer = () => {
  const links = [
    { href: 'https://www.instagram.com/satish_.2002._/', icon: <FaInstagram /> },
    { href: 'https://www.linkedin.com/in/saisatishd/', icon: <FaLinkedin /> },
    { href: 'https://github.com/Satish-devara', icon: <FaGithub /> },
    {href:'https://youtu.be/zA9r5zTllx4?si=DgYC1LzvB-_vtvrp', icon:<FaYoutube /> }
  ];

  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <div>

       
        <p className='text-center text-sm md:text-left'>
          &copy; Nova 2024, All rights reserved
        </p>
        <div className='flex justify-center gap-4 md:justify-start'>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a 
          href="#privacy-policy" 
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
         </div>
        <div className="flex text-smxt-center justify-center text">
            This is copied website <br />which was created by taking refernce<br /> from javamastery channel 
            and the website belongs to Zentry 
        </div>
      </div>
    </footer>
  )
}

export default Footer
