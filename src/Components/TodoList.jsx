import React from 'react'

const TodoList = ({todos, delToDo}) => {
  return (
    <ul>
      <ul className="max-w-lg mx-auto mt-6 space-y-3"></ul>
        {todos.map((item)=>(
          <li key={item.id}
            className="bg-white px-4 py-3 rounded-lg shadow-sm flex justify-between items-center hover:shadow-md transition-shadow border border-gray-100"
          >
            <span className="text-gray-800">{item.text}</span>
            <button onClick={() => delToDo(item.id)}>DEL</button>
          </li>
        ))}
    </ul>
  )
}

export default TodoList