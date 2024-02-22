import { useRef } from "react";
import { BiSolidMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const objectContext = useContext(TodoItemsContext);
  const addItem = objectContext.addItem;

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dateName = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addItem(todoName, dateName);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          ></input>
        </div>

        <div className="col-4">
          <input type="date" ref={todoDateElement}></input>
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
          <BiSolidMessageAdd />
          </button>
        </div>
      </form>
      <br></br>
    </div>
  );
}
export default AddTodo;



