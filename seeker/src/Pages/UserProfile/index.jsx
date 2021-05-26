import React, { useReducer } from 'react'
import UserInfo from './UserInfo'
import UserEvents from './UserEvents'
import MatchRequests from './MatchRequests'
import UserMatches from './UserMatches'
import Navbar from './Navbar'
import './index.css'
import EditProfile from './EditProfile'
import fetchprofile from '../../Services/profile'

class UserProfile extends React.Component {
    constructor() {
        super();
        this.state={
            showEvents: true,
            showMatches: false,
            showRequests: false,
            showSettings: false,
            eventsTextColor: "#ffa69e",
            matchesTextColor: "#5e6472",
            requestsTextColor: "#5e6472"
        }

        this.setShowMatches = this.setShowMatches.bind(this)
        this.setShowEvents = this.setShowEvents.bind(this)
        this.setShowRequests = this.setShowRequests.bind(this)
        this.setSettings= this.setSettings.bind(this)
    }

    setSettings() {
        this.setState({
            showEvents: false,
            showMatches : false,
            showRequests: false,
            showSettings : true,
            eventsTextColor: "#5e6472",
            matchesTextColor: "#5e6472",
            requestsTextColor: "#5e6472"
        })
    }

    setShowMatches() {
        this.setState({
            showEvents: false,
            showMatches : true,
            showRequests: false,
            showSettings: false,
            eventsTextColor: "#5e6472",
            matchesTextColor: "#ffa69e",
            requestsTextColor: "#5e6472"
        })
    }

    setShowEvents() {
        this.setState({
            showEvents: true,
            showMatches : false,
            showRequests: false,
            showSettings: false,
            eventsTextColor: "#ffa69e",
            matchesTextColor: "#5e6472",
            requestsTextColor: "#5e6472"
        })
    }

    setShowRequests() {
        this.setState({
            showEvents: false,
            showMatches : false,
            showRequests: true,
            showSettings: false,
            eventsTextColor: "#5e6472",
            matchesTextColor: "#5e6472",
            requestsTextColor: "#ffa69e"
        })
    }

    // fetchuserinfo(){
    //     fetchprofile.fetchname()
    // } // replaced this.setShowEvents

    render() {
        return (
            <>
                <div style={{position:"relative", height:"100vh"}}>
                    <Navbar />
                    <div>
                        <UserInfo setSettings={this.setSettings} />
                        <div id="user_dash_nav">
                            <div id="dash_options">
                                <div className="dash_item">
                                    <button style={{color:this.state.eventsTextColor}} onClick={this.setShowEvents} id="to_events" className="dash_nav_button"><h2 className="dash_section_title">my events</h2></button>
                                </div>
                                <div className="dash_item">
                                    <button style={{color:this.state.matchesTextColor}} onClick={this.setShowMatches} id="to_matches" className="dash_nav_button"><h2 className="dash_section_title">my matches</h2></button>
                                </div>
                                <div className="dash_item">
                                    <button style={{color:this.state.requestsTextColor}} onClick={this.setShowRequests} id="to_reqs" className="dash_nav_button"><h2 className="dash_section_title">match requests</h2></button>
                                </div>
                            </div>
                        </div>
                        <div id="user_dash_items_">
                            {this.state.showEvents && <UserEvents />}
                            {this.state.showMatches && <UserMatches />}
                            {this.state.showRequests && <MatchRequests />}
                            {this.state.showSettings &&  <EditProfile />}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default UserProfile