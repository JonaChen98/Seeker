import React, { useState } from 'react'
import './EventInfo.css'

export default function EventDescription(props) {
    const [isGoing, setIsGoing] = useState(false)

    function handleGoing(){
        setIsGoing(!isGoing)
        props.handleGoing()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 	eventId: props.id})
        };

        if (isGoing) {
            fetch('http://localhost:8080/api/event/going', requestOptions)
                .then(response => {
                    response.json();
                })
                .catch(err => console.log("API ERROR: ", err));
        }

        else {
            fetch('http://localhost:8080/api/event/not_going', requestOptions)
                .then(response => {
                    response.json();
                })
                .catch(err => console.log("API ERROR: ", err));
        }
    }

    let eventImage = "eventImages/" + props.imagePath;

    return(
        <>
            <div id="event_info_container">
                <img id="event_img" src={eventImage} />
                <div id="event_info">
                    <div id="descript_top">
                        <h3 id="event_name">{props.name}</h3>
                        {!isGoing && <button onClick={handleGoing} id="attending_button">Going</button>}                        
                        {isGoing && <button onClick={handleGoing}  id="attending_button">Not Going</button>}                        
                    </div>
                    <div id="event_details">
                        <div id="event_location_time" style={{display:"flex",flexFlow:"row"}}>
                            <p className="event_detail_item"> <strong>Hosted By:</strong> {props.host}</p>
                                <div style={{display:"flex", flexFlow:"column"}}>
                                <p className="event_detail_item"> <strong>Time:</strong> {props.time}</p>
                                <p className="event_detail_item"> <strong>Date:</strong> {props.date}</p>
                                </div>
                            <p className="event_detail_item"> <strong>Location:</strong> {props.location}</p>
                        </div>
                    </div>
                    <div id="event_description">
                        <h4 id="event_about">About</h4>
                        <p id="event_description_par">
                        {props.description}
                        </p>
                    </div>
                    <h4 className="view_attendees_list">View Attendees List
                        <button 
                        className="view_attendees_list" 
                        id="to_list_button"
                        onClick={props.handleClick}
                        >
                            Here
                        </button>
                    </h4>
                </div>
            </div>
        </>
    )
}