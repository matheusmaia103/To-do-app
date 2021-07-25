import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">        
        To do List        
      </header>

      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      />

      <List
      todos={todos} 
      setTodos={setTodos}
      filteredToDos={filteredToDos}
      setFilteredToDos={setFilteredToDos}
      />
      
    </div>
  );
}

export default App;
