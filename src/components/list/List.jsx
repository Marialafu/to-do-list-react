const List = ({ task }) => {
  return (
    <div>
      <input type='checkbox' id={task.id} />
      <label htmlFor={task.id}>{task.name}</label>
      <button>x</button>
    </div>
  );
};

export default List;
