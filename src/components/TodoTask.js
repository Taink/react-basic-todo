import React from "react";
import {connect} from "react-redux";

function TodoTask ({item}) {
  return(
    <li className="todo-item">
      {item}
    </li>
  );
}