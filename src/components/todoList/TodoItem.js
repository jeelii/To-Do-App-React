import './TodoItem.css';
import React from 'react';
import { FaCircle, FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

const TodoItem = ({ item, doneItem, deleteItem }) => {
  const toggleDone = () => {
    doneItem(item);
  };

  const triggerDelete = e => {
    e.stopPropagation();
    deleteItem(item);
  };

  return (
    <div className={`todo-item ${item.done ? 'todo-item--done' : ''}`}
      onClick={toggleDone}>
      <span className='todo-item__icon'>
        <FaCircle />
      </span>
      <span className='todo-item__icon--done'>
        <FaCheckCircle />
      </span>
      <div className={'todo-item__content'}>
        <h3 className={'todo-item__title'}>{item.title}</h3>
        <p className={'todo-item__details'}>{item.details}</p>
      </div>
      {item.done
        && <span className='todo-item__icon--delete'
          onClick={triggerDelete}>
          <FaTrashAlt />
        </span>
      }
    </div >
  );
};

export default TodoItem;
