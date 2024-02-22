import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./welcomeMsg.module.css";

const WelcomeMsg = () => {
  const objectContext = useContext(TodoItemsContext);
  const todoItems = objectContext.todoItems;

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};
export default WelcomeMsg;
