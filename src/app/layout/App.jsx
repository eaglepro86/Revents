import React, {useState, Fragment} from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event){
    setSelectedEvent(event);  
    setFormOpen(true);
 }

 function handleCreateFormOpen() {
   setSelectedEvent(null);
   setFormOpen(true);
 }
  
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <Navbar setFormOpen={handleCreateFormOpen}/>
          <Container className='main'>
            <Route path="/events" component={EventDashboard} />
            <Route path="/events/:id" component={EventDetailedPage} />
            <Route path="/createEvent" component={EventForm}/>
          </Container>
        </>
      )} 
      />
    </>
  );
}

