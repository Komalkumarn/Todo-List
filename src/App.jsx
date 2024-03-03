import {useState} from 'react'
import "./App.css"
import TodoList from './TodoList.jsx';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    console.log(e.target.value)
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task].filter((todo) =>{return todo.length > 0})
    console.log(newTodos)
    setTodos(newTodos);
    setTask("");
  }


  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
    console.log(indexValue, newTodos)
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Will you be my permanent roommate?</h2>
              <input type="text" name="task" placeholder="Pls type yes...." value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <div onClick={submitHandler} className="Enter" > Enter </div>
            <TodoList todoList ={todos} deleteHandler={deleteHandler}/>
          </div>
        </div> 
      </center>
    </div>
  )
}

export default App