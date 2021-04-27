import React, {useState} from 'react'
import './EventsSearch.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function EventsSearch(){
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div id="events_bar_search">
                <label id="events_search_title">Search </label>
                <input className="event_search_input" type="text" placeholder="area/zipcode" />
                <label>or</label>
                <DatePicker className="event_search_input" selected={startDate} onChange={date => setStartDate(date)} />
            </div>
        </>
    )
}