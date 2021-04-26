import React, { useReducer } from 'react'
import UserInfo from './UserInfo'
import UserEvents from './UserEvents'
import MatchRequests from './MatchRequests'
import UserMatches from './UserMatches'
import Navbar from '../Navbar'
import './index.css'


class UserProfile extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <>
                <div style={{position:"relative", height:"100vh"}}>
                    <Navbar />
                    <div id="profile_items" style={{display:"flex", flexDirection:"row"}}>
                        <div id="user_profile_things" style={{ display:"flex", flexDirection:"column", position:"relative", height:"90vh", overflow:"scroll"}}>
                            <MatchRequests />
                            <UserEvents />
                            <UserMatches />
                        </div>
                        <UserInfo  />
                    </div>
                </div>
            </>
        )
    }
}


export default UserProfile