import {ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK} from '../ActionTypes/listTask'
export const addTask = (newTask) =>{
    return{
      type :ADD_TASK  ,
      payoad : newTask
    }
    

}
export const deleteTask = (id) =>{
    return{
        type : DELETE_TASK ,
        payload : id
    }
}

export const doneTask = (id) =>{
    return{
        type : DONE_TASK,
        paylode : id 
    }
}
 export const editTask = (id , newtask) =>{
    return{
        type : EDIT_TASK,
        payload : {id , newtask}
    }
 }