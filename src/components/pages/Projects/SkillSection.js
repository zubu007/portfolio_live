import React from 'react'
import ProgressBar from './ProgressBar'
import Skills from './Skills'

function SkillSection() {
    return (
        <div className="skill-section">
            <h1>Skills</h1>
            <Skills title= "Web Dev" completed = {60} />
            <Skills title= "Machine Learning" completed = {90} />
            <Skills title= "App development"  completed = {40}/>
            
        </div>
    )
}

export default SkillSection
