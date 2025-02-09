import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {

  const name = "anhtai";
  const age = 27;
  const data = {
    address: "quangngai",
    country: "vietnam"
  }
  return (
  <div className="todo-container">
  <div className="todo-title">Todo List</div>
    <TodoNew />
    <TodoData 
      name = {name}
      age = {age}
      data = {data}  // object data
    />
    <div className='todo-image'>
    <img className='logo' src={reactLogo}/>
    </div>
    </div>
  )
}


export default App