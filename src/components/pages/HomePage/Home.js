import React from 'react'
import './Home.css'
import MainText from './MainText'
import Social from './Social'
import BackLogo from '../../../Resources/back1.png'

export default function Home() {
    document.addEventListener('mousemove', parallax);
    function parallax(e) {
        this.querySelectorAll('.back-logo').forEach(
            Layer => {
                let x = (window.innerWidth - e.pageX *5) / 100;
                let y = (window.innerHeight - e.pageY *5)/100;
                Layer.style.transform = `translate(${x}px, ${y}px)`;
            }
        )
        
    }

    return (
        <div className='main-container-home'>
            <MainText />
            <Social />
            <div className='back-logo-container'>
                
                <img src={BackLogo} className="back-logo"  />
                
            </div>
        </div>
    )
}
