import React from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import sandBox from '../../features/sandbox/sandBox';

export default function App() {
  
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <Navbar/>
          <Container className='main'>
            <Route path='/events' component={EventDashboard} />
            <Route path='/sandBox' component={sandBox } />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>
          </Container>
        </>
      )} 
      />
    </>
  );
}

