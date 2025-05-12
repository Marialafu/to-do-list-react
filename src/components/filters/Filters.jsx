import styles from './filters.module.css'

const Filters = ({todoList, setTodoList}) => {

    const firstSectionClass = `${styles.task} ${styles.tasksList}`
    const firstSecctionContentClass = `${styles.bottomTaskText} ${styles.button}`

    const filtersContainerClass = `${styles.task} ${styles.filters} ${styles.borderRadius}`
    const filterUnselectedClass = `${styles.button} ${styles.filterText}`
    const filterSelectedClass = `${styles.button} ${styles.filterText} ${styles.buttonSelected}`
    
    return (
        <>
        <section className={firstSectionClass}>
            <span className={styles.bottomTaskText}
            >{todoList.length} items left</span>
            <button className={firstSecctionContentClass}
            onClick={() => clearCompletedTasks(todoList, setTodoList)}>Clear completed</button>
          </section>

          <section className={filtersContainerClass}
          onClick={event => generateFilteredList(event, todoList, setTodoList)}>
            <button name="all" className={filterSelectedClass}>All</button>
            <button name="active" className={filterUnselectedClass}>Active</button>
            <button name="completed" className={filterUnselectedClass}>Completed</button>
          </section>
        
        </>
    )
}

const clearCompletedTasks = (todoList, setTodoList) => {
  const tasksList = todoList.filter(task => {
    return !task.completed;
  });
  
  setTodoList(tasksList)
};

const generateFilteredList = (event, todoList, setTodoList) => {
    let listSelected = event.target.name

    if (listSelected === 'all'){
        setTodoList(todoList)
    } else if (listSelected === 'completed'){
        let completedList = todoList.filter(task => task.completed)
        //como se añade una clase
        console.log(event.target.classList.add());
        

    } else if (listSelected === 'active'){
        let completedList = todoList.filter(task => !task.completed)
    }
  
  console.log(event.target.name);
  
};

export default Filters