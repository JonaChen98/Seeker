import React from 'react';
import ReactDOM from 'react-dom';
import './LandingTop.css';
import new_york from '../images/newyork.jpeg'

import pool from '../images/pool.jpeg'
import twopeople from '../images/twopeople.jpeg'
import hands from '../images/hands.jpeg'
import boats from '../images/boats.jpeg'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


export default function LandingAbout()
{

    return(
        
            <div className="about_us">
                <h2>About Us</h2>
                <p>As busy Americans it can be challenging to coordinate schedules and plan and schedule trips and activities with friends and families. This can be particularly irritating if there's an event you really really really want to attend, but can't find anyone to go with... <em>*cue the sad music*</em> <br /> <br /> 
                Seeker allows users to match with other users for the sole purpose of finding a friend to enjoy an activity with. Now instead of staying in on your day off because none of your friends are free to hang out, you can use seeker to meet new people who can accommodate to your schedule.</p>
                {/* <h3>But stress no more and say good bye to doing things alone!</h3> */}
            </div>
        
    )
}