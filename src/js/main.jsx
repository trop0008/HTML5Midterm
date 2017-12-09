/*****************************************************************
Author: Marjan Tropper
Description: 
    MAD9135 - HTML5 Midterm Assingment
    
Version: 1.0.0
Updated: Dec 07, 2017

*****************************************************************/
//imports
import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import {contacts} from './data/contacts';
import ContactDetails from './components/contactDetails.jsx'; // eslint-disable-line no-unused-vars
import ContactList from './components/contactList.jsx'; // eslint-disable-line no-unused-vars


let state = {};

//catch  hash changes
window.addEventListener('hashchange', ()=>setState({location: location.hash}));


function setState(changes){
    //set changes to object state
    state = Object.assign({}, state, changes);
    
    let item;
    let location = state.location.replace(/^#\/?|\/$/g, '').split('/');
    
    //routing
    if (location[0] === 'contact' ){
        item = state.items.find(item => item.id == location[1] ? true : false);
    }
    
    const Main = (
        <div className='wrapper'>
            <ContactList items = {state.items} />
            <ContactDetails item = {item}/>
        </div>
    ); 
    
    ReactDOM.render(Main, document.getElementById('react-app'));
}

//initial state
setState({
    items: contacts,
    location: location.hash
});