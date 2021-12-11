import React from "react";
import GetData from "./src/GetData";


function CarsList(){

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem todo={todo} key ={todo.id} index={index} onChange={props.onToggle} />
      })}
    </ul>
  )
}

GetData();
export default TodoList
}

export default CarsList