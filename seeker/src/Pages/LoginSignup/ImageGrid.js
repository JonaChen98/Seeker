import React from 'react'
import broadway from '../../images/broadway.jpeg'
import festival from '../../images/festival.jpeg'
import crowd from '../../images/crowd.jpeg'
import concert from '../../images/concert.jpeg'
import timessq from '../../images/timessq.jpeg'
import balloon from '../../images/balloon.jpeg'
import boats from '../../images/boats.jpeg'
import display from '../../images/display.jpeg'
import red_concert from '../../images/red_concert.jpeg'
import twopeople from '../../images/twopeople.jpeg'

import beer from '../../images/beer.jpeg'
import wine from '../../images/wine.jpeg'
import threepeople from '../../images/threepeople.jpeg'
import ferriswheel from '../../images/ferriswheel.jpeg'
import hot_air_balloon from '../../images/hot_air_balloons.jpeg'
import kite from '../../images/kite.jpeg'
import newyork from '../../images/newyork.jpeg'
import nycabove from '../../images/nycabove.jpeg'
import yoga from '../../images/yoga.jpeg'
import volunteer1 from '../../images/volunteer1.jpeg'
import volunteer2 from '../../images/volunteer2.jpeg'
import surfing from '../../images/surfing.jpeg'
import nychudson from '../../images/nyc-hudson.jpeg'
import timessquare from '../../images/timessquare.jpeg'


import './ImageGrid.css'

export default function ImageGrid()
{
    return (
        <>
        {/* <div className="img_grid"> */}
            <div className="grid_img_container">
                <div className="imgdiv">
                    <img className="img" src={nycabove} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={wine} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={threepeople} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={timessquare} />
                </div>

                </div>
            <div className="grid_img_container">

                <div className="imgdiv">
                    <img className="img" src={balloon} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={volunteer1} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={display} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={hot_air_balloon} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={boats} />
                </div>

            </div>
            <div className="grid_img_container">

                <div className="imgdiv">
                    <img className="img" src={ferriswheel} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={volunteer2} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={red_concert} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={surfing} />
                </div>
            </div>
            <div className="grid_img_container">

                <div className="imgdiv">
                    <img className="img" src={twopeople} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={timessq} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={festival} />
                </div>

                <div className="imgdiv">
                    <img className="img" src={broadway} />
                </div>
            </div>
        {/* </div> */}
        </>
    )
}