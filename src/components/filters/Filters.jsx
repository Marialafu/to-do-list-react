import { v4 } from 'uuid'
import styles from './filters.module.css'
import { FILTERS } from './filtersInfo' 

const Filters = ({todoList, setTodoList, filterList, setFilterList}) => {

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

          <section className={filtersContainerClass}>

            {FILTERS.map( filter => {
              return (
              <button 
              key={v4()}
              onClick={() => setFilterList(filter.value)}
            className={filterList === filter.value ? filterSelectedClass : filterUnselectedClass}>{filter.text}</button>

            )})}

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

export default Filters