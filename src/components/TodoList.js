import React from "react";
import { connect } from "react-redux";

function TodoList({ items, todos }) {
  return (
    <ul>
      {items.map((item) => {
        const todoContent = todos[item]?.content || item
        return <li key={item}>{todoContent}</li>;
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
