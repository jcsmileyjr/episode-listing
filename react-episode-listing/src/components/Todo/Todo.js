import "./todo.css";

const Todo = ({ data, numbering, done }) => {
  return (
    <div className="todo--container">
      <input id={`check-${numbering}`} type="checkbox" className="todo__checkbox--style" />
      <label htmlFor={`check-${numbering}`} className={`${done?"scratch-off":""}`}>
        {numbering + 1} || {data}
      </label>
    </div>
  );
};

export default Todo;
