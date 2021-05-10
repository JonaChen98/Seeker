import React, { useReducer } from 'react'
import UserInfo from './UserInfo'
import UserEvents from './UserEvents'
import MatchRequests from './MatchRequests'
import UserMatches from './UserMatches'
import Navbar from './Navbar'
import './index.css'

class UserProfile extends React.Component {
    constructor() {
        super();
        this.state={
            showEvents: true,
            showMatches: false,
            showRequests: false
        }

        this.setShowMatches = this.setShowMatches.bind(this)
        this.setShowEvents = this.setShowEvents.bind(this)
        this.setShowRequests = this.setShowRequests.bind(this)
    }

    setShowMatches(boolean) {
        this.setState({showMatches : boolean})
    }

    setShowEvents(boolean) {
        this.setState({showEvents : boolean})
    }

    setShowRequests(boolean) {
        this.setState({showRequests : boolean})
    }

    render() {
        return (
            <>
                <div style={{position:"relative", height:"100vh"}}>
                    <Navbar />
                    <div>
                        <UserInfo  />
                        <div id="user_dash_nav">
                            <div id="dash_options">
                                <div className="dash_item">
                                    <button id="to_events" className="dash_nav_button"><h2 className="dash_section_title">my events</h2></button>
                                </div>
                                <div className="dash_item">
                                    <button id="to_matches" className="dash_nav_button"><h2 className="dash_section_title">my matches</h2></button>
                                </div>
                                <div className="dash_item">
                                    <button id="to_reqs" className="dash_nav_button"><h2 className="dash_section_title">match requests</h2></button>
                                </div>
                            </div>
                        </div>
                        <div id="user_dash_items_">
                            <UserEvents />
                            {/* <h1>hello</h1> */}
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}


export default UserProfile