import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/action'

function TodoTask({ todo, item, ...actions }) {
  const content = todo?.content || `[${item}]`
  const done = Boolean(todo?.done)

  return (
    <li
      className={`${done ? 'striked' : ''}`}
      onClick={() => actions.toggleTodo(item)}
    >
      {content}
      <button onClick={()=> actions.removeTodo(item)}></button>
    </li>
  );
}

export default connect(
  null,
  { toggleTodo }
)(TodoTask);
