import React from 'react';

export default function Form({ inputText, setInputText, todos, setTodos, status, setStatus }){
    
    const inputTextHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value)
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: (Math.random() * 1000).toFixed(0),
            }
        ]);
        setInputText("");

        console.log("Todo saved!");

    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
        
    }
    
    return(
        <form>
            <input 
            type="text" 
            className="todo-input" 
            onChange = {inputTextHandler}
            value = {inputText}
            />

            <button 
            className="todo-button" 
            type="submit"
            onClick={submitToDoHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>

            <div 
            className="select"
            onChange={statusHandler}
            >
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}