import { useState } from "react";

const TodoNew = (propsTypes) => {
  
  // const valueInput = "taidoan"
  
  const [valueInput, setValueInput] = useState("taidoann")

  const {addNewTodo} = propsTypes;

  // addNewTodo("tai")
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("")
    
  }
  const handleOnChange = (name) => {
    setValueInput(name)
  }
    return (
    <div className='todo-new'>
      <input type="text" 
      onChange = {(event) => {handleOnChange(event.target.value)}}
      value={valueInput} 
       />
      <button 
      onClick={handleClick} 
      style={{cursor: 'pointer'}}>
        Add</button>
        <div>
          my text input is = {valueInput}
        </div>
    </div>
    )
}

export default TodoNew