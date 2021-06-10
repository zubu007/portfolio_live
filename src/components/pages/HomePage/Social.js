import React from 'react'
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

function Social() {
    return (
        <div className="social">
            <a href="https://twitter.com/Zubayer64629386">
                <FaTwitter className='icon'/>
            </a>
            <a href="https://twitter.com/Zubayer64629386">
                <FaLinkedin className='icon'/>
            </a>
            <a href="https://twitter.com/Zubayer64629386">
                <FaGithub className='icon'/>
            </a>
        </div>
    )
}

export default Social
