import './style';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import AddTodoItem from './components/addTodoItem/AddTodoItem';
import TodoList from './components/todoList/TodoList';

const App = () => {
  const [todoList, setTodoList] = useState(localStorage.todos
    ? JSON.parse(localStorage.todos)
    : []);

  useEffect(() => {
    localStorage.todos = JSON.stringify(todoList);
  }, [todoList]);

  const nextId = arr => (arr.length > 0
    ? arr[arr.length - 1].id + 1
    : 1);

  const addToList = item => {
    setTodoList([...todoList, {
      id: nextId(todoList),
      done: false,
      title: item.title.trim(),
      details: item.details.trim(),
    }]);
  };

  const doneItem = item => {
    setTodoList(todoList.map(task => (task.id === item.id
      ? { ...task, done: !task.done }
      : task)));
  };

  const deleteItem = item => {
    setTodoList(todoList.filter(task => task.id !== item.id));
  };

  return (
    <div className='app'>
      <Header />
      <main className='app__main'>
        <AddTodoItem addToList={addToList} />
        <TodoList todoList={todoList} doneItem={doneItem} deleteItem={deleteItem} />
      </main>
    </div>
  );
};

export default App;
