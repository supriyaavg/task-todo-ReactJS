import React from 'react';
import {Row, Col,Container} from 'react-bootstrap';
import CheckBox from './CheckBox';

const TaskList = (props)=>{

    let list = props.list; 
    let taskItems = list.reduce((acc, curr, index)=>{
        acc = acc.concat(
            <Row key = {curr.id} >
                <Col lg ={3} sm ={3} md= {3} xs = {3}>
                    <CheckBox id = {curr.id} done ={props.done} type ="checkbox" className ="chkBox"/>
                </Col>
                <Col lg ={7} sm ={7} md= {7} xs = {7} className = "taskText">
                    {curr.details}
                </Col>
            </Row>
        )
        return acc;    
    },[]);
    return(
        <Container>
            {taskItems}
        </Container>
    )
}

export default TaskList;