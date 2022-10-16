import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {useSelector} from 'react-redux';
import Task from '../Task/Task';

const ListT = () => {
    const list = useSelector(state => state.listReducer.tTask)
    console.log(list)
    const [status , setStatus] = useState("All")
    return(
        <div>
            <Button variant="dark" onClick={() =>setStatus("All")}>All</Button>
            <Button variant="dark" onClick={() =>setStatus("Done")}>Done</Button>
            <Button variant="dark" onClick={() =>setStatus("UnDone")}>UnDone</Button>

            
            {status==="Done"?
            list.filter(el=>(el.isDone === true))
            .map(el => (<Task task={el} key={el.id}/>))
            :status==="UnDone"?
            list.filter(el=>(el.isDone === false))
            .map(el => (<Task task={el} key={el.id}/>))
            :
            list.map(el => (<Task task={el} key={el.id}/>))
            }

        </div>
    )
}
export default ListT