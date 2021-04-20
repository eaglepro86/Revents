import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData';

export default function EventDashboard() {

    const [events, setEvents] = useState(sampleData);

    // // handle the created event
    // function handleCreateEvent(event) {
    //    setEvents([...events, event]); 
    // }

    // // handle update event
    // function handleUpdateEvent(updatedEvent) {
    //     setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
    // }
    // Handle delete event
    function handleDeleteEvent(eventId) {
        setEvents(events.filter(evt => evt.id !== eventId))
    }
    
    return(
        <Grid>
            <Grid.Column width={10}>
                <EventList 
                events={events} 
                deleteEvent={handleDeleteEvent}/> 
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>event Filters</h2>
            </Grid.Column>
        </Grid>
    )
}