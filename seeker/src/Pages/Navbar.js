import React from 'react';
import './navbar.css'

export default function Navbar()
{
    return (
        <div id="nav_container">
            {/* cicking the bavbbar should take user back to the nyc map w events */}
            <h3 id="navbar_logo" className="navbar_item">Seeker</h3>
            <button id="to_map">Map</button>
            <div id="to_profile_button_div"> <button id="to_profile_button" className="navbar_item">Logout</button> </div>
            
            
        </div>
    )
}