import React from 'react'
import './project.css'

function Project(props) {
    return (
        <div className='project'>
            <img src={props.image}/>
            <p>{props.desc}</p>
            <p>Github: {props.link}</p>
        </div>
    )
}

export default Project
