import React from 'react'
import './EventsBar.css'
import { Card, Image } from 'semantic-ui-react'
import newyork from  '../../images/newyork.jpeg'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

export default class BarEventItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            event_id:""
        }
    }

    render() {
        return(
            <>
                <Fade bottom>
                    <div className="events_bar_item">
                    
                        <Card>
                            <Image className="event_img" src={newyork} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Event Name</Card.Header>
                            <Card.Meta> Event Location</Card.Meta>
                            <Card.Meta>Event Date</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Link to='./events'> 
                                    Click here for more
                                </Link>
                            </Card.Content>
                        </Card>
                        
                    </div> 
                </Fade>
            </>
        )
    }
}