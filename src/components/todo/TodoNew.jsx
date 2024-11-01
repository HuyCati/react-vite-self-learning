const TodoNew = (props) => {
  console.log("check point: ", props);
  const { addNewToDo } = props;
//   addNewToDo("Huy");
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};

export default TodoNew;
