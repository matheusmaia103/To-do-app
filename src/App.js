import React, { useState, useEffect } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component'; 
import 'animate.css';
import './App.css';
import Form from './components/form';
import List from './components/list';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);


  const stateHandler = () => {
    switch(status){
      case 'completed':
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;

      default: 
        setFilteredToDos(todos);
    }
  }

  //USE EFFECT BABY

  useEffect(() => {
    getTodos()
  }, []);

  useEffect(() => {
    stateHandler()
    save()
  }, [todos, status])


  //save in local storage
  const save = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  };

  //get from local
  const getTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  }

  const notify = (title, message, type) =>{
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated animate__fadeIn"],
      animationOut: ["animate__animated animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true
      }
    });
  }


  return (
    
    <div className="App">
      <ReactNotification />

     <div class="center">
     
      <div class="container">
      <header className="App-header">        
        To do List        
      </header>

      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      status={status}
      setStatus={setStatus}
      notify={notify}
      />

      <List
      todos={todos} 
      setTodos={setTodos}
      filteredToDos={filteredToDos}
      setInputText={setInputText}
      />
      </div>
      
     </div>
    </div>
  );
}

export default App;
