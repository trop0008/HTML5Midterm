/*****************************************************************
Author: Marjan Tropper
Description: 
    MAD9135 - HTML5 Midterm Assingment
    
Version: 1.0.0
Updated: Dec 07, 2017

*****************************************************************/
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {formatName, formatDOB, calculateAge, address, capitalizeFirst} from '../helpers/helpers';

export default class ContactDetails extends Component {
    render() {
        if (!this.props.item){
            return (
                <div className='container contactdetails'>
                    <p>Please select a contact from the list on the left.</p>
                </div>
            );
        } else {
            return (
                <div className='container contactdetails'>
                    <div>
                        
                        <img src={this.props.item.picture.large} alt={formatName(this.props.item.name)}  />
                            
                        
                    </div>
                    <div >
                        <h2>{formatName(this.props.item.name, true)}</h2>
                        <p>Date of Birth: {formatDOB(this.props.item.dob)}</p>
                        <p>Age:  {calculateAge(this.props.item.dob)} </p>
                        <p>Gender: {capitalizeFirst(this.props.item.gender)} </p>
                        <hr></hr>
                        <p>Address:</p>
                        <p>{address(this.props.item.location, 1)}</p>
                        <p>{address(this.props.item.location, 2)}</p>
                        <p>{address(this.props.item.location, 3)}</p>
                    
                        <hr></hr>
                    
                        <p>Email: <a href={'mailto:' +this.props.item.email} >{this.props.item.email}</a></p>
                        <p>Phone: {this.props.item.phone}</p>
                        <p>Cell: {this.props.item.cell}</p>
                    </div>
                    
                </div>
            );
        }
    }
}

ContactDetails.propTypes = {
    item: PropTypes.object
};