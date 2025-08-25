import React, { useEffect } from 'react'
import { AboutSection, CompanyIntro, ContactUs, MissionVision, Values } from '../../component'

const About = () => {
    useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  });
  return (
      <div className="">
 
      <AboutSection />
      <CompanyIntro/>
      <MissionVision/>
      <Values/>
      <ContactUs/>
    </div>
  )
}

export default About