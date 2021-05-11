import React from 'react';
import './Landing.css';

import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Icon } from 'semantic-ui-react'

import NavBar from '../../Components/navbar/index'
import LoginSignup from '../LoginSignup/index'

import friends from '../../images/friend_group.jpeg'
import newyork from '../../images/newyork.jpeg'
import twopeople from '../../images/twopeople.jpeg'
import hands from '../../images/hands.jpeg'
import display from '../../images/display.jpeg'
import yoga from '../../images/yoga.jpeg'
import yellow from '../../images/yellow.jpeg'
import nathans from '../../images/nathans.jpeg'
import volunteer1 from '../../images/volunteer1.jpeg'
import wine from '../../images/wine.jpeg'
import friendGroup from '../../images/threepeople.jpeg'

class LandingPage extends React.Component
{
    constructor()
    {
        super();
        this.state={};
    }

    render(){
        return(
            <>
                <div>
                    <div id="top">
                        <Fade><p className ="landing_seeker">Seeker</p></Fade>
                        <Link to="/aboutus">
                        <p style={{position:"absolute", marginLeft:"100px",fontSize:"13px", marginTop:"6px", fontWeight:"500"}}>about</p></Link>
                        <div id="buttons">
                            {/* <div> */}
                                <Link to={{
                                    pathname:'/loginsignup',
                                    state:{
                                        fromLogin: true
                                    }
                                }}>
                                    <button id ="login_button">Login</button>
                                </Link>
                            {/* </div> */}
                            {/* <div> */}
                                <Link to={{
                                    pathname:'/loginsignup',
                                    state:{
                                        fromLogin: false
                                    }
                                }}>
                                    <button id ="sign_up">Sign Up</button>
                                </Link>
                            {/* </div> */}
                        </div>
                    </div>
                    <div id="landing_page_top" style={{width:"100vw", height:"106vh"}}>
                        <div id="quote_subquote">
                            <Fade>
                                <h1 id="landing_quote">Everything's better with friends</h1>
                                <h3 id="dare">Seeker was created to improve (dare we say, maybe even resurrect) your social life.</h3>
                            </Fade>
                        </div>
                        
                        <div className="circles" id="first_circle" />
                        <div className="circles" id="second_circle" />
                        <div className="circles" id="third_circle" />
                        <div className="circles" id="fourth_circle" />
                        <div className="circles" id="fifth_circle" />
                        <div className="circles" id="sixth_circle" />
                        <div className="circles" id="seventh_circle" />

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_1" src={newyork} />
                        </div>
                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_2" src={yoga} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_3" src={friends} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_4" src={hands} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_5" src={display} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_6" src={friendGroup} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_7" src={wine} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_8" src={twopeople} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_9" src={volunteer1} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_10" src={yellow} />
                        </div>

                        <div className="circle_img" >
                            <img className="images_in_circles" id="circle_img_11" src={nathans} />
                        </div>
                    </div>
                </div>
                <div style={{height:"max-content", zIndex:"5"}}>
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
                            <p className="desc">find an event you would like go to</p>
                        </div>
                        <div id="eeee">
                            <img id="second_img" src={twopeople} />
                            <p className="desc">see who else is attending</p>
                        </div>
                        <div id="eeee">
                            <img id="third_img" src={display} />
                            <p className="desc">send them a request</p>
                        </div>
                        <div id="eeee">
                            <img id="third_img" src={display} />
                            <p className="desc">et voila!</p>
                        </div>
                        {/* <div id="eeee">
                            <img id="fourth_img" src={hands} />
                            <p className="desc">here is some text</p>
                        </div> */}
                    </div>
                    </Fade>
                </div>
                <div style={{backgroundColor:"#F5F5F5", zIndex:"10"}} id="footer">
                    <p id="stmt">Get started with Seeker today <Bounce><Icon name='paper plane outline'/></Bounce></p>
                </div>
                </div>
            </>
        )
    }
}

export default LandingPage