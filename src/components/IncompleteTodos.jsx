import React from "react";

// export const IncompleteTodos = () => {
export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* {incompleteTodos.map((todo) => { */}
        {/* {incompleteTodos.map((todo, index) => { */}
        {todos.map((todo, index) => {
          return (
            // <div className="list-row">
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* <button>完了</button> */}
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* <button>削除</button> */}
              {/* <button onClick={onClickDelete}>削除</button> */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
