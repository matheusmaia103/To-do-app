import React from 'react';

export default function Todo ({ draggableProps, dragHandleProps, Ref, todos, setTodos, todo, notify }){

    const editHandler = e => {
        try{
            const button = e.target;
            const divBtns = button.parentElement;
            const div = divBtns.parentElement;
            const input = div.querySelector("input.todoText");

            input.removeAttribute("disabled");
            input.focus();


        }  catch (error){
            notify(error.name, error.message, "danger", 4)
        }
    }

    const textChangeHandler = e => {
        try{
            const input = e.target;
            const editedText = input.value;
            const Id = input.getAttribute("id");

            setTodos(
                todos.map((todo) => {
                    if(todo.id === Id){
                        todo.text = editedText.trim();
                        return todo
                    }
                    return todo
                })
            )

                            
            console.log(editedText);

        } catch(error){
            notify(error.name, error.message, "danger", 4)
        }

    }

    const blurHandler = e =>{
            try{
                e.target.setAttribute("disabled", true);
                notify('Tarefa alterada com sucesso!', `O texto da tarefa foi alterado para ${e.target.value}`, 'success', 3 )
                
            }   catch(error){
                notify(error.name, error.message, "danger", 4)
            }
        }

    const formSubmitHandler = e =>{
        try{
            e.preventDefault();
            e.target.querySelector("input.todoText").blur()
        }   catch(error){
            notify(error.name, error.message, "danger", 4)
        }
    }
    const deleteHandler = (e) => {
        e.target.parentElement.parentElement.classList.remove("completed");    
        e.target.parentElement.parentElement.classList.add("deleting");    
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

    
    return(
        <div 
        {...draggableProps}
        {...dragHandleProps}
        ref={Ref}
        className= {`todo ${todo.completed === true ? 'completed' : ''}  ${todo.id}`}
        id={todo.id}>

            <input
            type="checkbox" 
            value="completed"
            checked = {todo.completed}
            onChange={completeHandler}

            />
            <li className='todo-item'>
            
            <form action="#"
            //id={todo.id}
            onSubmit={formSubmitHandler}
            >
                <input
                type="text"
                defaultValue = {todo.text}
                id={todo.id}
                className="todoText"
                onChange={textChangeHandler}
                onBlur={blurHandler}
                disabled

            />
            </form>
            </li>
                <div className="btns">
                <button 
                className={`edit-btn ${todo.id}`}
                onClick={editHandler}
                >
                    <i className={`fas fa-pen ${todo.id}`}></i>
                </button>

                <button 
                className='trash-btn'
                onClick={deleteHandler}
                >
                    <i className="fas fa-trash"></i>
                </button>
                </div>
        </div>
    )
}