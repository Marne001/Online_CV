import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='about-grid'>
                    <Cell col={12}>
                        <img
                            src="/display-p.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="aboutbanner-text">
                            <h1>About Me:</h1>

                        <hr/>    

                        <p>Hi  I Am Marné van Zyl, I'm Currently an IT-Student Studying At NWU Potchefstroom Campus. Ever Since I was small, I had a big liking
                            in computers and technology. My dream is to make a difference in the world by using technology and slowly but steadely I am working on that dream.

                            <a href="/CV.txt" download>
                            Download CV:    
                            </a>
                        </p>

                        <p3>
                            
                        </p3>
                       
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;