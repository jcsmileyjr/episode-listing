import "./todo.css";

const Todo = ({ data, numbering }) => {
  return (
    <div className="todo--container">
      <input id={`check-${numbering}`} type="checkbox" className="todo__checkbox--style" />
      <label for={`check-${numbering}`}>
        {numbering + 1} || {data}
      </label>
    </div>
  );
};

export default Todo;
