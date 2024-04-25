import React, {useState} from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
 
  const handleAddTodo = () => {
   if (newTodo.trim() !== "") {
     setTodos([...todos, { text: newTodo.trim(), checked: false }]);
    setNewTodo("");
   }
  };
 
  const handleDeleteTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
  };
 
  const handleToggleTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].checked =  !newTodos[index].checked;
  setTodos(newTodos); 
  };


  return (
    <div>
        <h1 className="todl">To-Do List</h1>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/> 
        <button className="button" onClick={handleAddTodo}>Add</button>  
        <ul className="buttonn">
          {todos.map((todo, index) => (
            <li key={index}>
              <input 
              type="checkbox" 
              checked={todo.checked} 
              onChange={() => handleToggleTodo(index)}
              />
              <span>{todo.text}</span>
              <button  className="button" onClick={() =>handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default TodoList;