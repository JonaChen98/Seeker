import React from 'react'
import EventsBar from './EventsBar'
import EventsSearch from './EventsSearch'
import NavBar from '../../Components/navbar/index'

export default function EventsAndMap(){
    return (
        <>
            <NavBar />
            <div style={{display:"flex", flexFlow:"row"}}>
                <EventsBar />
                <EventsSearch />
            </div>
        </>
    )
}