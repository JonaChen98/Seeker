import React, { useState } from 'react'
import './userinfo.css'
import people from '../../images/person23.jpeg'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import { useHistory, location } from 'react-router-dom'

import Fade from 'react-reveal/Fade';
import { propTypes } from 'react-bootstrap/esm/Image'

import { Link } from 'react-router-dom'

function UserInfo (props) {
    const history = useHistory()
    // delete this once information is being fetched from an api
    const [info, setInfo] = useState({
        profile_picture:"../../images/threepeople.jpeg",
        first_name:"Katy",
        last_name:"Johnson",
        instagram_link:"https://www.instagram.com",
        facebook_link:"",
        twitter_link:"",
        gender:"female",
        drinks:false,
        devils_lettuce: false,
        drugs:false,
        bio:"bio",
        email:"katy@aol.com"
    })

    const { profile_picture, first_name, last_name, email, instagram_link, twitter_link, facebook_link, gender,drinks, devils_lettuce, drugs, bio } = info

    function goToEditPage() {
        history.push({
            pathname: '/settings',
            state: {
                profile_picture: profile_picture,
                first_name: first_name,
                last_name:last_name,
                instagram_link : instagram_link,
                facebook_link:facebook_link,
                twitter_link:twitter_link,
                gender:gender,
                drinks:drinks,
                devils_lettuce: devils_lettuce,
                drugs:drugs,
                bio:bio,
                email:email
            }
        })
    }

    function logout_req() {
        alert("logging out now")
    }

    return (
        <>  
            {/* <Fade right> */}
            <div id="user_info_container">
                <Fade>
                    <div className="user_info_item">
                        <img id="user_image" src={people} />
                        <h4 id="user_name"> Katy Johnson</h4> 
                        <div id="social_media user_info_item">
                            {twitter_link.length ? 
                                <a href={twitter_link}><img className="sm_icons" src={twitter}/></a> : null
                            }
                            {instagram_link.length ? 
                                <a href={instagram_link}><img className="sm_icons" src={instagram}/></a> : null
                            }
                            {facebook_link.length ? 
                                <a href={facebook_link}><img className="sm_icons" src={facebook}/></a> : null
                            }
                        </div>
                        <div id="user_info">
                            <h4 id="user_about_heading"> about me </h4> 
                            <p id="user_gender">gender: female </p>
                            <p id="user_drink_info">drinks: yes </p>
                            <p id="user_devils_info">devil's lettuce: no</p>
                            <p id="user_drug_info">drugs: yes </p>
                            <h4 style={{marginTop:"25px"}} id="user_about_heading"> bio </h4> 
                            <p id="user_bio">Live in the sunshine</p>
                        </div>
                        <div id="profile_buttons">
                            <button onClick={props.setSettings} id="profile_edit_button">settings</button>
                            <Link to="/"><button onClick={logout_req} id="profile_logout_button">logout</button></Link>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* </Fade> */}
        </>
    )
}

export default UserInfo