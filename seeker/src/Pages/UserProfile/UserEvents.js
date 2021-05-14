import React from 'react'
import './userevents.css'
import pottery from '../../images/pottery.jpeg'
import ai from  '../../images/ai.jpeg'
import js from  '../../images/js.jpeg'
import sculpt from  '../../images/sculpture.jpeg'
import boats from  '../../images/boats.jpeg'
import yoga from  '../../images/yoga.jpeg'
import seminar from  '../../images/seminar.jpeg'
import egypt from  '../../images/egypt.jpeg'
import electro from  '../../images/electro.jpeg'
import broadway from  '../../images/broadway.jpeg'
import nathans from  '../../images/nathans.jpeg'
import volunteer2 from  '../../images/volunteer2.jpeg'


import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';

class UserEvents extends React.Component {
    constructor() {
        super();
        this.state={
            event_name:"",
            event_location:"",
            event_date:""
        }

        this.onCancel = this.onCancel.bind(this)
    }

    onCancel() {
        alert("event has been cancelled")
    }

    render() {
        return (
            <>
            <Fade bottom>
                <div id="user_events_container">
                    <Fade>
                    <Card.Group style={{ height:"81vh", width:"70vw",  display:"flex", flexFlow:"row", overflow:"scroll", flexWrap:"wrap"}} className="events_container_items">
                        <Fade bottom cascade>
                        <div id="user_event_item">
                            <img id="user_event_img" src={sculpt} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Renaissance Sculptures Pt.3</h1>
                                <h2 id="user_event_date_time">June 9, 2021</h2>
                                <h2 id="user_event_date_time">9:00AM</h2>
                                <button onClick={this.onCancel} id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={ai} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Future of AI</h1>
                                <h2 id="user_event_date_time">June 10, 2021</h2>
                                <h2 id="user_event_date_time">3:00PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={pottery} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Pottery Class</h1>
                                <h2 id="user_event_date_time">June 29, 2021</h2>
                                <h2 id="user_event_date_time">10:45AM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                       
                        <div id="user_event_item">
                            <img id="user_event_img" src={nathans} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Hot Dog Eating Contest</h1>
                                <h2 id="user_event_date_time">July 4, 2021</h2>
                                <h2 id="user_event_date_time">1:00PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={js} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Intro to Vue.js</h1>
                                <h2 id="user_event_date_time">July 17, 2021</h2>
                                <h2 id="user_event_date_time">2:00pm</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={boats} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Central Park Boat House</h1>
                                <h2 id="user_event_date_time">July 19, 2021</h2>
                                <h2 id="user_event_date_time">1:45PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={yoga} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Yoga for Beginners</h1>
                                <h2 id="user_event_date_time">July 23, 2021</h2>
                                <h2 id="user_event_date_time">4:45PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={seminar} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Seminar on Giving Seminars</h1>
                                <h2 id="user_event_date_time">July 23, 2021</h2>
                                <h2 id="user_event_date_time">7:00PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={egypt} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Egyption History 1936 B.C. - 1890 B.C.</h1>
                                <h2 id="user_event_date_time">July 27, 2021</h2>
                                <h2 id="user_event_date_time">5:00PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={electro} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Electro Night</h1>
                                <h2 id="user_event_date_time">July 30, 2021</h2>
                                <h2 id="user_event_date_time">10:00PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={broadway} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Hamilton</h1>
                                <h2 id="user_event_date_time">August 2, 2021</h2>
                                <h2 id="user_event_date_time">1:00PM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        <div id="user_event_item">
                            <img id="user_event_img" src={volunteer2} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Soup Kitchen Volunteer</h1>
                                <h2 id="user_event_date_time">August 6, 2021</h2>
                                <h2 id="user_event_date_time">9:00AM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>

                        </Fade>                    
                    </Card.Group>
                    </Fade>
                </div>
                </Fade>
            </>
        )
    }
}

export default UserEvents