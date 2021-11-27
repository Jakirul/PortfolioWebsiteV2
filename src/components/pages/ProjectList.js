import React from 'react'
import '../stylesheets/Projects.css'

const ProjectList = () => {
    return (
        <div>
            
            <div className="wrapper">
                <div className="left">
                    <img src="images/ecommerce.png" alt="freemarket" />
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
                    <img src="images/jokes2.PNG" alt="jokes" />
                </div>
                <div className="right">
                    <h1>Anonymous Joke Posting App</h1>
                    <h4>I worked with 3 other people to create an anonymous joke posting website. This uses HTML, CSS, JavaScript with Node/Express as well as Jest testing</h4>
                    <div className="buttons-inline">
                        <button ><a href="https://github.com/Jakirul/journaling-website" target="_blank" rel="noreferrer">Link to GitHub</a></button>
                        <button><a href="https://lap1-jokes.netlify.app/" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src="images/books.png" alt="books app" />
                </div>
                <div className="right">
                    <h1>Books App</h1>
                    <h4>This is a CRUD web application for users to list their favourite books, write about it and allow others to comment on it to give their thoughts on the book. <br />Written using HTML (EJS) / SCSS (CSS) / JavaScript / Node.js / Express.js / MongoDB. Hosted using Mongo Atlas</h4>
                    <div className="buttons-inline">
                        <button ><a href="https://github.com/Jakirul/Books-App" target="_blank" rel="noreferrer">Link to GitHub</a></button>
                        <button><a href="https://vast-forest-30320.herokuapp.com/books" target="_blank" rel="noreferrer">Link to Live Website</a></button>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <img src="images/jokes.png" alt="random jokes" />
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
                    <img src="images/portfolio1.jpg" alt="portfolio website v1" />
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
                    <img src="images/movie.jpg" alt="imdb movie finder" />
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
                    <img src="images/weather.jpg" alt="weather app" />
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
