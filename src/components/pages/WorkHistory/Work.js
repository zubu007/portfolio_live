import React from 'react'
import Footer from '../../Footer'
import Points from '../../Points'
import './Work.css'

function Work() {
    return (
        <> 
        <div className='main-container-work'>
            <div className="points-container-work">
                <Points title="Researcher" 
                        company= "North South University"
                        time = "12 jan to present"
                        para = "Research on a Deep Learning Model to detect Violence from video clips." />
                <Points title="Freelance Developer" 
                        company= "Upwork"
                        time = "Mar 2019 - Apr 2019"
                        para = "developed www.jahangirartist.com from scratch. I used Wordpress and elementor to design the front-end. Implemented WooCommerce as back-end for the ecommerce." />
                <Points title="IELTS Instructor" 
                        company= "Mentor's Banani"
                        time = "Jan 2018 - Dec 2018"
                        para = "IELTS Englist instructor. Speaking Test conductor. Model Question paper Examiner." />
                <Points title="Home Tutor" 
                        company= "All over"
                        time = "2013-2018"
                        para = "Taught a lot of subject being a tutor by going to student's house and even in coaching centers." />

            </div>
        </div>
        <Footer />
        </>
    )
}

export default Work
