import React from 'react'
import {Link} from 'react-router-dom';
import './stylesheets/Header.css'


const Header = () => {

    const close = () => {
        const div = document.querySelector(".Header");
        div.classList.toggle("hidden");
    }
    return (
        <div className="outer">
            <div className="Header hidden">
                <Link to="/" >Home Page</Link>
                <Link to="skills">My Skills</Link>
                <Link to="projects">Projects</Link>
                <Link to="contact">Contact Me</Link>
                
                

            </div>
            <div className="close1" onClick={close}><a href="#" className="close" /></div>
            
        </div>
    )
}

export default Header
