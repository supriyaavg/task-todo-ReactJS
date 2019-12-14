import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props)=>{
    const completedIt = (e)=>{
        props.done(e.target.id);
     };
    
    return( 
        <input id = {props.id} onChange = {completedIt} type = {props.type} className = {props.className}/>
    )
}

CheckBox.propTypes = {
    type: PropTypes.string,
    id: PropTypes.number.isRequired, 
    done: PropTypes.func.isRequired,
}

export default CheckBox;