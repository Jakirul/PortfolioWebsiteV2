import React from 'react'
import '../stylesheets/Contact.css'
const Contact = () => {
    return (
        <div>
            <h1>If you like what you see, you can contact me here:</h1>
            <hr />
            <div className="contact-wrapper">

                <div className="contact">
                    <div className="contact-left" >
                        <img alt="email" onClick={() => window.open('mailto:jakirul.islam@live.co.uk','_blank')} src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png" />
                    </div>
                    <div className="contact-right">
                        <h3 onClick={() => window.open('mailto:jakirul.islam@live.co.uk','_blank')}>Email me: jakirul.islam@live.co.uk</h3>
                    </div>
                </div>

                <div className="contact">
                    <div className="contact-left">
                        <img alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/jakirul/','_blank')} src="https://image.flaticon.com/icons/png/512/174/174857.png" />
                    </div>
                    <div className="contact-right">
                        <h3 onClick={() => window.open('https://www.linkedin.com/in/jakirul/','_blank')}>Message me on LinkedIn: https://www.linkedin.com/in/jakirul/</h3>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-left">
                        <img alt="github" onClick={() => window.open('https://github.com/Jakirul','_blank')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" />
                    </div>
                    <div className="contact-right">
                        <h3 onClick={() => window.open('https://github.com/Jakirul','_blank')}>View my GitHub: https://github.com/Jakirul/</h3>
                    </div>
                </div>

                <div className="contact">
                    <div className="contact-left">
                        <img alt="cv" onClick={() => window.open('Jakirul_Islam_CV.pdf')} src="https://cdn.pixabay.com/photo/2017/05/09/00/15/resume-2296951_1280.png" />
                    </div>
                    <div className="contact-right">
                        <h3 onClick={() => window.open('Jakirul_Islam_CV.pdf')}>View my Resume</h3>
                    </div>
                </div>

                

                
            </div>

        </div>
    )
}

export default Contact
