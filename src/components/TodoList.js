import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, doneItem, deleteItem }) => (
  <section className="todo-list">
    <h2 className="todo-list__h-todo">To Do</h2>
    <h2 className="todo-list__h-done">Done <FaCheckCircle /></h2>
    {todoList.map(item => (
      <TodoItem key={item.id} item={item} doneItem={doneItem} deleteItem={deleteItem} />
    ))}
  </section>
);

export default TodoList;
