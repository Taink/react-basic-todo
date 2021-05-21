import React from 'react'
import { connect } from 'react-redux'
import TodoTask from './TodoTask'
import './TodoList.css';

function TodoList({ items, todos }) {
  return (
    <ul className='todo-list'>
      {items.map((item) => {
        return <TodoTask key={item} todo={todos[item]} item={item} />;
      })}
    </ul>
  );
}

const mapStateToProps = function (state) {
  const todos = state || {}
  return {
    items: todos?.allIds || [],
    todos: todos?.allTodos || {},
  };
};

export default connect(mapStateToProps)(TodoList);
