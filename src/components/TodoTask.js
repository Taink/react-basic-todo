import React from "react";
import {connect} from "react-redux";

function TodoTask ({items,todos, ...actions}) {
  return(
    //const todoContent = todos[item]?.content || `[${item}]`
    //const done = todos[item]?.done ? '(Y)' : '(N)' ?? '(?)'
    <li key = {item} onClick={() => actions.toggleTodo(item)}>{done}
    {todoContent}
    </li>
  );
}



export default connect(
  null,
  {toggleTodo}
)(TodoTask);