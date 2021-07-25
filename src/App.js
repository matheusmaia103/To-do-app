import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import List from './components/list';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
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
      />
      
    </div>
  );
}

export default App;
