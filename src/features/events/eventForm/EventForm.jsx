import cuid from 'cuid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Form, Button } from 'semantic-ui-react';


export default function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) {

    const initialValues = selectedEvent ??  {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    }

    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {

        selectedEvent ? updateEvent({...selectedEvent, ...values}) : 
        createEvent({...values, id:cuid(), hostedBy: 'bob', attendees: [], hostPhotoURL: '/assets/user.png'});
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }



    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit event' : 'Create event'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                    name='title' 
                    type='text' 
                    placeholder='event title'
                    value={values.title}
                    onChange={(e) => handleInputChange(e)}/> 
                </Form.Field>
                <Form.Field>
                    <input 
                    name='category'
                    type='text' 
                    placeholder='Category'
                    value={values.category}
                    onChange={(e) => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input 
                    name='description'
                    type='text' 
                    placeholder='Description'
                    value={values.description}
                    onChange={(e) => handleInputChange(e)} /> 
                </Form.Field>
                <Form.Field>
                    <input 
                    name='city'
                    type='text' 
                    placeholder='City'
                    value={values.city}
                    onChange={(e) => handleInputChange(e)}/> 
                </Form.Field>
                <Form.Field>
                    <input 
                    name='venue'
                    type='text' 
                    placeholder='Venue'
                    value={values.venue}
                    onChange={(e) => handleInputChange(e)}/> 
                </Form.Field>
                <Form.Field>
                    <input 
                    name='date'
                    type='date' 
                    placeholder='Date'
                    value={values.date}
                    onChange={(e) => handleInputChange(e)}/> 
                </Form.Field>
                <Button type='submit' floated='right' positive content='submit' />
                <Button 
                as={Link} to='/events'
                type='submit' 
                floated='right'  
                content='cancel'
                 />
            </Form>
        </Segment>
    )
}