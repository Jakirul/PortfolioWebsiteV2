import React from 'react'
import '../stylesheets/Home.css'
const Home = () => {

    const openFile = () => {
        window.open('Jakirul_Islam_CV.pdf');
    }

    const openEmail = () => {
        window.open('mailto:jakirul.islam@live.co.uk','_blank')
    }

    return (
        <div className="Home">
            <h3 style={{margin: '10px'}}>My name is.... </h3>
            <h1 style={{margin: '0'}}>Jakirul Islam</h1>
            <h4>A Recent Computer Science Graduate from City, University of London.</h4>
            <div className="buttons-inline">
                <button onClick={openFile}>Resume</button>
                <button onClick={openEmail}>Contact Me</button>
            </div>
        </div>
    )
}

export default Home
