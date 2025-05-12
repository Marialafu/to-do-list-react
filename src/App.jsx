import { useState } from 'react';
import Form from './components/form/Form';
import { v4 } from 'uuid';
import List from './components/list/List';
import Filters from './components/filters/Filters';

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: v4(),
      name: 'Start creating a new task',
      completed: false
    }
  ]);

  return (
    <>
      <header className='header'>
        <section className='headerInfo'>
          <h1 className='title'>TODO</h1>
          <img src='/assets/images/icon-sun.svg' alt='' />
        </section>
      </header>
      <main>
        <section className='container'>
          <Form setTodoList={setTodoList} todoList={todoList} />

          <section className='tasksContainer taskText'>
            {todoList.map(task => {
              return <List key={task.id} 
              task={task} 
              todoList={todoList} 
              setTodoList={setTodoList} />;
            })}
          </section>

        <Filters todoList={todoList} setTodoList={setTodoList} />
        </section>
      </main>
    </>
  );
};

export default App;
