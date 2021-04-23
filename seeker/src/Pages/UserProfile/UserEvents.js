import React from 'react'
import './userevents.css'
import pottery from '../../images/pottery.jpeg'
import ai from  '../../images/ai.jpeg'
import js from  '../../images/js.jpeg'
import sculpt from  '../../images/sculpture.jpeg'

import Fade from 'react-reveal/Fade';

class UserEvents extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <>
                <div id="user_events_container">
                    <h3 id="events_section_title">Your Events</h3>
                    <Fade>
                        <div className="events_container_items">
                        <Fade bottom cascade>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={pottery} />
                                    <h4 id="event_name">Pottery Class</h4>
                                    <p id="event_address">100 Greenville Pl, NY 12229</p>
                                    <p id="event_date">May 27th, 2021 <br /> 6:45PM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={ai} />
                                    <h4 id="event_name">Future of AI</h4>
                                    <p id="event_address">Virtual</p>
                                    <p id="event_date">June 7th, 2021 <br /> 9:00AM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={js} />
                                    <h4 id="event_name">JS Fundamentals</h4>
                                    <p id="event_address">Virtual</p>
                                    <p id="event_date">June 5th, 2021 <br /> 9:00AM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={sculpt} />
                                    <h4 id="event_name">Renaissance Sculptures</h4>
                                    <p id="event_address">Virtual</p>
                                    <p id="event_date">June 7th, 2021 <br /> 9:00AM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={ai} />
                                    <h4 id="event_name">Future of AI</h4>
                                    <p id="event_address">Virtual</p>
                                    <p id="event_date">June 7th, 2021 <br /> 9:00AM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={ai} />
                                    <h4 id="event_name">Future of AI</h4>
                                    <p id="event_address">Virtual</p>
                                    <p id="event_date">June 7th, 2021 <br /> 9:00AM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                            <div className="event_item">
                                <div id="img_title">
                                    <img id="event_img" src={ai} />
                                    <h4 id="event_name">Future of AI</h4>
                                    <p id="event_address">Virtual</p>
                                    <p id="event_date">June 7th, 2021 <br /> 9:00AM</p>
                                    <button id="cancel_event_attendance">Cancel</button>
                                </div>
                            </div>
                        </Fade>
                        </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default UserEvents