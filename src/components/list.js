import React from 'react';
import Todo from './todo'

export default function List( { todos, setTodos, filteredToDos }){

    

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDos.map(todo => {
                   return  <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
                })}
            </ul>
        </div>    
    )
}