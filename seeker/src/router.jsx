import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginSignup from './Pages/LoginSignup/index'
import UserProfile from './Pages/UserProfile/index'
import EventsAndMap from './Pages/EventsAndMapPage/index'
import LandingPage from './Pages/Landing/LandingPage'
import EditProfile from './Pages/UserProfile/EditProfile'
import AboutTeam from './Pages/AboutTeam/about'

export default function AppRouter() {
    return (
        //  <>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/events' component={EventsAndMap} />
                <Route exact path='/user_profile' component={UserProfile} />
                <Route exact path='/loginsignup' component={LoginSignup} />
                <Route exact path='/settings' component={EditProfile} />
                <Route exact path='/aboutus' component={AboutTeam} />
                <Redirect from="/" to="/landing" />
                {/* <Redirect to="/error404" /> */}
            </Switch>
        //  </>
    )
}