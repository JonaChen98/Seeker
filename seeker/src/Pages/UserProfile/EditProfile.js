import React, { useState, useEffect } from 'react'
import NavBar from './Navbar'
import './EditProfile.css' 
import { useHistory, location } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

export default function EditProfile(props) {
    const history = useHistory()

    const [info, setInfo] = useState({
        // profile_picture:props.state.location.profile_picture,
        // first_name:props.state.location.first_name,
        // last_name:props.state.location.last_name,
        // instagram_link:props.state.location.instagram_link,
        // facebook_link:props.state.location.facebook_link,
        // twitter_link:props.state.location.twitter_link,
        // gender:props.state.location.gender,
        // drinks:props.state.location.drinks,
        // devils_lettuce:props.state.location.devils_lettuce,
        // drugs:props.state.location.drugs,
        // bio:props.state.location.bio,
        // email:props.state.location.email
        profile_picture:"",
        first_name:"",
        last_name:"",
        instagram_link:"",
        facebook_link:"",
        twitter_link:"",
        gender:"",
        drinks:"",
        devils_lettuce:"",
        drugs:"",
        bio:"",
        email:"",
    })

    // useEffect(() => {
    //     console.log(props.state.location.userObject)
    // },[])

    const { profile_picture, last_name, first_name, instagram_link, facebook_link, twitter_link, gender, drinks, drugs, devils_lettuce, bio, email } = info

    const onChange = e =>
        setInfo({ ...info, [e.target.name]: e.target.value })


    function onSubmit(event){
        event.preventDefault();

        // update info in DB here

        history.push('/user_profile')
    }

    function prevPage(){
        history.goBack()
    }

    return(
        <>
        <NavBar />
            <div id="edit_profile">
            <Fade left>
                <div id="tp">
                    <h1 id="edit_profile_title">settings</h1>
                    <button id="edit_profile_back_button" onClick={prevPage}>go back</button>
                </div>
            </Fade>
            <Fade bottom cascade>
                <div id="edit_profile_form_container">
                    <form id="edit_profile_form" onSubmit={onSubmit}>
                        <div id="firstname">
                        <label className="edit_info_labels">
                                first name
                            </label>
                            <br />
                            <input className="edit_info_text_field" type="text" onChange={onChange} value={first_name} name="first_name" />
                        </div>
                        <div id="lastname">
                        <label className="edit_info_labels">
                                last name
                            </label>
                            <br />
                            <input className="edit_info_text_field" type="text" onChange={onChange} value={last_name} name="last_name" />
                        </div>

                        <br />

                        <div id="email">
                            <label className="edit_info_labels">
                                email
                            </label>
                            <br />
                                <input className="edit_info_text_field" type="text" value={email} onChange={onChange} name="email" />
                        </div>
                    
                        <div id="gender">
                            <label className="signup_labels">gender
                                <br/ >
                                <select id="gender_selection_signup" name="gender" value={gender} onChange={onChange}>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                    <option value="non-binary">non-binary</option>
                                    <option value="other">other</option>
                                </select>
                            </label>
                        </div>

                        <div id="drug">
                            <label> drugs <br />
                                <input 
                                    type="radio" 
                                    name="drugs"
                                    value="yes"
                                    checked={drugs === "yes"}
                                    onChange={onChange}
                                /> yes
                            </label>
                            <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="drugs"
                                    value="no"
                                    checked={drugs === "no"}
                                    onChange={onChange}
                                /> no
                            </label>
                        </div>

                        <div id="drink">
                            <label> drinks <br />
                                <input 
                                    type="radio" 
                                    name="drinks"
                                    value="yes"
                                    checked={drinks === "yes"}
                                    onChange={onChange}
                                    style={{backgroundColor:"pink"}}
                                /> yes
                            </label>
                            <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="drinks"
                                    value="no"
                                    checked={drinks === "no"}
                                    onChange={onChange}
                                /> no
                            </label>
                        </div>

                        <div id="devils">
                            <label> devils lettuce <br />
                                <input 
                                    type="radio" 
                                    name="devils_lettuce"
                                    value="yes"
                                    checked={devils_lettuce === "yes"}
                                    onChange={onChange}
                                /> yes
                            </label>
                            <br />
                            <label>
                                <input 
                                    type="radio" 
                                    name="devils_lettuce"
                                    value="no"
                                    checked={devils_lettuce === "no"}
                                    onChange={onChange}
                                /> no
                            </label>
                        </div>

                        <div id="social_media_link">
                            <label className="edit_info_labels">
                                instagram
                            </label>
                            <br />
                            <input className="edit_info_text_field" type="text" onChange={onChange} value={instagram_link} name="instagram_link" /> 
                        </div>
                        <div id="social_media_link">
                            <label className="edit_info_labels">
                                twitter
                            </label>
                            <br />
                            <input className="edit_info_text_field" type="text" onChange={onChange} value={twitter_link} name="twitter_link" />
                        </div>
                        <div id="social_media_link">
                            <label className="edit_info_labels">
                                facebook
                            </label>
                            <br />
                            <input className="edit_info_text_field" type="text" onChange={onChange} value={facebook_link} name="facebook_link" />
                        </div>

                        <div id="submit_button_div" />
                        <div id="submit_button_div">
                            <button id="submit_edits" onClick={onSubmit}  type="submit" value="save">update</button>
                        </div>
                    </form>
                </div>
                </Fade>
            </div>
        </>
    )
}