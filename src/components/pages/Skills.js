import React from 'react'
import '../stylesheets/Skills.css'
import {skills} from './SkillsList'

const Skills = () => {
    
    const skillMap = skills.map((skill, key) => {
        return (
            <div className="language" key={key} >
                <div className="language-left">
                    <img alt={skill.p} src={skill.img} />
                </div>
                <div className="language-right">
                    <p>{skill.p}</p>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>My Skills</h1>
            <div className="language-wrapper">
                {skillMap}
            </div>
        </div>
    )
}

export default Skills
