import React from 'react'
import './userevents.css'
import pottery from '../../images/pottery.jpeg'
import ai from  '../../images/ai.jpeg'
import js from  '../../images/js.jpeg'
import sculpt from  '../../images/sculpture.jpeg'
import boats from  '../../images/boats.jpeg'

import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';
import { assignInWith } from 'lodash-es'

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
                        <div id="user_event_item">
                            <img id="user_event_img" src={sculpt} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Renaissance</h1>
                                <h2 id="user_event_date_time">Monday, June 29, 2021</h2>
                                <h2 id="user_event_date_time">10:45AM</h2>
                                <button onClick={this.onCancel} id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={ai} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Future of AI</h1>
                                <h2 id="user_event_date_time">Monday, June 29, 2021</h2>
                                <h2 id="user_event_date_time">10:45AM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={pottery} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Pottery Class</h1>
                                <h2 id="user_event_date_time">Monday, June 29, 2021</h2>
                                <h2 id="user_event_date_time">10:45AM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={js} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Intro to Vue.js</h1>
                                <h2 id="user_event_date_time">Monday, June 29, 2021</h2>
                                <h2 id="user_event_date_time">10:45AM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                        <div id="user_event_item">
                            <img id="user_event_img" src={boats} />
                            <div id="user_event_info">
                                <h1 id="user_event_title">Central Park Boat House</h1>
                                <h2 id="user_event_date_time">Monday, June 29, 2021</h2>
                                <h2 id="user_event_date_time">10:45AM</h2>
                                <button onClick={this.onCancel}  id="user_cancel_button">cancel</button>
                            </div>
                        </div>
                                                    
                    </Card.Group>
                    </Fade>
                </div>
                </Fade>
            </>
        )
    }
}

export default UserEvents