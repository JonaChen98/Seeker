import React from 'react'
import './UserMatches.css'
import Fade from 'react-reveal/Fade';
import person from '../../images/person8.jpeg'

import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

class UserMatches extends React.Component {
    constructor(){
        super();
        this.state={
            match_name:"",
            match_event_title:"",
            match_event_date:""
        }

        this.onMatchRemove = this.onMatchRemove.bind(this)
    }

    onMatchRemove(){
        alert("match removed")
    }

    render(){
        return(
            <> 
            <Fade bottom>
                <div id="user_matches_container">
                    <Fade>
                        <Card.Group className="user_matches_items">
                        <Fade bottom cascade>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        <div id="match_item">
                            <img id="match_img" src={person} />
                            <div id="match_info">
                                <h1 id="match_name">Valentina R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Event Attending Together</p>
                                    <p id="match_event_date">Event Date</p>
                                    <p id="match_event_time">Event Time</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
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

export default UserMatches