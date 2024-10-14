import { nanoid } from "nanoid";
import { Todo } from "../types/todo";

export const updateLocalStorage = (updatedTodos: Todo[]) =>
  localStorage.setItem("todos", JSON.stringify(updatedTodos));

export const createNewTodo = (name: string) => ({
  id: nanoid(),
  text: name,
  completed: false,
});
