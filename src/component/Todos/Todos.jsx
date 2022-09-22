import React from 'react'
import Todo from '../Todo/Todo'
import './Todos.css'
import { useEffect } from 'react'
import { useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <div>
            <h1>Todo Api call</h1>
            <div className='container'>
                {
                    todos.map(todo => <Todo id={todo.id} title={todo.title} key={todo.id} />)
                }
            </div>
        </div>
    )
}

export default Todos