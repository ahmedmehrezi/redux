import React, { useState } from "react";
import {Form ,Button, } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Actions/listTask";
import './AddTask.css'

const AddTask = () => {

    const [text , setText] = useState("")
    const dispatch  = useDispatch();

   const  handleAdd = (e) => {
        e.preventDefault()
        dispatch(addTask({id :Math.random() , text :text ,isDone :false}))
        setText("")
    }

    return(
        <Form className="add-task-container" onSubmit={handleAdd}>
        <Form.Control type="text" placeholder="add task" className="input-task" onChange={(e) => setText(e.target.value)} value={text}/>
        <Button variant="primary" type="submit" onClick={handleAdd()}>Add</Button>
        </Form>
    )
}
export default AddTask;