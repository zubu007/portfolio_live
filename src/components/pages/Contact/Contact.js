import React from 'react'
import Footer from '../../Footer'
import './Contact.css'

function Contact() {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };

    return (
        <> 
            <div className='main-container-contacts'>
                
                <div className="contact-container">
                    <h1>Contact</h1>
                    <div className="contact-p">
                    <p>Email: jubayerhossainahad@gmail.com</p>
                    <p>Mobile: +8801686378684</p>
                    <p>LinkedIn: https://www.linkedin.com/in/jubayerhossain-8a5836190/</p>
                    <p>Github: https://github.com/zubu007</p>
                    </div>
                </div>
                
                
            </div>
            <Footer /> 
        </>
    )
}

export default Contact
