import './AddTodoItem.css';
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const AddTodoItem = ({ addToList }) => {
  const [newItem, setNewItem] = useState({ title: '', details: '' });
  const [placeholderTitle, setPlaceholderTitle] = useState('To do');

  const validateInput = item => {
    if (!item.title || item.title.trim() === '') {
      setPlaceholderTitle('Please add task title');
      setNewItem({
        ...newItem,
        title: '',
      });
      return false;
    }
    return true;
  };

  const onSubmit = e => {
    e.preventDefault();
    if (validateInput(newItem)) {
      addToList(newItem);
      setNewItem({ title: '', details: '' });
    }
  };

  const newItemInput = e => {
    const { name } = e.target;
    setNewItem({
      ...newItem,
      [name]: e.target.value,
    });
  };

  return (
    <section className="app__section add-item-section">
      <form id="add-item-form" onSubmit={onSubmit} noValidate>
        <label htmlFor="title" className="add-item-form__label">New task</label>
        <input
          type="text"
          name="title"
          value={newItem.title}
          onChange={newItemInput}
          className="add-item-form__input"
          placeholder={placeholderTitle}
          autoComplete="off"
          required
        />
        <label htmlFor="new-task" className="add-item-form__label">Notes</label>
        <input
          type="text"
          name="details"
          value={newItem.details}
          onChange={newItemInput}
          className="add-item-form__input"
          autoComplete="off"
        />
        <button type="submit" className="button">
          <FaPlusCircle /> Add item</button>
      </form>
    </section>
  );
};

export default AddTodoItem;
