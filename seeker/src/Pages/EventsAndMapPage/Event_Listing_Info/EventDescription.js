import React, { useState } from 'react'
import './EventInfo.css'
import newyork from '../../../images/newyork.jpeg'

export default function EventDescription(props) {
    const [isGoing, setIsGoing] = useState(false)

    function handleGoing(){
        setIsGoing(!isGoing)
        props.handleGoing()
    }

    return(
        <>
            <div id="event_info_container">
                <img id="event_img" src={newyork} />
                <div id="event_info">
                    <div id="descript_top">
                        <h3 id="event_name">Event Name</h3>
                        {!isGoing && <button onClick={handleGoing} id="attending_button">Going</button>}                        
                        {isGoing && <button onClick={handleGoing}  id="attending_button">Not Going</button>}                        
                    </div>
                    <div id="event_details">
                        <div id="event_location_time" style={{display:"flex",flexFlow:"row"}}>
                        <p className="event_detail_item"> <strong>Location:</strong> 9452 Walt Whitman Drive
                            Clifton Park, NY 12065 </p>
                            <div style={{display:"flex", flexFlow:"column"}}>
                            <p className="event_detail_item"> <strong>Time:</strong> 10:45am - 12:00pm </p>
                                <p className="event_detail_item"> <strong>Date:</strong> 10:45am - 12:00pm </p>
                            </div>
                        </div>
                    </div>
                    <div id="event_description">
                        <h4 id="event_about">About</h4>
                        <p id="event_description_par">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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