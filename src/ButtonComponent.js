import React from 'react';
import {Button} from 'react-bootstrap';

const ButtonComponent = (props)=>(
    <Button value ={props.text} onClick ={props.click} variant ="primary">{props.text}</Button>
)

export default ButtonComponent;