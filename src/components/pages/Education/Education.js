import React from 'react'
import './Education.css'
import Points from '../../Points'
import Footer from '../../Footer'
import NSUpicture from '../../../Resources/NSU.jpg'

function Education() {
    return (
        <> 
        <div className='main-container'>
            <div className="points-container">
                <Points title="Bsc. EEE" 
                        company= "North South University"
                        time = "Jan 2017 to present"
                        para = "Studying in NSU doing my bachelors in EEE and learning about web deve when I am free!!" />
                <Points title="O Levels & A Levels" 
                        company= "Islamic International School and College"
                        time = "2014-2016"
                        para = "Studied in this school since STD-3. Have all of my friends from there and did my O levels and A level under the school. " />
                

            </div>
            <img src={NSUpicture} />
        </div>
        <Footer />
        </>
    )
}

export default Education
