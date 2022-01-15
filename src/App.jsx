import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  // const [incompleteTodos, setIncompleteTodos] = useState([
  //   "ああああ",
  //   "いいいい"
  // ]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // const [completeTodos, setCompleteTodos] = useState(["うううう"]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // alert(todoText);
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert("削除！");
    // alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // alert(index);
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      {/* <div className="input-area"> */}
      {/* <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        /> */}
      {/* <button>追加</button> */}
      {/* <button onClick={onClickAdd}>追加</button> */}
      {/* </div> */}
      {/* <InputTodo/> */}
      {/* <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      /> */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo5個までだよ～。消化しろ～。
        </p>
      )}
      {/* <div className="incomplete-area"> */}
      {/* <p className="title">未完了のTODO</p> */}
      {/* <ul> */}
      {/* {incompleteTodos.map((todo) => { */}
      {/* {incompleteTodos.map((todo, index) => { */}
      {/* return ( */}
      {/* // <div className="list-row"> */}
      {/* <div key={todo} className="list-row"> */}
      {/* <li>{todo}</li> */}
      {/* <button>完了</button> */}
      {/* <button onClick={() => onClickComplete(index)}>完了</button> */}
      {/* <button>削除</button> */}
      {/* <button onClick={onClickDelete}>削除</button> */}
      {/* <button onClick={() => onClickDelete(index)}>削除</button> */}
      {/* </div> */}
      {/* ); */}
      {/* })} */}
      {/* </ul> */}
      {/* </div> */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* <div className="complete-area"> */}
      {/* <p className="title">完了のTODO</p> */}
      {/* <ul> */}
      {/* {completeTodos.map((todo) => { */}
      {/* {completeTodos.map((todo, index) => { */}
      {/* return ( */}
      {/* // <div className="list-row"> */}
      {/* <div key={todo} className="list-row"> */}
      {/* <li>{todo}</li> */}
      {/* <button>戻す</button> */}
      {/* <button onClick={() => onClickBack(index)}>戻す</button> */}
      {/* </div> */}
      {/* ); */}
      {/* })} */}
      {/* </ul> */}
      {/* </div> */}
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
