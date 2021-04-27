import React from 'react'

export default class EventInformation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            event_id:""
        }
    }

    render(){
        return(
            <>
                <div id="event_info_container">
                    <h3 id="event_name">Event Name</h3>
                </div>
            </>
        )
    }
}