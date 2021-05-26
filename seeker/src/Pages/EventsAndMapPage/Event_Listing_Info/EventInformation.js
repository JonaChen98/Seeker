import React, { useState } from 'react'
import './EventInfo.css'
import EventDescription from './EventDescription'
import AttendeeList from './AttendeeList'

export default function EventInformation(props) {
    const [showDescript, setShowDescript] = useState(true)
    const [isGoing, setIsGoing] = useState(false)

    function handleClick(){
        setShowDescript(!showDescript)
    }

    function handleGoing(){
        setIsGoing(!isGoing)
    }

    return(
        <>
        <div> 
            { showDescript && <EventDescription handleGoing={handleGoing} handleClick={handleClick} {...props}/> }
            
            {/* {props.users.map((u, ii) => !showDescript && <AttendeeList user={u} handleClick={handleClick} />)} */}
            
            { !showDescript && <AttendeeList handleClick={handleClick} {...props}/> }
        </div>
        </>
    )
}