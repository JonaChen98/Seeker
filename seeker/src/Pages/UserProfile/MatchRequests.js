import React from 'react'
import './matchrequests.css'
import people from '../../images/twopeople.jpeg'
import boats from '../../images/boats.jpeg'
import person1 from '../../images/person1.jpeg'
import person2 from '../../images/person2.jpeg'
import person3 from '../../images/person3.jpeg'
import person4 from '../../images/person4.jpeg'
import person5 from '../../images/person5.jpeg'
import person6 from '../../images/person6.jpeg'
import accept from '../../images/check.png'
import reject from '../../images/reject.png'

import Fade from 'react-reveal/Fade';

class MatchRequests extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <>
            <Fade>
                <div id="match_request_container">
                    <h3 id="match_req_title">Match Requests</h3>
                    <Fade right cascade>
                        <div className="match_request_items">
                            <div className="req_item">
                                <img id="req_image" src={person1} />
                                <div id="person_event_info">
                                    <h4 id="req_name">James R.</h4> 
                                    <p id="event_sending_for_name">Renaissance Art Fair</p>
                                    <p id="event_sending_for_date">August 28th, 2021</p>
                                </div>
                                <div style={{marginRight:"40px"}}>
                                    <button id="accept_req">Y</button>
                                    <button id="decline_req">N</button>
                                </div>
                            </div>
                            <div className="req_item">
                                <img id="req_image" src={person1} />
                                <div id="person_event_info">
                                    <h4 id="req_name">James R.</h4> 
                                    <p id="event_sending_for_name">Pottery Class</p>
                                    <p id="event_sending_for_date">Event date</p>
                                </div>
                                <div style={{marginRight:"40px"}}>
                                    <button id="accept_req">Y</button>
                                    <button id="decline_req">N</button>
                                </div>
                            </div>
                            <div className="req_item">
                                <img id="req_image" src={person1} />
                                <div id="person_event_info">
                                    <h4 id="req_name">James R.</h4> 
                                    <p id="event_sending_for_name">Pottery Class</p>
                                    <p id="event_sending_for_date">Event date</p>
                                </div>
                                <div style={{marginRight:"40px"}}>
                                    <button id="accept_req">Y</button>
                                    <button id="decline_req">N</button>
                                </div>
                            </div>
                            <div className="req_item">
                                <img id="req_image" src={person1} />
                                <div id="person_event_info">
                                    <h4 id="req_name">James R.</h4> 
                                    <p id="event_sending_for_name">Pottery Class</p>
                                    <p id="event_sending_for_date">Event date</p>
                                </div>
                                <div style={{marginRight:"40px"}}>
                                    <button id="accept_req">Y</button>
                                    <button id="decline_req">N</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                </Fade>
            </>
        )
    }
}

export default MatchRequests