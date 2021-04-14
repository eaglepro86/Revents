import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function EventListAtendee({atendee}) {
    return (
        <List.Item>
            <Image size='mini' circular src={atendee.photoURL}/>
        </List.Item>
    )
}