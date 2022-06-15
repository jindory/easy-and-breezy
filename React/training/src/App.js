import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import List from './List.jsx';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(['js겅부']);
  const [newTodo, setNewTodo] = useState('');

  const changeInputData = (event) => {
    setNewTodo(event.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect(()=>{
    console.log('새로운 내용이 렌더링됐네요 호호', todos);
  },[todos])


  return (
    <>
      <h1>todo 애플리케이션</h1>

      <form action="">
        <input type='text' name='' id='' onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>

      <List todos={todos}></List>
    </>
  )
}

export default App;
