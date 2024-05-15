import React from 'react'

const TodoList = ({ children }) => {
  return (
    <ul className="TodoList">
        
    {children}
            
    </ul>
  )
}

export {TodoList} 