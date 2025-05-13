import styles from './list.module.css'

const List = ({ task, todoList, setTodoList}) => {

  const divClass = `${styles.task} ${styles.taskItem}`
  const inputClass = `${styles.taskText} ${styles.checkboxInput}`

  return (
    <div className={divClass}>
      <input 
      type='checkbox' 
      id={task.id}
      onChange={() => defineCheckbox(task, todoList, setTodoList)}
      className={inputClass}
      checked={task.completed}
       />
      <label htmlFor={task.id} className={styles.checkboxCircle}>{task.name}</label>
      <button 
      className={styles.eliminateTaskButton}
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

const defineCheckbox = (task, todoList, setTodoList) => {
  const taskId = task.id

  const taskCompleted = todoList.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed
      }
      return task
    });
  
  setTodoList(taskCompleted)

}



export default List;
