import React from 'react';
import { Icon, Item, ItemContent, Segment, List, Button } from 'semantic-ui-react';
import EventListAtendee from './EventListAtendee';

export default function EventListItem({event, selectEvent, deleteEvent}) {
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <ItemContent>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </ItemContent>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
              <span>
                  <Icon name='clock'/>{event.date}
                  <Icon name='marker'/>{event.venue}
              </span>  
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAtendee key={attendee.id} atendee={attendee}/>

                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>
                    {event.description}
                </div>
                <Button onClick={() => deleteEvent(event.id)} color='red' floated='right' content='Delete' />
                <Button onClick={() => selectEvent(event)} color='teal' floated='right' content='View' />
            </Segment>
        </Segment.Group>
    )
}