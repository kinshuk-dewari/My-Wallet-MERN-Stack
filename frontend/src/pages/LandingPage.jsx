import React from 'react'
import { Link } from 'react-router-dom';

import NavbarLanding from '../components/NavbarLanding'
import { ButtonGreen } from '../components/ButtonGreen'
import { ButtonGreenInverse } from '../components/ButtonGreenInverse'
import Footer from '../components/Footer';
import HeroDesc5 from '../components/HeroDesc5';
import HeroSection from '../components/HeroSection';
import HeroImage from '../components/HeroImage';
import Features from '../components/Features';
import HeroDesc4 from '../components/HeroDesc4';
import HeroSection2 from '../components/HeroSection2';
import CurrencyScrollBanner from '../components/CurrencyScrollBanner';
import HeroDesc from '../components/HeroDesc';
import CardsCarousel from '../components/CardsCarousel';
import HeroDesc2 from '../components/HeroDesc2';
import HeroDesc3 from '../components/HeroDesc3';

import {
  IconLock,
  IconLockCheck,
  IconDeviceMobileMessage,
  IconBuildingSkyscraper,
  IconKey,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin
} from '@tabler/icons-react';
import { HiArrowRight } from "react-icons/hi2";

import {motion} from 'framer-motion'; 


const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#fffffa] dark:bg-[#0a0a0a] items-center relative pt-6 overflow-y-auto">
      
      <NavbarLanding />

      <HeroSection />  
      <HeroImage />

      <HeroDesc />
      <HeroDesc2 /> 

      <HeroSection2 />   
      <CurrencyScrollBanner/>
      <Features />

      <HeroDesc3 />
      <CardsCarousel />

      <HeroDesc4 />
      <HeroDesc5 />

      <Footer />

    </div>
  )
}

export default LandingPage