import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/listTask"

// initial state
const initialState ={
    tTask : [
        {id : Math.random() , description :"read redux" , isDone :false},
        {id : Math.random() , description :"learn api" , isDone :false},

    ]
}
// pure fonction
const listReducer = (state =initialState , {type , payload}) =>{
    switch(type){
        case ADD_TASK :
            return {...state , listTask : [...state.listTasks , payload ]} ;
        case DELETE_TASK :
            return{...state , listTasks : state.listTasks.filter(el =>el.id !== payload)} ;
        case DONE_TASK :
            return{...state , listTasks : state.listTasks.map((el) => (el.id === payload ? {...el ,isDone: !el.isDone} :el ))};
        case EDIT_TASK :
            return{...state , listTasks : state.listTasks.map((el) => (el.id=== payload.id ? {...el , text: payload.newTask} : el))}
            
        
            default:
                return state   
    }
}
export default listReducer;