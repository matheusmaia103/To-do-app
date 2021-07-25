import React from 'react';

export default function Todo ({ todo }){
    return(
        <div className='todo' id={todo.id}>
            <li className='todo-item'>
                {todo.text}
            </li> 
                <button 
                className='complete-btn'
                //onClick={completeTodo}
                >
                    <i className="fas fa-check"></i>
                </button>
                <button 
                className='trash-btn'
                //onClick={removeTodo}
                >
                    <i className="fas fa-trash"></i>
                </button>
        </div>
    )
}