import { useState, useEffect, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Checkbox } from "./form/Checkbox";
import { Todo } from "../types/todo";
import { useTodosManagement } from "../hooks/useTodosManagement";

interface TodoItemProps {
  todo: Todo;
}

const ANIMATION_LENGTH = 500;

const TodoItem = ({ todo }: TodoItemProps): JSX.Element => {
  const [isFading, setIsFading] = useState(false);
  const { removeTodo, toggleTodo } = useTodosManagement();

  const timeoutIdRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const handleDelete = () => {
    setIsFading(true);
    timeoutIdRef.current = window.setTimeout(() => {
      removeTodo(todo.id);
    }, ANIMATION_LENGTH);
  };

  return (
    <li
      className={`flex justify-between items-center mb-2 transition-transform duration-300 ${
        isFading ? "animate-fadeOut" : ""
      }`}
    >
      <div className="flex items-center">
        <Checkbox
          checked={todo.completed}
          handleChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? "text-primary" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className={`text-gray-400 ${isFading ? "cursor-not-allowed" : ""}`}
        disabled={isFading}
      >
        <AiFillDelete />
      </button>
    </li>
  );
};

export default TodoItem;
