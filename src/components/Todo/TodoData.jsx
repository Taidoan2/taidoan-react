
const TodoData = (propsTypes) => {
    const { name, age, data } = propsTypes;
    return (
    <div className='todo-data'>
      <div> Learning React {data}</div>
      <div> Watching Youtube {age}</div>
      <div>my name is {name}</div>
    </div>
    )
}

export default TodoData