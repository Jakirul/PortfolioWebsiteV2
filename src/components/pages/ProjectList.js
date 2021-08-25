import React from 'react'
import '../stylesheets/Projects.css'

const ProjectList = () => {
    return (
        <div>
            
            <div className="wrapper">
                <div className="left">
                    <img src="https://i.gyazo.com/1b6d1fad760ed9bda24caad48be883d0.png" alt="freemarket" />
                </div>
                <div className="right">
                    <h1>FreeMarket Project</h1>
                    <h4>I made a full stack ecommerce website using Node.js / Express.js and MongoDB as well as EJS for embedded JavaScript</h4>
                    <div className="buttons-inline">
                        <button><a href="https://boiling-scrubland-77204.herokuapp.com/" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src="https://camo.githubusercontent.com/7a9386df536ef853de0c4d7e5fc45411d6a142d43d2b443046784a90bf4c9438/68747470733a2f2f692e6779617a6f2e636f6d2f63303737303533303330383236393165653337663761396139313665633434362e706e67" alt="random jokes" />
                </div>
                <div className="right">
                    <h1>Joke Generator - React JS</h1>
                    <h4>This uses the Official Joke API to retrieve Jokes using React.js with Hooks</h4>
                    <div className="buttons-inline">
                        <button><a href="https://github.com/Jakirul/RandomJokesReact" target="_blank" rel="noreferrer">Link to GitHub</a></button>
                        <button><a href="https://blissful-joliot-b8b0d7.netlify.app/" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src="https://i.gyazo.com/66b3c10734ae070e773ceea83ef67949.jpg" alt="portfolio website v1" />
                </div>
                <div className="right">
                    <h1>Portfolio Website V1</h1>
                    <h4>This was my V1 of my Portfolio Website. For my new version, I decided to make it look simpler and neater</h4>
                    <div className="buttons-inline">
                        <button><a href="https://github.com/Jakirul/PortfolioWebsite" target="_blank" rel="noreferrer">Link to GitHub</a></button>
                        <button><a href="https://sharp-mahavira-937e86.netlify.app/" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                    
                </div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src="https://camo.githubusercontent.com/7b4e6814ae15d621a421876858214c8faa323cfe1e5479822aff68e03ca95433/68747470733a2f2f692e6779617a6f2e636f6d2f66366437323064613034663233393837656134316234303462346265356338392e6a7067" alt="imdb movie finder" />
                </div>
                <div className="right">
                    <h1>IMDB Movie Finder</h1>
                    <h4>This uses the OMDb API to retreive IMDB Movie/Show listings. I used Node/Express, Axios, EJS and Bootstrap</h4>
                    <div className="buttons-inline">
                        <button ><a href="https://github.com/Jakirul/IMDBMovieFinder" target="_blank" rel="noreferrer">Link to GitHub</a></button>
                        <button><a href="https://imdb-movie-finder-jakirul.herokuapp.com/" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src="https://camo.githubusercontent.com/bf7c092bb6b4527bc6460fa4c9a3f303f7f39263e9366b8de760474f31a41d19/68747470733a2f2f692e6779617a6f2e636f6d2f65623139636633343436646238383865326131656338613233373231326230652e6a7067" alt="weather app" />
                </div>
                <div className="right">
                    <h1>Weather App</h1>
                    <h4>This is a Weather App using Vanilla JavaScript and the OpenWeatherMap API</h4>
                    <div className="buttons-inline">
                        <button ><a href="https://github.com/Jakirul/JSWeatherApp" target="_blank" rel="noreferrer">Link to GitHub</a></button>
                        <button><a href="https://vibrant-fermat-2fbc5f.netlify.app/" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                </div>
            </div>

            <hr />
            
                <h2 style={{textAlign: 'center'}}>View the rest of my projects...</h2>
            
            <div className="github-wrapper">
                <div className="github-left">
                    <a href="https://github.com/Jakirul" target="_blank" rel="noreferrer"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="github icon" /></a>
                </div>
                <div className="github-right">
                    <h4><a href="https://github.com/Jakirul" target="_blank" rel="noreferrer">https://github.com/Jakirul</a></h4>
                </div>
            </div>
           


        </div>
    )
}

export default ProjectList
