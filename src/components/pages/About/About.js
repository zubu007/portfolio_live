import React from 'react'
import Footer from '../../Footer'
import AboutPicture from '../../../Resources/about_picture.jpg'
import MainAboutText from './MainAboutText'
import './About.css'

function About() {
    return (
        <> 
            <div className='main-container-about'>
                <MainAboutText />
                <img src={AboutPicture} />
            </div>
            <Footer /> 
        </>
    )
}

export default About
