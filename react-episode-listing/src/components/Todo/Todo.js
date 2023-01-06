import "./todo.css";

const Todo = ({data, numbering}) => {
    return (
        <div className="todo--container">
            <p>{numbering + 1} || {data}</p>
        </div>
    )
}

export default Todo;