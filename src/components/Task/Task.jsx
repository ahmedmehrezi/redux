import React from "react";
import './Task.css';
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {deleteTask , doneTask} from '../../JS/Actions/listTask'

const Task = ({task}) =>{
    const dispatch  =  useDispatch();


    return(
            <div className="task-container">
                <span className={task.isDone ? "done" : null}>{task.text}</span>
                <Button variant="info">EDIT</Button>
                <Button variant="danger" onClick={() =>dispatch(deleteTask(task.id))}>DELETE</Button>
                <Button variant="success" onClick={() =>dispatch(doneTask(task.id))}>{task.isDone ? "UnDone" : "Done"} </Button>
            </div>
    )
}

export default  Task