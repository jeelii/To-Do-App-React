import './TodoList.css';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, doneItem, deleteItem }) => (
  <section className='app__section todo-list'>
    <h2 className='todo-list__heading'>To Do</h2>
    {todoList.length > 0
      ? <h2 className='todo-list__heading todo-list__heading-done'>Done <span className='todo-list__heading-icon'>
        <FaCheckCircle />
      </span></h2>
      : <p>Your todo-list is empty. Please add new tasks above.</p>
    }
    {todoList.map(item => (
      <TodoItem key={item.id} item={item} doneItem={doneItem} deleteItem={deleteItem} />
    ))}
  </section>
);

export default TodoList;
