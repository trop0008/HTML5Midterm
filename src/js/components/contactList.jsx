/*****************************************************************
Author: Marjan Tropper
Description: 
    MAD9135 - HTML5 Midterm Assingment
    
Version: 1.0.0
Updated: Dec 07, 2017

*****************************************************************/
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import {formatName, formatDOB} from '../helpers/helpers';

export default class ContactList extends Component {
    render() {
        return (
            <div className='container contactlist'>
                
                <ul>
                    {this.props.items.map( item => (
                        <li key={item.key} >
                            <a href={'#contact/' + item.id}> 
                                <figure>
                                    <img src={item.picture.thumbnail} alt={formatName(item.name)} />
                                    <figcaption>
                                        <p>{formatName(item.name)}</p>
                                        <span>{formatDOB(item.dob)}</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ContactList.propTypes = {
    items: PropTypes.array
};