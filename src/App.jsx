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

  const [filterActive, setFilterActive] = useState('all')
  const filteredList = generateFilteredList(filterActive, todoList)

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
            {filteredList.map(task => {
              return <List key={task.id} 
              task={task} 
              todoList={todoList} 
              setTodoList={setTodoList} />;
            })}
          </section>

        <Filters todoList={todoList} setTodoList={setTodoList} filterList={filterActive} setFilterList={setFilterActive}/>
        </section>
      </main>
    </>
  );
};

const generateFilteredList = (filterActive, todoList) => {

    if (filterActive === 2){
      return todoList.filter(task => task.completed)

    }
    if (filterActive === 1){
      return todoList.filter(task => !task.completed)
    }

    return todoList

};

export default App;
