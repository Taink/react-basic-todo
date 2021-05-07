import React from "react";
import {connect} from "react-redux";

function TodoList({items}){
  return (
    <ul>
      {items.map((item)=>{
        return <li>{item}</li>;
      })}
    </ul>
  );
}

const mapStateToProps = function (state){
  return{items:state.items};
};

export default connect(mapStateToProps)(TodoList);