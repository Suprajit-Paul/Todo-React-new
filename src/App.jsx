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

import { useState } from "react"
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"
function App() {
   const [todos, setTodos] = useState([])

   function addTodo(text){
    setTodos([...todos, {id:Date.now(), text, completed:false}])
  }

  return (
    <>
     <div className="min-h-screen  from-blue-50 to-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Todo List</h1>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos}/>
    </div>
    </>
  )
}

export default App


