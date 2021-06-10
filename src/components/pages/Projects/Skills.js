import React from 'react'
import ProgressBar from './ProgressBar'

function Skills(props) {
    return (
        <div className="skills">
            <p>{props.title}</p>
            <ProgressBar completed= {props.completed} />
        </div>
    )
}

export default Skills
