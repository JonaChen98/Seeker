import React from 'react';
import './navbar.css'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function NavBar()
{
    return (
        <div id="profile_nav_container">
            <div id="profile_nav_left">
                <Link to='/'><h3 id="profile_navbar_logo" className="profile_navbar_item">Seeker</h3></Link>
                <Link to='/events'><h6 id="profile_events_link" className="profile_nav_items">events</h6></Link>
                <Link to='/aboutus'><h6 id="profile_events_link" className="profile_nav_items">about</h6></Link>
            </div>         
        </div>
    )
}