import React from 'react';
import {Menu, Button} from 'semantic-ui-react';


export default function SignedOutMenu({setAuthenticated}) {
    return (
    <Menu.Item position='right'>
        <Button onClick={() => setAuthenticated(true)} inverted positive content='Login'/>
        <Button inverted positive content='Register' style={{marginLeft: '0.5em'}}/>
    </Menu.Item>
    )
}
