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
import planepath from '../../images/planepath.jpeg'
import yoga from '../../images/yoga.jpeg'
import yellow from '../../images/yellow.jpeg'
import nathans from '../../images/nathans.jpeg'
import volunteer1 from '../../images/volunteer1.jpeg'
import wine from '../../images/wine.jpeg'
import friendGroup from '../../images/threepeople.jpeg'
import fest from '../../images/musicfest.jpeg'
import group from '../../images/group.jpeg'

import map from './map2.jpeg'

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
                <div style={{height:"115vh"}}>
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
                    <div id="landing_page_top" style={{width:"100vw", height:"100vh"}}>
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
                <div style={{backgroundColor: "#F5F5F5"}}  className="using">
                    <h2>About Seeker</h2>
                    <img id="plane" src={planepath}/>
                    <Fade>
                    <div style={{position:"absolute",display:"flex",flexFlow:"row",marginTop:"7vh"}}>
                        <div style={{height:"100vh", width:"50vw"}}>
                            <img id="using_first" src={map} />
                            <img id="using_third" src={fest} />
                        </div>
                        <div style={{marginTop:"5vh",marginLeft:"-5vw"}}>
                            <p style={{fontWeight:"300"}}>You've been inside for over 13 months, and now <br /> you're itching to get out, meet new people, <br /> do fun things</p>
                            <p style={{fontWeight:"300"}}>We're here to help you help with just that!</p>
                        </div>
                    </div>
                    <div style={{position:"relative",display:"flex",flexFlow:"row"}}>
                        <div style={{marginTop:"55vh",marginLeft:"15vw"}}>
                            <p style={{fontWeight:"300"}}>We're here to help you find events for you to attend...</p>
                        </div>
                    </div>

                    <div style={{position:"absolute",display:"flex",flexFlow:"row",marginTop:"90vh"}}>
                        <div style={{height:"50vh", width:"50vw"}}>
                            <img id="using_first" src={group} />
                        </div>
                        <div style={{marginTop:"13vh",marginLeft:"-2vw"}}>
                            <p style={{fontWeight:"300"}}>...and people for you to attend them with</p>
                        </div>
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