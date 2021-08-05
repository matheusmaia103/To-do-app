import React from 'react';

export default function Form({ inputText, setInputText, todos, setTodos, status, setStatus, notify }){
    
    const inputTextHandler = (e) => {
        e.preventDefault();
        setInputText(e.target.value)
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        if(inputText.trim() === ''){
            notify('Opa!', 'Não foi possível salvar a tarefa, parece que você não digitou nada!', 'danger', 5);
            return
        }
        setTodos([
            {
                text: inputText,
                completed: false,
                id: (Math.random() * 1000).toFixed(0),
            }, ...todos
        ]);
        setInputText("");

        notify('Tarefa salva', 'A tarefa foi salva com sucesso!', 'success', 2)
        
        
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
        
    }
    
    return(
        <form id="principal">
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
                <i className="fas fa-plus"></i>
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