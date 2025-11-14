import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  function handleTodo(){
    if(!value.trim()){
        setValue("")
        return
    }
    addTodo(value)
    setValue("")
  }
  return (
    <div>
     <input type="text" value={value} placeholder="Enter a task" onChange={(e)=>setValue(e.target.value)}className="flex-1 border border-gray-500 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
 />
     <button onClick={handleTodo} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold mx-20 px-5 py-2 rounded-lg shadow transition-all">Add</button>
    </div>
  )
}

export default TodoForm