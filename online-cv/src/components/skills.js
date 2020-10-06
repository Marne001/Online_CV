import React, { Component } from 'react';
import py from '../images/python.png'
import csharp from '../images/c-sharp.png'
import computer from '../images/computer.png'
import js from '../images/javascript.png'
import css from '../images/css.png'
import html from '../images/html.png'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    render() {
        return (
            <div className="inner">
                <div className="skills-header">
                    <h1>My Skills</h1>
                </div>
                <div className="skills-container">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src={py} className="skill-icon" />
                            </div>
                            <h3>PYTHON</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src={csharp} className="skill-icon" />
                            </div>
                            <h3>C#</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src={computer} className="skill-icon" />
                            </div>
                            <h3>C++</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src={html} className="skill-icon" />
                            </div>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src={css} className="skill-icon" />
                            </div>
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                 <img src={js} className="skill-icon" />
                            </div>
                            <h3>Java Script</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;