import React, { useState } from 'react'
import './EventInfo.css'
import pottery from '../../../images/pottery.jpeg'

export default function EventDescription(props) {
    const [isGoing, setIsGoing] = useState(false)

    function handleGoing(){
        setIsGoing(!isGoing)
        props.handleGoing()
    }

    return(
        <>
            <div id="event_info_container">
                <img id="event_img" src={pottery} />
                <div id="event_info">
                    <div id="descript_top">
                        <h3 id="event_name">Pottery Class</h3>
                        {!isGoing && <button onClick={handleGoing} id="attending_button">Going</button>}                        
                        {isGoing && <button onClick={handleGoing}  id="attending_button">Not Going</button>}                        
                    </div>
                    <div id="event_details">
                        <div id="event_location_time" style={{display:"flex",flexFlow:"row"}}>
                            <p className="event_detail_item"> <strong>Hosted By:</strong> Choplet Gallery and Ceramic Studio </p>
                                <div style={{display:"flex", flexFlow:"column"}}>
                                <p className="event_detail_item"> <strong>Time:</strong> 10:45am - 12:00pm </p>
                                <p className="event_detail_item"> <strong>Date:</strong> June 29th, 2021 </p>
                                </div>
                            <p className="event_detail_item"> <strong>Location:</strong> 238 Grand St, Brooklyn, NY 11211 </p>
                        </div>
                    </div>
                    <div id="event_description">
                        <h4 id="event_about">About</h4>
                        <p id="event_description_par">
                        Choplet Ceramic Studio combined with Williamsburg Ceramic Center offer ceramic classes and clay studio space in the heart of Williamsburg, Brooklyn in NYC. Choplet Ceramic School and Studio is home to 2600 square foot dedicated to the art of clay in all its form and welcomes newcomers to pottery and ceramic art as well as professional artists: 23 electric wheels, a kick wheel, hand building tables, 2 extruders, 2 slab roller, a glazing spray booth, a drying closet, 5 kilns and an amazing garden are some of the amenities the studio has to offer. Our amazing garden is also equipped of 8 electric wheel, one quick wheel and hand building tables, making it a perfect outdoor ceramic studio! Our inventory consists of: 8 clay bodies, 2 casting slips, 40 – 50 glazes, various colored engobes and pottery plaster. Williamsburg Ceramic Center is the perfect place for independent clay artists in need of a lot of storage space and 24 hours studio access. Our goal is to inspire creativity, foster self-discovery, and nurture an appreciation for art through our pottery programs and workshops and access to our studio, clay center and gallery.
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