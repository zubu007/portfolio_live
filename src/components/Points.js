import React from 'react'
import './Points.css'

function Points(props) {
    return (
        <div className="points">
            <h1>{props.title}</h1>
            <h3>{props.company}</h3>
            <h4>{props.time}</h4>
            <p>{props.para}</p>
        </div>
    )
}

export default Points
