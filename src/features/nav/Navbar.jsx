import React from 'react';
import {  Menu, Container, Button } from 'semantic-ui-react';

export default function Navbar({setFormOpen}) {
    return (
       <Menu inverted fixed='top'>
           <Container>
               <Menu.Item header>
                   Re-vents
               </Menu.Item>
               <Menu.Item name='Events' />
               <Menu.Item>
                   <Button 
                   onClick={() => setFormOpen(true)}
                   inverted 
                   positive 
                   content='Create Event'
                   
                   />
               </Menu.Item>
               <Menu.Item position='right'>
                   <Button inverted positive content='Login'/>
                   <Button inverted positive content='Register' style={{marginLeft: '0.5em'}}/>
               </Menu.Item>
           </Container>
       </Menu>
    )
}