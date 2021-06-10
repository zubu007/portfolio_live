import React from 'react'
import Footer from '../../Footer'
import './Projects.css'
import ProjectSection from './ProjectSection'
import SkillSection from './SkillSection'

function Projects() {
    return (
        <> 
            <div className='main-container-projects'>
                
                <SkillSection />
                <ProjectSection />
            </div>
            <Footer /> 
        </>
    )
}

export default Projects
