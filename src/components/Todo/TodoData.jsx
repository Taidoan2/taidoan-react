
const TodoData = (propsTypes) => {
    const { name, age, data } = propsTypes;
    return (
    <div className='todo-data'>
      <div> Learning React</div>
      <div> Watching Youtube</div>
      <div>my name is {name}</div>
    </div>
    )
}

export default TodoData