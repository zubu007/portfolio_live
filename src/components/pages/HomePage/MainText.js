import React from 'react'
import Typical from 'react-typical'

function MainText() {
    return (
        <div className="main-text">
            <h1>Zubayer Hossain</h1>
            <Typical 
                            className="type"
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Developer',
                                1000,
                                'Designer',
                                1000,
                                'Advisor',
                                1000,
                                'Fast-learner',
                                1000,
                                'Team-player',
                                1000
                            ]}
                        />
            
        </div>
    )
}

export default MainText
