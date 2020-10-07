import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';



class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src="/display-p.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Marné van Zyl</h1>

                        <hr/>    

                        <p>Hi Welcome To My Portfolio</p>

                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="https://www.linkedin.com/in/marn%C3%A9-van-zyl-893b731b7/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* GitHub*/}
                            <a href="https://github.com/Marne001" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* Instagram*/}
                            <a href="https://www.instagram.com/marne000/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* Facebook*/}
                            <a href="https://www.facebook.com/profile.php?id=100008191291650&sk=friends" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook fa-lg"  aria-hidden="true"/>
                            </a>

                            {/* Twitter*/}
                            <a href="https://twitter.com/vanzyl_marne" rel="noopener noreferrer" target="_blank">
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