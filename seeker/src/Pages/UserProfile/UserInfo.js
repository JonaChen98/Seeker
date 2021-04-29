import React from 'react'
import './userinfo.css'
import people from '../../images/threepeople.jpeg'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'

import Fade from 'react-reveal/Fade';

class UserInfo extends React.Component {
    constructor() {
        super();
        this.state={
            profile_picture:"",
            name:"",
            instagram_link:"https://www.instagram.com",
            facebook_link:"",
            twitter_link:"",
            gender:"",
            drinks:false,
            devils_lettuce: false,
            drugs:false,
            bio:""
        }
        this.goToEditPage = this.goToEditPage.bind(this)
        this.logout_req = this.logout_req.bind(this)
    }

    goToEditPage() {
        alert("now going to settings page")
    }

    logout_req() {
        alert("logging out now")
    }

    render() {
        return (
            <>  
                {/* <Fade right> */}
                <div id="user_info_container">
                    <Fade>
                        <button onClick={this.goToEditPage} id="profile_edit_button">edit</button>
                        <button onClick={this.logout_req} id="profile_logout_button">logout</button>
                        <div className="user_info_item">
                            <img id="user_image" src={people} />
                            <h4 id="user_name"> Katy Johnson</h4> 
                            <div id="social_media user_info_item">
                                {this.state.twitter_link.length ? 
                                    <a href={this.state.twitter_link}><img className="sm_icons" src={twitter}/></a> : null
                                }
                                {this.state.instagram_link.length ? 
                                    <a href={this.state.instagram_link}><img className="sm_icons" src={instagram}/></a> : null
                                }
                                {this.state.facebook_link.length ? 
                                    <a href={this.state.facebook_link}><img className="sm_icons" src={facebook}/></a> : null
                                }
                            </div>
                            <div id="user_info">
                                <h4 id="user_about_heading"> about me </h4> 
                                <p id="user_gender">gender: female </p>
                                <p id="user_drink_info">drinks: yes </p>
                                <p id="user_devils_info">devil's lettuce: no</p>
                                <p id="user_drug_info">drugs: yes </p>
                                <h4 style={{marginTop:"25px"}} id="user_about_heading"> bio </h4> 
                                <p id="user_bio">bio here</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                {/* </Fade> */}
            </>
        )
    }
}

export default UserInfo