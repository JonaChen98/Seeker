import React from 'react'
import EventsBar from './EventsBar'
import EventsSearch from './EventsSearch'

export default function EventsAndMap(){
    return (
        <>
            <div style={{display:"flex", flexFlow:"row"}}>
                <EventsBar />
                <EventsSearch />
            </div>
        </>
    )
}