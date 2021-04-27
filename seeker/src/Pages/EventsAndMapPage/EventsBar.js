import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import newyork from  '../../images/newyork.jpeg'
import NavBar from  '../UserProfile/Navbar'

import Fade from 'react-reveal/Fade';

import {MDCRipple} from '@material/ripple';

import './EventsBar.css'

class EventsBar extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <>
                <NavBar />
                <div id="events_bar_container">
                <Fade bottom cascade>
                    <div className="events_bar_item">
                        <Card>
                            <Image className="event_img" src={newyork} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Event Name</Card.Header>
                            <Card.Meta> Event Location</Card.Meta>
                            <Card.Meta>Event Date</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                Click here for more information
                            </a>
                            </Card.Content>
                        </Card>
                    </div> 

                    <div className="events_bar_item">
                        <Card>
                            <Image className="event_img" src={newyork} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Event Name</Card.Header>
                            <Card.Meta> Event Location</Card.Meta>
                            <Card.Meta>Event Date</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                Click here for more information
                            </a>
                            </Card.Content>
                        </Card>
                    </div> 

                    <div className="events_bar_item">
                        <Card>
                            <Image className="event_img" src={newyork} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Event Name</Card.Header>
                            <Card.Meta> Event Location</Card.Meta>
                            <Card.Meta>Event Date</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                Click here for more information
                            </a>
                            </Card.Content>
                        </Card>
                    </div> 

                    <div className="events_bar_item">
                        <Card>
                            <Image className="event_img" src={newyork} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Event Name</Card.Header>
                            <Card.Meta> Event Location</Card.Meta>
                            <Card.Meta>Event Date</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                Click here for more information
                            </a>
                            </Card.Content>
                        </Card>
                    </div> 

                    <div className="events_bar_item">
                        <Card>
                            <Image className="event_img" src={newyork} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Event Name</Card.Header>
                            <Card.Meta> Event Location</Card.Meta>
                            <Card.Meta>Event Date</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                                Click here for more information
                            </a>
                            </Card.Content>
                        </Card>
                    </div>     
                </Fade>
                </div>
            </>
        )
    }
}

export default EventsBar