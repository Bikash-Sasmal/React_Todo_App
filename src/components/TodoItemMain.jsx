import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItemMain({ todoName, todoDate }) {
  const objectContext = useContext(TodoItemsContext);
  const onDeleteClick = objectContext.onDeleteClick;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
      <br></br>
    </div>
  );
}
export default TodoItemMain;
