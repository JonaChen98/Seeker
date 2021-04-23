import React from 'react'
import './userinfo.css'
import people from '../../images/threepeople.jpeg'

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <>
                <div id="user_info_container">
                    <Fade>
                        <div className="user_info_item">
                            <img id="user_image" src={people} />
                            <h4 id="user_name"> Katy Johnson</h4> 
                            <p id="user_gender">gender: female </p>
                            <p id="user_drink_info">drinks: yes </p>
                            <p id="user_devils_info">devil's lettuce: no</p>
                            <p id="user_drug_info">drugs: yes </p>
                            <button id="profile_settings_button">settings</button>
                        </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default UserInfo