import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {  Menu, Container, Button } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function Navbar({setFormOpen}) {

    const history = useHistory(); 
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut() {
       setAuthenticated(false);
       history.push('/'); 
    }

    return (
       <Menu inverted fixed='top'>
           <Container>
               <Menu.Item exact as={NavLink} to={'/'} header>
                   Re-vents
               </Menu.Item>
               <Menu.Item as={NavLink} to={'/events'} name='Events' />

               {authenticated && 
               <Menu.Item as={NavLink} to={'/createEvent'}>
                   <Button 
                   onClick={() => setFormOpen(true)}
                   inverted 
                   positive 
                   content='Create Event'
                   />
               </Menu.Item>}

               {authenticated ? <SignedInMenu signOut={handleSignOut}/> :  <SignedOutMenu setAuthenticated={setAuthenticated} /> }
               
             
           </Container>
       </Menu>
    )
}