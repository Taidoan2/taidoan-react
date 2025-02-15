import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "Watching Youtube"},
  ])

 

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1,100000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo)
    
  }

  const randomIntFromInterval =(min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  return (
  <div className="todo-container">
  <div className="todo-title">Todo List</div>
    <TodoNew 
    addNewTodo = {addNewTodo}
    />

    {todoList.length > 0 ?
      <TodoData 
      
      todoList = {todoList}
      deleteTodo = {deleteTodo}  // object data
    />
    :
      <div className='todo-image'>
    <img className='logo' src={reactLogo}/>
    </div>
}

    {/* {todoList.length > 0 &&
      <TodoData 
      
      todoList = {todoList}
        // object data
    />}
    {todoList.length === 0 &&
      <div className='todo-image'>
    <img className='logo' src={reactLogo}/>
    </div>
    } */}
    
    </div>
  )
}


export default App