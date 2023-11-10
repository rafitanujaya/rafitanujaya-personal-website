import React from 'react'
import IntroductionLayout from '../layouts/Introduction'
import AboutMeLayout from '../layouts/AboutMe'
import ServiceLayout from '../layouts/Service'
import SkillLayout from '../layouts/Skill'
import ProjectLayout from '../layouts/Project'
import ExperienceLayout from '../layouts/Experience'
import ContactLayout from '../layouts/Contact'
import FooterLayout from '../layouts/Footer'

const HomeView = () => {
  return (
    <div className='overflow-hidden'>
      <IntroductionLayout/>
      <AboutMeLayout/>
      <ServiceLayout/>
      <SkillLayout/>
      <ProjectLayout/>
      <ExperienceLayout/>
      <ContactLayout/>
      <FooterLayout/>
    </div>
  )
}

export default HomeView
