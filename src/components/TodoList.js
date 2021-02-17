import React from "react";
import { useRecoilValue } from "recoil";

// Components
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";

import { filteredTodoListState } from "../atoms/todoListState";

function TodoList() {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}

export default TodoList;
