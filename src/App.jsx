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
      <screenLeft>
        <div className="card">
          <div className="card-Body">
            <h5 className="card-title">Enter your full name</h5>
              <input type="text" name="task" placeholder="Your full name" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Enter your mobile number</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Enter your mail id</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Currently working hospital name</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Your location</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">College name</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Yeas of exp</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Specailazation</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Least charges for consultatiosn per head</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <h5 className="card-title">Add your cv or exp letter & good pofile picture</h5>
              <input type="text" name="task" placeholder="Please enter" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <div onClick={submitHandler} className="Enter" > Enter </div>
            <TodoList todoList ={todos} deleteHandler={deleteHandler}/>
          </div>
        </div> 
      </screenLeft>
    </div>
  )
}

export default App