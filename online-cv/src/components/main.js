import React from 'react';
import { Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Contact from './contact'
import Skills from './skills'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;