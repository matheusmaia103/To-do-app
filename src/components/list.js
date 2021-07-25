import React from 'react';
import Todo from './todo'

export default function List( { todos }){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => {
                   return  <Todo key={todo.id} todo={todo}/>
                })}
            </ul>
        </div>    
    )
}