import React from 'react'
import Project from './Project'
import project1Image from '../../../Resources/face_detection.JPG'
import project2Image from '../../../Resources/Assignment01.png'
import project3Image from '../../../Resources/ScreenShot.JPG'
import project4Image from '../../../Resources/Tinder_Clone.JPG'


function ProjectSection() {
    return (
        <div className="project-section">
            <h1>Projects</h1>
            <div className="project-div">
            <Project image = {project1Image} desc = "paosdj" link = "https://github.com/zubu007"/>
            <Project image = {project2Image} desc = "asda" link = "https://github.com/zubu007"/>
            <Project image = {project3Image} desc = "paosdj" link = "https://github.com/zubu007"/>
            <Project image = {project4Image} desc = "paosdj" link = "https://github.com/zubu007"/>
            </div>
        </div>
    )
}

export default ProjectSection
