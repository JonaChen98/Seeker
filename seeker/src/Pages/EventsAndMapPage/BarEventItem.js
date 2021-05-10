import React, { useState } from 'react'
import './EventsBar.css'
import { Card, Image } from 'semantic-ui-react'
import newyork from  '../../images/newyork.jpeg'
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
                            {/* <button style={{textDecoration:"none", zIndex:"20", backgroundColor:"transparent", border:"none"}} onClick={closeModal}> X </button> */}
                        </Modal>
                    </Card>
                    
                </div> 
            </Fade>
        </>
    )
}