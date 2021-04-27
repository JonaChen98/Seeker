import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import newyork from  '../../images/newyork.jpeg'
import BarEventItem from './BarEventItem'
import Loading from '../../Components/loading/index'

import Fade from 'react-reveal/Fade';

import './EventsBar.css'

class EventsBar extends React.Component {
    constructor(){
        super();
        this.state={
            events:[],
            loading: true
        }
    }

    // componentDidMount(){
    //     fetch("api link here")
    //         .then(res => res.json())
    //         .then(events => {
    //             this.setState({
    //             loading: false,
    //             events: events.map((p,ii) => <BarEventItem {...p} key={ii} />),
    //             });
    //         })
    //         .catch(err => console.log("API ERROR: ", err));
    // }

    render(){
        return(
            <>
                <div id="events_bar_container">
                    {/* Display Loading component while everything is getting fetched */}
                    {/* <Loading /> */} 
                    <BarEventItem />
                </div>
            </>
        )
    }
}

export default EventsBar