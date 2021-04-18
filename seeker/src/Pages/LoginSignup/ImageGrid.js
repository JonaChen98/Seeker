import React from 'react'
import broadway from '../../images/broadway.jpeg'
import festival from '../../images/festival.jpeg'
import crowd from '../../images/crowd.jpeg'
import concert from '../../images/concert.jpeg'
import timessq from '../../images/timessq.jpeg'
import './ImageGrid.css'
import { times } from 'lodash-es'

export default function ImageGrid()
{
    return(
        <>
        {/* <div class="grid">
            <div class="grid-item"></div>
            <div class="grid-item grid-item--width2">
                <img className="image-grid-item" src={broadway} />
            </div>
            <div class="grid-item grid-item--height2">
                <img  className="image-grid-item" src={concert} />
            </div> */}

        <div id="img-container">
            <div id="li">
                <img className="image-grid-item" src={broadway} />
            </div>
            <div id="li">
                <img  className="image-grid-item" src={concert} />
            </div>
            <div id="li">
                <img className="image-grid-item" src={crowd} />
            </div>
            <div id="li">
                <img  className="image-grid-item" src={timessq} />
            </div>
            <div id="li">
                <img  className="image-grid-item" src={festival} />
            </div>


            <div id="li">
                <img className="image-grid-item" src={broadway} />
            </div>
            <div id="li">
                <img className="image-grid-item" src={concert} />
            </div>
            <div id="li">
                <img className="image-grid-item" src={crowd} />
            </div>
            <div id="li">
                <img className="image-grid-item" src={timessq} />
            </div>
            <div id="li">
                <img className="image-grid-item" src={festival} />
            </div>
        </div>
            {/* <div> */}
                {/* <div class="column">
                    <img className="image-grid-item" src={broadway} />
                    <img className="image-grid-item" src={festival} />
                    <img className="image-grid-item" src={crowd} />
                    <img className="image-grid-item" src={concert} />
                    <img className="image-grid-item" src={timessq} />
                </div>
                <div class="column">
                    <img className="image-grid-item" src={broadway} />
                    <img className="image-grid-item" src={crowd} />
                    <img className="image-grid-item" src={concert} />
                    <img className="image-grid-item" src={timessq} />
                    <img className="image-grid-item" src={festival} />
                </div>
                <div class="column">
                    <img className="image-grid-item" src={concert} />
                    <img className="image-grid-item" src={broadway} />
                    <img className="image-grid-item" src={festival} />
                    <img className="image-grid-item" src={crowd} />
                    <img className="image-grid-item" src={timessq} />
                </div>
                <div class="column">
                    <img className="image-grid-item" src={crowd} />
                    <img className="image-grid-item" src={concert} />
                    <img className="image-grid-item" src={timessq} />
                    <img className="image-grid-item" src={broadway} />
                    <img className="image-grid-item" src={festival} />
                </div> */}
            {/* </div> */}
        </>
    )
}