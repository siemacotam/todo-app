import { useMemo, useState } from "react";
import { ActionType, useTodoStore } from "../store/useToDoStore";

export const useTodosManagement = () => {
  const { todos, dispatch } = useTodoStore();
  const [showAll, setShowAll] = useState(false);

  const filteredTodos = useMemo(
    () => (showAll ? todos : todos.filter((todo) => !todo.completed)),
    [todos, showAll]
  );

  const toggleShowAll = (option: boolean) => setShowAll(option);

  const removeTodo = (id: string) =>
    dispatch({ type: ActionType.DELETE_TODO, payload: id });

  const toggleTodo = (id: string) =>
    dispatch({ type: ActionType.TOGGLE_TODO, payload: id });

  const addTodo = (text: string) =>
    dispatch({ type: ActionType.ADD_TODO, payload: text });

  return {
    filteredTodos,
    showAll,
    toggleShowAll,
    removeTodo,
    toggleTodo,
    addTodo,
  };
};
