import styles from './form.module.css'
import { useState } from 'react';
import { v4 } from 'uuid';

const Form = ({ setTodoList, todoList }) => {
  const inputClass = `${styles.task} ${styles.taskText} ${styles.input}`

  return (
    <form onSubmit={event => createNewTask(event, setTodoList, todoList)} 
    className={styles.formContainer}>
      <input
      className={inputClass}
        type='text'
        placeholder='Create a new task...'
        id='input'
        name='task'
      />
      <label htmlFor='input' className={styles.taskText}></label>
    </form>
  );
};

const createNewTask = (event, setTodoList, todoList) => {
  event.preventDefault();
  let inputText = event.target.task.value;

  let newTask = {
    id: v4(),
    name: inputText,
    completed: false
  };
  setTodoList([...todoList, newTask]);

  event.target.reset()
};

export default Form;
