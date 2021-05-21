import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../redux/action'

function TodoTask({ todo, item, ...actions }) {
  const content = todo?.content || `[${item}]`
  const done = Boolean(todo?.done)

  return (
    <li
      className={`${done ? 'striked' : ''}`}
      onClick={() => actions.toggleTodo(item)}
    >
      {content}
      <button onClickCapture={()=> actions.removeTodo(item)}>Delete</button>
    </li>
  );
}

export default connect(
  null,
  { toggleTodo, removeTodo }
)(TodoTask);
