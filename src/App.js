import { useState } from "react"
import ToDoForm from "./components/ToDoForm"
import UncompletedTasks from "./components/UncompletedTasks"
import CompletedTasks from "./components/CompletedTasks"
import "./styles/App.css"

function App() {
  const [todos, setTodos] = useState([])
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ])
  }
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">Список дел</h1>
      </header>
      <ToDoForm addTask={addTask} key="form" />
      <div className="tasks">
        <div className="uncompleted-tasks">
          <h3 className="heading-task">Задачи в процессе выполнения</h3>
          {todos.map((todo) => {
            if (!todo.complete)
              return (
                <ul>
                  <UncompletedTasks
                    todo={todo}
                    key={todo.id}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                  />
                </ul>
              )
            return null
          })}
        </div>
        <div className="completed-tasks">
          <h3 className="heading-task">Выполненные задачи</h3>
          {todos.map((todo) => {
            if (todo.complete)
              return (
                <ul>
                  <CompletedTasks
                    todo={todo}
                    key={todo.id}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                  />
                </ul>
              )
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default App
