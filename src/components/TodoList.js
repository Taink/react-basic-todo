import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/action'
import './TodoList.css';

function TodoList({ items, todos, ...actions }) {
  return (
    <ul className='todo-list'>
      {items.map((item) => {
        const todoContent = todos[item]?.content || `[${item}]`
        const done = todos[item]?.done ? '(Y)' : '(N)' ?? '(?)'
        return <li
          className={`${todos[item]?.done ? 'striked' : ''}`}
          key={item}
          onClick={() => actions.toggleTodo(item)}
        >
          {done} {todoContent}
        </li>;
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

export default connect(mapStateToProps, { toggleTodo })(TodoList);
