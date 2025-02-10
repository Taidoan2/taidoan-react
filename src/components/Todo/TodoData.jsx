
const TodoData = (propsTypes) => {
    const {todoList} = propsTypes;
    console.log("check props", todoList);
    return (
    <div className='todo-data'>
      {todoList.map((item, index)=> {
        return (
          <div className="todo-item">
            <div>{item.name}</div>
            <button>DELETED</button>
          </div>
        )
      })}
     
      
      <div>
        {JSON.stringify(propsTypes.todoList)}
      </div>
    </div>
    )
}

export default TodoData