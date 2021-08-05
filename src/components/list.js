import React from 'react';
import Todo from './todo';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


export default function List( { todos, setTodos, filteredToDos, setFilteredToDos,  setInputText, status, notify}){

    

    function handleOnDragEnd(result){
        if(!result.destination) return;
        const items = Array.from(filteredToDos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)
        setFilteredToDos(items);
        setTodos(items);
        
    }
    return(
        <div className="todo-container">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="list"> 
                    {(provided) =>(
                        <ul className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {filteredToDos.map((todo, index) => {
                            return  (
                            <Draggable
                            key={todo.id}
                            draggableId={todo.id} 
                            index={index}
                            >
                                {(provided) => (
                                        <Todo
                                        draggableProps={{...provided.draggableProps}}
                                        dragHandleProps={{...provided.dragHandleProps}}
                                        Ref={provided.innerRef}
                                        todos={todos} 
                                        setTodos={setTodos} 
                                        todo={todo}
                                        setInputText={setInputText}
                                        notify={notify}

                                        
                                        />
                                )}
                            </Draggable>
                            )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>    
        </div>    
    )
}