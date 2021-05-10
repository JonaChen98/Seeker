import React from 'react'
import './matchrequests.css'
import person1 from '../../images/person1.jpeg'
import accept from '../../images/check.png'
import reject from '../../images/reject.png'

import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';

class MatchRequests extends React.Component {
    constructor() {
        super();
        this.state={
            request_name:"",
            request_event:"",
            request_did_accept:false
        }
        this.onAccept = this.onAccept.bind(this)
        this.onReject = this.onReject.bind(this)
    }

    onAccept() {
        alert('request accepted')
    }

    onReject() {
        alert('request denied')
    }

    render() {
        return (
            <>
            <Fade bottom>
                <div id="match_request_container">
                <Fade>
                    <h3 id="match_req_title">Match Requests</h3>
                    <Card.Group style={{paddingLeft:"20px", marginLeft:"5px", marginRight:"5px", display:"flex", flexFlow:"row", overflow:"scroll"}} className="match_request_items">
                        <Fade right cascade>
                            <Card style={{
                                backgroundColor:"transparent",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"400px",
                                display:"flex",
                                flexFlow:"row",
                                marginRight:"30px",
                            }}>
                                <Card.Content
                                    style={{
                                    display:"flex",
                                    flexFlow:"row"
                                    }}
                                >
                                    <Image
                                    floated='right'
                                    size='mini'
                                    src={person1}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div
                                        style={{
                                            display:"flex",
                                            flexFlow:"column"
                                        }}
                                    >
                                    <Card.Header style={{textAlign:"left", marginLeft:"5px", color:"black", fontSize:"15px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Steve Sanders</Card.Header>
                                    <Card.Description style={{fontFamily:"'Raleway', sans-serif",textAlign:"left", marginLeft:"5px", color:"black"}}>
                                    wants to connect with you. Both of you are attending <strong>Event Name </strong>
                                    </Card.Description>
                                    </div>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons' style={{display:"flex", flexFlow:"row", marginTop:"55px", marginLeft:"-10px"}}>
                                        <div id="yes_button">
                                            <Button 
                                                style={{
                                                    height:"30px", 
                                                    width:"30px", 
                                                    marginRight:"0.5px", 
                                                    borderRadius:"7px",
                                                    textAlign:"center",
                                                    display:"inline-block",
                                                    margin: "0 auto",
                                                    padding: "0",
                                                    fontSize:"12px"
                                                }}  basic color='black' onClick={this.onAccept}>
                                                    <img style={{height:"10px", width:"13px"}} src={accept} 
                                                    
                                                />
                                            </Button>
                                        </div>
                                        <div id="no_button">
                                            <Button 
                                                style={{
                                                    height:"30px", 
                                                    width:"30px", 
                                                    marginRight:"0.5px", 
                                                    borderRadius:"7px",
                                                    display:"inline-block",
                                                    margin: "0 auto",
                                                    padding: "0",
                                                    fontSize:"12px"
                                                }} 
                                                onClick={this.onReject}
                                                basic color='black'>
                                                <img style={{height:"12px", width:"12px"}} src={reject} />
                                            </Button>
                                        </div>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Fade>                             
                    </Card.Group>
                </Fade>
            </div>
            </Fade>
            </>
        )
    }
}

export default MatchRequests