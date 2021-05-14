import React from 'react'
import NavBar from '../../Components/navbar/index'
import './about.css'
import Fade from 'react-reveal/Fade';
import amy from './amy.jpg'
import jona from './jona.jpg'
import ramiz from './ramiz.jpg'

export default function AboutTeam() {
    return(
        <>
         <NavBar />
            <div style={{position:"absolute",marginTop:"75px"}}>
                {/* <NavBar /> */}
                <div id="about_page">
                    <div id="about_seeker_section">
                    <Fade>
                        <h2 id="about_seeker_title">About Seeker</h2>
                        <p>As busy Americans it can be challenging to coordinate schedules and plan and schedule trips and activities with friends and families. This can be particularly irritating if there's an event you really really really want to attend, but can't find anyone to go with... <em>*cue the sad music*</em> <br /> <br /> 
                        Seeker allows users to match with other users for the sole purpose of finding a friend to enjoy an activity with. Now instead of staying in on your day off because none of your friends are free to hang out, you can use seeker to meet new people who can accommodate to your schedule.</p>
                    </Fade>
                    </div>
                    <div id="meet_team">
                        <h1 id="meet_title">Meet the Team!</h1>
                        <Fade left cascade>
                        <div id="people_divs">
                            <div className="person">
                                <img className="person_img" src={jona} />
                                <h1 className="person_name"><a href="https://www.linkedin.com/in/jona-chen1998/">Jona Chen</a></h1>
                                <p className="person_school">Hunter College</p>
                                <p className="person_cheese"><strong>Favorite Cheese:</strong> ''doesnt eat cheese like that''  <br /> -_-</p>
                            </div>
                            <div className="person">
                                <img className="person_img" src={ramiz} />
                                <h1 className="person_name"><a href="https://www.linkedin.com/in/ramizfaragalla/">Ramiz Faragalla</a></h1>
                                <p className="person_school">College of Staten Island</p>
                                <p className="person_cheese"><strong>Favorite Cheese:</strong>  Swiss</p>
                            </div>
                            <div className="person">
                                <img className="person_img" src={amy} />
                                <h1 className="person_name"><a href="https://www.linkedin.com/amyghotra"> Amy Ghotra</a></h1>
                                <p className="person_school">Hunter College</p>
                                <p className="person_cheese"><strong>Favorite Cheese:</strong> Pepper Jack</p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}