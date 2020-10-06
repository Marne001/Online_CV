import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Marné van Zyl</h1>

                        <hr/>    

                        <p>Hi Welcome To My Portfolio</p>

                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* GitHub*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* Instagram*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* Facebook*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* Twitter*/}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter fa-lg"  aria-hidden="true"/>
                            </a>


                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;