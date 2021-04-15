import React from 'react';
import ReactDOM from 'react-dom';
import './LandingTop.css';
import new_york from '../images/newyork.jpeg'

export default function LandingPage()
{
    return(
        <>
            <div>
                <p className ="landing_seeker" id="seeker_landing">Seeker</p>
                <button id ="login_button">Login</button>
                <button id ="sign_up">Sign Up</button>
                <div id="quote_subquote">
                    <h1 id="landing_quote">Everything's better with friends</h1>
                    <h3 id="dare">Seeker was created to improve (dare we say, maybe even resurrect) your social life.</h3>
                </div>
                <img id="new_york" src={new_york}/>
            </div>
        </>
    )
}