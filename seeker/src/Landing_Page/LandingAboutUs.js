import React from 'react';
import ReactDOM from 'react-dom';
import './LandingTop.css';
import new_york from '../images/newyork.jpeg'

export default function LandingAbout()
{

    return(
        <>
            <div className="about_us">
                <h2>About Us</h2>
                <p>As busy Americans it can be challenging to coordinate schedules and plan and schedule trips and activities with friends and families. This can be particularly irritating if there's an event you really really really want to attend, but can't find anyone to go with... <em>*cue the sad music*</em></p>
                <h3>But stress no more and say good bye to doing things alone!</h3>
                {/* <p>Seeker allows users to match with other users for the sole purpose of finding a friend to enjoy an activity with.</p> */}
            </div>
        </>
    )
}