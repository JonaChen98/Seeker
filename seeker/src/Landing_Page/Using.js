import React from 'react';
import ReactDOM from 'react-dom';
import './LandingTop.css';

import newyork from '../images/newyork.jpeg'
import twopeople from '../images/twopeople.jpeg'
import hands from '../images/hands.jpeg'
import display from '../images/display.jpeg'

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Using()
{
    return(
        <>
            <div className="using">
            <h2>Using Seeker</h2>
                <Fade left cascade>
                <div id="four_imgs">
                    <div id="eeee"><img id="first_img" src={newyork} /></div>
                    <div id="eeee"><img id="second_img" src={twopeople} /></div>
                    <div id="eeee"><img id="third_img" src={display} /></div>
                    <div id="eeee"><img id="fourth_img" src={hands} /></div>
                </div>
                </Fade>
            </div>
        </>
    )
}