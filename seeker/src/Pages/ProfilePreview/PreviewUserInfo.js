import React from 'react'
import './previewuserinfo.css'
import people from '../../images/threepeople.jpeg'

class PreviewUserInfo extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <>
                <div id="user_info_container">
                    <div className="user_info_item">
                        <img id="user_image" src={people} />
                        <h4 id="user_name"> Katy Johnson</h4> 
                        <p id="user_gender">gender: female </p>
                        <p id="user_drink_info">drinks: yes </p>
                        <p id="user_devils_info">devil's lettuce: no</p>
                        <p id="user_drug_info">drugs: yes </p>
                    </div>
                </div>
            </>
        )
    }
}

export default PreviewUserInfo