import React from 'react'
import NavBar from '../../Components/navbar/index'
import './about.css'

export default function AboutTeam() {
    return(
        <>
            <div>
                <NavBar />
                <div id="about_page">
                    <div id="about_seeker_section">
                        <h1>About Seeker</h1>
                    </div>
                    <div id="meet_team">
                        <h1>Meet the Team!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}