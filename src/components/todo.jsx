import React from 'react';

export default function Todo ({ todos, setTodos, todo }){

    const deleteHandler = (e) => {
        e.target.parentElement.classList.remove("completed");    
        e.target.parentElement.classList.add("deleting");    
        setTimeout(function(){
            setTodos(todos.filter((el) => el.id !== todo.id));
        }, 600)
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
        className= {` ${todo.completed === true ? 'completed' : ''} todo`}
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