import React from 'react';
import './App.css';
import Input from './containers/InputContainer';
import TodoList from './containers/TodoListContainer';

const App = () => (
  <React.Fragment>
    <Input />
    <TodoList />
  </React.Fragment>
);

export default App;
