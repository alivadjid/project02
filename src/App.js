import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, comleted: false, title: 'Изучить react'},
    {id: 2, comleted: true, title: 'Изучить redux'},
    {id: 3, comleted: false, title: 'Изучиь node'}
  ])

  function toggleTodo(id){
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.comleted = !todo.comleted
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo=> todo.id !== id))
  }

  function  addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      comleted: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        < AddTodo onCreate={addTodo}/>
        { todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos</p>}
        
      </div>
    </Context.Provider>
    
  )
}

export default App;
