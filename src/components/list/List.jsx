import styles from './list.module.css'

const List = ({ task, todoList, setTodoList}) => {
  return (
    <div className={styles.tasksList}>
      <input 
      type='checkbox' 
      id={task.id}
      onClick={() => defineCheckbox(task)}
       />
      <label htmlFor={task.id}>{task.name}</label>
      <button 
      onClick={() => deleteTask( task, todoList, setTodoList)}>x</button>
    </div>
  );
};

const deleteTask = ( eliminatedTask, todoList, setTodoList) => {

  const taskList = todoList.filter(task => {
      return eliminatedTask.id !== task.id;
    });
  
  setTodoList(taskList)
}

const defineCheckbox = (task) => {
  task.completed = !task.completed
}



export default List;
