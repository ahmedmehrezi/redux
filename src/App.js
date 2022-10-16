import React from "react";
import ListT from "./components/listTask/ListeT";
import './App.css';
import Add_Task from './components/AddTask/AddTask'

function App() {
  return(
    <div className="App">
      <h1 className='titele'>TODO APP</h1>
      
      <Add_Task/>
      <ListT/>
    </div>
  )
}

export default App;