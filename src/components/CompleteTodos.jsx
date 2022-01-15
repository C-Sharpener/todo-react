import React from "react";

// export const CompleteTodos = () => {
export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {/* {completeTodos.map((todo) => { */}
        {/* {completeTodos.map((todo, index) => { */}
        {todos.map((todo, index) => {
          return (
            // <div className="list-row">
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* <button>戻す</button> */}
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
