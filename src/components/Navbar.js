import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../Resources/logo.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to= '/' >
                <img src={Logo} alt='logo' className='logo' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
                        Work History
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/education' className='nav-links' onClick={closeMobileMenu}>
                        Education
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default Navbar
