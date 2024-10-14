import { create } from "zustand";
import { createNewTodo, updateLocalStorage } from "../utils/local";
import { Todo } from "../types/todo";

interface TodoStore {
  todos: Todo[];
  dispatch: (action: TodoAction) => void;
}

export enum ActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export type TodoAction =
  | { type: ActionType.ADD_TODO; payload: string }
  | { type: ActionType.TOGGLE_TODO; payload: string }
  | { type: ActionType.DELETE_TODO; payload: string };

const initialState: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

export const useTodoStore = create<TodoStore>((set) => ({
  todos: initialState,
  dispatch: (action: TodoAction) =>
    set((state) => {
      switch (action.type) {
        case ActionType.ADD_TODO: {
          const newTodo = createNewTodo(action.payload);
          const updatedTodos = [...state.todos, newTodo];
          updateLocalStorage(updatedTodos);
          return { todos: updatedTodos };
        }
        case ActionType.TOGGLE_TODO: {
          const updatedTodos = state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          );
          updateLocalStorage(updatedTodos);
          return { todos: updatedTodos };
        }
        case ActionType.DELETE_TODO: {
          const updatedTodos = state.todos.filter(
            (todo) => todo.id !== action.payload
          );
          updateLocalStorage(updatedTodos);
          return { todos: updatedTodos };
        }
        default:
          return state;
      }
    }),
}));
