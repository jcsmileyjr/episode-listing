import "./todo.css";

const Todo = ({ data, numbering, scratch }) => {
  return (
    <div className="todo--container">
      <input
        id={`check-${numbering}`}
        type="checkbox"
        className="todo__checkbox--style"
        onChange={scratch}
        checked={data.done}
      />
      <label
        htmlFor={`check-${numbering}`}
        className={`${data.done ? "scratch-off" : ""}`}
      >
        {numbering + 1} || {data.content}
      </label>
    </div>
  );
};

export default Todo;
