import React from 'react';
import './index.css'
import { Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function NavBar()
{
    return (
        <div id="universal_nav_container">
            <div id="universal_nav_left">
                <h3 id="universal_navbar_logo" className="universal_navbar_item">Seeker</h3>
                <Link to='/events'><h6 id="universal_events_link" className="universal_nav_items">events</h6></Link>
                <Link to='/'><h6 id="universal_events_link" className="universal_nav_items">about</h6></Link>
            </div> 
            <div id="universal_nav_right">
               <Link to='/user_profile'><Icon id="to_profile" size='large' name='user outline' /></Link>
            </div>          
        </div>
    )
}