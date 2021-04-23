import React from 'react'
import './UserMatches.css'
import Fade from 'react-reveal/Fade';
import person8 from '../../images/person8.jpeg'

class UserMatches extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <>
                <div id="user_matches_container">
                    <h3 id="user_matches_title">Your Matches</h3>
                    <Fade>
                        <div className="user_matches_items">
                            <Fade bottom cascade>
                                <div className="user_match">
                                    <div id="match_info">
                                        <img id="match_img" src={person8} />
                                        <h4 id="match_name">Valentina K.</h4>
                                        <p id="match_event_name">Roman History</p>
                                        <p id="match_event_date">April 29th, 2020</p>
                                        <buton id="rmv_match_button">Remove</buton>
                                    </div>
                                </div>
                                <div className="user_match">
                                    <div id="match_info">
                                        <img id="match_img" src={person8} />
                                        <h4 id="match_name">Valentina K.</h4>
                                        <p id="match_event_name">Roman History</p>
                                        <p id="match_event_date">April 29th, 2020</p>
                                        <buton id="rmv_match_button">Remove</buton>
                                    </div>
                                </div>
                                <div className="user_match">
                                    <div id="match_info">
                                        <img id="match_img" src={person8} />
                                        <h4 id="match_name">Valentina K.</h4>
                                        <p id="match_event_name">Roman History</p>
                                        <p id="match_event_date">April 29th, 2020</p>
                                        <buton id="rmv_match_button">Remove</buton>
                                    </div>
                                </div>
                                <div className="user_match">
                                    <div id="match_info">
                                        <img id="match_img" src={person8} />
                                        <h4 id="match_name">Valentina K.</h4>
                                        <p id="match_event_name">Roman History</p>
                                        <p id="match_event_date">April 29th, 2020</p>
                                        <buton id="rmv_match_button">Remove</buton>
                                    </div>
                                </div>
                                <div className="user_match">
                                    <div id="match_info">
                                        <img id="match_img" src={person8} />
                                        <h4 id="match_name">Valentina K.</h4>
                                        <p id="match_event_name">Roman History</p>
                                        <p id="match_event_date">April 29th, 2020</p>
                                        <buton id="rmv_match_button">Remove</buton>
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

export default UserMatches