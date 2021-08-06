import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Skills from './pages/Skills'
import Header from './Header';
import Contact from './pages/Contact'

const App = () => {
    return (
        <div style={{paddingTop: '30px'}}>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/contact" exact component={Contact} />
            </BrowserRouter>
           
        </div>
    )
}

export default App;