// import { useState } from "react"

// function App() {

//   const [todos, setTodos] = useState([])
//   const [value, setValue] = useState("")

//   function addTodo(){
//     if(!value.trim()){
//       setValue("")
//       return
//     }
//     setTodos([...todos, {id:Date.now(), text:value, completed:false}])
//     setValue("")

//   }
//   console.log(todos)

//   return (
//     <>
//      <h1>Todo App</h1>
//      <input type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)} />
//      {/* {console.log(value)} */}
//      <button onClick={addTodo}>Add</button>
//      <ul>
//       {
//         (()=>{
//           let item = []
//           for(let i=0; i<todos.length; i++){
//             item.push(<li key={todos[i].id}>{todos[i].text}</li>)
//           }
//           return item
//         })()
//       }
//      </ul>
//     </>
//   )
// }

// export default App

//using map
// import { useState } from "react"

// function App() {

//   const [todos, setTodos] = useState([])
//   const [value, setValue] = useState("")

//   function addTodo(){
//     if(!value.trim()){
//       setValue("")
//       return
//     }
//     setTodos([...todos, {id:Date.now(), text:value, completed:false}])
//     setValue("")

//   }
//   console.log(todos)

//   return (
//     <>
//      <h1>Todo App</h1>
//      <input type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)} />
//      {/* {console.log(value)} */}
//      <button onClick={addTodo}>Add</button>
//      <ul>
//       {
//         todos.map((item)=>(
//           <li key={item.id}>
//             {item.text}
//           </li>
//         ))
//       }
//      </ul>
//     </>
//   )
// }

// export default App

//seperate files

// import { useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"
// function App() {
//    const [todos, setTodos] = useState([])

//    function addTodo(text){
//     setTodos([...todos, {id:Date.now(), text, completed:false}])
//   }

//   return (
//     <>
//     <h1>Todo List</h1>
//     <TodoForm addTodo={addTodo}/>
//     <TodoList todos={todos}/>
//     </>
//   )
// }

//export default App

//Local Storage

// import { useEffect, useState } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// function App() {
//   //const [todos, setTodos] = useState([])

//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("task");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("task", JSON.stringify(todos));
//   },[todos]);

//   console.log(todos);

//   function addTodo(text) {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   }

//   return (
//     <>
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos}/>
//     </>
//   );
// }

// export default App;


//delete functionality

// import { useEffect, useState } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// function App() {
//   //const [todos, setTodos] = useState([])

//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("task");
//     return saved ? JSON.parse(saved) : [];
//   });


//   const delToDo = (id)=>{
//     setTodos(todos.filter((item) => item.id !== id));
//   }

//   useEffect(() => {
//     localStorage.setItem("task", JSON.stringify(todos));
//   },[todos]);

//   console.log(todos);

//   function addTodo(text) {
//     setTodos([...todos, { id: Date.now(), text, completed: false }]);
//   }

//   return (
//     <>
//       <h1>Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} delToDo = {delToDo} />
//     </>
//   );
// }

// export default App;


//delete using modal

// import { useEffect, useState } from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// import DelModal from "./components/DelModal";
// function App() {
// //const [todos, setTodos] = useState([])


// return saved ? JSON.parse(saved) : [];
// });

//   const [showModal , setShowModal] = useState(false);
//   const [toDoDelete , setToDoDelete ] = useState(null);

//   const handleDelClick = (id) => {
//     setShowModal(true);
//     setToDoDelete(id);
//   }


//   const confirmDelete = ()=>{
//     setTodos(todos.filter((item) => item.id !== toDoDelete));
//     setShowModal(false);
//     setToDoDelete(null);
//   }

//   const cancelDelete = () => {
//     setShowModal(false);
//     setToDoDelete(null);
//   } 

// useEffect(() => {
// localStorage.setItem("task", JSON.stringify(todos));
// },[todos]);

// <>
// <h1>Todo List</h1>
// <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} />
//       <TodoList todos={todos} delToDo = {handleDelClick} />
//       {showModal && <DelModal  onConfirm={confirmDelete} onCancel={cancelDelete}/>}
// </>
// );
// }

// export default App;


import { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import DelModal from "./Components/DelModal";
import EditModal from './Components/EditModal'
function App() {
  //const [todos, setTodos] = useState([])

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("task");
    return saved ? JSON.parse(saved) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [toDoDelete, setToDoDelete] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [toDoEdit, setToDoEdit] = useState(null);


  //Delete
  const handleDelClick = (id) => {
    setShowModal(true);
    setToDoDelete(id);
  }


  const confirmDelete = () => {
    setTodos(todos.filter((item) => item.id !== toDoDelete));
    setShowModal(false);
    setToDoDelete(null);
  }

  const cancelDelete = () => {
    setShowModal(false);
    setToDoDelete(null);
  }


  //Edit

  const handleEditClick = (todo) => {
    setShowEditModal(true);
    setToDoEdit(todo);
  }

  const confirmEdit = (newText) => {
  
    setTodos(
      todos.map(todo =>
        todo.id === toDoEdit.id ? { ...todo, text: newText } : todo))
          console.log(toDoEdit)

    setShowEditModal(false);
    setToDoEdit(null);
  }

const cancelEdit = () => {
    setShowEditModal(false);
    setToDoEdit(null);
  }


  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todos));
  }, [todos]);
  console.log(todos);

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  return (
    <div className="min-h-screen  from-blue-50 to-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8">Todo List</h1>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} delToDo={handleDelClick} editToDo={handleEditClick} />
      </div>

      {showModal && (
        <DelModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}


       {showEditModal && (
        <EditModal
          onConfirm={confirmEdit}
          onCancel={cancelEdit}
          currentText={toDoEdit.text}
        />
      )}


    </div>
  );

}

export default App;