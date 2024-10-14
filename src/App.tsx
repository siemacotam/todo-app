import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 w-container py-32">
        <div className="max-w-custom mx-auto">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
