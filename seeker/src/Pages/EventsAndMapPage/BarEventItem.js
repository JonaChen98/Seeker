import React, { useState } from 'react'
import './EventsBar.css'
import { Card, Image } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import EventInformation from './Event_Listing_Info/EventInformation'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:"#F5F5F5",
      borderRadius:"7px",
      color:"black",
      height: "70vh",
      width:"85vw"
    }
};

export default function BarEventItem(props) {
    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    let eventImage = "eventImages/" + props.imagePath;

    return(
        <>
            <Fade bottom>
                <div className="events_bar_item">

                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={eventImage} ui={false} />
                        <Card.Content>
                        <Card.Header>{props.name}</Card.Header>
                        <Card.Meta>{props.location}</Card.Meta>
                        <Card.Meta>{props.time.slice(0, 10)}</Card.Meta>
                        </Card.Content>
                        <Card.Content style={{color:"#5e6472", fontWeight:"400"}} extra onClick={openModal}>
                                Click here for more
                        </Card.Content>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={customStyles}
                            >
                            
                            <EventInformation />
                        </Modal>
                    </Card>
                   
                </div> 
            </Fade>
        </>
    )
}