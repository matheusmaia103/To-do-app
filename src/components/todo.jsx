import React from 'react';

export default function Todo ({ todos, setTodos, todo }){

    const deleteHandler = () => {        
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo);
    }   

    const completeHandler = () => {
        setTodos((todos.map((el) => {
            if(el.id === todo.id){
                console.log('Completed => ', el);
                el.completed = !el.completed;
            }
            return el
        })));
    }
    
    return(
        <div 
        className= {` todo ${todo.completed === true ? 'completed' : ''}`}
        id={todo.id}>
            <li className='todo-item'>
                {todo.text}
            </li> 
                <button 
                className={`complete-btn` }
                onClick={completeHandler}
                >
                    <i className="fas fa-check"></i>
                </button>
                <button 
                className='trash-btn'
                onClick={deleteHandler}
                >
                    <i className="fas fa-trash"></i>
                </button>
        </div>
    )
}