import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItemMain from "./TodoItemMain";

const TodoItems = () => {
  const objectContext = useContext(TodoItemsContext);
  const todoItems = objectContext.todoItems;

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItemMain
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
      ;
    </div>
  );
};

export default TodoItems;
