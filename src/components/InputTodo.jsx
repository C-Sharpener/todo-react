import React from "react";

const style = {
  // background-color: #c1ffff;
  backgroundColor: "#c1ffff",
  // width: 400px;
  width: "400px",
  // height: 30px;
  height: "30px",
  // padding: 8px;
  padding: "8px",
  // margin: 8px;
  margin: "8px",
  // border-radius: 8px;
  borderRadius: "8px"
};

// export const InputTodo = () => {
export const InputTodo = (props) => {
  // const { todoText, onChange, onClick } = props;
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // <div className="input-area">
    <div style={style}>
      {/* <input
        placeholder="TODOを入力"
        value={todoText}
        // onChange={onChangeTodoText}
        onChange={onChange}
      /> */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        // onChange={onChangeTodoText}
        onChange={onChange}
      />
      {/* <button>追加</button> */}
      {/* <button onClick={onClickAdd}>追加</button> */}
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
