import React from 'react'
import '../stylesheets/Skills.css'

const Skills = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>My Skills</h1>
            <div className="language-wrapper">
                <div className="language">
                    <div className="language-left">
                        <img alt="html" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" />
                    </div>
                    <div className="language-right">
                        <p>HTML</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="css" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" />
                    </div>
                    <div className="language-right">
                        <p>CSS</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="javascript" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    </div>
                    <div className="language-right">
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="reactjs" src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/01/React.js_logo-512.png" />
                    </div>
                    <div className="language-right">
                        <p>React.js</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="nodejs" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                    </div>
                    <div className="language-right">
                        <p>Node.js</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="expressjs" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png" />
                    </div>
                    <div className="language-right">
                        <p>Express.js</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="java" src="https://classes.engineering.wustl.edu/cse231/core/images/2/26/Java.png" />
                    </div>
                    <div className="language-right">
                        <p>Java</p>
                    </div>
                </div>

                <div className="language">
                    <div className="language-left">
                        <img alt="python" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png" />
                    </div>
                    <div className="language-right">
                        <p>Python</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
