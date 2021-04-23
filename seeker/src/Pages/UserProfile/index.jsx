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
                <Navbar />
                <div style={{display:"flex", flexDirection:"row"}}>
                    <UserInfo style={{position:"fixed"}} />
                    <div id="user_profile_things" style={{overflow:"scroll",display:"flex", flexDirection:"column"}}>
                        <MatchRequests />
                        <UserEvents />
                        <UserMatches />
                    </div>
                </div>
            </>
        )
    }
}


export default UserProfile