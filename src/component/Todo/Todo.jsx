import React from 'react'
import './Todo.css'
const Todo = (props) => {
    return (
        <div className='Todo'>
            <h1>Id: {props.id}</h1>
            <h1><small>Title: {props.title}</small></h1>
        </div>
    )
}

export default Todo