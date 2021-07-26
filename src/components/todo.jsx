import React from 'react';

export default function Todo ({ todos, setTodos, todo }){

    const deleteHandler = () => {    
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo);
    }   

    const completeHandler = () => {

        setTodos((todos.map((el) => {

            
            if(el.id === todo.id){
                el.completed = !el.completed;
            }
            return el
        })));
    }

    const checkbox = () => {
        if(todo.completed){
            return (
                <input
                type="checkbox" 
                onChange={completeHandler}
                checked
                />
            );
        } else {
            return (
                <input
            type="checkbox" 
            onChange={completeHandler}
            />
            )
        }
    }
    
    return(
        <div 
        className= {` todo ${todo.completed === true ? 'completed' : ''}`}
        id={todo.id}>

            {checkbox()}
            <li className='todo-item'>
            {todo.text}
            </li>
                <button 
                className='trash-btn'
                onClick={deleteHandler}
                >
                    <i className="fas fa-trash"></i>
                </button>
        </div>
    )
}