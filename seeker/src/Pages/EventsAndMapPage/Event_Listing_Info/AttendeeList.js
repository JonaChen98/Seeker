import React from 'react'
import './AttendeeList.css'
import '../../UserProfile/matchrequests.css'

import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';

function Person(props) {
    function sendRequest(e){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 	eventId: props.eventId, requesteeId: props.user.id })
        };
        fetch('http://localhost:8080/api/connect', requestOptions)
            .then(response => {
                // response.json();
                if (response.status === 400)
                    alert("request already exits");

                else if (response.status === 201) {
                    e.target.style.backgroundColor = "#bee3db";
                    alert("sent");
                }
            })
            .catch(err => console.log("API ERROR: ", err));
    }

    let profileImage = "eventImages/" + props.user.imagePath;
    let name = [props.user.firstName, props.user.lastName].join(' ');
    
    return (
        <div style={{
            backgroundColor:"white",
            // backgroundColor:"coral",
            border:"1px solid black",
            marginTop:"10px",
            marginRight:"10px",
            flexShrink:"0",
            borderRadius:"7px",
            boxShadow:"none",
            height:"max-content",
            width:"250px",
            display:"flex",
            padding:"10px",
            flexFlow:"row"
        }}>
            <div
                style={{
                display:"flex",
                flexFlow:"row",
                // backgroundColor:"teal"
                }}
            >
                <img
                floated='right'
                size='mini'
                src={profileImage}
                style={{
                    height:"75px",
                    width:"75px",
                    borderRadius:"7px",
                    objectFit:"cover"
                }}
                />
                <div style={{display:"flex",flexFlow:"column"}}>
                    <div
                        style={{
                            display:"flex",
                            flexFlow:"column"
                        }}
                    >
                        <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>{name}</div>
                    </div>
                    <button id="send_req"
                        style={{
                            height:"30px", 
                            width:"55px", 
                            marginTop:"30px",
                            marginLeft:"90px",
                            border:"1px solid black",
                            borderRadius:"4px",
                            textAlign:"center",
                            display:"inline-block",
                            padding: "0",
                            backgroundColor: "transparent",
                            fontSize:"12px"
                        }} onClick={sendRequest}>
                            Connect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function AttendeeList(props) { 
    return(
        <>
            <Fade bottom cascade>
                <div id="attendee_list_container" style={{height:"64vh", overflow:"hidden"}}>
                    <button id="back_button" onClick={props.handleClick}>back</button>
                    <div style={{width:"81vw", height:"64vh", paddingLeft:"70px", marginTop:"10px", marginRight:"5px", display:"flex", flexFlow:"row", overflow:"scroll", alignContent:"flex-start", flexWrap:"wrap"}} className="match_request_items">

                        {props.users.map((u, ii) => <Person eventId={props.id} user={u} />)}

                    </div>
                </div>
            </Fade>    
        </>
    )
}