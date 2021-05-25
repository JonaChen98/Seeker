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
            { !showDescript && <AttendeeList handleClick={handleClick} /> }
        </div>
        </>
    )
}