import React, { useState } from 'react';
import SubmitForm from './SubmitForm';
// /* Code credits: Wilstaley https://codepen.io/wilstaley/pen/KKwypJW */

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const handleSubmit = task => {
    setTasks([...tasks, task])

  }

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  return (
    <div className='wrapper'>
      <div className='card frame'>
        <Header numTodos={tasks.length} />
        <TodoList tasks={tasks} onDelete={handleDelete} />
        <SubmitForm onFormSubmit={handleSubmit} />
      </div>
    </div>
  );
}

const Header = (props) => {
  return (
    <div className='card-header'>
      <h1 className='card-header-title header' data-testid="todo-item-number">
        Number of Todos: {props.numTodos}
      </h1>
    </div>
  )
}

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todos content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return (
    <div className='list-wrapper' data-testid={'todolist'} >
      {todos}
    </div>
  );
}

const Todos = (props) => {
  return (
    <div className='list-item'  data-testid={props.id} >
      {props.content}
      <button class="delete is-pulled-right" data-testid={`delete-todo-${props.id}-button`} onClick={() => { props.onDelete(props.id) }}></button>
    </div>
  );
}

export default Todo;

