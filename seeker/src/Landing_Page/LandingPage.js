import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import new_york from '../images/newyork.jpeg'

export default function LandingPage()
{
    return(
        <>
            <div className="page_top">
                <p className ="landing_top" id="seeker_landing">Seeker</p>
                <img className="landing_top" id="new_york" src={new_york}/>
            </div>
        </>
    )
}