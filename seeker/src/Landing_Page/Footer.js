import React from 'react';
import {useTransition, animated} from 'react-spring'
import ReactDOM from 'react-dom';
import './LandingTop.css';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Footer()
{
    return (
        // <Bounce left>
            <div id="footer">
            <p id="stmt">Get started with Seeker today <Bounce>;)</Bounce></p>
            </div>
        // </Bounce>
    )
}
