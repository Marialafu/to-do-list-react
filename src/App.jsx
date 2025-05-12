import { useState } from 'react';
import Form from './components/form/Form';
import { v4 } from 'uuid';
import List from './components/list/List';

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: v4(),
      name: '',
      completed: false
    }
  ]);

  return (
    <>
      <header>
        <h1>TODO</h1>
        <img src='/assets/images/icon-sun.svg' alt='' />
      </header>
      <main>
        <section>
          <Form setTodoList={setTodoList} todoList={todoList} />

          <section>
            {todoList.map(task => {
              <List key={task.id} task={task} />;
            })}
          </section>

          <section>
            <span>0 items left</span>
            <button>Clear completed</button>
          </section>

          <section>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </section>
        </section>
      </main>
    </>
  );
};

export default App;
