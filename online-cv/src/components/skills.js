import React, { Component } from 'react';

class Skills extends Component {
    
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
                                <img src="/python.png" alt="python"/>
                            </div>
                            <h3>PYTHON</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src="/c-sharp.png" alt="c-sharp"/>
                            </div>
                            <h3>C#</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src="/computer.png" alt="c plus plus"/>
                            </div>
                            <h3>C++</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src="/html.png" alt="html5"/>
                            </div>
                            <h3>HTML5</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src="/css.png" alt="css"/>
                            </div>
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="img">
                                <img src="/javascript.png" alt="js"/>
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