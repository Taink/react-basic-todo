import React from 'react'

import TodoList from './components/TodoList'
import AddTodo from "./components/AddTodo"

function App() {
    return (
        <>
            <h1>Todo App</h1>
            <TodoList />
            <AddTodo />
        </>
    )
}

export default App
