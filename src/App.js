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
  const [title, setTitle] = useState("To do List");


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
    getTitle()
    firstTimeHandler()
  }, []);
  
  useEffect(() => {
    stateHandler();
    save();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  
  
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
  
  
  const saveTitle = () => {
    if(localStorage.getItem("title") !== title){
      notify('Título mudado!', 'O título da página foi alterado com sucesso!', 'default', 3);
      localStorage.setItem("title", title);
    }

  }
  const getTitle = () => {
    let savedTitle = localStorage.getItem("title");
    setTitle(savedTitle);
  }
  
  
  const titleHandler = (e) =>{
    setTitle(e.target.value);
  }


  const firstTimeHandler = () => {
    if(localStorage.getItem("firstTime") === null){
      store.addNotification({
        title: 'Bem vindo!',
        message: 'É a sua primeira vez aqui!',
        type: 'success',
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated animate__backInDown"],
        animationOut: ["animate__animated animate__backOutUp"],
        dismiss: {
          duration: 3 * 1000,
          onScreen: true,
          pauseOnHover: true,
          showIcon: true
        }
      });
      localStorage.setItem("firstTime", false);
    }

  }

  const notify = (title, message, type, seconds) =>{
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated animate__backInRight"],
      animationOut: ["animate__animated animate__backOutRight"],
      dismiss: {
        duration: seconds * 1000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true
      }
    });
  }

  console.clear()

  return (
    
    <div className="App">
      <ReactNotification />

     <div class="center">
     
      <div class="container">
      <header className="App-header">        
        <input 
        type="text" 
        value={title}
        onChange={titleHandler}
        onBlur={saveTitle}
        className='title'/>        
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
      setFilteredToDos={setFilteredToDos}
      setInputText={setInputText}
      status={status} 
      notify={notify}
      />
      </div>
      
     </div>
    </div>
  );
}

export default App;
