import React from 'react';
import './LandingTop.css';
import pool from '../images/pool.jpeg'
import twopeople from '../images/twopeople.jpeg'
import hands from '../images/hands.jpeg'
import boats from '../images/boats.jpeg'

export default function Images()
{
    return(
        <div id="four_imgs">
            <img id="first_img" src={pool} />
            <img id="second_img" src={twopeople} />
            <img id="third_img" src={boats} />
            <img id="fourth_img" src={hands} />
        </div>
    )
}