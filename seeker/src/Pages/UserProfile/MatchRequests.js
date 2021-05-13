import React from 'react'
import './matchrequests.css'
import person1 from '../../images/person1.jpeg'
import person2 from '../../images/person5.jpeg'
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
                    <Card.Group  className="match_request_items">
                        <Fade bottom cascade>
                        <div id="req_item">
                            <img id="req_img" src={person1} />
                            <div id="req_info">
                                <h1 id="req_name">Steven Parks</h1>
                                <div id="req_sub_info">
                                    <p id="req_event">is requesting to connect for <strong>Pottery Class</strong> on <strong>June 29, 2021</strong></p>
                                </div>
                            </div>
                            <button id="yes_button"><img src={accept} /></button>
                            <button id="no_button"><img src={reject} /></button>
                        </div>

                        <div id="req_item">
                            <img id="req_img" src={person2} />
                            <div id="req_info">
                                <h1 id="req_name">Kimberly Richards</h1>
                                <div id="req_sub_info">
                                    <p id="req_event">is requesting to connect for <strong>Intro to Vue.js</strong> on <strong>July 17, 2021</strong></p>
                                </div>
                            </div>
                            <button id="yes_button"><img src={accept} /></button>
                            <button id="no_button"><img src={reject} /></button>
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

export default MatchRequests