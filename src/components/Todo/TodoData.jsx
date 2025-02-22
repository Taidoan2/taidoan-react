
const TodoData = (propsTypes) => {
    const {todoList,deleteTodo} = propsTypes;
    

    const handleClickDelete = (id) => {
      deleteTodo(id)
    } 



    return (
    <div className='todo-data'>
      {todoList.map((item)=> {
        return (
          <div className={`todo-item`} key = {item.id}>
            <div>{item.name}</div>
            <button onClick={() => handleClickDelete (item.id)} style={{cursor: 'pointer'}}>DELETED</button>
          </div>
        )
      })}
     
      
      
    </div>
    )
}

export default TodoData