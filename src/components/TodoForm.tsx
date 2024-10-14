import { useState, KeyboardEvent } from "react";
import { useTodosManagement } from "../hooks/useTodosManagement";

const TodoForm = (): JSX.Element => {
  const [text, setText] = useState("");
  const { addTodo } = useTodosManagement();

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="mb-4 ">
      <div className="relative">
        <input
          type="text"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="font-semibold border p-2 pl-4 rounded-custom w-full pr-10 h-12"
          placeholder="Add a new task"
        />
        <img
          onClick={handleAddTodo}
          src="/assets/add.svg"
          alt="Add icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoForm;
