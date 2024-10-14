import TodoItem from "./TodoItem";
import { useTodosManagement } from "../hooks/useTodosManagement";

const pickedStyles = "bg-primary text-white";
const customStyles =
  "border bg-white text-primary transition duration-300 ease-in-out hover:bg-primary-300 hover:text-white";

const getButtonStyles = (isPicked: boolean) =>
  isPicked ? pickedStyles : customStyles;

const TodoList = (): JSX.Element => {
  const { filteredTodos, showAll, toggleShowAll } = useTodosManagement();

  return (
    <div>
      <div className="flex mb-4 justify-between">
        <button
          onClick={() => toggleShowAll(true)}
          className={`font-semibold rounded-custom h-9 w-32 ${getButtonStyles(
            showAll
          )}`}
        >
          Show all
        </button>
        <button
          onClick={() => toggleShowAll(false)}
          className={`font-semibold rounded-custom h-9 w-36 ${getButtonStyles(
            !showAll
          )}`}
        >
          Hide completed
        </button>
      </div>
      <ul className="rounded-custom border p-6 shadow-custom">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <li className="text-center text-gray-500 py-4">
            Tasks list is empty
          </li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
