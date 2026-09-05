import React from 'react'
import {motion} from 'framer-motion'; 
import { IconBrandX, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const Footer=()=>{
    const regions = [
      {
        imgSrc: "eu-flag.webp",
        alt: "EU",
        title: "Europe",
        description: "something again to, something some",
      },
      {
        imgSrc: "india-flag.webp",
        alt: "India",
        title: "India",
        description: "Empowering innovation and tradition",
      },
      {
        imgSrc: "usa-flag.webp",
        alt: "USA",
        title: "USA",
        description: "Driving technology and progress",
      },
      {
        imgSrc: "eu-flag.webp",
        alt: "EU",
        title: "Europe",
        description: "Uniting cultures and economies",
      },
      {
        imgSrc: "india-flag.webp",
        alt: "India",
        title: "India",
        description: "Rich heritage, bright future",
      },
    ];


    const fullstack = [      
      {
        href: "https://github.com/kinshuk-dewari/My-Wallet-MERN-Stack",
        label: "My wallet",
      },
      {
        href: "https://sai-agro.org/",
        label: "Sai-agro",
      },
      {
        href: "https://github.com/kinshuk-dewari/PRESENCE",
        label: "Presence",
      },
      {
        href: "https://github.com/kinshuk-dewari/Bookify",
        label: "Bookify",
      },
    ];

  const frontend = [
    {
      href: "https://kinshuk-dewari.netlify.app/",
      label: "Portfolio website",
    }
  ];

  const others = [
    {
      href: "https://github.com/kinshuk-dewari/Maze",
      label: "Maze",
    },
    {
      href: "https://github.com/kinshuk-dewari/Auto-Clicker",
      label: "Auto-Clicker",
    },
    {
      href: "https://github.com/kinshuk-dewari/Space_Invader",
      label: "Space Invader",
    },
    {
      href: "https://github.com/kinshuk-dewari/GHUUNJ-Sign-Language-Detection-ML-Project",
      label: "Ghuunj",
    },
  ];


  return (
    <div className='w-full bg-neutral-100'>
      <div className='max-w-6xl mx-auto py-24'>
        <h1 className='font-bold text-6xl text-[#0a0a0a]'>Wise works nearly everywhere</h1>

        <div className='grid grid-cols-5 pt-24'>
          {regions.map((region, idx) => (
            <div key={idx} className='space-y-2'>
              <img
                src={region.imgSrc}
                alt={region.alt}
                className="w-14 h-14 rounded-full object-cover"
              />
              <h3 className='text-neutral-700 text-2xl font-bold'>
                {region.title}
              </h3>
              <p className='text-neutral-500 font-medium text-lg text-pretty'>
                {region.description}
              </p>
            </div>
          ))}
        </div>

        <div className='border-b-1 border-neutral-300 pt-24'></div>

        <h1 className='text-base text-neutral-600 font-bold text-center py-4'>more project from me</h1>
        <div className='grid grid-cols-4'>

          <div className='flex flex-col'>
            <h3 className='font-bold text-base text-neutral-700 pb-4'>Full-Stack</h3>
            {fullstack.map((link) => (
              <motion.a
                key={link.href}
                initial={{ y: 0 }}
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base underline text-neutral-500 hover:text-neutral-700 hover:cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
         </div>

          <div className='flex flex-col'>
            <h3 className='font-bold text-base text-neutral-700 pb-4'>Frontend</h3>
            {frontend.map((link) => (
              <motion.a
                key={link.href}
                initial={{ y: 0 }}
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base underline text-neutral-500 hover:text-neutral-700 hover:cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className='flex flex-col'>
            <h3 className='font-bold text-base text-neutral-700 pb-4'>Others</h3>
            {others.map((link) => (
              <motion.a
                key={link.href}
                initial={{ y: 0 }}
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base underline text-neutral-500 hover:text-neutral-700 hover:cursor-pointer"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className='flex flex-col'>
            <div>
              <h3 className='font-bold text-base text-neutral-700 pb-4'>Socials</h3>
            </div>
            <div className='flex items-start justify-start gap-4'>
              <motion.a
                initial={{ y: 0 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                href="https://x.com/Kinshuk_Dewari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-700"
              >
                <IconBrandX className="h-8 w-8" />
              </motion.a>

              <motion.a
                initial={{ y: 0 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                href="https://linkedin.com/in/kinshuk-dewari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-700"
              >
                <IconBrandLinkedin className="h-8 w-8" />
              </motion.a>

              <motion.a
                initial={{ y: 0 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                href="https://github.com/kinshuk-dewari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-700"
              >
                <IconBrandGithub className="h-8 w-8" />
              </motion.a>
            </div>
          </div>
          
          


        </div>
      </div>
    </div>
  )
}
export default Footer;
