import React from 'react'
import './UserMatches.css'
import Fade from 'react-reveal/Fade';
import person from '../../images/person8.jpeg'
import person1 from '../../images/person9.jpeg'
import person2 from '../../images/person10.jpeg'
import person3 from '../../images/person11.jpeg'
import person4 from '../../images/person12.jpeg'
import person5 from '../../images/person13.jpeg'
import person6 from '../../images/person14.jpeg'
import person7 from '../../images/person15.jpeg'
import person8 from '../../images/person16.jpeg'
import person9 from '../../images/person17.jpeg'
import person10 from '../../images/person18.jpeg'
import person11 from '../../images/person22.jpeg'
import person12 from '../../images/person21.jpeg'
import person13 from '../../images/person20.jpeg'



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
                                    <p id="match_event">Central Park Boat House</p>
                                    <p id="match_event_date">July 19, 2021</p>
                                    <p id="match_event_time">1:45PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>
                        
                        <div id="match_item">
                            <img id="match_img" src={person1} />
                            <div id="match_info">
                                <h1 id="match_name">Joshua</h1>
                                <div id="sub_info">
                                    <p id="match_event">Soup Kitchen Volunteer</p>
                                    <p id="match_event_date">August 6, 2021</p>
                                    <p id="match_event_time">9:00AM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person2} />
                            <div id="match_info">
                                <h1 id="match_name">Freddie</h1>
                                <div id="sub_info">
                                    <p id="match_event">Egyption History</p>
                                    <p id="match_event_date">July 27, 2021</p>
                                    <p id="match_event_time">5:00PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person3} />
                            <div id="match_info">
                                <h1 id="match_name">Amelia O'Dell</h1>
                                <div id="sub_info">
                                    <p id="match_event">Electro Night</p>
                                    <p id="match_event_date">July 30, 2021</p>
                                    <p id="match_event_time">10:00PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person4} />
                            <div id="match_info">
                                <h1 id="match_name">Jack Johnson</h1>
                                <div id="sub_info">
                                    <p id="match_event">Soup Kitchen Volunteer</p>
                                    <p id="match_event_date">August 6, 2021</p>
                                    <p id="match_event_time">9:00AM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person5} />
                            <div id="match_info">
                                <h1 id="match_name">Victor Stewart</h1>
                                <div id="sub_info">
                                    <p id="match_event">Future of AI</p>
                                    <p id="match_event_date">June 10, 2021</p>
                                    <p id="match_event_time">3:00PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person6} />
                            <div id="match_info">
                                <h1 id="match_name">Hanna Quin</h1>
                                <div id="sub_info">
                                    <p id="match_event">Yoga for Beginners</p>
                                    <p id="match_event_date">July 23, 2021</p>
                                    <p id="match_event_time">4:45PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person7} />
                            <div id="match_info">
                                <h1 id="match_name">Frannie R.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Seminar on Giving Seminars</p>
                                    <p id="match_event_date">July 23, 2021</p>
                                    <p id="match_event_time">7:00PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person8} />
                            <div id="match_info">
                                <h1 id="match_name">Patrick K.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Hot Dog Eating Contest</p>
                                    <p id="match_event_date">July 4,2021</p>
                                    <p id="match_event_time">1:00PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person9} />
                            <div id="match_info">
                                <h1 id="match_name">Stacy W.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Hamilton</p>
                                    <p id="match_event_date">August 2, 2021</p>
                                    <p id="match_event_time">1:00PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person10} />
                            <div id="match_info">
                                <h1 id="match_name">Anya Johnson</h1>
                                <div id="sub_info">
                                    <p id="match_event">Pottery Class</p>
                                    <p id="match_event_date">June 29, 2021</p>
                                    <p id="match_event_time">10:45AM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person11} />
                            <div id="match_info">
                                <h1 id="match_name">Mel Sizemore</h1>
                                <div id="sub_info">
                                    <p id="match_event">Central Park Boat House</p>
                                    <p id="match_event_date">July 19, 2021</p>
                                    <p id="match_event_time">1:45PM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person12} />
                            <div id="match_info">
                                <h1 id="match_name">Marissa T.</h1>
                                <div id="sub_info">
                                    <p id="match_event">Renaissance Sculptures Pt. 3</p>
                                    <p id="match_event_date">June 9, 2021</p>
                                    <p id="match_event_time">9:00AM</p>
                                </div>
                            </div>
                            <button onClick={this.onMatchRemove} id="remove_match">Remove</button>
                        </div>

                        <div id="match_item">
                            <img id="match_img" src={person13} />
                            <div id="match_info">
                                <h1 id="match_name">Cassidy Ivan</h1>
                                <div id="sub_info">
                                    <p id="match_event">Egyption History.</p>
                                    <p id="match_event_date">July 27, 2021</p>
                                    <p id="match_event_time">5:00PM</p>
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