import { v4 } from 'uuid';

const Form = ({ setTodoList, todoList }) => {
  return (
    <form onSubmit={event => createNewTask(event, setTodoList, todoList)}>
      <input
        type='text'
        placeholder='Create a new task...'
        id='input'
        name='task'
      />
      <label htmlFor='input'></label>
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

  inputText = '';
};

export default Form;
