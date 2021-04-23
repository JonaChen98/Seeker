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
                <div style={{position:"relative"}}>
                    <Navbar />
                    <div style={{display:"flex", flexDirection:"row", position:"relative"}}>
                        <div id="user_profile_things" style={{ display:"flex", flexDirection:"column", position:"relative"}}>
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