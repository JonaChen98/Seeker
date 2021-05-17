import React, { useState } from 'react'
import './EventsBar.css'
import { Card, Image } from 'semantic-ui-react'

import newyork from  '../../images/newyork.jpeg'
import pottery from  '../../images/pottery.jpeg'
import fireworks from  '../../images/fireworks.jpeg'
import sailing from  '../../images/sailing.jpeg'
import yoga from  '../../images/yoga.jpeg'
import js from  '../../images/js.jpeg'
import wine from  '../../images/wine2.jpeg'
import bull from  '../../images/bull.jpeg'

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
                        <Image className="event_img" src={pottery} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Pottery Class</Card.Header>
                        <Card.Meta>238 Grand St, Brooklyn, NY 11211</Card.Meta>
                        <Card.Meta>June 29, 2021</Card.Meta>
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

                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={fireworks} ui={false} />
                        <Card.Content>
                        <Card.Header>Socially-Distanced Fireworks Watching</Card.Header>
                        <Card.Meta>Your Couch, BYOTV (bring your own tv)</Card.Meta>
                        <Card.Meta>July 4, 2021</Card.Meta>
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
                   
                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={newyork} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Top of the Rock Exhibition</Card.Header>
                        <Card.Meta>Rockefeller Center</Card.Meta>
                        <Card.Meta>July 13, 2021</Card.Meta>
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

                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={yoga} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Yoga for Beginners</Card.Header>
                        <Card.Meta>1456 Beltview Ave.</Card.Meta>
                        <Card.Meta>July 13, 2021</Card.Meta>
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

                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={js} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Intro to Vue.js</Card.Header>
                        <Card.Meta>Virtual</Card.Meta>
                        <Card.Meta>July 17,2021</Card.Meta>
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
                    
                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={sailing} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Sailing Lesson</Card.Header>
                        <Card.Meta>Brooklyn</Card.Meta>
                        <Card.Meta>July 19, 2021</Card.Meta>
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

                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={wine} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>History of Wine</Card.Header>
                        <Card.Meta>45 Park Ave.</Card.Meta>
                        <Card.Meta>July 20, 2021</Card.Meta>
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

                    <Card>
                        <img style={{objectFit:"cover"}} className="event_img" src={bull} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Should you invest right now?</Card.Header>
                        <Card.Meta>1234 Sherbert Ave.</Card.Meta>
                        <Card.Meta>July 24, 2021</Card.Meta>
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