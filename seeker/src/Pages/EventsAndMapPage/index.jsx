import React from 'react'
import EventsBar from './EventsBar'
import EventsSearch from './EventsSearch'
import MapContainer from './MapContainer'
import NavBar from '../../Components/navbar/index'

export default function EventsAndMap(){
    return (
        <>
            <NavBar />
            <div style={{display:"flex", flexFlow:"row",overflow:"scroll"}}>
                <EventsBar />
                <div style={{display:"flex", flexFlow:"column",overflow:"hidden"}}>
                    <EventsSearch />
                    <MapContainer />
                </div>
            </div>  
        </>
    )
}