import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProjectList from './ProjectList';
import '../stylesheets/Projects1.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const fetchGithub = async() => {
        const response = await axios.get('https://api.github.com/users/jakirul/repos');
        setProjects(response.data)
    }

    useEffect(() => {
        fetchGithub()
    }, [])
    
    if (projects.length <= 0) {
        return null;
    }

    const map = projects.map((project, key) => {
        return (
            <div className="inner-project" key={key}>
                <li >{project.name}</li>
                <a href={project.html_url} target="_blank" rel="noreferrer">GitHub URL</a>
                <p>Language: {project.language}</p>
            </div>
        )
    })

    const hiddenList = () => {
        const div = document.querySelector(".github-list");
        div.classList.toggle("hidden");
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Projects</h1>
            <hr />
            <h2 style={{textAlign: 'center'}}>Key Projects:</h2>
            <ProjectList />
        
        
            <div className="listofprojects buttons-inline">
                <button onClick={hiddenList} >View Projects in a List &#9660;</button>
            </div>
            <div style={{marginTop: '50px'}} className="github-list hidden">
                {map}
            </div>
        </div>
    )
}

export default Projects
