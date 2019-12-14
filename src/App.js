import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Col,Row} from 'react-bootstrap';
import TaskList from './Components/TaskList';
import ButtonComponent from './Components/ButtonComponent';
import MessageComponent from './Components/MessageComponent';

const taskList = [
  {id: 1,"details": "Do laundry","completed": false},
  {id: 2,details: "Do grocery",completed: false},
  {id: 3,details: "Do dishes",completed: false},
  {id: 4,details: "Go to gym",completed: false},
  {id: 5,details: "Reading",completed: false},
  {id: 6,details: "Pick the kids",completed: false},
  {id: 7,details: "Car wash",completed: false},
  {id: 8,details: "Go for a run",completed: false},
  {id: 9,details: "Do grocery2",completed: false},
  {id: 10,details: "Do laundry2",completed: false},
  {id: 11,details: "Do grocery3",completed: false},
  {id: 12,details: "Do grocery4",completed: false},
 ];

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {taskList : taskList,tasks :[],counter: 0,style:{display :"none"}};
    this.done = this.done.bind(this);
    this.showMore = this.showMore.bind(this);
  }
  
  componentDidMount(){
    let {taskList, counter} = this.state; 
    let tasks = taskList.slice(0,5);
    this.setState({tasks : tasks, counter : counter + 5});
  }

  showMore = ()=>{
    let {taskList,counter} = this.state; 
    let tasks = counter < taskList.length ? 
      taskList.slice(0 , counter + 5) : 
      "";
    if(tasks.length > 0){
      this.setState({tasks : tasks,counter : counter + 5})
    }else{
      this.setState({style :{display: "block"},counter : counter + 5})
    }  
  }

  done = (id)=>{
    let {tasks} = this.state;
    let updatedTaskList =  tasks.map((val, index)=>{
        if((val.id).toString() === id){
          val.completed = true;
        }
        return val;
     })
  this.setState({tasks : updatedTaskList});
    
  }

  render(){
    return (
      <div className="app">
      <Row>
        <Col><h4>My tasks todo</h4></Col>
        <Col><ButtonComponent text ="Show more" click={this.showMore}/></Col>
      </Row>  
        <TaskList done = {this.done} list = {this.state.tasks}/>
        <br/>
        <MessageComponent style ={this.state.style}/>
      </div>
    )
  }
}

export default App;
