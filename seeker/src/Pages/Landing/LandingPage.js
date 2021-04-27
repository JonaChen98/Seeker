import React from 'react';
import './Landing.css';
import { Link } from "react-router-dom";

// import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import friends from '../../images/friend_group.jpeg'
import newyork from '../../images/newyork.jpeg'
import twopeople from '../../images/twopeople.jpeg'
import hands from '../../images/hands.jpeg'
import display from '../../images/display.jpeg'
import LoginSignup from '../LoginSignup/index'

class LandingPage extends React.Component
{
    constructor()
    {
        super();
        this.state={};
        // this.onClick = this.onClick.bind(this)
    }

    render(){
        return(
            <>
                <div>
                    <p className ="landing_seeker">Seeker</p>
                    <div id="buttons">
                        <Link to={{
                            pathname:'/loginsignup',
                            state:{
                                fromLogin: true
                            }
                        }}>
                            <button id ="login_button">Login</button>
                        </Link>
                        <Link to={{
                            pathname:'/loginsignup',
                            state:{
                                fromLogin: false
                            }
                        }}>
                            <button id ="sign_up">Sign Up</button>
                        </Link>
                    </div>
                    <div id="quote_subquote">
                        <h1 id="landing_quote">Everything's better with friends</h1>
                        <h3 id="dare">Seeker was created to improve (dare we say, maybe even resurrect) your social life.</h3>
                    </div>
                    <img id="new_york" src={friends}/>
                </div>
                <div style={{backgroundColor: "#F5F5F5"}} className="about_us">
                    <Fade>
                        <h2>About Us</h2>
                        <p>As busy Americans it can be challenging to coordinate schedules and plan and schedule trips and activities with friends and families. This can be particularly irritating if there's an event you really really really want to attend, but can't find anyone to go with... <em>*cue the sad music*</em> <br /> <br /> 
                        Seeker allows users to match with other users for the sole purpose of finding a friend to enjoy an activity with. Now instead of staying in on your day off because none of your friends are free to hang out, you can use seeker to meet new people who can accommodate to your schedule.</p>
                        {/* <h3>But stress no more and say good bye to doing things alone!</h3> */}
                    </Fade>
                </div>
                <div style={{backgroundColor: "#F5F5F5"}}  className="using">
                <h2>Using Seeker</h2>
                    <Fade left cascade>
                    <div id="four_imgs">
                        <div id="eeee">
                            <img id="first_img" src={newyork} />
                            <p className="desc">here is some text</p>
                        </div>
                        <div id="eeee">
                            <img id="second_img" src={twopeople} />
                            <p className="desc">here is some text</p>
                        </div>
                        <div id="eeee">
                            <img id="third_img" src={display} />
                            <p className="desc">here is some text</p>
                        </div>
                        <div id="eeee">
                            <img id="fourth_img" src={hands} />
                            <p className="desc">here is some text</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div id="footer">
                <p id="stmt">Get started with Seeker today <Bounce>;)</Bounce></p>
                </div>
            </>
        )
    }
}

export default LandingPage